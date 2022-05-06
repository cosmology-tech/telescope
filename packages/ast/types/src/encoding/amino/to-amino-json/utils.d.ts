import * as t from '@babel/types';
import { ToAminoParseField } from './index';
export declare const toAmino: {
    defaultType(args: ToAminoParseField): t.ObjectProperty;
    long(args: ToAminoParseField): t.ObjectProperty;
    string(args: ToAminoParseField): t.ObjectProperty;
    duration(args: ToAminoParseField): t.ObjectProperty;
    height(args: ToAminoParseField): t.ObjectProperty;
    coin(args: ToAminoParseField): t.ObjectProperty;
    type({ context, field, currentProtoPath, scope, nested, options }: ToAminoParseField): any;
    typeArray({ context, field, currentProtoPath, scope, nested, options }: ToAminoParseField): t.ObjectProperty;
    pubkey(args: ToAminoParseField): t.ObjectProperty;
};
