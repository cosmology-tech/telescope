import * as t from '@babel/types';
import { ProtoField } from '@cosmology/types';
import { ProtoParseContext } from '../../context';
export interface FromSDKMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}
export declare const fromSDKMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectProperty[];
export declare const fromSDKMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
