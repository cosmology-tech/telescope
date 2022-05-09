import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoType, ProtoField } from '../types';
export interface FromJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}
export declare const fromJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectProperty[];
export declare const fromJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
