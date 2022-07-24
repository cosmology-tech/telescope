import { TelescopeBuilder } from '../src/builder';
import { ProtoStore } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions } from '@osmonauts/types';
import { bundleBaseRegistries, bundleRegistries, parseContextsForRegistry } from '../src/bundle'
import { TelescopeInput } from '../src';
import { kebab } from "case";

const store = new ProtoStore([__dirname + '/../../../__fixtures__/chain1']);
store.traverseAll();

const input: TelescopeInput = {
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDirs: [__dirname + '/../../../__fixtures__/chain1'],
    options: {
        ...defaultTelescopeOptions,
        includeLCDClients: true,
        includePackageVar: true,
        includeRpcClients: false,
        aminoExceptions: {
            '/akash.audit.v1beta2.MsgSignProviderAttributes': {
                aminoType: 'mymessage-testonly'
            }
        },
        aminoTypeUrl: (typeUrl: string) => {
            const name = typeUrl.replace(/^\//, '');
            const elements = name.split('.');
            const pkg = elements[0];

            switch (pkg) {
                case 'akash': {
                    const n = elements
                        .filter(a => !a.match(/v1beta1/));
                    n[n.length - 1] = kebab(n[n.length - 1]);
                    n[n.length - 1] = n[n.length - 1].replace(/^msg-/, 'testonly-');
                    return n.join('/');
                }
            }
        }
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





