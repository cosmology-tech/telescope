import * as t from "@babel/types";
import { ToAminoParseField } from "./index";
export declare const toAmino: {
    defaultType(args: ToAminoParseField, omitEmpty?: boolean): t.ObjectProperty;
    long(args: ToAminoParseField, omitEmpty?: boolean): t.ObjectProperty;
    string(args: ToAminoParseField, omitEmpty?: boolean): t.ObjectProperty;
    stringArray(args: ToAminoParseField): t.ObjectProperty;
    rawBytes(args: ToAminoParseField): t.ObjectProperty;
    wasmByteCode(args: ToAminoParseField): t.ObjectProperty;
    duration(args: ToAminoParseField): t.ObjectProperty;
    durationString(args: ToAminoParseField): t.ObjectProperty;
    durationType(args: ToAminoParseField): t.ObjectProperty;
    height(args: ToAminoParseField): t.ObjectProperty;
    coinAmount(args: ToAminoParseField): t.CallExpression | t.MemberExpression;
    coin(args: ToAminoParseField): t.ObjectProperty;
    type({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: ToAminoParseField): any;
    typeArray({ context, field, currentProtoPath, scope, fieldPath, nested, isOptional, }: ToAminoParseField): t.ObjectProperty;
    scalarArray({ context, field, currentProtoPath, scope, nested, isOptional, }: ToAminoParseField, arrayTypeAstFunc: Function): t.ObjectProperty;
    pubkey(args: ToAminoParseField): t.ObjectProperty;
    omitDefaultMemberExpressionOrIdentifier(args: ToAminoParseField, names: any): t.CallExpression;
};
export declare const arrayTypes: {
    long(varname: string): t.CallExpression;
    stringDec(varname: string, args: ToAminoParseField): t.CallExpression;
};
