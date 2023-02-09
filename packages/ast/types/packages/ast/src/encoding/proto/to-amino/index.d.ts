import * as t from '@babel/types';
import { ProtoParseContext } from '../../context';
import { ProtoField, ProtoType } from '@osmonauts/types';
export interface ToAminoJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}
export declare const toAminoJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => any[];
export declare const toAminoJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
export declare const toAminoMsgMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
