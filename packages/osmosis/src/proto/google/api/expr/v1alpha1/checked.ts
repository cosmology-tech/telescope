import { SourceInfo, Expr, Constant } from "./syntax";
import { Empty } from "../../../protobuf/empty";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial, isObject } from "@osmonauts/helpers";

/** CEL primitive types. */
export enum Type_PrimitiveType {
  /** PRIMITIVE_TYPE_UNSPECIFIED - Unspecified type. */
  PRIMITIVE_TYPE_UNSPECIFIED = 0,

  /** BOOL - Boolean type. */
  BOOL = 1,

  /**
   * INT64 - Int64 type.
   * 
   * Proto-based integer values are widened to int64.
   */
  INT64 = 2,

  /**
   * UINT64 - Uint64 type.
   * 
   * Proto-based unsigned integer values are widened to uint64.
   */
  UINT64 = 3,

  /**
   * DOUBLE - Double type.
   * 
   * Proto-based float values are widened to double values.
   */
  DOUBLE = 4,

  /** STRING - String type. */
  STRING = 5,

  /** BYTES - Bytes type. */
  BYTES = 6,
  UNRECOGNIZED = -1,
}
export function type_PrimitiveTypeFromJSON(object: any): Type_PrimitiveType {
  switch (object) {
    case 0:
    case "PRIMITIVE_TYPE_UNSPECIFIED":
      return Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED;

    case 1:
    case "BOOL":
      return Type_PrimitiveType.BOOL;

    case 2:
    case "INT64":
      return Type_PrimitiveType.INT64;

    case 3:
    case "UINT64":
      return Type_PrimitiveType.UINT64;

    case 4:
    case "DOUBLE":
      return Type_PrimitiveType.DOUBLE;

    case 5:
    case "STRING":
      return Type_PrimitiveType.STRING;

    case 6:
    case "BYTES":
      return Type_PrimitiveType.BYTES;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_PrimitiveType.UNRECOGNIZED;
  }
}
export function type_PrimitiveTypeToJSON(object: Type_PrimitiveType): string {
  switch (object) {
    case Type_PrimitiveType.PRIMITIVE_TYPE_UNSPECIFIED:
      return "PRIMITIVE_TYPE_UNSPECIFIED";

    case Type_PrimitiveType.BOOL:
      return "BOOL";

    case Type_PrimitiveType.INT64:
      return "INT64";

    case Type_PrimitiveType.UINT64:
      return "UINT64";

    case Type_PrimitiveType.DOUBLE:
      return "DOUBLE";

    case Type_PrimitiveType.STRING:
      return "STRING";

    case Type_PrimitiveType.BYTES:
      return "BYTES";

    default:
      return "UNKNOWN";
  }
}

/** Well-known protobuf types treated with first-class support in CEL. */
export enum Type_WellKnownType {
  /** WELL_KNOWN_TYPE_UNSPECIFIED - Unspecified type. */
  WELL_KNOWN_TYPE_UNSPECIFIED = 0,

  /**
   * ANY - Well-known protobuf.Any type.
   * 
   * Any types are a polymorphic message type. During type-checking they are
   * treated like `DYN` types, but at runtime they are resolved to a specific
   * message type specified at evaluation time.
   */
  ANY = 1,

  /** TIMESTAMP - Well-known protobuf.Timestamp type, internally referenced as `timestamp`. */
  TIMESTAMP = 2,

  /** DURATION - Well-known protobuf.Duration type, internally referenced as `duration`. */
  DURATION = 3,
  UNRECOGNIZED = -1,
}
export function type_WellKnownTypeFromJSON(object: any): Type_WellKnownType {
  switch (object) {
    case 0:
    case "WELL_KNOWN_TYPE_UNSPECIFIED":
      return Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED;

    case 1:
    case "ANY":
      return Type_WellKnownType.ANY;

    case 2:
    case "TIMESTAMP":
      return Type_WellKnownType.TIMESTAMP;

    case 3:
    case "DURATION":
      return Type_WellKnownType.DURATION;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_WellKnownType.UNRECOGNIZED;
  }
}
export function type_WellKnownTypeToJSON(object: Type_WellKnownType): string {
  switch (object) {
    case Type_WellKnownType.WELL_KNOWN_TYPE_UNSPECIFIED:
      return "WELL_KNOWN_TYPE_UNSPECIFIED";

    case Type_WellKnownType.ANY:
      return "ANY";

    case Type_WellKnownType.TIMESTAMP:
      return "TIMESTAMP";

    case Type_WellKnownType.DURATION:
      return "DURATION";

    default:
      return "UNKNOWN";
  }
}
export interface CheckedExpr_ReferenceMapEntry {
  key: Long;
  value: Reference;
}
export interface CheckedExpr_TypeMapEntry {
  key: Long;
  value: Type;
}

/** A CEL expression which has been successfully type checked. */
export interface CheckedExpr {
  /**
   * A map from expression ids to resolved references.
   * 
   * The following entries are in this table:
   * 
   * - An Ident or Select expression is represented here if it resolves to a
   * declaration. For instance, if `a.b.c` is represented by
   * `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
   * while `c` is a field selection, then the reference is attached to the
   * nested select expression (but not to the id or or the outer select).
   * In turn, if `a` resolves to a declaration and `b.c` are field selections,
   * the reference is attached to the ident expression.
   * - Every Call expression has an entry here, identifying the function being
   * called.
   * - Every CreateStruct expression for a message has an entry, identifying
   * the message.
   */
  referenceMap: {
    [key: Long]: Reference;
  };

  /**
   * A map from expression ids to types.
   * 
   * Every expression node which has a type different than DYN has a mapping
   * here. If an expression has type DYN, it is omitted from this map to save
   * space.
   */
  typeMap: {
    [key: Long]: Type;
  };

  /**
   * The source info derived from input that generated the parsed `expr` and
   * any optimizations made during the type-checking pass.
   */
  sourceInfo: SourceInfo;

  /**
   * The expr version indicates the major / minor version number of the `expr`
   * representation.
   * 
   * The most common reason for a version change will be to indicate to the CEL
   * runtimes that transformations have been performed on the expr during static
   * analysis. In some cases, this will save the runtime the work of applying
   * the same or similar transformations prior to evaluation.
   */
  exprVersion: string;

  /**
   * The checked expression. Semantically equivalent to the parsed `expr`, but
   * may have structural differences.
   */
  expr: Expr;
}

/** Represents a CEL type. */
export interface Type {
  /** Dynamic type. */
  dyn?: Empty;

  /** Null value. */
  null?: NullValue;

  /** Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`. */
  primitive?: Type_PrimitiveType;

  /** Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`. */
  wrapper?: Type_PrimitiveType;

  /** Well-known protobuf type such as `google.protobuf.Timestamp`. */
  wellKnown?: Type_WellKnownType;

  /** Parameterized list with elements of `list_type`, e.g. `list<timestamp>`. */
  listType?: Type_ListType;

  /** Parameterized map with typed keys and values. */
  mapType?: Type_MapType;

  /** Function type. */
  function?: Type_FunctionType;

  /**
   * Protocol buffer message type.
   * 
   * The `message_type` string specifies the qualified message type name. For
   * example, `google.plus.Profile`.
   */
  messageType?: string;

  /**
   * Type param type.
   * 
   * The `type_param` string specifies the type parameter name, e.g. `list<E>`
   * would be a `list_type` whose element type was a `type_param` type
   * named `E`.
   */
  typeParam?: string;

  /**
   * Type type.
   * 
   * The `type` value specifies the target type. e.g. int is type with a
   * target type of `Primitive.INT`.
   */
  type?: Type;

  /**
   * Error type.
   * 
   * During type-checking if an expression is an error, its type is propagated
   * as the `ERROR` type. This permits the type-checker to discover other
   * errors present in the expression.
   */
  error?: Empty;

  /** Abstract, application defined type. */
  abstractType?: Type_AbstractType;
}

/** List type with typed elements, e.g. `list<example.proto.MyMessage>`. */
export interface Type_ListType {
  /** The element type. */
  elemType: Type;
}

/** Map type with parameterized key and value types, e.g. `map<string, int>`. */
export interface Type_MapType {
  /** The type of the key. */
  keyType: Type;

  /** The type of the value. */
  valueType: Type;
}

/** Function type with result and arg types. */
export interface Type_FunctionType {
  /** Result type of the function. */
  resultType: Type;

  /** Argument types of the function. */
  argTypes: Type[];
}

/** Application defined abstract type. */
export interface Type_AbstractType {
  /** The fully qualified name of this abstract type. */
  name: string;

  /** Parameter types for this abstract type. */
  parameterTypes: Type[];
}

/**
 * Represents a declaration of a named value or function.
 * 
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 */
export interface Decl {
  /**
   * The fully qualified name of the declaration.
   * 
   * Declarations are organized in containers and this represents the full path
   * to the declaration in its container, as in `google.api.expr.Decl`.
   * 
   * Declarations used as [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload] parameters may or may not
   * have a name depending on whether the overload is function declaration or a
   * function definition containing a result [Expr][google.api.expr.v1alpha1.Expr].
   */
  name: string;

  /** Identifier declaration. */
  ident?: Decl_IdentDecl;

  /** Function declaration. */
  function?: Decl_FunctionDecl;
}

/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 * 
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 */
export interface Decl_IdentDecl {
  /** Required. The type of the identifier. */
  type: Type;

  /**
   * The constant value of the identifier. If not specified, the identifier
   * must be supplied at evaluation time.
   */
  value: Constant;

  /** Documentation string for the identifier. */
  doc: string;
}

/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 * 
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 */
export interface Decl_FunctionDecl {
  /** Required. List of function overloads, must contain at least one overload. */
  overloads: Decl_FunctionDecl_Overload[];
}

/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of [Expr][google.api.expr.v1alpha1.Expr]
 * values.
 * 
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 * 
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 */
export interface Decl_FunctionDecl_Overload {
  /**
   * Required. Globally unique overload name of the function which reflects
   * the function name and argument types.
   * 
   * This will be used by a [Reference][google.api.expr.v1alpha1.Reference] to indicate the `overload_id` that
   * was resolved for the function `name`.
   */
  overloadId: string;

  /**
   * List of function parameter [Type][google.api.expr.v1alpha1.Type] values.
   * 
   * Param types are disjoint after generic type parameters have been
   * replaced with the type `DYN`. Since the `DYN` type is compatible with
   * any other type, this means that if `A` is a type parameter, the
   * function types `int<A>` and `int<int>` are not disjoint. Likewise,
   * `map<string, string>` is not disjoint from `map<K, V>`.
   * 
   * When the `result_type` of a function is a generic type param, the
   * type param name also appears as the `type` of on at least one params.
   */
  params: Type[];

  /**
   * The type param names associated with the function declaration.
   * 
   * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
   * the type params of `K, V`.
   */
  typeParams: string[];

  /**
   * Required. The result type of the function. For example, the operator
   * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
   */
  resultType: Type;

  /**
   * Whether the function is to be used in a method call-style `x.f(...)`
   * of a function call-style `f(x, ...)`.
   * 
   * For methods, the first parameter declaration, `params[0]` is the
   * expected type of the target receiver.
   */
  isInstanceFunction: boolean;

  /** Documentation string for the overload. */
  doc: string;
}

/** Describes a resolved reference to a declaration. */
export interface Reference {
  /** The fully qualified name of the declaration. */
  name: string;

  /**
   * For references to functions, this is a list of `Overload.overload_id`
   * values which match according to typing rules.
   * 
   * If the list has more than one element, overload resolution among the
   * presented candidates must happen at runtime because of dynamic types. The
   * type checker attempts to narrow down this list as much as possible.
   * 
   * Empty if this is not a reference to a [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
   */
  overloadId: string[];

  /**
   * For references to constants, this may contain the value of the
   * constant if known at compile time.
   */
  value: Constant;
}

function createBaseCheckedExpr_ReferenceMapEntry(): CheckedExpr_ReferenceMapEntry {
  return {
    key: Long.ZERO,
    value: undefined
  };
}

export const CheckedExpr_ReferenceMapEntry = {
  encode(message: CheckedExpr_ReferenceMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }

    if (message.value !== undefined) {
      Reference.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_ReferenceMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_ReferenceMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.int64() as Long);
          break;

        case 2:
          message.value = Reference.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckedExpr_ReferenceMapEntry {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.ZERO,
      value: isSet(object.value) ? Reference.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: CheckedExpr_ReferenceMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.ZERO).toString());
    message.value !== undefined && (obj.value = message.value ? Reference.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckedExpr_ReferenceMapEntry>, I>>(object: I): CheckedExpr_ReferenceMapEntry {
    const message = createBaseCheckedExpr_ReferenceMapEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value !== undefined && object.value !== null ? Reference.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseCheckedExpr_TypeMapEntry(): CheckedExpr_TypeMapEntry {
  return {
    key: Long.ZERO,
    value: undefined
  };
}

export const CheckedExpr_TypeMapEntry = {
  encode(message: CheckedExpr_TypeMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }

    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr_TypeMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr_TypeMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.int64() as Long);
          break;

        case 2:
          message.value = Type.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckedExpr_TypeMapEntry {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.ZERO,
      value: isSet(object.value) ? Type.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: CheckedExpr_TypeMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.ZERO).toString());
    message.value !== undefined && (obj.value = message.value ? Type.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckedExpr_TypeMapEntry>, I>>(object: I): CheckedExpr_TypeMapEntry {
    const message = createBaseCheckedExpr_TypeMapEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value !== undefined && object.value !== null ? Type.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseCheckedExpr(): CheckedExpr {
  return {
    referenceMap: {},
    typeMap: {},
    sourceInfo: undefined,
    exprVersion: "",
    expr: undefined
  };
}

export const CheckedExpr = {
  encode(message: CheckedExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.referenceMap).forEach(([key, value]) => {
      CheckedExpr_ReferenceMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.typeMap).forEach(([key, value]) => {
      CheckedExpr_TypeMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });

    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(42).fork()).ldelim();
    }

    if (message.exprVersion !== "") {
      writer.uint32(50).string(message.exprVersion);
    }

    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckedExpr();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          const entry2 = CheckedExpr_ReferenceMapEntry.decode(reader, reader.uint32());

          if (entry2.value !== undefined) {
            message.referenceMap[entry2.key] = entry2.value;
          }

          break;

        case 3:
          const entry3 = CheckedExpr_TypeMapEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.typeMap[entry3.key] = entry3.value;
          }

          break;

        case 5:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;

        case 6:
          message.exprVersion = reader.string();
          break;

        case 4:
          message.expr = Expr.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckedExpr {
    return {
      referenceMap: isObject(object.referenceMap) ? Object.entries(object.referenceMap).reduce<{
        [key: Long]: Reference;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Reference.fromJSON(value);
        return acc;
      }, {}) : {},
      typeMap: isObject(object.typeMap) ? Object.entries(object.typeMap).reduce<{
        [key: Long]: Type;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Type.fromJSON(value);
        return acc;
      }, {}) : {},
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      exprVersion: isSet(object.exprVersion) ? String(object.exprVersion) : "",
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined
    };
  },

  toJSON(message: CheckedExpr): unknown {
    const obj: any = {};
    obj.referenceMap = {};

    if (message.referenceMap) {
      Object.entries(message.referenceMap).forEach(([k, v]) => {
        obj.referenceMap[k] = Reference.toJSON(v);
      });
    }

    obj.typeMap = {};

    if (message.typeMap) {
      Object.entries(message.typeMap).forEach(([k, v]) => {
        obj.typeMap[k] = Type.toJSON(v);
      });
    }

    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.exprVersion !== undefined && (obj.exprVersion = message.exprVersion);
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckedExpr>, I>>(object: I): CheckedExpr {
    const message = createBaseCheckedExpr();
    message.referenceMap = Object.entries(object.referenceMap ?? {}).reduce<{
      [key: Long]: Reference;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Reference.fromPartial(value);
      }

      return acc;
    }, {});
    message.typeMap = Object.entries(object.typeMap ?? {}).reduce<{
      [key: Long]: Type;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Type.fromPartial(value);
      }

      return acc;
    }, {});
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : undefined;
    message.exprVersion = object.exprVersion ?? "";
    message.expr = object.expr !== undefined && object.expr !== null ? Expr.fromPartial(object.expr) : undefined;
    return message;
  }

};

function createBaseType(): Type {
  return {
    dyn: undefined,
    null: undefined,
    primitive: undefined,
    wrapper: undefined,
    wellKnown: undefined,
    listType: undefined,
    mapType: undefined,
    function: undefined,
    messageType: undefined,
    typeParam: undefined,
    type: undefined,
    error: undefined,
    abstractType: undefined
  };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dyn !== undefined) {
      Empty.encode(message.dyn, writer.uint32(10).fork()).ldelim();
    }

    if (message.null !== undefined) {
      writer.uint32(16).int32(message.null);
    }

    if (message.primitive !== undefined) {
      writer.uint32(24).int32(message.primitive);
    }

    if (message.wrapper !== undefined) {
      writer.uint32(32).int32(message.wrapper);
    }

    if (message.wellKnown !== undefined) {
      writer.uint32(40).int32(message.wellKnown);
    }

    if (message.listType !== undefined) {
      Type_ListType.encode(message.listType, writer.uint32(50).fork()).ldelim();
    }

    if (message.mapType !== undefined) {
      Type_MapType.encode(message.mapType, writer.uint32(58).fork()).ldelim();
    }

    if (message.function !== undefined) {
      Type_FunctionType.encode(message.function, writer.uint32(66).fork()).ldelim();
    }

    if (message.messageType !== undefined) {
      writer.uint32(74).string(message.messageType);
    }

    if (message.typeParam !== undefined) {
      writer.uint32(82).string(message.typeParam);
    }

    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(90).fork()).ldelim();
    }

    if (message.error !== undefined) {
      Empty.encode(message.error, writer.uint32(98).fork()).ldelim();
    }

    if (message.abstractType !== undefined) {
      Type_AbstractType.encode(message.abstractType, writer.uint32(114).fork()).ldelim();
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
          message.dyn = Empty.decode(reader, reader.uint32());
          break;

        case 2:
          message.null = (reader.int32() as any);
          break;

        case 3:
          message.primitive = (reader.int32() as any);
          break;

        case 4:
          message.wrapper = (reader.int32() as any);
          break;

        case 5:
          message.wellKnown = (reader.int32() as any);
          break;

        case 6:
          message.listType = Type_ListType.decode(reader, reader.uint32());
          break;

        case 7:
          message.mapType = Type_MapType.decode(reader, reader.uint32());
          break;

        case 8:
          message.function = Type_FunctionType.decode(reader, reader.uint32());
          break;

        case 9:
          message.messageType = reader.string();
          break;

        case 10:
          message.typeParam = reader.string();
          break;

        case 11:
          message.type = Type.decode(reader, reader.uint32());
          break;

        case 12:
          message.error = Empty.decode(reader, reader.uint32());
          break;

        case 14:
          message.abstractType = Type_AbstractType.decode(reader, reader.uint32());
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
      dyn: isSet(object.dyn) ? Empty.fromJSON(object.dyn) : undefined,
      null: isSet(object.null) ? nullValueFromJSON(object.null) : undefined,
      primitive: isSet(object.primitive) ? type_PrimitiveTypeFromJSON(object.primitive) : undefined,
      wrapper: isSet(object.wrapper) ? type_PrimitiveTypeFromJSON(object.wrapper) : undefined,
      wellKnown: isSet(object.wellKnown) ? type_WellKnownTypeFromJSON(object.wellKnown) : undefined,
      listType: isSet(object.listType) ? Type_ListType.fromJSON(object.listType) : undefined,
      mapType: isSet(object.mapType) ? Type_MapType.fromJSON(object.mapType) : undefined,
      function: isSet(object.function) ? Type_FunctionType.fromJSON(object.function) : undefined,
      messageType: isSet(object.messageType) ? String(object.messageType) : undefined,
      typeParam: isSet(object.typeParam) ? String(object.typeParam) : undefined,
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      error: isSet(object.error) ? Empty.fromJSON(object.error) : undefined,
      abstractType: isSet(object.abstractType) ? Type_AbstractType.fromJSON(object.abstractType) : undefined
    };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.dyn !== undefined && (obj.dyn = message.dyn ? Empty.toJSON(message.dyn) : undefined);
    message.null !== undefined && (obj.null = nullValueToJSON(message.null));
    message.primitive !== undefined && (obj.primitive = type_PrimitiveTypeToJSON(message.primitive));
    message.wrapper !== undefined && (obj.wrapper = type_PrimitiveTypeToJSON(message.wrapper));
    message.wellKnown !== undefined && (obj.wellKnown = type_WellKnownTypeToJSON(message.wellKnown));
    message.listType !== undefined && (obj.listType = message.listType ? Type_ListType.toJSON(message.listType) : undefined);
    message.mapType !== undefined && (obj.mapType = message.mapType ? Type_MapType.toJSON(message.mapType) : undefined);
    message.function !== undefined && (obj.function = message.function ? Type_FunctionType.toJSON(message.function) : undefined);
    message.messageType !== undefined && (obj.messageType = message.messageType);
    message.typeParam !== undefined && (obj.typeParam = message.typeParam);
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.error !== undefined && (obj.error = message.error ? Empty.toJSON(message.error) : undefined);
    message.abstractType !== undefined && (obj.abstractType = message.abstractType ? Type_AbstractType.toJSON(message.abstractType) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type>, I>>(object: I): Type {
    const message = createBaseType();
    message.dyn = object.dyn !== undefined && object.dyn !== null ? Empty.fromPartial(object.dyn) : undefined;
    message.null = object.null ?? undefined;
    message.primitive = object.primitive ?? undefined;
    message.wrapper = object.wrapper ?? undefined;
    message.wellKnown = object.wellKnown ?? undefined;
    message.listType = object.listType !== undefined && object.listType !== null ? Type_ListType.fromPartial(object.listType) : undefined;
    message.mapType = object.mapType !== undefined && object.mapType !== null ? Type_MapType.fromPartial(object.mapType) : undefined;
    message.function = object.function !== undefined && object.function !== null ? Type_FunctionType.fromPartial(object.function) : undefined;
    message.messageType = object.messageType ?? undefined;
    message.typeParam = object.typeParam ?? undefined;
    message.type = object.type !== undefined && object.type !== null ? Type.fromPartial(object.type) : undefined;
    message.error = object.error !== undefined && object.error !== null ? Empty.fromPartial(object.error) : undefined;
    message.abstractType = object.abstractType !== undefined && object.abstractType !== null ? Type_AbstractType.fromPartial(object.abstractType) : undefined;
    return message;
  }

};

function createBaseType_ListType(): Type_ListType {
  return {
    elemType: undefined
  };
}

export const Type_ListType = {
  encode(message: Type_ListType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elemType !== undefined) {
      Type.encode(message.elemType, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_ListType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_ListType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.elemType = Type.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Type_ListType {
    return {
      elemType: isSet(object.elemType) ? Type.fromJSON(object.elemType) : undefined
    };
  },

  toJSON(message: Type_ListType): unknown {
    const obj: any = {};
    message.elemType !== undefined && (obj.elemType = message.elemType ? Type.toJSON(message.elemType) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type_ListType>, I>>(object: I): Type_ListType {
    const message = createBaseType_ListType();
    message.elemType = object.elemType !== undefined && object.elemType !== null ? Type.fromPartial(object.elemType) : undefined;
    return message;
  }

};

function createBaseType_MapType(): Type_MapType {
  return {
    keyType: undefined,
    valueType: undefined
  };
}

export const Type_MapType = {
  encode(message: Type_MapType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyType !== undefined) {
      Type.encode(message.keyType, writer.uint32(10).fork()).ldelim();
    }

    if (message.valueType !== undefined) {
      Type.encode(message.valueType, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_MapType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_MapType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyType = Type.decode(reader, reader.uint32());
          break;

        case 2:
          message.valueType = Type.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Type_MapType {
    return {
      keyType: isSet(object.keyType) ? Type.fromJSON(object.keyType) : undefined,
      valueType: isSet(object.valueType) ? Type.fromJSON(object.valueType) : undefined
    };
  },

  toJSON(message: Type_MapType): unknown {
    const obj: any = {};
    message.keyType !== undefined && (obj.keyType = message.keyType ? Type.toJSON(message.keyType) : undefined);
    message.valueType !== undefined && (obj.valueType = message.valueType ? Type.toJSON(message.valueType) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type_MapType>, I>>(object: I): Type_MapType {
    const message = createBaseType_MapType();
    message.keyType = object.keyType !== undefined && object.keyType !== null ? Type.fromPartial(object.keyType) : undefined;
    message.valueType = object.valueType !== undefined && object.valueType !== null ? Type.fromPartial(object.valueType) : undefined;
    return message;
  }

};

function createBaseType_FunctionType(): Type_FunctionType {
  return {
    resultType: undefined,
    argTypes: []
  };
}

export const Type_FunctionType = {
  encode(message: Type_FunctionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.argTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_FunctionType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_FunctionType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resultType = Type.decode(reader, reader.uint32());
          break;

        case 2:
          message.argTypes.push(Type.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Type_FunctionType {
    return {
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      argTypes: Array.isArray(object?.argTypes) ? object.argTypes.map((e: any) => Type.fromJSON(e)) : []
    };
  },

  toJSON(message: Type_FunctionType): unknown {
    const obj: any = {};
    message.resultType !== undefined && (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);

    if (message.argTypes) {
      obj.argTypes = message.argTypes.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.argTypes = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type_FunctionType>, I>>(object: I): Type_FunctionType {
    const message = createBaseType_FunctionType();
    message.resultType = object.resultType !== undefined && object.resultType !== null ? Type.fromPartial(object.resultType) : undefined;
    message.argTypes = object.argTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  }

};

function createBaseType_AbstractType(): Type_AbstractType {
  return {
    name: "",
    parameterTypes: []
  };
}

export const Type_AbstractType = {
  encode(message: Type_AbstractType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.parameterTypes) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_AbstractType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_AbstractType();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.parameterTypes.push(Type.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Type_AbstractType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parameterTypes: Array.isArray(object?.parameterTypes) ? object.parameterTypes.map((e: any) => Type.fromJSON(e)) : []
    };
  },

  toJSON(message: Type_AbstractType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.parameterTypes) {
      obj.parameterTypes = message.parameterTypes.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.parameterTypes = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type_AbstractType>, I>>(object: I): Type_AbstractType {
    const message = createBaseType_AbstractType();
    message.name = object.name ?? "";
    message.parameterTypes = object.parameterTypes?.map(e => Type.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDecl(): Decl {
  return {
    name: "",
    ident: undefined,
    function: undefined
  };
}

export const Decl = {
  encode(message: Decl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.ident !== undefined) {
      Decl_IdentDecl.encode(message.ident, writer.uint32(18).fork()).ldelim();
    }

    if (message.function !== undefined) {
      Decl_FunctionDecl.encode(message.function, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.ident = Decl_IdentDecl.decode(reader, reader.uint32());
          break;

        case 3:
          message.function = Decl_FunctionDecl.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Decl {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      ident: isSet(object.ident) ? Decl_IdentDecl.fromJSON(object.ident) : undefined,
      function: isSet(object.function) ? Decl_FunctionDecl.fromJSON(object.function) : undefined
    };
  },

  toJSON(message: Decl): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.ident !== undefined && (obj.ident = message.ident ? Decl_IdentDecl.toJSON(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? Decl_FunctionDecl.toJSON(message.function) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Decl>, I>>(object: I): Decl {
    const message = createBaseDecl();
    message.name = object.name ?? "";
    message.ident = object.ident !== undefined && object.ident !== null ? Decl_IdentDecl.fromPartial(object.ident) : undefined;
    message.function = object.function !== undefined && object.function !== null ? Decl_FunctionDecl.fromPartial(object.function) : undefined;
    return message;
  }

};

function createBaseDecl_IdentDecl(): Decl_IdentDecl {
  return {
    type: undefined,
    value: undefined,
    doc: ""
  };
}

export const Decl_IdentDecl = {
  encode(message: Decl_IdentDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(10).fork()).ldelim();
    }

    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_IdentDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_IdentDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = Type.decode(reader, reader.uint32());
          break;

        case 2:
          message.value = Constant.decode(reader, reader.uint32());
          break;

        case 3:
          message.doc = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Decl_IdentDecl {
    return {
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined,
      doc: isSet(object.doc) ? String(object.doc) : ""
    };
  },

  toJSON(message: Decl_IdentDecl): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Decl_IdentDecl>, I>>(object: I): Decl_IdentDecl {
    const message = createBaseDecl_IdentDecl();
    message.type = object.type !== undefined && object.type !== null ? Type.fromPartial(object.type) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Constant.fromPartial(object.value) : undefined;
    message.doc = object.doc ?? "";
    return message;
  }

};

function createBaseDecl_FunctionDecl(): Decl_FunctionDecl {
  return {
    overloads: []
  };
}

export const Decl_FunctionDecl = {
  encode(message: Decl_FunctionDecl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.overloads) {
      Decl_FunctionDecl_Overload.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.overloads.push(Decl_FunctionDecl_Overload.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Decl_FunctionDecl {
    return {
      overloads: Array.isArray(object?.overloads) ? object.overloads.map((e: any) => Decl_FunctionDecl_Overload.fromJSON(e)) : []
    };
  },

  toJSON(message: Decl_FunctionDecl): unknown {
    const obj: any = {};

    if (message.overloads) {
      obj.overloads = message.overloads.map(e => e ? Decl_FunctionDecl_Overload.toJSON(e) : undefined);
    } else {
      obj.overloads = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Decl_FunctionDecl>, I>>(object: I): Decl_FunctionDecl {
    const message = createBaseDecl_FunctionDecl();
    message.overloads = object.overloads?.map(e => Decl_FunctionDecl_Overload.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDecl_FunctionDecl_Overload(): Decl_FunctionDecl_Overload {
  return {
    overloadId: "",
    params: [],
    typeParams: [],
    resultType: undefined,
    isInstanceFunction: false,
    doc: ""
  };
}

export const Decl_FunctionDecl_Overload = {
  encode(message: Decl_FunctionDecl_Overload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overloadId !== "") {
      writer.uint32(10).string(message.overloadId);
    }

    for (const v of message.params) {
      Type.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.typeParams) {
      writer.uint32(26).string(v!);
    }

    if (message.resultType !== undefined) {
      Type.encode(message.resultType, writer.uint32(34).fork()).ldelim();
    }

    if (message.isInstanceFunction === true) {
      writer.uint32(40).bool(message.isInstanceFunction);
    }

    if (message.doc !== "") {
      writer.uint32(50).string(message.doc);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Decl_FunctionDecl_Overload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl_FunctionDecl_Overload();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.overloadId = reader.string();
          break;

        case 2:
          message.params.push(Type.decode(reader, reader.uint32()));
          break;

        case 3:
          message.typeParams.push(reader.string());
          break;

        case 4:
          message.resultType = Type.decode(reader, reader.uint32());
          break;

        case 5:
          message.isInstanceFunction = reader.bool();
          break;

        case 6:
          message.doc = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Decl_FunctionDecl_Overload {
    return {
      overloadId: isSet(object.overloadId) ? String(object.overloadId) : "",
      params: Array.isArray(object?.params) ? object.params.map((e: any) => Type.fromJSON(e)) : [],
      typeParams: Array.isArray(object?.typeParams) ? object.typeParams.map((e: any) => String(e)) : [],
      resultType: isSet(object.resultType) ? Type.fromJSON(object.resultType) : undefined,
      isInstanceFunction: isSet(object.isInstanceFunction) ? Boolean(object.isInstanceFunction) : false,
      doc: isSet(object.doc) ? String(object.doc) : ""
    };
  },

  toJSON(message: Decl_FunctionDecl_Overload): unknown {
    const obj: any = {};
    message.overloadId !== undefined && (obj.overloadId = message.overloadId);

    if (message.params) {
      obj.params = message.params.map(e => e ? Type.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }

    if (message.typeParams) {
      obj.typeParams = message.typeParams.map(e => e);
    } else {
      obj.typeParams = [];
    }

    message.resultType !== undefined && (obj.resultType = message.resultType ? Type.toJSON(message.resultType) : undefined);
    message.isInstanceFunction !== undefined && (obj.isInstanceFunction = message.isInstanceFunction);
    message.doc !== undefined && (obj.doc = message.doc);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Decl_FunctionDecl_Overload>, I>>(object: I): Decl_FunctionDecl_Overload {
    const message = createBaseDecl_FunctionDecl_Overload();
    message.overloadId = object.overloadId ?? "";
    message.params = object.params?.map(e => Type.fromPartial(e)) || [];
    message.typeParams = object.typeParams?.map(e => e) || [];
    message.resultType = object.resultType !== undefined && object.resultType !== null ? Type.fromPartial(object.resultType) : undefined;
    message.isInstanceFunction = object.isInstanceFunction ?? false;
    message.doc = object.doc ?? "";
    return message;
  }

};

function createBaseReference(): Reference {
  return {
    name: "",
    overloadId: [],
    value: undefined
  };
}

export const Reference = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.overloadId) {
      writer.uint32(26).string(v!);
    }

    if (message.value !== undefined) {
      Constant.encode(message.value, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 3:
          message.overloadId.push(reader.string());
          break;

        case 4:
          message.value = Constant.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Reference {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overloadId: Array.isArray(object?.overloadId) ? object.overloadId.map((e: any) => String(e)) : [],
      value: isSet(object.value) ? Constant.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.overloadId) {
      obj.overloadId = message.overloadId.map(e => e);
    } else {
      obj.overloadId = [];
    }

    message.value !== undefined && (obj.value = message.value ? Constant.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Reference>, I>>(object: I): Reference {
    const message = createBaseReference();
    message.name = object.name ?? "";
    message.overloadId = object.overloadId?.map(e => e) || [];
    message.value = object.value !== undefined && object.value !== null ? Constant.fromPartial(object.value) : undefined;
    return message;
  }

};