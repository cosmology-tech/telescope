import { ProtoStore } from '../src/index'
import { traverse } from '../src/';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
import { getNested } from '../src/utils'

it('Record', () => {
    const ref = store.findProto('osmosis/gamm/v1beta1/query.proto');
    const res = traverse(store, ref);
    const v1beta1 = getNested(res, [
        'osmosis',
        'gamm',
        'v1beta1'
    ]);
    expect(v1beta1).toMatchSnapshot();
});

