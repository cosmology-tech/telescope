import { ProtoRoot, ProtoRef } from '@osmonauts/types';
import { ProtoStore } from './store';
declare type TraverseImportNames = Record<string, any>;
declare type TraverseImport = Record<string, string[]>;
declare type TraverseAccept = Record<string, string[]>;
declare type TraverseImplement = Record<string, string[]>;
declare type TraverseExport = Record<string, boolean>;
interface TraverseContext {
    imports: TraverseImport;
    acceptsInterface: TraverseAccept;
    implementsInterface: TraverseImplement;
    exports: TraverseExport;
    store: ProtoStore;
    ref: ProtoRef;
}
declare class TraverseContext implements TraverseContext {
    constructor(store: ProtoStore, ref: ProtoRef);
    addImport(filename: string, symbolName: string): void;
    addImplements(filename: string, symbolName: string): void;
    addAccepts(filename: string, symbolName: string): void;
    addExport(symbolName: string): void;
    getImportNames(): {};
}
export declare const traverse: (store: ProtoStore, ref: ProtoRef) => ProtoRoot & {
    parsedImports: TraverseImport;
    parsedExports: TraverseExport;
    importNames: TraverseImportNames;
};
export declare const recursiveTraversal: (store: ProtoStore, ref: ProtoRef, obj: any, context: TraverseContext, traversal: string[], isNested: boolean) => any;
export {};
