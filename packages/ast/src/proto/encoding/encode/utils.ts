import * as t from '@babel/types';
import { pascal } from 'case';
export const encode = {

    /*
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
    */
    string(num: number, prop: string) {

        return t.ifStatement(
            t.binaryExpression('!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.stringLiteral('')
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('string')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    /*
        if (message.doubleValue !== undefined) {
          writer.uint32(41).double(message.doubleValue);
        }
    */

    double(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression('!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('double')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    //   if (message.int64Value !== undefined) {
    //     writer.uint32(24).int64(message.int64Value);
    //   }

    int64(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression('!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('double')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    //   if (message.disableMacros === true) {
    //     writer.uint32(32).bool(message.disableMacros);
    //   }

    bool(num: number, prop: string) {

        return t.ifStatement(
            t.binaryExpression('===',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.booleanLiteral(true)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('bool')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    /*
    if (!message.poolId.isZero()) {
        writer.uint32(16).uint64(message.poolId);
    }
    */


    long(num: number, prop: string) {
        return t.ifStatement(
            t.unaryExpression('!',
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        t.identifier('isZero')
                    ),
                    []
                )
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('uint64')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    type(num: number, prop: string, name: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier(name),
                                    t.identifier('encode')
                                ),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier(prop)
                                    ),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('writer'),
                                                    t.identifier('uint32')
                                                ),
                                                [
                                                    t.numericLiteral(num)
                                                ]
                                            ),
                                            t.identifier('fork')
                                        ),
                                        []
                                    )

                                ]
                            ),
                            t.identifier('ldelim')
                        ),
                        []
                    )
                )
            ])
        );
    },

    // message.mode = (reader.int32() as any);
    enum(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.numericLiteral(0)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('int32')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    /*

if (message.queryData.length !== 0) {
  writer.uint32(18).bytes(message.queryData);
}
 
    */


    bytes(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('length')
                ),
                t.numericLiteral(0)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('bytes')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        );
    },

    // if (message.periodReset !== undefined) {
    //     Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(18).fork()).ldelim();
    //   }  

    timestamp(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Timestamp'),
                                t.identifier('encode')
                            ),
                            [
                                t.callExpression(
                                    t.identifier('toTimestamp'),
                                    [
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier(prop)
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier('writer'),
                                                t.identifier('uint32')
                                            ),
                                            [
                                                t.numericLiteral(num)
                                            ]
                                        ),
                                        t.identifier('fork')
                                    ),
                                    []
                                )
                            ]
                        ),
                        t.identifier('ldelim')
                    ),
                    []
                )
            )
        );
    },

    // if (message.period !== undefined) {
    //     Duration.encode(toDuration(message.period), writer.uint32(18).fork()).ldelim();
    //   }

    duration(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Duration'),
                                t.identifier('encode')
                            ),
                            [
                                t.callExpression(
                                    t.identifier('toDuration'),
                                    [
                                        t.memberExpression(
                                            t.identifier('message'),
                                            t.identifier(prop)
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier('writer'),
                                                t.identifier('uint32')
                                            ),
                                            [
                                                t.numericLiteral(num)
                                            ]
                                        ),
                                        t.identifier('fork')
                                    ),
                                    []
                                )
                            ]
                        ),
                        t.identifier('ldelim')
                    ),
                    []
                )
            )
        );
    },

    /*
    
                ARRAY!
                
                Long[]
    
                writer.uint32(10).fork();
    
                for (const v of message.codeIds) {
                    writer.uint64(v);
                }
    
                writer.ldelim();
    
    
            */

    scalarArray(num: number, prop: string, expr: t.Statement) {
        return [
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('writer'),
                                t.identifier('uint32')
                            ),
                            [
                                t.numericLiteral(num)
                            ]
                        ),
                        t.identifier('fork')
                    ),
                    []
                )
            ),
            t.forOfStatement(
                t.variableDeclaration(
                    'const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.blockStatement([
                    expr
                ])
            ),
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('writer'),
                        t.identifier('ldelim')
                    ),
                    []
                )
            )
        ];
    },

    typeArray(num: number, prop: string, name: string) {
        return [
            t.forOfStatement(
                t.variableDeclaration('const',
                    [
                        t.variableDeclarator(
                            t.identifier('v'),
                            null
                        )
                    ]
                ),
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.blockStatement(
                    [
                        t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier(name),
                                            t.identifier('encode')
                                        ),
                                        [
                                            // "v!" just means it's NOT NULLABLE
                                            t.tsNonNullExpression(
                                                t.identifier('v')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.callExpression(
                                                        t.memberExpression(
                                                            t.identifier('writer'),
                                                            t.identifier('uint32')
                                                        ),
                                                        [
                                                            t.numericLiteral(num)
                                                        ]
                                                    ),
                                                    t.identifier('fork')
                                                ),
                                                []
                                            )
                                        ]
                                    ),
                                    t.identifier('ldelim')
                                ),
                                []
                            )
                        )
                    ]
                )
            )];
    },

    // Object.entries(message.labels).forEach(([key, value]) => {
    //     LogEntry_LabelsEntry.encode({
    //       key: (key as any),
    //       value
    //     }, writer.uint32(106).fork()).ldelim();
    //   });

    keyHash(num: number, prop: string, name: string) {
        return t.expressionStatement(
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
                                t.identifier(prop)
                            )
                        ]
                    ),
                    t.identifier('forEach')
                ),
                [
                    t.arrowFunctionExpression(
                        [
                            t.arrayPattern([
                                t.identifier('key'),
                                t.identifier('value')
                            ]
                            ),
                        ],
                        t.blockStatement([
                            t.expressionStatement(
                                t.callExpression(
                                    t.memberExpression(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier(`${name}_${pascal(prop)}Entry`),
                                                t.identifier('encode')
                                            ),
                                            [
                                                t.objectExpression(
                                                    [
                                                        t.objectProperty(
                                                            t.identifier('key'),
                                                            t.tsAsExpression(
                                                                t.identifier('key'),
                                                                t.tsAnyKeyword()
                                                            )
                                                        ),
                                                        t.objectProperty(
                                                            t.identifier('value'),
                                                            t.identifier('value'),
                                                            false,
                                                            true
                                                        )
                                                    ]
                                                ),
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.identifier('writer'),
                                                                t.identifier('uint32')
                                                            ),
                                                            [
                                                                t.numericLiteral(num)
                                                            ]
                                                        ),
                                                        t.identifier('fork')
                                                    ),
                                                    []
                                                )
                                            ]
                                        ),
                                        t.identifier('ldelim')
                                    ),
                                    []
                                )
                            )
                        ])
                    )
                ]
            )
        )
    }
};

export const arrayTypes = {
    long() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('uint64')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    }
};