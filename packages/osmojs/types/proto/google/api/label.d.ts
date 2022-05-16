import * as _m0 from "protobufjs/minimal";
/** Value types that can be used as label values. */
export declare enum LabelDescriptor_ValueType {
    /** STRING - A variable-length string. This is the default. */
    STRING = 0,
    /** BOOL - Boolean; true or false. */
    BOOL = 1,
    /** INT64 - A 64-bit signed integer. */
    INT64 = 2,
    UNRECOGNIZED = -1
}
export declare function labelDescriptor_ValueTypeFromJSON(object: any): LabelDescriptor_ValueType;
export declare function labelDescriptor_ValueTypeToJSON(object: LabelDescriptor_ValueType): string;
/** A description of a label. */
export interface LabelDescriptor {
    /** The label key. */
    key: string;
    /** The type of data that can be assigned to the label. */
    valueType: LabelDescriptor_ValueType;
    /** A human-readable description for the label. */
    description: string;
}
export declare const LabelDescriptor: {
    encode(message: LabelDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelDescriptor;
    fromJSON(object: any): LabelDescriptor;
    toJSON(message: LabelDescriptor): unknown;
    fromPartial<I extends {
        key?: string;
        valueType?: LabelDescriptor_ValueType;
        description?: string;
    } & {
        key?: string;
        valueType?: LabelDescriptor_ValueType;
        description?: string;
    } & Record<Exclude<keyof I, keyof LabelDescriptor>, never>>(object: I): LabelDescriptor;
};
