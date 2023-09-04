import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.gamm.v1beta1";
/** =============================== Pool */
export interface QueryPoolRequest {
  poolId: Long;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
  pool_id: Long;
}
export interface QueryPoolResponse {
  pool: Any;
}
export interface QueryPoolResponseSDKType {
  pool: AnySDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryPoolsResponseSDKType {
  pools: AnySDKType[];
  pagination: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {}
export interface QueryNumPoolsResponse {
  numPools: Long;
}
export interface QueryNumPoolsResponseSDKType {
  num_pools: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
  poolId: Long;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
  pool_id: Long;
}
export interface QueryPoolTypeResponse {
  poolType: string;
}
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
  poolId: Long;
  tokensIn: Coin[];
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
  pool_id: Long;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
  shareOutAmount: string;
  tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
  share_out_amount: string;
  tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
  poolId: Long;
  shareInAmount: string;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
  pool_id: Long;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
  tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
  tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
  poolId: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
  pool_id: Long;
}
export interface QueryPoolParamsResponse {
  params: Any;
}
export interface QueryPoolParamsResponseSDKType {
  params: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
  poolId: Long;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: Long;
}
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
  poolId: Long;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
  pool_id: Long;
}
export interface QueryTotalSharesResponse {
  totalShares: Coin;
}
export interface QueryTotalSharesResponseSDKType {
  total_shares: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
  poolId: Long;
  tokensIn: Coin[];
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
  pool_id: Long;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
  tokensOut: Coin[];
  sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
  tokens_out: CoinSDKType[];
  shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
  poolId: Long;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
  pool_id: Long;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QueryPoolsWithFilterRequest {
  minLiquidity: Coin[];
  poolType: string;
  pagination: PageRequest;
}
export interface QueryPoolsWithFilterRequestSDKType {
  min_liquidity: CoinSDKType[];
  pool_type: string;
  pagination: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryPoolsWithFilterResponseSDKType {
  pools: AnySDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  poolId: Long;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: Long;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  poolId: Long;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: Long;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryPoolRequestSDKType): QueryPoolRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryPoolRequest): QueryPoolRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Any.fromPartial({})
  };
}
export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : Any.fromPartial({});
    return message;
  },
  fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse {
    return {
      pool: object.pool ? Any.fromSDK(object.pool) : undefined
    };
  },
  toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toSDK(message.pool) : undefined);
    return obj;
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: QueryPoolsRequestSDKType): QueryPoolsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsRequest): QueryPoolsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryPoolsResponseSDKType): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsResponse): QueryPoolsResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}
export const QueryNumPoolsRequest = {
  encode(_: QueryNumPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
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
  fromJSON(_: any): QueryNumPoolsRequest {
    return {};
  },
  toJSON(_: QueryNumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryNumPoolsRequest>): QueryNumPoolsRequest {
    const message = createBaseQueryNumPoolsRequest();
    return message;
  },
  fromSDK(_: QueryNumPoolsRequestSDKType): QueryNumPoolsRequest {
    return {};
  },
  toSDK(_: QueryNumPoolsRequest): QueryNumPoolsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    numPools: Long.UZERO
  };
}
export const QueryNumPoolsResponse = {
  encode(message: QueryNumPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.numPools.isZero()) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNumPoolsResponse {
    return {
      numPools: isSet(object.numPools) ? Long.fromValue(object.numPools) : Long.UZERO
    };
  },
  toJSON(message: QueryNumPoolsResponse): unknown {
    const obj: any = {};
    message.numPools !== undefined && (obj.numPools = (message.numPools || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNumPoolsResponse>): QueryNumPoolsResponse {
    const message = createBaseQueryNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? Long.fromValue(object.numPools) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryNumPoolsResponseSDKType): QueryNumPoolsResponse {
    return {
      numPools: object?.num_pools
    };
  },
  toSDK(message: QueryNumPoolsResponse): QueryNumPoolsResponseSDKType {
    const obj: any = {};
    obj.num_pools = message.numPools;
    return obj;
  }
};
function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryPoolTypeRequest = {
  encode(message: QueryPoolTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTypeRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryPoolTypeRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolTypeRequest>): QueryPoolTypeRequest {
    const message = createBaseQueryPoolTypeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryPoolTypeRequestSDKType): QueryPoolTypeRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryPoolTypeRequest): QueryPoolTypeRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    poolType: ""
  };
}
export const QueryPoolTypeResponse = {
  encode(message: QueryPoolTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolTypeResponse {
    return {
      poolType: isSet(object.poolType) ? String(object.poolType) : ""
    };
  },
  toJSON(message: QueryPoolTypeResponse): unknown {
    const obj: any = {};
    message.poolType !== undefined && (obj.poolType = message.poolType);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolTypeResponse>): QueryPoolTypeResponse {
    const message = createBaseQueryPoolTypeResponse();
    message.poolType = object.poolType ?? "";
    return message;
  },
  fromSDK(object: QueryPoolTypeResponseSDKType): QueryPoolTypeResponse {
    return {
      poolType: object?.pool_type
    };
  },
  toSDK(message: QueryPoolTypeResponse): QueryPoolTypeResponseSDKType {
    const obj: any = {};
    obj.pool_type = message.poolType;
    return obj;
  }
};
function createBaseQueryCalcJoinPoolSharesRequest(): QueryCalcJoinPoolSharesRequest {
  return {
    poolId: Long.UZERO,
    tokensIn: []
  };
}
export const QueryCalcJoinPoolSharesRequest = {
  encode(message: QueryCalcJoinPoolSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolSharesRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcJoinPoolSharesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest {
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolSharesRequestSDKType): QueryCalcJoinPoolSharesRequest {
    return {
      poolId: object?.pool_id,
      tokensIn: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  }
};
function createBaseQueryCalcJoinPoolSharesResponse(): QueryCalcJoinPoolSharesResponse {
  return {
    shareOutAmount: "",
    tokensOut: []
  };
}
export const QueryCalcJoinPoolSharesResponse = {
  encode(message: QueryCalcJoinPoolSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolSharesResponse {
    return {
      shareOutAmount: isSet(object.shareOutAmount) ? String(object.shareOutAmount) : "",
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcJoinPoolSharesResponse): unknown {
    const obj: any = {};
    message.shareOutAmount !== undefined && (obj.shareOutAmount = message.shareOutAmount);
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse {
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    message.shareOutAmount = object.shareOutAmount ?? "";
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolSharesResponseSDKType): QueryCalcJoinPoolSharesResponse {
    return {
      shareOutAmount: object?.share_out_amount,
      tokensOut: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.shareOutAmount;
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest(): QueryCalcExitPoolCoinsFromSharesRequest {
  return {
    poolId: Long.UZERO,
    shareInAmount: ""
  };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
  encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(18).string(message.shareInAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      shareInAmount: isSet(object.shareInAmount) ? String(object.shareInAmount) : ""
    };
  },
  toJSON(message: QueryCalcExitPoolCoinsFromSharesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.shareInAmount !== undefined && (obj.shareInAmount = message.shareInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.shareInAmount = object.shareInAmount ?? "";
    return message;
  },
  fromSDK(object: QueryCalcExitPoolCoinsFromSharesRequestSDKType): QueryCalcExitPoolCoinsFromSharesRequest {
    return {
      poolId: object?.pool_id,
      shareInAmount: object?.share_in_amount
    };
  },
  toSDK(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.share_in_amount = message.shareInAmount;
    return obj;
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse(): QueryCalcExitPoolCoinsFromSharesResponse {
  return {
    tokensOut: []
  };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
  encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse {
    return {
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcExitPoolCoinsFromSharesResponse): unknown {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse {
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcExitPoolCoinsFromSharesResponseSDKType): QueryCalcExitPoolCoinsFromSharesResponse {
    return {
      tokensOut: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    return obj;
  }
};
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryPoolParamsRequest = {
  encode(message: QueryPoolParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolParamsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryPoolParamsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolParamsRequest>): QueryPoolParamsRequest {
    const message = createBaseQueryPoolParamsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryPoolParamsRequestSDKType): QueryPoolParamsRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryPoolParamsRequest): QueryPoolParamsRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: Any.fromPartial({})
  };
}
export const QueryPoolParamsResponse = {
  encode(message: QueryPoolParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolParamsResponse {
    return {
      params: isSet(object.params) ? Any.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryPoolParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Any.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolParamsResponse>): QueryPoolParamsResponse {
    const message = createBaseQueryPoolParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : Any.fromPartial({});
    return message;
  },
  fromSDK(object: QueryPoolParamsResponseSDKType): QueryPoolParamsResponse {
    return {
      params: object.params ? Any.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryPoolParamsResponse): QueryPoolParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Any.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryTotalPoolLiquidityRequest = {
  encode(message: QueryTotalPoolLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalPoolLiquidityRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryTotalPoolLiquidityRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest {
    const message = createBaseQueryTotalPoolLiquidityRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryTotalPoolLiquidityRequestSDKType): QueryTotalPoolLiquidityRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalPoolLiquidityResponse = {
  encode(message: QueryTotalPoolLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalPoolLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse {
    const message = createBaseQueryTotalPoolLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalPoolLiquidityResponseSDKType): QueryTotalPoolLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  }
};
function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    poolId: Long.UZERO
  };
}
export const QueryTotalSharesRequest = {
  encode(message: QueryTotalSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSharesRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO
    };
  },
  toJSON(message: QueryTotalSharesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalSharesRequest>): QueryTotalSharesRequest {
    const message = createBaseQueryTotalSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: QueryTotalSharesRequestSDKType): QueryTotalSharesRequest {
    return {
      poolId: object?.pool_id
    };
  },
  toSDK(message: QueryTotalSharesRequest): QueryTotalSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    totalShares: Coin.fromPartial({})
  };
}
export const QueryTotalSharesResponse = {
  encode(message: QueryTotalSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSharesResponse {
    return {
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined
    };
  },
  toJSON(message: QueryTotalSharesResponse): unknown {
    const obj: any = {};
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalSharesResponse>): QueryTotalSharesResponse {
    const message = createBaseQueryTotalSharesResponse();
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : Coin.fromPartial({});
    return message;
  },
  fromSDK(object: QueryTotalSharesResponseSDKType): QueryTotalSharesResponse {
    return {
      totalShares: object.total_shares ? Coin.fromSDK(object.total_shares) : undefined
    };
  },
  toSDK(message: QueryTotalSharesResponse): QueryTotalSharesResponseSDKType {
    const obj: any = {};
    message.totalShares !== undefined && (obj.total_shares = message.totalShares ? Coin.toSDK(message.totalShares) : undefined);
    return obj;
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest(): QueryCalcJoinPoolNoSwapSharesRequest {
  return {
    poolId: Long.UZERO,
    tokensIn: []
  };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
  encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokensIn: Array.isArray(object?.tokensIn) ? object.tokensIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCalcJoinPoolNoSwapSharesRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.tokensIn) {
      obj.tokensIn = message.tokensIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensIn = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokensIn = object.tokensIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolNoSwapSharesRequestSDKType): QueryCalcJoinPoolNoSwapSharesRequest {
    return {
      poolId: object?.pool_id,
      tokensIn: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    if (message.tokensIn) {
      obj.tokens_in = message.tokensIn.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_in = [];
    }
    return obj;
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse(): QueryCalcJoinPoolNoSwapSharesResponse {
  return {
    tokensOut: [],
    sharesOut: ""
  };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
  encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse {
    return {
      tokensOut: Array.isArray(object?.tokensOut) ? object.tokensOut.map((e: any) => Coin.fromJSON(e)) : [],
      sharesOut: isSet(object.sharesOut) ? String(object.sharesOut) : ""
    };
  },
  toJSON(message: QueryCalcJoinPoolNoSwapSharesResponse): unknown {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokensOut = message.tokensOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tokensOut = [];
    }
    message.sharesOut !== undefined && (obj.sharesOut = message.sharesOut);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse {
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    message.tokensOut = object.tokensOut?.map(e => Coin.fromPartial(e)) || [];
    message.sharesOut = object.sharesOut ?? "";
    return message;
  },
  fromSDK(object: QueryCalcJoinPoolNoSwapSharesResponseSDKType): QueryCalcJoinPoolNoSwapSharesResponse {
    return {
      tokensOut: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e: any) => Coin.fromSDK(e)) : [],
      sharesOut: object?.shares_out
    };
  },
  toSDK(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    const obj: any = {};
    if (message.tokensOut) {
      obj.tokens_out = message.tokensOut.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.tokens_out = [];
    }
    obj.shares_out = message.sharesOut;
    return obj;
  }
};
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
  toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset_denom = message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom;
    return obj;
  }
};
function createBaseQueryPoolsWithFilterRequest(): QueryPoolsWithFilterRequest {
  return {
    minLiquidity: [],
    poolType: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPoolsWithFilterRequest = {
  encode(message: QueryPoolsWithFilterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolType !== "") {
      writer.uint32(18).string(message.poolType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsWithFilterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.poolType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsWithFilterRequest {
    return {
      minLiquidity: Array.isArray(object?.minLiquidity) ? object.minLiquidity.map((e: any) => Coin.fromJSON(e)) : [],
      poolType: isSet(object.poolType) ? String(object.poolType) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsWithFilterRequest): unknown {
    const obj: any = {};
    if (message.minLiquidity) {
      obj.minLiquidity = message.minLiquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minLiquidity = [];
    }
    message.poolType !== undefined && (obj.poolType = message.poolType);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest {
    const message = createBaseQueryPoolsWithFilterRequest();
    message.minLiquidity = object.minLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.poolType = object.poolType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : PageRequest.fromPartial({});
    return message;
  },
  fromSDK(object: QueryPoolsWithFilterRequestSDKType): QueryPoolsWithFilterRequest {
    return {
      minLiquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e: any) => Coin.fromSDK(e)) : [],
      poolType: object?.pool_type,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestSDKType {
    const obj: any = {};
    if (message.minLiquidity) {
      obj.min_liquidity = message.minLiquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.min_liquidity = [];
    }
    obj.pool_type = message.poolType;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }
};
function createBaseQueryPoolsWithFilterResponse(): QueryPoolsWithFilterResponse {
  return {
    pools: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPoolsWithFilterResponse = {
  encode(message: QueryPoolsWithFilterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsWithFilterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsWithFilterResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsWithFilterResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse {
    const message = createBaseQueryPoolsWithFilterResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : PageResponse.fromPartial({});
    return message;
  },
  fromSDK(object: QueryPoolsWithFilterResponseSDKType): QueryPoolsWithFilterResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
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
  toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  }
};
function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    sender: "",
    poolId: Long.UZERO,
    tokenIn: "",
    routes: []
  };
}
export const QuerySwapExactAmountInRequest = {
  encode(message: QuerySwapExactAmountInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountInRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest {
    const message = createBaseQuerySwapExactAmountInRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySwapExactAmountInRequestSDKType): QuerySwapExactAmountInRequest {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      tokenIn: object?.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    obj.token_in = message.tokenIn;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  }
};
function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const QuerySwapExactAmountInResponse = {
  encode(message: QuerySwapExactAmountInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },
  toJSON(message: QuerySwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse {
    const message = createBaseQuerySwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountInResponseSDKType): QuerySwapExactAmountInResponse {
    return {
      tokenOutAmount: object?.token_out_amount
    };
  },
  toSDK(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  }
};
function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    sender: "",
    poolId: Long.UZERO,
    routes: [],
    tokenOut: ""
  };
}
export const QuerySwapExactAmountOutRequest = {
  encode(message: QuerySwapExactAmountOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountOutRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest {
    const message = createBaseQuerySwapExactAmountOutRequest();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountOutRequestSDKType): QuerySwapExactAmountOutRequest {
    return {
      sender: object?.sender,
      poolId: object?.pool_id,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      tokenOut: object?.token_out
    };
  },
  toSDK(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_out = message.tokenOut;
    return obj;
  }
};
function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const QuerySwapExactAmountOutResponse = {
  encode(message: QuerySwapExactAmountOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapExactAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },
  toJSON(message: QuerySwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse {
    const message = createBaseQuerySwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromSDK(object: QuerySwapExactAmountOutResponseSDKType): QuerySwapExactAmountOutResponse {
    return {
      tokenInAmount: object?.token_in_amount
    };
  },
  toSDK(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  }
};
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
export const QueryTotalLiquidityRequest = {
  encode(_: QueryTotalLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
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
  fromJSON(_: any): QueryTotalLiquidityRequest {
    return {};
  },
  toJSON(_: QueryTotalLiquidityRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest {
    const message = createBaseQueryTotalLiquidityRequest();
    return message;
  },
  fromSDK(_: QueryTotalLiquidityRequestSDKType): QueryTotalLiquidityRequest {
    return {};
  },
  toSDK(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalLiquidityResponse = {
  encode(message: QueryTotalLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalLiquidityResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse {
    const message = createBaseQueryTotalLiquidityResponse();
    message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalLiquidityResponseSDKType): QueryTotalLiquidityResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  }
};