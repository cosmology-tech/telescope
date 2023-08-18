import * as t from '@babel/types';
import { InterfaceTypeUrlMap, ProtoRef, TraverseTypeUrlRef, TypeUrlRef } from '@cosmology/types';
import { slugify } from '@cosmology/utils';
import { identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";


const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

export const getInterfaceFromAminoName = (str: string) => {
    return firstUpper(slugify(str) + '_FromAmino');
};

const makeFunctionWrapper = (functionName: string, stmt: t.Statement) => {
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
                                        t.identifier('AnyAmino')
                                    )
                                )
                            )
                        ],
                        t.blockStatement([
                            stmt
                        ])
                    )
                )
            ]
        )
    );
};

export const createInterfaceFromAmino = (
    context: ProtoParseContext,
    ref: ProtoRef,
    interfaceName: string,
) => {

    if (interfaceName === 'cosmos.crypto.PubKey') {
        // return a helper!
        context.addUtil('encodePubkey');
        const functionName = getInterfaceFromAminoName(interfaceName);

        return makeFunctionWrapper(functionName, t.returnStatement(
          t.callExpression(
            t.identifier('encodePubkey'),
            [
                t.memberExpression(
                    t.identifier('content'),
                    t.identifier('value')
                )
            ]
          )
        ));
    }

    const typeMap = context.store.getTypeUrlMap(ref);
    const typeRefs = typeMap[interfaceName];

    return createInterfaceFromAminoHelper(
        context,
        getInterfaceFromAminoName(interfaceName),
        typeRefs
    );
};

export const createInterfaceFromAminoHelper = (
    context: ProtoParseContext,
    functionName: string,
    typeRefs: TraverseTypeUrlRef[]
) => {

    context.addUtil('DeepPartial');

    // MARKED AS NOT DRY
    const allTypes: TypeUrlRef[] = typeRefs?.reduce((m, typeRef) => {
        return [...m, ...typeRef.types];
    }, []) ?? [];

    const switchCases = allTypes.map(type => {
        if (!type.aminoType) return;

        return t.switchCase(
            t.stringLiteral(type.aminoType),
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
                                    t.stringLiteral(type.typeUrl)
                                ),
                                t.objectProperty(
                                    t.identifier('value'),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier(type.importAs),
                                                    t.identifier('encode')
                                                ),
                                                [
                                                    t.callExpression(
                                                        t.memberExpression(
                                                            t.identifier(type.importAs),
                                                            t.identifier('fromPartial')
                                                        ),
                                                        [
                                                            t.callExpression(
                                                                t.memberExpression(
                                                                    t.identifier(type.importAs),
                                                                    t.identifier('fromAmino')
                                                                ),
                                                                [
                                                                    t.memberExpression(
                                                                        t.identifier('content'),
                                                                        t.identifier('value')
                                                                    )
                                                                ]
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
        );
    }).filter(Boolean);


    let ast: t.Statement;

    if (!switchCases.length) {
        ast = t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('Any'),
                    t.identifier('fromAmino')
                ),
                [
                    t.identifier('content')
                ]
            )
        );
    } else {
        ast = t.switchStatement(
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
        );
    }

    return makeFunctionWrapper(functionName, ast);
};