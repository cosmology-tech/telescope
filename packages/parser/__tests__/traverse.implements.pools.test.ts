import { ProtoRef, TraversedProtoRoot } from '@osmonauts/types';
import { ProtoStore } from '../src';
import { getTestProtoStore } from '../test-utils';

const createTypeUrlTypeMapForInterface = (store: ProtoStore, name: string) => {
    return store.getProtos().reduce((m, ref) => {
        if (
            ref.traversed?.acceptsInterface
        ) {
            Object.keys(ref.traversed.acceptsInterface).forEach(key => {
                // const msgs = ref.traversed?.acceptsInterface[key];

            });
        }
        if (
            ref.traversed?.implementsInterface
        ) {
            Object.keys(ref.traversed.implementsInterface).forEach(key => {
                // const msgs = ref.traversed?.implementsInterface[key];
                console.log(key, ref.filename);
            });
        }
        return m;
    }, {});
};

describe('PoolI', () => {
    const store = getTestProtoStore();
    // @ts-ignore
    store.options.prototypes.implementsAcceptsAny = true;
    store.traverseAll();
    const queryRef = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const balancerRef = store.findProto('osmosis/gamm/pool-models/balancer/balancerPool.proto');
    const stableswapRef = store.findProto('osmosis/gamm/pool-models/stableswap/stableswap_pool.proto');

    it('balancerRef', () => {
        expect(balancerRef.traversed?.implementsInterface).toEqual({
            PoolI: ['Pool']
        })
    });
    it('stableswapRef', () => {
        expect(stableswapRef.traversed?.implementsInterface).toEqual({
            PoolI: ['Pool']
        })
    });
    it('queryRef', () => {
        expect(queryRef.traversed?.acceptsInterface).toEqual({
            PoolI: [
                'QueryPoolResponse',
                'QueryPoolsResponse',
                'QueryPoolsWithFilterResponse'
            ]
        })
    });
    it('createMap', () => {
        createTypeUrlTypeMapForInterface(store, 'PoolI');
    });
});