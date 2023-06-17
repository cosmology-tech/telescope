import { getNestedProto } from '@osmonauts/proto-parser';
import { expectCode, getTestProtoStore } from '../../../../../test-utils'
import { ProtoParseContext } from '../../../context';
import { createSDKType, createProtoType, createProtoInterfaceEncodedType } from '..';
import { createAminoType } from '../amino';

const store = getTestProtoStore();
store.options.interfaces.enabled = true;
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.traverseAll();

describe('cosmos/gov/v1beta1/tx.proto', () => {
    const ref = store.findProto('cosmos/gov/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('createProtoType', () => {
        expectCode(createProtoType(context, 'MsgSubmitProposal',
            getNestedProto(ref.traversed).MsgSubmitProposal
        ));
    });
    it('createProtoInterfaceEncodedType', () => {
        expectCode(createProtoInterfaceEncodedType(context, 'MsgSubmitProposal',
            getNestedProto(ref.traversed).MsgSubmitProposal
        ));
    });
});
