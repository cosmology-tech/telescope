import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration, objectMethod } from '../utils';

import { ProtoType } from './types';

const protoEncodeMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('encode'),
        [
            // args

            identifier('message', t.tsTypeAnnotation(
                t.tsTypeReference(
                    t.identifier('MsgJoinPool')
                )
            ), false),

            t.assignmentPattern(
                t.identifier('writer'),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('_m0'),
                            t.identifier('Writer')
                        ),
                        t.identifier('create')
                    ),
                    [

                    ]
                )
            )
        ],

        // body 
        t.blockStatement([

            /*
                if (message.sender !== "") {
                    writer.uint32(10).string(message.sender);
                }
            */
            t.ifStatement(
                t.binaryExpression('!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('sender')
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
                                        t.numericLiteral(10)
                                    ]
                                ),
                                t.identifier('string')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('sender')
                                )
                            ]
                        )
                    )
                ])
            ),
            /*
            if (!message.poolId.isZero()) {
                writer.uint32(16).uint64(message.poolId);
            }
            */
            t.ifStatement(
                t.unaryExpression('!',
                    t.callExpression(
                        t.memberExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier('poolId')
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
                                        t.numericLiteral(16)
                                    ]
                                ),
                                t.identifier('uint64')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('poolId')
                                )
                            ]
                        )
                    )
                ])
            ),

            /*
            REPEAT OF FIRST PROP
            if (message.shareOutAmount !== "") {
                writer.uint32(26).string(message.shareOutAmount);
            }
            */

            t.ifStatement(
                t.binaryExpression(
                    '!==',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('shareOutAmount')
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
                                        t.numericLiteral(26)
                                    ]
                                ),
                                t.identifier('string')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('shareOutAmount')
                                )
                            ]
                        )
                    )
                ])
            ),

            /*
                LOOP (ARRAY)
            */

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
                    t.identifier('tokenInMaxs')
                ),
                t.blockStatement(
                    [
                        t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Coin'),
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
                                                            t.numericLiteral(34)
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
            ),

            /* RETURN writer */

            t.returnStatement(
                t.identifier('writer')
            )

        ]),
        false,
        false,
        false,
        // return type
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.tsQualifiedName(
                    t.identifier('_m0'),
                    t.identifier('Writer')
                )
            )
        )
    )
};

const protoDecodeMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('decode'),
        [
            identifier('input',
                t.tsTypeAnnotation(
                    t.tsUnionType(
                        [
                            t.tsTypeReference(
                                t.tsQualifiedName(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                null
                            ),
                            t.tsTypeReference(
                                t.identifier('Uint8Array')
                            )
                        ]
                    )
                ),
                false
            )
        ],
        t.blockStatement([

            /*
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
            */
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('reader'),
                        t.conditionalExpression(
                            t.binaryExpression(
                                'instanceof',
                                t.identifier('input'),
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                )
                            ),
                            t.identifier('input'),
                            t.newExpression(
                                t.memberExpression(
                                    t.identifier('_m0'),
                                    t.identifier('Reader')
                                ),
                                [
                                    t.identifier('input')
                                ]
                            )
                        )
                    )
                ]
            ),

            /*
    let end = length === undefined ? reader.len : reader.pos + length;
            */

            t.variableDeclaration(
                'let',
                [
                    t.variableDeclarator(
                        t.identifier('end'),
                        t.conditionalExpression(
                            t.binaryExpression('===',
                                t.identifier('length'),
                                t.identifier('undefined')
                            ),
                            t.memberExpression(
                                t.identifier('reader'),
                                t.identifier('len')
                            ),
                            t.binaryExpression(
                                '+',
                                t.memberExpression(
                                    t.identifier('reader'),
                                    t.identifier('pos')
                                ),
                                t.identifier('length')
                            )
                        )
                    )
                ]
            ),

            /*
            
    const message = createBaseMsgJoinPool();

            */

            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier('createBaseMsgJoinPool'),
                            []
                        )
                    )
                ]
            ),

            ///////////
            ///////////
            ///////////

            t.whileStatement(
                t.binaryExpression(
                    '<',
                    t.memberExpression(
                        t.identifier('reader'),
                        t.identifier('pos')
                    ),
                    t.identifier('end')
                ),
                t.blockStatement([

                    /// DECODE BODY
                    t.variableDeclaration(
                        'const',
                        [
                            t.variableDeclarator(
                                t.identifier('tag'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('reader'),
                                        t.identifier('uint32')
                                    ),
                                    []
                                )
                            )
                        ]
                    ),

                    /*
           message.sender = reader.string();
              break;
                    */


                    t.switchStatement(
                        t.binaryExpression(
                            '>>>',
                            t.identifier('tag'),
                            t.numericLiteral(3)
                        ),
                        [
                            //
                            t.switchCase(
                                t.numericLiteral(1),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('sender')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('reader'),
                                                    t.identifier('string')
                                                ),
                                                []
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                               case 2:
                                          message.poolId = (reader.uint64() as Long);
                                          break;
                            */

                            t.switchCase(
                                t.numericLiteral(2),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('poolId')
                                            ),
                                            t.tsAsExpression(
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
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),


                            /*
                             case 3:
                                          message.shareOutAmount = reader.string();
                                          break
                            */

                            t.switchCase(
                                t.numericLiteral(3),
                                [
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('message'),
                                                t.identifier('shareOutAmount')
                                            ),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('reader'),
                                                    t.identifier('string')
                                                ),
                                                []
                                            )
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            ),

                            /*
                             case 4:
                                          message.tokenInMaxs.push(Coin.decode(reader, reader.unint32()));
                                          break;
                            */

                            t.switchCase(
                                t.numericLiteral(4),
                                [
                                    t.expressionStatement(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.memberExpression(
                                                    t.identifier('message'),
                                                    t.identifier('tokenInMaxs')
                                                ),
                                                t.identifier('push')
                                            ),
                                            [
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.identifier('Coin'),
                                                        t.identifier('decode')
                                                    ),
                                                    [
                                                        t.identifier('reader'),
                                                        t.callExpression(
                                                            t.memberExpression(
                                                                t.identifier('reader'),
                                                                t.identifier('unint32')
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
                            ),

                            /*
                            default:
                                    reader.skipType(tag & 7);
                                    break;
                            */

                            t.switchCase(
                                null,
                                [
                                    t.expressionStatement(
                                        t.callExpression(
                                            t.memberExpression(
                                                t.identifier('reader'),
                                                t.identifier('skipType')
                                            ),
                                            [
                                                t.binaryExpression(
                                                    '&',
                                                    t.identifier('tag'),
                                                    t.numericLiteral(7)
                                                )
                                            ]
                                        )
                                    ),
                                    t.breakStatement()
                                ]
                            )
                        ]
                    )

                ])
            ),

            // RETURN STATEMENT

            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier('MsgJoinPool')
            )
        )
    )
};

export const createProtoObjectWithMethods = (name: string, proto: ProtoType) => {
    return t.exportNamedDeclaration(
        t.variableDeclaration('const',
            [t.variableDeclarator(
                t.identifier('MsgJoinPool'),
                t.objectExpression(
                    [
                        protoEncodeMethod(name, proto),
                        protoDecodeMethod(name, proto)
                    ]
                )
            )]
        )
    )
};