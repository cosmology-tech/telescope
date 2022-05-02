import { ProtoResolver, ProtoStore } from '../src/index'
import { importLookup, lookup, protoImportLookup, traverse } from '../src/utils';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

it('google/api/expr/v1alpha1/checked', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
    const res = traverse(store, ref.proto);
    expect(res).toMatchSnapshot();

    const Empty = protoImportLookup(store, ref.proto, 'google.protobuf.Empty');
    expect(Empty).toMatchSnapshot();
    const Constant = importLookup(store, ref.proto, 'Constant');
    expect(Constant).toMatchSnapshot();
});

