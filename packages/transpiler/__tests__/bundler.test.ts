import { TelescopeBuilder } from '../src';
import { ProtoStore } from '@osmonauts/proto-parser'
import { getPackagesBundled } from '../src/bundle'

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

const telescope = new TelescopeBuilder({
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
});

it('bundle', () => {
    const bundle = getPackagesBundled(store);
    console.log(bundle);
});
