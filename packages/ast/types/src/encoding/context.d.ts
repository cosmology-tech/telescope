import { ProtoStore, ProtoRef } from '@osmonauts/proto-parser';
export interface PContext {
    store: ProtoStore;
    ref: ProtoRef;
    scope: string[];
    imports: string[];
    utils: string[];
}
export declare class ParseContext implements PContext {
    store: ProtoStore;
    ref: ProtoRef;
    scope: string[];
    imports: string[];
    utils: string[];
    constructor(ref: ProtoRef, store: ProtoStore);
    spawn(): ParseContext;
    addImport(imp: any): void;
    addUtil(util: any): void;
}
export declare class ProtoParseContext {
    imports: string[];
    utils: string[];
    addImport(imp: any): void;
    addUtil(util: any): void;
}
