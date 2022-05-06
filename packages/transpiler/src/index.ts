import * as a from '@osmonauts/ast';
import * as t from '@babel/types';
import { extname, relative, dirname } from 'path';
import generate from '@babel/generator';
import { ProtoStore } from '@osmonauts/proto-parser';
import { parse, TelescopeParseContext } from './parse';
import {
    ProtoParseContext,
    AminoParseContext
} from '@osmonauts/ast';
export interface TelescopeInput {
    protoDir: string;
    outPath: string;
}

const UTILS = {
    isSet: '@osmonauts/helpers',
    Long: '@osmonauts/helpers', // exports Long and also calls the magic Long code
    toDuration: '@osmonauts/helpers',
    fromDuration: '@osmonauts/helpers',
    toTimestamp: '@osmonauts/helpers',
    fromTimestamp: '@osmonauts/helpers',
    fromJsonTimestamp: '@osmonauts/helpers',
    omitDefault: '@osmonauts/helpers',
    fromBase64: '@cosmjs/encoding',
    fromBech32: '@cosmjs/encoding',
    fromHex: '@cosmjs/encoding',
    toBase64: '@cosmjs/encoding',
    AminoMsg: '@cosmjs/amino',
    AminoHeight: '@osmonauts/helpers',
    encodeBech32PubKey: '@cosmjs/amino',
    decodeBech32Pubkey: '@cosmjs/amino'
};
export class TelescopeBuilder {
    store: ProtoStore;
    protoDir: string;
    outPath: string;

    constructor({ protoDir, outPath }: TelescopeInput) {
        this.protoDir = protoDir;
        this.outPath = outPath;
        this.store = new ProtoStore(protoDir);
        this.store.traverseAll();
    }

    buildProto(path) {
        const ref = this.store.findProto(path);

        const context: TelescopeParseContext = {
            proto: new ProtoParseContext(),
            amino: new AminoParseContext(
                ref, this.store
            ),
            ref,
            store: this.store,
            parsedImports: {},
            body: []
        };

        parse(context);

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


        const utils = Object.keys({
            ...context.amino.utils,
            ...context.proto.utils
        });

        const allImports = {};

        utils.forEach(util => {
            if (!UTILS.hasOwnProperty(util)) throw new Error('missing Util! ::' + util);
            allImports[UTILS[util]] = allImports[UTILS[util]] || [];
            if (!allImports[UTILS[util]].includes(util)) {
                allImports[UTILS[util]].push(util);
            }
        });

        Object.entries(context.amino.ref.traversed.parsedImports ?? {})
            .forEach(([filename, names]) => {
                const f = context.ref.filename;
                const rel = relative(dirname(f), filename);
                let importPath = rel.replace(extname(rel), '');
                if (!/\//.test(importPath)) importPath = `./${importPath}`;
                allImports[importPath] = allImports[importPath] || [];
                names.forEach(name => {
                    if (!allImports[importPath].includes(name)) {
                        allImports[importPath].push(name);
                    }
                })
            });

        const importStmts = Object.entries(allImports)
            .map(([pth, names]) => {
                return a.importStmt(names, pth);
            })

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

