import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
export interface ToAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
}
export declare const toAminoParseField: ({ context, field, currentProtoPath, scope: previousScope, nested }: ToAminoParseField) => any;
interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
}
export declare const toAminoJsonMethod: ({ context, proto }: toAminoJSON) => t.ArrowFunctionExpression;
export {};
