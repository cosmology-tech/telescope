import { ProtoType, ProtoField } from '@cosmology/types';
import { AminoParseContext, ProtoParseContext } from '../context';
export declare const SCALAR_TYPES: string[];
export declare const GOOGLE_TYPES: string[];
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
export declare const getEnumToJsonName: (name: any) => string;
export declare const getEnumFromJsonName: (name: any) => string;
export declare const getFieldsTypeName: (field: ProtoField) => string;
export declare const getKeyTypeEntryName: (typeName: string, prop: string) => string;
export declare const getBaseCreateTypeFuncName: (name: any) => string;
export declare const getOneOfs: (type: ProtoType) => string[];
export declare const getFieldOptionality: (context: ProtoParseContext | AminoParseContext, field: ProtoField, isOneOf: boolean) => boolean;
export declare const getFieldOptionalityForAmino: (context: ProtoParseContext | AminoParseContext, field: ProtoField, isOneOf: boolean) => any;
export declare const isScalarField: (field: ProtoField) => boolean;
export declare const isArrayField: (field: ProtoField) => boolean;
export declare const isEnumField: (field: ProtoField) => boolean;
export declare const isMapField: (field: ProtoField) => string;
export declare const getFieldOptionalityForDefaults: (context: ProtoParseContext | AminoParseContext, field: ProtoField, isOneOf: boolean) => any;
/**
 * get deprecated option from string, return true/false as string
 * @param input
 * @returns string
*/
export declare const getOptionDeprecated: (input: string) => string;
