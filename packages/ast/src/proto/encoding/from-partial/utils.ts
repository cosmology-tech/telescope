import * as t from '@babel/types';

export const fromPartial = {

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

    // message.disableMacros = object.disableMacros ?? false;
    bool(prop: string) {
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
                    t.booleanLiteral(false)
                )
            )
        );
    },

    // message.doubleValue = object.doubleValue ?? undefined;

    double(prop: string) {
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
                    t.identifier('undefined')
                )
            )
        );
    },

    // message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : undefined;
    int64(prop: string) {
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
                    t.identifier('undefined')
                )
            )
        );
    },


    // message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    long(prop: string) {
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
    type(prop: string, name: string) {
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
    enum(prop: string) {
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
    },

    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    array(prop: string, expr: t.Expression) {
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

};

export const arrayTypes = {
    // message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    long() {
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
    type(name: string) {
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
