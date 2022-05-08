import * as a from '@osmonauts/ast';
import * as t from '@babel/types';
import { extname, relative, dirname } from 'path';
import generate from '@babel/generator';
import { ProtoStore } from '@osmonauts/proto-parser';
import { buildAllImports, parse, TelescopeParseContext } from './parse';
export interface TelescopeInput {
    protoDir: string;
    outPath: string;
}

export class TelescopeBuilder {
    store: ProtoStore;
    protoDir: string;
    outPath: string;

    constructor({ protoDir, outPath, store }: TelescopeInput & { store?: ProtoStore }) {
        this.protoDir = protoDir;
        this.outPath = outPath;

        this.store = store ?? new ProtoStore(protoDir);
        this.store.traverseAll();
    }

    context(ref) {
        return new TelescopeParseContext(
            ref, this.store
        );
    }

    buildAll() {
        this.store.getProtos().map(ref => {
            const context = this.context(ref);
            parse(context);
            context.buildBase();
            const importStmts = buildAllImports(context);

            const prog = []
                .concat(importStmts)
                .concat(context.body);

            const gen = generate(t.program(prog));
            console.log(gen.code);
        });
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

