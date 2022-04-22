import * as t from '@babel/types';
export declare const recursiveModuleBundle: (obj: any) => any;
export declare const importNamespace: (ident: string, path: string) => t.ImportDeclaration;
export declare const buildClients: (obj: any) => t.ExportNamedDeclaration[];
export declare const parsePackage: (obj: any, bundleFile: any, importPaths: any, bundleVariables: any) => void;
export declare const parsePackageCreateClient: ({ obj, bundleFilePath, clientFilePath, importPaths, bundleVariables, level }: {
    obj: any;
    bundleFilePath: any;
    clientFilePath: any;
    importPaths: any;
    bundleVariables: any;
    level?: number;
}) => void;
