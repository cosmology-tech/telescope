import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { NullValue } from "../../../../google/protobuf/struct";
import { Any } from "../../../../google/protobuf/any";
/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
    /** Null value. */
    nullValue: NullValue | undefined;
    /** Boolean value. */
    boolValue: boolean | undefined;
    /** Signed integer value. */
    int64Value: Long | undefined;
    /** Unsigned integer value. */
    uint64Value: Long | undefined;
    /** Floating point value. */
    doubleValue: number | undefined;
    /** UTF-8 string value. */
    stringValue: string | undefined;
    /** Byte string value. */
    bytesValue: Uint8Array | undefined;
    /** An enum value. */
    enumValue: EnumValue | undefined;
    /** The proto message backing an object value. */
    objectValue: Any | undefined;
    /** Map value. */
    mapValue: MapValue | undefined;
    /** List value. */
    listValue: ListValue | undefined;
    /** A Type value represented by the fully qualified name of the type. */
    typeValue: string | undefined;
}
/** An enum value. */
export interface EnumValue {
    /** The fully qualified name of the enum type. */
    type: string;
    /** The value of the enum. */
    value: number;
}
/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface ListValue {
    /** The ordered values in the list. */
    values: Value[];
}
/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */
export interface MapValue {
    /**
     * The set of map entries.
     *
     * CEL has fewer restrictions on keys, so a protobuf map represenation
     * cannot be used.
     */
    entries: MapValue_Entry[];
}
/** An entry in the map. */
export interface MapValue_Entry {
    /**
     * The key.
     *
     * Must be unique with in the map.
     * Currently only boolean, int, uint, and string values can be keys.
     */
    key: Value;
    /** The value. */
    value: Value;
}
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial<I extends unknown>(object: I): Value;
};
export declare const EnumValue: {
    encode(message: EnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue;
    fromJSON(object: any): EnumValue;
    toJSON(message: EnumValue): unknown;
    fromPartial<I extends unknown>(object: I): EnumValue;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    fromPartial<I extends unknown>(object: I): ListValue;
};
export declare const MapValue: {
    encode(message: MapValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue;
    fromJSON(object: any): MapValue;
    toJSON(message: MapValue): unknown;
    fromPartial<I extends unknown>(object: I): MapValue;
};
export declare const MapValue_Entry: {
    encode(message: MapValue_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_Entry;
    fromJSON(object: any): MapValue_Entry;
    toJSON(message: MapValue_Entry): unknown;
    fromPartial<I extends unknown>(object: I): MapValue_Entry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
