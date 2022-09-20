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

describe('PageRequest', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('interface', () => {
        expectCode(createProtoType(context, 'PageRequest',
            getNestedProto(ref.traversed).PageRequest
        ));
    });
    it('api interface', () => {
        expectCode(createSDKType(context, 'PageRequest',
            getNestedProto(ref.traversed).PageRequest
        ));
    });
});

describe('PageResponse', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('interface', () => {
        expectCode(createProtoType(context, 'PageResponse',
            getNestedProto(ref.traversed).PageResponse
        ));
    });
    it('api interface', () => {
        expectCode(createSDKType(context, 'PageResponse',
            getNestedProto(ref.traversed).PageResponse
        ));
    });
});