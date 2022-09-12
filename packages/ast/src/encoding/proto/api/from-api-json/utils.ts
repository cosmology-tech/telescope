import * as t from '@babel/types';
import {
    BILLION,
    memberExpressionOrIdentifierApiCaseField,
    shorthandProperty
} from '../../../../utils';
import { FromApiParseField, fromApiParseField } from './index'
import { getFieldOptionality, getOneOfs } from '../../types';
import { ProtoField } from '@osmonauts/types';
import { protoFieldsToArray } from '../../../amino';

export const fromApi = {
    defaultType(args: FromApiParseField) {
        if (args.field.name === args.field?.options?.['(telescope:orig)']
            && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(
            t.identifier(args.field.name),
            memberExpressionOrIdentifierApiCaseField(args.fieldPath)
        );
    },

    arrayFrom(args: FromApiParseField) {
        return t.objectProperty(t.identifier(args.field.name),
            t.callExpression(
                t.memberExpression(
                    t.identifier('Array'),
                    t.identifier('from')
                ),
                [
                    memberExpressionOrIdentifierApiCaseField(args.fieldPath)
                ]
            ));
    },

    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromApiParseField) {
        const parentField = field;
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return fromApiParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                fieldPath: [...fieldPath],
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

    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromApiParseField) {
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

            return fromApiParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                fieldPath: [varProto],
                nested: nested + 1,
                isOptional // TODO how to handle nested optionality?
            })
        });

        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifierApiCaseField(fieldPath),
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

    scalarArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromApiParseField, arrayTypeAstFunc: Function) {
        const variable = 'el' + nested;

        const expr = t.callExpression(
            t.memberExpression(
                memberExpressionOrIdentifierApiCaseField(fieldPath),
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

        return t.objectProperty(t.identifier(field.name),
            expr
        );
    }
};