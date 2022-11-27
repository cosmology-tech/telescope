import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createSDKType, createProtoType } from '..';
import { createAminoType } from '../amino';

const store = getTestProtoStore();
store.traverseAll();

describe('MsgSend', () => {
    const ref = store.findProto('cosmos/bank/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('amino interface', () => {
        expectCode(createAminoType(context, 'MsgSend',
            getNestedProto(ref.traversed).MsgSend
        ));
    });
});

describe('PageRequest', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('interface', () => {
        expectCode(createAminoType(context, 'PageRequest',
            getNestedProto(ref.traversed).PageRequest
        ));
    });
});

describe('PageResponse', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('interface', () => {
        expectCode(createAminoType(context, 'PageResponse',
            getNestedProto(ref.traversed).PageResponse
        ));
    });
});

describe('cosmos/auth/v1beta1/auth.proto', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/auth.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('BaseAccount', () => {
        expectCode(createAminoType(context, 'BaseAccount',
            getNestedProto(ref.traversed).BaseAccount
        ));
    });
});

describe('GenesisState', () => {
    const ref = store.findProto('cosmos/auth/v1beta1/genesis.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('interface', () => {
        expectCode(createAminoType(context, 'GenesisState',
            getNestedProto(ref.traversed).GenesisState
        ));
    });
});

describe('cosmos/authz/v1beta1/authz.proto', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('Grant', () => {
        expectCode(createAminoType(context, 'Grant',
            getNestedProto(ref.traversed).Grant
        ));
    });
    it('GrantAuthorization', () => {
        expectCode(createAminoType(context, 'GrantAuthorization',
            getNestedProto(ref.traversed).GrantAuthorization
        ));
    });
});

describe('cosmos/authz/v1beta1/query.proto', () => {
    const ref = store.findProto('cosmos/authz/v1beta1/query.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('QueryGrantsRequest', () => {
        expectCode(createAminoType(context, 'QueryGrantsRequest',
            getNestedProto(ref.traversed).QueryGrantsRequest
        ));
    });
});

describe('confio/proofs.proto', () => {
    const ref = store.findProto('confio/proofs.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    it('ExistenceProof', () => {
        expectCode(createAminoType(context, 'ExistenceProof',
            getNestedProto(ref.traversed).ExistenceProof
        ));
    });
});