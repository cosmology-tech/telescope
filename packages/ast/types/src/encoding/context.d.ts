import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { AminoOptions } from './amino';
import { ProtoField } from './proto';
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
export declare class GenericParseContext implements ParseContext {
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    addUtil(util: any): void;
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
    getToEnum(field: ProtoField): string;
    getFromEnum(field: ProtoField): string;
    getTypeName(field: ProtoField): string;
}
