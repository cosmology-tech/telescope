import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';

export interface ParseContext {
    utils: Record<string, boolean>;
    addUtil: Function;
}

export class GenericParseContext implements ParseContext {
    imports: Record<string, object> = {};
    utils: Record<string, boolean> = {};

    addUtil(util) {
        this.utils[util] = true;
    }
}
export class AminoParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;

    utils: Record<string, boolean> = {};

    constructor(
        ref: ProtoRef,
        store: ProtoStore
    ) {
        this.ref = ref;
        this.store = store;
    }

    addUtil(util) {
        this.utils[util] = true;
    }
}

export class ProtoParseContext implements ParseContext {
    imports: Record<string, object> = {};
    utils: Record<string, boolean> = {};

    addUtil(util) {
        this.utils[util] = true;
    }
}

