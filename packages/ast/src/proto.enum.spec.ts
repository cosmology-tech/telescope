import { createProtoEnum, createProtoEnumFromJSON, createProtoEnumToJSON } from './proto';
import struct from '../../../__fixtures__/proto-json/google/protobuf/struct.json'
import { getNestedProto } from '@osmonauts/proto-parser';
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

it('createProtoEnum', async () => {
    printCode(createProtoEnum('NullValue', getNestedProto(struct).NullValue));
});

it('createProtoEnumFromJSON', async () => {
    printCode(createProtoEnumFromJSON('NullValue', getNestedProto(struct).NullValue));
});

it('createProtoEnumToJSON', async () => {
    printCode(createProtoEnumToJSON('NullValue', getNestedProto(struct).NullValue));
});
