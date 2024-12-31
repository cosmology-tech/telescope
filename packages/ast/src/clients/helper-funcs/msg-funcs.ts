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
export function createMsgHelperCreator(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    helperCreatorName?: string
) {
    context.addUtil("buildTx");
    context.addUtil("ISigningClient");
    context.addUtil("SigningClientResolver");
    context.addUtil("toEncoders");
    context.addUtil("toConverters");

    const useGlobalDecoderRegistry =
        context.pluginValue("interfaces.enabled") &&
        context.pluginValue("interfaces.useGlobalDecoderRegistry") &&
        context.pluginValue("helperFuncCreators.enabled") &&
        context.pluginValue("helperFuncCreators.useGlobalDecoderRegistry");

    const callExpression = ast.callExpression(ast.identifier("buildTx"), [
        ast.objectExpression(
            [
                ast.objectProperty(
                    ast.identifier("clientResolver"),
                    ast.identifier("clientResolver"),
                    false,
                    true
                ),
                ast.objectProperty(
                    ast.identifier("typeUrl"),
                    ast.memberExpression(
                        ast.identifier(service.requestType),
                        ast.identifier("typeUrl")
                    )
                ),
                ast.objectProperty(
                    ast.identifier("encoders"),
                    ast.callExpression(ast.identifier("toEncoders"), [
                        ast.identifier(service.requestType),
                    ])
                ),
                ast.objectProperty(
                    ast.identifier("converters"),
                    ast.callExpression(ast.identifier("toConverters"), [
                        ast.identifier(service.requestType),
                    ])
                ),
                useGlobalDecoderRegistry &&
                    ast.objectProperty(
                        ast.identifier("deps"),
                        ast.arrayExpression([
                            ast.identifier(service.requestType),
                        ])
                    ),
            ].filter(Boolean)
        ),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
    ]);
    const customHookArgumentsType = ast.tsTypeAnnotation(
        ast.tsTypeReference(ast.identifier("SigningClientResolver"))
    );
    const arg = ast.identifier("clientResolver");
    arg.typeAnnotation = customHookArgumentsType;
    arg.optional = true;
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
    service: ProtoServiceMethod,
    helperCreatorName?: string,
    hookName?: string
) {
    context.addUtil("buildUseMutation");

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
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(`Error`)),
    ]);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}
