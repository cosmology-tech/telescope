import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoField, ProtoType, getEnumToJsonName, getFieldsTypeName } from '../../types';
import { arrayTypes, toJSON } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toJSON (${field.type} rules[${field.rule}] name[${name}])`);
}

export const protoToJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).reduce((m, fieldName) => {
        const field = proto.fields[fieldName];
        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return needsImplementation(fieldName, field);
                case 'uint64':
                    return [...m, toJSON.array(fieldName, arrayTypes.uint64())];
                case 'int64':
                    return [...m, toJSON.array(fieldName, arrayTypes.int64())];
                case 'uint32':
                case 'int32':
                    return [...m, toJSON.array(fieldName, arrayTypes.number())];
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return [...m, toJSON.array(fieldName, arrayTypes.type(getFieldsTypeName(field)))];
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
                    return [...m, ...toJSON.keyHash(fieldName, field.keyType, field.parsedType.name)];
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return [...m, toJSON.string(fieldName)];
            case 'uint64':
                return [...m, toJSON.long(fieldName)];
            // return [...m, toJSON.uint64(fieldName)];
            case 'int64':
                return [...m, toJSON.int64(fieldName)];
            case 'double':
                return [...m, toJSON.double(fieldName)];
            case 'bytes':
                return [...m, toJSON.bytes(fieldName)];
            case 'bool':
                return [...m, toJSON.bool(fieldName)];
            case 'google.protobuf.Duration':
            case 'Duration':
                return [...m, toJSON.duration(fieldName)];
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return [...m, toJSON.timestamp(fieldName)];
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return [...m, toJSON.enum(fieldName, getEnumToJsonName(getFieldsTypeName(field)))];
                    case 'Type':
                        return [...m, toJSON.type(fieldName, getFieldsTypeName(field))];
                }
                return needsImplementation(fieldName, field);
        }
    }, []);
    return fields;
};

export const protoToJSONMethod = (name: string, proto: ProtoType) => {
    return objectMethod('method',
        t.identifier('toJSON'),
        [
            identifier(
                'message',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(name)
                    )
                )
            )
        ],
        t.blockStatement([
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        identifier('obj', t.tsTypeAnnotation(t.tsAnyKeyword())),
                        t.objectExpression([])
                    )
                ]
            ),

            ...protoToJSONMethodFields(name, proto),

            // RETURN 
            t.returnStatement(t.identifier('obj'))

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsUnknownKeyword()
        )
    );
};
