import { buildAllImports, getDepsFromQueries } from '../imports';
import { Bundler } from '../bundler';
import { getNestedProto } from '@osmonauts/proto-parser';
import { parse } from '../parse';
import { TelescopeBuilder } from '../builder';
import {
    createLCDClient,
} from '@osmonauts/ast';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!builder.options.lcdClients.enabled) {
        return;
    }

    const queryContexts = bundler
        .contexts
        .filter(context =>
            context.queries.length > 0 ||
            context.services.length > 0
        );

    // [x] write out one registry helper for all contexts w/mutations
    const lcdClients = queryContexts.map(c => {

        const enabled = c.proto.pluginValue('lcdClients.enabled');
        if (!enabled) return;

        if (c.proto.isExcluded()) return;

        const ctx = bundler.getFreshContext(c);

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed);

        if (
            (!proto?.Query ||
                proto.Query?.type !== 'Service') &&
            (!proto?.Service ||
                proto.Service?.type !== 'Service')
        ) {
            return;
        }

        let name, getImportsFrom;

        // both Query and Service
        if (proto.Query) {
            name = 'query';
            getImportsFrom = ctx.queries;
        } else if (proto.Service) {
            name = 'svc';
            getImportsFrom = ctx.services;
        }

        const localname = bundler.getLocalFilename(c.ref, 'lcd');
        const filename = bundler.getFilename(localname);

        let ast = null;
        if (proto.Query) {
            ast = createLCDClient(ctx.generic, proto.Query);
        }
        if (proto.Service) {
            ast = createLCDClient(ctx.generic, proto.Service);
        }

        if (!ast) {
            return;
        }

        const serviceImports = getDepsFromQueries(
            getImportsFrom,
            localname
        );

        const imports = buildAllImports(ctx, serviceImports, localname);
        const prog = []
            .concat(imports)
            .concat(ctx.body)
            .concat(ast);

        bundler.writeAst(prog, filename);
        bundler.addToBundle(c, localname);

        return {
            // TODO use this to build LCD aggregators with scopes
            package: c.ref.proto.package,
            localname,
            filename
        };

    }).filter(Boolean);

    bundler.addLCDClients(lcdClients);

};