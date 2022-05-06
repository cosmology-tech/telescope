import * as t from '@babel/types';
import { ToJSONMethod } from '.';
export declare const toJSON: {
    string(args: ToJSONMethod): t.ExpressionStatement;
    double(args: ToJSONMethod): t.ExpressionStatement;
    int64(args: ToJSONMethod): t.ExpressionStatement;
    uint64(args: ToJSONMethod): t.ExpressionStatement;
    bool(args: ToJSONMethod): t.ExpressionStatement;
    long(args: ToJSONMethod): t.ExpressionStatement;
    type(args: ToJSONMethod): t.ExpressionStatement;
    enum(args: ToJSONMethod): t.ExpressionStatement;
    bytes(args: ToJSONMethod): t.ExpressionStatement;
    duration(args: ToJSONMethod): t.ExpressionStatement;
    timestamp(args: ToJSONMethod): t.ExpressionStatement;
    keyHash(args: ToJSONMethod): (t.ExpressionStatement | t.IfStatement)[];
    array(args: ToJSONMethod, expr: t.Expression): t.IfStatement;
};
export declare const arrayTypes: {
    string(): t.Identifier;
    uint64(): t.CallExpression;
    int64(): t.CallExpression;
    number(): t.CallExpression;
    type(name: string): t.ConditionalExpression;
};
