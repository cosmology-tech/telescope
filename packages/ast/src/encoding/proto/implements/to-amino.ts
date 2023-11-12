import * as t from '@babel/types';
import { ProtoRef, TraverseTypeUrlRef, TypeUrlRef } from '@cosmology/types';
import { slugify } from '@cosmology/utils';
import { identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";

const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

export const getInterfaceToAminoName = (str: string) => {
    return firstUpper(slugify(str) + '_ToAmino');
};

export const createInterfaceToAmino = (
    context: ProtoParseContext,
    ref: ProtoRef,
    interfaceName: string,
) => {
    if (interfaceName === 'cosmos.crypto.PubKey') {
        // return a helper!
        context.addUtil('decodePubkey');
        const functionName = getInterfaceToAminoName(interfaceName);

        return makeFunctionWrapper(context, functionName, t.returnStatement(
            t.callExpression(
                t.identifier('decodePubkey'),
                [
                    t.identifier('content')
                ]
            ),
        ));
    }


    const typeMap = context.store.getTypeUrlMap(ref);
    const typeRefs = typeMap[interfaceName];
    return createInterfaceToAminoHelper(
        context,
        getInterfaceToAminoName(interfaceName),
        typeRefs
    );
};

const makeFunctionWrapper = (
    context: ProtoParseContext,
    functionName: string,
    stmt: t.Statement
) => {
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
                            ),
                            ...(context.options.interfaces.enabled &&
                              context.options.interfaces.useUseInterfacesParams
                                ? [
                                    t.assignmentPattern(
                                      identifier(
                                        "useInterfaces",
                                        t.tsTypeAnnotation(t.tsBooleanKeyword())
                                      ),
                                      t.identifier(
                                        (
                                          context.pluginValue("interfaces.useByDefault") ?? true
                                        ).toString()
                                      )
                                    ),
                                  ]
                                : []),
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

export const createInterfaceToAminoHelper = (
    context: ProtoParseContext,
    functionName: string,
    typeRefs: TraverseTypeUrlRef[]
) => {

    // MARKED AS NOT DRY
    const allTypes: TypeUrlRef[] = typeRefs?.reduce((m, typeRef) => {
        return [...m, ...typeRef.types];
    }, []) ?? [];

    const switchCases = allTypes.map(type => {
        if (!type.aminoType) return;
        return t.switchCase(
            t.stringLiteral(type.typeUrl),
            [
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
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier(type.importAs),
                                            t.identifier('decode')
                                        ),
                                        [
                                            t.memberExpression(
                                                t.identifier('content'),
                                                t.identifier('value')
                                            ),
                                            t.identifier('undefined'),
                                            ...(context.options.interfaces.enabled &&
                                              context.options.interfaces.useUseInterfacesParams
                                                ? [
                                                    t.identifier('useInterfaces')
                                                  ]
                                                : []),
                                        ]
                                    ),
                                    ...(context.options.interfaces.enabled &&
                                      context.options.interfaces.useUseInterfacesParams
                                        ? [
                                            t.identifier('useInterfaces')
                                          ]
                                        : []),
                                ]
                            )
                        )
                    ])
                )
            ])
    }).filter(Boolean);

    let ast: t.Statement;

    if (!switchCases.length) {
        ast = t.returnStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('Any'),
                    t.identifier('toAmino')
                ),
                [
                  t.identifier('content'),
                  ...(context.options.interfaces.enabled && context.options.interfaces.useUseInterfacesParams ? [
                      t.identifier('useInterfaces')
                  ] : []),
                ]
            )
        );
    } else {
        ast = t.switchStatement(
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
                                    t.identifier('content'),
                                    ...(context.options.interfaces.enabled && context.options.interfaces.useUseInterfacesParams ? [
                                      t.identifier('useInterfaces')
                                    ] : []),
                                ]
                            )
                        )
                    ]
                )
            ]
        );
    }

    return makeFunctionWrapper(context, functionName, ast);
};