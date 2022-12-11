import * as t from '@babel/types';
import { arrowFunctionExpression, identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";

export const createInterfaceFromAminoHelper = (
    context: ProtoParseContext,
    functionName: string
) => {

    const switchCases = [
        t.switchCase(
            t.stringLiteral('cosmos-sdk/TextProposal'),
            [
                t.returnStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Any'),
                            t.identifier('fromPartial')
                        ),
                        [
                            t.objectExpression([
                                t.objectProperty(
                                    t.identifier('typeUrl'),
                                    t.stringLiteral('/cosmos.gov.v1beta1.TextProposal')
                                ),
                                t.objectProperty(
                                    t.identifier('value'),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('TextProposal'),
                                                    t.identifier('encode')
                                                ),
                                                [
                                                    t.callExpression(
                                                        t.memberExpression(
                                                            t.identifier('TextProposal'),
                                                            t.identifier('fromPartial')
                                                        ),
                                                        [
                                                            t.tsAsExpression(
                                                                t.memberExpression(
                                                                    t.identifier('content'),
                                                                    t.identifier('value')
                                                                ),
                                                                t.tsTypeReference(
                                                                    t.identifier('DeepPartial'),
                                                                    t.tsTypeParameterInstantiation([
                                                                        t.tsTypeReference(
                                                                            t.identifier('TextProposal')
                                                                        )
                                                                    ])
                                                                )
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ),
                                            t.identifier('finish')
                                        ),
                                        []
                                    )
                                ),

                            ])
                        ]
                    )
                )]
        )
    ];

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(functionName),
                    t.arrowFunctionExpression(
                        [
                            // params
                        ],
                        t.blockStatement([
                            t.switchStatement(
                                t.memberExpression(
                                    t.identifier('content'),
                                    t.identifier('type')
                                ),
                                [
                                    ...switchCases,
                                    /// default
                                    t.switchCase(
                                        null,
                                        [
                                            t.returnStatement(
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.identifier('Any'),
                                                        t.identifier('fromAmino')
                                                    ),
                                                    [
                                                        t.identifier('content')
                                                    ]
                                                )
                                            )
                                        ]
                                    )
                                ]
                            )
                        ])
                    )
                )
            ]
        )
    )
};