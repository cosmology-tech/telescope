import { TelescopeBuilder } from '../src';
import * as t from '@babel/types';
import { resolve, join, dirname, basename } from 'path';
import { ProtoStore } from '@osmonauts/proto-parser'
import { bundleBaseRegistries, bundlePackages, bundleRegistries, getPackagesBundled, parseContextsForRegistry } from '../src/bundle'
import generate from '@babel/generator';
import { TelescopeParseContext } from '../src/build';
import { writeFileSync } from 'fs';
import { sync as mkdirp } from 'mkdirp';

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

const input = {
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
};
const telescope = new TelescopeBuilder(input);

describe('bundle package registries and root file names', () => {
    // console.log(telescope);
    const hash = telescope.buildAll();
    const outPath = resolve(input.outPath);
    hash.forEach(({ filename, content }) => {
        const out = join(outPath, filename);
        console.log(out);
        mkdirp(dirname(out));
        writeFileSync(out, content);
    })
    it('bundleRegistries', () => {
        const registries = bundleRegistries(telescope);
        const result = registries.map(reg => ({
            ['package']: reg.package,
            contexts: parseContextsForRegistry(reg.contexts)
        }))
        // console.log(JSON.stringify(result, null, 2));
    })

    it('bundleBaseRegistries', () => {
        const registries = bundleBaseRegistries(telescope);
        const result = registries.map(reg => ({
            base: reg.base,
            pkgs: reg.pkgs.map(
                obj => {
                    return {
                        ['package']: obj.package,
                        contexts: parseContextsForRegistry(obj.contexts)
                    }
                }
            )
        }));
        // console.log(JSON.stringify(result, null, 2));

    })
})

