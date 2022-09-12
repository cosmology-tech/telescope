import * as t from '@babel/types';
import { FromApiParseField } from './index';
export declare const fromApi: {
    defaultType(args: FromApiParseField): t.ObjectProperty;
    arrayFrom(args: FromApiParseField): t.ObjectProperty;
    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromApiParseField): any;
    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromApiParseField): t.ObjectProperty;
    scalarArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: FromApiParseField, arrayTypeAstFunc: Function): t.ObjectProperty;
};
