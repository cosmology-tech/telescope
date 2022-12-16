import { getNestedProto } from '@osmonauts/proto-parser';
import { ProtoParseContext } from '@osmonauts/ast';
import { expectCode, getTestProtoStore, defaultTelescopeOptions } from '../../../../test-utils';
import { createObjectWithMethods } from '../../object';

const store = getTestProtoStore();
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.options.prototypes.implementsAcceptsAny = true;
store.traverseAll();

it('MsgSubmitProposal', async () => {
    const ref = store.findProto('cosmos/gov/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createObjectWithMethods(
        context,
        'MsgSubmitProposal', getNestedProto(ref.traversed).MsgSubmitProposal
    ))
});