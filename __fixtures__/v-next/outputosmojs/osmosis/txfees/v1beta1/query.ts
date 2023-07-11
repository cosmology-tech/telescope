import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.txfees.v1beta1";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensRequestSDKType {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
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
export interface QueryDenomPoolIdRequestSDKType {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: bigint;
}
export interface QueryDenomPoolIdResponseSDKType {
  poolID: bigint;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomRequestSDKType {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
}
export interface QueryBaseDenomResponseSDKType {
  base_denom: string;
}
function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}
export const QueryFeeTokensRequest = {
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
  fromJSON(_: any): QueryFeeTokensRequest {
    const obj = createBaseQueryFeeTokensRequest();
    return obj;
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
  fromSDKJSON(_: any): QueryFeeTokensRequestSDKType {
    return {};
  },
  toSDK(_: QueryFeeTokensRequest): QueryFeeTokensRequestSDKType {
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
  fromJSON(object: any): QueryFeeTokensResponse {
    const obj = createBaseQueryFeeTokensResponse();
    if (Array.isArray(object?.feeTokens)) object.feeTokens.map((e: any) => FeeToken.fromJSON(e));
    return obj;
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
  fromSDKJSON(object: any): QueryFeeTokensResponseSDKType {
    return {
      fee_tokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e: any) => FeeToken.fromSDKJSON(e)) : []
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
  }
};
function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: ""
  };
}
export const QueryDenomSpotPriceRequest = {
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
  fromJSON(object: any): QueryDenomSpotPriceRequest {
    const obj = createBaseQueryDenomSpotPriceRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
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
  fromSDKJSON(object: any): QueryDenomSpotPriceRequestSDKType {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toSDK(message: QueryDenomSpotPriceRequest): QueryDenomSpotPriceRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }
};
function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    poolID: BigInt(0),
    spotPrice: ""
  };
}
export const QueryDenomSpotPriceResponse = {
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
  fromJSON(object: any): QueryDenomSpotPriceResponse {
    const obj = createBaseQueryDenomSpotPriceResponse();
    if (isSet(object.poolID)) obj.poolID = BigInt(object.poolID.toString());
    if (isSet(object.spotPrice)) obj.spotPrice = String(object.spotPrice);
    return obj;
  },
  toJSON(message: QueryDenomSpotPriceResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromSDK(object: QueryDenomSpotPriceResponseSDKType): QueryDenomSpotPriceResponse {
    return {
      poolID: object?.poolID,
      spotPrice: object?.spot_price
    };
  },
  fromSDKJSON(object: any): QueryDenomSpotPriceResponseSDKType {
    return {
      poolID: isSet(object.poolID) ? BigInt(object.poolID.toString()) : BigInt(0),
      spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
    };
  },
  toSDK(message: QueryDenomSpotPriceResponse): QueryDenomSpotPriceResponseSDKType {
    const obj: any = {};
    obj.poolID = message.poolID;
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
  fromJSON(object: any): QueryDenomPoolIdRequest {
    const obj = createBaseQueryDenomPoolIdRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
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
  fromSDKJSON(object: any): QueryDenomPoolIdRequestSDKType {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toSDK(message: QueryDenomPoolIdRequest): QueryDenomPoolIdRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }
};
function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return {
    poolID: BigInt(0)
  };
}
export const QueryDenomPoolIdResponse = {
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
  fromJSON(object: any): QueryDenomPoolIdResponse {
    const obj = createBaseQueryDenomPoolIdResponse();
    if (isSet(object.poolID)) obj.poolID = BigInt(object.poolID.toString());
    return obj;
  },
  toJSON(message: QueryDenomPoolIdResponse): unknown {
    const obj: any = {};
    message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryDenomPoolIdResponseSDKType): QueryDenomPoolIdResponse {
    return {
      poolID: object?.poolID
    };
  },
  fromSDKJSON(object: any): QueryDenomPoolIdResponseSDKType {
    return {
      poolID: isSet(object.poolID) ? BigInt(object.poolID.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryDenomPoolIdResponse): QueryDenomPoolIdResponseSDKType {
    const obj: any = {};
    obj.poolID = message.poolID;
    return obj;
  }
};
function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}
export const QueryBaseDenomRequest = {
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
  fromJSON(_: any): QueryBaseDenomRequest {
    const obj = createBaseQueryBaseDenomRequest();
    return obj;
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
  fromSDKJSON(_: any): QueryBaseDenomRequestSDKType {
    return {};
  },
  toSDK(_: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType {
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
  fromJSON(object: any): QueryBaseDenomResponse {
    const obj = createBaseQueryBaseDenomResponse();
    if (isSet(object.baseDenom)) obj.baseDenom = String(object.baseDenom);
    return obj;
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
  fromSDKJSON(object: any): QueryBaseDenomResponseSDKType {
    return {
      base_denom: isSet(object.base_denom) ? String(object.base_denom) : ""
    };
  },
  toSDK(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType {
    const obj: any = {};
    obj.base_denom = message.baseDenom;
    return obj;
  }
};