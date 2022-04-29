import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration, objectMethod } from '../../../utils';

import { ProtoType } from '../../types';

export const protoFromPartialMethod = (name: string, proto: ProtoType) => {
    return objectMethod(
        'method',
        t.identifier('fromPartial'),
        [
            identifier(
                'object',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('I')
                    )
                )
            )
        ],
        t.blockStatement([


            // init 

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

            /*
                message.sender = object.sender ?? "";
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('sender')
                    ),
                    t.logicalExpression(
                        '??',
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier('sender')
                        ),
                        t.stringLiteral('')
                    )
                )
            ),

            /*
                message.queryData = object.queryData ?? new Uint8Array()
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('queryData')
                    ),
                    t.logicalExpression(
                        '??',
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier('queryData')
                        ),
                        t.newExpression(
                            t.identifier('Uint8Array'),
                            []
                        )
                    )
                )
            ),

            /*
        message.signDoc = object.signDoc !== undefined && object.signDoc !== null ? SignDocDirectAux.fromPartial(object.signDoc) : undefined;
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('signDoc')
                    ),
                    t.conditionalExpression(
                        t.logicalExpression(
                            '&&',
                            t.binaryExpression(
                                '!==',
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('signDoc')
                                ),
                                t.identifier('undefined')
                            ),
                            t.binaryExpression(
                                '!==',
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('signDoc')
                                ),
                                t.nullLiteral()
                            )
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('SignDocDirectAux'),
                                t.identifier('fromPartial')
                            ),
                            [
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('signDoc')
                                )
                            ]
                        ),
                        t.identifier('undefined')
                    )
                )
            ),

            // message.mode = object.mode ?? 0;

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('mode')
                    ),
                    t.logicalExpression(
                        '??',
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier('mode')
                        ),
                        t.numericLiteral(0)
                    )
                )
            ),

            /*
            Long[]
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('codeIds')
                    ),
                    t.logicalExpression(
                        '||',
                        t.optionalCallExpression(
                            t.optionalMemberExpression(
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('codeIds')
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
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Long'),
                                            t.identifier('fromValue')
                                        ),
                                        [
                                            t.identifier('e')
                                        ]
                                    )
                                )
                            ],
                            false
                        ),
                        t.arrayExpression([])
                    )
                )
            ),

            /*
                message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('poolId')
                    ),
                    t.conditionalExpression(
                        t.logicalExpression(
                            '&&',
                            t.binaryExpression(
                                '!==',
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('poolId')
                                ),
                                t.identifier('undefined')
                            ),
                            t.binaryExpression(
                                '!==',
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('poolId')
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
                                    t.identifier('poolId')
                                )
                            ]
                        ),
                        t.memberExpression(
                            t.identifier('Long'),
                            t.identifier('UZERO')
                        )
                    )
                )
            ),

            /*
                message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
            */

            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier('tokenInMaxs')
                    ),
                    t.logicalExpression(
                        '||',
                        t.optionalCallExpression(
                            t.optionalMemberExpression(
                                t.memberExpression(
                                    t.identifier('object'),
                                    t.identifier('tokenInMaxs')
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
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Coin'),
                                            t.identifier('fromPartial')
                                        ),
                                        [
                                            t.identifier('e')
                                        ]
                                    )
                                )
                            ],
                            false
                        ),
                        t.arrayExpression([])
                    )
                )
            ),

            // RETURN 

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
        ),
        t.tsTypeParameterDeclaration([
            t.tsTypeParameter(
                t.tsTypeReference(
                    t.identifier('Exact'),
                    t.tsTypeParameterInstantiation([
                        t.tsTypeReference(
                            t.identifier('DeepPartial'),
                            t.tsTypeParameterInstantiation([
                                t.tsTypeReference(
                                    t.identifier('MsgJoinPool')
                                )
                            ])
                        ),
                        t.tsTypeReference(
                            t.identifier('I')
                        )
                    ])
                ),
                null,
                'I'
            )
        ])
    )
};

