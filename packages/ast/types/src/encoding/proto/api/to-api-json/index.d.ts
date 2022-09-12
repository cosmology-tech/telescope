import * as t from '@babel/types';
import { ProtoParseContext } from '../../../context';
import { ProtoType, ProtoField } from '@osmonauts/types';
export interface ToApiParseField {
    context: ProtoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    fieldPath: ProtoField[];
    nested: number;
    isOptional: boolean;
}
export declare const toApiParseField: ({ context, field, currentProtoPath, scope: previousScope, fieldPath: previousFieldPath, nested, isOptional }: ToApiParseField) => any;
export declare const toApiJsonInfo: (context: ProtoParseContext, name: string, proto: ProtoType) => {
    toApiParams: t.ObjectPattern;
    blockStatement: t.BlockStatement;
    typeAnnotation: t.TSTypeAnnotation;
};
export declare const toApiJsonMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
export declare const toApiJsonFunction: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ArrowFunctionExpression;
