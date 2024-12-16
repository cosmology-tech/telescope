import { ProtoStore } from '@cosmology/proto-parser';
import { TelescopeParseContext } from './build';
import { TelescopeOptions, defaultTelescopeOptions } from '@cosmology/types';
import { toPosixPath } from '@cosmology/utils';
import { bundlePackages } from './bundle';
import { BundlerFile, TelescopeInput } from './types';
import { Bundler } from './bundler';
import deepmerge from 'deepmerge';
import { resolve } from 'path';

import { plugin as createTypes } from './generators/create-types';
import { plugin as createAminoConverters } from './generators/create-amino-converters';
import { plugin as createRegistries } from './generators/create-registries';
import { plugin as createLCDClients } from './generators/create-lcd-clients';
import { plugin as createAggregatedLCDClient } from './generators/create-aggregated-lcd-client';
import { plugin as createLCDClientsScoped } from './generators/create-lcd-client-scoped';
import { plugin as createLCDClientsAll } from './generators/create-lcd-client-all';
import { plugin as createRPCQueryClientsScoped } from './generators/create-rpc-query-client-scoped';
import { plugin as createRPCQueryClientsAll } from './generators/create-rpc-query-client-all';
import { plugin as createRPCMsgClientsScoped } from './generators/create-rpc-msg-client-scoped';
import { plugin as createRPCMsgClientsAll } from './generators/create-rpc-msg-client-all';
import { plugin as createRPCQueryClients } from './generators/create-rpc-query-clients';
import { plugin as createRPCMsgClients } from './generators/create-rpc-msg-clients';
import { plugin as createQueryFuncs } from './generators/create-query-funcs';
import { plugin as createMsgFuncs } from './generators/create-msg-funcs';
import { plugin as createReactQueryBundle } from './generators/create-react-query-bundle';
import { plugin as createMobxBundle } from './generators/create-mobx-bundle';
import { plugin as createStargateClients } from './generators/create-stargate-clients';
import { plugin as createCombinedStargateClients } from './generators/create-combined-stargate-clients';
import { plugin as createBundle } from './generators/create-bundle';
import { plugin as createIndex } from './generators/create-index';
import { plugin as createHelpers } from './generators/create-helpers';
import { plugin as createCosmWasmBundle } from './generators/create-cosmwasm-bundle';
import { plugin as createPiniaStore } from './generators/create-pinia-store';
import { plugin as createPiniaStoreBundle } from './generators/create-pinia-store-bundle';
import { plugin as createRpcOpsBundle } from './generators/create-rpc-ops-bundle';
import { plugin as customizeUtils } from './generators/customize-utils';

const sanitizeOptions = (options: TelescopeOptions): TelescopeOptions => {
  // If an element at the same key is present for both x and y, the value from y will appear in the result.
  options = deepmerge(defaultTelescopeOptions, options ?? {});
  // correct the path for windows
  if (options.cosmwasm) {
    options.cosmwasm.outPath = toPosixPath(options.cosmwasm.outPath);
    options.cosmwasm.contracts = options.cosmwasm.contracts.map(
      (item: { name: string; dir: string }) => {
        item.dir = toPosixPath(item.dir);
        return item;
      }
    );
  }
  // strip off leading slashes
  options.tsDisable.files = options.tsDisable.files.map((file) =>
    file.startsWith('/') ? file : file.replace(/^\//, '')
  );
  options.eslintDisable.files = options.eslintDisable.files.map((file) =>
    file.startsWith('/') ? file : file.replace(/^\//, '')
  );
  // uniq bc of deepmerge
  options.rpcClients.enabledServices = [
    ...new Set([...options.rpcClients.enabledServices]),
  ];
  return options;
};

export class TelescopeBuilder {
  store: ProtoStore;
  protoDirs: string[];
  outPath: string;
  options: TelescopeOptions;
  contexts: TelescopeParseContext[] = [];
  files: string[] = [];

  readonly converters: BundlerFile[] = [];
  readonly lcdClients: BundlerFile[] = [];
  readonly rpcQueryClients: BundlerFile[] = [];
  readonly rpcMsgClients: BundlerFile[] = [];
  readonly registries: BundlerFile[] = [];
  readonly stateManagers: Record<string, BundlerFile[]> = {};

  constructor({
    protoDirs,
    outPath,
    store,
    options,
  }: TelescopeInput & { store?: ProtoStore }) {
    const fixedDirs = protoDirs.map((directory) => {
      return toPosixPath(directory);
    });
    this.protoDirs = fixedDirs;
    this.outPath = resolve(toPosixPath(outPath));
    this.options = sanitizeOptions(options);
    this.store = store ?? new ProtoStore(fixedDirs, this.options);
    this.store.traverseAll();
  }

  context(ref) {
    const ctx = new TelescopeParseContext(ref, this.store, this.options);
    this.contexts.push(ctx);
    return ctx;
  }

  addStateManagers(type: string, files: BundlerFile[]) {
    const state = this.stateManagers[type];

    if (!state) {
      this.stateManagers[type] = [];
    }

    [].push.apply(this.stateManagers[type], files);
  }

  addRPCQueryClients(files: BundlerFile[]) {
    [].push.apply(this.rpcQueryClients, files);
  }

  addRPCMsgClients(files: BundlerFile[]) {
    [].push.apply(this.rpcMsgClients, files);
  }

  addLCDClients(files: BundlerFile[]) {
    [].push.apply(this.lcdClients, files);
  }

  addRegistries(files: BundlerFile[]) {
    [].push.apply(this.registries, files);
  }

  addConverters(files: BundlerFile[]) {
    [].push.apply(this.converters, files);
  }

  async build() {
    // check warnings
    if (
      !this.options.aminoEncoding?.enabled &&
      (this.options.prototypes?.methods?.fromAmino ||
        this.options.prototypes?.methods?.toAmino)
    ) {
      console.warn(
        "There could be compilation errors in generated code, because 'aminoEncoding.enabled: false' means amino types wouldn't be created, but 'toAmino' or 'fromAmino' need amino types."
      );
    }

    if (!this.options.prototypes.methods.fromPartial) {
      console.warn(
        "The 'fromPartial' option will be deprecated in a future version. Encoder objects need fromPartial to be a creator function to create instance of the type. So it should always be left on, otherwise there could be compilation errors in generated code."
      );
    }

    customizeUtils(this);

    const allConverters = [];
    const allRegistries = [];
    // [x] get bundle of all packages
    const bundles = bundlePackages(this.store).map((bundle) => {
      // store bundleFile in filesToInclude
      const bundler = new Bundler(this, bundle);

      // [x] write out all TS files for package
      createTypes(this, bundler);

      // [x] write out one amino helper for all contexts w/mutations
      createAminoConverters(this, bundler);

      // [x] write out one registry helper for all contexts w/mutations
      createRegistries(this, bundler);

      // [x] write out one registry helper for all contexts w/mutations
      createLCDClients(this, bundler);

      createQueryFuncs(this, bundler);
      createRPCQueryClients(this, bundler);
      createMsgFuncs(this, bundler);
      createRPCMsgClients(this, bundler);
      createPiniaStore(this, bundler);

      // [x] write out one client for each base package, referencing the last two steps
      createStargateClients(this, bundler);
      if (bundler.registries) {
        allRegistries.push(...bundler.registries)
      }
      if (bundler.converters) {
        allConverters.push(...bundler.converters)

      }
      return bundler;
    });

    if (this.options.rpcClients.combinedClient && this.options.rpcClients.combinedClient.length !== 0) {
      createCombinedStargateClients(this, allRegistries, allConverters)
    }

    // post run plugins
    bundles.forEach((bundler) => {
      createLCDClientsAll(this, bundler);
      createLCDClientsScoped(this, bundler);
      createRPCQueryClientsAll(this, bundler);
      createRPCQueryClientsScoped(this, bundler);
      createRPCMsgClientsAll(this,bundler);
      createRPCMsgClientsScoped(this, bundler);
      createBundle(this, bundler);
    });

    createRpcOpsBundle(this);
    createReactQueryBundle(this);
    createMobxBundle(this);
    createAggregatedLCDClient(this);
    await createCosmWasmBundle(this);

    createHelpers(this);
    createPiniaStoreBundle(this);

    // finally, write one index file with all files, exported
    createIndex(this);

    console.log(`✨ files transpiled in '${this.outPath}'`);
  }
}
