import { getNestedProto } from '@osmonauts/proto-parser';
import { ProtoParseContext } from '@osmonauts/ast';
import { expectCode, getTestProtoStore } from '../../../test-utils';
import { createObjectWithMethods } from '../object';

const store = getTestProtoStore();
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.options.interfaces.enabled = true;
store.traverseAll();

it('MsgSubmitProposal', async () => {
    const ref = store.findProto('cosmos/gov/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgSubmitProposal', getNestedProto(ref.traversed).MsgSubmitProposal
    ))
});

// MsgCreateValidator
it('MsgCreateValidator', async () => {
    const ref = store.findProto('cosmos/staking/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgCreateValidator', getNestedProto(ref.traversed).MsgCreateValidator
    ))
});
// Google
it('Duration', async () => {
    const ref = store.findProto('google/protobuf/duration.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'Duration', getNestedProto(ref.traversed).Duration
    ))
});
// Wasm
it('MsgStoreCode', async () => {
    const ref = store.findProto('cosmwasm/wasm/v1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgStoreCode', getNestedProto(ref.traversed).MsgStoreCode
    ))
});
// IBC
it('Height', async () => {
    const ref = store.findProto('ibc/core/client/v1/client.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'Height', getNestedProto(ref.traversed).Height
    ))
});
it('MsgTransfer', async () => {
    const ref = store.findProto('ibc/applications/transfer/v1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgTransfer', getNestedProto(ref.traversed).MsgTransfer
    ))
});