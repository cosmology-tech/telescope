import { ProtoStore } from './store';
import { ProtoRoot } from './types';
export declare const traverse: (store: ProtoStore, root: ProtoRoot) => ProtoRoot & {
    parsedImports: Record<string, string[]>;
};
export declare const recursiveTraversal: (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => any;
