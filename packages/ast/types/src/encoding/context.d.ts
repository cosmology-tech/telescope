import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
export interface ParseContext {
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    addImport: Function;
    addUtil: Function;
}
export declare class AminoParseContext implements ParseContext {
    store: ProtoStore;
    ref: ProtoRef;
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    constructor(ref: ProtoRef, store: ProtoStore);
    addImport(imp: any): void;
    addUtil(util: any): void;
}
export declare class ProtoParseContext implements ParseContext {
    imports: Record<string, object>;
    utils: Record<string, boolean>;
    addImport(imp: any): void;
    addUtil(util: any): void;
}
