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
import { getQueryMethodNames, swapKeyValue } from '@cosmology/utils';
import { BundlerFile } from '../types';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    const instantRpcBundlerFiles: {
      [key: string]: BundlerFile[]
    } = {};
    const reactQueryBundlerFiles = [];
    const mobxBundlerFiles = [];

    const clients = bundler.contexts.map(c => {

        const enabled = c.proto.pluginValue('rpcClients.enabled');
        if (!enabled) return;

        const inline = c.proto.pluginValue('rpcClients.inline');
        if (inline) return;

        if (c.proto.isExcluded()) return;

        const ctx = bundler.getFreshContext(c);

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed as ProtoRoot);

        //// Anything except Msg Service OK...
        const allowedRpcServices = builder.options.rpcClients?.enabledServices?.filter(a => a !== 'Msg') ?? [];
        const found = allowedRpcServices.some(svc => {
            return proto?.[svc] &&
                proto[svc]?.type === 'Service'
        });

        if (!found) {
            return;
        }
        ///

        let name, getImportsFrom;

        allowedRpcServices.forEach(svcKey => {
            if (proto[svcKey]) {
                if (svcKey === 'Query') {
                    getImportsFrom = ctx.queries;
                } else {
                    getImportsFrom = ctx.services;
                }
                name = svcKey;
            }
        });

        const localname = bundler.getLocalFilename(c.ref, `rpc.${name}`);
        const filename = bundler.getFilename(localname);

        const bundlerFile: BundlerFile = {
            proto: c.ref.filename,
            package: c.ref.proto.package,
            localname,
            filename
        };

        const asts = [];

        switch (c.proto.pluginValue('rpcClients.type')) {
            case 'grpc-gateway':
                allowedRpcServices.forEach(svcKey => {
                    if (proto[svcKey]) {
                        const svc: ProtoService = proto[svcKey];
                        asts.push(createGRPCGatewayQueryClass(ctx.generic, svc));
                        asts.push(createGRPCGatewayWrapperClass(ctx.generic, svc));
                    }
                })
                break;
            case 'grpc-web':
                allowedRpcServices.forEach(svcKey => {
                    if (proto[svcKey]) {
                        const svc: ProtoService = proto[svcKey];

                        asts.push(createGrpcWebQueryInterface(ctx.generic, svc));
                        asts.push(createGrpcWebQueryClass(ctx.generic, svc));

                        // add descriptor for grpc-web
                        asts.push(GetDesc(ctx.generic, proto[svcKey]))
                        const Desces = getMethodDesc(ctx.generic, proto[svcKey]);
                        for (let i = 0; i < Desces.length; i++) {
                            const element = Desces[i];
                            asts.push(element);
                        }
                        asts.push(grpcWebRpcInterface())
                        asts.push(getGrpcWebImpl(ctx.generic))

                        /* Added the sameway as Tendermint implement, if modify below then modify this one too */
                        // see if current file has been reactQuery enabled and included
                        const includeReactQueryHooks = c.proto.pluginValue('reactQuery.enabled') && isRefIncluded(
                            c.ref,
                            c.proto.pluginValue('reactQuery.include')
                        )

                        if (includeReactQueryHooks) {
                            [].push.apply(asts, createRpcQueryHookInterfaces(ctx.generic, svc));
                            [].push.apply(asts, createRpcQueryHookClientMap(ctx.generic, svc));
                            asts.push(createRpcQueryHooks(ctx.generic, proto[svcKey]));

                            // get all query methods
                            const patterns = c.proto.pluginValue('reactQuery.instantExport.include.patterns');
                            bundlerFile.instantExportedMethods = getQueryMethodNames(bundlerFile.package, Object.keys(proto[svcKey].methods ?? {}), patterns).map((key)=> proto[svcKey].methods[key]);

                            reactQueryBundlerFiles.push(bundlerFile);
                        }

                        // whether mobx plugin is enabled has been dealt with inside createMobxQueryStores
                        const mobxQueryStoreAst = createMobxQueryStores(
                            ctx.generic,
                            proto[svcKey]
                        );

                        if (mobxQueryStoreAst) {
                            asts.push(mobxQueryStoreAst);
                            mobxBundlerFiles.push(bundlerFile);
                        }
                    }
                })
                break;
            case 'tendermint':
            default:
                allowedRpcServices.forEach(svcKey => {
                    if (proto[svcKey]) {

                        const svc: ProtoService = proto[svcKey];

                        asts.push(createRpcClientInterface(ctx.generic, svc));

                        const instantOps = c.options.rpcClients?.instantOps ?? [];

                        instantOps.forEach((item) => {
                          let nameMapping = item.nameMapping;

                          nameMapping = swapKeyValue(nameMapping ?? {});

                          // get all query methods
                          const patterns = item.include?.patterns;
                          const methodKeys = getQueryMethodNames(
                            bundlerFile.package,
                            Object.keys(proto[svcKey].methods ?? {}),
                            patterns,
                            (name: string)=>name
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

                          bundlerFile.instantExportedMethods = methodKeys.map((key) => proto[svcKey].methods[key]);

                          if(!instantRpcBundlerFiles[item.className]){
                            instantRpcBundlerFiles[item.className] = [];
                          }

                          instantRpcBundlerFiles[item.className].push({...bundlerFile});
                        });

                        asts.push(createRpcClientClass(ctx.generic, svc));
                        if (c.proto.pluginValue('rpcClients.extensions')) {
                            asts.push(createRpcQueryExtension(ctx.generic, svc));
                        } else {
                            const env = c.proto.pluginValue('env');
                            if(env === 'v-next'){
                              asts.push(createRpcClientImpl(ctx.generic, svc));
                            }
                        }


                        // see if current file has been reactQuery enabled and included
                        const includeReactQueryHooks = c.proto.pluginValue('reactQuery.enabled') && isRefIncluded(
                            c.ref,
                            c.proto.pluginValue('reactQuery.include')
                        )

                        const includeMobxHooks = c.proto.pluginValue('mobx.enabled') && isRefIncluded(
                            c.ref,
                            c.proto.pluginValue('mobx.include')
                        )

                        if (includeReactQueryHooks) {
                            [].push.apply(asts, createRpcQueryHookInterfaces(ctx.generic, svc));
                        }

                        // enable getQueryService for plugins using it.
                        if (includeReactQueryHooks || includeMobxHooks) {
                            [].push.apply(asts, createRpcQueryHookClientMap(ctx.generic, svc));
                        }

                        // react query
                        // generate react query parts if included.
                        // eg: __fixtures__/output1/akash/audit/v1beta2/query.rpc.Query.ts
                        // export interface UseAuditorAttributesQuery<TData> ...
                        // const _queryClients: WeakMap ...
                        // const getQueryService = ...
                        // export const createRpcQueryHooks = ...
                        // TODO use the imports and make separate files
                        if (includeReactQueryHooks) {
                            asts.push(createRpcQueryHooks(ctx.generic, proto[svcKey]));

                            // get all query methods
                            const patterns = c.proto.pluginValue('reactQuery.instantExport.include.patterns');
                            bundlerFile.instantExportedMethods = getQueryMethodNames(bundlerFile.package, Object.keys(proto[svcKey].methods ?? {}), patterns).map((key)=> proto[svcKey].methods[key]);

                            reactQueryBundlerFiles.push(bundlerFile);
                        }

                        // whether mobx plugin is enabled has been dealt with inside createMobxQueryStores
                        const mobxQueryStoreAst = createMobxQueryStores(
                            ctx.generic,
                            proto[svcKey]
                        );

                        if (mobxQueryStoreAst) {
                            asts.push(mobxQueryStoreAst);
                            mobxBundlerFiles.push(bundlerFile);
                        }
                    }
                });
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

    bundler.addRPCQueryClients(clients);

    Object.keys(instantRpcBundlerFiles).forEach((className)=>{
      bundler.addStateManagers(`instantRpc_${className}`, instantRpcBundlerFiles[className]);
    })

    bundler.addStateManagers("reactQuery", reactQueryBundlerFiles);
    bundler.addStateManagers("mobx", mobxBundlerFiles);
};