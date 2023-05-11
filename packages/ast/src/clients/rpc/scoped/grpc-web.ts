import * as t from '@babel/types';
import { GenericParseContext } from '../../../encoding';
import { objectPattern } from '../../../utils';
import { rpcFuncArguments, rpcClassArguments, rpcNewAwaitImport, rpcRecursiveObjectProps, rpcNestedImportObject } from './rpc';

export const grpcWebNewAwaitImport = (
    path: string,
    className: string
) => {
    return t.callExpression(
        t.memberExpression(
            t.awaitExpression(
                t.callExpression(
                    t.import(),
                    [
                        t.stringLiteral(
                            path
                        )
                    ]
                )
            ),
            t.identifier(className),
            false
        ),
        [
            t.identifier('grpcWeb')
        ]
    )

}

const rpcTmNestedImportObject = (
    obj: object,
    className: string
) => {

    if (typeof obj === 'string') {
        return grpcWebNewAwaitImport(obj, className);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            rpcTmNestedImportObject(obj[name], className)
        )
    }))
};

export const createScopedGrpcWebFactory = (
    context: GenericParseContext,
    obj: object,
    identifier: string
) => {

    context.addUtil('grpc');
    context.addUtil('NodeHttpTransport');

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    // createGrpcWebQueryClient
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        [
                            objectPattern([
                                t.objectProperty(
                                    t.identifier('grpcWebEndpoint'),
                                    t.identifier('grpcWebEndpoint'),
                                    false,
                                    true
                                )
                            ], t.tsTypeAnnotation(
                                t.tsTypeLiteral([
                                    t.tsPropertySignature(
                                        t.identifier('grpcWebEndpoint'),
                                        t.tsTypeAnnotation(
                                            t.tSTypeLiteral(
                                                [
                                                    t.tsPropertySignature(
                                                        t.identifier('grpcWebEndpoint'),
                                                        t.tsTypeAnnotation(
                                                            t.tsStringKeyword()
                                                        )
                                                    )
                                                ]
                                            )
                                        )
                                    )
                                ])
                            ))
                        ],
                        t.blockStatement([
                            t.expressionStatement(
                                t.assignmentExpression(
                                    "=",
                                    t.identifier('grpcWebEndpoint'),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('grpcWebEndpoint'),
                                            t.identifier('replace')
                                        ),
                                        [
                                            t.regExpLiteral(
                                                "\\/*$"
                                            ),
                                            t.stringLiteral(
                                                "\"\""
                                            )
                                        ]
                                    )
                                )
                            ),
                            t.variableDeclaration(
                                "const",
                                [
                                    t.variableDeclarator(
                                        t.objectPattern(
                                            [
                                                t.objectProperty(
                                                    t.identifier("GrpcWebImpl"),
                                                    t.identifier("GrpcWebImpl"),
                                                    false,
                                                    true
                                                )
                                            ]
                                        ),
                                        t.awaitExpression(
                                            t.callExpression(
                                                t.import(),
                                                [
                                                    t.stringLiteral(
                                                        "../cosmos/app/v1alpha1/query.rpc.Query"
                                                    )
                                                ]
                                            )
                                        )
                                    )
                                ]
                            ),
                            t.variableDeclaration(
                                "let",
                                [
                                    t.variableDeclarator(
                                        t.identifier('grpcWeb')
                                    ),

                                ]
                            ),
                            t.ifStatement(
                                t.binaryExpression(
                                    "!==",
                                    t.unaryExpression(
                                        "typeof",
                                        t.identifier('document'),
                                        true
                                    ),
                                    t.stringLiteral(
                                        "undefined"
                                    )
                                ),
                                t.blockStatement(
                                    [
                                        t.expressionStatement(
                                            t.assignmentExpression(
                                                "=",
                                                t.identifier("grpcWeb"),
                                                t.newExpression(
                                                    t.identifier("GrpcWebImpl"),
                                                    [
                                                        t.identifier("grpcWebEndpoint"),
                                                        t.objectExpression(
                                                            [
                                                                t.objectProperty(
                                                                    t.identifier("transport"),
                                                                    t.callExpression(
                                                                        t.memberExpression(
                                                                            t.identifier("grpc"),
                                                                            t.identifier("CrossBrowserHttpTransport")
                                                                        ),
                                                                        [
                                                                            t.objectExpression(
                                                                                [
                                                                                    t.objectProperty(
                                                                                        t.identifier("withCredentials"),
                                                                                        t.booleanLiteral(
                                                                                            false
                                                                                        )
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    )
                                                                )
                                                            ]
                                                        )
                                                    ]
                                                )
                                            )
                                        )
                                    ]
                                ),
                                t.ifStatement(
                                    t.logicalExpression(
                                        "&&",
                                        t.binaryExpression(
                                            "!==",
                                            t.unaryExpression(
                                                "typeof",
                                                t.identifier("navigator"),
                                                true
                                            ),
                                            t.stringLiteral(
                                                "undefined"
                                            )
                                        ),
                                        t.binaryExpression(
                                            "===",
                                            t.memberExpression(
                                                t.identifier("navigator"),
                                                t.identifier("product")
                                            ),
                                            t.stringLiteral(
                                                "ReactNative"
                                            )
                                        )
                                    ),
                                    t.blockStatement(
                                        [
                                            t.expressionStatement(
                                                t.assignmentExpression(
                                                    "=",
                                                    t.identifier("grpcWeb"),
                                                    t.newExpression(
                                                        t.identifier("GrpcWebImpl"),
                                                        [
                                                            t.identifier("grpcWebEndpoint"),
                                                            t.objectExpression(
                                                                [
                                                                    t.objectProperty(
                                                                        t.identifier("transport"),
                                                                        t.callExpression(
                                                                            t.identifier("NodeHttpTransport"),
                                                                            []
                                                                        )
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                )
                                            )
                                        ]
                                    ),
                                    t.blockStatement(
                                        [
                                            t.expressionStatement(
                                                t.assignmentExpression(
                                                    "=",
                                                    t.identifier("grpcWeb"),
                                                    t.newExpression(
                                                        t.identifier("GrpcWebImpl"),
                                                        [
                                                            t.identifier("grpcWebEndpoint"),
                                                            t.objectExpression(
                                                                [
                                                                    t.objectProperty(
                                                                        t.identifier("transport"),
                                                                        t.callExpression(
                                                                            t.identifier("NodeHttpTransport"),
                                                                            []
                                                                        )
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    )
                                                )
                                            )
                                        ]
                                    )
                                )     
                            ),
                            t.returnStatement(
                                rpcNestedImportObject(
                                    obj,
                                    'GrpcWebImpl'
                                )
                            )

                        ]),
                        true
                    )
                )
            ]
        )
    )
}
