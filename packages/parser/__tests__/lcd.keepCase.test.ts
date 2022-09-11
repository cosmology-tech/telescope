import { ProtoStore } from '../src/index'
import { traverse } from '../src/';
import { getNested } from '../src/utils'
import { parseService, parseServiceUrl } from '../src/services'

const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);
store.options.prototypes.parser.keepCase = true;

it('queries', () => {
    const ref = store.findProto('cosmos/staking/v1beta1/query.proto');
    const res = traverse(store, ref);
    const v1beta1 = getNested(res, [
        'cosmos',
        'staking',
        'v1beta1'
    ]);
    expect(v1beta1).toMatchSnapshot();
});

