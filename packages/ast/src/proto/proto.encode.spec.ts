import { createProtoObjectWithMethods } from './encoding';
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

it('createProtoObjectWithMethods', async () => {
    printCode(createProtoObjectWithMethods('MsgJoinPool', getNestedProto(gamm).MsgJoinPool));
});
