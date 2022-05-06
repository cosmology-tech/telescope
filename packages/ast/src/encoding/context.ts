import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { ProtoField } from './proto';

export interface ParseContext {
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    addImport: Function;
    addUtil: Function;
}
export class AminoParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;

    imports: Record<string, object> = {};
    utils: Record<string, boolean> = {};

    constructor(
        ref: ProtoRef,
        store: ProtoStore
    ) {
        this.ref = ref;
        this.store = store;
    }

    addImport(imp) {
        // TODO
        this.imports[imp] = imp;
    }
    addUtil(util) {
        this.utils[util] = true;
    }
}

export class ProtoParseContext implements ParseContext {
    imports: Record<string, object> = {};
    utils: Record<string, boolean> = {};

    addImport(imp) {
        // TODO
        this.imports[imp] = imp;
    }
    addUtil(util) {
        this.utils[util] = true;
    }
}