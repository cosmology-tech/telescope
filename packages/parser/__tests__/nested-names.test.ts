import { ProtoStore } from '../src/index'
import { traverse } from '../src/';
import * as dotty from 'dotty';

const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);

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
