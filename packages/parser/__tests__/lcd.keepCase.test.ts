import { traverse } from '../src/';
import { getNested } from '../src/utils'
import { getTestProtoStore } from '../test-utils';

const store = getTestProtoStore({
    prototypes: {
        parser: {
            keepCase: true
        }
    }
});

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

