import * as t from '@babel/types';
export declare const rpcFuncArguments: () => t.ObjectPattern[];
export declare const rpcClassArguments: () => t.ObjectExpression[];
export declare const rpcNewAwaitImport: (path: string, className: string) => t.NewExpression;
export declare const rpcRecursiveObjectProps: (names: string[], leaf?: any) => t.ObjectExpression;
export declare const rpcNestedImportObject: (obj: object, className: string) => any;
export declare const createScopedRpcFactory: (obj: object, identifier: string, className: string) => t.ExportNamedDeclaration;
