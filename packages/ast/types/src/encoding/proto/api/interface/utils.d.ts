import * as t from '@babel/types';
import { RenderApiField } from '.';
export declare const apiInterface: {
    defaultType(args: RenderApiField): t.TSPropertySignature;
    enum(args: RenderApiField): t.TSPropertySignature;
    enumArray(args: RenderApiField): t.TSPropertySignature;
    type({ context, field, currentProtoPath, isOptional }: RenderApiField): any;
    typeArray({ context, field, currentProtoPath, isOptional }: RenderApiField): any;
    array(args: RenderApiField): t.TSPropertySignature;
};
