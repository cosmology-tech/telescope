import * as ast from "@babel/types";
import { ProtoServiceMethod } from "@cosmology/types";
import { GenericParseContext } from "../../encoding";
/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @returns
 */
export declare function createMsgHelperCreator(context: GenericParseContext, service: ProtoServiceMethod, helperCreatorName?: string): ast.ExportNamedDeclaration;
/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export declare function createMsgHooks(context: GenericParseContext, service: ProtoServiceMethod, helperCreatorName?: string, hookName?: string): ast.ExportNamedDeclaration;
