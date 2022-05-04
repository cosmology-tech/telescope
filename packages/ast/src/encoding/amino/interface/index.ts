import * as t from '@babel/types';
import { getTSTypeFromProtoType, ProtoField, ProtoType } from '../../proto/types';
import { AminoOptions, AminoParseContext } from '../types';
import { getTypeUrl, protoFieldsToArray, typeUrlToAmino } from '../utils';
import { aminoInterface } from './utils';

export interface RenderAminoField {
    context: AminoParseContext;
    field: ProtoField;
    options: AminoOptions;
};

export const renderAminoField = ({
    context,
    field,
    options
}: RenderAminoField) => {

    if (field.rule === 'repeated') {
        switch (field.parsedType.type) {
            case 'Type':
                return aminoInterface.typeArray({
                    context,
                    field,
                    options
                });
            case 'Enum':
                return aminoInterface.enumArray(
                    field,
                    options
                );
            default:
                return aminoInterface.array(field, options);
        }
    }

    switch (field.parsedType.type) {
        case 'Type':
            return aminoInterface.type({
                context,
                field,
                options
            });

        case 'Enum':
            return aminoInterface.enum(
                field,
                options
            );
    }

    // scalar types...
    switch (field.type) {
        case 'string':
            return aminoInterface.defaultType(field, options, getTSTypeFromProtoType(field.type));
        case 'int64':
        case 'uint64':
            return aminoInterface.long(field, options);
        case 'double':
        case 'int64':
        case 'bool':
        case 'bytes':
        case 'Timestamp':
        case 'google.protobuf.Timestamp':
            return aminoInterface.defaultType(field, options, getTSTypeFromProtoType(field.type));

        // TODO check can we just
        // make pieces optional and avoid hard-coding this type?
        case 'ibc.core.client.v1.Height':
        case 'Height':
            return aminoInterface.height(field, options);

        case 'Duration':
        case 'google.protobuf.Duration':
            return aminoInterface.defaultType(field, options, t.tsStringKeyword());

        default:
            return aminoInterface.defaultType(field, options, getTSTypeFromProtoType(field.type));
    }
};

export interface MakeAminoTypeInterface {
    context: AminoParseContext;
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
                    protoFieldsToArray(proto).map((field) => {
                        return renderAminoField({
                            context,
                            field,
                            options
                        });
                    })
                )))
            ])
        )
    )

}