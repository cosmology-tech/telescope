import * as t from '@babel/types';
import { BILLION, memberExpressionOrIdentifier, shorthandProperty } from "../../../utils";
import { AminoOptions } from '../types';
import { AminoParseField, toAminoParseField } from './index'

export const toAmino = {

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

    array({ context, field, scope, nested, options }: AminoParseField) {
        const variable = 'el' + nested;

        if (field.parsedType.type !== 'Type') {
            throw new Error('Arrays only support types[Type] right now.');
        }

        // TODO can we move this out somewhere else?
        // NOTE this is the only place in ast codebase that uses store...
        let lookup;
        if (context.current) {
            // if we're recursing, use the current
            lookup = context.store.get(context.current, field.parsedType.name);
        }
        if (!lookup) {
            // also check the context ref
            lookup = context.store.get(context.ref, field.parsedType.name);
        }
        if (!lookup) {
            // try the Ref by looking inside of the file that the field was imported from
            const innerRef = context.store.findProto(field.import)
            lookup = context.store.get(innerRef, field.parsedType.name);
            if (lookup) {
                // TODO test super-nested types imported from other .proto files
                // and use this innerRef in recursion
                context.current = innerRef;
            }
            if (!lookup) {
                throw new Error('Undefined Symbol: ' + field.parsedType.name);
            }
        }

        const Type = lookup.obj;

        const protoFieldsToArray = (proto) => {
            return Object.keys(proto.fields).map(name => {
                return {
                    name,
                    ...proto.fields[name]
                };
            })
        }

        const properties = protoFieldsToArray(Type).map(field => {
            return toAminoParseField({
                context,
                field,
                scope: [variable],
                nested: nested + 1,
                options
            })
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
    }


};

export const arrayTypes = {

};

