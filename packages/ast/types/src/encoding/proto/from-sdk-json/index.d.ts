import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
export interface FromSDKJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOneOf: boolean;
    isOptional: boolean;
}
export declare const fromSDKJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectProperty[];
export declare const fromSDKJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
