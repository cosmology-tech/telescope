import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { snake } from 'case';
import { AminoOptions } from './amino';

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

const createDefaultAminoOptions = () => {
    return {
        aminoCasingFn: snake
    };
};
export class AminoParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    options: AminoOptions;
    utils: Record<string, boolean> = {};

    constructor(
        ref: ProtoRef,
        store: ProtoStore,
        options?: AminoOptions
    ) {
        this.ref = ref;
        this.store = store;
        if (options) this.options = options;
        else this.options = createDefaultAminoOptions()
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

