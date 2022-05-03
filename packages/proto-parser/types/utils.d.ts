import { ProtoStore } from './store';
import { ProtoRoot } from './types';
export declare const getNestedProto: (root: ProtoRoot) => any;
export declare const getServices: (root: ProtoRoot) => any[];
export declare const getTypes: (root: ProtoRoot) => any[];
export declare const getEnums: (root: ProtoRoot) => any[];
export declare const recursiveLookup: (proto: any, name: string, scope?: string[], allowNested?: boolean) => any;
export declare const importLookup: (store: ProtoStore, root: ProtoRoot, name: string) => {
    name: string;
    import: string;
    importedName: string;
    obj: any;
};
export declare const protoImportLookup: (store: ProtoStore, root: ProtoRoot, name: string) => {
    import: string;
    obj: any;
    importedName: string;
    name: string;
    package: string;
};
export declare const lookup: (store: ProtoStore, root: ProtoRoot, name: string, allowNested?: boolean) => any;
export declare const getObjectName: (name: string, scope?: string[]) => string;
export declare const traverse: (store: ProtoStore, root: ProtoRoot) => ProtoRoot & {
    parsedImports: Record<string, string[]>;
};
export declare const recursiveTraversal: (store: ProtoStore, root: ProtoRoot, obj: any, imports: object) => any;
export declare const instanceType: (obj: any) => {
    type: string;
    name?: undefined;
} | {
    name: any;
    type: string;
};
