import { AminoOptions, ProtoField, ProtoRef } from '@osmonauts/types';
import { ProtoStore } from '@osmonauts/proto-parser';
export interface ParseContext {
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
export declare class GenericParseContext implements ParseContext {
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    store: ProtoStore;
    ref: ProtoRef;
    addUtil(util: any): void;
    addImport(imp: ImportUsage): void;
}
export declare class AminoParseContext extends GenericParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    options: AminoOptions;
    constructor(ref: ProtoRef, store: ProtoStore, options?: AminoOptions);
    private lookupTypeFromCurrentPath;
    getTypeFromCurrentPath(field: ProtoField, currentProtoPath: string): any;
    lookupEnumFromJson(field: ProtoField, currentProtoPath: string): string;
    lookupEnumToJson(field: ProtoField, currentProtoPath: string): string;
}
export declare class ProtoParseContext extends GenericParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    constructor(ref: ProtoRef, store: ProtoStore);
    getToEnum(field: ProtoField): string;
    getFromEnum(field: ProtoField): string;
    getTypeName(field: ProtoField): string;
}
