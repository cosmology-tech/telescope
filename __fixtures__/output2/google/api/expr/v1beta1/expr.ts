//@ts-nocheck
/* eslint-disable */
import { SourceInfo } from "./source";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.expr.v1beta1";
/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
  /** The parsed expression. */
  expr: Expr;
  /** The source info derived from input that generated the parsed `expr`. */
  sourceInfo: SourceInfo;
  /** The syntax version of the source, e.g. `cel1`. */
  syntaxVersion: string;
}
/**
 * An abstract representation of a common expression.
 * 
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 * 
 * All references within expressions must resolve to a [Decl][google.api.expr.v1beta1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 * 
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface Expr {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id: number;
  /** A literal expression. */
  literalExpr?: Literal;
  /** An identifier expression. */
  identExpr?: Expr_Ident;
  /** A field selection expression, e.g. `request.auth`. */
  selectExpr?: Expr_Select;
  /** A call expression, including calls to predefined functions and operators. */
  callExpr?: Expr_Call;
  /** A list creation expression. */
  listExpr?: Expr_CreateList;
  /** A map or object creation expression. */
  structExpr?: Expr_CreateStruct;
  /** A comprehension expression. */
  comprehensionExpr?: Expr_Comprehension;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
  /**
   * Required. Holds a single, unqualified identifier, possibly preceded by a
   * '.'.
   * 
   * Qualified names are represented by the [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression.
   */
  name: string;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
  /**
   * Required. The target of the selection expression.
   * 
   * For example, in the select expression `request.auth`, the `request`
   * portion of the expression is the `operand`.
   */
  operand: Expr;
  /**
   * Required. The name of the field to select.
   * 
   * For example, in the select expression `request.auth`, the `auth` portion
   * of the expression would be the `field`.
   */
  field: string;
  /**
   * Whether the select is to be interpreted as a field presence test.
   * 
   * This results from the macro `has(request.auth)`.
   */
  testOnly: boolean;
}
/**
 * A call expression, including calls to predefined functions and operators.
 * 
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
  /**
   * The target of an method call-style expression. For example, `x` in
   * `x.f()`.
   */
  target: Expr;
  /** Required. The name of the function or method being called. */
  function: string;
  /** The arguments. */
  args: Expr[];
}
/**
 * A list creation expression.
 * 
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogenous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
  /** The elements part of the list. */
  elements: Expr[];
}
/**
 * A map or message creation expression.
 * 
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
  /**
   * The type name of the message to be created, empty when creating map
   * literals.
   */
  type: string;
  /** The entries in the creation expression. */
  entries: Expr_CreateStruct_Entry[];
}
/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id: number;
  /** The field key for a message creator statement. */
  fieldKey?: string;
  /** The key expression for a map creation statement. */
  mapKey?: Expr;
  /** Required. The value assigned to the key. */
  value: Expr;
}
/**
 * A comprehension expression applied to a list or map.
 * 
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 * 
 * The following macros are supported within CEL:
 * 
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 * 
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 * 
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_Comprehension {
  /** The name of the iteration variable. */
  iterVar: string;
  /** The range over which var iterates. */
  iterRange: Expr;
  /** The name of the variable used for accumulation of the result. */
  accuVar: string;
  /** The initial value of the accumulator. */
  accuInit: Expr;
  /**
   * An expression which can contain iter_var and accu_var.
   * 
   * Returns false when the result has been computed and may be used as
   * a hint to short-circuit the remainder of the comprehension.
   */
  loopCondition: Expr;
  /**
   * An expression which can contain iter_var and accu_var.
   * 
   * Computes the next value of accu_var.
   */
  loopStep: Expr;
  /**
   * An expression which can contain accu_var.
   * 
   * Computes the result.
   */
  result: Expr;
}
/**
 * Represents a primitive literal.
 * 
 * This is similar to the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 * 
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1beta1.Expr] elements which require evaluation and are thus not constant.
 * 
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Literal {
  /** null value. */
  nullValue?: NullValue;
  /** boolean value. */
  boolValue?: boolean;
  /** int64 value. */
  int64Value?: Long;
  /** uint64 value. */
  uint64Value?: Long;
  /** double value. */
  doubleValue?: number;
  /** string value. */
  stringValue?: string;
  /** bytes value. */
  bytesValue?: Uint8Array;
}
function createBaseParsedExpr(): ParsedExpr {
  return {
    expr: Expr.fromPartial({}),
    sourceInfo: SourceInfo.fromPartial({}),
    syntaxVersion: ""
  };
}
export const ParsedExpr = {
  encode(message: ParsedExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.syntaxVersion !== "") {
      writer.uint32(34).string(message.syntaxVersion);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParsedExpr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.syntaxVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParsedExpr {
    const obj = createBaseParsedExpr();
    if (isSet(object.expr)) obj.expr = Expr.fromJSON(object.expr);
    if (isSet(object.sourceInfo)) obj.sourceInfo = SourceInfo.fromJSON(object.sourceInfo);
    if (isSet(object.syntaxVersion)) obj.syntaxVersion = String(object.syntaxVersion);
    return obj;
  },
  toJSON(message: ParsedExpr): unknown {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.syntaxVersion !== undefined && (obj.syntaxVersion = message.syntaxVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<ParsedExpr>): ParsedExpr {
    const message = createBaseParsedExpr();
    message.expr = object.expr !== undefined && object.expr !== null ? Expr.fromPartial(object.expr) : Expr.fromPartial({});
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : SourceInfo.fromPartial({});
    message.syntaxVersion = object.syntaxVersion ?? "";
    return message;
  }
};
function createBaseExpr(): Expr {
  return {
    id: 0,
    literalExpr: undefined,
    identExpr: undefined,
    selectExpr: undefined,
    callExpr: undefined,
    listExpr: undefined,
    structExpr: undefined,
    comprehensionExpr: undefined
  };
}
export const Expr = {
  encode(message: Expr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.literalExpr !== undefined) {
      Literal.encode(message.literalExpr, writer.uint32(26).fork()).ldelim();
    }
    if (message.identExpr !== undefined) {
      Expr_Ident.encode(message.identExpr, writer.uint32(34).fork()).ldelim();
    }
    if (message.selectExpr !== undefined) {
      Expr_Select.encode(message.selectExpr, writer.uint32(42).fork()).ldelim();
    }
    if (message.callExpr !== undefined) {
      Expr_Call.encode(message.callExpr, writer.uint32(50).fork()).ldelim();
    }
    if (message.listExpr !== undefined) {
      Expr_CreateList.encode(message.listExpr, writer.uint32(58).fork()).ldelim();
    }
    if (message.structExpr !== undefined) {
      Expr_CreateStruct.encode(message.structExpr, writer.uint32(66).fork()).ldelim();
    }
    if (message.comprehensionExpr !== undefined) {
      Expr_Comprehension.encode(message.comprehensionExpr, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = reader.int32();
          break;
        case 3:
          message.literalExpr = Literal.decode(reader, reader.uint32());
          break;
        case 4:
          message.identExpr = Expr_Ident.decode(reader, reader.uint32());
          break;
        case 5:
          message.selectExpr = Expr_Select.decode(reader, reader.uint32());
          break;
        case 6:
          message.callExpr = Expr_Call.decode(reader, reader.uint32());
          break;
        case 7:
          message.listExpr = Expr_CreateList.decode(reader, reader.uint32());
          break;
        case 8:
          message.structExpr = Expr_CreateStruct.decode(reader, reader.uint32());
          break;
        case 9:
          message.comprehensionExpr = Expr_Comprehension.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr {
    const obj = createBaseExpr();
    if (isSet(object.id)) obj.id = Number(object.id);
    if (isSet(object.literalExpr)) obj.literalExpr = Literal.fromJSON(object.literalExpr);
    if (isSet(object.identExpr)) obj.identExpr = Expr_Ident.fromJSON(object.identExpr);
    if (isSet(object.selectExpr)) obj.selectExpr = Expr_Select.fromJSON(object.selectExpr);
    if (isSet(object.callExpr)) obj.callExpr = Expr_Call.fromJSON(object.callExpr);
    if (isSet(object.listExpr)) obj.listExpr = Expr_CreateList.fromJSON(object.listExpr);
    if (isSet(object.structExpr)) obj.structExpr = Expr_CreateStruct.fromJSON(object.structExpr);
    if (isSet(object.comprehensionExpr)) obj.comprehensionExpr = Expr_Comprehension.fromJSON(object.comprehensionExpr);
    return obj;
  },
  toJSON(message: Expr): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.literalExpr !== undefined && (obj.literalExpr = message.literalExpr ? Literal.toJSON(message.literalExpr) : undefined);
    message.identExpr !== undefined && (obj.identExpr = message.identExpr ? Expr_Ident.toJSON(message.identExpr) : undefined);
    message.selectExpr !== undefined && (obj.selectExpr = message.selectExpr ? Expr_Select.toJSON(message.selectExpr) : undefined);
    message.callExpr !== undefined && (obj.callExpr = message.callExpr ? Expr_Call.toJSON(message.callExpr) : undefined);
    message.listExpr !== undefined && (obj.listExpr = message.listExpr ? Expr_CreateList.toJSON(message.listExpr) : undefined);
    message.structExpr !== undefined && (obj.structExpr = message.structExpr ? Expr_CreateStruct.toJSON(message.structExpr) : undefined);
    message.comprehensionExpr !== undefined && (obj.comprehensionExpr = message.comprehensionExpr ? Expr_Comprehension.toJSON(message.comprehensionExpr) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr>): Expr {
    const message = createBaseExpr();
    message.id = object.id ?? 0;
    message.literalExpr = object.literalExpr !== undefined && object.literalExpr !== null ? Literal.fromPartial(object.literalExpr) : Literal.fromPartial({});
    message.identExpr = object.identExpr !== undefined && object.identExpr !== null ? Expr_Ident.fromPartial(object.identExpr) : Expr_Ident.fromPartial({});
    message.selectExpr = object.selectExpr !== undefined && object.selectExpr !== null ? Expr_Select.fromPartial(object.selectExpr) : Expr_Select.fromPartial({});
    message.callExpr = object.callExpr !== undefined && object.callExpr !== null ? Expr_Call.fromPartial(object.callExpr) : Expr_Call.fromPartial({});
    message.listExpr = object.listExpr !== undefined && object.listExpr !== null ? Expr_CreateList.fromPartial(object.listExpr) : Expr_CreateList.fromPartial({});
    message.structExpr = object.structExpr !== undefined && object.structExpr !== null ? Expr_CreateStruct.fromPartial(object.structExpr) : Expr_CreateStruct.fromPartial({});
    message.comprehensionExpr = object.comprehensionExpr !== undefined && object.comprehensionExpr !== null ? Expr_Comprehension.fromPartial(object.comprehensionExpr) : Expr_Comprehension.fromPartial({});
    return message;
  }
};
function createBaseExpr_Ident(): Expr_Ident {
  return {
    name: ""
  };
}
export const Expr_Ident = {
  encode(message: Expr_Ident, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Ident {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Ident();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Ident {
    const obj = createBaseExpr_Ident();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: Expr_Ident): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Ident>): Expr_Ident {
    const message = createBaseExpr_Ident();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseExpr_Select(): Expr_Select {
  return {
    operand: Expr.fromPartial({}),
    field: "",
    testOnly: false
  };
}
export const Expr_Select = {
  encode(message: Expr_Select, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operand !== undefined) {
      Expr.encode(message.operand, writer.uint32(10).fork()).ldelim();
    }
    if (message.field !== "") {
      writer.uint32(18).string(message.field);
    }
    if (message.testOnly === true) {
      writer.uint32(24).bool(message.testOnly);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Select {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Select();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operand = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.field = reader.string();
          break;
        case 3:
          message.testOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Select {
    const obj = createBaseExpr_Select();
    if (isSet(object.operand)) obj.operand = Expr.fromJSON(object.operand);
    if (isSet(object.field)) obj.field = String(object.field);
    if (isSet(object.testOnly)) obj.testOnly = Boolean(object.testOnly);
    return obj;
  },
  toJSON(message: Expr_Select): unknown {
    const obj: any = {};
    message.operand !== undefined && (obj.operand = message.operand ? Expr.toJSON(message.operand) : undefined);
    message.field !== undefined && (obj.field = message.field);
    message.testOnly !== undefined && (obj.testOnly = message.testOnly);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Select>): Expr_Select {
    const message = createBaseExpr_Select();
    message.operand = object.operand !== undefined && object.operand !== null ? Expr.fromPartial(object.operand) : Expr.fromPartial({});
    message.field = object.field ?? "";
    message.testOnly = object.testOnly ?? false;
    return message;
  }
};
function createBaseExpr_Call(): Expr_Call {
  return {
    target: Expr.fromPartial({}),
    function: "",
    args: []
  };
}
export const Expr_Call = {
  encode(message: Expr_Call, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== undefined) {
      Expr.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.args) {
      Expr.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Call {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Call();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.function = reader.string();
          break;
        case 3:
          message.args.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Call {
    const obj = createBaseExpr_Call();
    if (isSet(object.target)) obj.target = Expr.fromJSON(object.target);
    if (isSet(object.function)) obj.function = String(object.function);
    if (Array.isArray(object?.args)) object.args.map((e: any) => Expr.fromJSON(e));
    return obj;
  },
  toJSON(message: Expr_Call): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target ? Expr.toJSON(message.target) : undefined);
    message.function !== undefined && (obj.function = message.function);
    if (message.args) {
      obj.args = message.args.map(e => e ? Expr.toJSON(e) : undefined);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Call>): Expr_Call {
    const message = createBaseExpr_Call();
    message.target = object.target !== undefined && object.target !== null ? Expr.fromPartial(object.target) : Expr.fromPartial({});
    message.function = object.function ?? "";
    message.args = object.args?.map(e => Expr.fromPartial(e)) || [];
    return message;
  }
};
function createBaseExpr_CreateList(): Expr_CreateList {
  return {
    elements: []
  };
}
export const Expr_CreateList = {
  encode(message: Expr_CreateList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      Expr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elements.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateList {
    const obj = createBaseExpr_CreateList();
    if (Array.isArray(object?.elements)) object.elements.map((e: any) => Expr.fromJSON(e));
    return obj;
  },
  toJSON(message: Expr_CreateList): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map(e => e ? Expr.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateList>): Expr_CreateList {
    const message = createBaseExpr_CreateList();
    message.elements = object.elements?.map(e => Expr.fromPartial(e)) || [];
    return message;
  }
};
function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return {
    type: "",
    entries: []
  };
}
export const Expr_CreateStruct = {
  encode(message: Expr_CreateStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.entries) {
      Expr_CreateStruct_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.entries.push(Expr_CreateStruct_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateStruct {
    const obj = createBaseExpr_CreateStruct();
    if (isSet(object.type)) obj.type = String(object.type);
    if (Array.isArray(object?.entries)) object.entries.map((e: any) => Expr_CreateStruct_Entry.fromJSON(e));
    return obj;
  },
  toJSON(message: Expr_CreateStruct): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Expr_CreateStruct_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct>): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    message.type = object.type ?? "";
    message.entries = object.entries?.map(e => Expr_CreateStruct_Entry.fromPartial(e)) || [];
    return message;
  }
};
function createBaseExpr_CreateStruct_Entry(): Expr_CreateStruct_Entry {
  return {
    id: 0,
    fieldKey: undefined,
    mapKey: undefined,
    value: Expr.fromPartial({})
  };
}
export const Expr_CreateStruct_Entry = {
  encode(message: Expr_CreateStruct_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.fieldKey !== undefined) {
      writer.uint32(18).string(message.fieldKey);
    }
    if (message.mapKey !== undefined) {
      Expr.encode(message.mapKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.fieldKey = reader.string();
          break;
        case 3:
          message.mapKey = Expr.decode(reader, reader.uint32());
          break;
        case 4:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateStruct_Entry {
    const obj = createBaseExpr_CreateStruct_Entry();
    if (isSet(object.id)) obj.id = Number(object.id);
    if (isSet(object.fieldKey)) obj.fieldKey = String(object.fieldKey);
    if (isSet(object.mapKey)) obj.mapKey = Expr.fromJSON(object.mapKey);
    if (isSet(object.value)) obj.value = Expr.fromJSON(object.value);
    return obj;
  },
  toJSON(message: Expr_CreateStruct_Entry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.fieldKey !== undefined && (obj.fieldKey = message.fieldKey);
    message.mapKey !== undefined && (obj.mapKey = message.mapKey ? Expr.toJSON(message.mapKey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct_Entry>): Expr_CreateStruct_Entry {
    const message = createBaseExpr_CreateStruct_Entry();
    message.id = object.id ?? 0;
    message.fieldKey = object.fieldKey ?? undefined;
    message.mapKey = object.mapKey !== undefined && object.mapKey !== null ? Expr.fromPartial(object.mapKey) : Expr.fromPartial({});
    message.value = object.value !== undefined && object.value !== null ? Expr.fromPartial(object.value) : Expr.fromPartial({});
    return message;
  }
};
function createBaseExpr_Comprehension(): Expr_Comprehension {
  return {
    iterVar: "",
    iterRange: Expr.fromPartial({}),
    accuVar: "",
    accuInit: Expr.fromPartial({}),
    loopCondition: Expr.fromPartial({}),
    loopStep: Expr.fromPartial({}),
    result: Expr.fromPartial({})
  };
}
export const Expr_Comprehension = {
  encode(message: Expr_Comprehension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iterVar !== "") {
      writer.uint32(10).string(message.iterVar);
    }
    if (message.iterRange !== undefined) {
      Expr.encode(message.iterRange, writer.uint32(18).fork()).ldelim();
    }
    if (message.accuVar !== "") {
      writer.uint32(26).string(message.accuVar);
    }
    if (message.accuInit !== undefined) {
      Expr.encode(message.accuInit, writer.uint32(34).fork()).ldelim();
    }
    if (message.loopCondition !== undefined) {
      Expr.encode(message.loopCondition, writer.uint32(42).fork()).ldelim();
    }
    if (message.loopStep !== undefined) {
      Expr.encode(message.loopStep, writer.uint32(50).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Expr.encode(message.result, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Comprehension {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Comprehension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iterVar = reader.string();
          break;
        case 2:
          message.iterRange = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.accuVar = reader.string();
          break;
        case 4:
          message.accuInit = Expr.decode(reader, reader.uint32());
          break;
        case 5:
          message.loopCondition = Expr.decode(reader, reader.uint32());
          break;
        case 6:
          message.loopStep = Expr.decode(reader, reader.uint32());
          break;
        case 7:
          message.result = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Comprehension {
    const obj = createBaseExpr_Comprehension();
    if (isSet(object.iterVar)) obj.iterVar = String(object.iterVar);
    if (isSet(object.iterRange)) obj.iterRange = Expr.fromJSON(object.iterRange);
    if (isSet(object.accuVar)) obj.accuVar = String(object.accuVar);
    if (isSet(object.accuInit)) obj.accuInit = Expr.fromJSON(object.accuInit);
    if (isSet(object.loopCondition)) obj.loopCondition = Expr.fromJSON(object.loopCondition);
    if (isSet(object.loopStep)) obj.loopStep = Expr.fromJSON(object.loopStep);
    if (isSet(object.result)) obj.result = Expr.fromJSON(object.result);
    return obj;
  },
  toJSON(message: Expr_Comprehension): unknown {
    const obj: any = {};
    message.iterVar !== undefined && (obj.iterVar = message.iterVar);
    message.iterRange !== undefined && (obj.iterRange = message.iterRange ? Expr.toJSON(message.iterRange) : undefined);
    message.accuVar !== undefined && (obj.accuVar = message.accuVar);
    message.accuInit !== undefined && (obj.accuInit = message.accuInit ? Expr.toJSON(message.accuInit) : undefined);
    message.loopCondition !== undefined && (obj.loopCondition = message.loopCondition ? Expr.toJSON(message.loopCondition) : undefined);
    message.loopStep !== undefined && (obj.loopStep = message.loopStep ? Expr.toJSON(message.loopStep) : undefined);
    message.result !== undefined && (obj.result = message.result ? Expr.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Comprehension>): Expr_Comprehension {
    const message = createBaseExpr_Comprehension();
    message.iterVar = object.iterVar ?? "";
    message.iterRange = object.iterRange !== undefined && object.iterRange !== null ? Expr.fromPartial(object.iterRange) : Expr.fromPartial({});
    message.accuVar = object.accuVar ?? "";
    message.accuInit = object.accuInit !== undefined && object.accuInit !== null ? Expr.fromPartial(object.accuInit) : Expr.fromPartial({});
    message.loopCondition = object.loopCondition !== undefined && object.loopCondition !== null ? Expr.fromPartial(object.loopCondition) : Expr.fromPartial({});
    message.loopStep = object.loopStep !== undefined && object.loopStep !== null ? Expr.fromPartial(object.loopStep) : Expr.fromPartial({});
    message.result = object.result !== undefined && object.result !== null ? Expr.fromPartial(object.result) : Expr.fromPartial({});
    return message;
  }
};
function createBaseLiteral(): Literal {
  return {
    nullValue: undefined,
    boolValue: undefined,
    int64Value: undefined,
    uint64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    bytesValue: undefined
  };
}
export const Literal = {
  encode(message: Literal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Literal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiteral();
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
          message.int64Value = (reader.int64() as Long);
          break;
        case 4:
          message.uint64Value = (reader.uint64() as Long);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Literal {
    const obj = createBaseLiteral();
    if (isSet(object.nullValue)) obj.nullValue = nullValueFromJSON(object.nullValue);
    if (isSet(object.boolValue)) obj.boolValue = Boolean(object.boolValue);
    if (isSet(object.int64Value)) obj.int64Value = Long.fromValue(object.int64Value);
    if (isSet(object.uint64Value)) obj.uint64Value = Long.fromValue(object.uint64Value);
    if (isSet(object.doubleValue)) obj.doubleValue = Number(object.doubleValue);
    if (isSet(object.stringValue)) obj.stringValue = String(object.stringValue);
    if (isSet(object.bytesValue)) obj.bytesValue = bytesFromBase64(object.bytesValue);
    return obj;
  },
  toJSON(message: Literal): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || undefined).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined && (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Literal>): Literal {
    const message = createBaseLiteral();
    message.nullValue = object.nullValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : undefined;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? Long.fromValue(object.uint64Value) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    return message;
  }
};