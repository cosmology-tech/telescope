import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { pascal } from 'case';
import { getFieldOptionality, getFieldOptionalityForDefaults, getOneOfs } from '..';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { fromAminoJSON, arrayTypes } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement fromAminoJSON (${field.type} rules[${field.rule}] name[${name}])`);
}
export interface FromAminoJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}

export const fromAminoJSONMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const oneOfs = getOneOfs(proto);
    const fields = Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const isOneOf = oneOfs.includes(fieldName);
        const isOptional = getFieldOptionalityForDefaults(context, field, isOneOf);

        const args: FromAminoJSONMethod = {
            context,
            field,
            isOptional
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return fromAminoJSON.array(args, arrayTypes.string());
                case 'bytes':
                    return fromAminoJSON.array(args, arrayTypes.bytes(args));
                case 'bool':
                    return fromAminoJSON.array(args, arrayTypes.bool());
                case 'float':
                    return fromAminoJSON.array(args, arrayTypes.float());
                case 'double':
                    return fromAminoJSON.array(args, arrayTypes.double());
                case 'int32':
                    return fromAminoJSON.array(args, arrayTypes.int32());
                case 'sint32':
                    return fromAminoJSON.array(args, arrayTypes.sint32());
                case 'uint32':
                    return fromAminoJSON.array(args, arrayTypes.uint32());
                case 'fixed32':
                    return fromAminoJSON.array(args, arrayTypes.fixed32());
                case 'sfixed32':
                    return fromAminoJSON.array(args, arrayTypes.sfixed32());
                case 'int64':
                    return fromAminoJSON.array(args, arrayTypes.int64());
                case 'sint64':
                    return fromAminoJSON.array(args, arrayTypes.sint64());
                case 'uint64':
                    return fromAminoJSON.array(args, arrayTypes.uint64());
                case 'fixed64':
                    return fromAminoJSON.array(args, arrayTypes.fixed64());
                case 'sfixed64':
                    return fromAminoJSON.array(args, arrayTypes.sfixed64());
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                            return fromAminoJSON.array(args, arrayTypes.enum(args));
                        case 'Type':
                            return fromAminoJSON.array(args, arrayTypes.type(args));
                    }
                    return needsImplementation(fieldName, field);
            }
        }

        if (field.keyType) {
            switch (field.keyType) {
                case 'string':
                case 'int64':
                case 'sint64':
                case 'uint64':
                case 'fixed64':
                case 'sfixed64':
                case 'int32':
                case 'sint32':
                case 'uint32':
                case 'fixed32':
                case 'sfixed32':
                    return fromAminoJSON.keyHash(args);
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return fromAminoJSON.string(args);
            case 'bytes':
                return fromAminoJSON.bytes(args);
            case 'bool':
                return fromAminoJSON.bool(args);
            case 'double':
                return fromAminoJSON.double(args);
            case 'float':
                return fromAminoJSON.float(args);
            case 'int32':
                return fromAminoJSON.int32(args);
            case 'sint32':
                return fromAminoJSON.sint32(args);
            case 'uint32':
                return fromAminoJSON.uint32(args);
            case 'fixed32':
                return fromAminoJSON.fixed32(args);
            case 'sfixed32':
                return fromAminoJSON.sfixed32(args);
            case 'int64':
                return fromAminoJSON.int64(args);
            case 'sint64':
                return fromAminoJSON.sint64(args);
            case 'uint64':
                return fromAminoJSON.uint64(args);
            case 'fixed64':
                return fromAminoJSON.fixed64(args);
            case 'sfixed64':
                return fromAminoJSON.sfixed64(args);
            case 'Duration':
            case 'google.protobuf.Duration':
                return fromAminoJSON.duration(args);
            case 'Timestamp':
            case 'google.protobuf.Timestamp':
                return fromAminoJSON.timestamp(args);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return fromAminoJSON.enum(args);
                    case 'Type':
                        return fromAminoJSON.type(args);
                }
                return needsImplementation(fieldName, field);
        }
    });
    return fields;
};


export const fromAminoJSONMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = fromAminoJSONMethodFields(context, name, proto);
    let varName = 'object';
    if (!fields.length) {
        varName = '_';
    }

    const SDKTypeName =
        [name, 'SDKType']
            .filter(Boolean).join('');

    if (proto.type === 'Type' && proto.name === 'Duration') {
        // console.log(proto);
        // we could do something special here....
    }

    return objectMethod('method',
        t.identifier('fromAmino'),
        [
            identifier(varName,
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(SDKTypeName)
                    )
                ),
                false
            )

        ],
        t.blockStatement(
            [
                // t.variableDeclaration('const', [
                //     t.variableDeclarator(
                //         t.identifier('hoistedAsts'),
                //         t.nullLiteral()
                //     )
                // ]),

                t.returnStatement(
                    t.objectExpression(fields)
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
