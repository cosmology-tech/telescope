import { ProtoRoot, ProtoRef } from '@cosmology/types';
import { ImportObj, UtilValue } from '../types';
export declare const getRoot: (ref: ProtoRef) => ProtoRoot;
export declare const UTILS: {
    [key: string]: UtilValue;
};
export declare const UTIL_HELPERS: string[];
export declare const fixlocalpaths: (imports: ImportObj[]) => {
    path: string;
    type: string;
    name: string;
    importAs?: string;
}[];
export declare const getRelativePath: (f1: string, f2: string, ext?: string) => string;
export * from './common-create-bundle';
