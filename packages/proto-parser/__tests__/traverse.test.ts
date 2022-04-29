import { ProtoResolver, ProtoStore } from '../src/index'
import { importLookup, lookup, protoImportLookup, traverse } from '../src/utils';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

it('osmosis/claim/v1beta1/params', () => {
  const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});

// it('google/protobuf/struct', () => {
//   const ref = store.findProto('google/protobuf/struct.proto');
//   const res = traverse(store, ref.proto);
//   expect(res).toMatchSnapshot();
// });

it('cosmos/authz/v1beta1/authz', () => {
  const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});

it('osmosis/gamm/v1beta1/tx', () => {
  const ref = store.findProto('osmosis/gamm/v1beta1/tx.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});

it('cosmos/tx/signing/v1beta1/signing', () => {
  const ref = store.findProto('cosmos/tx/signing/v1beta1/signing.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});

it('cosmos/tx/v1beta1/tx', () => {
  const ref = store.findProto('cosmos/tx/v1beta1/tx.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});

it('cosmwasm/wasm/v1/proposal', () => {
  const ref = store.findProto('cosmwasm/wasm/v1/proposal.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});

it('cosmwasm/wasm/v1/query', () => {
  const ref = store.findProto('cosmwasm/wasm/v1/query.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
});
