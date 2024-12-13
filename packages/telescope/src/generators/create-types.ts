import * as t from '@babel/types';
import { Bundler } from '../bundler';
import { TelescopeBuilder } from '../builder';
import { buildAllImports } from '../imports';
import { parse } from '../parse';
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { mkdirp } from 'mkdirp';
import { getNestedProto, isRefExcluded } from '@cosmology/proto-parser';
import { createRpcClientClass, createRpcClientImpl, createRpcClientInterface, createRpcQueryExtension } from '@cosmology/ast';
import { BundlerFile } from 'src/types';
import { camel, getQueryMethodNames, swapKeyValue } from '@cosmology/utils';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    const instantRpcBundlerFiles: {
      [key: string]: BundlerFile[]
    } = {};

    // [x] search for all files that live in package
    const baseProtos = builder.store.getProtos().filter(ref => {
        return ref.proto.package.split('.')[0] === bundler.bundle.base
    });

    // [x] write out all TS files for package
    bundler.contexts = baseProtos.map(ref => {
        const context = builder.context(ref);

        parse(context);
        context.buildBase();

        //// Anything except Msg Service OK...
        const allowedRpcServices = builder.options.rpcClients.enabledServices.filter(a => a !== 'Msg');

        const localname = bundler.getLocalFilename(ref);
        const filename = bundler.getFilename(localname);

        const bundlerFile: BundlerFile = {
          proto: context.ref.filename,
          package: context.ref.proto.package,
          localname,
          filename
        };

        if (context.proto.pluginValue('rpcClients.inline')) {
            const proto = getNestedProto(context.ref.traversed);

            const instantOps = context.options.rpcClients?.instantOps ?? [];
            const useCamelCase = context.options.rpcClients?.camelCase;

            allowedRpcServices.forEach(svcKey => {
                if (proto[svcKey]) {
                    const svc = proto[svcKey];

                    context.body.push(createRpcClientInterface(context.generic, proto[svcKey]));

                    instantOps.forEach((item) => {
                      let nameMapping = {
                        ...swapKeyValue(item.nameMapping?.All ?? {}),
                        ...swapKeyValue(item.nameMapping?.Query ?? {})
                      };

                      // get all query methods
                      const patterns = item.include?.patterns;
                      const serviceTypes = item.include?.serviceTypes;

                      if(serviceTypes && !serviceTypes.includes("Query")){
                        return
                      }

                      const methodKeys = getQueryMethodNames(
                        bundlerFile.package,
                        Object.keys(proto[svcKey].methods ?? {}),
                        patterns,
                        useCamelCase ? camel : String
                      );

                      if(!methodKeys || !methodKeys.length){
                        return
                      }

                      context.body.push(
                        createRpcClientInterface(
                          context.generic,
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

                    context.body.push(createRpcClientClass(context.generic, proto[svcKey]));
                    if (context.proto.pluginValue('rpcClients.extensions')) {
                        context.body.push(createRpcQueryExtension(context.generic, proto[svcKey]));
                    } else {
                      const env = context.proto.pluginValue('env');
                      if(env === 'v-next'){
                        context.body.push(createRpcClientImpl(context.generic, proto[svcKey]));
                      }
                    }
                }
            });

            if (proto.Msg) {
                bundlerFile.isMsg = true;
                context.body.push(createRpcClientInterface(context.generic, proto.Msg))

                instantOps.forEach((item) => {
                  let nameMapping = {
                    ...swapKeyValue(item.nameMapping?.All ?? {}),
                    ...swapKeyValue(item.nameMapping?.Msg ?? {})
                  };

                  // get all msg methods
                  const patterns = item.include?.patterns;
                  const serviceTypes = item.include?.serviceTypes;

                  if(serviceTypes && !serviceTypes.includes("Tx")){
                    return
                  }

                  const methodKeys = getQueryMethodNames(
                    bundlerFile.package,
                    Object.keys(proto.Msg.methods ?? {}),
                    patterns,
                    useCamelCase ? camel : String
                  );

                  if(!methodKeys || !methodKeys.length){
                    return
                  }

                  context.body.push(
                    createRpcClientInterface(
                      context.generic,
                      proto.Msg,
                      item.className,
                      methodKeys,
                      nameMapping
                    )
                  );

                  bundlerFile.instantExportedMethods = methodKeys.map((key) => proto['Msg'].methods[key]);
                  if(!instantRpcBundlerFiles[item.className]){
                    instantRpcBundlerFiles[item.className] = [];
                  }

                  instantRpcBundlerFiles[item.className].push({...bundlerFile});
                });

                context.body.push(createRpcClientClass(context.generic, proto.Msg))
                const env = context.proto.pluginValue('env');
                if(env === 'v-next'){
                  context.body.push(createRpcClientImpl(context.generic, proto.Msg));
                }
            }
        }

        // build BASE file
        const importStmts = buildAllImports(context, null, context.ref.filename);
        const prog = []
            .concat(importStmts)
            ;

        if (context.proto.pluginValue('vueQuery.enabled')) {
          // import { ComputedRef } from 'vue'
          const importVueStatement = t.importDeclaration(
            [
              t.importSpecifier(t.identifier('ComputedRef'), t.identifier('ComputedRef')),
            ],
            t.stringLiteral('vue') 
          );
          prog.push(importVueStatement)
        }

        // package var
        if (context.proto.pluginValue('prototypes.includePackageVar')) {
            prog.push(t.exportNamedDeclaration(t.variableDeclaration('const', [
                t.variableDeclarator(
                    t.identifier('protobufPackage'),
                    t.stringLiteral(context.ref.proto.package)
                )
            ])))
        }

        // body
        prog.push.apply(prog, context.body);

        if (context.body.length > 0) {
            bundler.writeAst(prog, filename);
        } else {
            mkdirp.sync(dirname(filename));
            writeFileSync(filename, `export {}`);
        }

        return context;
    }).filter(Boolean);

    Object.keys(instantRpcBundlerFiles).forEach((className)=>{
      bundler.addStateManagers(`instantRpc_${className}`, instantRpcBundlerFiles[className]);
    })
};