
import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../../encoding';
import { camel } from '@osmonauts/utils';

const rpcExtensionMethod = (
    name: string,
    requestType: string,
    responseType: string
) => {
    return objectMethod('method', t.identifier(name), [
        identifier('request', t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(requestType)
            )
        ))
    ], t.blockStatement([
        t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('queryService'),
                    t.identifier(name)
                ),
                [
                    t.identifier('request')
                ]
            )
        )
    ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('Promise'),
                t.tsTypeParameterInstantiation([
                    t.tsTypeReference(
                        t.identifier(responseType + 'SDKType')
                    )
                ])
            )
        )
    );
}

export const createRpcExtension = (
    context: GenericParseContext,
    service: ProtoService
) => {

    context.addUtil('QueryClient');
    context.addUtil('createProtobufRpcClient');

    const camelRpcMethods = context.pluginValue('rpcClients.camelCase');
    // const name = service.name + 'ClientImpl';
    // const implementsName = service.name;
    // const methodNames = Object.keys(service.methods ?? {})
    //     .map(key => {
    //         return camelRpcMethods ? camel(key) : key
    //     });
    const methods = Object.keys(service.methods ?? {})
        .map(key => {
            const method = service.methods[key];
            const name = camelRpcMethods ? camel(key) : key;
            return rpcExtensionMethod(
                name,
                method.requestType,
                method.responseType
            )
        });

    return t.exportNamedDeclaration(
        t.variableDeclaration('const', [
            t.variableDeclarator(
                t.identifier('createRpcQueryExtension'),
                t.arrowFunctionExpression([
                    identifier('base', t.tsTypeAnnotation(
                        t.tsTypeReference(t.identifier('QueryClient'))
                    ))
                ], t.blockStatement([
                    t.variableDeclaration('const', [
                        t.variableDeclarator(
                            t.identifier('rpc'),
                            t.callExpression(
                                t.identifier('createProtobufRpcClient'),
                                [
                                    t.identifier('base')
                                ]
                            )
                        )
                    ]),
                    //////
                    t.variableDeclaration('const', [
                        t.variableDeclarator(
                            t.identifier('queryService'),
                            t.newExpression(
                                t.identifier('QueryClientImpl'),
                                [
                                    t.identifier('rpc')
                                ]
                            )
                        )
                    ]),

                    t.returnStatement(t.objectExpression([
                        ...methods
                    ]))

                ]))
            )
        ])
    );
};


export const createRpcInterface = (context: GenericParseContext, service: ProtoService) => {
    return t.tsInterfaceDeclaration(
        t.identifier('Rpc'),
        null,
        [],
        t.tsInterfaceBody(
            [
                t.tsMethodSignature(
                    t.identifier('request'),
                    null,
                    [
                        identifier('service',
                            t.tsTypeAnnotation(
                                t.tsStringKeyword()
                            )
                        ),
                        identifier('method',
                            t.tsTypeAnnotation(
                                t.tsStringKeyword()
                            )
                        ),
                        identifier('data',
                            t.tsTypeAnnotation(
                                t.tsTypeReference(
                                    t.identifier('Uint8Array')
                                )
                            )
                        )
                    ],
                    t.tsTypeAnnotation(
                        t.tsTypeReference(
                            t.identifier('Promise'),
                            t.tsTypeParameterInstantiation(
                                [
                                    t.tsTypeReference(
                                        t.identifier('Uint8Array')
                                    )
                                ]
                            )
                        )
                    )
                )
            ]
        )
    )
}