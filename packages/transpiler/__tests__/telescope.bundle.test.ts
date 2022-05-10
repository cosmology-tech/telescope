import { TelescopeBuilder } from '../src';
import * as t from '@babel/types';
import { resolve, join, dirname, basename } from 'path';
import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser'
import { bundleBaseRegistries, bundlePackages, bundleRegistries, getPackagesBundled, parseContextsForRegistry } from '../src/bundle'
import generate from '@babel/generator';
import { TelescopeParseContext } from '../src/build';
import { writeFileSync } from 'fs';
import { sync as mkdirp } from 'mkdirp';
import { buildAllImports, getServiceDependencies } from '../src/imports';
import { expectCode } from '../test-utils/index'
import { parse } from '../src/parse';

const store = new ProtoStore(__dirname + '/../../../__fixtures__/chain1');
store.traverseAll();

const input = {
    outPath: __dirname + '/../../../__fixtures__/output1',
    protoDir: __dirname + '/../../../__fixtures__/chain1'
};
const telescope = new TelescopeBuilder(input);

describe('bundle package registries and root file names', () => {
    it('bundleRegistries', () => {
        telescope.build(input);
    });
});