import { ProtoStore } from './store';
import { ProtoRoot, ProtoRef } from './types';
export declare const traverse: (store: ProtoStore, ref: ProtoRef) => ProtoRoot & {
    parsedImports: Record<string, string[]>;
};
export declare const recursiveTraversal: (store: ProtoStore, ref: ProtoRef, obj: any, imports: object) => any;
