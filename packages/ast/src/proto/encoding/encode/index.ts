import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoType, ProtoField, getTagNumber, getFieldsTypeName } from '../../types';
import { encode, arrayTypes } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement encode (${field.type} rules[${field.rule}] name[${name}])`);
}

export const protoEncodeMethodFields = (name: string, proto: ProtoType) => {

    return Object.keys(proto.fields ?? {}).reduce((m, fieldName) => {
        const field = proto.fields[fieldName];
        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return needsImplementation(fieldName, field);
                case 'uint64':
                    return [...m, ...encode.scalarArray(getTagNumber(field), fieldName, arrayTypes.long())];
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
                            return [...m, ...encode.typeArray(getTagNumber(field), fieldName, getFieldsTypeName(field))];
                    }
                    return needsImplementation(fieldName, field);
            }

        }

        switch (field.type) {
            case 'string':
                return [...m, encode.string(getTagNumber(field), fieldName)];
            case 'uint64':
                return [...m, encode.long(getTagNumber(field), fieldName)];
            case 'int64':
                return needsImplementation(fieldName, field);
            case 'bytes':
                return [...m, encode.bytes(getTagNumber(field), fieldName)];
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return [...m, encode.enum(getTagNumber(field), fieldName)];
                    case 'Type':
                        return [...m, encode.type(getTagNumber(field), fieldName, getFieldsTypeName(field))];
                }
                return needsImplementation(fieldName, field);
        }
    }, []);
};

export const protoEncodeMethod = (name: string, proto: ProtoType) => {
    const fields = protoEncodeMethodFields(name, proto);
    if (!fields.length) {
        console.log('no fields?');
    }
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
