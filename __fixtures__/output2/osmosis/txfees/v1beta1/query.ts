//@ts-nocheck
/* eslint-disable */
import { FeeToken } from "./feetoken";
import { Long, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
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
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
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
  fromPartial(_: Partial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },
  fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest {
    return {};
  },
  toAmino(_: QueryFeeTokensRequest): QueryFeeTokensRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeTokensRequestAminoMsg): QueryFeeTokensRequest {
    return QueryFeeTokensRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestAminoMsg {
    return {
      type: "osmosis/txfees/query-fee-tokens-request",
      value: QueryFeeTokensRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeTokensRequestProtoMsg): QueryFeeTokensRequest {
    return QueryFeeTokensRequest.decode(message.value);
  },
  toProto(message: QueryFeeTokensRequest): Uint8Array {
    return QueryFeeTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeTokensRequest): QueryFeeTokensRequestProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
      value: QueryFeeTokensRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return {
    feeTokens: []
  };
}
export const QueryFeeTokensResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
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
  fromPartial(object: Partial<QueryFeeTokensResponse>): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
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
  },
  fromAminoMsg(object: QueryFeeTokensResponseAminoMsg): QueryFeeTokensResponse {
    return QueryFeeTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseAminoMsg {
    return {
      type: "osmosis/txfees/query-fee-tokens-response",
      value: QueryFeeTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryFeeTokensResponseProtoMsg): QueryFeeTokensResponse {
    return QueryFeeTokensResponse.decode(message.value);
  },
  toProto(message: QueryFeeTokensResponse): Uint8Array {
    return QueryFeeTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeTokensResponse): QueryFeeTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
      value: QueryFeeTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: ""
  };
}
export const QueryDenomSpotPriceRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
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
  fromPartial(object: Partial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
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
  },
  fromAminoMsg(object: QueryDenomSpotPriceRequestAminoMsg): QueryDenomSpotPriceRequest {
    return QueryDenomSpotPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAminoMsg {
    return {
      type: "osmosis/txfees/query-denom-spot-price-request",
      value: QueryDenomSpotPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomSpotPriceRequestProtoMsg): QueryDenomSpotPriceRequest {
    return QueryDenomSpotPriceRequest.decode(message.value);
  },
  toProto(message: QueryDenomSpotPriceRequest): Uint8Array {
    return QueryDenomSpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
      value: QueryDenomSpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    poolID: Long.UZERO,
    spotPrice: ""
  };
}
export const QueryDenomSpotPriceResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
  encode(message: QueryDenomSpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    if (message.spotPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
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
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromPartial(object: Partial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    message.spotPrice = object.spotPrice ?? "";
    return message;
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
  },
  fromAminoMsg(object: QueryDenomSpotPriceResponseAminoMsg): QueryDenomSpotPriceResponse {
    return QueryDenomSpotPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAminoMsg {
    return {
      type: "osmosis/txfees/query-denom-spot-price-response",
      value: QueryDenomSpotPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomSpotPriceResponseProtoMsg): QueryDenomSpotPriceResponse {
    return QueryDenomSpotPriceResponse.decode(message.value);
  },
  toProto(message: QueryDenomSpotPriceResponse): Uint8Array {
    return QueryDenomSpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
      value: QueryDenomSpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomPoolIdRequest(): QueryDenomPoolIdRequest {
  return {
    denom: ""
  };
}
export const QueryDenomPoolIdRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
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
  fromPartial(object: Partial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
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
  },
  fromAminoMsg(object: QueryDenomPoolIdRequestAminoMsg): QueryDenomPoolIdRequest {
    return QueryDenomPoolIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAminoMsg {
    return {
      type: "osmosis/txfees/query-denom-pool-id-request",
      value: QueryDenomPoolIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomPoolIdRequestProtoMsg): QueryDenomPoolIdRequest {
    return QueryDenomPoolIdRequest.decode(message.value);
  },
  toProto(message: QueryDenomPoolIdRequest): Uint8Array {
    return QueryDenomPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
      value: QueryDenomPoolIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return {
    poolID: Long.UZERO
  };
}
export const QueryDenomPoolIdResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
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
  fromPartial(object: Partial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    return message;
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
  },
  fromAminoMsg(object: QueryDenomPoolIdResponseAminoMsg): QueryDenomPoolIdResponse {
    return QueryDenomPoolIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAminoMsg {
    return {
      type: "osmosis/txfees/query-denom-pool-id-response",
      value: QueryDenomPoolIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomPoolIdResponseProtoMsg): QueryDenomPoolIdResponse {
    return QueryDenomPoolIdResponse.decode(message.value);
  },
  toProto(message: QueryDenomPoolIdResponse): Uint8Array {
    return QueryDenomPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
      value: QueryDenomPoolIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}
export const QueryBaseDenomRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
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
  fromPartial(_: Partial<QueryBaseDenomRequest>): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  },
  fromAmino(_: QueryBaseDenomRequestAmino): QueryBaseDenomRequest {
    return {};
  },
  toAmino(_: QueryBaseDenomRequest): QueryBaseDenomRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBaseDenomRequestAminoMsg): QueryBaseDenomRequest {
    return QueryBaseDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestAminoMsg {
    return {
      type: "osmosis/txfees/query-base-denom-request",
      value: QueryBaseDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBaseDenomRequestProtoMsg): QueryBaseDenomRequest {
    return QueryBaseDenomRequest.decode(message.value);
  },
  toProto(message: QueryBaseDenomRequest): Uint8Array {
    return QueryBaseDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
      value: QueryBaseDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBaseDenomResponse(): QueryBaseDenomResponse {
  return {
    baseDenom: ""
  };
}
export const QueryBaseDenomResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
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
  fromPartial(object: Partial<QueryBaseDenomResponse>): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
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
  },
  fromAminoMsg(object: QueryBaseDenomResponseAminoMsg): QueryBaseDenomResponse {
    return QueryBaseDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseAminoMsg {
    return {
      type: "osmosis/txfees/query-base-denom-response",
      value: QueryBaseDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBaseDenomResponseProtoMsg): QueryBaseDenomResponse {
    return QueryBaseDenomResponse.decode(message.value);
  },
  toProto(message: QueryBaseDenomResponse): Uint8Array {
    return QueryBaseDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
      value: QueryBaseDenomResponse.encode(message).finish()
    };
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