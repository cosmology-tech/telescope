import * as t from '@babel/types';
import { GenericParseContext } from '../../encoding';
import { objectPattern } from '../../utils';

export const rpcHookFuncArguments = (): t.ObjectPattern[] => {
    return [
        objectPattern(
            [
                t.objectProperty(
                    t.identifier('rpc'),
                    t.identifier('rpc'),
                    false,
                    true
                )
            ],
            t.tsTypeAnnotation(
                t.tsTypeLiteral(
                    [
                        t.tsPropertySignature(
                            t.identifier('rpc'),
                            t.tsTypeAnnotation(
                                t.tsTypeReference(
                                    t.identifier('Rpc')
                                )
                            )
                        )
                    ]
                )
            )
        )
    ];
};

export const rpcHookClassArguments = (): t.ObjectExpression[] => {
    return [
        t.objectExpression(
            [
                t.objectProperty(
                    t.identifier('rpc'),
                    t.identifier('rpc'),
                    false,
                    true
                )
            ]
        )
    ];
};

export const rpcHookNewTmRequire = (
    path: string,
    className: string
) => {
    return t.callExpression(
        t.memberExpression(
            t.callExpression(
                t.identifier('require'),
                [
                    t.stringLiteral(
                        path
                    )
                ]
            ),
            t.identifier(className),
            false
        ),
        [
            t.identifier('rpc')
        ]
    )

}

export const rpcHookRecursiveObjectProps = (
    names: string[],
    leaf?: any
) => {
    const [name, ...rest] = names;

    let baseComponent;
    if (names.length === 1) {
        baseComponent = leaf ? leaf : t.identifier(name)
    } else {
        baseComponent = rpcHookRecursiveObjectProps(rest, leaf)
    }

    return t.objectExpression([
        t.objectProperty(
            t.identifier(name),
            baseComponent
        )
    ])
};

export const rpcHookTmNestedImportObject = (
    obj: object,
    className: string
) => {

    if (typeof obj === 'string') {
        return rpcHookNewTmRequire(obj, className);
    }

    const keys = Object.keys(obj);

    return t.objectExpression(keys.map(name => {
        return t.objectProperty(
            t.identifier(name),
            rpcHookTmNestedImportObject(obj[name], className)
        )
    }))
};

export const createScopedRpcHookFactory = (
    context: GenericParseContext,
    obj: object,
    identifier: string
) => {

    context.addUtil('ProtobufRpcClient');

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    // createRPCQueryHooks
                    t.identifier(identifier),
                    t.arrowFunctionExpression(
                        [
                            objectPattern([
                                t.objectProperty(
                                    t.identifier('rpc'),
                                    t.identifier('rpc'),
                                    false,
                                    true
                                )
                            ], t.tsTypeAnnotation(
                                t.tsTypeLiteral([
                                    t.tsPropertySignature(
                                        t.identifier('rpc'),
                                        t.tsTypeAnnotation(
                                            t.tsUnionType([
                                                t.tsTypeReference(
                                                    t.identifier('ProtobufRpcClient')
                                                ),
                                                t.tsUndefinedKeyword()
                                            ])
                                        )
                                    )
                                ])
                            ))
                        ],
                        t.blockStatement([

                            t.returnStatement(
                                rpcHookTmNestedImportObject(
                                    obj,
                                    'createRpcQueryHooks'
                                )
                            )

                        ]),
                        false
                    )
                )
            ]
        )
    )
}
