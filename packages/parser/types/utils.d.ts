import { InterfaceTypeUrlMap, ProtoRef, ProtoRoot } from '@subql/x-cosmology-types';
import { ProtoStore } from './store';
export { isRefExcluded, isRefIncluded, getObjectName } from '@subql/x-cosmology-utils';
export declare const lookupSymbolScopes: (name: string, relativeTo: string, list?: string[]) => any;
export declare const createTypeUrlTypeMap: (store: ProtoStore, fromRef: ProtoRef) => InterfaceTypeUrlMap;
export declare const getPackageAndNestedFromStr: (type: string, pkg: string) => {
    nested: string;
    package: string;
};
export declare const getServices: (root: ProtoRoot) => any[];
export declare const getTypes: (root: ProtoRoot) => any[];
export declare const getEnums: (root: ProtoRoot) => any[];
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
