import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.poolmanager.v1beta1";
/** =============================== Params */
export interface ParamsRequest {}
/** =============================== Params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
  poolId: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSinglePoolSwapExactAmountInRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOutDenom: string;
}
export interface EstimateSinglePoolSwapExactAmountInRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out_denom: string;
}
export interface EstimateSwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
  poolId: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequest {
  poolId: bigint;
  tokenInDenom: string;
  tokenOut: string;
}
export interface EstimateSinglePoolSwapExactAmountOutRequestSDKType {
  pool_id: bigint;
  token_in_denom: string;
  token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {}
export interface NumPoolsResponse {
  numPools: bigint;
}
export interface NumPoolsResponseSDKType {
  num_pools: bigint;
}
/** =============================== Pool */
export interface PoolRequest {
  poolId: bigint;
}
/** =============================== Pool */
export interface PoolRequestSDKType {
  pool_id: bigint;
}
export interface PoolResponse {
  pool?: Any;
}
export interface PoolResponseSDKType {
  pool?: AnySDKType;
}
/** =============================== AllPools */
export interface AllPoolsRequest {
  poolId: bigint;
}
/** =============================== AllPools */
export interface AllPoolsRequestSDKType {
  pool_id: bigint;
}
export interface AllPoolsResponse {
  pools: Any[];
}
export interface AllPoolsResponseSDKType {
  pools: AnySDKType[];
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
  spot_price: string;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromSDKJSON(_: any): ParamsRequestSDKType {
    return {};
  },
  toSDK(_: ParamsRequest): ParamsRequestSDKType {
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
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): ParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseEstimateSwapExactAmountInRequest(): EstimateSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    routes: []
  };
}
export const EstimateSwapExactAmountInRequest = {
  encode(message: EstimateSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolId = reader.uint64();
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
  fromJSON(object: any): EstimateSwapExactAmountInRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: EstimateSwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest {
    const message = createBaseEstimateSwapExactAmountInRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountInRequestSDKType): EstimateSwapExactAmountInRequest {
    return {
      poolId: object?.pool_id,
      tokenIn: object?.token_in,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): EstimateSwapExactAmountInRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestSDKType {
    const obj: any = {};
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
function createBaseEstimateSinglePoolSwapExactAmountInRequest(): EstimateSinglePoolSwapExactAmountInRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOutDenom: ""
  };
}
export const EstimateSinglePoolSwapExactAmountInRequest = {
  encode(message: EstimateSinglePoolSwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSinglePoolSwapExactAmountInRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  toJSON(message: EstimateSinglePoolSwapExactAmountInRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSinglePoolSwapExactAmountInRequest>): EstimateSinglePoolSwapExactAmountInRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountInRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromSDK(object: EstimateSinglePoolSwapExactAmountInRequestSDKType): EstimateSinglePoolSwapExactAmountInRequest {
    return {
      poolId: object?.pool_id,
      tokenIn: object?.token_in,
      tokenOutDenom: object?.token_out_denom
    };
  },
  fromSDKJSON(object: any): EstimateSinglePoolSwapExactAmountInRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : ""
    };
  },
  toSDK(message: EstimateSinglePoolSwapExactAmountInRequest): EstimateSinglePoolSwapExactAmountInRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_in = message.tokenIn;
    obj.token_out_denom = message.tokenOutDenom;
    return obj;
  }
};
function createBaseEstimateSwapExactAmountInResponse(): EstimateSwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const EstimateSwapExactAmountInResponse = {
  encode(message: EstimateSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountInResponse();
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
  fromJSON(object: any): EstimateSwapExactAmountInResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse {
    const message = createBaseEstimateSwapExactAmountInResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountInResponseSDKType): EstimateSwapExactAmountInResponse {
    return {
      tokenOutAmount: object?.token_out_amount
    };
  },
  fromSDKJSON(object: any): EstimateSwapExactAmountInResponseSDKType {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toSDK(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.tokenOutAmount;
    return obj;
  }
};
function createBaseEstimateSwapExactAmountOutRequest(): EstimateSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    routes: [],
    tokenOut: ""
  };
}
export const EstimateSwapExactAmountOutRequest = {
  encode(message: EstimateSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.poolId = reader.uint64();
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
  fromJSON(object: any): EstimateSwapExactAmountOutRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest {
    const message = createBaseEstimateSwapExactAmountOutRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountOutRequestSDKType): EstimateSwapExactAmountOutRequest {
    return {
      poolId: object?.pool_id,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      tokenOut: object?.token_out
    };
  },
  fromSDKJSON(object: any): EstimateSwapExactAmountOutRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDKJSON(e)) : [],
      token_out: isSet(object.token_out) ? String(object.token_out) : ""
    };
  },
  toSDK(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestSDKType {
    const obj: any = {};
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
function createBaseEstimateSinglePoolSwapExactAmountOutRequest(): EstimateSinglePoolSwapExactAmountOutRequest {
  return {
    poolId: BigInt(0),
    tokenInDenom: "",
    tokenOut: ""
  };
}
export const EstimateSinglePoolSwapExactAmountOutRequest = {
  encode(message: EstimateSinglePoolSwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSinglePoolSwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EstimateSinglePoolSwapExactAmountOutRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: EstimateSinglePoolSwapExactAmountOutRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSinglePoolSwapExactAmountOutRequest>): EstimateSinglePoolSwapExactAmountOutRequest {
    const message = createBaseEstimateSinglePoolSwapExactAmountOutRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromSDK(object: EstimateSinglePoolSwapExactAmountOutRequestSDKType): EstimateSinglePoolSwapExactAmountOutRequest {
    return {
      poolId: object?.pool_id,
      tokenInDenom: object?.token_in_denom,
      tokenOut: object?.token_out
    };
  },
  fromSDKJSON(object: any): EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : "",
      token_out: isSet(object.token_out) ? String(object.token_out) : ""
    };
  },
  toSDK(message: EstimateSinglePoolSwapExactAmountOutRequest): EstimateSinglePoolSwapExactAmountOutRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_in_denom = message.tokenInDenom;
    obj.token_out = message.tokenOut;
    return obj;
  }
};
function createBaseEstimateSwapExactAmountOutResponse(): EstimateSwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const EstimateSwapExactAmountOutResponse = {
  encode(message: EstimateSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSwapExactAmountOutResponse();
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
  fromJSON(object: any): EstimateSwapExactAmountOutResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },
  toJSON(message: EstimateSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    return obj;
  },
  fromPartial(object: DeepPartial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse {
    const message = createBaseEstimateSwapExactAmountOutResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  },
  fromSDK(object: EstimateSwapExactAmountOutResponseSDKType): EstimateSwapExactAmountOutResponse {
    return {
      tokenInAmount: object?.token_in_amount
    };
  },
  fromSDKJSON(object: any): EstimateSwapExactAmountOutResponseSDKType {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toSDK(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.tokenInAmount;
    return obj;
  }
};
function createBaseNumPoolsRequest(): NumPoolsRequest {
  return {};
}
export const NumPoolsRequest = {
  encode(_: NumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsRequest();
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
  fromJSON(_: any): NumPoolsRequest {
    return {};
  },
  toJSON(_: NumPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<NumPoolsRequest>): NumPoolsRequest {
    const message = createBaseNumPoolsRequest();
    return message;
  },
  fromSDK(_: NumPoolsRequestSDKType): NumPoolsRequest {
    return {};
  },
  fromSDKJSON(_: any): NumPoolsRequestSDKType {
    return {};
  },
  toSDK(_: NumPoolsRequest): NumPoolsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseNumPoolsResponse(): NumPoolsResponse {
  return {
    numPools: BigInt(0)
  };
}
export const NumPoolsResponse = {
  encode(message: NumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumPoolsResponse {
    return {
      numPools: isSet(object.numPools) ? BigInt(object.numPools.toString()) : BigInt(0)
    };
  },
  toJSON(message: NumPoolsResponse): unknown {
    const obj: any = {};
    message.numPools !== undefined && (obj.numPools = (message.numPools || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<NumPoolsResponse>): NumPoolsResponse {
    const message = createBaseNumPoolsResponse();
    message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: NumPoolsResponseSDKType): NumPoolsResponse {
    return {
      numPools: object?.num_pools
    };
  },
  fromSDKJSON(object: any): NumPoolsResponseSDKType {
    return {
      num_pools: isSet(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
    };
  },
  toSDK(message: NumPoolsResponse): NumPoolsResponseSDKType {
    const obj: any = {};
    obj.num_pools = message.numPools;
    return obj;
  }
};
function createBasePoolRequest(): PoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const PoolRequest = {
  encode(message: PoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: PoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<PoolRequest>): PoolRequest {
    const message = createBasePoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: PoolRequestSDKType): PoolRequest {
    return {
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): PoolRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: PoolRequest): PoolRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBasePoolResponse(): PoolResponse {
  return {
    pool: undefined
  };
}
export const PoolResponse = {
  encode(message: PoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
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
  fromJSON(object: any): PoolResponse {
    return {
      pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: PoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    return message;
  },
  fromSDK(object: PoolResponseSDKType): PoolResponse {
    return {
      pool: object.pool ? Any.fromSDK(object.pool) : undefined
    };
  },
  fromSDKJSON(object: any): PoolResponseSDKType {
    return {
      pool: isSet(object.pool) ? Any.fromSDKJSON(object.pool) : undefined
    };
  },
  toSDK(message: PoolResponse): PoolResponseSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toSDK(message.pool) : undefined);
    return obj;
  }
};
function createBaseAllPoolsRequest(): AllPoolsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const AllPoolsRequest = {
  encode(message: AllPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllPoolsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: AllPoolsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<AllPoolsRequest>): AllPoolsRequest {
    const message = createBaseAllPoolsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: AllPoolsRequestSDKType): AllPoolsRequest {
    return {
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): AllPoolsRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: AllPoolsRequest): AllPoolsRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseAllPoolsResponse(): AllPoolsResponse {
  return {
    pools: []
  };
}
export const AllPoolsResponse = {
  encode(message: AllPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: AllPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AllPoolsResponse>): AllPoolsResponse {
    const message = createBaseAllPoolsResponse();
    message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AllPoolsResponseSDKType): AllPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AllPoolsResponseSDKType {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: AllPoolsResponse): AllPoolsResponseSDKType {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  }
};
function createBaseSpotPriceRequest(): SpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const SpotPriceRequest = {
  encode(message: SpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceRequest();
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
  fromJSON(object: any): SpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAssetDenom: isSet(object.baseAssetDenom) ? String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : ""
    };
  },
  toJSON(message: SpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.baseAssetDenom !== undefined && (obj.baseAssetDenom = message.baseAssetDenom);
    message.quoteAssetDenom !== undefined && (obj.quoteAssetDenom = message.quoteAssetDenom);
    return obj;
  },
  fromPartial(object: DeepPartial<SpotPriceRequest>): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromSDK(object: SpotPriceRequestSDKType): SpotPriceRequest {
    return {
      poolId: object?.pool_id,
      baseAssetDenom: object?.base_asset_denom,
      quoteAssetDenom: object?.quote_asset_denom
    };
  },
  fromSDKJSON(object: any): SpotPriceRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      base_asset_denom: isSet(object.base_asset_denom) ? String(object.base_asset_denom) : "",
      quote_asset_denom: isSet(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
    };
  },
  toSDK(message: SpotPriceRequest): SpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset_denom = message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom;
    return obj;
  }
};
function createBaseSpotPriceResponse(): SpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const SpotPriceResponse = {
  encode(message: SpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotPriceResponse();
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
  fromJSON(object: any): SpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  toJSON(message: SpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<SpotPriceResponse>): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromSDK(object: SpotPriceResponseSDKType): SpotPriceResponse {
    return {
      spotPrice: object?.spot_price
    };
  },
  fromSDKJSON(object: any): SpotPriceResponseSDKType {
    return {
      spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
    };
  },
  toSDK(message: SpotPriceResponse): SpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  }
};