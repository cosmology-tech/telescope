import * as t from '@babel/types';
import { ProtoType, ProtoField } from '../../types';
import { AminoOptions } from '../amino-converter';
import { AminoParseContext } from '../utils';
export interface AminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    scope: string[];
    nested: number;
    options: AminoOptions;
}
export declare const toAminoParseField: ({ context, field, scope, nested, options }: AminoParseField) => t.ObjectProperty;
interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const toAminoJsonMethod: ({ context, proto, options }: toAminoJSON) => t.ArrowFunctionExpression;
export {};
