import * as t from '@babel/types';
export declare const recursiveModuleBundle: (obj: any) => any;
export declare const importNamespace: (ident: string, path: string) => t.ImportDeclaration;
export declare const parsePackage: (obj: any, bundleFile: any, importPaths: any, bundleVariables: any) => void;
