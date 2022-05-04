import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifier, shorthandProperty } from "../../../utils";
import { AminoOptions } from '../types';
import { getTypeFromContext, protoFieldsToArray } from '../utils';
import { ToAminoParseField, toAminoParseField } from './index'

export const toAmino = {
    defaultType(prop: string, scope: string[], options: AminoOptions) {
        if (prop === options.aminoCasingFn(prop) && scope.length === 1) {
            return shorthandProperty(prop);
        }
        return t.objectProperty(t.identifier(options.aminoCasingFn(prop)), memberExpressionOrIdentifier(scope))
    },

    long(prop: string, scope: string[], options: AminoOptions) {
        return t.objectProperty(t.identifier(options.aminoCasingFn(prop)),
            t.callExpression(
                t.memberExpression(memberExpressionOrIdentifier(scope), t.identifier('toString')),
                [])
        )
    },

    string(prop: string, scope: string[], options: AminoOptions) {
        if (prop === options.aminoCasingFn(prop) && scope.length === 1) {
            return shorthandProperty(prop);
        }
        return t.objectProperty(t.identifier(options.aminoCasingFn(prop)), memberExpressionOrIdentifier(scope))
    },

    duration(prop: string, scope: string[], options: AminoOptions) {
        const exp = t.binaryExpression(
            '*',
            memberExpressionOrIdentifier(scope),
            BILLION
        );
        exp.extra = { parenthesized: true };
        const value = t.callExpression(
            t.memberExpression(
                exp,
                t.identifier('toString')
            ),
            []
        )
        return t.objectProperty(t.identifier(options.aminoCasingFn(prop)), value);
    },

    height(prop: string, scope: string[], options: AminoOptions) {
        const value = t.objectExpression(
            [
                t.objectProperty(
                    t.identifier(options.aminoCasingFn('revision_height')),
                    t.optionalCallExpression(
                        t.optionalMemberExpression(
                            t.callExpression(
                                t.identifier('omitDefault'),
                                [
                                    t.memberExpression(
                                        memberExpressionOrIdentifier(scope),
                                        t.identifier('revisionHeight')
                                    )
                                ]
                            ),
                            t.identifier('toString'),
                            false,
                            true
                        ),
                        [],
                        false
                    )
                ),
                //
                t.objectProperty(
                    t.identifier(options.aminoCasingFn('revision_number')),
                    t.optionalCallExpression(
                        t.optionalMemberExpression(
                            t.callExpression(
                                t.identifier('omitDefault'),
                                [
                                    t.memberExpression(
                                        memberExpressionOrIdentifier(scope),
                                        t.identifier('revisionNumber')
                                    )
                                ]
                            ),
                            t.identifier('toString'),
                            false,
                            true
                        ),
                        [],
                        false
                    )
                )
            ]
        );

        const cond = t.conditionalExpression(
            memberExpressionOrIdentifier(scope),
            value,
            t.objectExpression([])
        );

        return t.objectProperty(t.identifier(options.aminoCasingFn(prop)), cond);
    },

    coin(prop: string, scope: string[], options: AminoOptions) {
        const value = t.objectExpression([
            t.objectProperty(t.identifier('denom'), t.memberExpression(
                memberExpressionOrIdentifier(scope),
                t.identifier('denom'),
            )),
            t.objectProperty(
                t.identifier('amount'),
                t.callExpression(
                    t.memberExpression(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('Long'),
                                t.identifier('fromNumber')
                            ),
                            [
                                t.memberExpression(
                                    memberExpressionOrIdentifier(scope),
                                    t.identifier('amount')
                                )
                            ]
                        ),
                        t.identifier('toString')
                    ),
                    []
                )
            )
        ]);
        return t.objectProperty(t.identifier(options.aminoCasingFn(prop)), value);
    },

    type({ context, field, scope, nested, options }: ToAminoParseField) {
        /// TODO (can this be refactored out? e.g. no recursive calls in this file?)
        /// BEGIN
        const Type = getTypeFromContext(field, context);
        const properties = protoFieldsToArray(Type).map(field => {
            return toAminoParseField({
                context,
                field,
                scope: [...scope],
                nested: nested,
                options
            })
        });
        /// END 
        return t.objectProperty(t.identifier(options.aminoCasingFn(field.name)),
            t.objectExpression(
                properties
            )
        );
    },


    typeArray({ context, field, scope, nested, options }: ToAminoParseField) {
        const variable = 'el' + nested;

        if (field.parsedType.type !== 'Type') {
            throw new Error('Arrays only support types[Type] right now.');
        }

        const Type = getTypeFromContext(field, context);

        const properties = protoFieldsToArray(Type).map(field => {
            return toAminoParseField({
                context,
                field,
                scope: [variable],
                nested: nested + 1,
                options
            });
        });


        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifier(scope),
                t.identifier('map')
            ),
            [
                t.arrowFunctionExpression(
                    [
                        t.identifier(variable)
                    ],
                    t.objectExpression(
                        properties
                    )
                )
            ]
        );

        return t.objectProperty(t.identifier(options.aminoCasingFn(field.name)),
            expr
        );
    },

    pubkey({ context, field, scope, nested, options }: ToAminoParseField) {
        // context.imports.push( 'fromBase64' )   
        // context.imports.push( 'encodeBech32Pubkey' )   

        return t.objectProperty(
            t.identifier(field.name),
            t.objectExpression([
                t.objectProperty(
                    t.identifier('typeUrl'),
                    t.stringLiteral('/cosmos.crypto.secp256k1.PubKey')
                ),
                t.objectProperty(
                    t.identifier('value'),
                    t.callExpression(
                        t.identifier('fromBase64'),
                        [
                            t.memberExpression(
                                t.callExpression(
                                    t.identifier('decodeBech32Pubkey'),
                                    [
                                        t.identifier('pubkey')
                                    ]
                                ),
                                t.identifier('value')
                            )

                        ]
                    )
                )
            ])
        )

    }


};
