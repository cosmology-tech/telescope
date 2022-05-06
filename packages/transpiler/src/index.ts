import * as t from '@babel/types';
import generate from '@babel/generator';
import { ProtoStore } from '@osmonauts/proto-parser';
import { parse, TelescopeParseContext } from './parse';
import {
    ProtoParseContext
} from '@osmonauts/ast';
export interface TelescopeInput {
    protoDir: string;
    outPath: string;
}
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
            context: new ProtoParseContext(),
            ref,
            store: this.store
        };

        const parsed = parse(context);
        const gen = generate(t.program(parsed.body));
        return gen.code;
    }
}

export default (input: TelescopeInput) => {
    const builder = new TelescopeBuilder(input);
    // const res = builder.buildProto('osmosis/gamm/v1beta1/tx.proto');
    // console.log(res);
};

