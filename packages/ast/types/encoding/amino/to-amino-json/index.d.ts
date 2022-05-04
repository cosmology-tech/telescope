import * as t from '@babel/types';
import { ProtoType, ProtoField } from '../../proto/types';
import { AminoOptions, AminoParseContext } from '../types';
export interface ToAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    scope: string[];
    nested: number;
    options: AminoOptions;
}
export declare const toAminoParseField: ({ context, field, scope, nested, options }: ToAminoParseField) => any;
interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const toAminoJsonMethod: ({ context, proto, options }: toAminoJSON) => t.ArrowFunctionExpression;
export {};
