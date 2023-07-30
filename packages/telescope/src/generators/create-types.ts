import * as t from '@babel/types';
import { Bundler } from '../bundler';
import { TelescopeBuilder } from '../builder';
import { buildAllImports } from '../imports';
import { parse } from '../parse';
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { mkdirp } from 'mkdirp';
import { getNestedProto, isRefExcluded } from '@cosmology/proto-parser';
import { createRpcClientClass, createRpcClientInterface, createRpcQueryExtension } from '@cosmology/ast';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {
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

        if (context.proto.pluginValue('rpcClients.inline')) {
            const proto = getNestedProto(context.ref.traversed);

            allowedRpcServices.forEach(svcKey => {
                if (proto[svcKey]) {
                    context.body.push(createRpcClientInterface(context.generic, proto[svcKey]));
                    context.body.push(createRpcClientClass(context.generic, proto[svcKey]));
                    if (context.proto.pluginValue('rpcClients.extensions')) {
                        context.body.push(createRpcQueryExtension(context.generic, proto[svcKey]));
                    }
                }
            });

            if (proto.Msg) {
                context.body.push(createRpcClientInterface(context.generic, proto.Msg))
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

        const localname = bundler.getLocalFilename(ref);
        const filename = bundler.getFilename(localname);

        if (context.body.length > 0) {
            bundler.writeAst(prog, filename);
        } else {
            mkdirp.sync(dirname(filename));
            writeFileSync(filename, `export {}`);
        }

        return context;
    }).filter(Boolean);

};