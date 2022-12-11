import { traverse } from '../../src';
import * as dotty from 'dotty';
import { getTestProtoStore } from '../../test-utils';

const store = getTestProtoStore();

it('google/rpc/error_details', () => {
    const ref = store.findProto('google/rpc/error_details.proto');
    const res = traverse(store, ref);
    const obj = dotty.get(res, 'root.nested.google.nested.rpc.nested.PreconditionFailure');
    expect(obj.fields.violations.scope).toEqual(
        [
            "google.rpc",
            "PreconditionFailure"
        ]
    );
    expect(obj).toMatchSnapshot();
});
