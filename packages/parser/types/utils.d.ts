import { InterfaceTypeUrlMap, ProtoRef, ProtoRoot } from '@cosmology/types';
import { ProtoStore } from './store';
export declare const getNestedProto: (root: ProtoRoot) => any;
export declare const getNestedProtoGeneric: (root: ProtoRoot, path: string[]) => any;
export declare const getNested: (root: ProtoRoot, path: string[]) => any;
export declare const lookupSymbolScopes: (name: string, relativeTo: string, list?: string[]) => any;
export declare const createTypeUrlTypeMap: (store: ProtoStore, fromRef: ProtoRef) => InterfaceTypeUrlMap;
/**
 * test if a proto ref is included by the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param include patterns(will be deprecated soon), packages, proto files to include
 * @returns
 */
export declare const isRefIncluded: (ref: ProtoRef, include?: {
    patterns?: string[];
    packages?: string[];
    protos?: string[];
}) => boolean;
/**
 * test if a proto ref is excluded from the operation.
 * @param ref a ProtoRef with proto file info and package.
 * @param exclude patterns(will be deprecated soon), packages, proto files to exclude
 * @returns
 */
export declare const isRefExcluded: (ref: ProtoRef, exclude?: {
    packages?: string[];
    protos?: string[];
}) => boolean;
export declare const getPackageAndNestedFromStr: (type: string, pkg: string) => {
    nested: string;
    package: string;
};
export declare const getServices: (root: ProtoRoot) => any[];
export declare const getTypes: (root: ProtoRoot) => any[];
export declare const getEnums: (root: ProtoRoot) => any[];
export declare const getObjectName: (name: string, scope?: string[]) => string;
export declare const SCALAR_TYPES: string[];
export declare const instanceType: (obj: any) => {
    type: string;
    name?: undefined;
} | {
    name: any;
    type: string;
};
/**
 * get a protoref instance for scope check by package.
 * @param pkg package used to do the scope check.
 * @returns
 */
export declare const createEmptyProtoRef: (pkg?: string, filename?: string) => ProtoRef;
