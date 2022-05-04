import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifierAminoCasing, shorthandProperty } from '../../../utils';
import { AminoOptions } from '../types';
import { FromAminoParseField, fromAminoParseField } from './index'
import { getTypeFromContext, protoFieldsToArray } from '../utils';

export const fromAmino = {
    defaultType(prop: string, scope: string[], options: AminoOptions) {
        if (prop === options.aminoCasingFn(prop) && scope.length === 1) {
            return shorthandProperty(prop);
        }
        return t.objectProperty(t.identifier(prop), memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn))
    },

    string(prop: string, scope: string[], options: AminoOptions) {
        if (prop === options.aminoCasingFn(prop) && scope.length === 1) {
            return shorthandProperty(prop);
        }
        return t.objectProperty(t.identifier(prop), memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn))
    },

    long(prop: string, scope: string[], options: AminoOptions) {
        return t.objectProperty(t.identifier(prop),
            t.callExpression(
                t.memberExpression(
                    t.identifier('Long'),
                    t.identifier('fromString')
                ),
                [
                    memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn)
                ]
            ));
    },

    duration(prop: string, scope: string[], options: AminoOptions) {
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
                                        memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn)
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
                                memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn)
                            ]
                        ),
                        BILLION
                    )
                )
            ]
        );
        return t.objectProperty(t.identifier(prop), value);
    },

    height(prop: string, scope: string[], options: AminoOptions) {
        return t.objectProperty(
            t.identifier(prop),
            t.conditionalExpression(
                memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn),
                t.objectExpression([
                    t.objectProperty(t.identifier('revisionHeight'),
                        t.callExpression(
                            t.memberExpression(t.identifier('Long'), t.identifier('fromString')),
                            [
                                t.logicalExpression(
                                    '||',
                                    t.memberExpression(
                                        memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn),
                                        t.identifier(options.aminoCasingFn('revision_height'))
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
                                        memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn),
                                        t.identifier(options.aminoCasingFn('revision_number'))
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

    enum({ context, field, scope, nested, options }: FromAminoParseField) {
        const toFunc = 'enumToFunction';
        console.log({ toFunc })
        console.log({ toFunc })
        const value = t.callExpression(
            t.identifier(toFunc), [
            memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn)
        ]);
        return t.objectProperty(t.identifier(field.name), value);
    },

    enumArray({ context, field, scope, nested, options }: FromAminoParseField) {
        const toFunc = 'enumToFunctionArray';
        console.log({ toFunc })
        console.log({ toFunc })

        const value = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn),
                t.identifier('map')
            ),
            [
                t.arrowFunctionExpression(
                    [
                        t.identifier('el')
                    ],
                    t.callExpression(
                        t.identifier(toFunc),
                        [
                            t.identifier('el')
                        ]
                    )
                )
            ]
        );
        return t.objectProperty(t.identifier(field.name), value);
    },

    type({ context, field, scope, nested, options }: FromAminoParseField) {

        const Type = getTypeFromContext(field, context);
        const properties = protoFieldsToArray(Type).map(field => {
            return fromAminoParseField({
                context,
                field,
                scope: [...scope],
                nested: nested + 1,
                options
            })
        });
        return t.objectProperty(t.identifier(field.name),
            t.objectExpression(
                properties
            )
        );
    },

    typeArray({ context, field, scope, nested, options }: FromAminoParseField) {
        const variable = 'el' + nested;

        const Type = getTypeFromContext(field, context);
        const properties = protoFieldsToArray(Type).map(field => {
            return fromAminoParseField({
                context,
                field,
                scope: [variable],
                nested: nested + 1,
                options
            })
        });


        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn),
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

    arrayFrom(prop: string, scope: string[], options: AminoOptions) {
        return t.objectProperty(t.identifier(prop),
            t.callExpression(
                t.memberExpression(
                    t.identifier('Array'),
                    t.identifier('from')
                ),
                [
                    memberExpressionOrIdentifierAminoCasing(scope, options.aminoCasingFn)
                ]
            ));
    }




};
