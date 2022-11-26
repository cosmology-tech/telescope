//@ts-nocheck
/* eslint-disable */
import { FeeToken } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long, Rpc } from "../../../helpers";
export const protobufPackage = "osmosis.txfees.v1beta1";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}

/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
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
export interface QueryDenomPoolIdRequest {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: Long;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
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

  fromAmino(_: QueryFeeTokensRequestSDKType): QueryFeeTokensRequest {
    return {};
  },

  toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestSDKType {
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

  fromAmino(object: QueryFeeTokensResponseSDKType): QueryFeeTokensResponse {
    return {
      feeTokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e: any) => FeeToken.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseSDKType {
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

  fromAmino(object: QueryDenomSpotPriceRequestSDKType): QueryDenomSpotPriceRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
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

  fromAmino(object: QueryDenomSpotPriceResponseSDKType): QueryDenomSpotPriceResponse {
    return {
      poolID: isSet(object.poolID) ? object.poolID : undefined,
      spotPrice: isSet(object.spot_price) ? object.spot_price : undefined
    };
  },

  toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseSDKType {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = message.poolID);
    message.spotPrice !== undefined && (obj.spot_price = message.spotPrice);
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

  fromAmino(object: QueryDenomPoolIdRequestSDKType): QueryDenomPoolIdRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
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

  fromAmino(object: QueryDenomPoolIdResponseSDKType): QueryDenomPoolIdResponse {
    return {
      poolID: isSet(object.poolID) ? object.poolID : undefined
    };
  },

  toAmino(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseSDKType {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = message.poolID);
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

  fromAmino(_: QueryBaseDenomRequestSDKType): QueryBaseDenomRequest {
    return {};
  },

  toAmino(_: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType {
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

  fromAmino(object: QueryBaseDenomResponseSDKType): QueryBaseDenomResponse {
    return {
      baseDenom: isSet(object.base_denom) ? object.base_denom : undefined
    };
  },

  toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.base_denom = message.baseDenom);
    return obj;
  }

};
export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  FeeTokens(request?: QueryFeeTokensRequest): Promise<QueryFeeTokensResponse>;

  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  DenomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse>;

  /** Returns the poolID for a specified denom input. */
  DenomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse>;

  /** Returns a list of all base denom tokens and their corresponding pools. */
  BaseDenom(request?: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FeeTokens = this.FeeTokens.bind(this);
    this.DenomSpotPrice = this.DenomSpotPrice.bind(this);
    this.DenomPoolId = this.DenomPoolId.bind(this);
    this.BaseDenom = this.BaseDenom.bind(this);
  }

  FeeTokens(request: QueryFeeTokensRequest = {}): Promise<QueryFeeTokensResponse> {
    const data = QueryFeeTokensRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "FeeTokens", data);
    return promise.then(data => QueryFeeTokensResponse.decode(new _m0.Reader(data)));
  }

  DenomSpotPrice(request: QueryDenomSpotPriceRequest): Promise<QueryDenomSpotPriceResponse> {
    const data = QueryDenomSpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomSpotPrice", data);
    return promise.then(data => QueryDenomSpotPriceResponse.decode(new _m0.Reader(data)));
  }

  DenomPoolId(request: QueryDenomPoolIdRequest): Promise<QueryDenomPoolIdResponse> {
    const data = QueryDenomPoolIdRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "DenomPoolId", data);
    return promise.then(data => QueryDenomPoolIdResponse.decode(new _m0.Reader(data)));
  }

  BaseDenom(request: QueryBaseDenomRequest = {}): Promise<QueryBaseDenomResponse> {
    const data = QueryBaseDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.txfees.v1beta1.Query", "BaseDenom", data);
    return promise.then(data => QueryBaseDenomResponse.decode(new _m0.Reader(data)));
  }

}