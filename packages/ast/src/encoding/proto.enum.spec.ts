import {
    createProtoEnum,
    createProtoEnumFromJSON,
    createProtoEnumToJSON
} from './enums';
import struct from '../../../../__fixtures__/proto-json/google/protobuf/struct.json'
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
    expectCode(createProtoEnum('NullValue', getNestedProto(struct).NullValue));
});

it('createProtoEnumFromJSON', async () => {
    expectCode(createProtoEnumFromJSON('NullValue', getNestedProto(struct).NullValue));
});

it('createProtoEnumToJSON', async () => {
    expectCode(createProtoEnumToJSON('NullValue', getNestedProto(struct).NullValue));
});