import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.gamm.v2";
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest";
  value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse";
  value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseAmino {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price?: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
  aminoType: "osmosis/gamm/v2/query-spot-price-request",
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    const obj = createBaseQuerySpotPriceRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.baseAssetDenom)) obj.baseAssetDenom = String(object.baseAssetDenom);
    if (isSet(object.quoteAssetDenom)) obj.quoteAssetDenom = String(object.quoteAssetDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceRequestSDKType): QuerySpotPriceRequest {
    return {
      poolId: object?.pool_id,
      baseAssetDenom: object?.base_asset_denom,
      quoteAssetDenom: object?.quote_asset_denom
    };
  },
  toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset_denom = message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom;
    return obj;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest, useInterfaces: boolean = true): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
    return obj;
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg, useInterfaces: boolean = true): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
  aminoType: "osmosis/gamm/v2/query-spot-price-response",
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    const obj = createBaseQuerySpotPriceResponse();
    if (isSet(object.spotPrice)) obj.spotPrice = String(object.spotPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceResponseSDKType): QuerySpotPriceResponse {
    return {
      spotPrice: object?.spot_price
    };
  },
  toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse, useInterfaces: boolean = true): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    return obj;
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg, useInterfaces: boolean = true): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};