import { createProtoInterface } from './proto';
import struct from '../../../__fixtures__/proto-json/google/protobuf/struct.json'

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


it('createEnum', async () => {
    console.log(struct.root.nested.google.nested.protobuf.nested.NullValue);
    // printCode(createEnum('NullValue', struct.root.nested.google.nested.protobuf.nested.NullValue));
});