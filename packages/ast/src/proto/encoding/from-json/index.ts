import * as t from '@babel/types';
import { camel, pascal } from 'case';
import { identifier, tsEnumMember, tsPropertySignature, functionDeclaration, objectMethod } from '../../../utils';

import { ProtoType } from '../../types';

export const protoFromJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('fromJSON'),
        [
            identifier('object',
                t.tsTypeAnnotation(
                    t.tsAnyKeyword()
                ),
                false
            )

        ],
        t.blockStatement(
            [
                t.returnStatement(
                    t.objectExpression([

                        /*

                        signDoc: isSet(object.signDoc) ? SignDocDirectAux.fromJSON(object.signDoc) : undefined,

                        */
                        t.objectProperty(
                            t.identifier('signDoc'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('signDoc')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('SignDocDirectAux'),
                                        t.identifier('fromJSON')
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
                        ),

                        // mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,

                        t.objectProperty(
                            t.identifier('mode'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('mode')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.identifier('signModeFromJSON'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('mode')
                                        )
                                    ]
                                ),
                                t.numericLiteral(0)
                            )
                        ),


                        /*

                        sender: isSet(object.sender) ? String(object.sender) : ""

                        */
                        t.objectProperty(
                            t.identifier('sender'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('sender')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.identifier('String'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('sender')
                                        )
                                    ]
                                ),
                                t.stringLiteral('')
                            )
                        ),

                        /*

                        poolId: isSet(object.poolId) ? Long.fromString(object.poolId) : Long.UZERO

                        */

                        t.objectProperty(
                            t.identifier('poolId'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('poolId')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Long'),
                                        t.identifier('fromString')
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
                        ),

                        /*

            queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
                        
                        */

                        // TODO register import!
                        // bytesFromBase64

                        t.objectProperty(
                            t.identifier('queryData'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.identifier('isSet'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('queryData')
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.identifier('bytesFromBase64'),
                                    [
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('queryData')
                                        )
                                    ]
                                ),
                                t.newExpression(
                                    t.identifier('Uint8Array'),
                                    []
                                )
                            )
                        ),

                        /*

                        Long[]

codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],

                        */


                        t.objectProperty(
                            t.identifier('codeIds'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Array'),
                                        t.identifier('isArray')
                                    ),
                                    [
                                        t.optionalMemberExpression(
                                            t.identifier('object'),
                                            t.identifier('codeIds'),
                                            false,
                                            true
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('codeIds')
                                        ),
                                        t.identifier('map')
                                    ),
                                    [
                                        t.arrowFunctionExpression(
                                            [
                                                identifier('e', t.tsTypeAnnotation(
                                                    t.tsAnyKeyword()
                                                ))
                                            ],
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('Long'),
                                                    t.identifier('fromString')
                                                ),
                                                [
                                                    t.identifier('e')
                                                ]
                                            ),
                                            false
                                        )
                                    ]
                                ),
                                t.arrayExpression([])
                            )
                        ),



                        /*
        
                        tokenInMaxs: Array.isArray(object?.tokenInMaxs) ? object.tokenInMaxs.map((e: any) => Coin.fromJSON(e)) : []

                        */

                        t.objectProperty(
                            t.identifier('tokenInMaxs'),
                            t.conditionalExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('Array'),
                                        t.identifier('isArray')
                                    ),
                                    [
                                        t.optionalMemberExpression(
                                            t.identifier('object'),
                                            t.identifier('tokenInMaxs'),
                                            false,
                                            true
                                        )
                                    ]
                                ),
                                t.callExpression(
                                    t.memberExpression(
                                        t.memberExpression(
                                            t.identifier('object'),
                                            t.identifier('tokenInMaxs')
                                        ),
                                        t.identifier('map')
                                    ),
                                    [
                                        t.arrowFunctionExpression(
                                            [
                                                identifier('e',
                                                    t.tsTypeAnnotation(
                                                        t.tsAnyKeyword()
                                                    )
                                                )
                                            ],
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('Coin'),
                                                    t.identifier('fromJSON')
                                                ),
                                                [
                                                    t.identifier('e')
                                                ]
                                            )
                                        )
                                    ]
                                ),
                                t.arrayExpression([])
                            )
                        )
                    ])
                )
            ]
        ),
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
