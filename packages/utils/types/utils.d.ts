import { TelescopeOptions, TelescopeOption, ProtoRef, ImportUsage } from "@subql/x-cosmology-types";
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
export declare const getTypeNameFromFieldName: (name: string, importSrc: string, ref: ProtoRef) => string;
export declare const convertIfWinPath: (reg: RegExp, replaceValue: string, path: string) => string;
export declare const ToUnixPath: RegExp;
export declare const ToWindowsPath: RegExp;
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
