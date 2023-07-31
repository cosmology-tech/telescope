import * as t from '@babel/types';
import { ProtoField } from '@cosmology/types';
import { ProtoParseContext } from '../../context';
export interface FromAminoJSONMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOptional: boolean;
}
export declare const fromAminoJSONMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectProperty[];
export declare const fromAminoJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
export declare const fromAminoMsgMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
