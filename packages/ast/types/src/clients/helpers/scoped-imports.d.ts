import * as t from '@babel/types';
export declare const lcdArguments: () => t.ObjectProperty[];
export declare const newAwaitImport: (path: string, className: string, _arguments: t.ObjectExpression[]) => t.NewExpression;
export declare const recursiveObjectProps: (names: string[], leaf?: any) => t.ObjectExpression;
export declare const nestedImportObject: (obj: object, className: string, _arguments: t.ObjectProperty[]) => any;
export declare const createScopedImportObject: (obj: object, identifier: string, className: string, _arguments: t.ObjectProperty[]) => t.ExportNamedDeclaration;
