import * as ast from "@babel/types";
import { ProtoService } from "@cosmology/types";
import { GenericParseContext } from "../../encoding";
/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @returns
 */
export declare function createMsgHelperCreator(context: GenericParseContext, service: ProtoService, methodKey?: string, helperCreatorName?: string): ast.ExportNamedDeclaration;
/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export declare function createMsgHooks(context: GenericParseContext, service: ProtoService, methodKey?: string, helperCreatorName?: string, hookName?: string): ast.ExportNamedDeclaration;
