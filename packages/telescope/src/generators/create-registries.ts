import { Bundler, TelescopeBuilder } from '..';
import * as t from '@babel/types';
import { buildAllImports, getDepsFromMutations } from '../imports';
import { parse } from '../parse';
import generate from '@babel/generator';
import { writeFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { createFileBundle } from '../bundle';
import { TelescopeParseContext } from '../build';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.includeAminos) {
        bundler.registries = [];
        return;
    }

    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    // [x] write out one registry helper for all contexts w/mutations
    bundler.registries = mutationContexts.map(c => {


        const localname = c.ref.filename.replace(/\.proto$/, '.registry.ts')
        const filename = resolve(join(builder.outPath, localname));
        // FRESH new context
        const ctx = new TelescopeParseContext(
            c.ref,
            c.store,
            builder.options
        );

        // get mutations, services
        parse(ctx);

        ctx.buildRegistry();
        ctx.buildRegistryLoader();
        ctx.buildHelperObject();

        // SEE ABOVE - DONT RENAME THESE DIRECTLY
        // ctx.ref.filename = filename;

        const serviceImports = getDepsFromMutations(
            ctx.mutations,
            localname
        );

        const imports = buildAllImports(ctx, serviceImports, localname);
        const prog = []
            .concat(imports)
            .concat(ctx.body);
        const ast = t.program(prog);
        const content = generate(ast).code;
        mkdirp(dirname(filename));
        writeFileSync(filename, content);

        // add to bundle
        createFileBundle(
            c.ref.proto.package,
            localname,
            bundler.bundle.bundleFile,
            bundler.bundle.importPaths,
            bundler.bundle.bundleVariables
        );

        return {
            localname,
            filename
        };

    }).filter(Boolean);

};