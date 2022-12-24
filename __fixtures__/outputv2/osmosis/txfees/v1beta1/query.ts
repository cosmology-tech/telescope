import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensRequestAmino {}
export interface QueryFeeTokensRequestSDKType {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseAmino {
  fee_tokens: FeeTokenAmino[];
}
export interface QueryFeeTokensResponseSDKType {
  fee_tokens: FeeTokenSDKType[];
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
  denom: string;
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestAmino {
  denom: string;
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
  denom: string;
}

/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
  poolID: Long;
  spotPrice: string;
}

/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseAmino {
  poolID: string;
  spot_price: string;
}

/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
  poolID: Long;
  spot_price: string;
}
export interface QueryDenomPoolIdRequest {
  denom: string;
}
export interface QueryDenomPoolIdRequestAmino {
  denom: string;
}
export interface QueryDenomPoolIdRequestSDKType {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: Long;
}
export interface QueryDenomPoolIdResponseAmino {
  poolID: string;
}
export interface QueryDenomPoolIdResponseSDKType {
  poolID: Long;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomRequestAmino {}
export interface QueryBaseDenomRequestSDKType {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
}
export interface QueryBaseDenomResponseAmino {
  base_denom: string;
}
export interface QueryBaseDenomResponseSDKType {
  base_denom: string;
}

function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}

export const QueryFeeTokensRequest = {
  encode(_: QueryFeeTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensRequest();

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

  fromJSON(_: any): QueryFeeTokensRequest {
    return {};
  },

  toJSON(_: QueryFeeTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },

  fromSDK(_: QueryFeeTokensRequestSDKType): QueryFeeTokensRequest {
    return {};
  },

  toSDK(_: QueryFeeTokensRequest): QueryFeeTokensRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest {
    return {};
  },

  toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return {
    feeTokens: []
  };
}

export const QueryFeeTokensResponse = {
  encode(message: QueryFeeTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryFeeTokensResponse {
    return {
      feeTokens: Array.isArray(object?.feeTokens) ? object.feeTokens.map((e: any) => FeeToken.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryFeeTokensResponse): unknown {
    const obj: any = {};

    if (message.feeTokens) {
      obj.feeTokens = message.feeTokens.map(e => e ? FeeToken.toJSON(e) : undefined);
    } else {
      obj.feeTokens = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryFeeTokensResponseSDKType): QueryFeeTokensResponse {
    return {
      feeTokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e: any) => FeeToken.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryFeeTokensResponse): QueryFeeTokensResponseSDKType {
    const obj: any = {};

    if (message.feeTokens) {
      obj.fee_tokens = message.feeTokens.map(e => e ? FeeToken.toSDK(e) : undefined);
    } else {
      obj.fee_tokens = [];
    }

    return obj;
  },

  fromAmino(object: QueryFeeTokensResponseAmino): QueryFeeTokensResponse {
    return {
      feeTokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e: any) => FeeToken.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseAmino {
    const obj: any = {};

    if (message.feeTokens) {
      obj.fee_tokens = message.feeTokens.map(e => e ? FeeToken.toAmino(e) : undefined);
    } else {
      obj.fee_tokens = [];
    }

    return obj;
  }

};

function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: ""
  };
}

export const QueryDenomSpotPriceRequest = {
  encode(message: QueryDenomSpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomSpotPriceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryDenomSpotPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryDenomSpotPriceRequestSDKType): QueryDenomSpotPriceRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: QueryDenomSpotPriceRequestAmino): QueryDenomSpotPriceRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    poolID: Long.UZERO,
    spotPrice: ""
  };
}

export const QueryDenomSpotPriceResponse = {
  encode(message: QueryDenomSpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }

    if (message.spotPrice !== "") {
      writer.uint32(18).string(message.spotPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;

        case 2:
          message.spotPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomSpotPriceResponse {
    return {
      poolID: isSet(object.poolID) ? Long.fromValue(object.poolID) : Long.UZERO,
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },

  toJSON(message: QueryDenomSpotPriceResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = (message.poolID || Long.UZERO).toString());
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },

  fromSDK(object: QueryDenomSpotPriceResponseSDKType): QueryDenomSpotPriceResponse {
    return {
      poolID: object?.poolID,
      spotPrice: object?.spot_price
    };
  },

  toSDK(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseSDKType {
    const obj: any = {};
    obj.poolID = message.poolID;
    obj.spot_price = message.spotPrice;
    return obj;
  },

  fromAmino(object: QueryDenomSpotPriceResponseAmino): QueryDenomSpotPriceResponse {
    return {
      poolID: Long.fromString(object.poolID),
      spotPrice: object.spot_price
    };
  },

  toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAmino {
    const obj: any = {};
    obj.poolID = message.poolID ? message.poolID.toString() : undefined;
    obj.spot_price = message.spotPrice;
    return obj;
  }

};

function createBaseQueryDenomPoolIdRequest(): QueryDenomPoolIdRequest {
  return {
    denom: ""
  };
}

export const QueryDenomPoolIdRequest = {
  encode(message: QueryDenomPoolIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomPoolIdRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryDenomPoolIdRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryDenomPoolIdRequestSDKType): QueryDenomPoolIdRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: QueryDenomPoolIdRequestAmino): QueryDenomPoolIdRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return {
    poolID: Long.UZERO
  };
}

export const QueryDenomPoolIdResponse = {
  encode(message: QueryDenomPoolIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDenomPoolIdResponse {
    return {
      poolID: isSet(object.poolID) ? Long.fromValue(object.poolID) : Long.UZERO
    };
  },

  toJSON(message: QueryDenomPoolIdResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = (message.poolID || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryDenomPoolIdResponseSDKType): QueryDenomPoolIdResponse {
    return {
      poolID: object?.poolID
    };
  },

  toSDK(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseSDKType {
    const obj: any = {};
    obj.poolID = message.poolID;
    return obj;
  },

  fromAmino(object: QueryDenomPoolIdResponseAmino): QueryDenomPoolIdResponse {
    return {
      poolID: Long.fromString(object.poolID)
    };
  },

  toAmino(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAmino {
    const obj: any = {};
    obj.poolID = message.poolID ? message.poolID.toString() : undefined;
    return obj;
  }

};

function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}

export const QueryBaseDenomRequest = {
  encode(_: QueryBaseDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomRequest();

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

  fromJSON(_: any): QueryBaseDenomRequest {
    return {};
  },

  toJSON(_: QueryBaseDenomRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  },

  fromSDK(_: QueryBaseDenomRequestSDKType): QueryBaseDenomRequest {
    return {};
  },

  toSDK(_: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryBaseDenomRequestAmino): QueryBaseDenomRequest {
    return {};
  },

  toAmino(_: QueryBaseDenomRequest): QueryBaseDenomRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryBaseDenomResponse(): QueryBaseDenomResponse {
  return {
    baseDenom: ""
  };
}

export const QueryBaseDenomResponse = {
  encode(message: QueryBaseDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBaseDenomResponse {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },

  toJSON(message: QueryBaseDenomResponse): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },

  fromSDK(object: QueryBaseDenomResponseSDKType): QueryBaseDenomResponse {
    return {
      baseDenom: object?.base_denom
    };
  },

  toSDK(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    return obj;
  },

  fromAmino(object: QueryBaseDenomResponseAmino): QueryBaseDenomResponse {
    return {
      baseDenom: object.base_denom
    };
  },

  toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    return obj;
  }

};