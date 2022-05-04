import * as t from '@babel/types';
import { AminoOptions } from '../types';
import { FromAminoParseField } from './index';
export declare const fromAmino: {
    defaultType(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    string(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    long(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    duration(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    height(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    enum({ context, field, scope, nested, options }: FromAminoParseField): t.ObjectProperty;
    enumArray({ context, field, scope, nested, options }: FromAminoParseField): t.ObjectProperty;
    type({ context, field, scope, nested, options }: FromAminoParseField): any;
    typeArray({ context, field, scope, nested, options }: FromAminoParseField): t.ObjectProperty;
    arrayFrom(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    pubkey({ context, field, scope, nested, options }: FromAminoParseField): t.ObjectProperty;
};
