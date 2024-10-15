import * as ast from "@babel/types";
import { ProtoService } from "@cosmology/types";
import { GenericParseContext } from "../../encoding";

// ** The end result of generation should include the following imports
// TODO: I need to add the imports for generation instead of hard coding them, it should comes from the UTILS in telescope
/**
    import { buildQuery } from "../../../helper-func-types";
    import { Rpc } from "../../../helpers";
    import { UseQueryParams, buildUseQuery } from "../../../react-query";
    import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
 */

export function createTypeAliases(
    context: GenericParseContext,
    service: ProtoService,
    methodKey?: string,
    helperCreatorName?: string
) {
    context.addUtil("buildQuery");
    context.addUtil("Rpc");
    context.addUtil("UseQueryParams");
    context.addUtil("buildUseQuery");

    return ast.exportNamedDeclaration(
        ast.tsTypeAliasDeclaration(
            ast.identifier(`Use${methodKey}Query`),
            // No type parameters for type alias
            // To add a type parameter, use ast.tsTypeParameterDeclaration([]),
            null,
            ast.tsTypeReference(
                ast.identifier("UseQueryParams"),
                ast.tsTypeParameterInstantiation([
                    ast.tsTypeReference(
                        ast.identifier(service.methods[methodKey].requestType)
                    ),
                    ast.tsTypeReference(
                        ast.identifier(service.methods[methodKey].responseType)
                    ),
                ])
            )
        )
    );
}
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
    methodKey?: string,
    helperCreatorName?: string
) {
    const callExpression = ast.callExpression(ast.identifier("buildQuery"), [
        ast.objectExpression([
            ast.objectProperty(
                ast.identifier("reqEncoderFn"),
                ast.memberExpression(
                    ast.identifier(`Query${methodKey}Request`),
                    ast.identifier("encode")
                )
            ),
            ast.objectProperty(
                ast.identifier("resDecoderFn"),
                ast.memberExpression(
                    ast.identifier(`Query${methodKey}Response`),
                    ast.identifier("decode")
                )
            ),
            ast.objectProperty(
                ast.identifier("service"),
                // TODO: Does this value needs to change?
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
        ast.tsTypeReference(ast.identifier(`Query${methodKey}Request`)),
        ast.tsTypeReference(ast.identifier(`Query${methodKey}Response`)),
    ]);

    const customHookArgumentsType = ast.tsTypeAnnotation(
        //TODO: Improvements, Figure out how to write ast code to generate the function expression below instead of hard coding the string.
        ast.tsTypeReference(ast.identifier("() => ISigningClient | undefined"))
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
    service: ProtoService,
    methodKey?: string,
    helperCreatorName?: string,
    hookName?: string
) {
    // return ast.returnStatement(ast.identifier(hookName));
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
        ast.tsTypeReference(ast.identifier(`Query${methodKey}Request`)),
        ast.tsTypeReference(ast.identifier(`Query${methodKey}Response`)),
    ]);
    return ast.exportNamedDeclaration(
        ast.variableDeclaration("const", [
            ast.variableDeclarator(ast.identifier(hookName), callExpression),
        ])
    );
}
