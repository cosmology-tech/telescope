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
interface ToApiJSON {
    context: ProtoParseContext;
    proto: ProtoType;
}
export declare const toApiJsonInfo: ({ context, proto }: ToApiJSON) => {
    toApiParams: t.ObjectPattern;
    blockStatement: t.BlockStatement;
    typeAnnotation: t.TSTypeAnnotation;
};
export declare const toApiJsonMethod: ({ context, proto }: ToApiJSON) => t.ObjectMethod;
export declare const toApiJsonFunction: ({ context, proto }: ToApiJSON) => t.ArrowFunctionExpression;
export {};
