import { ProtoResolver, ProtoStore } from '@osmonauts/proto-parser'
const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
const resolver = new ProtoResolver(store.getDeps());

it('all', () => {
    const all = resolver.resolveAll();
    console.log(all);
});