import * as t from '@babel/types';
import { ProtoField } from '@osmonauts/types';
import { GenericParseContext, ProtoParseContext } from './context';
export declare const getTSType: (context: GenericParseContext, type: string) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getTSTypeForAmino: (context: GenericParseContext, field: ProtoField) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getTSTypeForProto: (context: GenericParseContext, field: ProtoField) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getDefaultTSTypeFromProtoType: (context: ProtoParseContext, field: ProtoField, isOptional: boolean) => t.ArrayExpression | t.BooleanLiteral | t.Identifier | t.MemberExpression | t.NewExpression | t.NumericLiteral | t.ObjectExpression | t.StringLiteral;
