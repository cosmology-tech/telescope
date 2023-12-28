import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifierAminoCaseField, shorthandProperty, TypeLong } from '../../../utils';
import { FromAminoParseField, fromAminoParseField } from './index'
import { protoFieldsToArray } from '../utils';
import { getFieldOptionality, getOneOfs } from '../../proto';
import { ProtoField } from '@cosmology/types';
import { GenericParseContext } from '../../context';

export const fromAmino = {
    defaultType(args: FromAminoParseField) {
        if (args.field.name === args.context.aminoCaseField(args.field) && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(
            t.identifier(args.field.name),
            memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField)
        );
    },

    string(args: FromAminoParseField) {

        if (args.field.name === args.context.aminoCaseField(args.field) && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(
            t.identifier(args.field.name),
            memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField)
        );
    },

    rawBytes(args: FromAminoParseField) {
        args.context.addUtil('toUtf8');
        let prop = memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField);
        let value = t.callExpression(
            t.identifier('toUtf8'),
            [
                t.callExpression(
                    t.memberExpression(
                        t.identifier('JSON'),
                        t.identifier('stringify')
                    ),
                    [
                        prop
                    ]
                )
            ]
        );
        return t.objectProperty(
            t.identifier(args.field.name),
            this.nullCheckCondition(prop, prop, value)
        );
    },

    wasmByteCode(args: FromAminoParseField) {
        args.context.addUtil('fromBase64');
        let prop = memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField);
        let value = t.callExpression(
            t.identifier('fromBase64'),
            [
                prop
            ]
        );
        return t.objectProperty(
            t.identifier(args.field.name),
            this.nullCheckCondition(prop, prop, value)
        );
    },

    long(args: FromAminoParseField) {
        TypeLong.addUtil(args.context);

        const prop = memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField);
        return t.objectProperty(t.identifier(args.field.name),
            this.nullCheckCondition(prop, prop, t.callExpression(TypeLong.getFromString(args.context), [prop]))
        );
    },

    duration(args: FromAminoParseField) {
        const durationFormat = args.context.pluginValue('prototypes.typingsFormat.duration');
        switch (durationFormat) {
            case 'duration':
            // TODO duration amino type
            case 'string':
            default:
                return fromAmino.durationString(args);
        }
    },

    durationString(args: FromAminoParseField) {
        TypeLong.addUtil(args.context);

        let property = memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField);
        const value = t.objectExpression(
            [
                t.objectProperty(t.identifier('seconds'), t.callExpression(
                    TypeLong.getFromNumber(args.context), [
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
                                        property
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
                                property
                            ]
                        ),
                        BILLION
                    )
                )
            ]
        );
        return t.objectProperty(t.identifier(args.field.name), this.nullCheckCondition(property, property, value));
    },

    height(args: FromAminoParseField) {
        TypeLong.addUtil(args.context);
        const longType = TypeLong.getType(args.context);

        let revisionHeightArgs: t.Expression[] = [
            t.logicalExpression(
                '||',
                t.memberExpression(
                    memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField),
                    t.identifier(args.context.aminoCasingFn('revision_height'))
                    , false, true
                ),
                t.stringLiteral('0')
            )
        ];

        let revisionNumberArgs: t.Expression[] = [
            t.logicalExpression(
                '||',
                t.memberExpression(
                    memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField),
                    t.identifier(args.context.aminoCasingFn('revision_number'))
                    , false, true
                ),
                t.stringLiteral('0')
            )
        ];

        if (longType == 'Long') {
            revisionHeightArgs.push(t.booleanLiteral(true))
            revisionNumberArgs.push(t.booleanLiteral(true))
        }

        return t.objectProperty(
            t.identifier(args.field.name),
            t.conditionalExpression(
                memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField),
                t.objectExpression([
                    t.objectProperty(t.identifier('revisionHeight'),
                        t.callExpression(
                            TypeLong.getFromString(args.context),
                            revisionHeightArgs
                        )
                    ),
                    t.objectProperty(t.identifier('revisionNumber'),
                        t.callExpression(
                            TypeLong.getFromString(args.context),
                            revisionNumberArgs
                        )
                    )
                ]),
                t.identifier('undefined')
            )
        )
    },

    enum({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromAminoParseField) {
        const enumFunction = context.lookupEnumFromJson(field, currentProtoPath);
        let prop = memberExpressionOrIdentifierAminoCaseField(fieldPath, context.aminoCaseField);
        const value = t.callExpression(
            t.identifier(enumFunction), [
                prop
        ]);
        return t.objectProperty(t.identifier(field.name), this.nullCheckCondition(prop, prop, value));
    },

    enumArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromAminoParseField) {
        const enumFunction = context.lookupEnumFromJson(field, currentProtoPath);
        const value = t.optionalCallExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCaseField(fieldPath, context.aminoCaseField),
                t.identifier('map'),
                false, true
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
            ], true
        );
        return t.objectProperty(t.identifier(field.name), value);
    },

    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromAminoParseField) {
        const parentField = field;
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return fromAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                fieldPath: [...fieldPath],
                nested: nested + 1,
                isOptional // TODO how to handle nested optionality?
            })
        });
        let prop = memberExpressionOrIdentifierAminoCaseField(fieldPath, context.aminoCaseField);

        return t.objectProperty(t.identifier(field.name),
            this.nullCheckCondition(prop, prop, t.objectExpression(
                properties
            ))
        );
    },

    arrayFrom(args: FromAminoParseField) {
        let prop = memberExpressionOrIdentifierAminoCaseField(args.fieldPath, args.context.aminoCaseField);
        let value = t.callExpression(
            t.memberExpression(
                t.identifier('Array'),
                t.identifier('from')
            ),
            [
                prop
            ]
        );
        return t.objectProperty(t.identifier(args.field.name), this.nullCheckCondition(prop, prop, value));
    },

    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromAminoParseField) {
        //////
        const variable = 'el' + nested;
        const f = JSON.parse(JSON.stringify(field)); // clone
        const varProto: ProtoField = {
            ...f
        };
        varProto.name = variable;
        varProto.options['(telescope:orig)'] = variable;
        varProto.options['(telescope:name)'] = variable;
        varProto.options['(telescope:camel)'] = variable;
        //////

        const parentField = field;
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;

            return fromAminoParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                fieldPath: [varProto],
                nested: nested + 1,
                isOptional // TODO how to handle nested optionality?
            })
        });

        const expr = t.optionalCallExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCaseField(fieldPath, context.aminoCaseField),
                t.identifier('map'), false, true
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
            ], true
        );

        return t.objectProperty(t.identifier(field.name),
            expr
        );
    },


    scalarArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromAminoParseField, arrayTypeAstFunc: Function) {
        const variable = 'el' + nested;

        const expr = t.optionalCallExpression(
            t.memberExpression(
                memberExpressionOrIdentifierAminoCaseField(fieldPath, context.aminoCaseField),
                t.identifier('map'), false, true,
            ),
            [
                t.arrowFunctionExpression(
                    [
                        t.identifier(variable)
                    ],
                    arrayTypeAstFunc(variable, context)
                )
            ], true
        );

        return t.objectProperty(t.identifier(field.name),
            expr
        );
    },

    pubkey(args: FromAminoParseField) {
        args.context.addUtil('encodePubkey');

        return t.objectProperty(
            t.identifier(args.field.name),
            t.callExpression(
                t.identifier('encodePubkey'),
                [
                  t.identifier('pubkey')
                ]
            )
        )
    },

    /**
     *  value == null ? nullExpr : nonNullExpr
     */
    nullCheckCondition(value: t.Expression, nullExpr: t.Expression, nonNullExpr: t.Expression)
    {
        return t.conditionalExpression(t.binaryExpression("==", value, t.nullLiteral()),
            nullExpr,
            nonNullExpr
        );
    }
};


export const arrayTypes = {
    long(varname: string, ctx: GenericParseContext) {
        TypeLong.addUtil(ctx);

        return t.callExpression(
            TypeLong.getFromString(ctx),
            [
                t.identifier(varname)
            ]
        )
    }
}
