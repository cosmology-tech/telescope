import * as t from '@babel/types';
import { ProtoField } from '@osmonauts/types';
import { GenericParseContext, ProtoParseContext } from './context';

export const getTSType = (context: GenericParseContext, type: string) => {
    switch (type) {
        case 'string':
            return t.tsStringKeyword();
        case 'double':
        case 'float':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return t.tsNumberKeyword();
        case 'int64':
        case 'uint64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.tsTypeReference(t.identifier('Long'))
        case 'bytes':
            return t.tsTypeReference(t.identifier('Uint8Array'));
        case 'bool':
            return t.tsBooleanKeyword();
        case 'google.protobuf.Timestamp':
            switch (context.pluginValue('typingsFormat.timestamp')) {
                case 'timestamp':
                    return t.tsTypeReference(t.identifier('Timestamp'));
                case 'date':
                default:
                    return t.tsTypeReference(t.identifier('Date'));
            }
        case 'google.protobuf.Duration':
            switch (context.pluginValue('typingsFormat.duration')) {
                case 'duration':
                    return t.tsTypeReference(t.identifier('Duration'));
                case 'string':
                default:
                    return t.tsStringKeyword();
            }
        case 'google.protobuf.Any':
            return t.tsTypeReference(t.identifier('Any'));
        default:
            throw new Error('getTSType() type not found');
    };
};

export const getTSTypeForAmino = (context: GenericParseContext, field: ProtoField) => {
    switch (field.type) {
        case 'bytes':
            // bytes [WASMByteCode]
            if (field.options?.['(gogoproto.customname)'] === 'WASMByteCode') {
                return t.tsStringKeyword();
            }
            return t.tsTypeReference(t.identifier('Uint8Array'));
        default:
            return getTSType(context, field.type);
    };
};

export const getTSTypeForProto = (
    context: GenericParseContext,
    field: ProtoField
) => {
    return getTSType(context, field.type);
};

export const getDefaultTSTypeFromProtoType = (
    context: ProtoParseContext, // here for future forceLong=string
    field: ProtoField,
    isOptional: boolean
) => {

    if (isOptional) {
        return t.identifier('undefined');
    }

    if (field.rule === 'repeated') {
        return t.arrayExpression([]);
    }

    if (field.keyType) {
        return t.objectExpression([])
    }

    if (field.parsedType?.type === 'Enum') {
        return t.numericLiteral(0);
    }

    switch (field.type) {
        case 'string':
            return t.stringLiteral('');
        case 'double':
        case 'float':
        case 'int32':
        case 'uint32':
        case 'sint32':
        case 'fixed32':
        case 'sfixed32':
            return t.numericLiteral(0);
        case 'uint64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('UZERO')
            );
        case 'int64':
        case 'sint64':
        case 'fixed64':
        case 'sfixed64':
            return t.memberExpression(
                t.identifier('Long'),
                t.identifier('ZERO')
            );
        case 'bytes':
            return t.newExpression(
                t.identifier('Uint8Array'),
                []
            );
        case 'bool':
            return t.booleanLiteral(false);

        // OTHER TYPES
        case 'google.protobuf.Timestamp':
            return t.identifier('undefined');
        case 'google.protobuf.Duration':
            return t.identifier('undefined');
        case 'google.protobuf.Any':
            return t.identifier('undefined');

        case 'cosmos.base.v1beta1.Coins':
            return t.arrayExpression([]);
        case 'cosmos.base.v1beta1.Coin':
            return t.identifier('undefined');

        default:
            // console.warn('getDefaultTSTypeFromProtoType() type not found: ' + type);
            return t.identifier('undefined');
    };
};
