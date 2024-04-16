import * as t from "@babel/types";
import { ToTextualSigMethod } from "./index";
export declare const MSG_VAR_NAME = "message";
export declare const ARRAY_VAR_NAME = "results";
export declare const TEXTUAL_METHOD_NAME = "toTextualSig";
export declare const toTextualSig: {
    scalar(args: ToTextualSigMethod, expr?: t.Expression | t.TSType, indentInc?: number): t.Statement;
    /**
     * create code for formatted scalar with formatter
     * @param args
     * @param formatter
     * @param isFormatterFromUtilHelper is formatter from util helper. default is true
     * @returns
     */
    formattedScalar(args: ToTextualSigMethod, formatter: string, indentInc?: number, expr?: t.Expression, isFormatterFromUtilHelper?: boolean): t.Statement;
    string(args: ToTextualSigMethod): t.Statement;
    bool(args: ToTextualSigMethod): t.Statement;
    number(args: ToTextualSigMethod): t.Statement;
    int32(args: ToTextualSigMethod): t.Statement;
    uint32(args: ToTextualSigMethod): t.Statement;
    sint32(args: ToTextualSigMethod): t.Statement;
    fixed32(args: ToTextualSigMethod): t.Statement;
    sfixed32(args: ToTextualSigMethod): t.Statement;
    double(args: ToTextualSigMethod): t.Statement;
    float(args: ToTextualSigMethod): t.Statement;
    long(args: ToTextualSigMethod): t.Statement;
    int64(args: ToTextualSigMethod): t.Statement;
    uint64(args: ToTextualSigMethod): t.Statement;
    sint64(args: ToTextualSigMethod): t.Statement;
    fixed64(args: ToTextualSigMethod): t.Statement;
    sfixed64(args: ToTextualSigMethod): t.Statement;
    type(args: ToTextualSigMethod): t.Statement;
    anyType(args: ToTextualSigMethod): t.Statement;
    protoType(args: ToTextualSigMethod): t.Statement;
    enum(args: ToTextualSigMethod): t.Statement;
    bytes(args: ToTextualSigMethod): t.Statement;
    duration(args: ToTextualSigMethod): t.Statement;
    timestamp(args: ToTextualSigMethod): t.Statement;
    keyHash(args: ToTextualSigMethod): t.Statement;
    array(args: ToTextualSigMethod, expr: t.Expression): t.ExpressionStatement;
};
export declare const arrayTypes: {
    identity(): t.Identifier;
    string(): t.Identifier;
    bool(): t.Identifier;
    bytes(): t.Identifier;
    double(): t.Identifier;
    float(): t.Identifier;
    int32(): t.Identifier;
    uint32(): t.Identifier;
    sint32(): t.Identifier;
    fixed32(): t.Identifier;
    sfixed32(): t.Identifier;
    enum(): t.Identifier;
    long(args: ToTextualSigMethod): t.Expression;
    int64(args: ToTextualSigMethod): t.Expression;
    uint64(args: ToTextualSigMethod): t.Expression;
    sint64(args: ToTextualSigMethod): t.Expression;
    fixed64(args: ToTextualSigMethod): t.Expression;
    sfixed64(args: ToTextualSigMethod): t.Expression;
    type(args: ToTextualSigMethod): t.CallExpression | t.TSAsExpression;
};
