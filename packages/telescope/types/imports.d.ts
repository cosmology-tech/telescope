import { ImportHash, ServiceMutation } from './types';
import { TelescopeParseContext } from './build';
export declare const buildAllImports: (context: TelescopeParseContext, allImports: ImportHash, filepath: string) => any[];
export declare const getAminoImportsFromMutations: (mutations: ServiceMutation[]) => {
    import: string;
    name: string;
}[];
export declare const getServiceDependencies: (mutations: ServiceMutation[], filename: string) => {};
