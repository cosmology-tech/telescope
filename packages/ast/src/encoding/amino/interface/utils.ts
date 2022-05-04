import * as t from '@babel/types';
import { memberExpressionOrIdentifierAminoCasing, shorthandProperty } from '../../../utils';
import { AminoOptions } from '../types';
import { arrayTypeNDim, BILLION } from '../utils';
import { getTypeFromContext, protoFieldsToArray } from '../utils';
import { getTSTypeFromProtoType, ProtoField } from '../../types';
import { RenderAminoField, renderAminoField } from '.';

export const aminoInterface = {
    defaultType(field: ProtoField, options: AminoOptions, ast: any) {
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(ast)
        );
    },
    long(field: ProtoField, options: AminoOptions) {
        // longs become strings...
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(t.tSStringKeyword())
        )
    },
    height(field: ProtoField, options: AminoOptions) {
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(
                t.tsTypeReference(t.identifier('AminoHeight'))
            )
        );
    },
    enum(field: ProtoField, options: AminoOptions) {
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(t.tSNumberKeyword())
        );
    },
    enumArray(field: ProtoField, options: AminoOptions) {
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(arrayTypeNDim(t.tSNumberKeyword(), 1))
        );
    },
    type({ context, field, options }: RenderAminoField) {
        const Type = getTypeFromContext(field, context);
        const properties = protoFieldsToArray(Type).map(field => {
            return renderAminoField({
                context,
                field,
                options
            })
        });

        // 
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(
                t.tsTypeLiteral(
                    properties
                )
            )
        );
    },
    typeArray({ context, field, options }: RenderAminoField) {
        const Type = getTypeFromContext(field, context);
        const properties = protoFieldsToArray(Type).map(field => {
            return renderAminoField({
                context,
                field,
                options
            })
        });

        // 
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(
                arrayTypeNDim(t.tsTypeLiteral(
                    properties
                ), 1)
            )
        );
    },

    array(field: ProtoField, options: AminoOptions) {
        // TODO write test case 

        // return t.tsPropertySignature(
        //     t.identifier(options.aminoCasingFn(field.name)),
        //     t.tsTypeAnnotation(
        //         arrayTypeNDim(t.tsTypeLiteral(
        //             properties
        //         ), 1)
        //     )
        // );
        return t.tsPropertySignature(
            t.identifier(options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(
                arrayTypeNDim(
                    getTSTypeFromProtoType(field.type),
                    1
                )
            )
        );
    }
}