import * as t from '@babel/types';
import pkg from '../package.json';
import generate from '@babel/generator';
import { getNestedProto, ProtoStore } from '@osmonauts/proto-parser';
import { buildAllImports, getDepsFromMutations, getDepsFromQueries } from './imports';
import { TelescopeParseContext } from './build';
import { importNamespace, importStmt } from '@osmonauts/ast';
import { getRelativePath, variableSlug } from './utils';
import { parse } from './parse';
import { bundlePackages, createFileBundle } from './bundle';
import { writeFileSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { sync as mkdirp } from 'mkdirp';
import deepmerge from 'deepmerge';

import {
    makeLCDClient,
    recursiveModuleBundle,
    GenericParseContext,
    createClient,
    AminoParseContext
} from '@osmonauts/ast';
import {
    camel,
    pascal
} from 'case';

export interface TelescopeOptions {
    includeAminos: boolean;
    includeLCDClient: boolean;
}

const defaultTelescopeOptions = {
    // global options (can be overridden through plugins)
    includeAminos: true,
    includeLCDClient: false
}

export interface TelescopeInput {
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
}

export class TelescopeBuilder {
    store: ProtoStore;
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
    contexts: TelescopeParseContext[] = [];

    constructor({ protoDirs, outPath, store, options }: TelescopeInput & { store?: ProtoStore }) {
        this.protoDirs = protoDirs;
        this.outPath = outPath;
        this.options = deepmerge(defaultTelescopeOptions, options ?? {});

        this.store = store ?? new ProtoStore(protoDirs);
        this.store.traverseAll();
    }

    context(ref) {
        const ctx = new TelescopeParseContext(
            ref, this.store
        );
        this.contexts.push(ctx);
        return ctx;
    }


    build() {

        const allFiles = [];

        // [x] get bundle of all packages
        const bundled = bundlePackages(this.store);

        bundled.forEach(bundle => {
            // store bundleFile in filesToInclude
            const filesToInclude = [
                bundle.bundleFile
            ];

            // [x] search for all files that live in package
            const baseProtos = this.store.getProtos().filter(ref => {
                return ref.proto.package.split('.')[0] === bundle.base
            });

            // [x] write out all TS files for package
            const packageContexts = baseProtos.map(ref => {
                const context = this.context(ref);
                parse(context);
                context.buildBase();

                // build BASE file
                const importStmts = buildAllImports(context, null, context.ref.filename);
                const prog = []
                    .concat(importStmts)
                    .concat(context.body);

                const filename = ref.filename.replace(/\.proto/, '.ts');
                const out = join(this.outPath, filename);
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

            // [x] find services w/mutations
            const mutationContexts = packageContexts.filter(context => context.mutations.length > 0);
            const queryContexts = packageContexts.filter(context => context.queries.length > 0);

            // [x] write out one amino helper for all contexts w/mutations
            const aminoConverters = mutationContexts.map(c => {

                if (!this.options.includeAminos) {
                    return;
                }

                const localname = c.ref.filename.replace(/\.proto$/, '.amino.ts');
                const filename = resolve(join(this.outPath, localname));
                // FRESH new context
                const ctx = new TelescopeParseContext(
                    c.ref,
                    c.store
                );

                // BEGIN PLUGIN CODE HERE
                const amino = new AminoParseContext(
                    c.ref, c.store
                );
                if (bundle.base === 'osmosis') {
                    amino.options = {
                        aminoCasingFn: camel
                    }
                }
                ctx.amino = amino;
                // END PLUGIN CODE HERE

                // get mutations, services
                parse(ctx);

                // now let's amino...
                ctx.buildAminoInterfaces();
                ctx.buildAminoConverter();

                const serviceImports = getDepsFromMutations(
                    ctx.mutations,
                    localname
                );

                // build file
                // DONT RENAME THE REF! you'll need to make a new one!
                // OR ELSE LATER the other build will use this name!
                // ctx.ref.filename = filename;
                const imports = buildAllImports(ctx, serviceImports, localname);
                const prog = []
                    .concat(imports)
                    .concat(ctx.body);
                const ast = t.program(prog);
                const content = generate(ast).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);

                // add to bundle
                createFileBundle(
                    c.ref.proto.package,
                    localname,
                    bundle.bundleFile,
                    bundle.importPaths,
                    bundle.bundleVariables
                );

                return {
                    localname,
                    filename
                };

            }).filter(Boolean);

            // [x] write out one registry helper for all contexts w/mutations
            const registries = mutationContexts.map(c => {

                if (!this.options.includeAminos) {
                    return;
                }

                const localname = c.ref.filename.replace(/\.proto$/, '.registry.ts')
                const filename = resolve(join(this.outPath, localname));
                // FRESH new context
                const ctx = new TelescopeParseContext(
                    c.ref,
                    c.store
                );

                // get mutations, services
                parse(ctx);

                ctx.buildRegistry();
                ctx.buildRegistryLoader();
                ctx.buildHelperObject();

                // SEE ABOVE - DONT RENAME THESE DIRECTLY
                // ctx.ref.filename = filename;

                const serviceImports = getDepsFromMutations(
                    ctx.mutations,
                    localname
                );

                const imports = buildAllImports(ctx, serviceImports, localname);
                const prog = []
                    .concat(imports)
                    .concat(ctx.body);
                const ast = t.program(prog);
                const content = generate(ast).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);

                // add to bundle
                createFileBundle(
                    c.ref.proto.package,
                    localname,
                    bundle.bundleFile,
                    bundle.importPaths,
                    bundle.bundleVariables
                );

                return {
                    localname,
                    filename
                };

            }).filter(Boolean);

            // [x] write out one registry helper for all contexts w/mutations
            const lcdClients = queryContexts.map(c => {

                if (!this.options.includeLCDClient) {
                    return;
                }

                const localname = c.ref.filename.replace(/\.proto$/, '.lcd.ts')
                const filename = resolve(join(this.outPath, localname));
                // FRESH new context

                const ctx = new TelescopeParseContext(
                    c.ref,
                    c.store
                );

                // get mutations, services
                parse(ctx);

                const proto = getNestedProto(c.ref.traversed);
                // hard-coding, for now, only Query service
                if (!proto?.Query || proto.Query?.type !== 'Service') {
                    return;
                }

                const lcdAst = makeLCDClient(ctx.generic, proto.Query);

                if (!lcdAst) {
                    return;
                }

                const serviceImports = getDepsFromQueries(
                    ctx.queries,
                    localname
                );

                const imports = buildAllImports(ctx, serviceImports, localname);
                const prog = []
                    .concat(imports)
                    .concat(ctx.body)
                    .concat(lcdAst);
                const ast = t.program(prog);
                const content = generate(ast).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);

                // add to bundle
                createFileBundle(
                    c.ref.proto.package,
                    localname,
                    bundle.bundleFile,
                    bundle.importPaths,
                    bundle.bundleVariables
                );

                return {
                    localname,
                    filename
                };

            }).filter(Boolean);

            // [x] write out one client for each base package, referencing the last two steps

            if (registries.length) {
                const registryImports = [];
                const converterImports = [];

                const clientFile = join(`${bundle.base}`, 'client.ts');
                filesToInclude.push(clientFile);
                const ctx = new GenericParseContext();

                const registryVariables = [];
                const converterVariables = [];

                registries.forEach(registry => {
                    let rel = relative(dirname(clientFile), registry.localname);
                    if (!rel.startsWith('.')) rel = `./${rel}`;
                    const variable = variableSlug(registry.localname);
                    registryVariables.push(variable);
                    registryImports.push(importNamespace(variable, rel));
                });

                aminoConverters.forEach(converter => {
                    let rel = relative(dirname(clientFile), converter.localname);
                    if (!rel.startsWith('.')) rel = `./${rel}`;
                    const variable = variableSlug(converter.localname);
                    converterVariables.push(variable);
                    converterImports.push(importNamespace(variable, rel));
                });

                const name = 'getSigning' + pascal(bundle.base + 'Client');
                const clientBody = createClient({
                    context: ctx,
                    name,
                    registries: registryVariables,
                    aminos: converterVariables
                });

                const cProg = [
                    importStmt(['OfflineSigner', 'GeneratedType', 'Registry'], '@cosmjs/proto-signing'),
                    importStmt(['defaultRegistryTypes', 'AminoTypes', 'SigningStargateClient'], '@cosmjs/stargate'),
                ]
                    .concat(registryImports)
                    .concat(converterImports)
                    .concat(clientBody);

                const cAst = t.program(cProg);
                const cContent = generate(cAst).code;

                const clientOutFile = join(this.outPath, clientFile);
                mkdirp(dirname(clientOutFile));
                writeFileSync(clientOutFile, cContent);
            }

            // [x] bundle

            const body = recursiveModuleBundle(bundle.bundleVariables);
            const prog = []
                .concat(bundle.importPaths)
                .concat(body);
            const ast = t.program(prog);
            const content = generate(ast).code;
            const out = resolve(join(this.outPath, bundle.bundleFile));
            mkdirp(dirname(out));
            writeFileSync(out, content);

            // [x] write an index file for each base
            // console.log(filesToInclude)
            filesToInclude.forEach(file => allFiles.push(file));
        });

        // finally, write one index file with all files, exported
        const indexFile = 'index.ts';
        const indexOutFile = join(this.outPath, indexFile);
        const stmts = allFiles.map(
            file => t.exportAllDeclaration(
                t.stringLiteral(getRelativePath(indexFile, file))
            )
        );
        const finalAst = t.program(stmts);
        const indexContent = generate(finalAst).code;
        mkdirp(dirname(indexOutFile));

        const header = `/**
  * This file and any referenced files were automatically generated by ${pkg.name}@${pkg.version}
  * DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
  * and run the transpile command or yarn proto command to regenerate this bundle.
  */
 \n`;
        writeFileSync(indexOutFile, header + indexContent);


    }
}

export default (input: TelescopeInput) => {
    const builder = new TelescopeBuilder(input);
    builder.build();
};

