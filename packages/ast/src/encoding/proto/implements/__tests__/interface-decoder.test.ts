import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceDecoder } from '../decoder';

const store = getTestProtoStore();
store.traverseAll();

describe('osmosis/gamm/v1beta1/tx.proto', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('MsgJoinPool', () => {
        // getNestedProto(ref.traversed).MsgJoinPool)
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