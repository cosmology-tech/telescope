import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoField, ProtoType } from '../types';
export interface ToJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
}
export declare const toJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => any[];
export declare const toJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
