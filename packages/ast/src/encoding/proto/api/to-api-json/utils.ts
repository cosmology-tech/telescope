import * as t from '@babel/types';
import { memberExpressionOrIdentifier, shorthandProperty } from "../../../../utils";
import { ToApiParseField, toApiParseField } from './index'
import { ProtoField } from '@osmonauts/types';
import { protoFieldsToArray } from '../../../amino';
import { getFieldOptionality, getOneOfs } from '../../types';

export const toApi = {
    defaultType(args: ToApiParseField) {
        if (args.field.name === args.field.options['(telescope:orig)'] && args.scope.length === 1) {
            return shorthandProperty(args.field.name);
        }
        return t.objectProperty(t.identifier(args.field.options['(telescope:orig)']), memberExpressionOrIdentifier(args.scope))
    },

    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: ToApiParseField) {
        /// TODO (can this be refactored out? e.g. no recursive calls in this file?)
        /// BEGIN
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const parentField = field;
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;

            return toApiParseField({
                context,
                field,
                currentProtoPath,
                scope: [...scope],
                fieldPath: [...fieldPath],
                nested,
                isOptional // TODO how to handle nested optionality
            })
        });
        /// END 
        return t.objectProperty(t.identifier(field.options['(telescope:orig)']),
            t.objectExpression(
                properties
            )
        );
    },

    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: ToApiParseField) {
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

        if (field.parsedType.type !== 'Type') {
            throw new Error('Arrays only support types[Type] right now.');
        }

        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const parentField = field;
        const oneOfs = getOneOfs(Type);

        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;

            if (!field.name) {
                console.log('missing name:')
                console.log(JSON.stringify(field, null, 2))
            }

            return toApiParseField({
                context,
                field,
                currentProtoPath,
                scope: [variable],
                fieldPath: [varProto],
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

        return t.objectProperty(t.identifier(field.options['(telescope:orig)']),
            expr
        );
    },

    scalarArray({ context, field, currentProtoPath, scope, nested, isOptional }: ToApiParseField, arrayTypeAstFunc: Function) {
        const variable = 'el' + nested;

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
                    arrayTypeAstFunc(variable)
                )
            ]
        );

        return t.objectProperty(t.identifier(field.options['(telescope:orig)']),
            expr
        );
    }
};
