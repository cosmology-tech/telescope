import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';

import { ProtoType } from '../../types';
import { encodeTypes, switchOnTag, switchOnTagArray, switchOnTagTypeArray } from './utils';

export const protoDecodeMethod = (name: string, proto: ProtoType) => {
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
                            t.identifier(`createBase${pascal(name)}`),
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


                    t.switchStatement(
                        t.binaryExpression(
                            '>>>',
                            t.identifier('tag'),
                            t.numericLiteral(3)
                        ),
                        [


                            /*
                   message.sender = reader.string();
                      break;
                            */


                            switchOnTag(
                                1,
                                'sender',
                                encodeTypes.string()
                            ),


                            /*
                               case 2:
                                          message.poolId = (reader.uint64() as Long);
                                          break;
                            */

                            switchOnTag(
                                2,
                                'poolId',
                                encodeTypes.Long()
                            ),

                            /*
                                          message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
                            */

                            switchOnTag(
                                2,
                                'signDoc',
                                encodeTypes.Type('SignDocDirectAux')
                            ),

                            // message.mode = (reader.int32() as any);

                            switchOnTag(
                                2,
                                'mode',
                                encodeTypes.Enum()
                            ),


                            /*
                               case Long[]:

              if ((tag & 7) === 2) {
                const end2 = reader.uint32() + reader.pos;

                while (reader.pos < end2) {
                  message.codeIds.push((reader.uint64() as Long));
                }
              } else {
                message.codeIds.push((reader.uint64() as Long));
              }

                               */

                            switchOnTagArray(2,
                                'codeIds',
                                encodeTypes.Long()
                            ),


                            /*
                             case 3:
                                          message.shareOutAmount = reader.string();
                                          break
                            */

                            switchOnTag(3,
                                'shareOutAmount',
                                encodeTypes.string()
                            ),

                            /*
                             case:
                                 message.queryData = reader.bytes();
                           */

                            switchOnTag(333,
                                'queryData',
                                encodeTypes.bytes()
                            ),

                            /*
                             case 4:
                                          message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
                                          break;
                            */

                            switchOnTagTypeArray(
                                4,
                                'tokenInMaxs',
                                'Coin'
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
                t.identifier(name)
            )
        )
    )
};

