import * as t from "@babel/types";
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
export declare function createQueryHelperCreator(context: GenericParseContext, service: ProtoService, methodKey: string, helperCreatorName: string): t.ReturnStatement;
/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export declare function createQueryHooks(context: GenericParseContext, service: ProtoService, methodKey: string, helperCreatorName: string, hookName: string): t.ReturnStatement;
