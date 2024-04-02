import { TelescopeOptions, ProtoField, ProtoRef, TraversalSymbol, IParseContext, ImportUsage } from '@cosmology/types';
import { IProtoStore } from '@cosmology/types';
import { TelescopeBaseTypes } from './types';
interface DerivativeImport {
    type: TelescopeBaseTypes;
    symbol: TraversalSymbol;
}
export declare class GenericParseContext implements IParseContext {
    options: TelescopeOptions;
    imports: ImportUsage[];
    derivedImports: DerivativeImport[];
    utils: Record<string, boolean>;
    store: IProtoStore;
    ref: ProtoRef;
    constructor(ref: ProtoRef, store: IProtoStore, options: TelescopeOptions);
    pluginValue(name: any): any;
    isExcluded(): boolean;
    addUtil(util: any): void;
    addImport(imp: ImportUsage): void;
    addImportDerivative(imp: DerivativeImport): void;
    getTypeNameFromFieldName(name: string, importSrc: string): string;
    getTypeName(field: ProtoField): string;
    lookupTypeFromCurrentPath(field: ProtoField, currentProtoPath: string): import("@cosmology/types").Lookup;
    getTypeFromCurrentPath(field: ProtoField, currentProtoPath: string): any;
}
export declare class AminoParseContext extends GenericParseContext implements IParseContext {
    aminoCasingFn: Function;
    constructor(ref: ProtoRef, store: IProtoStore, options: TelescopeOptions);
    private setAminoCasingFn;
    aminoCaseField(field: ProtoField): string;
    lookupEnumFromJson(field: ProtoField, currentProtoPath: string): string;
    lookupEnumToJson(field: ProtoField, currentProtoPath: string): string;
}
export declare class ProtoParseContext extends GenericParseContext implements IParseContext {
    constructor(ref: ProtoRef, store: IProtoStore, options: TelescopeOptions);
    setEnumValues(pkg: string, name: string, values: number[]): void;
    isEnumValueExisting(pkg: string, name: string, value: number): boolean;
    getExistingSmallestValue(pkg: string, name: string, value: number): number;
    getToEnum(field: ProtoField): string;
    getFromEnum(field: ProtoField): string;
}
export {};
