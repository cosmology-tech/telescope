import * as t from '@babel/types';
import { pascal } from 'case';
import { identifier, objectMethod } from '../../../utils';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField, getBaseCreateTypeFuncName } from '../types';
import { arrayTypes, fromPartial } from './utils';

const needsImplementation = (name: string, field: ProtoField) => {
    throw new Error(`need to implement fromPartial (${field.type} rules[${field.rule}] name[${name}])`);
}
export interface FromPartialMethod {
    context: ProtoParseContext;
    field: ProtoField;
}

export const fromPartialMethodFields = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = Object.keys(proto.fields ?? {}).map(fieldName => {
        const field = {
            name: fieldName,
            ...proto.fields[fieldName]
        };

        const args: FromPartialMethod = {
            context,
            field
        };

        if (field.rule === 'repeated') {
            switch (field.type) {
                case 'string':
                    return fromPartial.array(args, arrayTypes.string());
                case 'uint64':
                case 'int64':
                    return fromPartial.array(args, arrayTypes.long());
                case 'uint32':
                case 'int32':
                    return fromPartial.array(args, arrayTypes.number());
                case 'bytes':
                    return needsImplementation(fieldName, field);
                default:
                    switch (field.parsedType.type) {
                        case 'Enum':
                        case 'Type':
                            return fromPartial.array(args, arrayTypes.type(field.parsedType.name));
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
                    return fromPartial.keyHash(args);
                default:
                    return needsImplementation(fieldName, field);
            }
        }

        switch (field.type) {
            case 'string':
                return fromPartial.string(args);
            case 'uint64':
                return fromPartial.long(args);
            case 'int64':
                return fromPartial.int64(args);
            case 'double':
                return fromPartial.double(args);
            case 'bytes':
                return fromPartial.bytes(args);
            case 'bool':
                return fromPartial.bool(args);
            case 'google.protobuf.Duration':
            case 'Duration':
                return fromPartial.duration(args);
            case 'google.protobuf.Timestamp':
            case 'Timestamp':
                return fromPartial.timestamp(args);
            default:
                switch (field.parsedType.type) {
                    case 'Enum':
                        return fromPartial.enum(args);
                    case 'Type':
                        return fromPartial.type(args);
                }
                return needsImplementation(fieldName, field);
        }
    });
    return fields;
};
export const fromPartialMethod = (context: ProtoParseContext, name: string, proto: ProtoType) => {
    const fields = fromPartialMethodFields(context, name, proto);

    return objectMethod(
        'method',
        t.identifier('fromPartial'),
        [
            identifier(
                'object',
                t.tsTypeAnnotation(
                    t.tsTypeReference(
                        t.identifier('I')
                    )
                )
            )
        ],
        t.blockStatement([

            // init 
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('message'),
                        t.callExpression(
                            t.identifier(getBaseCreateTypeFuncName(name)),
                            []
                        )
                    )
                ]
            ),

            ...fields,

            // RETURN 
            t.returnStatement(
                t.identifier('message')
            )

        ]),
        false,
        false,
        false,
        t.tsTypeAnnotation(
            t.tsTypeReference(
                t.identifier(name)
            )
        ),
        t.tsTypeParameterDeclaration([
            t.tsTypeParameter(
                t.tsTypeReference(
                    t.identifier('Exact'),
                    t.tsTypeParameterInstantiation([
                        t.tsTypeReference(
                            t.identifier('DeepPartial'),
                            t.tsTypeParameterInstantiation([
                                t.tsTypeReference(
                                    t.identifier(name)
                                )
                            ])
                        ),
                        t.tsTypeReference(
                            t.identifier('I')
                        )
                    ])
                ),
                null,
                'I'
            )
        ])
    )
};

