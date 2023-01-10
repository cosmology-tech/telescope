import { TelescopeOptions, ProtoField, ProtoRef, TraversalSymbol } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeBaseTypes } from './types';
export interface ParseContext {
    options: TelescopeOptions;
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    addUtil: Function;
}
export interface ImportUsage {
    type: 'typeImport' | 'toJSONEnum' | 'fromJSONEnum';
    name: string;
    import: string;
    importedAs?: string;
}
interface DerivativeImport {
    type: TelescopeBaseTypes;
    symbol: TraversalSymbol;
}
export declare class GenericParseContext implements ParseContext {
    options: TelescopeOptions;
    imports: ImportUsage[];
    derivedImports: DerivativeImport[];
    utils: Record<string, boolean>;
    store: ProtoStore;
    ref: ProtoRef;
    constructor(ref: ProtoRef, store: ProtoStore, options: TelescopeOptions);
    pluginValue(name: any): any;
    isExcluded(): any;
    addUtil(util: any): void;
    addImport(imp: ImportUsage): void;
    addImportDerivative(imp: DerivativeImport): void;
    getTypeNameFromFieldName(name: string, importSrc: string): string;
    getTypeName(field: ProtoField): string;
    lookupTypeFromCurrentPath(field: ProtoField, currentProtoPath: string): import("@osmonauts/proto-parser").Lookup;
    getTypeFromCurrentPath(field: ProtoField, currentProtoPath: string): any;
}
export declare class AminoParseContext extends GenericParseContext implements ParseContext {
    aminoCasingFn: Function;
    constructor(ref: ProtoRef, store: ProtoStore, options: TelescopeOptions);
    private setAminoCasingFn;
    aminoCaseField(field: ProtoField): string;
    lookupEnumFromJson(field: ProtoField, currentProtoPath: string): string;
    lookupEnumToJson(field: ProtoField, currentProtoPath: string): string;
}
export declare class ProtoParseContext extends GenericParseContext implements ParseContext {
    constructor(ref: ProtoRef, store: ProtoStore, options: TelescopeOptions);
    getToEnum(field: ProtoField): string;
    getFromEnum(field: ProtoField): string;
}
export {};
