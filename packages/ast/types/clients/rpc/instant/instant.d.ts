import * as t from "@babel/types";
import { GenericParseContext } from "../../../encoding";
export declare const createInstantRpcInterface: (name: string, extendInterfaces: {
    importedVarName: string;
    interfaceName: string;
}[]) => t.ExportNamedDeclaration;
export declare const createInstantRpcClass: (context: GenericParseContext, name: string, instantMapping: {
    [key: string]: {
        methodName: string;
        importedVarName: string;
        isMsg?: boolean;
        comment?: string;
    };
}) => t.ExportNamedDeclaration;
