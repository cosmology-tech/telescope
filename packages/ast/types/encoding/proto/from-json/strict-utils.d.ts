import * as t from '@babel/types';
import { FromJSONMethod } from './index';
export declare const fromJSON: {
    string(args: FromJSONMethod): t.IfStatement;
    number(args: FromJSONMethod): t.IfStatement;
    double(args: FromJSONMethod): t.IfStatement;
    float(args: FromJSONMethod): t.IfStatement;
    int32(args: FromJSONMethod): t.IfStatement;
    sint32(args: FromJSONMethod): t.IfStatement;
    uint32(args: FromJSONMethod): t.IfStatement;
    fixed32(args: FromJSONMethod): t.IfStatement;
    sfixed32(args: FromJSONMethod): t.IfStatement;
    bool(args: FromJSONMethod): t.IfStatement;
    long(args: FromJSONMethod): t.IfStatement;
    int64(args: FromJSONMethod): t.IfStatement;
    uint64(args: FromJSONMethod): t.IfStatement;
    sint64(args: FromJSONMethod): t.IfStatement;
    fixed64(args: FromJSONMethod): t.IfStatement;
    sfixed64(args: FromJSONMethod): t.IfStatement;
    type(args: FromJSONMethod): t.IfStatement;
    enum(args: FromJSONMethod): t.IfStatement;
    bytes(args: FromJSONMethod): t.IfStatement;
    duration(args: FromJSONMethod): t.IfStatement;
    durationString(args: FromJSONMethod): t.IfStatement;
    timestamp(args: FromJSONMethod): t.IfStatement;
    timestampTimestamp(args: FromJSONMethod): t.IfStatement;
    timestampDate(args: FromJSONMethod): t.IfStatement;
    keyHash(args: FromJSONMethod): t.IfStatement;
    array(args: FromJSONMethod, expr: t.Expression): t.IfStatement;
};
