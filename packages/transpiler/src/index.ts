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
    AminoHeight: '@osmonauts/helpers',
    AminoMsg: '@cosmjs/amino',
    AminoTypes: '@cosmjs/stargate',
    decodeBech32Pubkey: '@cosmjs/amino',
    defaultRegistryTypes: '@cosmjs/stargate',
    encodeBech32PubKey: '@cosmjs/amino',
    fromBase64: '@cosmjs/encoding',
    fromBech32: '@cosmjs/encoding',
    fromDuration: '@osmonauts/helpers',
    fromHex: '@cosmjs/encoding',
    fromJsonTimestamp: '@osmonauts/helpers',
    fromTimestamp: '@osmonauts/helpers',
    GeneratedType: '@cosmjs/proto-signing',
    isSet: '@osmonauts/helpers',
    Long: '@osmonauts/helpers', // exports Long and also calls the magic Long code
    OfflineSigner: '@cosmjs/proto-signing',
    omitDefault: '@osmonauts/helpers',
    Registry: '@cosmjs/proto-signing',
    SigningStargateClient: '@cosmjs/stargate',
    toBase64: '@cosmjs/encoding',
    toDuration: '@osmonauts/helpers',
    toTimestamp: '@osmonauts/helpers',
};
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


    buildProto(path) {
        const ref = this.store.findProto(path);

        const context = new TelescopeParseContext(
            ref, this.store
        );

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

