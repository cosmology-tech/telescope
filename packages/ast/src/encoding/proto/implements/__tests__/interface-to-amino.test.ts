import { InterfaceTypeUrlMap } from '@osmonauts/types';
import { expectCode, printCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createInterfaceToAmino, createInterfaceToAminoHelper } from '../to-amino';

const store = getTestProtoStore();
store.options.interfaces.enabled = true;
store.options.aminoEncoding.enabled = true;
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.traverseAll();

const typeMap: InterfaceTypeUrlMap = {
    ProposalContentI: [
        {
            ref: 'a/b/c.proto',
            pkg: 'a.b.c',
            types: [
                {
                    typeUrl: '/cosmos.gov.v1beta1.TextProposal',
                    aminoType: 'cosmos-sdk/TextProposal',
                    type: 'TextProposal',
                    importAs: 'TextProposal'
                }
            ]
        }
    ]
};

describe('ProposalContent', () => {
    const txRef = store.findProto('cosmos/gov/v1/tx.proto');
    const txContext = new ProtoParseContext(txRef, store, store.options);
    it('ProposalContent helper', () => {
        expectCode(createInterfaceToAminoHelper(
            txContext,
            'ProposalContentI_toAmino',
            typeMap['ProposalContentI']
        ));
    });
    it('ProposalContent', () => {
        expectCode(createInterfaceToAmino(
            txContext,
            txRef,
            'ProposalContentI',
        ));
    });
});

describe('MsgCreateValidator', () => {
    const ref = store.findProto('cosmos/staking/v1beta1/tx.proto');
    const ctx = new ProtoParseContext(ref, store, store.options);
    it('MsgCreateValidator', () => {
        expectCode(createInterfaceToAmino(
            ctx,
            ref,
            'cosmos.crypto.PubKey',
        ));
    });
});