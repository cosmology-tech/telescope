import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoField, ProtoType, getFieldsTypeName } from '../types';
import { arrayTypes, toJSON } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toJSON (${field.type} rules[${field.rule}] name[${name}])`);
}

export interface ToJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
}

export const toJSONMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).reduce((m, fieldName) => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const args: ToJSONMethod = {
            context,
            field
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return [...m, toJSON.array(args, arrayTypes.string())];
                case 'uint64':
                    return [...m, toJSON.array(args, arrayTypes.uint64())];
                case 'int64':
                    return [...m, toJSON.array(args, arrayTypes.int64())];
                case 'uint32':
                case 'int32':
                    return [...m, toJSON.array(args, arrayTypes.number())];
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return [...m, toJSON.array(args, arrayTypes.type(getFieldsTypeName(field)))];
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
                    return [...m, ...toJSON.keyHash(args)];
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return [...m, toJSON.string(args)];
            case 'uint64':
                return [...m, toJSON.long(args)];
            // return [...m, toJSON.uint64(args)];
            case 'int64':
                return [...m, toJSON.int64(args)];
            case 'double':
                return [...m, toJSON.double(args)];
            case 'bytes':
                return [...m, toJSON.bytes(args)];
            case 'bool':
                return [...m, toJSON.bool(args)];
            case 'google.protobuf.Duration':
            case 'Duration':
                return [...m, toJSON.duration(args)];
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return [...m, toJSON.timestamp(args)];
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return [...m, toJSON.enum(args)];
                    case 'Type':
                        return [...m, toJSON.type(args)];
                }
                return needsImplementation(fieldName, field);
        }
    }, []);
    return fields;
};

export const toJSONMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = toJSONMethodFields(context, name, proto);

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

            ...fields,

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
