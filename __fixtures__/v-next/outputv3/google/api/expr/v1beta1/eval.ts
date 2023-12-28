import { Value, ValueAmino, ValueSDKType } from "./value";
import { Status, StatusAmino, StatusSDKType } from "../../../rpc/status";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
export const protobufPackage = "google.api.expr.v1beta1";
/**
 * The state of an evaluation.
 * 
 * Can represent an initial, partial, or completed state of evaluation.
 */
export interface EvalState {
  /** The unique values referenced in this message. */
  values: ExprValue[];
  /**
   * An ordered list of results.
   * 
   * Tracks the flow of evaluation through the expression.
   * May be sparse.
   */
  results: EvalState_Result[];
}
export interface EvalStateProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.EvalState";
  value: Uint8Array;
}
/**
 * The state of an evaluation.
 * 
 * Can represent an initial, partial, or completed state of evaluation.
 */
export interface EvalStateAmino {
  /** The unique values referenced in this message. */
  values?: ExprValueAmino[];
  /**
   * An ordered list of results.
   * 
   * Tracks the flow of evaluation through the expression.
   * May be sparse.
   */
  results?: EvalState_ResultAmino[];
}
/**
 * The state of an evaluation.
 * 
 * Can represent an initial, partial, or completed state of evaluation.
 */
export interface EvalStateSDKType {
  values: ExprValueSDKType[];
  results: EvalState_ResultSDKType[];
}
/** A single evaluation result. */
export interface EvalState_Result {
  /** The expression this result is for. */
  expr?: IdRef;
  /** The index in `values` of the resulting value. */
  value: number;
}
export interface EvalState_ResultProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Result";
  value: Uint8Array;
}
/** A single evaluation result. */
export interface EvalState_ResultAmino {
  /** The expression this result is for. */
  expr?: IdRefAmino;
  /** The index in `values` of the resulting value. */
  value?: number;
}
/** A single evaluation result. */
export interface EvalState_ResultSDKType {
  expr?: IdRefSDKType;
  value: number;
}
/** The value of an evaluated expression. */
export interface ExprValue {
  /** A concrete value. */
  value?: Value;
  /**
   * The set of errors in the critical path of evalution.
   * 
   * Only errors in the critical path are included. For example,
   * `(<error1> || true) && <error2>` will only result in `<error2>`,
   * while `<error1> || <error2>` will result in both `<error1>` and
   * `<error2>`.
   * 
   * Errors cause by the presence of other errors are not included in the
   * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
   * only result in `<error1>`.
   * 
   * Multiple errors *might* be included when evaluation could result
   * in different errors. For example `<error1> + <error2>` and
   * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
   * The exact subset of errors included for this case is unspecified and
   * depends on the implementation details of the evaluator.
   */
  error?: ErrorSet;
  /**
   * The set of unknowns in the critical path of evaluation.
   * 
   * Unknown behaves identically to Error with regards to propagation.
   * Specifically, only unknowns in the critical path are included, unknowns
   * caused by the presence of other unknowns are not included, and multiple
   * unknowns *might* be included included when evaluation could result in
   * different unknowns. For example:
   * 
   *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
   *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
   *     <unknown[1]>.foo -> <unknown[1]>
   *     foo(<unknown[1]>) -> <unknown[1]>
   *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
   * 
   * Unknown takes precidence over Error in cases where a `Value` can short
   * circuit the result:
   * 
   *     <error> || <unknown> -> <unknown>
   *     <error> && <unknown> -> <unknown>
   * 
   * Errors take precidence in all other cases:
   * 
   *     <unknown> + <error> -> <error>
   *     foo(<unknown>, <error>) -> <error>
   */
  unknown?: UnknownSet;
}
export interface ExprValueProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.ExprValue";
  value: Uint8Array;
}
/** The value of an evaluated expression. */
export interface ExprValueAmino {
  /** A concrete value. */
  value?: ValueAmino;
  /**
   * The set of errors in the critical path of evalution.
   * 
   * Only errors in the critical path are included. For example,
   * `(<error1> || true) && <error2>` will only result in `<error2>`,
   * while `<error1> || <error2>` will result in both `<error1>` and
   * `<error2>`.
   * 
   * Errors cause by the presence of other errors are not included in the
   * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
   * only result in `<error1>`.
   * 
   * Multiple errors *might* be included when evaluation could result
   * in different errors. For example `<error1> + <error2>` and
   * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
   * The exact subset of errors included for this case is unspecified and
   * depends on the implementation details of the evaluator.
   */
  error?: ErrorSetAmino;
  /**
   * The set of unknowns in the critical path of evaluation.
   * 
   * Unknown behaves identically to Error with regards to propagation.
   * Specifically, only unknowns in the critical path are included, unknowns
   * caused by the presence of other unknowns are not included, and multiple
   * unknowns *might* be included included when evaluation could result in
   * different unknowns. For example:
   * 
   *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
   *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
   *     <unknown[1]>.foo -> <unknown[1]>
   *     foo(<unknown[1]>) -> <unknown[1]>
   *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
   * 
   * Unknown takes precidence over Error in cases where a `Value` can short
   * circuit the result:
   * 
   *     <error> || <unknown> -> <unknown>
   *     <error> && <unknown> -> <unknown>
   * 
   * Errors take precidence in all other cases:
   * 
   *     <unknown> + <error> -> <error>
   *     foo(<unknown>, <error>) -> <error>
   */
  unknown?: UnknownSetAmino;
}
/** The value of an evaluated expression. */
export interface ExprValueSDKType {
  value?: ValueSDKType;
  error?: ErrorSetSDKType;
  unknown?: UnknownSetSDKType;
}
/**
 * A set of errors.
 * 
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSet {
  /** The errors in the set. */
  errors: Status[];
}
export interface ErrorSetProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.ErrorSet";
  value: Uint8Array;
}
/**
 * A set of errors.
 * 
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSetAmino {
  /** The errors in the set. */
  errors?: StatusAmino[];
}
/**
 * A set of errors.
 * 
 * The errors included depend on the context. See `ExprValue.error`.
 */
export interface ErrorSetSDKType {
  errors: StatusSDKType[];
}
/**
 * A set of expressions for which the value is unknown.
 * 
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSet {
  /** The ids of the expressions with unknown values. */
  exprs: IdRef[];
}
export interface UnknownSetProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.UnknownSet";
  value: Uint8Array;
}
/**
 * A set of expressions for which the value is unknown.
 * 
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSetAmino {
  /** The ids of the expressions with unknown values. */
  exprs?: IdRefAmino[];
}
/**
 * A set of expressions for which the value is unknown.
 * 
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 */
export interface UnknownSetSDKType {
  exprs: IdRefSDKType[];
}
/** A reference to an expression id. */
export interface IdRef {
  /** The expression id. */
  id: number;
}
export interface IdRefProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.IdRef";
  value: Uint8Array;
}
/** A reference to an expression id. */
export interface IdRefAmino {
  /** The expression id. */
  id?: number;
}
/** A reference to an expression id. */
export interface IdRefSDKType {
  id: number;
}
function createBaseEvalState(): EvalState {
  return {
    values: [],
    results: []
  };
}
export const EvalState = {
  typeUrl: "/google.api.expr.v1beta1.EvalState",
  encode(message: EvalState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      ExprValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      EvalState_Result.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EvalState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(ExprValue.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.results.push(EvalState_Result.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalState {
    const obj = createBaseEvalState();
    if (Array.isArray(object?.values)) obj.values = object.values.map((e: any) => ExprValue.fromJSON(e));
    if (Array.isArray(object?.results)) obj.results = object.results.map((e: any) => EvalState_Result.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<EvalState>): EvalState {
    const message = createBaseEvalState();
    message.values = object.values?.map(e => ExprValue.fromPartial(e)) || [];
    message.results = object.results?.map(e => EvalState_Result.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EvalStateSDKType): EvalState {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ExprValue.fromSDK(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => EvalState_Result.fromSDK(e)) : []
    };
  },
  toSDK(message: EvalState): EvalStateSDKType {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? ExprValue.toSDK(e) : undefined);
    } else {
      obj.values = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? EvalState_Result.toSDK(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAmino(object: EvalStateAmino): EvalState {
    const message = createBaseEvalState();
    message.values = object.values?.map(e => ExprValue.fromAmino(e)) || [];
    message.results = object.results?.map(e => EvalState_Result.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EvalState, useInterfaces: boolean = true): EvalStateAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? ExprValue.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.values = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? EvalState_Result.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromProtoMsg(message: EvalStateProtoMsg, useInterfaces: boolean = true): EvalState {
    return EvalState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EvalState): Uint8Array {
    return EvalState.encode(message).finish();
  },
  toProtoMsg(message: EvalState): EvalStateProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.EvalState",
      value: EvalState.encode(message).finish()
    };
  }
};
function createBaseEvalState_Result(): EvalState_Result {
  return {
    expr: undefined,
    value: 0
  };
}
export const EvalState_Result = {
  typeUrl: "/google.api.expr.v1beta1.Result",
  encode(message: EvalState_Result, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expr !== undefined) {
      IdRef.encode(message.expr, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EvalState_Result {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalState_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expr = IdRef.decode(reader, reader.uint32(), useInterfaces);
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
    const obj = createBaseEvalState_Result();
    if (isSet(object.expr)) obj.expr = IdRef.fromJSON(object.expr);
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  toJSON(message: EvalState_Result): unknown {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? IdRef.toJSON(message.expr) : undefined);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },
  fromPartial(object: DeepPartial<EvalState_Result>): EvalState_Result {
    const message = createBaseEvalState_Result();
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = IdRef.fromPartial(object.expr);
    }
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: EvalState_ResultSDKType): EvalState_Result {
    return {
      expr: object.expr ? IdRef.fromSDK(object.expr) : undefined,
      value: object?.value
    };
  },
  toSDK(message: EvalState_Result): EvalState_ResultSDKType {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? IdRef.toSDK(message.expr) : undefined);
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: EvalState_ResultAmino): EvalState_Result {
    const message = createBaseEvalState_Result();
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = IdRef.fromAmino(object.expr);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: EvalState_Result, useInterfaces: boolean = true): EvalState_ResultAmino {
    const obj: any = {};
    obj.expr = message.expr ? IdRef.toAmino(message.expr, useInterfaces) : undefined;
    obj.value = message.value;
    return obj;
  },
  fromProtoMsg(message: EvalState_ResultProtoMsg, useInterfaces: boolean = true): EvalState_Result {
    return EvalState_Result.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EvalState_Result): Uint8Array {
    return EvalState_Result.encode(message).finish();
  },
  toProtoMsg(message: EvalState_Result): EvalState_ResultProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Result",
      value: EvalState_Result.encode(message).finish()
    };
  }
};
function createBaseExprValue(): ExprValue {
  return {
    value: undefined,
    error: undefined,
    unknown: undefined
  };
}
export const ExprValue = {
  typeUrl: "/google.api.expr.v1beta1.ExprValue",
  encode(message: ExprValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExprValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExprValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Value.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.error = ErrorSet.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.unknown = UnknownSet.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExprValue {
    const obj = createBaseExprValue();
    if (isSet(object.value)) obj.value = Value.fromJSON(object.value);
    if (isSet(object.error)) obj.error = ErrorSet.fromJSON(object.error);
    if (isSet(object.unknown)) obj.unknown = UnknownSet.fromJSON(object.unknown);
    return obj;
  },
  toJSON(message: ExprValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    message.error !== undefined && (obj.error = message.error ? ErrorSet.toJSON(message.error) : undefined);
    message.unknown !== undefined && (obj.unknown = message.unknown ? UnknownSet.toJSON(message.unknown) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ExprValue>): ExprValue {
    const message = createBaseExprValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromPartial(object.value);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = ErrorSet.fromPartial(object.error);
    }
    if (object.unknown !== undefined && object.unknown !== null) {
      message.unknown = UnknownSet.fromPartial(object.unknown);
    }
    return message;
  },
  fromSDK(object: ExprValueSDKType): ExprValue {
    return {
      value: object.value ? Value.fromSDK(object.value) : undefined,
      error: object.error ? ErrorSet.fromSDK(object.error) : undefined,
      unknown: object.unknown ? UnknownSet.fromSDK(object.unknown) : undefined
    };
  },
  toSDK(message: ExprValue): ExprValueSDKType {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Value.toSDK(message.value) : undefined);
    message.error !== undefined && (obj.error = message.error ? ErrorSet.toSDK(message.error) : undefined);
    message.unknown !== undefined && (obj.unknown = message.unknown ? UnknownSet.toSDK(message.unknown) : undefined);
    return obj;
  },
  fromAmino(object: ExprValueAmino): ExprValue {
    const message = createBaseExprValue();
    if (object.value !== undefined && object.value !== null) {
      message.value = Value.fromAmino(object.value);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = ErrorSet.fromAmino(object.error);
    }
    if (object.unknown !== undefined && object.unknown !== null) {
      message.unknown = UnknownSet.fromAmino(object.unknown);
    }
    return message;
  },
  toAmino(message: ExprValue, useInterfaces: boolean = true): ExprValueAmino {
    const obj: any = {};
    obj.value = message.value ? Value.toAmino(message.value, useInterfaces) : undefined;
    obj.error = message.error ? ErrorSet.toAmino(message.error, useInterfaces) : undefined;
    obj.unknown = message.unknown ? UnknownSet.toAmino(message.unknown, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ExprValueProtoMsg, useInterfaces: boolean = true): ExprValue {
    return ExprValue.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExprValue): Uint8Array {
    return ExprValue.encode(message).finish();
  },
  toProtoMsg(message: ExprValue): ExprValueProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.ExprValue",
      value: ExprValue.encode(message).finish()
    };
  }
};
function createBaseErrorSet(): ErrorSet {
  return {
    errors: []
  };
}
export const ErrorSet = {
  typeUrl: "/google.api.expr.v1beta1.ErrorSet",
  encode(message: ErrorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.errors) {
      Status.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ErrorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(Status.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ErrorSet {
    const obj = createBaseErrorSet();
    if (Array.isArray(object?.errors)) obj.errors = object.errors.map((e: any) => Status.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<ErrorSet>): ErrorSet {
    const message = createBaseErrorSet();
    message.errors = object.errors?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ErrorSetSDKType): ErrorSet {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => Status.fromSDK(e)) : []
    };
  },
  toSDK(message: ErrorSet): ErrorSetSDKType {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? Status.toSDK(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromAmino(object: ErrorSetAmino): ErrorSet {
    const message = createBaseErrorSet();
    message.errors = object.errors?.map(e => Status.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ErrorSet, useInterfaces: boolean = true): ErrorSetAmino {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? Status.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromProtoMsg(message: ErrorSetProtoMsg, useInterfaces: boolean = true): ErrorSet {
    return ErrorSet.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ErrorSet): Uint8Array {
    return ErrorSet.encode(message).finish();
  },
  toProtoMsg(message: ErrorSet): ErrorSetProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.ErrorSet",
      value: ErrorSet.encode(message).finish()
    };
  }
};
function createBaseUnknownSet(): UnknownSet {
  return {
    exprs: []
  };
}
export const UnknownSet = {
  typeUrl: "/google.api.expr.v1beta1.UnknownSet",
  encode(message: UnknownSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exprs) {
      IdRef.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UnknownSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnknownSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exprs.push(IdRef.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnknownSet {
    const obj = createBaseUnknownSet();
    if (Array.isArray(object?.exprs)) obj.exprs = object.exprs.map((e: any) => IdRef.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<UnknownSet>): UnknownSet {
    const message = createBaseUnknownSet();
    message.exprs = object.exprs?.map(e => IdRef.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: UnknownSetSDKType): UnknownSet {
    return {
      exprs: Array.isArray(object?.exprs) ? object.exprs.map((e: any) => IdRef.fromSDK(e)) : []
    };
  },
  toSDK(message: UnknownSet): UnknownSetSDKType {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e ? IdRef.toSDK(e) : undefined);
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromAmino(object: UnknownSetAmino): UnknownSet {
    const message = createBaseUnknownSet();
    message.exprs = object.exprs?.map(e => IdRef.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UnknownSet, useInterfaces: boolean = true): UnknownSetAmino {
    const obj: any = {};
    if (message.exprs) {
      obj.exprs = message.exprs.map(e => e ? IdRef.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.exprs = [];
    }
    return obj;
  },
  fromProtoMsg(message: UnknownSetProtoMsg, useInterfaces: boolean = true): UnknownSet {
    return UnknownSet.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UnknownSet): Uint8Array {
    return UnknownSet.encode(message).finish();
  },
  toProtoMsg(message: UnknownSet): UnknownSetProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.UnknownSet",
      value: UnknownSet.encode(message).finish()
    };
  }
};
function createBaseIdRef(): IdRef {
  return {
    id: 0
  };
}
export const IdRef = {
  typeUrl: "/google.api.expr.v1beta1.IdRef",
  encode(message: IdRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): IdRef {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseIdRef();
    if (isSet(object.id)) obj.id = Number(object.id);
    return obj;
  },
  toJSON(message: IdRef): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },
  fromPartial(object: DeepPartial<IdRef>): IdRef {
    const message = createBaseIdRef();
    message.id = object.id ?? 0;
    return message;
  },
  fromSDK(object: IdRefSDKType): IdRef {
    return {
      id: object?.id
    };
  },
  toSDK(message: IdRef): IdRefSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: IdRefAmino): IdRef {
    const message = createBaseIdRef();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: IdRef, useInterfaces: boolean = true): IdRefAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromProtoMsg(message: IdRefProtoMsg, useInterfaces: boolean = true): IdRef {
    return IdRef.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: IdRef): Uint8Array {
    return IdRef.encode(message).finish();
  },
  toProtoMsg(message: IdRef): IdRefProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.IdRef",
      value: IdRef.encode(message).finish()
    };
  }
};