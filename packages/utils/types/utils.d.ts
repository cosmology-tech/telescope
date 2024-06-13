import { TelescopeOptions, TelescopeOption, ImportUsage, ProtoEnum } from "@cosmology/types";
import { ImportDeclaration } from "@babel/types";
/**
 * swap the key and value of the input object
 * @param input obj needs to swap
 * @returns swapped obj
 */
export declare const swapKeyValue: (input: {
    [key: string]: string;
}) => {
    [key: string]: string;
};
export declare const getPluginValue: (optionName: TelescopeOption | string, currentPkg: string, options: TelescopeOptions) => any;
export declare const buildImports: (imports: ImportUsage[]) => {
    type: string;
    importKind: string;
    specifiers: {
        type: string;
        local: {
            type: string;
            name: string;
        };
    }[];
    source: {
        type: string;
        value: string;
    };
}[];
export declare const getServiceImplement: (serviceName: "Msg" | "Query" | "Service" | "ReflectionService" | "ABCIApplication" | string, packagePath: string, methodName: string, serviceImplement?: {
    [key: string]: {
        include?: {
            patterns?: string[];
        };
        type: "Query" | "Tx" | string;
    };
}) => string;
/**
 * Add extension to path
 */
export declare const restoreExtension: (path: string, ext?: string) => string;
/**
 * To duplicate the import paths with the extension.
 * @param paths ImportDeclarations
 * @param ext extension
 * @returns duplicated import paths with the extension
 */
export declare const duplicateImportPathsWithExt: (paths: ImportDeclaration[], ext?: string) => ImportDeclaration[];
export interface EnumValue {
    name: string;
    comment?: string | null;
    value: number;
}
export declare const getEnumValues: (proto: ProtoEnum) => EnumValue[];
/**
 * get the type name by enum object while traversing the nested enum
 * @param field
 * @param pkg name space
 * @param traversal traversed name spaces and nested enum names
 * @param isNested whether the enum is nested
 * @returns
 */
export declare const getTypeNameByEnumObj: (field: any, pkg: string, traversal: string[], isNested: boolean) => any;
/**
 * Converts a protobuf package path into a deeply nested JSON path format suitable for
 * hierarchical representations. This function is ideal for adapting proto package paths
 * to structured configurations or mappings in JSON.
 *
 * @param protoPath The protobuf package path as a string, typically formatted as
 *                  a directory-like structure such as "cosmwasm/wasm/v1/types.proto".
 *                  The "types.proto" or any file name with '.proto' is excluded from
 *                  the conversion.
 *
 *                  Example input:
 *                  - "cosmwasm/wasm/v1/types.proto"
 *
 * @returns A string representing the deeply nested JSON path. The function constructs this
 *          by starting with "/root/nested" and appending "/nested/{part}" for each segment
 *          of the original path.
 *
 *          Example output for "cosmwasm/wasm/v1/types.proto":
 *          - "/root/nested/cosmwasm/nested/wasm/nested/v1"
 *
 * Usage:
 * const jsonNestedPath = convertProtoPathToNestedJSONPath("cosmwasm/wasm/v1/types.proto");
 * console.log(jsonNestedPath);  // Outputs: "/root/nested/cosmwasm/nested/wasm/nested/v1/nested"
 */
export declare function convertProtoPathToNestedJSONPath(protoPath: string): string;
