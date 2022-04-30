import * as t from '@babel/types';
import { pascal } from 'case';

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
    double(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.double());
    },
    int64(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.int64());
    },
    duration(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.duration());
    },
    timestamp(num: number, prop: string) {
        return switchOnTag(num, prop, baseTypes.timestamp());
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
    keyHash(num: number, prop: string, name: string) {
        return switchOnTagTakesArray(num, prop, baseTypes.keyHash(prop, name));
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

    // message.doubleValue = reader.double();
    double() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('double')
            ),
            []
        );
    },

    // message.int64Value = (reader.int64() as Long);
    int64() {
        return t.tsAsExpression(
            t.callExpression(
                t.memberExpression(
                    t.identifier('reader'),
                    t.identifier('int64')
                ),
                []
            ),
            t.tsTypeReference(
                t.identifier('Long')
            )
        );
    },

    int32() {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('int32')
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
    },

    // message.period = fromDuration(Duration.decode(reader, reader.uint32()));

    duration() {
        return t.callExpression(
            t.identifier('fromDuration'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Duration'),
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
    },

    // message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));

    timestamp() {
        return t.callExpression(
            t.identifier('fromTimestamp'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Timestampt'),
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
    },

    // const entry13 = LogEntry_LabelsEntry.decode(reader, reader.uint32());

    // if (entry13.value !== undefined) {
    //     message.labels[entry13.key] = entry13.value;
    // }

    keyHash(prop: string, name: string) {
        return [
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('entry123'),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(`${name}_${pascal(prop)}Entry`),
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
                    )
                ]
            ),
            t.ifStatement(
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('entry123'),
                        t.identifier('value')
                    ),
                    t.identifier('undefined')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('labels')
                                ),
                                t.memberExpression(
                                    t.identifier('entry123'),
                                    t.identifier('key')
                                ),
                                true
                            ),
                            t.memberExpression(
                                t.identifier('entry123'),
                                t.identifier('value')
                            )
                        )
                    )
                ])
            )
        ]
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

export const switchOnTagTakesArray = (num: number, prop: string, expr: t.Statement[]) => {
    return t.switchCase(
        t.numericLiteral(num),
        [
            ...expr,
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

