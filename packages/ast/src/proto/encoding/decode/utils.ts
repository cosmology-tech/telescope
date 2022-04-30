import * as t from '@babel/types';

export const decode = {
    string(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.string())
    },
    bool(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.bool())
    },
    long(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.long());
    },
    type(num: number, prop: string, name: string) {
        return switchOnTag(num, prop, baseTypes.type(name));
    },
    enum(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.enum());
    },
    bytes(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.bytes());
    },
    scalarArray(num: number, prop: string, expr: t.Expression) {
        return switchScalarArray(num,
            prop,
            expr
        )
    },
    typeArray(num: number, prop: string, name: string) {
        return switchTypeArray(num,
            prop,
            name
        )
    }

};

export const baseTypes = {

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

    // message.sender = reader.bool();
    bool() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('bool')
            ),
            []
        );
    },

    // message.poolId = (reader.uint64() as Long);
    long() {
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
    type(name: string) {
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
    enum() {
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

//    message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
export const switchTypeArray = (num: number, prop: string, name: string) => {
    return t.switchCase(
        t.numericLiteral(num),
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
                    ]
                )
            ),
            t.breakStatement()
        ]
    )
};

// if ((tag & 7) === 2) {
//     const end2 = reader.uint32() + reader.pos;

//     while (reader.pos < end2) {
//         message.codeIds.push((reader.uint64() as Long));
//     }
// } else {
//     message.codeIds.push((reader.uint64() as Long));
// }

export const switchScalarArray = (num: number, prop: string, expr: t.Expression) => {
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

