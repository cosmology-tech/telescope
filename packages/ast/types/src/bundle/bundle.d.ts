import * as t from '@babel/types';
import { TelescopeOptions } from '@cosmology/types';
export declare const recursiveModuleBundle: (options: TelescopeOptions, obj: any) => any;
export declare const recursiveOtherNameSpaces: (objs: any) => t.ObjectProperty[];
export declare const importNamespace: (ident: string, path: string) => t.ImportDeclaration;
