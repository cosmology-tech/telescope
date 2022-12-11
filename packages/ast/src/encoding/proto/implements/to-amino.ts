import * as t from '@babel/types';
import { arrowFunctionExpression, identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";

export const createInterfaceToAminoHelper = (
    context: ProtoParseContext,
    functionName: string
) => {

    const switchCases = [
        t.switchCase(
            t.stringLiteral('/cosmos.gov.v1beta1.TextProposal'),
            [
                t.blockStatement([
                    // decoded data
                    t.variableDeclaration('const', [
                        t.variableDeclarator(
                            t.identifier('data'),
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('TextProposal'),
                                    t.identifier('decode')
                                ),
                                [
                                    t.memberExpression(
                                        t.identifier('content'),
                                        t.identifier('value')
                                    )
                                ]
                            )
                        )
                    ]),
                    // return
                    t.returnStatement(
                        t.objectExpression([
                            t.objectProperty(
                                t.identifier('type'),
                                t.stringLiteral('cosmos-sdk/TextProposal')
                            ),
                            t.objectProperty(
                                t.identifier('value'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier('TextProposal'),
                                        t.identifier('toAmino')
                                    ),
                                    [
                                        t.identifier('data')
                                    ]
                                )
                            )
                        ])
                    )
                ])
            ])
    ];

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(functionName),
                    t.arrowFunctionExpression(
                        [
                            identifier(
                                'content',
                                t.tsTypeAnnotation(
                                    t.tsTypeReference(
                                        t.identifier('Any')
                                    )
                                )
                            )
                        ],
                        t.blockStatement([
                            t.switchStatement(
                                t.memberExpression(
                                    t.identifier('content'),
                                    t.identifier('typeUrl')
                                ),
                                [
                                    ...switchCases,
                                    // default
                                    t.switchCase(
                                        null,
                                        [
                                            t.returnStatement(
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.identifier('Any'),
                                                        t.identifier('toAmino')
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