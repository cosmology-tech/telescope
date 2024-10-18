import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.txfees.v1beta1";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensRequestProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest";
  value: Uint8Array;
}
export interface QueryFeeTokensRequestAmino {}
export interface QueryFeeTokensRequestAminoMsg {
  type: "osmosis/txfees/query-fee-tokens-request";
  value: QueryFeeTokensRequestAmino;
}
export interface QueryFeeTokensRequestSDKType {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse";
  value: Uint8Array;
}
export interface QueryFeeTokensResponseAmino {
  fee_tokens?: FeeTokenAmino[];
}
export interface QueryFeeTokensResponseAminoMsg {
  type: "osmosis/txfees/query-fee-tokens-response";
  value: QueryFeeTokensResponseAmino;
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
export interface QueryDenomSpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest";
  value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestAmino {
  denom?: string;
}
export interface QueryDenomSpotPriceRequestAminoMsg {
  type: "osmosis/txfees/query-denom-spot-price-request";
  value: QueryDenomSpotPriceRequestAmino;
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
  poolID: bigint;
  spotPrice: string;
}
export interface QueryDenomSpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse";
  value: Uint8Array;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseAmino {
  poolID?: string;
  spot_price?: string;
}
export interface QueryDenomSpotPriceResponseAminoMsg {
  type: "osmosis/txfees/query-denom-spot-price-response";
  value: QueryDenomSpotPriceResponseAmino;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
  poolID: bigint;
  spot_price: string;
}
export interface QueryDenomPoolIdRequest {
  denom: string;
}
export interface QueryDenomPoolIdRequestProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest";
  value: Uint8Array;
}
export interface QueryDenomPoolIdRequestAmino {
  denom?: string;
}
export interface QueryDenomPoolIdRequestAminoMsg {
  type: "osmosis/txfees/query-denom-pool-id-request";
  value: QueryDenomPoolIdRequestAmino;
}
export interface QueryDenomPoolIdRequestSDKType {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: bigint;
}
export interface QueryDenomPoolIdResponseProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse";
  value: Uint8Array;
}
export interface QueryDenomPoolIdResponseAmino {
  poolID?: string;
}
export interface QueryDenomPoolIdResponseAminoMsg {
  type: "osmosis/txfees/query-denom-pool-id-response";
  value: QueryDenomPoolIdResponseAmino;
}
export interface QueryDenomPoolIdResponseSDKType {
  poolID: bigint;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomRequestProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest";
  value: Uint8Array;
}
export interface QueryBaseDenomRequestAmino {}
export interface QueryBaseDenomRequestAminoMsg {
  type: "osmosis/txfees/query-base-denom-request";
  value: QueryBaseDenomRequestAmino;
}
export interface QueryBaseDenomRequestSDKType {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
}
export interface QueryBaseDenomResponseProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse";
  value: Uint8Array;
}
export interface QueryBaseDenomResponseAmino {
  base_denom?: string;
}
export interface QueryBaseDenomResponseAminoMsg {
  type: "osmosis/txfees/query-base-denom-response";
  value: QueryBaseDenomResponseAmino;
}
export interface QueryBaseDenomResponseSDKType {
  base_denom: string;
}
function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}
export const QueryFeeTokensRequest = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
  encode(_: QueryFeeTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  },
  fromAmino(_: QueryFeeTokensRequestAmino): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
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
  encode(message: QueryFeeTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryFeeTokensResponseAmino): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.fee_tokens?.map(e => FeeToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryFeeTokensResponse): QueryFeeTokensResponseAmino {
    const obj: any = {};
    if (message.feeTokens) {
      obj.fee_tokens = message.feeTokens.map(e => e ? FeeToken.toAmino(e) : undefined);
    } else {
      obj.fee_tokens = message.feeTokens;
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
  encode(message: QueryDenomSpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomSpotPriceRequestAmino): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
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
    poolID: BigInt(0),
    spotPrice: ""
  };
}
export const QueryDenomSpotPriceResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
  encode(message: QueryDenomSpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolID !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolID);
    }
    if (message.spotPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomSpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64();
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
  fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = BigInt(object.poolID.toString());
    }
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: QueryDenomSpotPriceResponseAmino): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = BigInt(object.poolID);
    }
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseAmino {
    const obj: any = {};
    obj.poolID = message.poolID !== BigInt(0) ? message.poolID?.toString() : undefined;
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
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
  encode(message: QueryDenomPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomPoolIdRequestAmino): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
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
    poolID: BigInt(0)
  };
}
export const QueryDenomPoolIdResponse = {
  typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
  encode(message: QueryDenomPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolID !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = BigInt(object.poolID.toString());
    }
    return message;
  },
  fromAmino(object: QueryDenomPoolIdResponseAmino): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    if (object.poolID !== undefined && object.poolID !== null) {
      message.poolID = BigInt(object.poolID);
    }
    return message;
  },
  toAmino(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseAmino {
    const obj: any = {};
    obj.poolID = message.poolID !== BigInt(0) ? message.poolID?.toString() : undefined;
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
  encode(_: QueryBaseDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  },
  fromAmino(_: QueryBaseDenomRequestAmino): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
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
  encode(message: QueryBaseDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
  fromAmino(object: QueryBaseDenomResponseAmino): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    return message;
  },
  toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
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