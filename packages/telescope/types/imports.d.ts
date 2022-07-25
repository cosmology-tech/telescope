import { ImportHash, ImportObj, ServiceMutation } from './types';
import { TelescopeParseContext } from './build';
export declare const getImportStatments: (list: ImportObj[]) => any[];
export declare const buildAllImports: (context: TelescopeParseContext, allImports: ImportHash, filepath: string) => any[];
export declare const aggregateImports: (context: TelescopeParseContext, allImports: ImportHash, filepath: string) => any[];
export declare const getImportsFromMutations: (mutations: ServiceMutation[]) => {
    import: string;
    name: string;
}[];
export declare const getImportsFromQueries: (queries: ServiceMutation[]) => any[];
export declare const getDepsFromMutations: (mutations: ServiceMutation[], filename: string) => {};
export declare const getDepsFromQueries: (queries: any[], filename: string) => any;
