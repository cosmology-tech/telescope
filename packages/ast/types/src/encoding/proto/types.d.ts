import * as t from '@babel/types';
export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
}
export interface ProtoEnum {
    name?: string;
    values: {
        [key: string]: number;
    };
    comment?: string;
    comments?: {
        [key: string]: string;
    };
}
export interface ProtoType {
    name?: string;
    oneofs?: {
        [key: string]: {
            oneof: string[];
            comment: string | undefined;
        };
    };
    fields: {
        [key: string]: ProtoField;
    };
    comment: string | undefined;
}
export interface ProtoField {
    name?: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    };
    keyType?: string;
    rule?: string;
    type: string;
    id: number;
    options: {
        [key: string]: any;
        "(gogoproto.nullable)"?: boolean;
        "(cosmos_proto.scalar)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(cosmos_proto.accepts_interface)"?: string;
    };
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}
export declare const SCALAR_TYPES: string[];
export declare const NATIVE_TYPES: string[];
export declare const getTSTypeFromProtoType: (type: any) => t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const types: {
    basic: {
        double: number;
        float: number;
        int32: number;
        uint32: number;
        sint32: number;
        fixed32: number;
        sfixed32: number;
        int64: number;
        uint64: number;
        sint64: number;
        fixed64: number;
        sfixed64: number;
        bool: number;
        string: number;
        bytes: number;
    };
    defaults: {
        double: number;
        float: number;
        int32: number;
        uint32: number;
        sint32: number;
        fixed32: number;
        sfixed32: number;
        int64: number;
        uint64: number;
        sint64: number;
        fixed64: number;
        sfixed64: number;
        bool: boolean;
        string: string;
        bytes: any[];
        undefined: any;
    };
    long: {
        int64: number;
        uint64: number;
        sint64: number;
        fixed64: number;
        sfixed64: number;
    };
    mapKey: {
        int32: number;
        uint32: number;
        sint32: number;
        fixed32: number;
        sfixed32: number;
        int64: number;
        uint64: number;
        sint64: number;
        fixed64: number;
        sfixed64: number;
        bool: number;
        string: number;
    };
    packed: {
        double: number;
        float: number;
        int32: number;
        uint32: number;
        sint32: number;
        fixed32: number;
        sfixed32: number;
        int64: number;
        uint64: number;
        sint64: number;
        fixed64: number;
        sfixed64: number;
        bool: number;
    };
};
export declare const getWireNumber: (type: any) => any;
export declare const getPackedWireNumber: (type: any) => any;
export declare const getTagNumber: (field: ProtoField) => number;
export declare const getDefaultTSTypeFromProtoType: (field: ProtoField, isOptional: boolean) => t.ArrayExpression | t.BooleanLiteral | t.Identifier | t.MemberExpression | t.NewExpression | t.NumericLiteral | t.ObjectExpression | t.StringLiteral;
export declare const getEnumToJsonName: (name: any) => string;
export declare const getEnumFromJsonName: (name: any) => string;
export declare const getFieldsTypeName: (field: ProtoField) => string;
export declare const getKeyTypeEntryName: (typeName: string, prop: string) => string;
export declare const getBaseCreateTypeFuncName: (name: any) => string;
export declare const getOneOfs: (type: ProtoType) => string[];
export declare const getFieldOptionality: (field: ProtoField, isOneOf: boolean) => boolean;
export declare const createProtoType: (name: string, proto: ProtoType) => t.ExportNamedDeclaration;
export declare const createCreateProtoType: (name: string, proto: ProtoType) => t.FunctionDeclaration;
