import * as t from '@babel/types';
import { ParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
import { AminoOptions } from '../types';
export interface FromAminoParseField {
    context: ParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
    options: AminoOptions;
}
export declare const fromAminoParseField: ({ context, field, currentProtoPath, scope: previousScope, nested, options }: FromAminoParseField) => any;
interface fromAminoJSON {
    context: ParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const fromAminoJsonMethod: ({ context, proto, options }: fromAminoJSON) => t.ArrowFunctionExpression;
export {};
