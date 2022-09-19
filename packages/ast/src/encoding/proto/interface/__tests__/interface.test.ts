import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { expectCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createSDKType, createProtoType } from '..';

const store = getTestProtoStore();
store.traverseAll();

describe('MsgSend', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('interface', () => {
        expectCode(createProtoType(context, 'MsgSend',
            getNestedProto(ref.traversed).MsgSend
        ));
    });
    it('api interface', () => {
        expectCode(createSDKType(context, 'MsgSend',
            getNestedProto(ref.traversed).MsgSend
        ));
    });
    // it('interface', () => {
    //     expectCode(createObjectWithMethods(context, 'MsgSend',
    //         getNestedProto(ref.traversed).MsgSend
    //     ));
    // });
});