import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { ProtoField } from './proto';

export interface PContext {
    store: ProtoStore;
    ref: ProtoRef;

    scope: string[];

    imports: string[];
    utils: string[];
}

export class ParseContext implements PContext {
    store: ProtoStore;
    ref: ProtoRef;

    scope: string[] = [];
    imports: string[] = []
    utils: string[] = []

    constructor(
        ref: ProtoRef,
        store: ProtoStore
    ) {
        this.ref = ref;
        this.store = store;
    }

    spawn() {
        return new ParseContext(this.ref, this.store);
    }

    addImport(imp) {
        this.imports.push(imp);
        console.log({ imp });
    }
    addUtil(util) {
        this.utils.push(util);
        console.log({ util });
    }
}

export class ProtoParseContext {
    imports: string[] = []
    utils: string[] = []

    addImport(imp) {
        this.imports.push(imp);
        console.log({ imp });
    }
    addUtil(util) {
        this.utils.push(util);
        console.log({ util });
    }
}