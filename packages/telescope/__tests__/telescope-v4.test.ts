import { TelescopeBuilder } from '../src/builder';
import { TelescopeOptions } from '@osmonauts/types';
import {
  bundleBaseRegistries,
  bundleRegistries,
  parseContextsForRegistry
} from '../src/bundle';
import { TelescopeInput } from '../src';
import { kebab } from 'case';
import { join } from 'path';
import { getTestProtoStore } from '../test-utils';
import { TelescopeParseContext } from '../src/build';

const outPath = __dirname + '/../../../__fixtures__/v-next/outputv4';
const store = getTestProtoStore();
store.traverseAll();

const options: TelescopeOptions = {

  env: 'v-next',
  removeUnusedImports: false,
  classesUseArrowFunctions: false,

  tsDisable: {
    disableAll: false,
    patterns: ['osmosis/**/*amino.ts'],
    files: ['akash/deployment/v1beta1/deployment.ts']
  },

  eslintDisable: {
    disableAll: false,
    patterns: ['akash/**/*amino.ts'],
    files: ['akash/deployment/v1beta1/deployment.ts']
  },

  interfaces: {
    enabled: false,
    useUnionTypes: false
  },

  prototypes: {
    enabled: true,
    parser: {
      keepCase: false
    },
    methods: {
      encode: true,
      decode: true,
      fromJSON: true,
      toJSON: true,
      fromPartial: true,
      toSDK: true,
      fromSDKJSON: true,
      fromSDK: true
    },
    includePackageVar: true,
    fieldDefaultIsOptional: false,
    useOptionalNullable: true,
    allowUndefinedTypes: false,
    excluded: {
      packages: [
        // 'cosmos.gov.v1',
        // 'cosmos.group.v1'
      ],
      protos: ['cosmos/authz/v1beta1/event.proto']
    },
    typingsFormat: {
      customTypes: {
        useCosmosSDKDec: true
      },
      longLibrary: 'bigint',
      useDeepPartial: true,
      useExact: false,
      timestamp: 'date',
      duration: 'duration'
    }
  },

  bundle: {
    enabled: true
  },

  stargateClients: {
    enabled: true,
    includeCosmosDefaultTypes: true
  },

  aggregatedLCD: {
    dir: 'osmosis',
    filename: 'agg-lcd.ts',
    packages: ['cosmos.bank.v1beta1', 'osmosis.gamm.v1beta1'],
    addToBundle: true
  },

  lcdClients: {
    enabled: true,
    scopedIsExclusive: false,
    scoped: [
      {
        dir: 'osmosis',
        filename: 'custom-lcd-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'osmosis.gamm.v1beta1'
        ],
        addToBundle: true,
        methodName: 'createCustomLCDClient'
      },
      {
        dir: 'evmos',
        filename: 'custom-lcd-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'evmos.erc20.v1'
        ],
        addToBundle: true,
        methodName: 'createEvmosLCDClient'
      }
    ]
  },

  rpcClients: {
    enabled: true,
    camelCase: true,
    scopedIsExclusive: false,
    scoped: [
      {
        dir: 'cosmos',
        filename: 'cosmos-rpc-client.ts',
        packages: ['cosmos.bank.v1beta1', 'cosmos.gov.v1beta1'],
        addToBundle: true,
        methodNameQuery: 'createCosmicRPCQueryClient',
        methodNameTx: 'createCosmicRPCTxClient'
      },
      {
        dir: 'evmos',
        filename: 'evmos-rpc-client.ts',
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'evmos.erc20.v1'
        ],
        addToBundle: true,
        methodNameQuery: 'createEvmosRPCQueryClient',
        methodNameTx: 'createEvmosRPCTxClient'
      }
    ],
    enabledServices: [
      'Msg',
      'Query',
      'Service',
      'ReflectionService',
      'ABCIApplication'
    ]
  },

  reactQuery: {
    enabled: true,
    include: {
      patterns: ['osmosis/**/gamm/**/query.proto'],
      protos: ['akash/cert/v1beta2/query.proto'],
      packages: ['cosmos.bank.v1beta1']
    }
  },

  mobx: {
    enabled: true,
    include: {
      patterns: ['osmosis/**/gamm/**/query.proto'],
      protos: ['akash/cert/v1beta2/query.proto'],
      packages: ['cosmos.gov.v1beta1']
    }
  },

  pinia: {
    enabled: true,
    include: {
      patterns: ['osmosis/**/gamm/**/query.proto'],
      protos: ['akash/cert/v1beta2/query.proto'],
      packages: ['evmos.erc20.v1']
    }
  },

  aminoEncoding: {
    enabled: true,
    exceptions: {
      '/akash.audit.v1beta2.MsgSignProviderAttributes': {
        aminoType: 'mymessage-testonly'
      }
    },
    typeUrlToAmino: (typeUrl: string) => {
      const name = typeUrl.replace(/^\//, '');
      const elements = name.split('.');
      const pkg = elements[0];

      switch (pkg) {
        case 'akash': {
          const n = elements.filter((a) => !a.match(/v1beta1/));
          n[n.length - 1] = kebab(n[n.length - 1]);
          n[n.length - 1] = n[n.length - 1].replace(/^msg-/, 'testonly-');
          return n.join('/');
        }
      }
    },
    useRecursiveV2encoding: false
  },
  packages: {
    akash: {
      classesUseArrowFunctions: true,
      deployment: {
        v1beta1: {
          prototypes: {
            allowUndefinedTypes: true,
            typingsFormat: {
              useDeepPartial: false
            }
          },
          aminoEncoding: {
            enabled: false
          },
          rpcClients: {
            inline: true
          }
        }
      },
      prototypes: {
        typingsFormat: {
          useExact: true
        }
      }
    }
  }
};

const input: TelescopeInput = {
  outPath,
  protoDirs: [__dirname + '/../../../__fixtures__/chain1'],
  options
};

const telescope = new TelescopeBuilder(input);

describe('bundle package registries and root file names', () => {
  it('bundleRegistries', async () => {
    await telescope.build();
    const registries = bundleRegistries(telescope);
    const result = registries.map((reg) => ({
      ['package']: reg.package,
      contexts: parseContextsForRegistry(
        reg.contexts as TelescopeParseContext[]
      )
    }));
    // console.log(JSON.stringify(result, null, 2));
  });

  it('bundleBaseRegistries', () => {
    const registries = bundleBaseRegistries(telescope);
    const result = registries.map((reg) => ({
      base: reg.base,
      pkgs: reg.pkgs.map((obj) => {
        return {
          ['package']: obj.package,
          contexts: parseContextsForRegistry(
            obj.contexts as TelescopeParseContext[]
          )
        };
      })
    }));
    // console.log(JSON.stringify(result, null, 2));
  });
});
