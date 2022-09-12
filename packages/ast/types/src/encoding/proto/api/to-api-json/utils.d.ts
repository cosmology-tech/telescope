import * as t from '@babel/types';
import { ToApiParseField } from './index';
export declare const toApi: {
    defaultType(args: ToApiParseField): t.ObjectProperty;
    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: ToApiParseField): any;
    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional }: ToApiParseField): t.ObjectProperty;
    scalarArray({ context, field, currentProtoPath, scope, nested, isOptional }: ToApiParseField, arrayTypeAstFunc: Function): t.ObjectProperty;
};
