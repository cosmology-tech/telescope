import { Bundler, TelescopeBuilder } from '..';
import * as t from '@babel/types';
import { buildAllImports, getDepsFromQueries } from '../imports';
import { parse } from '../parse';
import generate from '@babel/generator';
import { writeFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { createFileBundle } from '../bundle';
import { TelescopeParseContext } from '../build';
import { getNestedProto } from '@osmonauts/proto-parser';
import {
    createLCDClient,
} from '@osmonauts/ast';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.includeLCDClients) {
        return;
    }

    const queryContexts = bundler
        .contexts
        .filter(context => context.queries.length > 0);

    // [x] write out one registry helper for all contexts w/mutations
    queryContexts.map(c => {

        const localname = c.ref.filename.replace(/\.proto$/, '.lcd.ts')
        const filename = resolve(join(builder.outPath, localname));
        // FRESH new context

        const ctx = new TelescopeParseContext(
            c.ref,
            c.store,
            builder.options
        );

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed);
        // hard-coding, for now, only Query service
        if (!proto?.Query || proto.Query?.type !== 'Service') {
            return;
        }

        const lcdAst = createLCDClient(ctx.generic, proto.Query);

        if (!lcdAst) {
            return;
        }

        const serviceImports = getDepsFromQueries(
            ctx.queries,
            localname
        );

        const imports = buildAllImports(ctx, serviceImports, localname);
        const prog = []
            .concat(imports)
            .concat(ctx.body)
            .concat(lcdAst);
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