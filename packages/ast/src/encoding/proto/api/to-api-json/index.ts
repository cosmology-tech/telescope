import * as t from '@babel/types';
import { arrowFunctionExpression, objectMethod } from '../../../../utils';
import { ProtoParseContext } from '../../../context';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { getFieldOptionality, getOneOfs } from '../..';
import { protoFieldsToArray } from '../../../amino';
import { toApi } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toApi (${field.type} rules[${field.rule}] name[${name}])`);
}

const warningDefaultImplementation = (name: string, field: ProtoField) => {
    console.warn(`need to implement toApi (${field.type} rules[${field.rule}] name[${name}])`);
}

export interface ToApiParseField {
    context: ProtoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    fieldPath: ProtoField[];
    nested: number;
    isOptional: boolean;
};

export const toApiParseField = ({
    context,
    field,
    currentProtoPath,
    scope: previousScope,
    fieldPath: previousFieldPath,
    nested,
    isOptional
}: ToApiParseField) => {

    const scope = [field.name, ...previousScope];
    const fieldPath = [field, ...previousFieldPath];

    const args = {
        context,
        field,
        currentProtoPath,
        scope,
        fieldPath,
        nested,
        isOptional
    };

    // arrays
    if (field.rule === 'repeated') {
        switch (field.type) {
            case 'string':
            case 'int64':
            case 'sint64':
            case 'uint64':
            case 'fixed64':
            case 'sfixed64':
            case 'double':
            case 'float':
            case 'int32':
            case 'sint32':
            case 'uint32':
            case 'fixed32':
            case 'sfixed32':
            case 'bool':
            case 'bytes':
            case 'string':
                return toApi.defaultType(args);
        }

        switch (field.parsedType.type) {
            case 'Enum':
                return toApi.defaultType(args);
            case 'Type':
                return toApi.defaultType(args);
                if (fieldPath.length > 10) {
                    return toApi.defaultType(args);
                }
                return toApi.typeArray(args);
        }

        return needsImplementation(field.name, field);
    }

    // special types...
    switch (field.type) {
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
        case 'cosmos.base.v1beta1.Coin':
        case 'ibc.core.client.v1.Height':
        case 'Height':
        case 'Duration':
        case 'google.protobuf.Duration':
            return toApi.defaultType(args)
        default:
    }

    // Types/Enums
    switch (field.parsedType.type) {
        case 'Enum':
            return toApi.defaultType(args);
        case 'Type':
            return toApi.defaultType(args);
            if (fieldPath.length > 10) {
                return toApi.defaultType(args);
            }
            return toApi.type(args);
    }

    // scalar types...
    switch (field.type) {
        case 'string':
        case 'int64':
        case 'sint64':
        case 'uint64':
        case 'fixed64':
        case 'sfixed64':
        case 'double':
        case 'float':
        case 'int32':
        case 'sint32':
        case 'uint32':
        case 'fixed32':
        case 'sfixed32':
        case 'bool':
        case 'bytes':
            return toApi.defaultType(args)

        default:
            warningDefaultImplementation(field.name, field);
            return toApi.defaultType(args)
    }
};

export const toApiJsonInfo = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const toApiParams = t.objectPattern(
        protoFieldsToArray(proto).map((field) =>
            t.objectProperty(
                t.identifier(field.name),
                t.identifier(field.name),
                false,
                true)
        )
    );

    toApiParams.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(name)))

    const oneOfs = getOneOfs(proto);

    const fields = protoFieldsToArray(proto).map((field) => {
        const isOneOf = oneOfs.includes(field.name);
        const isOptional = getFieldOptionality(context, field, isOneOf);

        const apiField = toApiParseField({
            context,
            field,
            currentProtoPath: context.ref.filename,
            scope: [],
            fieldPath: [],
            nested: 0,
            isOptional
        });
        return {
            ctx: context,
            field: apiField
        }
    });

    return {
        toApiParams,
        blockStatement: t.blockStatement([
            t.returnStatement(
                t.objectExpression(
                    fields.map(({ field }) => field)
                )
            )
        ]),
        typeAnnotation: t.tsTypeAnnotation(t.tsIndexedAccessType(
            t.tsTypeReference(t.identifier('Api' + name)),
            t.tsLiteralType(t.stringLiteral('value'))
        ))
    };
};

export const toApiJsonMethod = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const {
        toApiParams,
        blockStatement,
        typeAnnotation
    } = toApiJsonInfo(
        context,
        name,
        proto
    );

    return objectMethod(
        'method',
        t.identifier('toApi'),
        [
            toApiParams
        ],
        blockStatement,
        false,
        false,
        false,
        typeAnnotation
    );
};

export const toApiJsonFunction = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {

    const {
        toApiParams,
        blockStatement,
        typeAnnotation
    } = toApiJsonInfo(
        context,
        name,
        proto
    );

    return arrowFunctionExpression(
        [
            toApiParams
        ],
        blockStatement,
        typeAnnotation
    );
};