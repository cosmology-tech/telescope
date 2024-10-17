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
export function createQueryHelperCreator(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    methodKey?: string,
    helperCreatorName?: string
) {
    context.addUtil("SigningClientResolver");
    const callExpression = ast.callExpression(ast.identifier("buildQuery"), [
        ast.objectExpression([
            ast.objectProperty(
                ast.identifier("Encoder"),
                ast.memberExpression(
                    ast.identifier(service.requestType),
                    ast.identifier("encode")
                )
            ),
            ast.objectProperty(
                ast.identifier("Decoder"),
                ast.memberExpression(
                    ast.identifier(service.responseType),
                    ast.identifier("decode")
                )
            ),
            ast.objectProperty(
                ast.identifier("service"),
                // Does this value needs to change?
                ast.stringLiteral("cosmos.bank.v1beta1.Query")
            ),
            ast.objectProperty(
                ast.identifier("method"),
                ast.stringLiteral(methodKey)
            ),
            ast.objectProperty(
                ast.identifier("getRpcInstance"),
                ast.identifier("getRpcInstance")
            ),
        ]),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(service.responseType)),
    ]);

    const customHookArgumentsType = ast.tsTypeAnnotation(
        ast.tsTypeReference(ast.identifier("SigningClientResolver"))
    );
    const arg = ast.identifier("getRpcInstance");

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
export function createQueryHooks(
    context: GenericParseContext,
    service: ProtoServiceMethod,
    methodKey?: string,
    helperCreatorName?: string,
    hookName?: string
) {
    const callExpression = ast.callExpression(ast.identifier("buildUseQuery"), [
        ast.objectExpression([
            ast.objectProperty(
                ast.identifier("builderQueryFn"),
                ast.identifier(helperCreatorName)
            ),
            ast.objectProperty(
                ast.identifier("queryKeyPrefix"),
                ast.stringLiteral(`${methodKey}Query`)
            ),
        ]),
    ]);
    callExpression.typeParameters = ast.tsTypeParameterInstantiation([
        ast.tsTypeReference(ast.identifier(service.requestType)),
        ast.tsTypeReference(ast.identifier(service.responseType)),
    ]);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}
