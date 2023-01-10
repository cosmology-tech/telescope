import { getNestedProto } from '@osmonauts/proto-parser';
import { expectCode, getTestProtoStore } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createAminoTypeType } from '../amino';

const store = getTestProtoStore();
store.traverseAll();

describe('MsgSend', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('amino interface', () => {
        expectCode(createAminoTypeType(context, 'MsgSend',
            getNestedProto(ref.traversed).MsgSend
        ));
    });
});

describe('PageRequest', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('interface', () => {
        expectCode(createAminoTypeType(context, 'PageRequest',
            getNestedProto(ref.traversed).PageRequest
        ));
    });
});

describe('PageResponse', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('interface', () => {
        expectCode(createAminoTypeType(context, 'PageResponse',
            getNestedProto(ref.traversed).PageResponse
        ));
    });
});

describe('cosmos/auth/v1beta1/auth.proto', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/auth.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('BaseAccount', () => {
        expectCode(createAminoTypeType(context, 'BaseAccount',
            getNestedProto(ref.traversed).BaseAccount
        ));
    });
});

describe('GenesisState', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/genesis.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('interface', () => {
        expectCode(createAminoTypeType(context, 'GenesisState',
            getNestedProto(ref.traversed).GenesisState
        ));
    });
});

describe('cosmos/authz/v1beta1/authz.proto', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('Grant', () => {
        expectCode(createAminoTypeType(context, 'Grant',
            getNestedProto(ref.traversed).Grant
        ));
    });
    it('GrantAuthorization', () => {
        expectCode(createAminoTypeType(context, 'GrantAuthorization',
            getNestedProto(ref.traversed).GrantAuthorization
        ));
    });
});

describe('cosmos/authz/v1beta1/query.proto', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/query.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('QueryGrantsRequest', () => {
        expectCode(createAminoTypeType(context, 'QueryGrantsRequest',
            getNestedProto(ref.traversed).QueryGrantsRequest
        ));
    });
});

describe('confio/proofs.proto', () => {
    const ref = store.findProto('confio/proofs.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('ExistenceProof', () => {
        expectCode(createAminoTypeType(context, 'ExistenceProof',
            getNestedProto(ref.traversed).ExistenceProof
        ));
    });
});

describe('osmosis/gamm/v1beta1/tx.proto', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    it('MsgJoinPool', () => {
        expectCode(createAminoTypeType(context, 'MsgJoinPool',
            getNestedProto(ref.traversed).MsgJoinPool
        ));
    });
});