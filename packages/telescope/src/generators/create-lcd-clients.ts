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

    if (!builder.options.includeLCDClients) {
        return;
    }

    const queryContexts = bundler
        .contexts
        .filter(context => context.queries.length > 0);

    // [x] write out one registry helper for all contexts w/mutations
    const lcdClients = queryContexts.map(c => {

        const localname = bundler.getLocalFilename(c.ref, 'lcd');
        const filename = bundler.getFilename(localname);
        const ctx = bundler.getFreshContext(c);

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