import { TelescopeOptions, ProtoField, ProtoRef, TraversalSymbol, IParseContext, ImportUsage } from '@cosmology/types';
import { IProtoStore } from '@cosmology/types';
import { isRefExcluded, getObjectName } from '@cosmology/utils';
import { getEnumFromJsonName, getEnumToJsonName, getFieldsTypeName } from './proto';
import { getPluginValue } from '../plugins';
import { TelescopeBaseTypes } from './types';

interface DerivativeImport {
    type: TelescopeBaseTypes,
    symbol: TraversalSymbol
}
export class GenericParseContext implements IParseContext {
    options: TelescopeOptions;
    imports: ImportUsage[] = [];
    derivedImports: DerivativeImport[] = [];
    utils: Record<string, boolean> = {};
    store: IProtoStore;
    ref: ProtoRef;

    constructor(
        ref: ProtoRef,
        store: IProtoStore,
        options: TelescopeOptions
    ) {
        this.ref = ref;
        this.store = store;
        this.options = options;
        if (!this.options) {
            throw new Error('ParseContext requires options!');
        }

    }

    pluginValue(name) {
        return getPluginValue(name, this.ref?.proto?.package, this.options);
    }

    isExcluded() {
        const excluded = this.pluginValue('prototypes.excluded');
        return isRefExcluded(this.ref, excluded)
    }

    addUtil(util) {
        this.utils[util] = true;
    }

    addImport(imp: ImportUsage) {
        // some local lookups don't have an import (local proto-style lookups do)
        if (!imp.import) return;
        this.imports.push(imp)
    }

    addImportDerivative(imp: DerivativeImport) {
        const found = this.derivedImports.find(a => {
            return a.type === imp.type &&
                a.symbol.symbolName === imp.symbol.symbolName &&
                a.symbol.source === imp.symbol.source;
        });
        if (!found) {
            this.derivedImports.push(imp);
        }
    }

    getTypeNameFromFieldName(name: string, importSrc: string) {
        let importedAs = name;
        const names = this.ref.traversed?.importNames;
        if (names
            && names.hasOwnProperty(importSrc)
            && names[importSrc].hasOwnProperty(name)
        ) {

            importedAs = names[importSrc][name];
        }
        this.addImport({
            type: 'typeImport',
            name,
            importedAs,
            import: importSrc
        })
        return importedAs;
    }

    getTypeName(field: ProtoField) {
        let name = getFieldsTypeName(field);
        return this.getTypeNameFromFieldName(name, field.import);
    }

    lookupTypeFromCurrentPath(field: ProtoField, currentProtoPath: string) {
        const ref = this.store.findProto(currentProtoPath);
        let lookup = this.store.get(ref, field.parsedType.name);
        if (!lookup) {

            // if we can't find it, use field import
            if (field.import) {
                const importRef = this.store.findProto(field.import);
                if (!importRef) {
                    throw new Error(`bad import ${field.import}`);
                }
                lookup = this.store.get(importRef, field.parsedType.name);
            }

            if (!lookup) {
                throw new Error('Undefined Symbol: ' + field.parsedType.name);
            }
        }
        return lookup;
    }

    getTypeFromCurrentPath(field: ProtoField, currentProtoPath: string) {
        const ref = this.store.findProto(currentProtoPath);
        let lookup = this.store.get(ref, field.parsedType.name);
        if (!lookup) {

            // if we can't find it, use field import
            if (field.import) {
                const importRef = this.store.findProto(field.import);
                if (!importRef) {
                    throw new Error(`bad import ${field.import}`);
                }
                lookup = this.store.get(importRef, field.parsedType.name);
            }

            if (!lookup) {
                throw new Error('Undefined Symbol: ' + field.parsedType.name);
            }
        }

        this.addImport(
            {
                type: 'typeImport',
                name: lookup.importedName,
                import: lookup.import
            }
        )

        return lookup.obj;
    }

}

export class AminoParseContext extends GenericParseContext implements IParseContext {

    aminoCasingFn: Function;

    constructor(
        ref: ProtoRef,
        store: IProtoStore,
        options: TelescopeOptions
    ) {
        super(ref, store, options);
        this.ref = ref;
        this.store = store;
        this.options = options;

        this.setAminoCasingFn();

        if (!this.aminoCasingFn) {
            throw new Error('missing aminoCasingFn!')
        }
        this.aminoCaseField = this.aminoCaseField.bind(this);
    }

    private setAminoCasingFn() {
        if (this.aminoCasingFn) return this.aminoCasingFn;
        this.aminoCasingFn = this.pluginValue('aminoEncoding.casingFn');
        return this.aminoCasingFn;
    }

    aminoCaseField(field: ProtoField) {
        return field.options['(telescope:orig)'];
    }

    lookupEnumFromJson(field: ProtoField, currentProtoPath: string) {
        const lookup = this.lookupTypeFromCurrentPath(field, currentProtoPath);
        const Enum = lookup.obj;
        const name = getEnumFromJsonName(getObjectName(Enum.name, Enum.scope));
        this.addImport({
            type: 'fromJSONEnum',
            name,
            import: lookup.import
        });
        return name;
    }

    lookupEnumToJson(field: ProtoField, currentProtoPath: string) {
        const lookup = this.lookupTypeFromCurrentPath(field, currentProtoPath);
        const Enum = lookup.obj;
        const name = getEnumToJsonName(getObjectName(Enum.name, Enum.scope));
        this.addImport({
            type: 'toJSONEnum',
            name,
            import: lookup.import
        });
        return name;
    }

}
export class ProtoParseContext extends GenericParseContext implements IParseContext {

    constructor(
        ref: ProtoRef,
        store: IProtoStore,
        options: TelescopeOptions
    ) {
        super(ref, store, options);
        this.ref = ref;
        this.store = store;
        this.options = options;
    }

    getToEnum(field: ProtoField) {
        const name = getEnumToJsonName(getFieldsTypeName(field));
        this.addImport({
            type: 'toJSONEnum',
            name,
            import: field.import
        });
        return name;
    }

    getFromEnum(field: ProtoField) {
        const fromJSONFuncName = getEnumFromJsonName(getFieldsTypeName(field));
        this.addImport({
            type: 'fromJSONEnum',
            name: fromJSONFuncName,
            import: field.import
        });
        return fromJSONFuncName;
    }

}

