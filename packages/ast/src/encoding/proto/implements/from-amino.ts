import * as t from '@babel/types';
import { InterfaceTypeUrlMap, ProtoRef, TraverseTypeUrlRef, TypeUrlRef } from '@osmonauts/types';
import { slugify } from '@osmonauts/utils';
import { identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";


const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

const getInterfaceFromAminoName = (str: string) => {
    return firstUpper(slugify(str) + '_FromAmino');
};

export const createInterfaceFromAmino = (
    context: ProtoParseContext,
    ref: ProtoRef,
    interfaceName: string,
) => {
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
    const allTypes: TypeUrlRef[] = typeRefs.reduce((m, typeRef) => {
        // check excludes
        const packages = context.pluginValue('prototypes.excluded.packages') ?? [];
        const protos = context.pluginValue('prototypes.excluded.protos') ?? [];
        const excluded = packages.includes(typeRef.pkg) || protos.includes(typeRef.ref);
        if (excluded) return m;
        return [...m, ...typeRef.types];
    }, []);

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
                                                            t.tsAsExpression(
                                                                t.memberExpression(
                                                                    t.identifier('content'),
                                                                    t.identifier('value')
                                                                ),
                                                                t.tsTypeReference(
                                                                    t.identifier('DeepPartial'),
                                                                    t.tsTypeParameterInstantiation([
                                                                        t.tsTypeReference(
                                                                            t.identifier(type.importAs)
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
        );
    }).filter(Boolean);

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