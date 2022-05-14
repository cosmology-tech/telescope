import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifier, shorthandProperty } from "../../../utils";
import { protoFieldsToArray } from '../utils';
import { ToAminoParseField, toAminoParseField } from './index'
import { getOneOfs, getFieldOptionality } from '../../proto';

export const toAmino = {
    defaultType(args: ToAminoParseField) {
        if (args.field.name === args.context.options.aminoCasingFn(args.field.name) && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(t.identifier(args.context.options.aminoCasingFn(args.field.name)), memberExpressionOrIdentifier(args.scope))
    },

    long(args: ToAminoParseField) {
        return t.objectProperty(t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.callExpression(
                t.memberExpression(memberExpressionOrIdentifier(args.scope), t.identifier('toString')),
                [])
        )
    },

    string(args: ToAminoParseField) {
        if (args.field.name === args.context.options.aminoCasingFn(args.field.name) && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(t.identifier(args.context.options.aminoCasingFn(args.field.name)), memberExpressionOrIdentifier(args.scope))
    },

    duration(args: ToAminoParseField) {
        const exp = t.binaryExpression(
            '*',
            memberExpressionOrIdentifier(args.scope),
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
        return t.objectProperty(t.identifier(args.context.options.aminoCasingFn(args.field.name)), value);
    },

    height(args: ToAminoParseField) {
        args.context.addUtil('omitDefault');

        const value = t.objectExpression(
            [
                t.objectProperty(
                    t.identifier(args.context.options.aminoCasingFn('revision_height')),
                    t.optionalCallExpression(
                        t.optionalMemberExpression(
                            t.callExpression(
                                t.identifier('omitDefault'),
                                [
                                    t.memberExpression(
                                        memberExpressionOrIdentifier(args.scope),
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
                    t.identifier(args.context.options.aminoCasingFn('revision_number')),
                    t.optionalCallExpression(
                        t.optionalMemberExpression(
                            t.callExpression(
                                t.identifier('omitDefault'),
                                [
                                    t.memberExpression(
                                        memberExpressionOrIdentifier(args.scope),
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
            memberExpressionOrIdentifier(args.scope),
            value,
            t.objectExpression([])
        );

        return t.objectProperty(t.identifier(args.context.options.aminoCasingFn(args.field.name)), cond);
    },

    coin(args: ToAminoParseField) {
        const value = t.objectExpression([
            t.objectProperty(t.identifier('denom'), t.memberExpression(
                memberExpressionOrIdentifier(args.scope),
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
                                    memberExpressionOrIdentifier(args.scope),
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
        return t.objectProperty(t.identifier(args.context.options.aminoCasingFn(args.field.name)), value);
    },

    type({ context, field, currentProtoPath, scope, nested, isOptional }: ToAminoParseField) {
        /// TODO (can this be refactored out? e.g. no recursive calls in this file?)
        /// BEGIN
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const parentField = field;
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return toAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                nested,
                isOptional // TODO how to handle nested optionality
            })
        });
        /// END 
        return t.objectProperty(t.identifier(context.options.aminoCasingFn(field.name)),
            t.objectExpression(
                properties
            )
        );
    },


    typeArray({ context, field, currentProtoPath, scope, nested, isOptional }: ToAminoParseField) {
        const variable = 'el' + nested;

        if (field.parsedType.type !== 'Type') {
            throw new Error('Arrays only support types[Type] right now.');
        }

        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const parentField = field;
        const oneOfs = getOneOfs(Type);

        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;

            return toAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                nested: nested + 1,
                isOptional // TODO how to handle nested optionality
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

        return t.objectProperty(t.identifier(context.options.aminoCasingFn(field.name)),
            expr
        );
    },

    pubkey(args: ToAminoParseField) {
        args.context.addUtil('fromBase64');
        args.context.addUtil('decodeBech32Pubkey');

        return t.objectProperty(
            t.identifier(args.field.name),
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
                                        t.identifier(args.field.name)
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
