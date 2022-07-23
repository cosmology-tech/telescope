import { Bundler, TelescopeBuilder } from '..';
import * as t from '@babel/types';
import { buildAllImports } from '../imports';
import { parse } from '../parse';
import generate from '@babel/generator';
import { writeFileSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { sync as mkdirp } from 'mkdirp';


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

        // build BASE file
        const importStmts = buildAllImports(context, null, context.ref.filename);
        const prog = []
            .concat(importStmts)
            ;

        // package var
        if (context.options.includePackageVar) {
            prog.push(t.exportNamedDeclaration(t.variableDeclaration('const', [
                t.variableDeclarator(
                    t.identifier('protobufPackage'),
                    t.stringLiteral(context.ref.proto.package)
                )
            ])))
        }

        // body
        prog.push.apply(prog, context.body);

        const filename = ref.filename.replace(/\.proto/, '.ts');
        const out = join(builder.outPath, filename);
        mkdirp(dirname(out));
        if (context.body.length > 0) {
            const ast = t.program(prog);
            const gen = generate(ast);
            writeFileSync(out, gen.code);
        } else {
            writeFileSync(out, `export {}`);
        }

        return context;
    });

};