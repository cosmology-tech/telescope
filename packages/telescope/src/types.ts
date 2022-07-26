import { TelescopeOptions } from '@osmonauts/types';


export interface Bundle {
    bundleVariables: {};
    bundleFile: string;
    importPaths: any[];
    base: string;
}
export interface BundlerFile {
    package?: string;
    localname: string;
    filename: string;
}

export interface ServiceInfo {
    methodName: string;
    package: string;
    message: string;
    messageImport: string;
    response: string;
    responseImport: string;
    comment?: string;
}
export interface ServiceMutation extends ServiceInfo {
}
export interface ServiceQuery extends ServiceInfo {
}

export interface ImportObj {
    type: 'import' | 'default' | 'namespace';
    name: string;
    path: string;
    importAs?: string;
}
export interface ImportHash {
    [key: string]: string[];
}

export interface TelescopeInput {
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
}
