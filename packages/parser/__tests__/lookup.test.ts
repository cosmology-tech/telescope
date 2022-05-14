import { ProtoResolver, ProtoStore } from '../src/index'
import { getObjectName, lookupSymbolScopes, lookup, getPackageAndNestedFromStr } from '../src/';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

// you may need to fix TRAVERSE

describe('double import bug', () => {
    store.traverseAll();
    const ref = store.findProto('ibc/core/types/v1/genesis.proto');
    it('imports/exports', () => {
        expect(ref.traversed.parsedExports).toMatchSnapshot();
        expect(ref.traversed.parsedImports).toMatchSnapshot();
        expect(ref.traversed.importNames).toMatchSnapshot();
    })
    it('GenesisState', () => {
        const GenesisState = lookup(store, ref, 'GenesisState');
        expect(GenesisState).toMatchSnapshot();
        expect(GenesisState.scope).toMatchSnapshot();
        const result1 = getObjectName('GenesisState', GenesisState.scope);
        expect(result1).toEqual('GenesisState')
    });
});

describe('proto import self', () => {
    store.traverseAll();
    const ref = store.findProto('osmosis/gamm/pool-models/balancer/balancerPool.proto');
    it('imports/exports', () => {
        expect(ref.traversed.parsedExports).toMatchSnapshot();
        expect(ref.traversed.parsedImports).toMatchSnapshot();
        expect(ref.traversed.importNames).toMatchSnapshot();
    })
});

describe('proto example', () => {
    store.traverseAll();
    // EXAMPLE: google/logging/v2/logging_metrics 
    // EXAMPLE: google/api/servicecontrol/v1/distribution
    const ref = store.findProto('google/logging/v2/logging_metrics.proto');
    it('imports/exports', () => {
        // console.log(ref.traversed.parsedExports);
        // console.log(ref.traversed.parsedImports);
        // console.log(ref.traversed.importNames);
        expect(ref.traversed.parsedExports).toMatchSnapshot();
        expect(ref.traversed.parsedImports).toMatchSnapshot();
        expect(ref.traversed.importNames).toMatchSnapshot();
    })
});

describe('name resolution', () => {
    // LookupSymbol("foo.bar", "baz.moo.corge")
    // https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.cc#L3798-L3812
    it('lookup', () => {
        // This first searches siblings of relative_to, then siblings of its
        // parents, etc. 

        // For example, LookupSymbol("foo.bar", "baz.moo.corge") makes
        // FindSymbol("baz.moo.foo.bar")
        // FindSymbol("baz.foo.bar"),
        // FindSymbol("foo.bar"). 

        const lookups = lookupSymbolScopes('foo.bar', 'baz.moo.corge');
        expect(lookups).toEqual(
            ['baz.moo.foo.bar', 'baz.foo.bar', 'foo.bar']
        )
    });
    it('correct Ledger lookup', () => {
        const lookups = lookupSymbolScopes('hd.v1.BIP44Params', 'cosmos.crypto.keyring.v1.Ledger');
        expect(lookups).toEqual(
            [
                'cosmos.crypto.keyring.v1.hd.v1.BIP44Params',
                'cosmos.crypto.keyring.hd.v1.BIP44Params',
                'cosmos.crypto.hd.v1.BIP44Params', // THIS ENDS UP BEING THE WINNER
                'cosmos.hd.v1.BIP44Params',
                'hd.v1.BIP44Params'
            ]
        )
    });
    it('fully qualified name', () => {
        const lookups = lookupSymbolScopes('.hd.v1.BIP44Params', 'cosmos.crypto.keyring.v1.Ledger');
        expect(lookups).toEqual(
            [
                'hd.v1.BIP44Params'
            ]
        )
    });
    it('bad Ledger lookup', () => {
        const lookups = lookupSymbolScopes('v1.BIP44Params', 'cosmos.crypto.keyring.v1.Ledger');
        expect(lookups).toEqual(
            [
                'cosmos.crypto.keyring.v1.v1.BIP44Params',
                'cosmos.crypto.keyring.v1.BIP44Params',
                'cosmos.crypto.v1.BIP44Params',
                'cosmos.v1.BIP44Params',
                'v1.BIP44Params'
            ]
        )
    });
    describe('package matching', () => {
        it('BIP44Params', () => {
            const t = 'cosmos.crypto.hd.v1.BIP44Params';
            const p = 'cosmos.crypto.hd.v1';
            const r = getPackageAndNestedFromStr(t, p);
            expect(r).toEqual({ "nested": "BIP44Params", "package": "cosmos.crypto.hd.v1" })
        })
        it('PoolAssets', () => {
            const t = 'osmosis.gamm.v1beta1.PoolAsset';
            const p = 'osmosis.gamm.v1beta1';
            const r = getPackageAndNestedFromStr(t, p);
            expect(r).toEqual({ "nested": "PoolAsset", "package": "osmosis.gamm.v1beta1" })
        })
        it('google.api.Distribution.BucketOptions', () => {
            const t = 'google.api.Distribution.BucketOptions';
            const p = 'google.api';
            const r = getPackageAndNestedFromStr(t, p);
            expect(r).toEqual({ "nested": "Distribution.BucketOptions", "package": "google.api" })
        })
        it('parseScope', () => {
            expect(store.parseScope(
                'google.api.Distribution.BucketOptions'
            )).toEqual(
                {
                    nested: "Distribution.BucketOptions",
                    package: "google.api"
                }
            );
            expect(store.parseScope(
                'google.api.Distribution'
            )).toEqual(
                {
                    nested: "Distribution",
                    package: "google.api"
                }
            );
            expect(store.parseScope(
                'osmosis.gamm.v1beta1.PoolAsset'
            )).toEqual(
                {
                    nested: "PoolAsset",
                    package: "osmosis.gamm.v1beta1"
                }
            );
            expect(store.parseScope(
                'cosmos.crypto.multisig.v1beta1.CompactBitArray'
            )).toEqual(
                {
                    nested: "CompactBitArray",
                    package: "cosmos.crypto.multisig.v1beta1"
                }
            );
        })
    })
})
