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
