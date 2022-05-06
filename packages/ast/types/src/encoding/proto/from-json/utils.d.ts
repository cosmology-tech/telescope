import * as t from '@babel/types';
import { FromJSONMethod } from './index';
export declare const fromJSON: {
    string(args: FromJSONMethod): t.ObjectProperty;
    number(args: FromJSONMethod): t.ObjectProperty;
    double(args: FromJSONMethod): t.ObjectProperty;
    bool(args: FromJSONMethod): t.ObjectProperty;
    int64(args: FromJSONMethod): t.ObjectProperty;
    uint64(args: FromJSONMethod): t.ObjectProperty;
    long(args: FromJSONMethod): t.ObjectProperty;
    type(args: FromJSONMethod): t.ObjectProperty;
    enum(args: FromJSONMethod): t.ObjectProperty;
    bytes(args: FromJSONMethod): t.ObjectProperty;
    duration(args: FromJSONMethod): t.ObjectProperty;
    timestamp(args: FromJSONMethod): t.ObjectProperty;
    keyHash(args: FromJSONMethod): t.ObjectProperty;
    array(args: FromJSONMethod, expr: t.Expression): t.ObjectProperty;
};
export declare const arrayTypes: {
    string(): t.CallExpression;
    long(): t.CallExpression;
    number(): t.CallExpression;
    type(name: any): t.CallExpression;
};
