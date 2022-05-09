import { Value } from "./value";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, isSet } from "@osmonauts/helpers";
export interface EvalState {
  values: ExprValue[];
  results: EvalState_Result[];
}

function createBaseEvalState(): EvalState {
  return {
    values: [],
    results: []
  };
}

export const EvalState = {
  encode(message: EvalState, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      ExprValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.results) {
      EvalState_Result.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvalState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.values.push(ExprValue.decode(reader, reader.uint32()));
          break;

        case 3:
          message.results.push(EvalState_Result.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvalState {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ExprValue.fromJSON(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => EvalState_Result.fromJSON(e)) : []
    };
  },

  toJSON(message: EvalState): unknown {
    const obj: any = {};

    if (message.values) {
      obj.values = message.values.map(e => e ? ExprValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }

    if (message.results) {
      obj.results = message.results.map(e => e ? EvalState_Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvalState>, I>>(object: I): EvalState {
    const message = createBaseEvalState();
    message.values = object.values?.map(e => ExprValue.fromPartial(e)) || [];
    message.results = object.results?.map(e => EvalState_Result.fromPartial(e)) || [];
    return message;
  }

};
export interface EvalState_Result {
  expr: IdRef;
  value: number;
}

function createBaseEvalState_Result(): EvalState_Result {
  return {
    expr: undefined,
    value: 0
  };
}

export const EvalState_Result = {
  encode(message: EvalState_Result, writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      IdRef.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }

    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvalState_Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalState_Result();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.expr = IdRef.decode(reader, reader.uint32());
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

  fromJSON(object: any): EvalState_Result {
    return {
      expr: isSet(object.expr) ? IdRef.fromJSON(object.expr) : undefined,
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: EvalState_Result): unknown {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? IdRef.toJSON(message.expr) : undefined);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvalState_Result>, I>>(object: I): EvalState_Result {
    const message = createBaseEvalState_Result();
    message.expr = object.expr !== undefined && object.expr !== null ? IdRef.fromPartial(object.expr) : undefined;
    message.value = object.value ?? 0;
    return message;
  }

};
export interface ExprValue {
  value?: Value;
  error?: ErrorSet;
  unknown?: UnknownSet;
}

function createBaseExprValue(): ExprValue {
  return {
    value: undefined,
    error: undefined,
    unknown: undefined
  };
}

export const ExprValue = {
  encode(message: ExprValue, writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(10).fork()).ldelim();
    }

    if (message.error !== undefined) {
      ErrorSet.encode(message.error, writer.uint32(18).fork()).ldelim();
    }

    if (message.unknown !== undefined) {
      UnknownSet.encode(message.unknown, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExprValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExprValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = Value.decode(reader, reader.uint32());
          break;

        case 2:
          message.error = ErrorSet.decode(reader, reader.uint32());
          break;

        case 3:
          message.unknown = UnknownSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExprValue {
    return {
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
      error: isSet(object.error) ? ErrorSet.fromJSON(object.error) : undefined,
      unknown: isSet(object.unknown) ? UnknownSet.fromJSON(object.unknown) : undefined
    };
  },

  toJSON(message: ExprValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    message.error !== undefined && (obj.error = message.error ? ErrorSet.toJSON(message.error) : undefined);
    message.unknown !== undefined && (obj.unknown = message.unknown ? UnknownSet.toJSON(message.unknown) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExprValue>, I>>(object: I): ExprValue {
    const message = createBaseExprValue();
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    message.error = object.error !== undefined && object.error !== null ? ErrorSet.fromPartial(object.error) : undefined;
    message.unknown = object.unknown !== undefined && object.unknown !== null ? UnknownSet.fromPartial(object.unknown) : undefined;
    return message;
  }

};
export interface ErrorSet {
  errors: Status[];
}

function createBaseErrorSet(): ErrorSet {
  return {
    errors: []
  };
}

export const ErrorSet = {
  encode(message: ErrorSet, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.errors) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.errors.push(Status.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ErrorSet {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => Status.fromJSON(e)) : []
    };
  },

  toJSON(message: ErrorSet): unknown {
    const obj: any = {};

    if (message.errors) {
      obj.errors = message.errors.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.errors = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorSet>, I>>(object: I): ErrorSet {
    const message = createBaseErrorSet();
    message.errors = object.errors?.map(e => Status.fromPartial(e)) || [];
    return message;
  }

};
export interface UnknownSet {
  exprs: IdRef[];
}

function createBaseUnknownSet(): UnknownSet {
  return {
    exprs: []
  };
}

export const UnknownSet = {
  encode(message: UnknownSet, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exprs) {
      IdRef.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnknownSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exprs.push(IdRef.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UnknownSet {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => IdRef.fromJSON(e)) : []
    };
  },

  toJSON(message: UnknownSet): unknown {
    const obj: any = {};

    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e ? IdRef.toJSON(e) : undefined);
    } else {
      obj.exprs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnknownSet>, I>>(object: I): UnknownSet {
    const message = createBaseUnknownSet();
    message.exprs = object.exprs?.map(e => IdRef.fromPartial(e)) || [];
    return message;
  }

};
export interface IdRef {
  id: number;
}

function createBaseIdRef(): IdRef {
  return {
    id: 0
  };
}

export const IdRef = {
  encode(message: IdRef, writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdRef {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdRef();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IdRef {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: IdRef): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IdRef>, I>>(object: I): IdRef {
    const message = createBaseIdRef();
    message.id = object.id ?? 0;
    return message;
  }

};