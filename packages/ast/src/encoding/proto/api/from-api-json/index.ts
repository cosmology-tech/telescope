import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { arrowFunctionExpression, objectMethod } from '../../../../utils';
import { protoFieldsToArray } from '../../../amino';
import { fromApi } from './utils';
import { ProtoParseContext } from '../../../context';
import { getFieldOptionality, getOneOfs } from '../..';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement fromApi (${field.type} rules[${field.rule}] name[${name}])`);
}

export interface FromApiParseField {
    context: ProtoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    fieldPath: ProtoField[];
    nested: number;
    isOptional: boolean;
};

export const fromApiParseField = ({
    context,
    field,
    currentProtoPath,
    scope: previousScope,
    fieldPath: previousFieldPath,
    nested,
    isOptional
}: FromApiParseField) => {

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
                return fromApi.defaultType(args);
        }

        switch (field.parsedType.type) {
            case 'Type':
                return fromApi.typeArray(args);
            case 'Enum':
            case 'cosmos.base.v1beta1.Coin':
                return fromApi.defaultType(args);
        }

        return needsImplementation(field.name, field);
    }

    // special types...
    switch (field.type) {
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
        case 'ibc.core.client.v1.Height':
        case 'Height':
        case 'Duration':
        case 'google.protobuf.Duration':
            return fromApi.defaultType(args)

        default:
    }

    // Types/Enums
    switch (field.parsedType.type) {
        case 'Type':
            return fromApi.type(args);

        case 'Enum':
            return fromApi.defaultType(args);
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
        default:
            return fromApi.defaultType(args)
    }
};

interface FromApiJSON {
    context: ProtoParseContext;
    proto: ProtoType;
}

export const fromApiJsonInfo = ({
    context,
    proto
}: FromApiJSON) => {

    const fromApiParams = t.objectPattern(
        Object.keys(proto.fields).map((field) => t.objectProperty(
            t.identifier(proto.fields[field].options['(telescope:orig)']),
            t.identifier(proto.fields[field].options['(telescope:orig)']),
            false,
            true)
        )
    );
    fromApiParams.typeAnnotation = t.tsTypeAnnotation(t.tsIndexedAccessType(
        t.tsTypeReference(t.identifier('Api' + proto.name)),
        t.tsLiteralType(t.stringLiteral('value'))
    ));

    const oneOfs = getOneOfs(proto);
    const fields = protoFieldsToArray(proto).map((field) => {
        const isOneOf = oneOfs.includes(field.name);
        const isOptional = getFieldOptionality(context, field, isOneOf);

        const apiField = fromApiParseField({
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
        fromApiParams,
        blockStatement: t.blockStatement([
            t.returnStatement(
                t.objectExpression(
                    fields.map(({ field }) => field)
                )
            )
        ]),
        typeAnnotation: t.tsTypeAnnotation(t.tsTypeReference(t.identifier(proto.name)))
    };

};

export const fromApiJsonMethod = ({
    context,
    proto
}: FromApiJSON) => {

    const {
        fromApiParams,
        blockStatement,
        typeAnnotation
    } = fromApiJsonInfo({
        context,
        proto
    });

    return objectMethod(
        'method',
        t.identifier('fromApi'),
        [
            fromApiParams
        ],
        blockStatement,
        false,
        false,
        false,
        typeAnnotation
    );
};


export const fromApiJsonFunction = ({
    context,
    proto
}: FromApiJSON) => {

    const {
        fromApiParams,
        blockStatement,
        typeAnnotation
    } = fromApiJsonInfo({
        context,
        proto
    });

    return arrowFunctionExpression(
        [
            fromApiParams
        ],
        blockStatement,
        typeAnnotation
    );
};

