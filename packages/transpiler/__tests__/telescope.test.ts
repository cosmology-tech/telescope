import { TelescopeBuilder } from '../src';
import * as t from '@babel/types';

import { ProtoStore } from '@osmonauts/proto-parser'
import { bundlePackages, getPackagesBundled } from '../src/bundle'
import generate from '@babel/generator';

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

const input = {
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
};
const telescope = new TelescopeBuilder(input);

it('telescope', () => {
    // console.log(telescope);
    const hash = telescope.buildAll();
    hash.forEach(({ filename, content }) => {
        console.log(filename)
    })
})
