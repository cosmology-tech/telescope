import * as t from '@babel/types';
import { getOneOfs, getFieldOptionality } from '../../../proto';
import { RenderApiField, renderApiField } from '.';
import { getTSTypeForProto } from '../../../types';
import { arrayTypeNDim, protoFieldsToArray } from '../../../amino';

export const apiInterface = {
    defaultType(args: RenderApiField) {
        return t.tsPropertySignature(
            t.identifier(args.context.aminoCaseField(args.field)),
            t.tsTypeAnnotation(getTSTypeForProto(args.context, args.field))
        );
    },
    enum(args: RenderApiField) {
        return t.tsPropertySignature(
            t.identifier(args.context.aminoCaseField(args.field)),
            t.tsTypeAnnotation(t.tSNumberKeyword())
        );
    },
    enumArray(args: RenderApiField) {
        return t.tsPropertySignature(
            t.identifier(args.context.aminoCaseField(args.field)),
            t.tsTypeAnnotation(arrayTypeNDim(t.tSNumberKeyword(), 1))
        );
    },
    type({ context, field, currentProtoPath, isOptional }: RenderApiField) {
        const parentField = field;

        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);
            // TODO how to handle isOptional from parent to child...
            if (parentField.import) currentProtoPath = parentField.import;
            return renderApiField({
                context,
                field,
                currentProtoPath,
                isOptional // TODO how to handle nested optionality
            })
        });

        // 
        return t.tsPropertySignature(
            t.identifier(context.aminoCaseField(field)),
            t.tsTypeAnnotation(
                t.tsTypeLiteral(
                    properties
                )
            )
        );
    },
    typeArray({ context, field, currentProtoPath, isOptional }: RenderApiField) {
        const parentField = field;
        const Type = context.getTypeFromCurrentPath(field, currentProtoPath);

        // TODO how to handle isOptional from parent to child... 
        const oneOfs = getOneOfs(Type);
        const properties = protoFieldsToArray(Type).map(field => {
            const isOneOf = oneOfs.includes(field.name);
            const isOptional = getFieldOptionality(context, field, isOneOf);

            if (parentField.import) currentProtoPath = parentField.import;
            return renderApiField({
                context,
                field,
                currentProtoPath,
                isOptional // TODO how to handle nested optionality
            });
        });

        // 
        return t.tsPropertySignature(
            t.identifier(context.aminoCaseField(field)),
            t.tsTypeAnnotation(
                arrayTypeNDim(t.tsTypeLiteral(
                    properties
                ), 1)
            )
        );
    },

    array(args: RenderApiField) {
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
            t.identifier(args.context.aminoCaseField(args.field)),
            t.tsTypeAnnotation(
                arrayTypeNDim(
                    getTSTypeForProto(args.context, args.field),
                    1
                )
            )
        );
    }
}