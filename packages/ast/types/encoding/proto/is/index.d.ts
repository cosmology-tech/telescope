import * as t from "@babel/types";
import { ProtoParseContext } from "../../context";
import { ProtoField, ProtoType } from "@subql/x-cosmology-types";
import { type } from "case";
export declare const createInstanceOfTypeComparison: (args: {
    context: ProtoParseContext;
    fieldName: t.Expression;
    field: ProtoField;
    type: string;
}) => t.BinaryExpression;
export declare const createInstanceOfTypeComparisonGroup: (args: {
    context: ProtoParseContext;
    fieldName: t.Expression;
    field: ProtoField;
    types: string[];
}) => t.Expression;
export declare const createScalarTypeComparison: (args: {
    context: ProtoParseContext;
    fieldName: t.Expression;
    field: ProtoField;
    type: string;
}) => t.BinaryExpression;
export declare const createFieldExistingTest: (args: {
    context: ProtoParseContext;
    fieldName: t.Expression;
    field: ProtoField;
}) => t.CallExpression;
export declare const createProtoTypeComparison: (args: {
    context: ProtoParseContext;
    methodName: string;
    fieldName: t.Expression;
    field: ProtoField;
}) => t.Expression;
export declare const createArrayTypeComparison: (args: {
    context: ProtoParseContext;
    fieldName: string;
    field: ProtoField;
    typeComparison?: t.Expression;
}) => t.CallExpression | t.LogicalExpression;
export declare const createFieldTypeComparison: (args: {
    context: ProtoParseContext;
    methodName: string;
    fieldName: string;
    field: ProtoField;
}) => t.Expression;
export declare const isMethod: (args: {
    context: ProtoParseContext;
    name: string;
    proto: ProtoType;
    methodName?: string;
    getFieldName?: (fieldName: string, field: ProtoField, interfaceName?: string, context?: ProtoParseContext) => string;
}) => t.ObjectMethod;
