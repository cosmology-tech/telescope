import { TelescopeBuilder } from '../src/builder';
import { TelescopeOptions } from '@osmonauts/types';
import { bundleBaseRegistries, bundleRegistries, parseContextsForRegistry } from '../src/bundle'
import { TelescopeInput } from '../src';
import { getTestProtoStore } from '../test-utils';
import { TelescopeParseContext } from '../src/build';

const outPath = __dirname + '/../../../__fixtures__/v-next/outputv3';
const store = getTestProtoStore();
const contractsDir = __dirname + '/../../../__fixtures__/wasm/';
store.traverseAll();

const options: TelescopeOptions = {

    env: 'v-next',
    removeUnusedImports: false,
    classesUseArrowFunctions: false,

    tsDisable: {
        disableAll: false,
        patterns: [
            'osmosis/**/*amino.ts',
        ],
        files: [
            'akash/deployment/v1beta1/deployment.ts'
        ]
    },

    eslintDisable: {
        disableAll: false,
        patterns: [
            'akash/**/*amino.ts',
        ],
        files: [
            'akash/deployment/v1beta1/deployment.ts'
        ]
    },

    interfaces: {
        enabled: true,
        useUnionTypes: false
    },
    aminoEncoding: {
        enabled: true,
        useRecursiveV2encoding: true
    },
    prototypes: {
        enabled: true,
        parser: {
            keepCase: false
        },
        addAminoTypeToObjects: true,
        addTypeUrlToObjects: true,

        methods: {
            encode: true,
            decode: true,
            fromJSON: true,
            toJSON: true,
            fromPartial: true,
            toSDK: true,
            fromSDK: true,
            //
            toAmino: true,
            fromAmino: true,
            fromProto: true,
            toProto: true
        },
        includePackageVar: true,
        fieldDefaultIsOptional: false,
        useOptionalNullable: true,
        allowUndefinedTypes: false,
        excluded: {
            protos: [
                'cosmos/authz/v1beta1/event.proto'
            ]
        },
        typingsFormat: {
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

    rpcClients: {
        type: 'grpc-gateway',
        enabled: true,
        camelCase: true
    },

    websocket: {
        enabled: false,
    },

    reactQuery: {
        enabled: false,
        include: {
            patterns: [
                'osmosis/**/gamm/**/query.proto'
            ],
            protos: [
                'akash/cert/v1beta2/query.proto'
            ],
            packages: [
                'cosmos.bank.v1beta1',
                'cosmos.gov.v1beta1',
                'evmos.erc20.v1'
            ]
        }
    },
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
        const result = registries.map(reg => ({
            ['package']: reg.package,
            contexts: parseContextsForRegistry(reg.contexts as TelescopeParseContext[])
        }))
        // console.log(JSON.stringify(result, null, 2));
    });

    it('bundleBaseRegistries', () => {
        const registries = bundleBaseRegistries(telescope);
        const result = registries.map(reg => ({
            base: reg.base,
            pkgs: reg.pkgs.map(
                obj => {
                    return {
                        ['package']: obj.package,
                        contexts: parseContextsForRegistry(obj.contexts as TelescopeParseContext[])
                    }
                }
            )
        }));
        // console.log(JSON.stringify(result, null, 2));
    });
})





