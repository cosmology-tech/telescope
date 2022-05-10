import { TelescopeBuilder } from '../src';
import * as t from '@babel/types';
import { resolve, join, dirname, basename } from 'path';
import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser'
import { bundleBaseRegistries, bundlePackages, bundleRegistries, getPackagesBundled, parseContextsForRegistry } from '../src/bundle'
import generate from '@babel/generator';
import { TelescopeParseContext } from '../src/build';
import { writeFileSync } from 'fs';
import { sync as mkdirp } from 'mkdirp';
import { buildAllImports, getServiceDependencies } from '../src/imports';
import { expectCode } from '../test-utils/index'
import { parse } from '../src/parse';

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
        // console.log(out);
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

    it('bundle deps from a context', () => {
        const context = telescope.contexts.find(context => context.ref.filename === 'osmosis/gamm/v1beta1/tx.proto');
        const imports2 = getServiceDependencies(
            context.mutations,
            join(dirname(context.ref.filename), 'bundle.ts')
        );
        expect(imports2).toMatchSnapshot();
        console.log(imports2);

        const evenMoreImports = buildAllImports(context, imports2);
        console.log(generate(t.program(evenMoreImports)).code)
        expectCode(t.program(evenMoreImports))
    });
    it.only('bundle deps by creating a context', () => {

        const context = telescope.contexts.find(context => context.ref.filename === 'osmosis/gamm/v1beta1/tx.proto');

        // FRESH new context
        const ctx = new TelescopeParseContext(
            context.ref,
            context.store
        );

        expect(ctx.mutations.length).toBe(0);

        // get mutations, services
        parse(ctx);

        // now we have some mutations
        expect(ctx.mutations.length).toBe(8);

        // but still no imports...
        expect(ctx.amino.imports.length).toBe(0)
        expect(ctx.proto.imports.length).toBe(0)

        // now let's amino...
        ctx.buildAminoInterfaces();
        ctx.buildAminoConverter();

        // now we have amino imports
        expect(ctx.amino.imports.length).toBe(18);
        expect(ctx.proto.imports.length).toBe(0);

        console.log(ctx.amino.imports);


        const serviceImports = getServiceDependencies(
            context.mutations,
            join(dirname(context.ref.filename), 'telescope/amino-converter.ts')
        );
        expect(serviceImports).toMatchSnapshot();
        console.log(serviceImports);

        // MAKE A FAKE REF

        const ref: ProtoRef = {
            absolute: 'some/path',
            filename: 'osmosis/gamm/v1beta1/telescope/amino-converter.proto',
            proto: {},
        };
        // context.ref.filename = 'osmosis/gamm/v1beta1/amino-converter.proto';
        context.ref = ref;
        const evenMoreImports = buildAllImports(context, serviceImports);
        console.log(generate(t.program(evenMoreImports)).code)
        expectCode(t.program(evenMoreImports))

        // make AST
        const ast = t.program([...evenMoreImports, ...ctx.body])

        console.log(generate(ast).code);

    });
})





