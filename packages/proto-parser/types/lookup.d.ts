import { ProtoStore } from './store';
import { ProtoRoot } from './types';
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
