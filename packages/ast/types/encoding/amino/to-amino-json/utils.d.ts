import { AminoOptions } from "../amino-converter";
import * as t from '@babel/types';
import { AminoParseField } from './index';
export declare const toAmino: {
    long(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    string(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    duration(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    coin(prop: string, scope: string[], options: AminoOptions): t.ObjectProperty;
    array({ context, field, scope, nested, options }: AminoParseField): t.ObjectProperty;
};
export declare const arrayTypes: {};
