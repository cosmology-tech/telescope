import { ProtoResolver, ProtoStore } from '../src/index'
import { importLookup, lookup, protoImportLookup, traverse } from '../src/utils';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

it('imports lookup', () => {
  const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
  const res = traverse(store, ref.proto);
  expect(res).toMatchSnapshot();
  console.log(JSON.stringify(res, null, 2));
});