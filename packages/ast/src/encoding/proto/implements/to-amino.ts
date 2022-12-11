import * as t from '@babel/types';
import { InterfaceTypeUrlMap, ProtoRef, TraverseTypeUrlRef, TypeUrlRef } from '@osmonauts/types';
import { slugify } from '@osmonauts/utils';
import { identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";

const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

const getInterfaceToAminoName = (str: string) => {
    return firstUpper(slugify(str) + '_ToAmino');
};

export const createInterfaceToAmino = (
    context: ProtoParseContext,
    ref: ProtoRef,
    interfaceName: string,
) => {
    const typeMap = context.store.getTypeUrlMap(ref);
    const typeRefs = typeMap[interfaceName];
    return createInterfaceToAminoHelper(
        context,
        getInterfaceToAminoName(interfaceName),
        typeRefs
    );
};

export const createInterfaceToAminoHelper = (
    context: ProtoParseContext,
    functionName: string,
    typeRefs: TraverseTypeUrlRef[]
) => {

    // MARKED AS NOT DRY
    const allTypes: TypeUrlRef[] = typeRefs?.reduce((m, typeRef) => {
        // check excludes
        const packages = context.pluginValue('prototypes.excluded.packages') ?? [];
        const protos = context.pluginValue('prototypes.excluded.protos') ?? [];
        const excluded = packages.includes(typeRef.pkg) || protos.includes(typeRef.ref);
        if (excluded) return m;
        return [...m, ...typeRef.types];
    }, []) ?? [];

    const switchCases = allTypes.map(type => {
        if (!type.aminoType) return;
        return t.switchCase(
            t.stringLiteral(type.typeUrl),
            [
                t.blockStatement([
                    // decoded data
                    t.variableDeclaration('const', [
                        t.variableDeclarator(
                            t.identifier('data'),
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier(type.importAs),
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
                                t.stringLiteral(type.aminoType)
                            ),
                            t.objectProperty(
                                t.identifier('value'),
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier(type.importAs),
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