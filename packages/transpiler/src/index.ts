import * as t from '@babel/types';
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
        const gen = generate(t.program(context.body));
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

