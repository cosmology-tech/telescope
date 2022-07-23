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

    bundler.contexts.map(c => {

        // FRESH new context
        const ctx = new TelescopeParseContext(
            c.ref,
            c.store,
            builder.options
        );

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed);

        let name, getImportsFrom;
        if (
            (!proto?.Query ||
                proto.Query?.type !== 'Service') &&
            (!proto?.Service ||
                proto.Service?.type !== 'Service')
        ) {
            return;
        }


        if (proto.Query) {
            name = 'query';
            getImportsFrom = ctx.queries;
        } else if (proto.Service) {
            name = 'svc';
            getImportsFrom = ctx.services;
        }


        const localname = c.ref.filename.replace(/\.proto$/, `.rpc.${name}.ts`)
        const filename = resolve(join(builder.outPath, localname));

        const asts = [];
        if (proto.Query) {
            asts.push(createRpcClientInterface(ctx.generic, proto.Query))
            asts.push(createRpcClientClass(ctx.generic, proto.Query))
        }
        if (proto.Service) {
            asts.push(createRpcClientInterface(ctx.generic, proto.Service))
            asts.push(createRpcClientClass(ctx.generic, proto.Service))
        }
        ////////

        const serviceImports = getDepsFromQueries(
            getImportsFrom,
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