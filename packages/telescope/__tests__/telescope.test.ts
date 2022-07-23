import { TelescopeBuilder } from '../src';
import { ProtoStore } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { bundleBaseRegistries, bundleRegistries, parseContextsForRegistry } from '../src/bundle'

const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);
store.traverseAll();

const input = {
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDirs: [__dirname + '/../../../__fixtures__/chain1'],
    options: {
        ...defaultTelescopeOptions,
        includeLCDClients: true,
        includePackageVar: true
    }
};

const telescope = new TelescopeBuilder(input);
telescope.build();

describe('bundle package registries and root file names', () => {
    it('bundleRegistries', () => {
        const registries = bundleRegistries(telescope);
        const result = registries.map(reg => ({
            ['package']: reg.package,
            contexts: parseContextsForRegistry(reg.contexts)
        }))
        // console.log(JSON.stringify(result, null, 2));
    });

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
    });
})





