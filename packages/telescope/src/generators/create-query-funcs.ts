import { buildAllImports, getDepsFromQueries } from '../imports';
import { Bundler } from '../bundler';
import {
    createRpcQueryExtension,
    createRpcClientClass,
    createRpcClientInterface,
    createRpcQueryHookInterfaces,
    createRpcQueryHookClientMap,
    createRpcQueryHooks,
    // grpc-gateway:
    createGRPCGatewayQueryClass,
    createGRPCGatewayWrapperClass,
    //grpc-web:
    createGrpcWebQueryClass,
    createGrpcWebQueryInterface,
    createMobxQueryStores,
    GetDesc,
    getMethodDesc,
    grpcWebRpcInterface,
    getGrpcWebImpl,
    createRpcClientImpl,
} from '@cosmology/ast';
import { getNestedProto, isRefIncluded } from '@cosmology/proto-parser';
import { parse } from '../parse';
import { TelescopeBuilder } from '../builder';
import { ProtoRoot, ProtoService } from '@cosmology/types';
import { camel, getQueryMethodNames, swapKeyValue } from '@cosmology/utils';
import { BundlerFile } from '../types';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    const clients = bundler.contexts.map(c => {

        const enabled = c.proto.pluginValue('helperFuncCreators.enabled');
        if (!enabled) return;

        if (c.proto.isExcluded()) return;

        const ctx = bundler.getFreshContext(c);

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed as ProtoRoot);

        //// Anything except Msg Service OK...
        if (proto?.Msg) {
          return;
        }

        let getImportsFrom;

        if(proto.Query) {
          getImportsFrom = ctx.queries;
        } else {
          getImportsFrom = ctx.services;
        }

        const localname = bundler.getLocalFilename(c.ref, `rpc.func`);
        const filename = bundler.getFilename(localname);

        const bundlerFile: BundlerFile = {
            proto: c.ref.filename,
            package: c.ref.proto.package,
            localname,
            filename
        };

        const asts = [];

        // TODO:: see if the function is excluded.

        // TODO:: gen helper funcs

        const genCustomHooks = c.proto.pluginValue('helperFuncCreators.genCustomHooks');

        if(genCustomHooks) {
          // TODO:: gen custom hooks
        }

        if (!asts.length) {
            return;
        }

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

        return bundlerFile;

    }).filter(Boolean);
};