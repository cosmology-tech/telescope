import * as t from "@babel/types";
import { ProtoParseContext } from "../../context";
import { ProtoType, ProtoField } from "@cosmology/types";
export interface ToTextualSigMethod {
    context: ProtoParseContext;
    field: ProtoField;
    isOneOf: boolean;
    isOptional: boolean;
}
export declare const toTextualSigMethodFields: (context: ProtoParseContext, name: string, proto: ProtoType) => t.Statement[];
export declare const toTextualSigMethod: (context: ProtoParseContext, name: string, proto: ProtoType) => t.ObjectMethod;
