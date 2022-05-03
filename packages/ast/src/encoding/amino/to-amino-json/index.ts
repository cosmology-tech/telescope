import * as t from '@babel/types';
import { pascal } from 'case';
import { AminoExceptions } from '../../../types';
import { arrowFunctionExpression, identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../../types';
import { AminoOptions } from '../amino-converter';
import { arrayTypes, toAmino } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAmino (${field.type} rules[${field.rule}] name[${name}])`);
}

const protoFieldsToArray = (proto: ProtoType) => {
    return Object.keys(proto.fields).map(name => {
        return {
            name,
            ...proto.fields[name]
        };
    })
}

interface Context {
    enums: any[];
    types: any[];
}

export interface AminoParseField {
    context: Context;
    field: ProtoField;
    scope: string[];
    nested: number;
    options: AminoOptions;
};

export const toAminoParseField = ({ context, field, scope, nested, options }: AminoParseField) => {

    const newScope = [field.name, ...scope];

    if (field.rule === 'repeated') {
        return toAmino.array({
            context,
            field,
            scope: newScope,
            nested,
            options
        });
    }

    switch (field.type) {
        case 'string':
            return toAmino.string(field.name, newScope, options);
        case 'int64':
        case 'uint64':
            return toAmino.long(field.name, newScope, options);
        case 'double':
            return needsImplementation(field.name, field);
        case 'int64':
            return needsImplementation(field.name, field);
        case 'bool':
            return needsImplementation(field.name, field);
        case 'bytes':
            return needsImplementation(field.name, field);

        case 'Duration':
        case 'google.protobuf.Duration':
            return toAmino.duration(field.name, newScope, options);
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return needsImplementation(field.name, field);
        case 'cosmos.base.v1beta1.Coin':
            return toAmino.coin(field.name, newScope, options);

        default:
            switch (field.parsedType.type) {
                case 'Enum':
                    return needsImplementation(field.name, field);
                case 'Type':
                    return needsImplementation(field.name, field);

            }
            return needsImplementation(field.name, field);
    }
};


export const toAminoJsonMethod = (
    context: Context,
    proto: ProtoType,
    options: AminoOptions
) => {

    const toAminoParams = t.objectPattern(
        protoFieldsToArray(proto).map((field) =>
            t.objectProperty(
                t.identifier(field.name),
                t.identifier(field.name),
                false,
                true)
        )
    );
    toAminoParams.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(proto.name)))

    return arrowFunctionExpression(
        [
            toAminoParams
        ],
        t.blockStatement([
            t.returnStatement(
                t.objectExpression(
                    protoFieldsToArray(proto).map((field) =>
                        toAminoParseField({
                            context,
                            field,
                            scope: [],
                            nested: 0,
                            options
                        })
                    )))
        ]),
        t.tsTypeAnnotation(t.tsIndexedAccessType(
            t.tsTypeReference(t.identifier('Amino' + proto.name)),
            t.tsLiteralType(t.stringLiteral('value'))
        ))
    );

};