import { expectCode, printCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceFromAminoHelper } from '../from-amino';

const store = getTestProtoStore();
store.options.prototypes.implementsAcceptsAny = true;
store.options.aminoEncoding.enabled = true;
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.traverseAll();

describe('ProposalContent', () => {
    const txRef = store.findProto('cosmos/gov/v1/tx.proto');
    const txContext = new ProtoParseContext(txRef, store, store.options);
    it('ProposalContent', () => {
        expectCode(createInterfaceFromAminoHelper(
            txContext,
            'ProposalContentI_fromAmino'
        ));
    });
});