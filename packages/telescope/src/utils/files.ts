import * as t from '@babel/types';
import { TelescopeOptions } from '@osmonauts/types';
import { sync as mkdirp } from 'mkdirp';
import { writeFileSync } from 'fs';
import { dirname, resolve, join } from 'path';
import generate from '@babel/generator';

export const writeAstToFile = (
    options: TelescopeOptions,
    program: t.Statement[],
    filename: string
) => {
    const ast = t.program(program);
    const content = generate(ast).code;
    writeContentToFile(options, content, filename);
}


export const writeContentToFile = (
    options: TelescopeOptions,
    content: string,
    filename: string
) => {
    let prefix = ''
    if (
        options.tsDisable.files.includes(filename) ||
        options.tsDisable.disableAll
    ) {
        prefix = `//@ts-nocheck\n`;
    }
    const text = prefix + content;
    mkdirp(dirname(filename));
    writeFileSync(filename, text);
}
