import { importLookup, protoImportLookup, traverse } from '../../src';
import { getTestProtoStore } from '../../test-utils';
const store = getTestProtoStore();

it('google/api/expr/v1alpha1/checked', () => {
    const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
    const res = traverse(store, ref);
    expect(res).toMatchSnapshot();

    const Empty = protoImportLookup(store, ref, 'google.protobuf.Empty');
    expect(Empty).toMatchSnapshot();
    const Constant = importLookup(store, ref, 'Constant');
    expect(Constant).toMatchSnapshot();
});

