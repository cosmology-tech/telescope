import { getNestedProto } from '@osmonauts/proto-parser';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceDecoder } from '../decoder';

const store = getTestProtoStore();
store.options.prototypes.implementsAcceptsAny = true;
store.traverseAll();

describe('PoolI', () => {
    const queryRef = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const balancerRef = store.findProto('osmosis/gamm/pool-models/balancer/balancerPool.proto');
    const stableswapRef = store.findProto('osmosis/gamm/pool-models/stableswap/stableswap_pool.proto');
    const queryContext = new ProtoParseContext(queryRef, store, store.options);
    it('PoolI', () => {
        // getNestedProto(ref.traversed).MsgJoinPool)
        // console.log(queryRef.traversed);
        // console.log(queryRef.traversed);
        console.log(balancerRef.traversed);
        expect(queryRef.traversed.acceptsInterface).toEqual({
            PoolI: [
                'QueryPoolResponse',
                'QueryPoolsResponse',
                'QueryPoolsWithFilterResponse'
            ]
        })
        expectCode(createInterfaceDecoder(
            queryContext,
            'PoolI_InterfaceDecoder',
            {
                Pool2: '/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool',
                Pool1: '/osmosis.gamm.v1beta1.Pool'
            }
        ));
    });
});