import { ProtoStore } from '../src/index'
import { traverse } from '../src/';
import { getNested } from '../src/utils'
import { ProtoRef } from '../types';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');

const getAllRefs = (store: ProtoStore, ref: ProtoRef) => {
    const importRefs = ref.proto.imports?.map(imp => store.findProto(imp)) ?? [];
    return importRefs.reduce((m, v) => {
        return [...m, ...getAllRefs(store, v)]
    }, importRefs);
};

it('Akash', () => {
    const ref = store.findProto('akash/deployment/v1beta2/service.proto');
    const res = traverse(store, ref);
    const v1beta2 = getNested(res, [
        'akash',
        'deployment',
        'v1beta2',
    ]);
    expect(v1beta2).toMatchSnapshot();
});
