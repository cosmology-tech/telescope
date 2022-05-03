import * as t from '@babel/types';
export declare const fromJSON: {
    string(prop: string): t.ObjectProperty;
    number(prop: string): t.ObjectProperty;
    double(prop: string): t.ObjectProperty;
    bool(prop: string): t.ObjectProperty;
    int64(prop: string): t.ObjectProperty;
    uint64(prop: string): t.ObjectProperty;
    long(prop: string): t.ObjectProperty;
    type(prop: string, name: string): t.ObjectProperty;
    enum(prop: string, fromJSONFuncName: string): t.ObjectProperty;
    bytes(prop: string): t.ObjectProperty;
    duration(prop: string): t.ObjectProperty;
    timestamp(prop: string): t.ObjectProperty;
    keyHash(prop: string, keyType: string, valueType: string): t.ObjectProperty;
    array(prop: string, expr: t.Expression): t.ObjectProperty;
};
export declare const arrayTypes: {
    string(): t.CallExpression;
    long(): t.CallExpression;
    number(): t.CallExpression;
    type(name: any): t.CallExpression;
};
