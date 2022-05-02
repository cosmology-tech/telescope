import { createProtoType, createCreateProtoType } from './types';
import struct from '../../../../__fixtures__/proto-json/google/protobuf/struct.json';
import authz from '../../../../__fixtures__/proto-json/cosmos/authz/v1beta1/authz.json';
import gamm from '../../../../__fixtures__/proto-json/osmosis/gamm/v1beta1/tx.json';
import generate from '@babel/generator';

import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'

const store = new ProtoStore(__dirname + '/../../../../__fixtures__/chain1');

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

it('ListValue', async () => {
    expectCode(createProtoType('ListValue', getNestedProto(struct).ListValue));
});

it('Struct', async () => {
    expectCode(createProtoType('Struct', getNestedProto(struct).Struct));
});

describe('oneofs', () => {
    it('Value', async () => {
        expectCode(createProtoType('Value', getNestedProto(struct).Value));
    });
});

it('authz', async () => {
    expectCode(createProtoType('authz',
        getNestedProto(authz).Grant
    ));
});

describe('createCreateProtoType', () => {
    it('Grant', () => {
        expectCode(createCreateProtoType('Grant',
            getNestedProto(authz).Grant
        ));
    });
    it('MsgJoinPool', () => {
        expectCode(createCreateProtoType('MsgJoinPool',
            getNestedProto(gamm).MsgJoinPool
        ));
    });
});

describe('traversed', () => {
    it('osmosis/claim/v1beta1/params', async () => {
        const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
        const res = traverse(store, ref.proto);
        expectCode(createProtoType('Params', res.root.nested.osmosis.nested.claim.nested.v1beta1.nested.Params));
    });
    it('cosmos/app/v1alpha1/config', async () => {
        const ref = store.findProto('cosmos/app/v1alpha1/config.proto');
        const res = traverse(store, ref.proto);
        const node = getNestedProto(res)
        expectCode(createProtoType('Config', node.Config));
        expectCode(createProtoType('ModuleConfig', node.ModuleConfig));
    });
    it('google/api/expr/v1alpha1/checked', async () => {
        const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
        const res = traverse(store, ref.proto);
        const node = getNestedProto(res)
        console.log(JSON.stringify(res, null, 2))
        expectCode(createProtoType('CheckedExpr', node.CheckedExpr));
        expectCode(createProtoType('Reference', node.Reference));
    });
});
