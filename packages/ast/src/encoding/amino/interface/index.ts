import * as t from '@babel/types';
import { ParseContext } from '../../context';
import { ProtoField, ProtoType } from '../../proto/types';
import { AminoOptions } from '../types';
import { getTypeUrl, protoFieldsToArray, typeUrlToAmino } from '../utils';
import { aminoInterface } from './utils';

export interface RenderAminoField {
    context: ParseContext;
    field: ProtoField;
    currentProtoPath: string;
    options: AminoOptions;
};

export const renderAminoField = ({
    context,
    field,
    currentProtoPath,
    options
}: RenderAminoField) => {

    const args = {
        context,
        field,
        currentProtoPath,
        options
    }

    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return aminoInterface.typeArray(args);
            case 'Enum':
                return aminoInterface.enumArray(args);
            default:
                return aminoInterface.array(args);
        }
    }

    switch (field.parsedType.type) {
        case 'Type':
            return aminoInterface.type(args);

        case 'Enum':
            return aminoInterface.enum(args);
    }

    // scalar types...
    switch (field.type) {
        case 'string':
            return aminoInterface.defaultType(args);
        case 'int64':
        case 'uint64':
            return aminoInterface.long(args);
        case 'double':
        case 'int64':
        case 'bool':
        case 'bytes':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return aminoInterface.defaultType(args);

        // TODO check can we just
        // make pieces optional and avoid hard-coding this type?
        case 'ibc.core.client.v1.Height':
        case 'Height':
            return aminoInterface.height(args);

        case 'Duration':
        case 'google.protobuf.Duration':
            return aminoInterface.duration(args);

        default:
            return aminoInterface.defaultType(args);
    }
};

export interface MakeAminoTypeInterface {
    context: ParseContext;
    proto: ProtoType;
    options: AminoOptions;
};

export const makeAminoTypeInterface = ({
    context,
    proto,
    options
}: MakeAminoTypeInterface) => {

    const TypeName = proto.name;
    const typeUrl = getTypeUrl(context.ref.proto, proto);
    const aminoType = typeUrlToAmino(typeUrl, options.exceptions);

    const fields = protoFieldsToArray(proto).map((field) => {
        const ctx = context.spawn();
        const aminoField = renderAminoField({
            context: ctx,
            field,
            currentProtoPath: ctx.ref.filename,
            options
        });
        return {
            ctx,
            field: aminoField
        }
    });

    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier('Amino' + TypeName),
            null,
            [t.tsExpressionWithTypeArguments(t.identifier('AminoMsg'))],
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