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
    if (!builder.options.includeRpcClients) {
        return;
    }

    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    mutationContexts.map(c => {

        const localname = bundler.getLocalFilename(c.ref, 'rpc.msg');
        const filename = bundler.getFilename(localname);
        const ctx = bundler.getFreshContext(c);

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


        bundler.writeAst(prog, filename);
        bundler.addToBundle(c, localname);

        return {
            localname,
            filename
        };

    }).filter(Boolean);


};