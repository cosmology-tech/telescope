import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.gamm.v2";

/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
  poolId: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}

/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
  pool_id: Long;
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

/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}

function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: Long.UZERO,
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}

export const QuerySpotPriceRequest = {
  encode(message: QuerySpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
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
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAssetDenom: isSet(object.baseAssetDenom) ? String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : ""
    };
  },

  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
    message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
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

  fromSDKJSON(object: any): QuerySpotPriceRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromValue(object.pool_id) : Long.UZERO,
      base_asset_denom: isSet(object.base_asset_denom) ? String(object.base_asset_denom) : "",
      quote_asset_denom: isSet(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
    };
  },

  toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset_denom = message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom;
    return obj;
  }

};

function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}

export const QuerySpotPriceResponse = {
  encode(message: QuerySpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },

  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
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

  fromSDKJSON(object: any): QuerySpotPriceResponseSDKType {
    return {
      spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
    };
  },

  toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  }

};