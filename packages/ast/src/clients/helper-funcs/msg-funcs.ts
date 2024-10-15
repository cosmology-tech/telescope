import * as ast from "@babel/types";
import { ProtoService } from "@cosmology/types";
import { GenericParseContext } from "../../encoding";

// ** The end result of generation should include the following imports
// TODO: I need to add the imports for generation instead of hard coding them, it should comes from the UTILS in telescope
/**
    import { buildTx, ISigningClient } from "../../../helper-func-types";
    import { MsgSend, MsgMultiSend } from "./tx";
    import { toConverters, toEncoders } from "@interchainjs/cosmos/utils";
    import { buildUseMutation } from "../../../react-query";
 */

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
    methodKey?: string,
    helperCreatorName?: string
) {
    context.addUtil("buildTx");
    context.addUtil("ISigningClient");
    context.addUtil("buildUseMutation");
    const callExpression = ast.callExpression(ast.identifier("buildTx"), [
        ast.objectExpression([
            ast.objectProperty(
                ast.identifier("getSigningClient"),
                ast.identifier("getSigningClient")
            ),
            ast.objectProperty(
                ast.identifier("typeUrl: "),
                ast.memberExpression(
                    ast.identifier(methodKey),
                    ast.identifier("typeUrl")
                )
            ),
            //**TODO: Improvements, where can i grab toEncoders and toConverters instead of hard coding the string?
            //!!FIX: the toEncoders and toConverters are functions calls, not strings
            ast.objectProperty(
                ast.identifier("encoders"),
                ast.stringLiteral(`toEncoders(${methodKey})`)
            ),
            ast.objectProperty(
                ast.identifier("converters"),
                ast.stringLiteral(`toConverters(${methodKey})`)
            ),
        ]),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(methodKey)),
    ]);
    const customHookArgumentsType = ast.tsTypeAnnotation(
        //TODO: Improvements, Figure out how to write ast code to generate the function expression below instead of hard coding the strong.
        ast.tsTypeReference(ast.identifier(" () => ISigningClient | undefined"))
    );
    const arg = ast.identifier("getSigningClient");
    arg.typeAnnotation = customHookArgumentsType;
    const arrowFuncExp = ast.arrowFunctionExpression([arg], callExpression);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(
                ast.identifier(helperCreatorName),
                arrowFuncExp
            ),
        ])
    );
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
    methodKey?: string,
    helperCreatorName?: string,
    hookName?: string
) {
    const callExpression = ast.callExpression(
        ast.identifier("buildUseMutation"),
        [
            ast.objectExpression([
                ast.objectProperty(
                    ast.identifier("builderMutationFn"),
                    ast.identifier(helperCreatorName)
                ),
            ]),
        ]
    );
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(methodKey)),
        ast.tsTypeReference(ast.identifier(`Error`)),
    ]);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}
