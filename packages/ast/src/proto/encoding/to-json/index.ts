import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration, objectMethod } from '../../../utils';

import { ProtoType } from '../../types';

export const protoToJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('toJSON'),
        [
            identifier(
                'message',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('MsgJoinPool')
                    )
                )
            )
        ],
        t.blockStatement([
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        identifier('obj', t.tsTypeAnnotation(t.tsAnyKeyword())),
                        t.objectExpression([])
                    )
                ]
            ),

            /*
                message.sender !== undefined && (obj.sender = message.sender);
            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('sender')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('sender')
                        ),
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('sender')
                        )
                    )
                )
            ),

            /*
                
                message.signDoc !== undefined && (obj.signDoc = message.signDoc ? SignDocDirectAux.toJSON(message.signDoc) : undefined);
            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('signDoc')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('signDoc')
                        ),
                        t.conditionalExpression(
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier('signDoc')
                            ),
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('SignDocDirectAux'),
                                    t.identifier('toJSON')
                                ),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('signDoc')
                                    )
                                ]
                            ),
                            t.identifier('undefined')
                        )
                    )
                )
            ),

            // message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('mode')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('mode')
                        ),
                        t.callExpression(
                            t.identifier('signModeToJSON'),
                            [
                                t.memberExpression(
                                    t.identifier('message'),
                                    t.identifier('mode')
                                )
                            ]
                        )

                    )
                )
            ),


            /*
     
            message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    
            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('poolId')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('poolId'),
                            false,
                            false
                        ),
                        t.callExpression(
                            t.memberExpression(
                                t.logicalExpression(
                                    '||',
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('poolId')
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
            ),

            /*
                Long[]
            */

            t.ifStatement(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier('codeIds')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.identifier('obj'),
                                t.identifier('codeIds')
                            ),
                            t.callExpression(
                                t.memberExpression(
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('codeIds')
                                    ),
                                    t.identifier('map')
                                ),
                                [
                                    t.arrowFunctionExpression(
                                        [
                                            t.identifier('e')
                                        ],
                                        t.callExpression(
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
                                t.identifier('codeIds')
                            ),
                            t.arrayExpression([])
                        )
                    )
                ])
            ),



            /*
     
             message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    
            */

            t.expressionStatement(
                t.logicalExpression(
                    '&&',
                    t.binaryExpression(
                        '!==',
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier('queryData')
                        ),
                        t.identifier('undefined')
                    ),
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('obj'),
                            t.identifier('queryData'),
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
                                            t.identifier('queryData')
                                        ),
                                        t.identifier('undefined')
                                    ),
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('queryData')
                                    ),
                                    t.newExpression(t.identifier('Uint8Array'), []))
                            ]
                        )
                    )
                )
            ),



            /*
    
            if (message.tokenInMaxs) {
                obj.tokenInMaxs = message.tokenInMaxs.map(e => e ? Coin.toJSON(e) : undefined);
            } else {
                obj.tokenInMaxs = [];
            }
    
            */

            t.ifStatement(
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier('tokenInMaxs')
                ),
                t.blockStatement([
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.memberExpression(
                                t.identifier('obj'),
                                t.identifier('tokenInMaxs')
                            ),
                            t.callExpression(
                                t.memberExpression(
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier('tokenInMaxs')
                                    ),
                                    t.identifier('map')
                                ),
                                [
                                    t.arrowFunctionExpression(
                                        [
                                            t.identifier('e')
                                        ],
                                        t.conditionalExpression(
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
                                        )
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
                                t.identifier('tokenInMaxs'),
                                false,
                                false
                            ),
                            t.arrayExpression([])
                        )
                    )
                ])
            ),

            // RETURN 

            t.returnStatement(t.identifier('obj'))

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsUnknownKeyword()
        )
    );
};
