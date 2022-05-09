import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../types';
export interface FromPartialMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}
export declare const fromPartialMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ExpressionStatement[];
export declare const fromPartialMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
