import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
import { AminoOptions } from '../types';
export interface FromAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
    options: AminoOptions;
}
export declare const fromAminoParseField: ({ context, field, currentProtoPath, scope: previousScope, nested, options }: FromAminoParseField) => any;
interface fromAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
    options: AminoOptions;
}
export declare const fromAminoJsonMethod: ({ context, proto, options }: fromAminoJSON) => t.ArrowFunctionExpression;
export {};
