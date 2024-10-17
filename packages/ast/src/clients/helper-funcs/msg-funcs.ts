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
export function createMsgHelperCreator(
    context: GenericParseContext,
    service: ProtoService,
    methodKey: string,
    helperCreatorName: string
) {
    // get related encoders.
    // e.g.: encoders: toEncoders(MsgMultiSend),

    // get related converters.
    // e.g.: converters: toConverters(MsgMultiSend),

    return t.returnStatement(t.identifier(helperCreatorName));
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
export function createMsgHooks(
    context: GenericParseContext,
    service: ProtoService,
    methodKey: string,
    helperCreatorName: string,
    hookName: string
) {
    return t.returnStatement(t.identifier(hookName));
}
