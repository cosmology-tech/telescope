import * as t from '@babel/types';
import generate from '@babel/generator';
import { ProtoStore } from '@osmonauts/proto-parser';
import { buildAllImports, getServiceDependencies } from './imports';
import { TelescopeParseContext } from './build';
import { parse } from './parse';
import { bundlePackages } from './bundle';
import { writeFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { sync as mkdirp } from 'mkdirp';
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

        // 0 REMEMBER!
        // YOU MUST SWITCH FROM in DIRECTORY to out DIRECTORY!!!
        // otherwise paths will break

        // ============



        // 1 get package bundle
        const bundled = bundlePackages(this.store, input);
        const packaged = bundled.reduce((m, bundle) => {
            const content = generate(t.program([
                ...bundle.importPaths,
                ...bundle.body
            ])).code


            const out = bundle.bundleFile;
            mkdirp(dirname(out));
            writeFileSync(out, content);

            // 2 search for all files that live in package
            console.log(`now looking for all [${bundle.base}]`);
            const baseProtos = this.store.getProtos().filter(ref => {
                return ref.filename.split('/')[0] === bundle.base
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
                const gen = generate(t.program(prog));
                const filename = ref.filename.replace(/\.proto/, '.ts');
                const out = join(input.outPath, filename);
                mkdirp(dirname(out));
                writeFileSync(out, gen.code);

                return context;
            });

            // 4 find services w/mutations
            const serviceContexts = packageContexts.filter(context => context.mutations.length > 0);

            // 5 write out one amino helper for all contexts w/mutations

            const aminoHelpers = serviceContexts.map(c => {
                const filename = resolve(join(input.outPath, c.ref.filename)).replace(/\.proto$/, '.amino.ts'); ''
                // FRESH new context
                const ctx = new TelescopeParseContext(
                    c.ref,
                    c.store
                );

                // get mutations, services
                parse(ctx);

                // now let's amino...
                ctx.buildAminoInterfaces();
                ctx.buildAminoConverter();

                const serviceImports = getServiceDependencies(
                    ctx.mutations,
                    filename
                );

                // build file
                // DONT RENAME THE REF! you'll need to make a new one!
                // OR ELSE LATER the other build will use this name!
                // ctx.ref.filename = filename;
                const imports = buildAllImports(ctx, serviceImports);
                const content = generate(t.program([
                    ...imports,
                    ...ctx.body
                ])).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);

                return filename;
            });

            // 6 write out one registry helper for all contexts w/mutations

            const registries = serviceContexts.map(c => {

                const filename = resolve(join(input.outPath, c.ref.filename)).replace(/\.proto$/, '.registry.ts'); ''
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
                const imports = buildAllImports(ctx);
                const content = generate(t.program([
                    ...imports,
                    ...ctx.body
                ])).code;
                mkdirp(dirname(filename));
                writeFileSync(filename, content);
                // console.log(filename);

                console.log(c.ref.filename);

                return filename;

            })

            // 7 write out one client for each base package, referencing the last two steps

            return m;
        }, {});

    }

    buildAll() {
        const hash = this.store.getProtos().map(ref => {
            const context = this.context(ref);
            parse(context);

            context.buildBase();

            // TODO don't loop through all protos...
            // loop through packgaes and put these into separate files
            if (context.mutations.length) {
                context.buildAminoInterfaces();
                context.buildAminoConverter();
                context.buildRegistry();
                context.buildRegistryLoader();
                context.buildHelperObject();
            }

            const importStmts = buildAllImports(context);

            const prog = []
                .concat(importStmts)
                .concat(context.body);

            const gen = generate(t.program(prog));

            const filename = ref.filename.replace(/\.proto/, '.ts');
            return {
                filename,
                content: gen.code
            };
        });
        return hash;
    }

    buildProto(path) {
        const ref = this.store.findProto(path);
        const context = this.context(ref);
        parse(context);
        context.buildBase();

        // generate(context, 'amino')
        // generate(context, 'proto')

        // maybe we can do something like this to separate out the context..
        // parse(context1, {
        //     amino: true
        // });

        // parse(context2, {


        //     registry: true
        // });

        // messages = c.toObjectWithPartialMethods(this.mutations);
        // registry = c.createTypeRegistry(this.mutations);
        // json = c.toObjectWithJsonMethods(this.mutations);
        // toJSON = c.toObjectWithToJSONMethods(this.mutations);
        // fromJSON = c.toObjectWithFromJSONMethods(this.mutations);
        // encoded = c.toObjectWithEncodedMethods(this.mutations);

        // this.outFiles = [];

        const importStmts = buildAllImports(context);

        const prog = []
            .concat(importStmts)
            .concat(context.body);

        const gen = generate(t.program(prog));
        return {
            gen,
            context
        }
    }
}

export default (input: TelescopeInput) => {
    const builder = new TelescopeBuilder(input);
    // const res = builder.buildProto('osmosis/gamm/v1beta1/tx.proto');
    // console.log(res);
};

