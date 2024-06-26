import * as t from "@babel/types";
import { FromAminoParseField } from "./index";
import { GenericParseContext } from "../../context";
export declare const fromAmino: {
    defaultType(args: FromAminoParseField): t.ObjectProperty;
    string(args: FromAminoParseField): t.ObjectProperty;
    rawBytes(args: FromAminoParseField): t.ObjectProperty;
    wasmByteCode(args: FromAminoParseField): t.ObjectProperty;
    long(args: FromAminoParseField): t.ObjectProperty;
    duration(args: FromAminoParseField): t.ObjectProperty;
    durationString(args: FromAminoParseField): t.ObjectProperty;
    height(args: FromAminoParseField): t.ObjectProperty;
    enum({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: FromAminoParseField): t.ObjectProperty;
    enumArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: FromAminoParseField): t.ObjectProperty;
    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: FromAminoParseField): any;
    arrayFrom(args: FromAminoParseField): t.ObjectProperty;
    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: FromAminoParseField): any;
    scalarArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: FromAminoParseField, arrayTypeAstFunc: Function): t.ObjectProperty;
    pubkey(args: FromAminoParseField): t.ObjectProperty;
    /**
     *  value == null ? nullExpr : nonNullExpr
     */
    nullCheckCondition(value: t.Expression, nullExpr: t.Expression, nonNullExpr: t.Expression, useNullHandling?: boolean): t.Expression;
};
export declare const arrayTypes: {
    long(varname: string, ctx: GenericParseContext): t.CallExpression;
};
