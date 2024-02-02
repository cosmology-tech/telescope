import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@subql/x-cosmology-types';
import { ProtoParseContext } from '../../context';
export interface FromJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOneOf: boolean;
    isOptional: boolean;
}
export declare const fromJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => (t.IfStatement | t.ObjectProperty)[];
export declare const fromJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
