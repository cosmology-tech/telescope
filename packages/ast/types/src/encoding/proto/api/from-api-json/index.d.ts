import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { ProtoParseContext } from '../../../context';
export interface FromApiParseField {
    context: ProtoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    fieldPath: ProtoField[];
    nested: number;
    isOptional: boolean;
}
export declare const fromApiParseField: ({ context, field, currentProtoPath, scope: previousScope, fieldPath: previousFieldPath, nested, isOptional }: FromApiParseField) => any;
export declare const fromApiJsonInfo: (context: ProtoParseContext, name: string, proto: ProtoType) => {
    fromApiParams: t.ObjectPattern;
    blockStatement: t.BlockStatement;
    typeAnnotation: t.TSTypeAnnotation;
};
export declare const fromApiJsonMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
export declare const fromApiJsonFunction: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ArrowFunctionExpression;
