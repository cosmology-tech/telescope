import * as t from '@babel/types';
export declare const encode: {
    string(num: number, prop: string): t.IfStatement;
    double(num: number, prop: string): t.IfStatement;
    int64(num: number, prop: string): t.IfStatement;
    bool(num: number, prop: string): t.IfStatement;
    long(num: number, prop: string): t.IfStatement;
    type(num: number, prop: string, name: string): t.IfStatement;
    enum(num: number, prop: string): t.IfStatement;
    bytes(num: number, prop: string): t.IfStatement;
    timestamp(num: number, prop: string): t.IfStatement;
    duration(num: number, prop: string): t.IfStatement;
    scalarArray(num: number, prop: string, expr: t.Statement): (t.ExpressionStatement | t.ForOfStatement)[];
    typeArray(num: number, prop: string, name: string): t.ForOfStatement[];
    keyHash(num: number, prop: string, name: string): t.ExpressionStatement;
};
export declare const arrayTypes: {
    long(): t.ExpressionStatement;
    int32(): t.ExpressionStatement;
};
