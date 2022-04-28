import { createProtoType } from './proto';
import struct from '../../../__fixtures__/proto-json/google/protobuf/struct.json'
import authz from '../../../__fixtures__/proto-json/cosmos/authz/v1beta1/authz.json'

import generate from '@babel/generator';

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
    expectCode(createProtoType('ListValue', struct.root.nested.google.nested.protobuf.nested.ListValue));
});

it('Struct', async () => {
    expectCode(createProtoType('Struct', struct.root.nested.google.nested.protobuf.nested.Struct));
});

describe('oneofs', () => {
    it('Value', async () => {
        expectCode(createProtoType('Value', struct.root.nested.google.nested.protobuf.nested.Value));
    });
});


it('authz', async () => {
    expectCode(createProtoType('authz',
        authz.root.nested.cosmos.nested.authz.nested.v1beta1.nested.Grant
    ));
});

