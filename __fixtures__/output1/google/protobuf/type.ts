import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
import { SourceContext } from "./source_context";
import { Any } from "./any";
export interface Type {
  name: string;
  fields: Field[];
  oneofs: string[];
  options: Option[];
  sourceContext: SourceContext;
  syntax: Syntax;
}

function createBaseType(): Type {
  return {
    name: "",
    fields: [],
    oneofs: [],
    options: [],
    sourceContext: undefined,
    syntax: undefined
  };
}

export const Type = {
  encode(message: Type, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.fields) {
      Field.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.oneofs) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.options) {
      Option.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(42).fork()).ldelim();
    }

    if (message.syntax !== 0) {
      writer.uint32(48).int32(message.syntax);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.fields.push(Field.decode(reader, reader.uint32()));
          break;

        case 3:
          message.oneofs.push(reader.string());

        case 4:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;

        case 5:
          message.sourceContext = SourceContext.decode(reader, reader.uint32());
          break;

        case 6:
          message.syntax = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Type {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => Field.fromJSON(e)) : [],
      oneofs: Array.isArray(object?.oneofs) ? object.oneofs.map((e: any) => String(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      sourceContext: isSet(object.sourceContext) ? SourceContext.fromJSON(object.sourceContext) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : 0
    };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.fields) {
      obj.fields = message.fields.map(e => e ? Field.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }

    if (message.oneofs) {
      obj.oneofs = message.oneofs.map(e => e);
    } else {
      obj.oneofs = [];
    }

    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.sourceContext !== undefined && (obj.sourceContext = message.sourceContext ? SourceContext.toJSON(message.sourceContext) : undefined);
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type>, I>>(object: I): Type {
    const message = createBaseType();
    message.name = object.name ?? "";
    message.fields = object.fields?.map(e => Field.fromPartial(e)) || [];
    message.oneofs = object.oneofs?.map(e => e) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.sourceContext = object.sourceContext !== undefined && object.sourceContext !== null ? SourceContext.fromPartial(object.sourceContext) : undefined;
    message.syntax = object.syntax ?? 0;
    return message;
  }

};
export interface Field {
  kind: Kind;
  cardinality: Cardinality;
  number: number;
  name: string;
  typeUrl: string;
  oneofIndex: number;
  packed: boolean;
  options: Option[];
  jsonName: string;
  defaultValue: string;
}

function createBaseField(): Field {
  return {
    kind: undefined,
    cardinality: undefined,
    number: 0,
    name: "",
    typeUrl: "",
    oneofIndex: 0,
    packed: false,
    options: [],
    jsonName: "",
    defaultValue: ""
  };
}

export const Field = {
  encode(message: Field, writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }

    if (message.cardinality !== 0) {
      writer.uint32(16).int32(message.cardinality);
    }

    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.typeUrl !== "") {
      writer.uint32(50).string(message.typeUrl);
    }

    if (message.oneofIndex !== 0) {
      writer.uint32(56).int32(message.oneofIndex);
    }

    if (message.packed === true) {
      writer.uint32(64).bool(message.packed);
    }

    for (const v of message.options) {
      Option.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }

    if (message.defaultValue !== "") {
      writer.uint32(90).string(message.defaultValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Field {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseField();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kind = (reader.int32() as any);
          break;

        case 2:
          message.cardinality = (reader.int32() as any);
          break;

        case 3:
          message.number = reader.int32();
          break;

        case 4:
          message.name = reader.string();
          break;

        case 6:
          message.typeUrl = reader.string();
          break;

        case 7:
          message.oneofIndex = reader.int32();
          break;

        case 8:
          message.packed = reader.bool();
          break;

        case 9:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;

        case 10:
          message.jsonName = reader.string();
          break;

        case 11:
          message.defaultValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Field {
    return {
      kind: isSet(object.kind) ? field_KindFromJSON(object.kind) : 0,
      cardinality: isSet(object.cardinality) ? field_CardinalityFromJSON(object.cardinality) : 0,
      number: isSet(object.number) ? Number(object.number) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
      oneofIndex: isSet(object.oneofIndex) ? Number(object.oneofIndex) : 0,
      packed: isSet(object.packed) ? Boolean(object.packed) : false,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      jsonName: isSet(object.jsonName) ? String(object.jsonName) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : ""
    };
  },

  toJSON(message: Field): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = field_KindToJSON(message.kind));
    message.cardinality !== undefined && (obj.cardinality = field_CardinalityToJSON(message.cardinality));
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.name !== undefined && (obj.name = message.name);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
    message.packed !== undefined && (obj.packed = message.packed);

    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.jsonName !== undefined && (obj.jsonName = message.jsonName);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Field>, I>>(object: I): Field {
    const message = createBaseField();
    message.kind = object.kind ?? 0;
    message.cardinality = object.cardinality ?? 0;
    message.number = object.number ?? 0;
    message.name = object.name ?? "";
    message.typeUrl = object.typeUrl ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.packed = object.packed ?? false;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.jsonName = object.jsonName ?? "";
    message.defaultValue = object.defaultValue ?? "";
    return message;
  }

};
export enum Field_Kind {
  /*Field type unknown.*/
  TYPE_UNKNOWN = 0,

  /*Field type double.*/
  TYPE_DOUBLE = 1,

  /*Field type float.*/
  TYPE_FLOAT = 2,

  /*Field type int64.*/
  TYPE_INT64 = 3,

  /*Field type uint64.*/
  TYPE_UINT64 = 4,

  /*Field type int32.*/
  TYPE_INT32 = 5,

  /*Field type fixed64.*/
  TYPE_FIXED64 = 6,

  /*Field type fixed32.*/
  TYPE_FIXED32 = 7,

  /*Field type bool.*/
  TYPE_BOOL = 8,

  /*Field type string.*/
  TYPE_STRING = 9,

  /*Field type group. Proto2 syntax only, and deprecated.*/
  TYPE_GROUP = 10,

  /*Field type message.*/
  TYPE_MESSAGE = 11,

  /*Field type bytes.*/
  TYPE_BYTES = 12,

  /*Field type uint32.*/
  TYPE_UINT32 = 13,

  /*Field type enum.*/
  TYPE_ENUM = 14,

  /*Field type sfixed32.*/
  TYPE_SFIXED32 = 15,

  /*Field type sfixed64.*/
  TYPE_SFIXED64 = 16,

  /*Field type sint32.*/
  TYPE_SINT32 = 17,

  /*Field type sint64.*/
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export enum Field_Cardinality {
  /*For fields with unknown cardinality.*/
  CARDINALITY_UNKNOWN = 0,

  /*For optional fields.*/
  CARDINALITY_OPTIONAL = 1,

  /*For required fields. Proto2 syntax only.*/
  CARDINALITY_REQUIRED = 2,

  /*For repeated fields.*/
  CARDINALITY_REPEATED = 3,
  UNRECOGNIZED = -1,
}
export interface Enum {
  name: string;
  enumvalue: EnumValue[];
  options: Option[];
  sourceContext: SourceContext;
  syntax: Syntax;
}

function createBaseEnum(): Enum {
  return {
    name: "",
    enumvalue: [],
    options: [],
    sourceContext: undefined,
    syntax: undefined
  };
}

export const Enum = {
  encode(message: Enum, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.enumvalue) {
      EnumValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(34).fork()).ldelim();
    }

    if (message.syntax !== 0) {
      writer.uint32(40).int32(message.syntax);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Enum {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnum();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.enumvalue.push(EnumValue.decode(reader, reader.uint32()));
          break;

        case 3:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sourceContext = SourceContext.decode(reader, reader.uint32());
          break;

        case 5:
          message.syntax = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Enum {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      enumvalue: Array.isArray(object?.enumvalue) ? object.enumvalue.map((e: any) => EnumValue.fromJSON(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      sourceContext: isSet(object.sourceContext) ? SourceContext.fromJSON(object.sourceContext) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : 0
    };
  },

  toJSON(message: Enum): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.enumvalue) {
      obj.enumvalue = message.enumvalue.map(e => e ? EnumValue.toJSON(e) : undefined);
    } else {
      obj.enumvalue = [];
    }

    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.sourceContext !== undefined && (obj.sourceContext = message.sourceContext ? SourceContext.toJSON(message.sourceContext) : undefined);
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Enum>, I>>(object: I): Enum {
    const message = createBaseEnum();
    message.name = object.name ?? "";
    message.enumvalue = object.enumvalue?.map(e => EnumValue.fromPartial(e)) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.sourceContext = object.sourceContext !== undefined && object.sourceContext !== null ? SourceContext.fromPartial(object.sourceContext) : undefined;
    message.syntax = object.syntax ?? 0;
    return message;
  }

};
export interface EnumValue {
  name: string;
  number: number;
  options: Option[];
}

function createBaseEnumValue(): EnumValue {
  return {
    name: "",
    number: 0,
    options: []
  };
}

export const EnumValue = {
  encode(message: EnumValue, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }

    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.number = reader.int32();
          break;

        case 3:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EnumValue {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : []
    };
  },

  toJSON(message: EnumValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));

    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnumValue>, I>>(object: I): EnumValue {
    const message = createBaseEnumValue();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    return message;
  }

};
export interface Option {
  name: string;
  value: Any;
}

function createBaseOption(): Option {
  return {
    name: "",
    value: undefined
  };
}

export const Option = {
  encode(message: Option, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Option {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Option {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: Option): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Option>, I>>(object: I): Option {
    const message = createBaseOption();
    message.name = object.name ?? "";
    message.value = object.value !== undefined && object.value !== null ? Any.fromPartial(object.value) : undefined;
    return message;
  }

};
export enum Syntax {
  /*Syntax `proto2`.*/
  SYNTAX_PROTO2 = 0,

  /*Syntax `proto3`.*/
  SYNTAX_PROTO3 = 1,
  UNRECOGNIZED = -1,
}