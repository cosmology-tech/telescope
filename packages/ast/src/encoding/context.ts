import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { snake } from 'case';
import { AminoOptions } from './amino';
import { getEnumFromJsonName, getEnumToJsonName, getFieldsTypeName, ProtoField } from './proto';
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

export interface ImportUsage {
    type: 'typeImport' | 'toJSONEnum' | 'fromJSONEnum';
    name: string;
    import: string;
}
export class ProtoParseContext implements ParseContext {
    imports: ImportUsage[] = [];
    utils: Record<string, boolean> = {};

    addUtil(util) {
        this.utils[util] = true;
    }
    getToEnum(field: ProtoField) {
        const toJSONFuncName = getEnumToJsonName(getFieldsTypeName(field));
        if (field.import) {
            this.imports.push({
                type: 'toJSONEnum',
                name: toJSONFuncName,
                import: field.import
            })
        }
        return toJSONFuncName;
    }

    getFromEnum(field: ProtoField) {
        const fromJSONFuncName = getEnumFromJsonName(getFieldsTypeName(field));
        if (field.import) {
            this.imports.push({
                type: 'fromJSONEnum',
                name: fromJSONFuncName,
                import: field.import
            })
        }
        return fromJSONFuncName;
    }


    getTypeName(field: ProtoField) {
        const name = getFieldsTypeName(field);
        if (field.import) {
            this.imports.push({
                type: 'typeImport',
                name,
                import: field.import
            })
        }
        return name;
    }


}

