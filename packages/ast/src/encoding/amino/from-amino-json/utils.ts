import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifier, memberExpressionOrIdentifierAminoCasing, shorthandProperty } from '../../../utils';
import { FromAminoParseField, fromAminoParseField } from './index'
import { protoFieldsToArray } from '../utils';
import { getOneOfs, getFieldOptionality } from '../../proto';

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
        args.context.addUtil('Long');

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
        args.context.addUtil('Long');

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
        args.context.addUtil('Long');

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

    enum({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField) {
        const enumFunction = context.lookupEnumFromJson(field, currentProtoPath);
        const value = t.callExpression(
            t.identifier(enumFunction), [
            memberExpressionOrIdentifierAminoCasing(scope, context.options.aminoCasingFn)
        ]);
        return t.objectProperty(t.identifier(field.name), value);
    },

    enumArray({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField) {
        const enumFunction = context.lookupEnumFromJson(field, currentProtoPath);
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

    type({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField) {
        const parentField = field;
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return fromAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                nested: nested + 1,
                isOptional // TODO how to handle nested optionality?
            })
        });
        return t.objectProperty(t.identifier(field.name),
            t.objectExpression(
                properties
            )
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

    typeArray({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField) {
        const variable = 'el' + nested;
        const parentField = field;
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;

            return fromAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                nested: nested + 1,
                isOptional // TODO how to handle nested optionality?
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


    scalarArray({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField, arrayTypeAstFunc: Function) {
        const variable = 'el' + nested;

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
                    arrayTypeAstFunc(variable)
                )
            ]
        );

        return t.objectProperty(t.identifier(context.options.aminoCasingFn(field.name)),
            expr
        );
    },

    pubkey(args: FromAminoParseField) {
        args.context.addUtil('toBase64');
        args.context.addUtil('encodeBech32Pubkey');

        return t.objectProperty(
            t.identifier(args.field.name),
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


export const arrayTypes = {
    long(varname: string) {
        return t.callExpression(
            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
            [
                t.identifier(varname)
            ]
        )
    }
}
