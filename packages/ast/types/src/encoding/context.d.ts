import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
import { AminoOptions } from './amino';
import { ProtoField } from './proto';
export interface ParseContext {
    utils: Record<string, boolean>;
    addUtil: Function;
}
export declare class GenericParseContext implements ParseContext {
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    addUtil(util: any): void;
}
export declare class AminoParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    options: AminoOptions;
    utils: Record<string, boolean>;
    constructor(ref: ProtoRef, store: ProtoStore, options?: AminoOptions);
    addUtil(util: any): void;
}
export interface ImportUsage {
    type: 'typeImport' | 'toJSONEnum' | 'fromJSONEnum';
    name: string;
    import: string;
}
export declare class ProtoParseContext implements ParseContext {
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    addUtil(util: any): void;
    getToEnum(field: ProtoField): string;
    getFromEnum(field: ProtoField): string;
    getTypeName(field: ProtoField): string;
}
