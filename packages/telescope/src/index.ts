import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeParseContext } from './build';
import { TelescopeOptions, defaultTelescopeOptions } from '@osmonauts/types';
import { bundlePackages } from './bundle';
import deepmerge from 'deepmerge';

import { plugin as createTypes } from './generators/create-types';
import { plugin as createAminoConverters } from './generators/create-amino-converters';
import { plugin as createRegistries } from './generators/create-registries';
import { plugin as createLCDClients } from './generators/create-lcd-clients';
import { plugin as createRPCQueryClients } from './generators/create-rpc-query-clients';
import { plugin as createRPCMsgClients } from './generators/create-rpc-msg-clients';
import { plugin as createStargateClients } from './generators/create-stargate-clients';
import { plugin as createBundle } from './generators/create-bundle';
import { plugin as createIndex } from './generators/create-index';
export interface TelescopeInput {
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
}

export interface Bundle {
    bundleVariables: {};
    bundleFile: string;
    importPaths: any[];
    base: string;
}
export class Bundler {
    contexts: TelescopeParseContext[] = [];
    bundle: Bundle;
    files: string[];
    converters: any[];
    registries: any[];

    constructor(bundle: Bundle) {
        this.bundle = bundle;
        this.files = [
            bundle.bundleFile
        ]
    }
}

export class TelescopeBuilder {
    store: ProtoStore;
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
    contexts: TelescopeParseContext[] = [];
    files: string[] = [];

    constructor({ protoDirs, outPath, store, options }: TelescopeInput & { store?: ProtoStore }) {
        this.protoDirs = protoDirs;
        this.outPath = outPath;
        this.options = deepmerge(defaultTelescopeOptions, options ?? {});
        this.store = store ?? new ProtoStore(protoDirs);
        this.store.traverseAll();
    }

    context(ref) {
        const ctx = new TelescopeParseContext(
            ref, this.store, this.options
        );
        this.contexts.push(ctx);
        return ctx;
    }


    build() {
        // [x] get bundle of all packages
        bundlePackages(this.store)
            .forEach(bundle => {
                // store bundleFile in filesToInclude
                const bundler = new Bundler(bundle);

                // [x] write out all TS files for package
                createTypes(this, bundler);

                // [x] write out one amino helper for all contexts w/mutations
                createAminoConverters(this, bundler);

                // [x] write out one registry helper for all contexts w/mutations
                createRegistries(this, bundler);

                // [x] write out one registry helper for all contexts w/mutations
                createLCDClients(this, bundler);
                createRPCQueryClients(this, bundler);
                createRPCMsgClients(this, bundler);

                // [x] write out one client for each base package, referencing the last two steps
                createStargateClients(this, bundler);

                createBundle(this, bundler);
            });

        // finally, write one index file with all files, exported
        createIndex(this);
    }
}

export default (input: TelescopeInput) => {
    const builder = new TelescopeBuilder(input);
    builder.build();
};

