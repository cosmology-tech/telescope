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
import { getQueryMethodNames, makeRpcClientInterfaceName } from '@cosmology/utils';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
    const instantRpcBundlerFiles = [];

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

            allowedRpcServices.forEach(svcKey => {
                if (proto[svcKey]) {
                    const svc = proto[svcKey];

                    context.body.push(createRpcClientInterface(context.generic, proto[svcKey]));

                    instantOps.forEach((item) => {
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

                      context.body.push(
                        createRpcClientInterface(
                          context.generic,
                          svc,
                          makeRpcClientInterfaceName(item.className, svc.name),
                          methodKeys
                        )
                      );

                      bundlerFile.instantExportedMethods = methodKeys.map((key) => proto[svcKey].methods[key]);
                      instantRpcBundlerFiles.push(bundlerFile);
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
                context.body.push(createRpcClientInterface(context.generic, proto.Msg))

                instantOps.forEach((item) => {
                  // get all query methods
                  const patterns = item.include?.patterns;
                  const methodKeys = getQueryMethodNames(
                    bundlerFile.package,
                    Object.keys(proto.Msg.methods ?? {}),
                    patterns,
                    (name: string)=>name
                  );

                  if(!methodKeys || !methodKeys.length){
                    return
                  }

                  context.body.push(
                    createRpcClientInterface(
                      context.generic,
                      proto.Msg,
                      makeRpcClientInterfaceName(item.className, proto.Msg.name),
                      methodKeys
                    )
                  );

                  bundlerFile.instantExportedMethods = methodKeys.map((key) => proto['Msg'].methods[key]);
                  instantRpcBundlerFiles.push(bundlerFile);
                });

                context.body.push(createRpcClientClass(context.generic, proto.Msg))
            }
        }

        // build BASE file
        const importStmts = buildAllImports(context, null, context.ref.filename);
        const prog = []
            .concat(importStmts)
            ;

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

    bundler.addStateManagers("instantRpc", instantRpcBundlerFiles);
};