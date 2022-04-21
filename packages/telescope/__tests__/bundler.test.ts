import generate from '@babel/generator';
import * as c from '@osmonauts/ast-gen';
import * as t from '@babel/types';
import { tmpdir } from 'os';
import { join, relative, dirname, extname, basename } from 'path';
import { camel } from 'case';
import stringify from 'ast-stringify';
import dotty from 'dotty';
import {
    TSProtoStore
} from '../src'
import {
    parsePackage,
    recursiveModuleBundle
} from '../src/utils'

const protoPath = __dirname + '/../__fixtures__/chain1'
const outPath = join(tmpdir(), 'chain1');
const program = new TSProtoStore(protoPath, outPath);

const preview = (ast) => {
    expect(generate(ast).code).toMatchSnapshot();
}

it('packages', async () => {
    const allPackages = program.getPackagesBundled();
    Object.keys(allPackages).forEach(base => {
        const pkgs = allPackages[base];
        const bundleVariables = {};
        const bundleFile = join(protoPath, base, 'index.ts');
        const importPaths = [];
        parsePackage(pkgs, bundleFile, importPaths, bundleVariables);
        const body = recursiveModuleBundle(bundleVariables);
        preview(t.program([...importPaths, ...body]))
    });
})

it('root', async () => {
    const allPackages = program.getPackagesBundled();
    const bundleFile = join(protoPath, 'index.ts');
    const bundleVariables = {};
    const importPaths = [];

    Object.keys(allPackages).forEach(base => {
        const pkgs = allPackages[base];
        parsePackage(pkgs, bundleFile, importPaths, bundleVariables);
    });

    const body = recursiveModuleBundle(bundleVariables);
    preview(t.program([...importPaths, ...body]))
})
