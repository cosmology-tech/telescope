import * as t from '@babel/types';
import { AminoOptions } from '../types';
import { arrayTypeNDim, getTypeFromCurrentProtoPath } from '../utils';
import { protoFieldsToArray } from '../utils';
import { getTSTypeFromProtoType, ProtoField } from '../../proto/types';
import { RenderAminoField, renderAminoField } from '.';

export const aminoInterface = {
    defaultType(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(getTSTypeFromProtoType(args.field.type))
        );
    },
    string(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tsStringKeyword())
        );
    },
    long(args: RenderAminoField) {
        // longs become strings...
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tSStringKeyword())
        )
    },
    height(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(
                t.tsTypeReference(t.identifier('AminoHeight'))
            )
        );
    },
    // durations are strings
    duration(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tsStringKeyword())
        );
    },
    enum(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tSNumberKeyword())
        );
    },
    enumArray(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(arrayTypeNDim(t.tSNumberKeyword(), 1))
        );
    },
    type({ context, field, currentProtoPath, options }: RenderAminoField) {
        const parentField = field;
        const Type = getTypeFromCurrentProtoPath(field, currentProtoPath, context);
        const properties = protoFieldsToArray(Type).map(field => {
            if (parentField.import) currentProtoPath = parentField.import;
            return renderAminoField({
                context,
                field,
                currentProtoPath,
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
    typeArray({ context, field, currentProtoPath, options }: RenderAminoField) {
        const parentField = field;
        const Type = getTypeFromCurrentProtoPath(field, currentProtoPath, context);
        const properties = protoFieldsToArray(Type).map(field => {
            if (parentField.import) currentProtoPath = parentField.import;
            return renderAminoField({
                context,
                field,
                currentProtoPath,
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

    array(args: RenderAminoField) {
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
            t.identifier(args.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(
                arrayTypeNDim(
                    getTSTypeFromProtoType(args.field.type),
                    1
                )
            )
        );
    }
}