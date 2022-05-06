import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../types';
import { encode, arrayTypes } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement encode (${field.type} rules[${field.rule}] name[${name}])`);
}
export interface EncodeMethod {
    typeName: string;
    context: ProtoParseContext;
    field: ProtoField;
}

export const encodeMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {

    return Object.keys(proto.fields ?? {}).reduce((m, fieldName) => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const args: EncodeMethod = {
            typeName: name,
            context,
            field
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    // TODO double check string[]
                    return [...m, ...encode.scalarArray(args, arrayTypes.string())];
                case 'uint64':
                    return [...m, ...encode.scalarArray(args, arrayTypes.long())];
                case 'int32':
                    return [...m, ...encode.scalarArray(args, arrayTypes.int32())];
                case 'int64':
                    return needsImplementation(fieldName, field);
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                            // could be same as Type?
                            return needsImplementation(fieldName, field);
                        case 'Type':
                            return [...m, ...encode.typeArray(args)];
                    }
                    return needsImplementation(fieldName, field);
            }
        }

        if (field.keyType) {
            // currently they all look the same for encode()
            return [...m, encode.keyHash(args)];
        }

        switch (field.type) {
            case 'string':
                return [...m, encode.string(args)];
            case 'uint64':
                return [...m, encode.long(args)];
            case 'double':
                return [...m, encode.double(args)];
            case 'int64':
                return [...m, encode.int64(args)];
            case 'bool':
                return [...m, encode.bool(args)];
            case 'bytes':
                return [...m, encode.bytes(args)];
            case 'Duration':
            case 'google.protobuf.Duration':
                return [...m, encode.duration(args)];
            case 'Timestamp':
            case 'google.protobuf.Timestamp':
                return [...m, encode.timestamp(args)];
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return [...m, encode.enum(args)];
                    case 'Type':
                        return [...m, encode.type(args)];
                }
                return needsImplementation(fieldName, field);
        }
    }, []);
};

export const encodeMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = encodeMethodFields(context, name, proto);
    const body = [
        ...fields,
        /* RETURN writer */
        t.returnStatement(
            t.identifier('writer')
        )
    ];

    try {
        t.blockStatement(body);
    } catch (e) {
        console.log(body);
        throw e;
    }

    return objectMethod(
        'method',
        t.identifier('encode'),
        [
            // args

            identifier('message', t.tsTypeAnnotation(
                t.tsTypeReference(
                    t.identifier(name)
                )
            ), false),

            t.assignmentPattern(
                t.identifier('writer'),
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('_m0'),
                            t.identifier('Writer')
                        ),
                        t.identifier('create')
                    ),
                    [

                    ]
                )
            )
        ],

        // body 
        t.blockStatement(body),
        false,
        false,
        false,
        // return type
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.tsQualifiedName(
                    t.identifier('_m0'),
                    t.identifier('Writer')
                )
            )
        )
    )
};
