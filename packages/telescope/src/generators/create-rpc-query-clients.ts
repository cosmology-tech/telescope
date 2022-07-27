import { buildAllImports, getDepsFromQueries } from '../imports';
import { Bundler } from '../bundler';
import { createRpcClientClass, createRpcClientInterface } from '@osmonauts/ast';
import { getNestedProto } from '@osmonauts/proto-parser';
import { parse } from '../parse';
import { TelescopeBuilder } from '../builder';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    // if (!builder.options.rpcClients.enabled) {
    //     return;
    // }

    const clients = bundler.contexts.map(c => {

        const enabled = c.proto.pluginValue('rpcClients.enabled');
        if (!enabled) return;

        const ctx = bundler.getFreshContext(c);

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

        const localname = bundler.getLocalFilename(c.ref, `rpc.${name}`);
        const filename = bundler.getFilename(localname);

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

        bundler.writeAst(prog, filename);
        bundler.addToBundle(c, localname);

        return {
            package: c.ref.proto.package,
            localname,
            filename
        };

    }).filter(Boolean);

    bundler.addRPCQueryClients(clients);
};