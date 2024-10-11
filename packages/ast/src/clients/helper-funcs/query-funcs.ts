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
export function createQueryHelperCreator(
    context: GenericParseContext,
    service: ProtoService,
    methodKey: string,
    helperCreatorName: string,
) {
    return t.identifier(helperCreatorName);
}

/**
 *
 * @param context
 * @param service
 * @param methodKey e.g. "balance"
 * @param helperCreatorName e.g. "createGetBalance"
 * @param hookName e.g. "useGetBalance"
 * @returns
 */
export function createQueryHooks(
    context: GenericParseContext,
    service: ProtoService,
    methodKey: string,
    helperCreatorName: string,
    hookName: string,
) {
    return t.identifier(hookName);
}
