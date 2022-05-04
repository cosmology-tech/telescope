import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getEnumFromJsonName, getFieldsTypeName } from '../types';
import { fromJSON, arrayTypes } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement fromJSON (${field.type} rules[${field.rule}] name[${name}])`);
}

export const fromJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = proto.fields[fieldName];
        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return fromJSON.array(fieldName, arrayTypes.string());
                case 'uint64':
                    return fromJSON.array(fieldName, arrayTypes.long());
                case 'uint32':
                case 'int32':
                    return fromJSON.array(fieldName, arrayTypes.number());
                case 'int64':
                    return needsImplementation(fieldName, field);
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                            // could be same as Type likely...
                            return needsImplementation(fieldName, field);
                        case 'Type':
                            return fromJSON.array(fieldName, arrayTypes.type(getFieldsTypeName(field)));
                    }
                    return needsImplementation(fieldName, field);
            }
        }

        if (field.keyType) {
            switch (field.keyType) {
                case 'string':
                case 'int64':
                case 'uint64':
                case 'int32':
                case 'uint32':
                    return fromJSON.keyHash(fieldName, field.keyType, field.parsedType.name);
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return fromJSON.string(fieldName);
            case 'uint64':
                return fromJSON.long(fieldName);
            // return fromJSON.uint64(fieldName);
            case 'double':
                return fromJSON.double(fieldName);
            case 'int64':
                return fromJSON.int64(fieldName);
            case 'int32':
            case 'uint32':
                return fromJSON.number(fieldName);
            case 'bytes':
                return fromJSON.bytes(fieldName);
            case 'bool':
                return fromJSON.bool(fieldName);
            case 'Duration':
            case 'google.protobuf.Duration':
                return fromJSON.duration(fieldName);
            case 'Timestamp':
            case 'google.protobuf.Timestamp':
                return fromJSON.timestamp(fieldName);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return fromJSON.enum(fieldName, getEnumFromJsonName(getFieldsTypeName(field)));
                    case 'Type':
                        return fromJSON.type(fieldName, getFieldsTypeName(field));
                }
                return needsImplementation(fieldName, field);
        }
    });
    return fields;
};

export const fromJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('fromJSON'),
        [
            identifier('object',
                t.tsTypeAnnotation(
                    t.tsAnyKeyword()
                ),
                false
            )

        ],
        t.blockStatement(
            [
                t.returnStatement(
                    t.objectExpression(fromJSONMethodFields(name, proto))
                )
            ]
        ),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        )
    )
};
