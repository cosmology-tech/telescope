import { ProtoStore } from '@osmonauts/proto-parser';
import { TelescopeBuilder, TelescopeInput } from './index';
import { TelescopeParseContext } from './build';
export declare const getPackages: (store: ProtoStore) => {};
export declare const getPackagesBundled: (store: ProtoStore) => {};
export declare const bundlePackages: (store: ProtoStore, input: TelescopeInput) => {
    bundleFile: string;
    importPaths: any[];
    base: string;
    body: any;
}[];
export declare const bundleRegistries: (telescope: TelescopeBuilder) => {
    package: string;
    contexts: unknown;
}[];
export declare const bundleBaseRegistries: (telescope: TelescopeBuilder) => {
    base: string;
    pkgs: {
        package: string;
        contexts: any;
    }[];
}[];
export declare const parseContextsForRegistry: (contexts: TelescopeParseContext[]) => {
    filename: string;
    imports: {};
    objects: any[];
}[];
export declare const parsePackage: (obj: any, bundleFile: any, importPaths: any, bundleVariables: any) => void;
