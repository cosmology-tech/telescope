import { SourceContext, SourceContextAmino, SourceContextSDKType } from "./source_context";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "./any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.protobuf";
/** Basic field types. */
export enum Field_Kind {
  /** TYPE_UNKNOWN - Field type unknown. */
  TYPE_UNKNOWN = 0,
  /** TYPE_DOUBLE - Field type double. */
  TYPE_DOUBLE = 1,
  /** TYPE_FLOAT - Field type float. */
  TYPE_FLOAT = 2,
  /** TYPE_INT64 - Field type int64. */
  TYPE_INT64 = 3,
  /** TYPE_UINT64 - Field type uint64. */
  TYPE_UINT64 = 4,
  /** TYPE_INT32 - Field type int32. */
  TYPE_INT32 = 5,
  /** TYPE_FIXED64 - Field type fixed64. */
  TYPE_FIXED64 = 6,
  /** TYPE_FIXED32 - Field type fixed32. */
  TYPE_FIXED32 = 7,
  /** TYPE_BOOL - Field type bool. */
  TYPE_BOOL = 8,
  /** TYPE_STRING - Field type string. */
  TYPE_STRING = 9,
  /** TYPE_GROUP - Field type group. Proto2 syntax only, and deprecated. */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Field type message. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - Field type bytes. */
  TYPE_BYTES = 12,
  /** TYPE_UINT32 - Field type uint32. */
  TYPE_UINT32 = 13,
  /** TYPE_ENUM - Field type enum. */
  TYPE_ENUM = 14,
  /** TYPE_SFIXED32 - Field type sfixed32. */
  TYPE_SFIXED32 = 15,
  /** TYPE_SFIXED64 - Field type sfixed64. */
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Field type sint32. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Field type sint64. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export const Field_KindSDKType = Field_Kind;
export const Field_KindAmino = Field_Kind;
export function field_KindFromJSON(object: any): Field_Kind {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return Field_Kind.TYPE_UNKNOWN;
    case 1:
    case "TYPE_DOUBLE":
      return Field_Kind.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return Field_Kind.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return Field_Kind.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return Field_Kind.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return Field_Kind.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return Field_Kind.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return Field_Kind.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return Field_Kind.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return Field_Kind.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return Field_Kind.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return Field_Kind.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return Field_Kind.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return Field_Kind.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return Field_Kind.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return Field_Kind.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return Field_Kind.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return Field_Kind.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return Field_Kind.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Field_Kind.UNRECOGNIZED;
  }
}
export function field_KindToJSON(object: Field_Kind): string {
  switch (object) {
    case Field_Kind.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case Field_Kind.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case Field_Kind.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case Field_Kind.TYPE_INT64:
      return "TYPE_INT64";
    case Field_Kind.TYPE_UINT64:
      return "TYPE_UINT64";
    case Field_Kind.TYPE_INT32:
      return "TYPE_INT32";
    case Field_Kind.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case Field_Kind.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case Field_Kind.TYPE_BOOL:
      return "TYPE_BOOL";
    case Field_Kind.TYPE_STRING:
      return "TYPE_STRING";
    case Field_Kind.TYPE_GROUP:
      return "TYPE_GROUP";
    case Field_Kind.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case Field_Kind.TYPE_BYTES:
      return "TYPE_BYTES";
    case Field_Kind.TYPE_UINT32:
      return "TYPE_UINT32";
    case Field_Kind.TYPE_ENUM:
      return "TYPE_ENUM";
    case Field_Kind.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case Field_Kind.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case Field_Kind.TYPE_SINT32:
      return "TYPE_SINT32";
    case Field_Kind.TYPE_SINT64:
      return "TYPE_SINT64";
    case Field_Kind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Whether a field is optional, required, or repeated. */
export enum Field_Cardinality {
  /** CARDINALITY_UNKNOWN - For fields with unknown cardinality. */
  CARDINALITY_UNKNOWN = 0,
  /** CARDINALITY_OPTIONAL - For optional fields. */
  CARDINALITY_OPTIONAL = 1,
  /** CARDINALITY_REQUIRED - For required fields. Proto2 syntax only. */
  CARDINALITY_REQUIRED = 2,
  /** CARDINALITY_REPEATED - For repeated fields. */
  CARDINALITY_REPEATED = 3,
  UNRECOGNIZED = -1,
}
export const Field_CardinalitySDKType = Field_Cardinality;
export const Field_CardinalityAmino = Field_Cardinality;
export function field_CardinalityFromJSON(object: any): Field_Cardinality {
  switch (object) {
    case 0:
    case "CARDINALITY_UNKNOWN":
      return Field_Cardinality.CARDINALITY_UNKNOWN;
    case 1:
    case "CARDINALITY_OPTIONAL":
      return Field_Cardinality.CARDINALITY_OPTIONAL;
    case 2:
    case "CARDINALITY_REQUIRED":
      return Field_Cardinality.CARDINALITY_REQUIRED;
    case 3:
    case "CARDINALITY_REPEATED":
      return Field_Cardinality.CARDINALITY_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Field_Cardinality.UNRECOGNIZED;
  }
}
export function field_CardinalityToJSON(object: Field_Cardinality): string {
  switch (object) {
    case Field_Cardinality.CARDINALITY_UNKNOWN:
      return "CARDINALITY_UNKNOWN";
    case Field_Cardinality.CARDINALITY_OPTIONAL:
      return "CARDINALITY_OPTIONAL";
    case Field_Cardinality.CARDINALITY_REQUIRED:
      return "CARDINALITY_REQUIRED";
    case Field_Cardinality.CARDINALITY_REPEATED:
      return "CARDINALITY_REPEATED";
    case Field_Cardinality.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The syntax in which a protocol buffer element is defined. */
export enum Syntax {
  /** SYNTAX_PROTO2 - Syntax `proto2`. */
  SYNTAX_PROTO2 = 0,
  /** SYNTAX_PROTO3 - Syntax `proto3`. */
  SYNTAX_PROTO3 = 1,
  UNRECOGNIZED = -1,
}
export const SyntaxSDKType = Syntax;
export const SyntaxAmino = Syntax;
export function syntaxFromJSON(object: any): Syntax {
  switch (object) {
    case 0:
    case "SYNTAX_PROTO2":
      return Syntax.SYNTAX_PROTO2;
    case 1:
    case "SYNTAX_PROTO3":
      return Syntax.SYNTAX_PROTO3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Syntax.UNRECOGNIZED;
  }
}
export function syntaxToJSON(object: Syntax): string {
  switch (object) {
    case Syntax.SYNTAX_PROTO2:
      return "SYNTAX_PROTO2";
    case Syntax.SYNTAX_PROTO3:
      return "SYNTAX_PROTO3";
    case Syntax.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A protocol buffer message type. */
export interface Type {
  /** The fully qualified message name. */
  name: string;
  /** The list of fields. */
  fields: Field[];
  /** The list of types appearing in `oneof` definitions in this type. */
  oneofs: string[];
  /** The protocol buffer options. */
  options: Option[];
  /** The source context. */
  sourceContext?: SourceContext;
  /** The source syntax. */
  syntax: Syntax;
}
export interface TypeProtoMsg {
  typeUrl: "/google.protobuf.Type";
  value: Uint8Array;
}
/** A protocol buffer message type. */
export interface TypeAmino {
  /** The fully qualified message name. */
  name: string;
  /** The list of fields. */
  fields: FieldAmino[];
  /** The list of types appearing in `oneof` definitions in this type. */
  oneofs: string[];
  /** The protocol buffer options. */
  options: OptionAmino[];
  /** The source context. */
  source_context?: SourceContextAmino;
  /** The source syntax. */
  syntax: Syntax;
}
/** A protocol buffer message type. */
export interface TypeSDKType {
  name: string;
  fields: FieldSDKType[];
  oneofs: string[];
  options: OptionSDKType[];
  source_context?: SourceContextSDKType;
  syntax: Syntax;
}
/** A single field of a message type. */
export interface Field {
  /** The field type. */
  kind: Field_Kind;
  /** The field cardinality. */
  cardinality: Field_Cardinality;
  /** The field number. */
  number: number;
  /** The field name. */
  name: string;
  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   */
  typeUrl: string;
  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   */
  oneofIndex: number;
  /** Whether to use alternative packed wire representation. */
  packed: boolean;
  /** The protocol buffer options. */
  options: Option[];
  /** The field JSON name. */
  jsonName: string;
  /** The string value of the default value of this field. Proto2 syntax only. */
  defaultValue: string;
}
export interface FieldProtoMsg {
  typeUrl: "/google.protobuf.Field";
  value: Uint8Array;
}
/** A single field of a message type. */
export interface FieldAmino {
  /** The field type. */
  kind: Field_Kind;
  /** The field cardinality. */
  cardinality: Field_Cardinality;
  /** The field number. */
  number: number;
  /** The field name. */
  name: string;
  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   */
  type_url: string;
  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   */
  oneof_index: number;
  /** Whether to use alternative packed wire representation. */
  packed: boolean;
  /** The protocol buffer options. */
  options: OptionAmino[];
  /** The field JSON name. */
  json_name: string;
  /** The string value of the default value of this field. Proto2 syntax only. */
  default_value: string;
}
/** A single field of a message type. */
export interface FieldSDKType {
  kind: Field_Kind;
  cardinality: Field_Cardinality;
  number: number;
  name: string;
  type_url: string;
  oneof_index: number;
  packed: boolean;
  options: OptionSDKType[];
  json_name: string;
  default_value: string;
}
/** Enum type definition. */
export interface Enum {
  /** Enum type name. */
  name: string;
  /** Enum value definitions. */
  enumvalue: EnumValue[];
  /** Protocol buffer options. */
  options: Option[];
  /** The source context. */
  sourceContext?: SourceContext;
  /** The source syntax. */
  syntax: Syntax;
}
export interface EnumProtoMsg {
  typeUrl: "/google.protobuf.Enum";
  value: Uint8Array;
}
/** Enum type definition. */
export interface EnumAmino {
  /** Enum type name. */
  name: string;
  /** Enum value definitions. */
  enumvalue: EnumValueAmino[];
  /** Protocol buffer options. */
  options: OptionAmino[];
  /** The source context. */
  source_context?: SourceContextAmino;
  /** The source syntax. */
  syntax: Syntax;
}
/** Enum type definition. */
export interface EnumSDKType {
  name: string;
  enumvalue: EnumValueSDKType[];
  options: OptionSDKType[];
  source_context?: SourceContextSDKType;
  syntax: Syntax;
}
/** Enum value definition. */
export interface EnumValue {
  /** Enum value name. */
  name: string;
  /** Enum value number. */
  number: number;
  /** Protocol buffer options. */
  options: Option[];
}
export interface EnumValueProtoMsg {
  typeUrl: "/google.protobuf.EnumValue";
  value: Uint8Array;
}
/** Enum value definition. */
export interface EnumValueAmino {
  /** Enum value name. */
  name: string;
  /** Enum value number. */
  number: number;
  /** Protocol buffer options. */
  options: OptionAmino[];
}
/** Enum value definition. */
export interface EnumValueSDKType {
  name: string;
  number: number;
  options: OptionSDKType[];
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface Option {
  /**
   * The option's name. For protobuf built-in options (options defined in
   * descriptor.proto), this is the short name. For example, `"map_entry"`.
   * For custom options, it should be the fully-qualified name. For example,
   * `"google.api.http"`.
   */
  name: string;
  /**
   * The option's value packed in an Any message. If the value is a primitive,
   * the corresponding wrapper type defined in google/protobuf/wrappers.proto
   * should be used. If the value is an enum, it should be stored as an int32
   * value using the google.protobuf.Int32Value type.
   */
  value?: Any;
}
export interface OptionProtoMsg {
  typeUrl: "/google.protobuf.Option";
  value: Uint8Array;
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface OptionAmino {
  /**
   * The option's name. For protobuf built-in options (options defined in
   * descriptor.proto), this is the short name. For example, `"map_entry"`.
   * For custom options, it should be the fully-qualified name. For example,
   * `"google.api.http"`.
   */
  name: string;
  /**
   * The option's value packed in an Any message. If the value is a primitive,
   * the corresponding wrapper type defined in google/protobuf/wrappers.proto
   * should be used. If the value is an enum, it should be stored as an int32
   * value using the google.protobuf.Int32Value type.
   */
  value?: AnyAmino;
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface OptionSDKType {
  name: string;
  value?: AnySDKType;
}
function createBaseType(): Type {
  return {
    name: "",
    fields: [],
    oneofs: [],
    options: [],
    sourceContext: undefined,
    syntax: 0
  };
}
export const Type = {
  typeUrl: "/google.protobuf.Type",
  encode(message: Type, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Type {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fields.push(Field.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.oneofs.push(reader.string());
          break;
        case 4:
          message.options.push(Option.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.sourceContext = SourceContext.decode(reader, reader.uint32(), useInterfaces);
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
    const obj = createBaseType();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.fields)) obj.fields = object.fields.map((e: any) => Field.fromJSON(e));
    if (Array.isArray(object?.oneofs)) obj.oneofs = object.oneofs.map((e: any) => String(e));
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => Option.fromJSON(e));
    if (isSet(object.sourceContext)) obj.sourceContext = SourceContext.fromJSON(object.sourceContext);
    if (isSet(object.syntax)) obj.syntax = syntaxFromJSON(object.syntax);
    return obj;
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
  fromPartial(object: DeepPartial<Type>): Type {
    const message = createBaseType();
    message.name = object.name ?? "";
    message.fields = object.fields?.map(e => Field.fromPartial(e)) || [];
    message.oneofs = object.oneofs?.map(e => e) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    if (object.sourceContext !== undefined && object.sourceContext !== null) {
      message.sourceContext = SourceContext.fromPartial(object.sourceContext);
    }
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromSDK(object: TypeSDKType): Type {
    return {
      name: object?.name,
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => Field.fromSDK(e)) : [],
      oneofs: Array.isArray(object?.oneofs) ? object.oneofs.map((e: any) => e) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDK(e)) : [],
      sourceContext: object.source_context ? SourceContext.fromSDK(object.source_context) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toSDK(message: Type): TypeSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.fields) {
      obj.fields = message.fields.map(e => e ? Field.toSDK(e) : undefined);
    } else {
      obj.fields = [];
    }
    if (message.oneofs) {
      obj.oneofs = message.oneofs.map(e => e);
    } else {
      obj.oneofs = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    message.sourceContext !== undefined && (obj.source_context = message.sourceContext ? SourceContext.toSDK(message.sourceContext) : undefined);
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromAmino(object: TypeAmino): Type {
    return {
      name: object.name,
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => Field.fromAmino(e)) : [],
      oneofs: Array.isArray(object?.oneofs) ? object.oneofs.map((e: any) => e) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromAmino(e)) : [],
      sourceContext: object?.source_context ? SourceContext.fromAmino(object.source_context) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toAmino(message: Type, useInterfaces: boolean = true): TypeAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.fields) {
      obj.fields = message.fields.map(e => e ? Field.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.fields = [];
    }
    if (message.oneofs) {
      obj.oneofs = message.oneofs.map(e => e);
    } else {
      obj.oneofs = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = [];
    }
    obj.source_context = message.sourceContext ? SourceContext.toAmino(message.sourceContext, useInterfaces) : undefined;
    obj.syntax = message.syntax;
    return obj;
  },
  fromProtoMsg(message: TypeProtoMsg, useInterfaces: boolean = true): Type {
    return Type.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Type): Uint8Array {
    return Type.encode(message).finish();
  },
  toProtoMsg(message: Type): TypeProtoMsg {
    return {
      typeUrl: "/google.protobuf.Type",
      value: Type.encode(message).finish()
    };
  }
};
function createBaseField(): Field {
  return {
    kind: 0,
    cardinality: 0,
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
  typeUrl: "/google.protobuf.Field",
  encode(message: Field, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Field {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.options.push(Option.decode(reader, reader.uint32(), useInterfaces));
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
    const obj = createBaseField();
    if (isSet(object.kind)) obj.kind = field_KindFromJSON(object.kind);
    if (isSet(object.cardinality)) obj.cardinality = field_CardinalityFromJSON(object.cardinality);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.typeUrl)) obj.typeUrl = String(object.typeUrl);
    if (isSet(object.oneofIndex)) obj.oneofIndex = Number(object.oneofIndex);
    if (isSet(object.packed)) obj.packed = Boolean(object.packed);
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => Option.fromJSON(e));
    if (isSet(object.jsonName)) obj.jsonName = String(object.jsonName);
    if (isSet(object.defaultValue)) obj.defaultValue = String(object.defaultValue);
    return obj;
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
  fromPartial(object: DeepPartial<Field>): Field {
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
  },
  fromSDK(object: FieldSDKType): Field {
    return {
      kind: isSet(object.kind) ? field_KindFromJSON(object.kind) : -1,
      cardinality: isSet(object.cardinality) ? field_CardinalityFromJSON(object.cardinality) : -1,
      number: object?.number,
      name: object?.name,
      typeUrl: object?.type_url,
      oneofIndex: object?.oneof_index,
      packed: object?.packed,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDK(e)) : [],
      jsonName: object?.json_name,
      defaultValue: object?.default_value
    };
  },
  toSDK(message: Field): FieldSDKType {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = field_KindToJSON(message.kind));
    message.cardinality !== undefined && (obj.cardinality = field_CardinalityToJSON(message.cardinality));
    obj.number = message.number;
    obj.name = message.name;
    obj.type_url = message.typeUrl;
    obj.oneof_index = message.oneofIndex;
    obj.packed = message.packed;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    obj.json_name = message.jsonName;
    obj.default_value = message.defaultValue;
    return obj;
  },
  fromAmino(object: FieldAmino): Field {
    return {
      kind: isSet(object.kind) ? field_KindFromJSON(object.kind) : -1,
      cardinality: isSet(object.cardinality) ? field_CardinalityFromJSON(object.cardinality) : -1,
      number: object.number,
      name: object.name,
      typeUrl: object.type_url,
      oneofIndex: object.oneof_index,
      packed: object.packed,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromAmino(e)) : [],
      jsonName: object.json_name,
      defaultValue: object.default_value
    };
  },
  toAmino(message: Field, useInterfaces: boolean = true): FieldAmino {
    const obj: any = {};
    obj.kind = message.kind;
    obj.cardinality = message.cardinality;
    obj.number = message.number;
    obj.name = message.name;
    obj.type_url = message.typeUrl;
    obj.oneof_index = message.oneofIndex;
    obj.packed = message.packed;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = [];
    }
    obj.json_name = message.jsonName;
    obj.default_value = message.defaultValue;
    return obj;
  },
  fromProtoMsg(message: FieldProtoMsg, useInterfaces: boolean = true): Field {
    return Field.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Field): Uint8Array {
    return Field.encode(message).finish();
  },
  toProtoMsg(message: Field): FieldProtoMsg {
    return {
      typeUrl: "/google.protobuf.Field",
      value: Field.encode(message).finish()
    };
  }
};
function createBaseEnum(): Enum {
  return {
    name: "",
    enumvalue: [],
    options: [],
    sourceContext: undefined,
    syntax: 0
  };
}
export const Enum = {
  typeUrl: "/google.protobuf.Enum",
  encode(message: Enum, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Enum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.enumvalue.push(EnumValue.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.options.push(Option.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.sourceContext = SourceContext.decode(reader, reader.uint32(), useInterfaces);
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
    const obj = createBaseEnum();
    if (isSet(object.name)) obj.name = String(object.name);
    if (Array.isArray(object?.enumvalue)) obj.enumvalue = object.enumvalue.map((e: any) => EnumValue.fromJSON(e));
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => Option.fromJSON(e));
    if (isSet(object.sourceContext)) obj.sourceContext = SourceContext.fromJSON(object.sourceContext);
    if (isSet(object.syntax)) obj.syntax = syntaxFromJSON(object.syntax);
    return obj;
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
  fromPartial(object: DeepPartial<Enum>): Enum {
    const message = createBaseEnum();
    message.name = object.name ?? "";
    message.enumvalue = object.enumvalue?.map(e => EnumValue.fromPartial(e)) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    if (object.sourceContext !== undefined && object.sourceContext !== null) {
      message.sourceContext = SourceContext.fromPartial(object.sourceContext);
    }
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromSDK(object: EnumSDKType): Enum {
    return {
      name: object?.name,
      enumvalue: Array.isArray(object?.enumvalue) ? object.enumvalue.map((e: any) => EnumValue.fromSDK(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDK(e)) : [],
      sourceContext: object.source_context ? SourceContext.fromSDK(object.source_context) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toSDK(message: Enum): EnumSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.enumvalue) {
      obj.enumvalue = message.enumvalue.map(e => e ? EnumValue.toSDK(e) : undefined);
    } else {
      obj.enumvalue = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    message.sourceContext !== undefined && (obj.source_context = message.sourceContext ? SourceContext.toSDK(message.sourceContext) : undefined);
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromAmino(object: EnumAmino): Enum {
    return {
      name: object.name,
      enumvalue: Array.isArray(object?.enumvalue) ? object.enumvalue.map((e: any) => EnumValue.fromAmino(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromAmino(e)) : [],
      sourceContext: object?.source_context ? SourceContext.fromAmino(object.source_context) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toAmino(message: Enum, useInterfaces: boolean = true): EnumAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.enumvalue) {
      obj.enumvalue = message.enumvalue.map(e => e ? EnumValue.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.enumvalue = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = [];
    }
    obj.source_context = message.sourceContext ? SourceContext.toAmino(message.sourceContext, useInterfaces) : undefined;
    obj.syntax = message.syntax;
    return obj;
  },
  fromProtoMsg(message: EnumProtoMsg, useInterfaces: boolean = true): Enum {
    return Enum.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Enum): Uint8Array {
    return Enum.encode(message).finish();
  },
  toProtoMsg(message: Enum): EnumProtoMsg {
    return {
      typeUrl: "/google.protobuf.Enum",
      value: Enum.encode(message).finish()
    };
  }
};
function createBaseEnumValue(): EnumValue {
  return {
    name: "",
    number: 0,
    options: []
  };
}
export const EnumValue = {
  typeUrl: "/google.protobuf.EnumValue",
  encode(message: EnumValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EnumValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.options.push(Option.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValue {
    const obj = createBaseEnumValue();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (Array.isArray(object?.options)) obj.options = object.options.map((e: any) => Option.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<EnumValue>): EnumValue {
    const message = createBaseEnumValue();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EnumValueSDKType): EnumValue {
    return {
      name: object?.name,
      number: object?.number,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromSDK(e)) : []
    };
  },
  toSDK(message: EnumValue): EnumValueSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAmino(object: EnumValueAmino): EnumValue {
    return {
      name: object.name,
      number: object.number,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromAmino(e)) : []
    };
  },
  toAmino(message: EnumValue, useInterfaces: boolean = true): EnumValueAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromProtoMsg(message: EnumValueProtoMsg, useInterfaces: boolean = true): EnumValue {
    return EnumValue.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EnumValue): Uint8Array {
    return EnumValue.encode(message).finish();
  },
  toProtoMsg(message: EnumValue): EnumValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValue",
      value: EnumValue.encode(message).finish()
    };
  }
};
function createBaseOption(): Option {
  return {
    name: "",
    value: undefined
  };
}
export const Option = {
  typeUrl: "/google.protobuf.Option",
  encode(message: Option, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Option {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Option {
    const obj = createBaseOption();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.value)) obj.value = Any.fromJSON(object.value);
    return obj;
  },
  toJSON(message: Option): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Option>): Option {
    const message = createBaseOption();
    message.name = object.name ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: OptionSDKType): Option {
    return {
      name: object?.name,
      value: object.value ? Any.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: Option): OptionSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.value !== undefined && (obj.value = message.value ? Any.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: OptionAmino): Option {
    return {
      name: object.name,
      value: object?.value ? Any.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: Option, useInterfaces: boolean = true): OptionAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.value = message.value ? Any.toAmino(message.value, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: OptionProtoMsg, useInterfaces: boolean = true): Option {
    return Option.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Option): Uint8Array {
    return Option.encode(message).finish();
  },
  toProtoMsg(message: Option): OptionProtoMsg {
    return {
      typeUrl: "/google.protobuf.Option",
      value: Option.encode(message).finish()
    };
  }
};