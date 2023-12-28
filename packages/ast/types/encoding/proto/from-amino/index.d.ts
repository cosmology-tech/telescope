import * as t from "@babel/types";
import { ProtoParseContext } from "../../context";
import { ProtoType, ProtoField } from "@cosmology/types";
export interface fromAminoMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOneOf: boolean;
    isOptional: boolean;
}
export declare const fromAminoMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.Statement[];
export declare const fromAminoJSONMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
export declare const fromAminoMsgMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
