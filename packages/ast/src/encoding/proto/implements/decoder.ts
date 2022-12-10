import * as t from '@babel/types';
import { InterfaceTypeUrlMap, ProtoRef } from '@osmonauts/types';
import { slugify } from '@osmonauts/utils';
import { arrowFunctionExpression, identifier } from '../../../utils';
import { ProtoParseContext } from "../../context";

const getMapFromTypeUrlMap = (urlMap: InterfaceTypeUrlMap, name: string) => {
    return urlMap?.[name].reduce((m, v) => {
        v.types.forEach(type => {
            m[type.importAs] = type.typeUrl;
        })
        return m;
    }, {}) ?? {}
};

const firstUpper = (s: string) => s = s.charAt(0).toUpperCase() + s.slice(1);

const getInterfaceDecoderName = (str: string) => {
    return firstUpper(slugify(str) + '_InterfaceDecoder');
};

export const createInterfaceDecoder = (
    context: ProtoParseContext,
    ref: ProtoRef,
    interfaceName: string
) => {
    const map = context.store.getTypeUrlMap(ref);
    return createInterfaceDecoderHelper(
        context,
        getInterfaceDecoderName(interfaceName),
        getMapFromTypeUrlMap(map, interfaceName)
    );
}

export const createInterfaceDecoderHelper = (
    context: ProtoParseContext,
    decoder: string,
    typeHash: Record<string, string>
) => {

    context.addUtil('_m0');

    const returnTypes: string[] = Object.keys(typeHash);
    const decodeMessages: string[] = Object.values(typeHash);
    const switches = returnTypes.map((returnType, i) => {
        return t.switchCase(
            t.stringLiteral(decodeMessages[i]),
            [
                t.returnStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(returnType),
                            t.identifier('decode')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('data'),
                                t.identifier('value')
                            )
                        ]
                    )
                )
            ]
        )
    });

    return t.exportNamedDeclaration(
        t.variableDeclaration(
            'const',
            [
                t.variableDeclarator(
                    t.identifier(decoder),
                    arrowFunctionExpression(
                        [
                            identifier(
                                'input',
                                t.tsTypeAnnotation(
                                    t.tsUnionType([
                                        t.tsTypeReference(
                                            t.tsQualifiedName(
                                                t.identifier('_m0'),
                                                t.identifier('Reader')
                                            )
                                        ),
                                        t.tsTypeReference(
                                            t.identifier('Uint8Array')
                                        )
                                    ])
                                ),
                                false
                            )
                        ],
                        // body
                        t.blockStatement([
                            /// READER
                            t.variableDeclaration('const', [
                                t.variableDeclarator(
                                    t.identifier('reader'),
                                    t.conditionalExpression(
                                        t.binaryExpression(
                                            'instanceof',
                                            t.identifier('input'),
                                            t.memberExpression(
                                                t.identifier('_m0'),
                                                t.identifier('Reader')
                                            )
                                        ),
                                        t.identifier('input'),
                                        t.newExpression(
                                            t.memberExpression(
                                                t.identifier('_m0'),
                                                t.identifier('Reader')
                                            ),
                                            [
                                                t.identifier('input')
                                            ]
                                        )
                                    )
                                )
                            ]),

                            // DATA
                            t.variableDeclaration('const', [
                                t.variableDeclarator(
                                    t.identifier('data'),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.identifier('Any'),
                                            t.identifier('decode')
                                        ),
                                        [
                                            t.identifier('reader'),
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('reader'),
                                                    t.identifier('uint32') // NOTE is it always uint32?
                                                ),
                                                []
                                            )
                                        ]
                                    )
                                )
                            ]),

                            // SWITCH
                            t.switchStatement(
                                t.memberExpression(
                                    t.identifier('data'),
                                    t.identifier('typeUrl')
                                ),
                                [

                                    ...switches,
                                    /////
                                    t.switchCase(
                                        null,
                                        [
                                            t.returnStatement(
                                                t.identifier('data')
                                            )
                                        ]
                                    )
                                ]
                            )

                        ]),

                        // return type
                        t.tsTypeAnnotation(
                            t.tsUnionType([
                                ...returnTypes.map(type => t.tsTypeReference(
                                    t.identifier(type)
                                )),
                                t.tsTypeReference(
                                    t.identifier('Any')
                                )
                            ])
                        )
                    )
                )
            ]
        )
    )
};