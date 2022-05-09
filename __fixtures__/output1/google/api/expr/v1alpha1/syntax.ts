import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Duration } from "../../../protobuf/duration";
import { Timestamp } from "../../../protobuf/timestamp";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, Long, toDuration, toTimestamp, fromDuration, fromTimestamp, bytesFromBase64, fromJsonTimestamp, base64FromBytes, isObject } from "@osmonauts/helpers";
export interface ParsedExpr {
  expr: Expr;
  sourceInfo: SourceInfo;
}

function createBaseParsedExpr(): ParsedExpr {
  return {
    expr: undefined,
    sourceInfo: undefined
  };
}

export const ParsedExpr = {
  encode(message: ParsedExpr, writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }

    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParsedExpr {
    return {
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined,
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined
    };
  },

  toJSON(message: ParsedExpr): unknown {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParsedExpr>, I>>(object: I): ParsedExpr {
    const message = createBaseParsedExpr();
    message.expr = object.expr !== undefined && object.expr !== null ? Expr.fromPartial(object.expr) : undefined;
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : undefined;
    return message;
  }

};
export interface Expr {
  id: Long;
  constExpr?: Constant;
  identExpr?: Expr_Ident;
  selectExpr?: Expr_Select;
  callExpr?: Expr_Call;
  listExpr?: Expr_CreateList;
  structExpr?: Expr_CreateStruct;
  comprehensionExpr?: Expr_Comprehension;
}

function createBaseExpr(): Expr {
  return {
    id: Long.UZERO,
    constExpr: undefined,
    identExpr: undefined,
    selectExpr: undefined,
    callExpr: undefined,
    listExpr: undefined,
    structExpr: undefined,
    comprehensionExpr: undefined
  };
}

export const Expr = {
  encode(message: Expr, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(16).int64(message.id);
    }

    if (message.constExpr !== undefined) {
      Constant.encode(message.constExpr, writer.uint32(26).fork()).ldelim();
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
          message.id = (reader.int64() as Long);
          break;

        case 3:
          message.constExpr = Constant.decode(reader, reader.uint32());
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
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.ZERO,
      constExpr: isSet(object.constExpr) ? Constant.fromJSON(object.constExpr) : undefined,
      identExpr: isSet(object.identExpr) ? Expr_Ident.fromJSON(object.identExpr) : undefined,
      selectExpr: isSet(object.selectExpr) ? Expr_Select.fromJSON(object.selectExpr) : undefined,
      callExpr: isSet(object.callExpr) ? Expr_Call.fromJSON(object.callExpr) : undefined,
      listExpr: isSet(object.listExpr) ? Expr_CreateList.fromJSON(object.listExpr) : undefined,
      structExpr: isSet(object.structExpr) ? Expr_CreateStruct.fromJSON(object.structExpr) : undefined,
      comprehensionExpr: isSet(object.comprehensionExpr) ? Expr_Comprehension.fromJSON(object.comprehensionExpr) : undefined
    };
  },

  toJSON(message: Expr): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.constExpr !== undefined && (obj.constExpr = message.constExpr ? Constant.toJSON(message.constExpr) : undefined);
    message.identExpr !== undefined && (obj.identExpr = message.identExpr ? Expr_Ident.toJSON(message.identExpr) : undefined);
    message.selectExpr !== undefined && (obj.selectExpr = message.selectExpr ? Expr_Select.toJSON(message.selectExpr) : undefined);
    message.callExpr !== undefined && (obj.callExpr = message.callExpr ? Expr_Call.toJSON(message.callExpr) : undefined);
    message.listExpr !== undefined && (obj.listExpr = message.listExpr ? Expr_CreateList.toJSON(message.listExpr) : undefined);
    message.structExpr !== undefined && (obj.structExpr = message.structExpr ? Expr_CreateStruct.toJSON(message.structExpr) : undefined);
    message.comprehensionExpr !== undefined && (obj.comprehensionExpr = message.comprehensionExpr ? Expr_Comprehension.toJSON(message.comprehensionExpr) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Expr>, I>>(object: I): Expr {
    const message = createBaseExpr();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.constExpr = object.constExpr !== undefined && object.constExpr !== null ? Constant.fromPartial(object.constExpr) : undefined;
    message.identExpr = object.identExpr !== undefined && object.identExpr !== null ? Ident.fromPartial(object.identExpr) : undefined;
    message.selectExpr = object.selectExpr !== undefined && object.selectExpr !== null ? Select.fromPartial(object.selectExpr) : undefined;
    message.callExpr = object.callExpr !== undefined && object.callExpr !== null ? Call.fromPartial(object.callExpr) : undefined;
    message.listExpr = object.listExpr !== undefined && object.listExpr !== null ? CreateList.fromPartial(object.listExpr) : undefined;
    message.structExpr = object.structExpr !== undefined && object.structExpr !== null ? CreateStruct.fromPartial(object.structExpr) : undefined;
    message.comprehensionExpr = object.comprehensionExpr !== undefined && object.comprehensionExpr !== null ? Comprehension.fromPartial(object.comprehensionExpr) : undefined;
    return message;
  }

};
export interface Expr_Ident {
  name: string;
}

function createBaseExpr_Ident(): Expr_Ident {
  return {
    name: ""
  };
}

export const Expr_Ident = {
  encode(message: Expr_Ident, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: Expr_Ident): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Expr_Ident>, I>>(object: I): Expr_Ident {
    const message = createBaseExpr_Ident();
    message.name = object.name ?? "";
    return message;
  }

};
export interface Expr_Select {
  operand: Expr;
  field: string;
  testOnly: boolean;
}

function createBaseExpr_Select(): Expr_Select {
  return {
    operand: undefined,
    field: "",
    testOnly: false
  };
}

export const Expr_Select = {
  encode(message: Expr_Select, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      operand: isSet(object.operand) ? Expr.fromJSON(object.operand) : undefined,
      field: isSet(object.field) ? String(object.field) : "",
      testOnly: isSet(object.testOnly) ? Boolean(object.testOnly) : false
    };
  },

  toJSON(message: Expr_Select): unknown {
    const obj: any = {};
    message.operand !== undefined && (obj.operand = message.operand ? Expr.toJSON(message.operand) : undefined);
    message.field !== undefined && (obj.field = message.field);
    message.testOnly !== undefined && (obj.testOnly = message.testOnly);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Expr_Select>, I>>(object: I): Expr_Select {
    const message = createBaseExpr_Select();
    message.operand = object.operand !== undefined && object.operand !== null ? Expr.fromPartial(object.operand) : undefined;
    message.field = object.field ?? "";
    message.testOnly = object.testOnly ?? false;
    return message;
  }

};
export interface Expr_Call {
  target: Expr;
  function: string;
  args: Expr[];
}

function createBaseExpr_Call(): Expr_Call {
  return {
    target: undefined,
    function: "",
    args: []
  };
}

export const Expr_Call = {
  encode(message: Expr_Call, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      target: isSet(object.target) ? Expr.fromJSON(object.target) : undefined,
      function: isSet(object.function) ? String(object.function) : "",
      args: Array.isArray(object?.args) ? object.args.map((e: any) => Expr.fromJSON(e)) : []
    };
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

  fromPartial<I extends Exact<DeepPartial<Expr_Call>, I>>(object: I): Expr_Call {
    const message = createBaseExpr_Call();
    message.target = object.target !== undefined && object.target !== null ? Expr.fromPartial(object.target) : undefined;
    message.function = object.function ?? "";
    message.args = object.args?.map(e => Expr.fromPartial(e)) || [];
    return message;
  }

};
export interface Expr_CreateList {
  elements: Expr[];
}

function createBaseExpr_CreateList(): Expr_CreateList {
  return {
    elements: []
  };
}

export const Expr_CreateList = {
  encode(message: Expr_CreateList, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      elements: Array.isArray(object?.elements) ? object.elements.map((e: any) => Expr.fromJSON(e)) : []
    };
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

  fromPartial<I extends Exact<DeepPartial<Expr_CreateList>, I>>(object: I): Expr_CreateList {
    const message = createBaseExpr_CreateList();
    message.elements = object.elements?.map(e => Expr.fromPartial(e)) || [];
    return message;
  }

};
export interface Expr_CreateStruct {
  messageName: string;
  entries: CreateStruct_Expr_Entry[];
}

function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return {
    messageName: "",
    entries: []
  };
}

export const Expr_CreateStruct = {
  encode(message: Expr_CreateStruct, writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }

    for (const v of message.entries) {
      CreateStruct_Expr_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.messageName = reader.string();
          break;

        case 2:
          message.entries.push(CreateStruct_Expr_Entry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Expr_CreateStruct {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CreateStruct_Expr_Entry.fromJSON(e)) : []
    };
  },

  toJSON(message: Expr_CreateStruct): unknown {
    const obj: any = {};
    message.messageName !== undefined && (obj.messageName = message.messageName);

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? CreateStruct_Expr_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Expr_CreateStruct>, I>>(object: I): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    message.messageName = object.messageName ?? "";
    message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
    return message;
  }

};
export interface Entry {
  id: Long;
  fieldKey?: string;
  mapKey?: Expr;
  value: Expr;
}

function createBaseEntry(): Entry {
  return {
    id: Long.UZERO,
    fieldKey: "",
    mapKey: undefined,
    value: undefined
  };
}

export const Entry = {
  encode(message: Entry, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }

    if (message.fieldKey !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.int64() as Long);
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

  fromJSON(object: any): Entry {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.ZERO,
      fieldKey: isSet(object.fieldKey) ? String(object.fieldKey) : "",
      mapKey: isSet(object.mapKey) ? Expr.fromJSON(object.mapKey) : undefined,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.fieldKey !== undefined && (obj.fieldKey = message.fieldKey);
    message.mapKey !== undefined && (obj.mapKey = message.mapKey ? Expr.toJSON(message.mapKey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Entry>, I>>(object: I): Entry {
    const message = createBaseEntry();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.fieldKey = object.fieldKey ?? "";
    message.mapKey = object.mapKey !== undefined && object.mapKey !== null ? Expr.fromPartial(object.mapKey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Expr.fromPartial(object.value) : undefined;
    return message;
  }

};
export interface Expr_Comprehension {
  iterVar: string;
  iterRange: Expr;
  accuVar: string;
  accuInit: Expr;
  loopCondition: Expr;
  loopStep: Expr;
  result: Expr;
}

function createBaseExpr_Comprehension(): Expr_Comprehension {
  return {
    iterVar: "",
    iterRange: undefined,
    accuVar: "",
    accuInit: undefined,
    loopCondition: undefined,
    loopStep: undefined,
    result: undefined
  };
}

export const Expr_Comprehension = {
  encode(message: Expr_Comprehension, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      iterVar: isSet(object.iterVar) ? String(object.iterVar) : "",
      iterRange: isSet(object.iterRange) ? Expr.fromJSON(object.iterRange) : undefined,
      accuVar: isSet(object.accuVar) ? String(object.accuVar) : "",
      accuInit: isSet(object.accuInit) ? Expr.fromJSON(object.accuInit) : undefined,
      loopCondition: isSet(object.loopCondition) ? Expr.fromJSON(object.loopCondition) : undefined,
      loopStep: isSet(object.loopStep) ? Expr.fromJSON(object.loopStep) : undefined,
      result: isSet(object.result) ? Expr.fromJSON(object.result) : undefined
    };
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

  fromPartial<I extends Exact<DeepPartial<Expr_Comprehension>, I>>(object: I): Expr_Comprehension {
    const message = createBaseExpr_Comprehension();
    message.iterVar = object.iterVar ?? "";
    message.iterRange = object.iterRange !== undefined && object.iterRange !== null ? Expr.fromPartial(object.iterRange) : undefined;
    message.accuVar = object.accuVar ?? "";
    message.accuInit = object.accuInit !== undefined && object.accuInit !== null ? Expr.fromPartial(object.accuInit) : undefined;
    message.loopCondition = object.loopCondition !== undefined && object.loopCondition !== null ? Expr.fromPartial(object.loopCondition) : undefined;
    message.loopStep = object.loopStep !== undefined && object.loopStep !== null ? Expr.fromPartial(object.loopStep) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Expr.fromPartial(object.result) : undefined;
    return message;
  }

};
export interface Constant {
  nullValue?: NullValue;
  boolValue?: boolean;
  int64Value?: Long;
  uint64Value?: Long;
  doubleValue?: number;
  stringValue?: string;
  bytesValue?: Uint8Array;
  durationValue?: string;
  timestampValue?: Date;
}

function createBaseConstant(): Constant {
  return {
    nullValue: undefined,
    boolValue: false,
    int64Value: Long.UZERO,
    uint64Value: Long.UZERO,
    doubleValue: 0,
    stringValue: "",
    bytesValue: new Uint8Array(),
    durationValue: undefined,
    timestampValue: undefined
  };
}

export const Constant = {
  encode(message: Constant, writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== 0) {
      writer.uint32(8).int32(message.nullValue);
    }

    if (message.boolValue === true) {
      writer.uint32(16).bool(message.boolValue);
    }

    if (!message.int64Value.isZero()) {
      writer.uint32(24).int64(message.int64Value);
    }

    if (!message.uint64Value.isZero()) {
      writer.uint32(32).uint64(message.uint64Value);
    }

    if (message.doubleValue !== 0) {
      writer.uint32(41).double(message.doubleValue);
    }

    if (message.stringValue !== "") {
      writer.uint32(50).string(message.stringValue);
    }

    if (message.bytesValue.length !== 0) {
      writer.uint32(58).bytes(message.bytesValue);
    }

    if (message.durationValue !== undefined) Duration.encode(toDuration(message.durationValue), writer.uint32(66).fork()).ldelim();
    if (message.timestampValue !== undefined) Timestamp.encode(toTimestamp(message.timestampValue), writer.uint32(74).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Constant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstant();

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

        case 8:
          message.durationValue = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 9:
          message.timestampValue = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Constant {
    return {
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : 0,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : false,
      int64Value: isSet(object.int64Value) ? Long.fromString(object.int64Value) : Long.ZERO,
      uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : Long.UZERO,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : 0,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : "",
      bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : new Uint8Array(),
      durationValue: isSet(object.durationValue) ? String(object.durationValue) : undefined,
      timestampValue: isSet(object.timestampValue) ? fromJsonTimestamp(object.timestampValue) : undefined
    };
  },

  toJSON(message: Constant): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || Long.ZERO).toString());
    message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || Long.UZERO).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined && (obj.bytesValue = base64FromBytes(message.bytesValue !== undefined ? message.bytesValue : new Uint8Array()));
    message.durationValue !== undefined && (obj.durationValue = message.durationValue);
    message.timestampValue !== undefined && (obj.timestampValue = message.timestampValue.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Constant>, I>>(object: I): Constant {
    const message = createBaseConstant();
    message.nullValue = object.nullValue ?? 0;
    message.boolValue = object.boolValue ?? false;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : Long.ZERO;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? Long.fromValue(object.uint64Value) : Long.UZERO;
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? "";
    message.bytesValue = object.bytesValue ?? new Uint8Array();
    message.durationValue = object.durationValue ?? undefined;
    message.timestampValue = object.timestampValue ?? undefined;
    return message;
  }

};
export interface SourceInfo_Int32MapEntry {
  key: Long;
  value: number;
}

function createBaseSourceInfo_Int32MapEntry(): SourceInfo_Int32MapEntry {
  return {
    key: Long.UZERO,
    value: 0
  };
}

export const SourceInfo_Int32MapEntry = {
  encode(message: SourceInfo_Int32MapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }

    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_Int32MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_Int32MapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.int64() as Long);
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

  fromJSON(object: any): SourceInfo_Int32MapEntry {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.ZERO,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: SourceInfo_Int32MapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.ZERO).toString());
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourceInfo_Int32MapEntry>, I>>(object: I): SourceInfo_Int32MapEntry {
    const message = createBaseSourceInfo_Int32MapEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value ?? 0;
    return message;
  }

};
export interface SourceInfo_ExprMapEntry {
  key: Long;
  value: Expr;
}

function createBaseSourceInfo_ExprMapEntry(): SourceInfo_ExprMapEntry {
  return {
    key: Long.UZERO,
    value: undefined
  };
}

export const SourceInfo_ExprMapEntry = {
  encode(message: SourceInfo_ExprMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }

    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_ExprMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_ExprMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.int64() as Long);
          break;

        case 2:
          message.value = Expr.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourceInfo_ExprMapEntry {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.ZERO,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: SourceInfo_ExprMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.ZERO).toString());
    message.value !== undefined && (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourceInfo_ExprMapEntry>, I>>(object: I): SourceInfo_ExprMapEntry {
    const message = createBaseSourceInfo_ExprMapEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value !== undefined && object.value !== null ? Expr.fromPartial(object.value) : undefined;
    return message;
  }

};
export interface SourceInfo {
  syntaxVersion: string;
  location: string;
  lineOffsets: number[];
  positions: {
    [key: Long]: number;
  };
  macroCalls: {
    [key: Long]: Expr;
  };
}

function createBaseSourceInfo(): SourceInfo {
  return {
    syntaxVersion: "",
    location: "",
    lineOffsets: [],
    positions: 0,
    macroCalls: undefined
  };
}

export const SourceInfo = {
  encode(message: SourceInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.syntaxVersion !== "") {
      writer.uint32(10).string(message.syntaxVersion);
    }

    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }

    writer.uint32(24).fork();

    for (const v of message.lineOffsets) {
      writer.int32(v);
    }

    writer.ldelim();
    Object.entries(message.positions).forEach(([key, value]) => {
      SourceInfo_PositionsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(32).fork()).ldelim();
    });
    Object.entries(message.macroCalls).forEach(([key, value]) => {
      SourceInfo_MacroCallsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.syntaxVersion = reader.string();
          break;

        case 2:
          message.location = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }
          } else {
            message.lineOffsets.push(reader.int32());
          }

        case 4:
          const entry4 = SourceInfo_PositionsMapEntry.decode(reader, reader.uint32());

          if (entry4.value !== undefined) {
            message.positions[entry4.key] = entry4.value;
          }

          break;

        case 5:
          const entry5 = SourceInfo_MacroCallsMapEntry.decode(reader, reader.uint32());

          if (entry5.value !== undefined) {
            message.macroCalls[entry5.key] = entry5.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      syntaxVersion: isSet(object.syntaxVersion) ? String(object.syntaxVersion) : "",
      location: isSet(object.location) ? String(object.location) : "",
      lineOffsets: Array.isArray(object?.lineOffsets) ? object.lineOffsets.map((e: any) => Number(e)) : [],
      positions: isObject(object.positions) ? Object.entries(object.positions).reduce<{
        [key: Long]: number;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Number(value);
        return acc;
      }, {}) : {},
      macroCalls: isObject(object.macroCalls) ? Object.entries(object.macroCalls).reduce<{
        [key: Long]: Expr;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Expr.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    message.syntaxVersion !== undefined && (obj.syntaxVersion = message.syntaxVersion);
    message.location !== undefined && (obj.location = message.location);

    if (message.lineOffsets) {
      obj.lineOffsets = message.lineOffsets.map(e => Math.round(e));
    } else {
      obj.lineOffsets = [];
    }

    obj.positions = {};

    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }

    obj.macroCalls = {};

    if (message.macroCalls) {
      Object.entries(message.macroCalls).forEach(([k, v]) => {
        obj.macroCalls[k] = Expr.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourceInfo>, I>>(object: I): SourceInfo {
    const message = createBaseSourceInfo();
    message.syntaxVersion = object.syntaxVersion ?? "";
    message.location = object.location ?? "";
    message.lineOffsets = object.lineOffsets?.map(e => e) || [];
    message.positions = Object.entries(object.positions ?? {}).reduce<{
      [key: Long]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }

      return acc;
    }, {});
    message.macroCalls = Object.entries(object.macroCalls ?? {}).reduce<{
      [key: Long]: Expr;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Expr.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface SourcePosition {
  location: string;
  offset: number;
  line: number;
  column: number;
}

function createBaseSourcePosition(): SourcePosition {
  return {
    location: "",
    offset: 0,
    line: 0,
    column: 0
  };
}

export const SourcePosition = {
  encode(message: SourcePosition, writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }

    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }

    if (message.line !== 0) {
      writer.uint32(24).int32(message.line);
    }

    if (message.column !== 0) {
      writer.uint32(32).int32(message.column);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourcePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourcePosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;

        case 2:
          message.offset = reader.int32();
          break;

        case 3:
          message.line = reader.int32();
          break;

        case 4:
          message.column = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SourcePosition {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      line: isSet(object.line) ? Number(object.line) : 0,
      column: isSet(object.column) ? Number(object.column) : 0
    };
  },

  toJSON(message: SourcePosition): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.column !== undefined && (obj.column = Math.round(message.column));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourcePosition>, I>>(object: I): SourcePosition {
    const message = createBaseSourcePosition();
    message.location = object.location ?? "";
    message.offset = object.offset ?? 0;
    message.line = object.line ?? 0;
    message.column = object.column ?? 0;
    return message;
  }

};