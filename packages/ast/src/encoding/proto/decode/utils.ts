import * as t from '@babel/types';
import { DecodeMethod } from './index';
import { getKeyTypeEntryName } from '..';
import { getFieldsTypeName } from '../types';

export const decode = {
    string(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.string(args));
    },
    bool(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.bool(args));
    },
    long(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.long(args));
    },
    double(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.double(args));
    },
    int64(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.int64(args));
    },
    duration(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.duration(args));
    },
    timestamp(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.timestamp(args));
    },
    type(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.type(args));
    },
    enum(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.enum(args));
    },
    bytes(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTag(num, prop, baseTypes.bytes(args));
    },
    keyHash(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchOnTagTakesArray(num, prop, baseTypes.keyHash(args));
    },
    scalarArray(args: DecodeMethod, expr: t.Expression) {
        const num = args.field.id;
        const prop = args.field.name;
        return switchScalarArray(num,
            prop,
            expr
        )
    },
    typeArray(args: DecodeMethod) {
        const num = args.field.id;
        const prop = args.field.name;
        const name = getFieldsTypeName(args.field);
        return switchTypeArray(num,
            prop,
            name
        )
    }

};

export const baseTypes = {

    // message.sender = reader.string();
    string(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('string')
            ),
            []
        );
    },

    // message.sender = reader.bool();
    bool(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('bool')
            ),
            []
        );
    },

    // message.doubleValue = reader.double();
    double(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('double')
            ),
            []
        );
    },

    // message.int64Value = (reader.int64() as Long);
    int64(args: DecodeMethod) {
        args.context.addUtil('Long');

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

    int32(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('int32')
            ),
            []
        );
    },

    // message.poolId = (reader.uint64() as Long);
    long(args: DecodeMethod) {
        args.context.addUtil('Long');

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
    type(args: DecodeMethod) {
        const name = getFieldsTypeName(args.field);
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
    enum(args: DecodeMethod) {
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

    bytes(args: DecodeMethod) {
        return t.callExpression(
            t.memberExpression(
                t.identifier('reader'),
                t.identifier('bytes')
            ),
            []
        );
    },

    // message.period = fromDuration(Duration.decode(reader, reader.uint32()));

    duration(args: DecodeMethod) {
        args.context.addUtil('fromDuration');

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

    timestamp(args: DecodeMethod) {
        args.context.addUtil('fromTimestamp');

        return t.callExpression(
            t.identifier('fromTimestamp'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('Timestamp'),
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

    // const entry1 = LogEntry_LabelsEntry.decode(reader, reader.uint32());

    // if (entry1.value !== undefined) {
    //     message.labels[entry13.key] = entry13.value;
    // }

    keyHash(args: DecodeMethod) {
        const prop = args.field.name;
        const name = args.typeName;
        const id = args.field.id;
        const entryVariable = `entry${id}`;
        return [
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier(entryVariable),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier(getKeyTypeEntryName(name, prop)),
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
                        t.identifier(entryVariable),
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
                                    t.identifier(prop)
                                ),
                                t.memberExpression(
                                    t.identifier(entryVariable),
                                    t.identifier('key')
                                ),
                                true
                            ),
                            t.memberExpression(
                                t.identifier(entryVariable),
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

