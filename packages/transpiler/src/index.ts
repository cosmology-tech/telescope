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

        const utils = Object.keys({
            ...context.amino.utils,
            ...context.proto.utils
        });

        const utilImports = utils.map(util => {
            if (!UTILS.hasOwnProperty(util)) throw new Error('missing Util! ::' + util);
            return a.importStmt([util], UTILS[util]);
        });

        const parsedImports = Object.entries(
            context.amino.ref.traversed.parsedImports ?? {}
        )
            .map(([filename, names]) => {
                const f = context.ref.filename;
                const rel = relative(dirname(f), filename);
                let importPath = rel.replace(extname(rel), '');
                if (!/\//.test(importPath)) importPath = `./${importPath}`;
                return a.importStmt(names, importPath);
            });



        const prog = []
            .concat(parsedImports)
            .concat(utilImports)
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

