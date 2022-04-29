import * as t from '@babel/types';

export const toJsonTypes = {

    //  message.sender !== undefined && (obj.sender = message.sender);
    string(prop: string) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop)
                    ),
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    )
                )
            )
        );
    },

    // message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    Long(prop: string) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop),
                        false,
                        false
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.logicalExpression(
                                '||',
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.memberExpression(
                                    t.identifier('Long'),
                                    t.identifier('UZERO')
                                )
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                )
            )
        );
    },

    // message.signDoc !== undefined && (obj.signDoc = message.signDoc ? SignDocDirectAux.toJSON(message.signDoc) : undefined);
    Type(prop: string, name: string) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop)
                    ),
                    t.conditionalExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(name),
                                t.identifier('toJSON')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                )
                            ]
                        ),
                        t.identifier('undefined')
                    )
                )
            )
        );
    },

    // message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    Enum(prop: string, enumFuncName: string) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop)
                    ),
                    t.callExpression(
                        t.identifier(enumFuncName),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )

                )
            )
        );
    },

    // message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    bytes(prop: string) {
        return t.expressionStatement(
            t.logicalExpression(
                '&&',
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('undefined')
                ),
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop),
                        false,
                        false
                    ),
                    t.callExpression(
                        t.identifier('base64FromBytes'),
                        [
                            t.conditionalExpression(
                                t.binaryExpression(
                                    '!==',
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier(prop)
                                    ),
                                    t.identifier('undefined')
                                ),
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.newExpression(t.identifier('Uint8Array'), []))
                        ]
                    )
                )
            )
        );
    }

};

export const arrayTypes = {
    // if (message.codeIds) {
    //     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    // } else {
    //     obj.codeIds = [];
    // }

    Long() {
        return t.callExpression(
            t.memberExpression(
                t.logicalExpression(
                    '||',
                    t.identifier('e'),
                    t.memberExpression(
                        t.identifier('Long'),
                        t.identifier('UZERO')
                    )
                ),
                t.identifier('toString')
            ),
            []
        )
    },

    // if (message.tokenInMaxs) {
    //     obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
    // } else {
    //     obj.tokenInMaxs = [];
    // }

    Type(name: string) {
        return t.conditionalExpression(
            t.identifier('e'),
            t.callExpression(
                t.memberExpression(
                    t.identifier('Coin'),
                    t.identifier('toJSON')
                ),
                [
                    t.identifier('e')
                ]
            ),
            t.identifier('undefined')
        );
    }
}

// if (message.codeIds) {
//     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
// } else {
//     obj.codeIds = [];
// }

export const arrayToJson = (prop: string, expr: t.Expression) => {
    return t.ifStatement(
        t.memberExpression(
            t.identifier('message'),
            t.identifier(prop)
        ),
        t.blockStatement([
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop)
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            ),
                            t.identifier('map')
                        ),
                        [
                            t.arrowFunctionExpression(
                                [
                                    t.identifier('e')
                                ],
                                expr
                            )
                        ]
                    )
                )
            )
        ]),
        t.blockStatement([
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(prop)
                    ),
                    t.arrayExpression([])
                )
            )
        ])
    );
};
