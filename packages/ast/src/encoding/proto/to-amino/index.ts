import * as t from '@babel/types';
import { getFieldOptionality, getOneOfs } from '..';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoField, ProtoType } from '@osmonauts/types';
import { arrayTypes, toAminoJSON } from './utils';
import { pascal } from 'case';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement toAminoJSON (${field.type} rules[${field.rule}] name[${name}])`);
}

export interface ToAminoJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}

export const toAminoJSONMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const oneOfs = getOneOfs(proto);
    const fields = Object.keys(proto.fields ?? {}).reduce((m, fieldName) => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const isOneOf = oneOfs.includes(fieldName);
        const isOptional = getFieldOptionality(context, field, isOneOf);

        const args: ToAminoJSONMethod = {
            context,
            field,
            isOptional
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return [...m, toAminoJSON.array(args, arrayTypes.string())];
                case 'bytes':
                    return [...m, toAminoJSON.array(args, arrayTypes.bytes(args))];
                case 'bool':
                    return [...m, toAminoJSON.array(args, arrayTypes.bool())];
                case 'double':
                    return [...m, toAminoJSON.array(args, arrayTypes.double())];
                case 'float':
                    return [...m, toAminoJSON.array(args, arrayTypes.float())];
                case 'int32':
                    return [...m, toAminoJSON.array(args, arrayTypes.int32())];
                case 'sint32':
                    return [...m, toAminoJSON.array(args, arrayTypes.sint32())];
                case 'uint32':
                    return [...m, toAminoJSON.array(args, arrayTypes.uint32())];
                case 'fixed32':
                    return [...m, toAminoJSON.array(args, arrayTypes.fixed32())];
                case 'sfixed32':
                    return [...m, toAminoJSON.array(args, arrayTypes.sfixed32())];
                case 'int64':
                    return [...m, toAminoJSON.array(args, arrayTypes.int64(args))];
                case 'sint64':
                    return [...m, toAminoJSON.array(args, arrayTypes.sint64(args))];
                case 'uint64':
                    return [...m, toAminoJSON.array(args, arrayTypes.uint64(args))];
                case 'fixed64':
                    return [...m, toAminoJSON.array(args, arrayTypes.fixed64(args))];
                case 'sfixed64':
                    return [...m, toAminoJSON.array(args, arrayTypes.sfixed64(args))];
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                            return [...m, toAminoJSON.array(args, arrayTypes.enum(args))];
                        case 'Type':
                            return [...m, toAminoJSON.array(args, arrayTypes.type(args))];
                    }
                    return needsImplementation(fieldName, field);
            }

        }

        if (field.keyType) {
            switch (field.keyType) {
                case 'string':
                case 'int32':
                case 'sint32':
                case 'uint32':
                case 'fixed32':
                case 'sfixed32':
                case 'int64':
                case 'sint64':
                case 'uint64':
                case 'fixed64':
                case 'sfixed64':
                    return [...m, ...toAminoJSON.keyHash(args)];
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return [...m, toAminoJSON.string(args)];
            case 'double':
                return [...m, toAminoJSON.double(args)];
            case 'float':
                return [...m, toAminoJSON.float(args)];
            case 'bytes':
                return [...m, toAminoJSON.bytes(args)];
            case 'bool':
                return [...m, toAminoJSON.bool(args)];
            case 'int32':
                return [...m, toAminoJSON.int32(args)];
            case 'sint32':
                return [...m, toAminoJSON.sint32(args)];
            case 'uint32':
                return [...m, toAminoJSON.uint32(args)];
            case 'fixed32':
                return [...m, toAminoJSON.fixed32(args)];
            case 'sfixed32':
                return [...m, toAminoJSON.sfixed32(args)];
            case 'int64':
                return [...m, toAminoJSON.int64(args)];
            case 'sint64':
                return [...m, toAminoJSON.sint64(args)];
            case 'uint64':
                return [...m, toAminoJSON.uint64(args)];
            case 'fixed64':
                return [...m, toAminoJSON.fixed64(args)];
            case 'sfixed64':
                return [...m, toAminoJSON.sfixed64(args)];
            case 'google.protobuf.Duration':
            case 'Duration':
                return [...m, toAminoJSON.duration(args)];
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return [...m, toAminoJSON.timestamp(args)];
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return [...m, toAminoJSON.enum(args)];
                    case 'Type':
                        return [...m, toAminoJSON.type(args)];
                }
                return needsImplementation(fieldName, field);
        }
    }, []);
    return fields;
};

export const toAminoJSONMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = toAminoJSONMethodFields(context, name, proto);
    let varName = 'message';
    if (!fields.length) {
        varName = '_';
    }

    const SDKTypeName =
        [name, 'SDKType']
            .filter(Boolean).join('')


    return objectMethod('method',
        t.identifier('toAmino'),
        [
            identifier(
                varName,
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier(name)
                    )
                )
            )
        ],
        t.blockStatement([
            // t.variableDeclaration('const', [
            //     t.variableDeclarator(
            //         t.identifier('hoistedAsts'),
            //         t.nullLiteral()
            //     )
            // ]),

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
            t.tsTypeReference(
                t.identifier(SDKTypeName)
            )
        )
    );
};
