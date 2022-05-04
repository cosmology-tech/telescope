import * as t from '@babel/types';
import { AminoOptions } from '../types';
import { ToAminoParseField } from './index';
export declare const toAmino: {
    defaultType(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    long(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    string(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    duration(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    height(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    coin(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    type({ context, field, scope, nested, options }: ToAminoParseField): any;
    typeArray({ context, field, scope, nested, options }: ToAminoParseField): t.ObjectProperty;
};
