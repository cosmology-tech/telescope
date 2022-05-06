import * as t from '@babel/types';
import { EncodeMethod } from './index';
export declare const types: {
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
export declare const encode: {
    string(args: EncodeMethod): t.IfStatement;
    double(args: EncodeMethod): t.IfStatement;
    int64(args: EncodeMethod): t.IfStatement;
    bool(args: EncodeMethod): t.IfStatement;
    long(args: EncodeMethod): t.IfStatement;
    type(args: EncodeMethod): t.IfStatement;
    enum(args: EncodeMethod): t.IfStatement;
    bytes(args: EncodeMethod): t.IfStatement;
    timestamp(args: EncodeMethod): t.IfStatement;
    duration(args: EncodeMethod): t.IfStatement;
    scalarArray(args: EncodeMethod, expr: t.Statement): (t.ExpressionStatement | t.ForOfStatement)[];
    typeArray(args: EncodeMethod): t.ForOfStatement[];
    keyHash(args: EncodeMethod): t.ExpressionStatement;
};
export declare const arrayTypes: {
    long(): t.ExpressionStatement;
    string(): t.ExpressionStatement;
    int32(): t.ExpressionStatement;
};
