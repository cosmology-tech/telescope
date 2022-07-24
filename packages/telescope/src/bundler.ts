import * as t from '@babel/types';
import { dirname, resolve, join } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { TelescopeParseContext } from './build';
import { writeFileSync } from 'fs';
import generate from '@babel/generator';
import { createFileBundle } from './bundle';
import { TelescopeBuilder } from './builder';
import { ProtoRef } from '@osmonauts/types';

export interface Bundle {
    bundleVariables: {};
    bundleFile: string;
    importPaths: any[];
    base: string;
}

export class Bundler {
    builder: TelescopeBuilder;

    contexts: TelescopeParseContext[] = [];
    bundle: Bundle;
    files: string[];
    converters: any[];
    registries: any[];

    constructor(
        builder: TelescopeBuilder,
        bundle: Bundle
    ) {
        this.builder = builder;
        this.bundle = bundle;
        this.files = [
            bundle.bundleFile
        ]
    }

    getFreshContext(
        context: TelescopeParseContext
    ) {
        return new TelescopeParseContext(
            context.ref,
            context.store,
            this.builder.options
        );
    }

    getLocalFilename(
        ref: ProtoRef,
        suffix?: string
    ) {
        return suffix ?
            ref.filename.replace(/\.proto$/, `.${suffix}.ts`) :
            ref.filename.replace(/\.proto$/, `.ts`);
    }

    getFilename(
        localname: string
    ) {
        return resolve(join(this.builder.outPath, localname));
    }

    writeAst(
        program: t.Statement[],
        filename: string
    ) {
        const ast = t.program(program);
        const content = generate(ast).code;
        mkdirp(dirname(filename));
        writeFileSync(filename, content);
    }

    // addToBundle adds the path into the namespaced bundle object
    addToBundle(
        context: TelescopeParseContext,
        localname: string
    ) {
        createFileBundle(
            context.ref.proto.package,
            localname,
            this.bundle.bundleFile,
            this.bundle.importPaths,
            this.bundle.bundleVariables
        );
    }

}