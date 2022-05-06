import * as t from '@babel/types';
import { FromPartialMethod } from './index';
export declare const fromPartial: {
    string(args: FromPartialMethod): t.ExpressionStatement;
    bool(args: FromPartialMethod): t.ExpressionStatement;
    double(args: FromPartialMethod): t.ExpressionStatement;
    int64(args: FromPartialMethod): t.ExpressionStatement;
    long(args: FromPartialMethod): t.ExpressionStatement;
    type(args: FromPartialMethod): t.ExpressionStatement;
    enum(args: FromPartialMethod): t.ExpressionStatement;
    bytes(args: FromPartialMethod): t.ExpressionStatement;
    duration(args: FromPartialMethod): t.ExpressionStatement;
    timestamp(args: FromPartialMethod): t.ExpressionStatement;
    keyHash(args: FromPartialMethod): t.ExpressionStatement;
    array(args: FromPartialMethod, expr: t.Expression): t.ExpressionStatement;
};
export declare const arrayTypes: {
    string(): t.Identifier;
    long(): t.CallExpression;
    number(): t.CallExpression;
    type(name: string): t.CallExpression;
};
