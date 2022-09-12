import * as t from '@babel/types';
import { ProtoField, ProtoType } from '@osmonauts/types';
import { ProtoParseContext } from '../../../context';
import { getFieldOptionality, getOneOfs } from '../../index';
import { getTypeUrl, protoFieldsToArray, typeUrlToAmino } from '../../../amino';
import { apiInterface } from './utils';

export interface RenderApiField {
    context: ProtoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    isOptional: boolean;
};

export const renderApiField = ({
    context,
    field,
    currentProtoPath,
    isOptional
}: RenderApiField) => {

    const args = {
        context,
        field,
        currentProtoPath,
        isOptional
    }

    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return apiInterface.typeArray(args);
            case 'Enum':
                return apiInterface.enumArray(args);
            default:
                return apiInterface.array(args);
        }
    }


    // special "native" types...
    // above Type,Enum since they're Types
    switch (field.type) {
        case 'ibc.core.client.v1.Height':
        case 'Height':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
        case 'Duration':
        case 'google.protobuf.Duration':
            return apiInterface.defaultType(args);
    }

    switch (field.parsedType.type) {
        case 'Type':
            return apiInterface.type(args);

        case 'Enum':
            return apiInterface.enum(args);
    }

    // scalar types...
    switch (field.type) {
        case 'string':
            return apiInterface.defaultType(args);
        case 'int64':
        case 'sint64':
        case 'uint64':
        case 'fixed64':
        case 'sfixed64':
        case 'double':
        case 'bool':
        case 'bytes':
        case 'int32':
        case 'sint32':
        case 'uint32':
        case 'fixed32':
        case 'sfixed32':
            return apiInterface.defaultType(args);

        // // TODO check can we just
        // // make pieces optional and avoid hard-coding this type?
        // case 'ibc.core.client.v1.Height':
        // case 'Height':
        // return apiInterface.height(args);

        // case 'Timestamp':
        // case 'google.protobuf.Timestamp':
        //     return apiInterface.timestamp(args);

        // case 'Duration':
        // case 'google.protobuf.Duration':
        //     return apiInterface.duration(args);

        default:
            return apiInterface.defaultType(args);
    }
};

export interface MakeAPITypeInterface {
    context: ProtoParseContext;
    proto: ProtoType;
};

export const makeApiInterface = ({
    context,
    proto
}: MakeAPITypeInterface) => {
    context.addUtil('AminoMsg');

    const TypeName = proto.name;
    const typeUrl = getTypeUrl(context.ref.proto, proto);
    const aminoType = typeUrlToAmino(context, typeUrl);

    const oneOfs = getOneOfs(proto);
    const fields = protoFieldsToArray(proto).map((field) => {
        const isOneOf = oneOfs.includes(field.name);
        const isOptional = getFieldOptionality(context, field, isOneOf);

        const aminoField = renderApiField({
            context,
            field,
            currentProtoPath: context.ref.filename,
            isOptional
        });
        return {
            ctx: context,
            field: aminoField
        }
    });

    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier('Api' + TypeName),
            null,
            [],
            t.tSInterfaceBody([
                t.tSPropertySignature(t.identifier('type'), t.tsTypeAnnotation(
                    t.tSLiteralType(t.stringLiteral(aminoType))
                )),
                t.tSPropertySignature(t.identifier('value'), t.tsTypeAnnotation(t.tsTypeLiteral(
                    fields.map(({ field }) => field)
                )))
            ])
        )
    )

}