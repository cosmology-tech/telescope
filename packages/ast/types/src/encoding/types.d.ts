import * as t from '@babel/types';
import { ProtoField } from '@osmonauts/types';
import { GenericParseContext, ProtoParseContext } from './context';
export declare const getFieldNames: (field: ProtoField) => {
    propName: string;
    origName: string;
};
export declare type TelescopeBaseTypes = 'Msg' | 'SDKType' | 'Amino' | 'AminoMsg' | 'ProtoMsg' | 'Encoded';
export declare const SymbolNames: {
    Msg: (name: string) => string;
    SDKType: (name: string) => string;
    ProtoMsg: (name: string) => string;
    AminoMsg: (name: string) => string;
    Amino: (name: string) => string;
    Encoded: (name: string) => string;
};
export declare const getFieldTypeReference: (context: ProtoParseContext, field: ProtoField, type?: TelescopeBaseTypes) => {
    ast: any;
    isTypeCastableAnyType?: undefined;
} | {
    ast: any;
    isTypeCastableAnyType: boolean;
};
export declare const getFieldAminoTypeReference: (context: ProtoParseContext, field: ProtoField) => any;
export declare const getTSType: (context: GenericParseContext, type: string) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getTSAminoType: (context: GenericParseContext, type: string) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getTSTypeFromGoogleType: (context: GenericParseContext, type: string, options?: TelescopeBaseTypes) => t.TSStringKeyword | t.TSTypeReference;
export declare const getTSTypeForAmino: (context: GenericParseContext, field: ProtoField) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getTSTypeForProto: (context: GenericParseContext, field: ProtoField) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const getDefaultTSTypeFromProtoType: (context: ProtoParseContext, field: ProtoField, isOneOf: boolean) => t.ArrayExpression | t.BooleanLiteral | t.Identifier | t.MemberExpression | t.NewExpression | t.NumericLiteral | t.ObjectExpression | t.StringLiteral;
