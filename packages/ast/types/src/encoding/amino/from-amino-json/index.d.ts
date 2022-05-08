import * as t from '@babel/types';
import { AminoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../../proto/types';
export interface FromAminoParseField {
    context: AminoParseContext;
    field: ProtoField;
    currentProtoPath: string;
    scope: string[];
    nested: number;
}
export declare const fromAminoParseField: ({ context, field, currentProtoPath, scope: previousScope, nested }: FromAminoParseField) => any;
interface fromAminoJSON {
    context: AminoParseContext;
    proto: ProtoType;
}
export declare const fromAminoJsonMethod: ({ context, proto }: fromAminoJSON) => t.ArrowFunctionExpression;
export {};
