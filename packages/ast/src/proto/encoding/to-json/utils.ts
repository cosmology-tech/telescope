import * as t from '@babel/types';

export const toJSON = {

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

    // message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);

    double(prop: string) {
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

    // message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    int64(prop: string) {
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
                        t.memberExpression(
                            t.logicalExpression(
                                '||',
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.identifier('undefined')
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                )
            )
        )
    },

    // message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || undefined).toString());
    uint64(prop: string) {
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
                        t.memberExpression(
                            t.logicalExpression(
                                '||',
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier(prop)
                                ),
                                t.identifier('undefined')
                            ),
                            t.identifier('toString')
                        ),
                        []
                    )
                )
            )
        )
    },


    //   message.disableMacros !== undefined && (obj.disableMacros = message.disableMacros);
    bool(prop: string) {
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
    long(prop: string) {
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
    type(prop: string, name: string) {
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
    enum(prop: string, enumFuncName: string) {
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
    },

    // message.period !== undefined && (obj.period = message.period);

    duration(prop: string) {
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

    // message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());

    timestamp(prop: string) {
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
                        t.memberExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            ),
                            t.identifier('toISOString')
                        ),
                        []
                    )
                )
            )
        );
    },



    //   if (message.labels) {
    //     Object.entries(message.labels).forEach(([k, v]) => {
    //       obj.labels[k] = v;
    //     });
    //   }

    keyHash(prop: string, name: string) {
        return t.ifStatement(
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('Object'),
                                    t.identifier('entries')
                                ),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('labels')
                                    )
                                ]
                            ),
                            t.identifier('forEach')
                        ),
                        [
                            t.arrowFunctionExpression(
                                [
                                    t.arrayPattern(
                                        [
                                            t.identifier('k'),
                                            t.identifier('v')
                                        ]
                                    )
                                ],
                                t.blockStatement([
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.memberExpression(
                                                    t.identifier('obj'),
                                                    t.identifier(prop)
                                                ),
                                                t.identifier('k'),
                                                true
                                            ),
                                            t.identifier('v')
                                        )
                                    )
                                ])
                            )
                        ]
                    )
                )
            ])
        )
    },

    // if (message.codeIds) {
    //     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    // } else {
    //     obj.codeIds = [];
    // }

    array(prop: string, expr: t.Expression) {
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
    }

};

export const arrayTypes = {
    // if (message.codeIds) {
    //     obj.codeIds = message.codeIds.map(e => (e || Long.UZERO).toString());
    // } else {
    //     obj.codeIds = [];
    // }

    long() {
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

    type(name: string) {
        return t.conditionalExpression(
            t.identifier('e'),
            t.callExpression(
                t.memberExpression(
                    t.identifier(name),
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

