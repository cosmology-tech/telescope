import { getNestedProto } from '@osmonauts/proto-parser';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceDecoder } from '../decoder';

const store = getTestProtoStore();
store.options.prototypes.implementsAcceptsAny = true;
store.traverseAll();

describe('osmosis/gamm/v1beta1/tx.proto', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('PoolI', () => {
        // getNestedProto(ref.traversed).MsgJoinPool)
        console.log(ref.traversed);
        expect(ref.traversed.acceptsInterface).toEqual({
            PoolI: [
                'QueryPoolResponse',
                'QueryPoolsResponse',
                'QueryPoolsWithFilterResponse'
            ]
        })
        expectCode(createInterfaceDecoder(
            context,
            'PoolI_InterfaceDecoder',
            {
                Pool2: '/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool',
                Pool1: '/osmosis.gamm.v1beta1.Pool'
            }
        ));
    });
});