import { Bundler, TelescopeBuilder } from '..';
import * as t from '@babel/types';
import { buildAllImports, getDepsFromMutations } from '../imports';
import { parse } from '../parse';
import generate from '@babel/generator';
import { writeFileSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { createFileBundle } from '../bundle';
import { TelescopeParseContext } from '../build';
import {
    AminoParseContext
} from '@osmonauts/ast';
import { camel } from '@osmonauts/utils';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.includeAminos) {
        bundler.converters = [];
        return;
    }

    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    bundler.converters = mutationContexts.map(c => {

        const localname = c.ref.filename.replace(/\.proto$/, '.amino.ts');
        const filename = resolve(join(builder.outPath, localname));

        // FRESH new context
        const ctx = new TelescopeParseContext(
            c.ref,
            c.store,
            builder.options
        );

        // BEGIN PLUGIN CODE HERE
        const amino = new AminoParseContext(
            c.ref, c.store, builder.options
        );
        if (bundler.bundle.base === 'osmosis') {
            amino.options = {
                aminoCasingFn: camel
            }
        }
        ctx.amino = amino;
        // END PLUGIN CODE HERE

        // get mutations, services
        parse(ctx);

        // now let's amino...
        ctx.buildAminoInterfaces();
        ctx.buildAminoConverter();

        const serviceImports = getDepsFromMutations(
            ctx.mutations,
            localname
        );

        // build file
        // DONT RENAME THE REF! you'll need to make a new one!
        // OR ELSE LATER the other build will use this name!
        // ctx.ref.filename = filename;
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