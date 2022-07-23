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
    createRpcClientClass,
    createRpcClientInterface,
} from '@osmonauts/ast';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    if (!builder.options.includeRpcClients) {
        return;
    }

    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    mutationContexts.map(c => {

        const localname = c.ref.filename.replace(/\.proto$/, '.rpc.msg.ts')
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
        // hard-coding, for now, only Msg service
        if (!proto?.Msg || proto.Msg?.type !== 'Service') {
            return;
        }

        ////////
        const asts = [];
        asts.push(createRpcClientInterface(ctx.generic, proto.Msg))
        asts.push(createRpcClientClass(ctx.generic, proto.Msg))
        ////////

        const serviceImports = getDepsFromQueries(
            ctx.mutations,
            localname
        );

        // TODO we do NOT need all imports...
        const imports = buildAllImports(ctx, serviceImports, localname);
        const prog = []
            .concat(imports)
            .concat(ctx.body)
            .concat(asts);

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