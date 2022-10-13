import { TelescopeBuilder } from '../src/builder';
import { TelescopeOptions } from '@osmonauts/types';
import { bundleBaseRegistries, bundleRegistries, parseContextsForRegistry } from '../src/bundle'
import { TelescopeInput } from '../src';
import { getTestProtoStore2 } from '../test-utils';

const outPath = __dirname + '/../../../__fixtures__/output2';
const store = getTestProtoStore2();
store.traverseAll();

const options: TelescopeOptions = {
    useSDKTypes: false,
    removeUnusedImports: false,
    tsDisable: {
        disableAll: true
    },
    eslintDisable: {
        disableAll: true
    },
    bundle: {
        enabled: false
    },
    prototypes: {
        includePackageVar: true,
        excluded: {
            protos: [
                'cosmos/authz/v1beta1/event.proto',
                'cosmos/base/reflection/v2alpha1/reflection.proto',
                'cosmos/crypto/secp256r1/keys.proto',
                'ibc/core/port/v1/query.proto',
                'ibc/lightclients/solomachine/v2/solomachine.proto',
                'tendermint/libs/bits/types.proto',
                'google/api/httpbody.proto',
                'tendermint/blockchain/types.proto',
                'tendermint/consensus/types.proto',
                'tendermint/consensus/wal.proto',
                'tendermint/mempool/types.proto',
                'tendermint/p2p/conn.proto',
                'tendermint/p2p/pex.proto',
                'tendermint/privval/types.proto',
                'tendermint/rpc/grpc/types.proto',
                'tendermint/state/types.proto',
                'tendermint/statesync/types.proto',
                'tendermint/store/types.proto',
                'tendermint/types/canonical.proto',
                'tendermint/types/events.proto',
            ]
        },
        methods: {
            fromJSON: true,
            toJSON: true
        },
        typingsFormat: {
            timestamp: 'timestamp',
            duration: 'duration'
        }
    },
    lcdClients: {
        enabled: false
    },
    rpcClients: {
        enabled: true,
        inline: true,
        extensions: false,
        camelCase: false
    },
    aminoEncoding: {
        enabled: false
    }
};

const input: TelescopeInput = {
    outPath,
    protoDirs: [
        __dirname + '/../../../__fixtures__/chain2',
        __dirname + '/../../../__fixtures__/chain1'
    ],
    options
};

const telescope = new TelescopeBuilder(input);

describe('bundle package registries and root file names', () => {
    it('bundleRegistries', async () => {
        await telescope.build();
        const registries = bundleRegistries(telescope);
        const result = registries.map(reg => ({
            ['package']: reg.package,
            contexts: parseContextsForRegistry(reg.contexts)
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
                        contexts: parseContextsForRegistry(obj.contexts)
                    }
                }
            )
        }));
        // console.log(JSON.stringify(result, null, 2));
    });
})





