import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, Long, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.twap.v1beta1";
export interface ArithmeticTwapRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Date;
  endTime?: Date;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
  end_time?: Date;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Date;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}

export const ArithmeticTwapRequest = {
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
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
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
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },

  fromSDK(object: ArithmeticTwapRequestSDKType): ArithmeticTwapRequest {
    return {
      poolId: isSet(object.pool_id) ? object.pool_id : undefined,
      baseAsset: isSet(object.base_asset) ? object.base_asset : undefined,
      quoteAsset: isSet(object.quote_asset) ? object.quote_asset : undefined,
      startTime: isSet(object.start_time) ? Timestamp.fromSDK(object.start_time) : undefined,
      endTime: isSet(object.end_time) ? Timestamp.fromSDK(object.end_time) : undefined
    };
  },

  toSDK(message: ArithmeticTwapRequest): ArithmeticTwapRequestSDKType {
    const obj: any = {};
    message.poolId !== undefined && (obj.pool_id = message.poolId);
    message.baseAsset !== undefined && (obj.base_asset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quote_asset = message.quoteAsset);
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toSDK(message.startTime) : undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ? Timestamp.toSDK(message.endTime) : undefined);
    return obj;
  },

  fromAmino(object: ArithmeticTwapRequestSDKType): ArithmeticTwapRequest {
    return {
      poolId: isSet(object.pool_id) ? object.pool_id : undefined,
      baseAsset: isSet(object.base_asset) ? object.base_asset : undefined,
      quoteAsset: isSet(object.quote_asset) ? object.quote_asset : undefined,
      startTime: isSet(object.start_time) ? Timestamp.fromAmino(object.start_time) : undefined,
      endTime: isSet(object.end_time) ? Timestamp.fromAmino(object.end_time) : undefined
    };
  },

  toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestSDKType {
    const obj: any = {};
    message.poolId !== undefined && (obj.pool_id = message.poolId);
    message.baseAsset !== undefined && (obj.base_asset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quote_asset = message.quoteAsset);
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined);
    return obj;
  }

};

function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}

export const ArithmeticTwapResponse = {
  encode(message: ArithmeticTwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
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
          message.arithmeticTwap = reader.string();
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

  fromPartial(object: DeepPartial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },

  fromSDK(object: ArithmeticTwapResponseSDKType): ArithmeticTwapResponse {
    return {
      arithmeticTwap: isSet(object.arithmetic_twap) ? object.arithmetic_twap : undefined
    };
  },

  toSDK(message: ArithmeticTwapResponse): ArithmeticTwapResponseSDKType {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmetic_twap = message.arithmeticTwap);
    return obj;
  },

  fromAmino(object: ArithmeticTwapResponseSDKType): ArithmeticTwapResponse {
    return {
      arithmeticTwap: isSet(object.arithmetic_twap) ? object.arithmetic_twap : undefined
    };
  },

  toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseSDKType {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmetic_twap = message.arithmeticTwap);
    return obj;
  }

};

function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}

export const ArithmeticTwapToNowRequest = {
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
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
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
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },

  fromSDK(object: ArithmeticTwapToNowRequestSDKType): ArithmeticTwapToNowRequest {
    return {
      poolId: isSet(object.pool_id) ? object.pool_id : undefined,
      baseAsset: isSet(object.base_asset) ? object.base_asset : undefined,
      quoteAsset: isSet(object.quote_asset) ? object.quote_asset : undefined,
      startTime: isSet(object.start_time) ? Timestamp.fromSDK(object.start_time) : undefined
    };
  },

  toSDK(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestSDKType {
    const obj: any = {};
    message.poolId !== undefined && (obj.pool_id = message.poolId);
    message.baseAsset !== undefined && (obj.base_asset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quote_asset = message.quoteAsset);
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toSDK(message.startTime) : undefined);
    return obj;
  },

  fromAmino(object: ArithmeticTwapToNowRequestSDKType): ArithmeticTwapToNowRequest {
    return {
      poolId: isSet(object.pool_id) ? object.pool_id : undefined,
      baseAsset: isSet(object.base_asset) ? object.base_asset : undefined,
      quoteAsset: isSet(object.quote_asset) ? object.quote_asset : undefined,
      startTime: isSet(object.start_time) ? Timestamp.fromAmino(object.start_time) : undefined
    };
  },

  toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestSDKType {
    const obj: any = {};
    message.poolId !== undefined && (obj.pool_id = message.poolId);
    message.baseAsset !== undefined && (obj.base_asset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quote_asset = message.quoteAsset);
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined);
    return obj;
  }

};

function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}

export const ArithmeticTwapToNowResponse = {
  encode(message: ArithmeticTwapToNowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
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
          message.arithmeticTwap = reader.string();
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

  fromPartial(object: DeepPartial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },

  fromSDK(object: ArithmeticTwapToNowResponseSDKType): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: isSet(object.arithmetic_twap) ? object.arithmetic_twap : undefined
    };
  },

  toSDK(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseSDKType {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmetic_twap = message.arithmeticTwap);
    return obj;
  },

  fromAmino(object: ArithmeticTwapToNowResponseSDKType): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: isSet(object.arithmetic_twap) ? object.arithmetic_twap : undefined
    };
  },

  toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseSDKType {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmetic_twap = message.arithmeticTwap);
    return obj;
  }

};

function createBaseParamsRequest(): ParamsRequest {
  return {};
}

export const ParamsRequest = {
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

  fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },

  fromSDK(_: ParamsRequestSDKType): ParamsRequest {
    return {};
  },

  toSDK(_: ParamsRequest): ParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: ParamsRequestSDKType): ParamsRequest {
    return {};
  },

  toAmino(_: ParamsRequest): ParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}

export const ParamsResponse = {
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

  fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: ParamsResponseSDKType): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },

  fromAmino(object: ParamsResponseSDKType): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toAmino(message.params) : undefined);
    return obj;
  }

};