import { buildAllImports, getDepsFromQueries } from '../imports';
import { Bundler } from '../bundler';
import { createRpcClientClass, createRpcClientInterface, createGRPCGatewayMsgClass, GetDesc, getMethodDesc, grpcWebRpcInterface, createGrpcWebMsgInterface, createGrpcWebMsgClass, getGrpcWebImpl, createRpcClientImpl } from '@cosmology/ast';
import { getNestedProto } from '@cosmology/proto-parser';
import { parse } from '../parse';
import { TelescopeBuilder } from '../builder';
import { camel, getQueryMethodNames, swapKeyValue } from '@cosmology/utils';
import { BundlerFile } from 'src/types';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    const clients = mutationContexts.map(c => {

        const enabled = c.proto.pluginValue('helperFuncCreators.enabled');
        if (!enabled) return;

        if (c.proto.isExcluded()) return;

        const localname = bundler.getLocalFilename(c.ref, 'rpc.func');
        const filename = bundler.getFilename(localname);
        const ctx = bundler.getFreshContext(c);

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed);
        // hard-coding, for now, only Msg service
        if (!proto?.Msg || proto.Msg?.type !== 'Service') {
            return;
        }


        const asts = [];
        const bundlerFile: BundlerFile = {
          proto: c.ref.filename,
          package: c.ref.proto.package,
          localname,
          filename,
          isMsg: true
        };

        // TODO:: see if the function is excluded.

        // TODO:: gen helper funcs
        const genCustomHooks = c.proto.pluginValue('helperFuncCreators.genCustomHooks');

        if(genCustomHooks) {
          // TODO:: gen custom hooks
        }

        const serviceImports = getDepsFromQueries(
            ctx.mutations,
            localname
        );

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
};