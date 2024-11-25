import { ProtoRef, ProtoRoot, HelperFuncNameMappers } from "@cosmology/types";
export declare const getNestedProto: (root: ProtoRoot) => any;
export declare const getNestedProtoGeneric: (root: ProtoRoot, path: string[]) => any;
export declare const getNested: (root: ProtoRoot, path: string[]) => any;
/**
 * to make a customized hook name.
 * e.g. snake_case -> useSnakeCase.
 *      Snake -> use_Snake (be more careful on this case)
 *      snake_Case -> useSnake_Case (be more careful on this case)
 * There're some wierd cases because of the camel function only replaces lower case letters leading with '_' to upper case.
 * @param name base name without the word 'use'
 * @returns customized hook name like 'useSth'
 */
export declare const makeUseHookName: (name: string) => any;
export declare const makeUseHookNameWithCamel: (name: string) => any;
export declare const makeUsePkgHookName: (packageName: string, name: string) => any;
export declare const makePkgMethodName: (packageName: string, name: string) => any;
export declare const makeUseHookTypeName: (name: string) => string;
export declare const makeHookKeyName: (name: string) => any;
/**
 * Get a list of query method names that matches the given patterns.
 * @param packagePath package path like 'cosmos.bank.v1beta1'
 * @param methodKeys query method names
 * @param patterns minimatch pattern like 'cosmos.auth.**'
 * @returns Array of query method names match the given pattern.
 */
export declare const getQueryMethodNames: (packagePath: string, methodKeys: string[], patterns?: string[], makeMethodName?: Function) => string[];
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
 * test if a package is included in certain pattern.
 * @param input is a package.
 * @param patterns to match the package
 * @returns bool
 */
export declare const isPackageIncluded: (input: any, patterns: any) => any;
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
export declare const getObjectName: (name: string, scope?: string[]) => string;
export declare const getTypeNameFromFieldName: (name: string, importSrc: string, ref: ProtoRef) => string;
/**
 * get the name of the helper function.
 * @param packagePath e.g. "cosmos.bank.v1beta1"
 * @param methodKey e.g. "balance"
 * @param mappers a list of mappers to apply. An earlier one will override a later one.
 */
export declare function getHelperFuncName(packagePath: string, methodKey: string, mappers: HelperFuncNameMappers[], defaultFuncBodyFn: "unchanged" | "get" | ((name: string) => string)): {
    creator: string;
    hook: string;
};
