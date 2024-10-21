import { NullValue } from "../../../protobuf/struct";
import { Any } from "../../../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Represents a CEL value.
 * 
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
  /** Null value. */
  nullValue?: NullValue;
  /** Boolean value. */
  boolValue?: boolean;
  /** Signed integer value. */
  int64Value?: bigint;
  /** Unsigned integer value. */
  uint64Value?: bigint;
  /** Floating point value. */
  doubleValue?: number;
  /** UTF-8 string value. */
  stringValue?: string;
  /** Byte string value. */
  bytesValue?: Uint8Array;
  /** An enum value. */
  enumValue?: EnumValue;
  /** The proto message backing an object value. */
  objectValue?: Any;
  /** Map value. */
  mapValue?: MapValue;
  /** List value. */
  listValue?: ListValue;
  /** Type value. */
  typeValue?: string;
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
  key?: Value;
  /** The value. */
  value?: Value;
}
function createBaseValue(): Value {
  return {
    nullValue: undefined,
    boolValue: undefined,
    int64Value: undefined,
    uint64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    bytesValue: undefined,
    enumValue: undefined,
    objectValue: undefined,
    mapValue: undefined,
    listValue: undefined,
    typeValue: undefined
  };
}
export const Value = {
  typeUrl: "/google.api.expr.v1alpha1.Value",
  encode(message: Value, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }
    if (message.int64Value !== undefined) {
      writer.uint32(24).int64(message.int64Value);
    }
    if (message.uint64Value !== undefined) {
      writer.uint32(32).uint64(message.uint64Value);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(41).double(message.doubleValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(50).string(message.stringValue);
    }
    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }
    if (message.enumValue !== undefined) {
      EnumValue.encode(message.enumValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.objectValue !== undefined) {
      Any.encode(message.objectValue, writer.uint32(82).fork()).ldelim();
    }
    if (message.mapValue !== undefined) {
      MapValue.encode(message.mapValue, writer.uint32(90).fork()).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(98).fork()).ldelim();
    }
    if (message.typeValue !== undefined) {
      writer.uint32(122).string(message.typeValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Value {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullValue = (reader.int32() as any);
          break;
        case 2:
          message.boolValue = reader.bool();
          break;
        case 3:
          message.int64Value = reader.int64();
          break;
        case 4:
          message.uint64Value = reader.uint64();
          break;
        case 5:
          message.doubleValue = reader.double();
          break;
        case 6:
          message.stringValue = reader.string();
          break;
        case 7:
          message.bytesValue = reader.bytes();
          break;
        case 9:
          message.enumValue = EnumValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.objectValue = Any.decode(reader, reader.uint32());
          break;
        case 11:
          message.mapValue = MapValue.decode(reader, reader.uint32());
          break;
        case 12:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        case 15:
          message.typeValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? BigInt(object.int64Value.toString()) : undefined;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? BigInt(object.uint64Value.toString()) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    message.enumValue = object.enumValue !== undefined && object.enumValue !== null ? EnumValue.fromPartial(object.enumValue) : undefined;
    message.objectValue = object.objectValue !== undefined && object.objectValue !== null ? Any.fromPartial(object.objectValue) : undefined;
    message.mapValue = object.mapValue !== undefined && object.mapValue !== null ? MapValue.fromPartial(object.mapValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    message.typeValue = object.typeValue ?? undefined;
    return message;
  }
};
function createBaseEnumValue(): EnumValue {
  return {
    type: "",
    value: 0
  };
}
export const EnumValue = {
  typeUrl: "/google.api.expr.v1alpha1.EnumValue",
  encode(message: EnumValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumValue>): EnumValue {
    const message = createBaseEnumValue();
    message.type = object.type ?? "";
    message.value = object.value ?? 0;
    return message;
  }
};
function createBaseListValue(): ListValue {
  return {
    values: []
  };
}
export const ListValue = {
  typeUrl: "/google.api.expr.v1alpha1.ListValue",
  encode(message: ListValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMapValue(): MapValue {
  return {
    entries: []
  };
}
export const MapValue = {
  typeUrl: "/google.api.expr.v1alpha1.MapValue",
  encode(message: MapValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      MapValue_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(MapValue_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MapValue>): MapValue {
    const message = createBaseMapValue();
    message.entries = object.entries?.map(e => MapValue_Entry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMapValue_Entry(): MapValue_Entry {
  return {
    key: undefined,
    value: undefined
  };
}
export const MapValue_Entry = {
  typeUrl: "/google.api.expr.v1alpha1.Entry",
  encode(message: MapValue_Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      Value.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MapValue_Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Value.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MapValue_Entry>): MapValue_Entry {
    const message = createBaseMapValue_Entry();
    message.key = object.key !== undefined && object.key !== null ? Value.fromPartial(object.key) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  }
};