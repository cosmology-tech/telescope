import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { ProtoParseContext } from '../../context';
export interface FromJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOneOf: boolean;
    isOptional: boolean;
}
export declare const fromJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.IfStatement[];
export declare const fromJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
