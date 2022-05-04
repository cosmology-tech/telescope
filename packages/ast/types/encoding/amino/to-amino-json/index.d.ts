import * as t from '@babel/types';
import { ProtoType, ProtoField } from '../../types';
import { AminoOptions } from '../amino-converter';
interface Context {
    enums: any[];
    types: any[];
}
export interface AminoParseField {
    context: Context;
    field: ProtoField;
    scope: string[];
    nested: number;
    options: AminoOptions;
}
export declare const toAminoParseField: ({ context, field, scope, nested, options }: AminoParseField) => t.ObjectProperty;
export declare const toAminoJsonMethod: (context: Context, proto: ProtoType, options: AminoOptions) => t.ArrowFunctionExpression;
export {};
