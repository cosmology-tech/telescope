import * as t from '@babel/types';
import { identifier, objectMethod } from '../../../utils';
import { ProtoField, ProtoType, getEnumToJsonName, getFieldsTypeName } from '../../types';
import { arrayTypes, toJSON } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toJSON (${field.type} rules[${field.rule}] name[${name}])`);
}

export const protoToJSONMethodFields = (name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = proto.fields[fieldName];
        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return needsImplementation(fieldName, field);
                case 'uint64':
                    return toJSON.array(fieldName, arrayTypes.long());
                case 'int64':
                    return needsImplementation(fieldName, field);
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return toJSON.array(fieldName, arrayTypes.type(getFieldsTypeName(field)));
                    }
                    return needsImplementation(fieldName, field);
            }

        }

        switch (field.type) {
            case 'string':
                return toJSON.string(fieldName);
            case 'uint64':
                return toJSON.long(fieldName);
            case 'int64':
                return needsImplementation(fieldName, field);
            case 'bytes':
                return toJSON.bytes(fieldName);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return toJSON.enum(fieldName, getEnumToJsonName(getFieldsTypeName(field)));
                    case 'Type':
                        return toJSON.type(fieldName, getFieldsTypeName(field));
                }
                return needsImplementation(fieldName, field);
        }
    });
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
