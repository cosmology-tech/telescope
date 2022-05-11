import * as t from '@babel/types';
import generate from '@babel/generator';
import { ProtoStore } from '@osmonauts/proto-parser';
import { buildAllImports, getServiceDependencies } from './imports';
import { TelescopeParseContext } from './build';
import { importNamespace, importStmt } from '@osmonauts/ast';
import { getRelativePath, variableSlug } from './utils';
import { parse } from './parse';
import { bundlePackages } from './bundle';
import { writeFileSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { GenericParseContext, createClient, AminoParseContext } from '@osmonauts/ast';
import { camel, pascal } from 'case';
export interface TelescopeInput {
    protoDir: string;
    outPath: string;
}

export class TelescopeBuilder {
    store: ProtoStore;
    protoDir: string;
    outPath: string;

    contexts: TelescopeParseContext[] = [];

    constructor({ protoDir, outPath, store }: TelescopeInput & { store?: ProtoStore }) {
        this.protoDir = protoDir;
        this.outPath = outPath;

        this.store = store ?? new ProtoStore(protoDir);
        this.store.traverseAll();
    }

    context(ref) {
        const ctx = new TelescopeParseContext(
            ref, this.store
        );
        this.contexts.push(ctx);
        return ctx;
    }


    build(input: TelescopeInput) {

        const allFiles = [];

        // 1 get bundle of all packages
        const bundled = bundlePackages(this.store, input);
        bundled.forEach(bundle => {
            const prog = []
                .concat(bundle.importPaths)
                .concat(bundle.body);
            const ast = t.program(prog);
            const content = generate(ast).code;
            const out = resolve(join(input.outPath, bundle.bundleFile));
            mkdirp(dirname(out));
            writeFileSync(out, content);

            // 2 search for all files that live in package
            const baseProtos = this.store.getProtos().filter(ref => {
                return ref.proto.package.split('.')[0] === bundle.base
            });

            // 3 write out all TS files for package
            const packageContexts = baseProtos.map(ref => {
                const context = this.context(ref);
                parse(context);
                context.buildBase();

                // build BASE file
                const importStmts = buildAllImports(context);
                const prog = []
                    .concat(importStmts)
                    .concat(context.body);

                const filename = ref.filename.replace(/\.proto/, '.ts');
                const out = join(input.outPath, filename);
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

            // 4 find services w/mutations
            const serviceContexts = packageContexts.filter(context => context.mutations.length > 0);

            // 5 write out one amino helper for all contexts w/mutations
            const aminoConverters = serviceContexts.map(c => {
                const localname = c.ref.filename.replace(/\.proto$/, '.amino.ts');
                const filename = resolve(join(input.outPath, localname));
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

                const serviceImports = getServiceDependencies(
                    ctx.mutations,
                    localname
                );

                // build file
                // DONT RENAME THE REF! you'll need to make a new one!
                // OR ELSE LATER the other build will use this name!
                // ctx.ref.filename = filename;
                const imports = buildAllImports(ctx, serviceImports);
                const prog = []
                    .concat(imports)
                    .concat(ctx.body);
                const ast = t.program(prog);
                const content = generate(ast).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);

                return {
                    localname,
                    filename
                };

            });

            // 6 write out one registry helper for all contexts w/mutations
            const registries = serviceContexts.map(c => {

                const localname = c.ref.filename.replace(/\.proto$/, '.registry.ts')
                const filename = resolve(join(input.outPath, localname));
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

                const serviceImports = getServiceDependencies(
                    ctx.mutations,
                    localname
                );

                const imports = buildAllImports(ctx, serviceImports);
                const prog = []
                    .concat(imports)
                    .concat(ctx.body);
                const ast = t.program(prog);
                const content = generate(ast).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);

                return {
                    localname,
                    filename
                };

            })

            // 7 write out one client for each base package, referencing the last two steps
            const filesToInclude = [
                bundle.bundleFile
            ];

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

                const clientOutFile = join(input.outPath, clientFile);
                mkdirp(dirname(clientOutFile));
                writeFileSync(clientOutFile, cContent);
            }

            // 8 write an index file for each base
            // console.log(filesToInclude)


            filesToInclude.forEach(file => allFiles.push(file));
        });

        // finally, write one index file with all files, exported
        const indexFile = 'index.ts';
        const indexOutFile = join(input.outPath, indexFile);
        const stmts = allFiles.map(
            file => t.exportAllDeclaration(
                t.stringLiteral(getRelativePath(indexFile, file))
            )
        );
        const finalAst = t.program(stmts);
        const indexContent = generate(finalAst).code;
        mkdirp(dirname(indexOutFile));
        writeFileSync(indexOutFile, indexContent);


    }
}

export default (input: TelescopeInput) => {
    const builder = new TelescopeBuilder(input);
    // TODO remove need for arguments
    builder.build(input);
};

