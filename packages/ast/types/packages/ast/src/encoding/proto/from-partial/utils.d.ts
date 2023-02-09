import * as t from '@babel/types';
import { FromPartialMethod } from './index';
export declare const fromPartial: {
    string(args: FromPartialMethod): t.Statement;
    bool(args: FromPartialMethod): t.Statement;
    number(args: FromPartialMethod): t.Statement;
    int32(args: FromPartialMethod): t.Statement;
    uint32(args: FromPartialMethod): t.Statement;
    sint32(args: FromPartialMethod): t.Statement;
    fixed32(args: FromPartialMethod): t.Statement;
    sfixed32(args: FromPartialMethod): t.Statement;
    double(args: FromPartialMethod): t.Statement;
    float(args: FromPartialMethod): t.Statement;
    long(args: FromPartialMethod): t.Statement;
    int64(args: FromPartialMethod): t.Statement;
    uint64(args: FromPartialMethod): t.Statement;
    sint64(args: FromPartialMethod): t.Statement;
    fixed64(args: FromPartialMethod): t.Statement;
    sfixed64(args: FromPartialMethod): t.Statement;
    type(args: FromPartialMethod): t.Statement;
    enum(args: FromPartialMethod): t.Statement;
    bytes(args: FromPartialMethod): t.Statement;
    duration(args: FromPartialMethod): t.Statement;
    durationString(args: FromPartialMethod): t.Statement;
    timestamp(args: FromPartialMethod): t.Statement;
    timestampDate(args: FromPartialMethod): t.Statement;
    keyHash(args: FromPartialMethod): t.ExpressionStatement;
    array(args: FromPartialMethod, expr: t.Expression): t.ExpressionStatement;
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
    long(): t.CallExpression;
    int64(): t.CallExpression;
    uint64(): t.CallExpression;
    sint64(): t.CallExpression;
    fixed64(): t.CallExpression;
    sfixed64(): t.CallExpression;
    type(args: FromPartialMethod): t.CallExpression;
};