// This file is a demonstration of how ast package works. In order to try it yourself you need:
// 1. Create a 'fixture.tx' file in the same directory as this file and write any TypeScript to it.
// 2. cd into `packages/ast`.
// 3. Run `yarn test:ast`.
// `test-output.json` will be created containing an abstract syntax tree of the `fixture.ts` file.
// A broader documentation you may find here: https://github.com/hyperweb-io/telescope/blob/main/docs/working-with-asts.md

import { stringify } from 'ast-stringify';
import { parse } from '@babel/parser';
import { readFileSync, writeFileSync } from 'fs';

const main = async () => {
  const plugins = [
    'objectRestSpread',
    'classProperties',
    'optionalCatchBinding',
    'asyncGenerators',
    'decorators-legacy',
    'typescript',
    'dynamicImport'
  ];

  const ast = parse(readFileSync(__dirname + '/fixture.ts', 'utf-8'), {
    sourceType: 'module',
    plugins
  });

  writeFileSync(__dirname + '/test-output.json', stringify(ast, null, 2));
};

main();
