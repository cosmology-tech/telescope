import * as t from '@babel/types';
export declare const toJSON: {
    string(prop: string): t.ExpressionStatement;
    double(prop: string): t.ExpressionStatement;
    int64(prop: string): t.ExpressionStatement;
    uint64(prop: string): t.ExpressionStatement;
    bool(prop: string): t.ExpressionStatement;
    long(prop: string): t.ExpressionStatement;
    type(prop: string, name: string): t.ExpressionStatement;
    enum(prop: string, enumFuncName: string): t.ExpressionStatement;
    bytes(prop: string): t.ExpressionStatement;
    duration(prop: string): t.ExpressionStatement;
    timestamp(prop: string): t.ExpressionStatement;
    keyHash(prop: string, keyType: string, valueType: string): (t.ExpressionStatement | t.IfStatement)[];
    array(prop: string, expr: t.Expression): t.IfStatement;
};
export declare const arrayTypes: {
    string(): t.Identifier;
    uint64(): t.CallExpression;
    int64(): t.CallExpression;
    number(): t.CallExpression;
    type(name: string): t.ConditionalExpression;
};
