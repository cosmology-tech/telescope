import * as t from '@babel/types';
import { classMethod, identifier } from '../../utils';

const returnReponseType = (ResponseType: string) => {
    return t.tsTypeAnnotation(
        t.tsTypeReference(
            t.identifier('Promise'),
            t.tsTypeParameterInstantiation(
                [
                    t.tsTypeReference(
                        t.identifier(ResponseType)
                    )
                ]
            )
        )
    );
}

export const makeLCDClient = () => {
    return t.exportNamedDeclaration(
        t.classDeclaration(
            t.identifier('CosmosApiClient'),
            t.identifier('RestClient'),
            t.classBody([
                // constructor
                t.classMethod(
                    'constructor',
                    t.identifier('constructor'),
                    [
                        t.objectPattern([
                            t.objectProperty(
                                t.identifier('url'),
                                t.identifier('url'),
                                false,
                                true
                            )
                        ])
                    ],
                    t.blockStatement([
                        t.expressionStatement(
                            t.callExpression(
                                t.super(),
                                [
                                    t.objectExpression(
                                        [
                                            t.objectProperty(
                                                t.identifier('url'),
                                                t.identifier('url'),
                                                false,
                                                true
                                            )
                                        ]
                                    )
                                ]
                            )
                        )
                    ])
                ),

                // method
                classMethod(
                    'method',
                    t.identifier('proposal'),
                    [
                        identifier('params', t.tsTypeAnnotation(
                            t.tsTypeReference(
                                t.identifier('QueryProposalRequest')
                            )
                        ), false)
                    ],
                    t.blockStatement([
                        // query params
                        t.variableDeclaration(
                            'const',
                            [
                                t.variableDeclarator(
                                    t.objectPattern(
                                        [

                                            t.objectProperty(
                                                t.identifier('proposalId'),
                                                t.identifier('proposalId'),
                                                false,
                                                true
                                            )
                                        ]
                                    ),
                                    t.identifier('params')
                                )
                            ]
                        ),
                        // endpoint
                        // TODO multi-variable
                        t.variableDeclaration(
                            'const',
                            [
                                t.variableDeclarator(
                                    t.identifier('endpoint'),
                                    t.templateLiteral(
                                        [
                                            t.templateElement(
                                                {
                                                    raw: "/cosmos/gov/v1beta1/proposals/"
                                                }
                                            ),
                                            t.templateElement(
                                                {
                                                    raw: ""
                                                }
                                            )
                                        ],
                                        [
                                            t.identifier('proposalId')
                                        ]
                                    )
                                )
                            ]
                        ),

                        // return 

                        t.returnStatement(
                            t.awaitExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.thisExpression(),
                                        t.identifier('request')
                                    ),
                                    [
                                        t.identifier('endpoint')
                                    ]
                                )
                            )
                        )

                    ]),
                    t.tsTypeAnnotation(
                        t.tsTypeReference(
                            t.identifier('Promise'),
                            t.tsTypeParameterInstantiation(
                                [
                                    t.tsTypeReference(
                                        t.identifier('QueryProposalResponse')
                                    )
                                ]
                            )
                        )
                    ),
                    [
                        {
                            type: 'CommentLine',
                            value: ' QueryProposalRequest',
                        }
                    ]
                ),

                // method
                classMethod(
                    'method',
                    t.identifier('proposals'),
                    [
                        identifier(
                            'params',
                            t.tsTypeAnnotation(
                                t.tsTypeReference(
                                    t.identifier('QueryProposalsRequest')
                                )
                            )
                        )
                    ],
                    t.blockStatement([
                        // endpoint
                        t.variableDeclaration(
                            'const',
                            [
                                t.variableDeclarator(
                                    t.identifier('endpoint'),
                                    t.templateLiteral(
                                        [
                                            t.templateElement(
                                                {
                                                    raw: 'cosmos/gov/v1beta1/proposals'
                                                },
                                                true
                                            )
                                        ],
                                        []
                                    )
                                )
                            ]
                        ),

                        // options params object
                        t.variableDeclaration(
                            'const',
                            [
                                t.variableDeclarator(
                                    t.identifier('options'),
                                    t.objectExpression(
                                        [
                                            t.objectProperty(
                                                t.identifier('params'),
                                                t.objectExpression([])
                                            )
                                        ]
                                    )
                                )
                            ]
                        ),

                        // if optional params not undefined
                        t.ifStatement(
                            t.binaryExpression(
                                '!==',
                                t.unaryExpression(
                                    'typeof',
                                    t.optionalMemberExpression(
                                        t.identifier('params'),
                                        t.identifier('proposalStatus'),
                                        false,
                                        true
                                    )
                                ),
                                t.stringLiteral('undefined')
                            ),
                            t.blockStatement([
                                t.expressionStatement(
                                    t.assignmentExpression(
                                        '=',
                                        t.memberExpression(
                                            t.memberExpression(
                                                t.identifier('options'),
                                                t.identifier('params')
                                            ),
                                            t.identifier('proposal_status')
                                        ),
                                        t.memberExpression(
                                            t.identifier('params'),
                                            t.identifier('proposalStatus')
                                        )
                                    )
                                )
                            ])
                        ),

                        // return 

                        t.returnStatement(
                            t.awaitExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.thisExpression(),
                                        t.identifier('request')
                                    ),
                                    [
                                        t.identifier('endpoint'),
                                        t.identifier('options')
                                    ]
                                )
                            )
                        )
                    ]),
                    returnReponseType('ProposalResponse')
                ),

                // method 
                classMethod(
                    'method',
                    t.identifier('delegatorValidatorInfo'),
                    [
                        identifier(
                            'params',
                            t.tsTypeAnnotation(
                                t.tsTypeReference(
                                    t.identifier('QueryDelegatorValidatorInfo')
                                )
                            )
                        )
                    ],
                    t.blockStatement([
                        // endpoint
                        t.variableDeclaration(
                            'const',
                            [
                                t.variableDeclarator
                                    (
                                        t.identifier('endpoint'),
                                        t.templateLiteral(
                                            [
                                                t.templateElement(
                                                    {
                                                        "raw": "cosmos/staking/v1beta1/delegators/"
                                                    },
                                                    false
                                                ),
                                                t.templateElement(
                                                    {
                                                        "raw": "/validators/"
                                                    },
                                                    false
                                                ),
                                                t.templateElement(
                                                    {
                                                        "raw": ""
                                                    },
                                                    true
                                                )
                                            ],
                                            [
                                                t.memberExpression(
                                                    t.identifier('params'),
                                                    t.identifier('delegatorAddr')
                                                ),
                                                t.memberExpression(
                                                    t.identifier('params'),
                                                    t.identifier('validatorAddr')
                                                )
                                            ]
                                        )
                                    )
                            ]
                        ),

                        // return 

                        t.returnStatement(
                            t.awaitExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.thisExpression(),
                                        t.identifier('request')
                                    ),
                                    [
                                        t.identifier('endpoint')
                                    ]
                                )
                            )
                        )
                    ]),
                    returnReponseType('QueryDelegatorValidatorInfoResponse')
                )
            ])
        )
    )
};