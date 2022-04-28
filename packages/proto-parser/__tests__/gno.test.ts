import { ProtoResolver, ProtoStore } from '../src/index'
import { importLookup, lookup, protoImportLookup } from '../src/utils';
const store = new ProtoStore(__dirname + '/../../../__fixtures__/gno');
const parser = new ProtoResolver(store.getDeps())
it('deps', () => {
    expect(parser).toMatchSnapshot();
});

it('ref', () => {
    const ref = store.findProto('github.com/gnolang/gno/pkgs/crypto/multisig/multisig.proto');
    expect(ref).toMatchSnapshot();
});
