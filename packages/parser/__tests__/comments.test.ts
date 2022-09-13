import { traverse } from '../src/';
import { getTestProtoStore } from '../test-utils';
const store = getTestProtoStore();

it('cosmos/base/query/v1beta1/pagination', () => {
    const ref = store.findProto('cosmos/base/query/v1beta1/pagination.proto');
    const res = traverse(store, ref);
    expect(res).toMatchSnapshot();
});

it('google/rpc/code', () => {
    const ref = store.findProto('google/rpc/code.proto');
    const res = traverse(store, ref);
    expect(res).toMatchSnapshot();
});
