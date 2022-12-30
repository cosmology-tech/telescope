import { TraversedProtoRoot, ProtoRef, TraverseImport, TraverseAccept, TraverseImplement, TraverseExport, TraverseImportNames, TraversalSymbol } from '@osmonauts/types';
import { ProtoStore } from './store';
export interface TraverseContext {
    imports: TraverseImport;
    acceptsInterface: TraverseAccept;
    implementsInterface: TraverseImplement;
    exports: TraverseExport;
    store: ProtoStore;
    ref: ProtoRef;
}
export declare class TraverseContext implements TraverseContext {
    constructor(store: ProtoStore, ref: ProtoRef);
    addImport(filename: string, symbolName: string): void;
    addImplements(symbolName: string, msgName: string): void;
    addAccepts(symbolName: string, msgName: string): void;
    addExport(symbolName: string): void;
}
export declare const symbolsToImportNames: (ref: ProtoRef, symbols: TraversalSymbol[]) => TraverseImportNames;
export declare const parseFullyTraversedProtoImports: (store: ProtoStore) => TraversalSymbol[];
export declare const traverse: (store: ProtoStore, ref: ProtoRef) => TraversedProtoRoot;
export declare const recursiveTraversal: (store: ProtoStore, ref: ProtoRef, obj: any, context: TraverseContext, traversal: string[], isNested: boolean) => any;
