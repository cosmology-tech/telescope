import * as t from '@babel/types';

export const encodeTypes = {

    // message.sender = reader.string();
    string() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('string')
            ),
            []
        );
    },

    // message.poolId = (reader.uint64() as Long);
    Long() {
        return t.tsAsExpression(
            t.callExpression(
                t.memberExpression(
                    t.identifier('reader'),
                    t.identifier('uint64')
                ),
                []
            ),
            t.tsTypeReference(
                t.identifier('Long')
            )
        );
    },

    // message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
    Type(name: string) {
        return t.callExpression(
            t.memberExpression(
                t.identifier(name),
                t.identifier('decode')
            ),
            [
                t.identifier('reader'),
                t.callExpression(
                    t.memberExpression(
                        t.identifier('reader'),
                        t.identifier('uint32')
                    ),
                    []
                )
            ]
        )
    },

    // message.mode = (reader.int32() as any);
    Enum() {
        return t.tsAsExpression(
            t.callExpression(
                t.memberExpression(
                    t.identifier('reader'),
                    t.identifier('int32')
                ),
                []
            ),
            t.tsAnyKeyword()
        )
    },

    bytes() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('bytes')
            ),
            []
        );
    }

};


export const switchOnTag = (num: number, prop: string, expr: t.Expression) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    expr
                )
            ),
            t.breakStatement()
        ]
    );
};

export const switchOnTagTypeArray = (num: number, prop: string, Type: string) => {
    return t.switchCase(
        t.numericLiteral(4),
        [
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        t.identifier('push')
                    ),
                    [
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(Type),
                                t.identifier('decode')
                            ),
                            [
                                t.identifier('reader'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                )
                            ]
                        )
                    ]
                )
            ),
            t.breakStatement()
        ]
    )
};

export const switchOnTagArray = (num: number, prop: string, expr: t.Expression) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            t.ifStatement(
                t.binaryExpression(
                    '===',
                    t.binaryExpression(
                        '&',
                        t.identifier('tag'),
                        t.numericLiteral(7)
                    ),
                    t.numericLiteral(2)
                ),
                t.blockStatement([
                    t.variableDeclaration('const', [
                        t.variableDeclarator(
                            t.identifier('end2'),
                            t.binaryExpression(
                                '+',
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                ),
                                t.memberExpression(
                                    t.identifier('reader'),
                                    t.identifier('pos')
                                )
                            )
                        )
                    ]),
                    // while loop

                    t.whileStatement(
                        t.binaryExpression(
                            '<',
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('pos')
                            ),
                            t.identifier('end2')
                        ),
                        t.blockStatement([
                            t.expressionStatement(
                                t.callExpression(
                                    t.memberExpression(
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier(prop)
                                        ),
                                        t.identifier('push')
                                    ),
                                    [
                                        expr
                                    ]
                                )
                            )
                        ])
                    )

                ]),
                t.blockStatement([
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.identifier('push')
                            ),
                            [
                                expr
                            ]
                        )
                    )
                ])
            )
        ]
    )
};

