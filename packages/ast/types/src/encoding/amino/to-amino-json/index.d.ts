import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '@osmonauts/types';
export interface ToAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
    isOptional: boolean;
}
export declare const toAminoParseField: ({ context, field, currentProtoPath, scope: previousScope, nested, isOptional }: ToAminoParseField) => any;
interface toAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
}
export declare const toAminoJsonMethod: ({ context, proto }: toAminoJSON) => t.ArrowFunctionExpression;
export {};
