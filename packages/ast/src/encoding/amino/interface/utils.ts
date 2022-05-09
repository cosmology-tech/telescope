import * as t from '@babel/types';
import { arrayTypeNDim, getTypeFromCurrentProtoPath } from '../utils';
import { protoFieldsToArray } from '../utils';
import { getTSTypeFromProtoType } from '../../proto/types';
import { getOneOfs, getFieldOptionality } from '../../proto';
import { RenderAminoField, renderAminoField } from '.';


export const aminoInterface = {
    defaultType(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(getTSTypeFromProtoType(args.field.type))
        );
    },
    string(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tsStringKeyword())
        );
    },
    long(args: RenderAminoField) {
        // longs become strings...
        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tSStringKeyword())
        )
    },
    height(args: RenderAminoField) {
        args.context.addUtil('AminoHeight');

        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(
                t.tsTypeReference(t.identifier('AminoHeight'))
            )
        );
    },
    // durations are strings
    duration(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tsStringKeyword())
        );
    },
    enum(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(t.tSNumberKeyword())
        );
    },
    enumArray(args: RenderAminoField) {
        return t.tsPropertySignature(
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(arrayTypeNDim(t.tSNumberKeyword(), 1))
        );
    },
    type({ context, field, currentProtoPath, isOptional }: RenderAminoField) {
        const parentField = field;
        const Type = getTypeFromCurrentProtoPath(field, currentProtoPath, context);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(field, isOneOf);
            // TODO how to handle isOptional from parent to child...
            if (parentField.import) currentProtoPath = parentField.import;
            return renderAminoField({
                context,
                field,
                currentProtoPath,
                isOptional // TODO how to handle nested optionality
            })
        });

        // 
        return t.tsPropertySignature(
            t.identifier(context.options.aminoCasingFn(field.name)),
            t.tsTypeAnnotation(
                t.tsTypeLiteral(
                    properties
                )
            )
        );
    },
    typeArray({ context, field, currentProtoPath, isOptional }: RenderAminoField) {
        const parentField = field;
        const Type = getTypeFromCurrentProtoPath(field, currentProtoPath, context);

        // TODO how to handle isOptional from parent to child... 
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return renderAminoField({
                context,
                field,
                currentProtoPath,
                isOptional // TODO how to handle nested optionality
            })
        });

        // 
        return t.tsPropertySignature(
            t.identifier(context.options.aminoCasingFn(field.name)),
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
            t.identifier(args.context.options.aminoCasingFn(args.field.name)),
            t.tsTypeAnnotation(
                arrayTypeNDim(
                    getTSTypeFromProtoType(args.field.type),
                    1
                )
            )
        );
    }
}