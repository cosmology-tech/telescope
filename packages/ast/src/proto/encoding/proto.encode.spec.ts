import { createProtoObjectWithMethods } from './encoding';
import struct from '../../../../../__fixtures__/proto-json/google/protobuf/struct.json';
import authz from '../../../../../__fixtures__/proto-json/cosmos/authz/v1beta1/authz.json';
import gamm from '../../../../../__fixtures__/proto-json/osmosis/gamm/v1beta1/tx.json';
import sign from '../../../../../__fixtures__/proto-json/cosmos/tx/signing/v1beta1/signing.json';
import tx from '../../../../../__fixtures__/proto-json/cosmos/tx/v1beta1/tx.json';
import wasm from '../../../../../__fixtures__/proto-json/cosmwasm/wasm/v1/query.json'
import wasmprops from '../../../../../__fixtures__/proto-json/cosmwasm/wasm/v1/proposal.json';
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

it('MsgJoinPool', async () => {
  expectCode(createProtoObjectWithMethods(
    'MsgJoinPool',
    getNestedProto(gamm).MsgJoinPool)
  );
});

it('SignatureDescriptors', async () => {
  expectCode(createProtoObjectWithMethods(
    'SignatureDescriptors',
    getNestedProto(sign).SignatureDescriptors)
  );
});

it('AuxSignerData', async () => {
  expectCode(createProtoObjectWithMethods(
    'AuxSignerData',
    getNestedProto(tx).AuxSignerData)
  );
});

it('PinCodesProposal', async () => {
  expectCode(createProtoObjectWithMethods(
    'PinCodesProposal',
    getNestedProto(wasmprops).PinCodesProposal)
  );
});

it('UnPinCodesProposal', async () => {
  expectCode(createProtoObjectWithMethods(
    'UnPinCodesProposal',
    getNestedProto(wasmprops).UnPinCodesProposal)
  );
});

it('QueryRawContractStateRequest', async () => {
  expectCode(createProtoObjectWithMethods(
    'QueryRawContractStateRequest',
    getNestedProto(wasm).QueryRawContractStateRequest)
  );
});

it('generatesNums', () => {
  for (let i = 0; i < 100; i++) {
    console.log(`${i} >>> 3 => ${i >>> 3}`)
  }
})