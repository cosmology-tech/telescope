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
    // if (!builder.options.rpcClients.enabled) {
    //     return;
    // }
    const instantRpcBundlerFiles: {
      [key: string]: BundlerFile[]
    } = {};

    const mutationContexts = bundler
        .contexts
        .filter(context => context.mutations.length > 0);

    const clients = mutationContexts.map(c => {

        const enabled = c.proto.pluginValue('rpcClients.enabled');
        if (!enabled) return;

        const inline = c.proto.pluginValue('rpcClients.inline');
        if (inline) return;

        if (c.proto.isExcluded()) return;

        const useCamelCase = c.proto.pluginValue("rpcClients.camelCase");

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
        const bundlerFile: BundlerFile = {
          proto: c.ref.filename,
          package: c.ref.proto.package,
          localname,
          filename,
          isMsg: true
        };
        switch (c.proto.pluginValue("rpcClients.type")) {
            case 'grpc-gateway':
                asts.push(createGRPCGatewayMsgClass(ctx.generic, proto.Msg))
                break;
            case 'grpc-web':
                asts.push(createGrpcWebMsgInterface(ctx.generic, proto.Msg))
                asts.push(createGrpcWebMsgClass(ctx.generic, proto.Msg))
                asts.push(GetDesc(ctx.generic, proto.Msg))
                const Desces = getMethodDesc(ctx.generic, proto.Msg);
                for (let i = 0; i < Desces.length; i++) {
                    const element = Desces[i];
                    asts.push(element);
                }
                asts.push(grpcWebRpcInterface())
                asts.push(getGrpcWebImpl(ctx.generic))
                break;
            case 'tendermint':
            default:
                asts.push(createRpcClientInterface(ctx.generic, proto.Msg))

                const svc = proto.Msg;
                const instantOps = c.options.rpcClients?.instantOps ?? [];

                instantOps.forEach((item) => {
                  let nameMapping = {
                    ...swapKeyValue(item.nameMapping?.All ?? {}),
                    ...swapKeyValue(item.nameMapping?.Msg ?? {})
                  };

                  // get all query methods
                  const patterns = item.include?.patterns;
                  const serviceTypes = item.include?.serviceTypes;

                  if(serviceTypes && !serviceTypes.includes("Tx")){
                    return
                  }

                  const methodKeys = getQueryMethodNames(
                    bundlerFile.package,
                    Object.keys(svc.methods ?? {}),
                    patterns,
                    useCamelCase ? camel : String
                  );

                  if(!methodKeys || !methodKeys.length){
                    return
                  }

                  asts.push(
                    createRpcClientInterface(
                      ctx.generic,
                      svc,
                      item.className,
                      methodKeys,
                      nameMapping
                    )
                  );

                  bundlerFile.instantExportedMethods = methodKeys.map((key) => svc.methods[key]);

                  if(!instantRpcBundlerFiles[item.className]){
                    instantRpcBundlerFiles[item.className] = [];
                  }

                  instantRpcBundlerFiles[item.className].push({...bundlerFile});
                });

                asts.push(createRpcClientClass(ctx.generic, proto.Msg))

                const env = c.proto.pluginValue('env');
                if(env === 'v-next'){
                  asts.push(createRpcClientImpl(ctx.generic, svc));
                }
        }

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
            package: c.ref.proto.package,
            localname,
            filename
        };

    }).filter(Boolean);

    bundler.addRPCMsgClients(clients);

    Object.keys(instantRpcBundlerFiles).forEach((className)=>{
      bundler.addStateManagers(`instantRpc_${className}`, instantRpcBundlerFiles[className]);
    })
};