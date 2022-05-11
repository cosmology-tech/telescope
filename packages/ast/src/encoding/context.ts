import { ProtoStore, ProtoRef, getObjectName } from '@osmonauts/proto-parser';
import { snake } from 'case';
import { AminoOptions } from './amino';
import { getEnumFromJsonName, getEnumToJsonName, getFieldsTypeName, ProtoField } from './proto';
export interface ParseContext {
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    addUtil: Function;
}

export interface ImportUsage {
    type: 'typeImport' | 'toJSONEnum' | 'fromJSONEnum';
    name: string;
    import: string;
}
export class GenericParseContext implements ParseContext {
    imports: ImportUsage[] = [];
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
export class AminoParseContext extends GenericParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    options: AminoOptions;

    constructor(
        ref: ProtoRef,
        store: ProtoStore,
        options?: AminoOptions
    ) {
        super();
        this.ref = ref;
        this.store = store;
        if (options) this.options = options;
        else this.options = createDefaultAminoOptions()
    }

    private lookupTypeFromCurrentPath(field: ProtoField, currentProtoPath: string) {
        const ref = this.store.findProto(currentProtoPath);
        const lookup = this.store.get(ref, field.parsedType.name);
        if (!lookup) {
            throw new Error('Undefined Symbol: ' + field.parsedType.name);
        }
        return lookup;
    }

    getTypeFromCurrentPath(field: ProtoField, currentProtoPath: string) {
        const ref = this.store.findProto(currentProtoPath);
        const lookup = this.store.get(ref, field.parsedType.name);
        if (!lookup) {
            throw new Error('Undefined Symbol: ' + field.parsedType.name);
        }

        if (lookup.import) {
            this.imports.push({
                type: 'typeImport',
                name: lookup.importedName,
                import: lookup.import
            })
        }

        return lookup.obj;
    }

    lookupEnumFromJson(field: ProtoField, currentProtoPath: string) {
        const lookup = this.lookupTypeFromCurrentPath(field, currentProtoPath);
        const Enum = lookup.obj;
        const name = getEnumFromJsonName(getObjectName(Enum.name, Enum.scope));
        if (lookup.import) {
            this.imports.push({
                type: 'fromJSONEnum',
                name,
                import: lookup.import
            });
        }
        return name;
    }

    lookupEnumToJson(field: ProtoField, currentProtoPath: string) {
        const lookup = this.lookupTypeFromCurrentPath(field, currentProtoPath);
        const Enum = lookup.obj;
        const name = getEnumToJsonName(getObjectName(Enum.name, Enum.scope));
        if (lookup.import) {
            this.imports.push({
                type: 'toJSONEnum',
                name,
                import: lookup.import
            });
        }
        return name;
    }

}
export class ProtoParseContext extends GenericParseContext implements ParseContext {
    getToEnum(field: ProtoField) {
        const name = getEnumToJsonName(getFieldsTypeName(field));
        if (field.import) {
            this.imports.push({
                type: 'toJSONEnum',
                name,
                import: field.import
            })
        }
        return name;
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

