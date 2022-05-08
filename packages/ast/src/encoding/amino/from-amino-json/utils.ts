import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifierAminoCasing, shorthandProperty } from '../../../utils';
import { FromAminoParseField, fromAminoParseField } from './index'
import { getTypeFromCurrentProtoPath, protoFieldsToArray } from '../utils';
import { getEnumFromJsonName } from '../../proto';
import { getObjectName } from '@osmonauts/proto-parser';

export const fromAmino = {
    defaultType(args: FromAminoParseField) {
        if (args.field.name === args.context.options.aminoCasingFn(args.field.name) && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(t.identifier(args.field.name), memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn))
    },

    string(args: FromAminoParseField) {
        if (args.field.name === args.context.options.aminoCasingFn(args.field.name) && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(t.identifier(args.field.name), memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn))
    },

    long(args: FromAminoParseField) {
        return t.objectProperty(t.identifier(args.field.name),
            t.callExpression(
                t.memberExpression(
                    t.identifier('Long'),
                    t.identifier('fromString')
                ),
                [
                    memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn)
                ]
            ));
    },

    duration(args: FromAminoParseField) {
        const value = t.objectExpression(
            [
                t.objectProperty(t.identifier('seconds'), t.callExpression(
                    t.memberExpression(t.identifier('Long'), t.identifier('fromNumber')), [
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('Math'),
                            t.identifier('floor')
                        ),
                        [
                            t.binaryExpression('/',
                                t.callExpression(
                                    t.identifier('parseInt'),
                                    [
                                        memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn)
                                    ]
                                ),
                                BILLION
                            )
                        ]
                    )
                ]
                )),
                t.objectProperty(
                    t.identifier('nanos'),
                    t.binaryExpression('%',
                        t.callExpression(
                            t.identifier('parseInt'),
                            [
                                memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn)
                            ]
                        ),
                        BILLION
                    )
                )
            ]
        );
        return t.objectProperty(t.identifier(args.field.name), value);
    },

    height(args: FromAminoParseField) {
        return t.objectProperty(
            t.identifier(args.field.name),
            t.conditionalExpression(
                memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn),
                t.objectExpression([
                    t.objectProperty(t.identifier('revisionHeight'),
                        t.callExpression(
                            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
                            [
                                t.logicalExpression(
                                    '||',
                                    t.memberExpression(
                                        memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn),
                                        t.identifier(args.context.options.aminoCasingFn('revision_height'))
                                    ),
                                    t.stringLiteral('0')
                                ),
                                t.booleanLiteral(true)
                            ])
                    ),
                    //
                    t.objectProperty(t.identifier('revisionNumber'),
                        t.callExpression(
                            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
                            [
                                t.logicalExpression(
                                    '||',
                                    t.memberExpression(
                                        memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn),
                                        t.identifier(args.context.options.aminoCasingFn('revision_number'))
                                    ),
                                    t.stringLiteral('0')
                                ),
                                t.booleanLiteral(true)
                            ])
                    )
                ]),
                t.identifier('undefined')
            )
        )
    },

    enum({ context, field, currentProtoPath, scope, nested }: FromAminoParseField) {
        const Enum = getTypeFromCurrentProtoPath(field, currentProtoPath, context);

        const enumFunction = getEnumFromJsonName(getObjectName(Enum.name, Enum.scope));
        const value = t.callExpression(
            t.identifier(enumFunction), [
            memberExpressionOrIdentifierAminoCasing(scope, context.options.aminoCasingFn)
        ]);
        return t.objectProperty(t.identifier(field.name), value);
    },

    enumArray({ context, field, currentProtoPath, scope, nested }: FromAminoParseField) {
        const Enum = getTypeFromCurrentProtoPath(field, currentProtoPath, context);

        const enumFunction = getEnumFromJsonName(getObjectName(Enum.name, Enum.scope));
        const value = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCasing(scope, context.options.aminoCasingFn),
                t.identifier('map')
            ),
            [
                t.arrowFunctionExpression(
                    [
                        t.identifier('el')
                    ],
                    t.callExpression(
                        t.identifier(enumFunction),
                        [
                            t.identifier('el')
                        ]
                    )
                )
            ]
        );
        return t.objectProperty(t.identifier(field.name), value);
    },

    type({ context, field, currentProtoPath, scope, nested }: FromAminoParseField) {
        const parentField = field;
        const Type = getTypeFromCurrentProtoPath(field, currentProtoPath, context);
        const properties = protoFieldsToArray(Type).map(field => {
            if (parentField.import) currentProtoPath = parentField.import;
            return fromAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                nested: nested + 1
            })
        });
        return t.objectProperty(t.identifier(field.name),
            t.objectExpression(
                properties
            )
        );
    },

    typeArray({ context, field, currentProtoPath, scope, nested }: FromAminoParseField) {
        const variable = 'el' + nested;
        const parentField = field;
        const Type = getTypeFromCurrentProtoPath(field, currentProtoPath, context);
        const properties = protoFieldsToArray(Type).map(field => {
            if (parentField.import) currentProtoPath = parentField.import;

            return fromAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                nested: nested + 1
            })
        });

        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCasing(scope, context.options.aminoCasingFn),
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

        return t.objectProperty(t.identifier(field.name),
            expr
        );
    },

    arrayFrom(args: FromAminoParseField) {
        return t.objectProperty(t.identifier(args.field.name),
            t.callExpression(
                t.memberExpression(
                    t.identifier('Array'),
                    t.identifier('from')
                ),
                [
                    memberExpressionOrIdentifierAminoCasing(args.scope, args.context.options.aminoCasingFn)
                ]
            ));
    },

    pubkey(args: FromAminoParseField) {
        args.context.addUtil('toBase64');
        args.context.addUtil('encodeBech32PubKey');

        return t.objectProperty(
            t.identifier(args.field.name),
            t.callExpression(
                t.identifier('encodeBech32PubKey'),
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
                                        t.identifier('pubkey'),
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
        )
    }

};
