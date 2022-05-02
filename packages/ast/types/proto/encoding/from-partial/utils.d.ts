import * as t from '@babel/types';
export declare const fromPartial: {
    string(prop: string): t.ExpressionStatement;
    bool(prop: string): t.ExpressionStatement;
    double(prop: string): t.ExpressionStatement;
    int64(prop: string): t.ExpressionStatement;
    long(prop: string): t.ExpressionStatement;
    type(prop: string, name: string): t.ExpressionStatement;
    enum(prop: string): t.ExpressionStatement;
    bytes(prop: string): t.ExpressionStatement;
    duration(prop: string): t.ExpressionStatement;
    timestamp(prop: string): t.ExpressionStatement;
    keyHash(prop: string, keyType: string, valueType: string): t.ExpressionStatement;
    array(prop: string, expr: t.Expression): t.ExpressionStatement;
};
export declare const arrayTypes: {
    long(): t.CallExpression;
    number(): t.CallExpression;
    type(name: string): t.CallExpression;
};
