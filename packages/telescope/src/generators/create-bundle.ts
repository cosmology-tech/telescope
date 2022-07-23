import * as t from '@babel/types';
import { Bundler, TelescopeBuilder } from '..';
import generate from '@babel/generator';
import { writeFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { sync as mkdirp } from 'mkdirp';
import {
    recursiveModuleBundle
} from '@osmonauts/ast';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    // [x] bundle

    const body = recursiveModuleBundle(bundler.bundle.bundleVariables);
    const prog = []
        .concat(bundler.bundle.importPaths)
        .concat(body);
    const ast = t.program(prog);
    const content = generate(ast).code;
    const out = resolve(join(builder.outPath, bundler.bundle.bundleFile));
    mkdirp(dirname(out));
    writeFileSync(out, content);

    // [x] write an index file for each base
    // console.log(filesToInclude)
    bundler.files.forEach(file => builder.files.push(file));

};