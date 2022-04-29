import * as t from '@babel/types';

export const fromPartialTypes = {

    // message.sender = object.sender ?? "";
    string(prop: string) {
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.stringLiteral('')
                )
            )
        );
    },

    // message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    Long(prop: string) {
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.conditionalExpression(
                    t.logicalExpression(
                        '&&',
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.identifier('undefined')
                        ),
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.nullLiteral()
                        )
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Long'),
                            t.identifier('fromValue')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            )
                        ]
                    ),
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('UZERO')
                    )
                )
            )
        );
    },

    // message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
    Type(prop: string, name: string) {
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.conditionalExpression(
                    t.logicalExpression(
                        '&&',
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.identifier('undefined')
                        ),
                        t.binaryExpression(
                            '!==',
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            ),
                            t.nullLiteral()
                        )
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(name),
                            t.identifier('fromPartial')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(prop)
                            )
                        ]
                    ),
                    t.identifier('undefined')
                )
            )
        );
    },

    // message.mode = object.mode ?? 0;
    Enum(prop: string) {
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.numericLiteral(0)
                )
            )
        );
    },

    // message.queryData = object.queryData ?? new Uint8Array()
    bytes(prop: string) {
        return t.expressionStatement(
            t.assignmentExpression(
                '=',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.logicalExpression(
                    '??',
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(prop)
                    ),
                    t.newExpression(
                        t.identifier('Uint8Array'),
                        []
                    )
                )
            )
        );
    }

};

export const arrayTypes = {
    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    Long() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('Long'),
                t.identifier('fromValue')
            ),
            [
                t.identifier('e')
            ]
        );
    },
    // message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
    Type(name: string) {
        return t.callExpression(
            t.memberExpression(
                t.identifier(name),
                t.identifier('fromPartial')
            ),
            [
                t.identifier('e')
            ]
        );
    }
}

// message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
export const arrayFromPartial = (prop: string, expr: t.Expression) => {
    return t.expressionStatement(
        t.assignmentExpression(
            '=',
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.logicalExpression(
                '||',
                t.optionalCallExpression(
                    t.optionalMemberExpression(
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(prop)
                        ),
                        t.identifier('map'),
                        false,
                        true
                    ),
                    [
                        t.arrowFunctionExpression(
                            [
                                t.identifier('e')
                            ],
                            expr
                        )
                    ],
                    false
                ),
                t.arrayExpression([])
            )
        )
    );
}
