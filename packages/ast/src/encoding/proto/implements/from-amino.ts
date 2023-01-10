import * as t from '@babel/types';
import { InterfaceTypeUrlMap, ProtoRef, TraverseTypeUrlRef, TypeUrlRef } from '@osmonauts/types';
import { slugify } from '@osmonauts/utils';
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
        context.addUtil('toBase64');
        context.addUtil('encodeBech32Pubkey');
        const functionName = getInterfaceFromAminoName(interfaceName);

        return makeFunctionWrapper(functionName, t.returnStatement(
            t.callExpression(
                t.identifier('encodeBech32Pubkey'),
                [
                    t.objectExpression([
                        t.objectProperty(
                            t.identifier('type'),
                            t.stringLiteral('tendermint/PubKeySecp256k1')
                        ),
                        t.objectProperty(
                            t.identifier('value'),
                            t.callExpression(
                                t.identifier('toBase64'),
                                [
                                    t.memberExpression(
                                        t.identifier('content'),
                                        t.identifier('value')
                                    )
                                ]
                            )
                        )
                    ]),
                    // TODO how to manage this?
                    // 1. options.prefix
                    // 2. look into prefix and how it's used across chains
                    // 3. maybe AminoConverter is a class and has this.prefix!
                    t.stringLiteral('cosmos')
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