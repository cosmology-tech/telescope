//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "./genesis";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.twap.v1beta1";
export interface ArithmeticTwapRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime: Timestamp;
  endTime?: Timestamp;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime: Timestamp;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ParamsRequest {}
export interface ParamsResponse {
  params: Params;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: Timestamp.fromPartial({}),
    endTime: undefined
  };
}
export const ArithmeticTwapRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
  encode(message: ArithmeticTwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.endTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined
    };
  },
  toJSON(message: ArithmeticTwapRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    return message;
  },
  fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      baseAsset: object.base_asset,
      quoteAsset: object.quote_asset,
      startTime: object.start_time,
      endTime: object?.end_time
    };
  },
  toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime;
    obj.end_time = message.endTime;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-request",
      value: ArithmeticTwapRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapRequest): Uint8Array {
    return ArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
      value: ArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
  encode(message: ArithmeticTwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapResponse {
    return {
      arithmeticTwap: isSet(object.arithmeticTwap) ? String(object.arithmeticTwap) : ""
    };
  },
  toJSON(message: ArithmeticTwapResponse): unknown {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmeticTwap = message.arithmeticTwap);
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse {
    return {
      arithmeticTwap: object.arithmetic_twap
    };
  },
  toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-response",
      value: ArithmeticTwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapResponseProtoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapResponse): Uint8Array {
    return ArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
      value: ArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: Timestamp.fromPartial({})
  };
}
export const ArithmeticTwapToNowRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
  encode(message: ArithmeticTwapToNowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  toJSON(message: ArithmeticTwapToNowRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  },
  fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      baseAsset: object.base_asset,
      quoteAsset: object.quote_asset,
      startTime: object.start_time
    };
  },
  toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowRequestAminoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-request",
      value: ArithmeticTwapToNowRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowRequest): Uint8Array {
    return ArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
      value: ArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
  encode(message: ArithmeticTwapToNowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: isSet(object.arithmeticTwap) ? String(object.arithmeticTwap) : ""
    };
  },
  toJSON(message: ArithmeticTwapToNowResponse): unknown {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmeticTwap = message.arithmeticTwap);
    return obj;
  },
  fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: object.arithmetic_twap
    };
  },
  toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowResponseAminoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-response",
      value: ArithmeticTwapToNowResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowResponse): Uint8Array {
    return ArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
      value: ArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "osmosis/twap/params-request",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "osmosis/twap/params-response",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
export interface Query {
  Params(request?: ParamsRequest): Promise<ParamsResponse>;
  ArithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
  ArithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ArithmeticTwap = this.ArithmeticTwap.bind(this);
    this.ArithmeticTwapToNow = this.ArithmeticTwapToNow.bind(this);
  }
  Params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new _m0.Reader(data)));
  }
  ArithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse> {
    const data = ArithmeticTwapRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
    return promise.then(data => ArithmeticTwapResponse.decode(new _m0.Reader(data)));
  }
  ArithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse> {
    const data = ArithmeticTwapToNowRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
    return promise.then(data => ArithmeticTwapToNowResponse.decode(new _m0.Reader(data)));
  }
}