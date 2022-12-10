import { expectCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceDecoder, createInterfaceDecoderHelper } from '../decoder';

const store = getTestProtoStore();
store.options.prototypes.implementsAcceptsAny = true;
store.traverseAll();

describe('PoolI', () => {
    const queryRef = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const queryContext = new ProtoParseContext(queryRef, store, store.options);
    it('getMapFromTypeUrlMap', () => {
        expectCode(createInterfaceDecoder(queryContext, queryRef, 'PoolI'));
    });
    it('PoolI', () => {
        expectCode(createInterfaceDecoderHelper(
            queryContext,
            'PoolI_InterfaceDecoder',
            {
                Pool2: '/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool',
                Pool1: '/osmosis.gamm.v1beta1.Pool'
            }
        ));
    });
});