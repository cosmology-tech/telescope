import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PositionWithUnderlyingAssetBreakdown, PositionWithUnderlyingAssetBreakdownSDKType } from "../position";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "../params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/** =============================== UserPositions */
export interface QueryUserPositionsRequest {
  address: string;
  poolId: bigint;
}
/** =============================== UserPositions */
export interface QueryUserPositionsRequestSDKType {
  address: string;
  pool_id: bigint;
}
export interface QueryUserPositionsResponse {
  positions: PositionWithUnderlyingAssetBreakdown[];
}
export interface QueryUserPositionsResponseSDKType {
  positions: PositionWithUnderlyingAssetBreakdownSDKType[];
}
/** =============================== PositionById */
export interface QueryPositionByIdRequest {
  positionId: bigint;
}
/** =============================== PositionById */
export interface QueryPositionByIdRequestSDKType {
  position_id: bigint;
}
export interface QueryPositionByIdResponse {
  position: PositionWithUnderlyingAssetBreakdown;
}
export interface QueryPositionByIdResponseSDKType {
  position: PositionWithUnderlyingAssetBreakdownSDKType;
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
/** =============================== ModuleParams */
export interface QueryParamsRequest {}
/** =============================== ModuleParams */
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface TickLiquidityNet {
  liquidityNet: string;
  tickIndex: string;
}
export interface TickLiquidityNetSDKType {
  liquidity_net: string;
  tick_index: string;
}
export interface LiquidityDepthWithRange {
  liquidityAmount: string;
  lowerTick: string;
  upperTick: string;
}
export interface LiquidityDepthWithRangeSDKType {
  liquidity_amount: string;
  lower_tick: string;
  upper_tick: string;
}
/** =============================== LiquidityNetInDirection */
export interface QueryLiquidityNetInDirectionRequest {
  poolId: bigint;
  tokenIn: string;
  startTick?: string;
  boundTick?: string;
}
/** =============================== LiquidityNetInDirection */
export interface QueryLiquidityNetInDirectionRequestSDKType {
  pool_id: bigint;
  token_in: string;
  start_tick?: string;
  bound_tick?: string;
}
export interface QueryLiquidityNetInDirectionResponse {
  liquidityDepths: TickLiquidityNet[];
  currentTick: bigint;
  currentLiquidity: string;
}
export interface QueryLiquidityNetInDirectionResponseSDKType {
  liquidity_depths: TickLiquidityNetSDKType[];
  current_tick: bigint;
  current_liquidity: string;
}
/** =============================== TotalLiquidityForRange */
export interface QueryTotalLiquidityForRangeRequest {
  poolId: bigint;
}
/** =============================== TotalLiquidityForRange */
export interface QueryTotalLiquidityForRangeRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalLiquidityForRangeResponse {
  liquidity: LiquidityDepthWithRange[];
}
export interface QueryTotalLiquidityForRangeResponseSDKType {
  liquidity: LiquidityDepthWithRangeSDKType[];
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequest {
  positionId: bigint;
}
/** ===================== MsgQueryClaimableFees */
export interface QueryClaimableFeesRequestSDKType {
  position_id: bigint;
}
export interface QueryClaimableFeesResponse {
  claimableFees: Coin[];
}
export interface QueryClaimableFeesResponseSDKType {
  claimable_fees: CoinSDKType[];
}
function createBaseQueryUserPositionsRequest(): QueryUserPositionsRequest {
  return {
    address: "",
    poolId: BigInt(0)
  };
}
export const QueryUserPositionsRequest = {
  encode(message: QueryUserPositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPositionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPositionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPositionsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryUserPositionsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUserPositionsRequest>): QueryUserPositionsRequest {
    const message = createBaseQueryUserPositionsRequest();
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryUserPositionsRequestSDKType): QueryUserPositionsRequest {
    return {
      address: object?.address,
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): QueryUserPositionsRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryUserPositionsRequest): QueryUserPositionsRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryUserPositionsResponse(): QueryUserPositionsResponse {
  return {
    positions: []
  };
}
export const QueryUserPositionsResponse = {
  encode(message: QueryUserPositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.positions) {
      PositionWithUnderlyingAssetBreakdown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPositionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(PositionWithUnderlyingAssetBreakdown.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPositionsResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => PositionWithUnderlyingAssetBreakdown.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryUserPositionsResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? PositionWithUnderlyingAssetBreakdown.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUserPositionsResponse>): QueryUserPositionsResponse {
    const message = createBaseQueryUserPositionsResponse();
    message.positions = object.positions?.map(e => PositionWithUnderlyingAssetBreakdown.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryUserPositionsResponseSDKType): QueryUserPositionsResponse {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => PositionWithUnderlyingAssetBreakdown.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryUserPositionsResponseSDKType {
    return {
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => PositionWithUnderlyingAssetBreakdown.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryUserPositionsResponse): QueryUserPositionsResponseSDKType {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? PositionWithUnderlyingAssetBreakdown.toSDK(e) : undefined);
    } else {
      obj.positions = [];
    }
    return obj;
  }
};
function createBaseQueryPositionByIdRequest(): QueryPositionByIdRequest {
  return {
    positionId: BigInt(0)
  };
}
export const QueryPositionByIdRequest = {
  encode(message: QueryPositionByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPositionByIdRequest {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPositionByIdRequest): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPositionByIdRequest>): QueryPositionByIdRequest {
    const message = createBaseQueryPositionByIdRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryPositionByIdRequestSDKType): QueryPositionByIdRequest {
    return {
      positionId: object?.position_id
    };
  },
  fromSDKJSON(object: any): QueryPositionByIdRequestSDKType {
    return {
      position_id: isSet(object.position_id) ? BigInt(object.position_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryPositionByIdRequest): QueryPositionByIdRequestSDKType {
    const obj: any = {};
    obj.position_id = message.positionId;
    return obj;
  }
};
function createBaseQueryPositionByIdResponse(): QueryPositionByIdResponse {
  return {
    position: undefined
  };
}
export const QueryPositionByIdResponse = {
  encode(message: QueryPositionByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      PositionWithUnderlyingAssetBreakdown.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPositionByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPositionByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = PositionWithUnderlyingAssetBreakdown.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPositionByIdResponse {
    return {
      position: isSet(object.position) ? PositionWithUnderlyingAssetBreakdown.fromJSON(object.position) : undefined
    };
  },
  toJSON(message: QueryPositionByIdResponse): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? PositionWithUnderlyingAssetBreakdown.toJSON(message.position) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryPositionByIdResponse>): QueryPositionByIdResponse {
    const message = createBaseQueryPositionByIdResponse();
    message.position = object.position !== undefined && object.position !== null ? PositionWithUnderlyingAssetBreakdown.fromPartial(object.position) : undefined;
    return message;
  },
  fromSDK(object: QueryPositionByIdResponseSDKType): QueryPositionByIdResponse {
    return {
      position: object.position ? PositionWithUnderlyingAssetBreakdown.fromSDK(object.position) : undefined
    };
  },
  fromSDKJSON(object: any): QueryPositionByIdResponseSDKType {
    return {
      position: isSet(object.position) ? PositionWithUnderlyingAssetBreakdown.fromSDKJSON(object.position) : undefined
    };
  },
  toSDK(message: QueryPositionByIdResponse): QueryPositionByIdResponseSDKType {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? PositionWithUnderlyingAssetBreakdown.toSDK(message.position) : undefined);
    return obj;
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolsRequestSDKType): QueryPoolsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryPoolsRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
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
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryPoolsResponseSDKType): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryPoolsResponseSDKType {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Any.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  }
};
function createBaseTickLiquidityNet(): TickLiquidityNet {
  return {
    liquidityNet: "",
    tickIndex: ""
  };
}
export const TickLiquidityNet = {
  encode(message: TickLiquidityNet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityNet !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
    }
    if (message.tickIndex !== "") {
      writer.uint32(18).string(message.tickIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidityNet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidityNet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityNet = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tickIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickLiquidityNet {
    return {
      liquidityNet: isSet(object.liquidityNet) ? String(object.liquidityNet) : "",
      tickIndex: isSet(object.tickIndex) ? String(object.tickIndex) : ""
    };
  },
  toJSON(message: TickLiquidityNet): unknown {
    const obj: any = {};
    message.liquidityNet !== undefined && (obj.liquidityNet = message.liquidityNet);
    message.tickIndex !== undefined && (obj.tickIndex = message.tickIndex);
    return obj;
  },
  fromPartial(object: DeepPartial<TickLiquidityNet>): TickLiquidityNet {
    const message = createBaseTickLiquidityNet();
    message.liquidityNet = object.liquidityNet ?? "";
    message.tickIndex = object.tickIndex ?? "";
    return message;
  },
  fromSDK(object: TickLiquidityNetSDKType): TickLiquidityNet {
    return {
      liquidityNet: object?.liquidity_net,
      tickIndex: object?.tick_index
    };
  },
  fromSDKJSON(object: any): TickLiquidityNetSDKType {
    return {
      liquidity_net: isSet(object.liquidity_net) ? String(object.liquidity_net) : "",
      tick_index: isSet(object.tick_index) ? String(object.tick_index) : ""
    };
  },
  toSDK(message: TickLiquidityNet): TickLiquidityNetSDKType {
    const obj: any = {};
    obj.liquidity_net = message.liquidityNet;
    obj.tick_index = message.tickIndex;
    return obj;
  }
};
function createBaseLiquidityDepthWithRange(): LiquidityDepthWithRange {
  return {
    liquidityAmount: "",
    lowerTick: "",
    upperTick: ""
  };
}
export const LiquidityDepthWithRange = {
  encode(message: LiquidityDepthWithRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityAmount !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.liquidityAmount, 18).atomics);
    }
    if (message.lowerTick !== "") {
      writer.uint32(18).string(message.lowerTick);
    }
    if (message.upperTick !== "") {
      writer.uint32(26).string(message.upperTick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityDepthWithRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityDepthWithRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityAmount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lowerTick = reader.string();
          break;
        case 3:
          message.upperTick = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityDepthWithRange {
    return {
      liquidityAmount: isSet(object.liquidityAmount) ? String(object.liquidityAmount) : "",
      lowerTick: isSet(object.lowerTick) ? String(object.lowerTick) : "",
      upperTick: isSet(object.upperTick) ? String(object.upperTick) : ""
    };
  },
  toJSON(message: LiquidityDepthWithRange): unknown {
    const obj: any = {};
    message.liquidityAmount !== undefined && (obj.liquidityAmount = message.liquidityAmount);
    message.lowerTick !== undefined && (obj.lowerTick = message.lowerTick);
    message.upperTick !== undefined && (obj.upperTick = message.upperTick);
    return obj;
  },
  fromPartial(object: DeepPartial<LiquidityDepthWithRange>): LiquidityDepthWithRange {
    const message = createBaseLiquidityDepthWithRange();
    message.liquidityAmount = object.liquidityAmount ?? "";
    message.lowerTick = object.lowerTick ?? "";
    message.upperTick = object.upperTick ?? "";
    return message;
  },
  fromSDK(object: LiquidityDepthWithRangeSDKType): LiquidityDepthWithRange {
    return {
      liquidityAmount: object?.liquidity_amount,
      lowerTick: object?.lower_tick,
      upperTick: object?.upper_tick
    };
  },
  fromSDKJSON(object: any): LiquidityDepthWithRangeSDKType {
    return {
      liquidity_amount: isSet(object.liquidity_amount) ? String(object.liquidity_amount) : "",
      lower_tick: isSet(object.lower_tick) ? String(object.lower_tick) : "",
      upper_tick: isSet(object.upper_tick) ? String(object.upper_tick) : ""
    };
  },
  toSDK(message: LiquidityDepthWithRange): LiquidityDepthWithRangeSDKType {
    const obj: any = {};
    obj.liquidity_amount = message.liquidityAmount;
    obj.lower_tick = message.lowerTick;
    obj.upper_tick = message.upperTick;
    return obj;
  }
};
function createBaseQueryLiquidityNetInDirectionRequest(): QueryLiquidityNetInDirectionRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    startTick: undefined,
    boundTick: undefined
  };
}
export const QueryLiquidityNetInDirectionRequest = {
  encode(message: QueryLiquidityNetInDirectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.startTick !== undefined) {
      writer.uint32(26).string(message.startTick);
    }
    if (message.boundTick !== undefined) {
      writer.uint32(34).string(message.boundTick);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityNetInDirectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityNetInDirectionRequest();
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
          message.startTick = reader.string();
          break;
        case 4:
          message.boundTick = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityNetInDirectionRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      startTick: isSet(object.startTick) ? String(object.startTick) : undefined,
      boundTick: isSet(object.boundTick) ? String(object.boundTick) : undefined
    };
  },
  toJSON(message: QueryLiquidityNetInDirectionRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.startTick !== undefined && (obj.startTick = message.startTick);
    message.boundTick !== undefined && (obj.boundTick = message.boundTick);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLiquidityNetInDirectionRequest>): QueryLiquidityNetInDirectionRequest {
    const message = createBaseQueryLiquidityNetInDirectionRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.startTick = object.startTick ?? undefined;
    message.boundTick = object.boundTick ?? undefined;
    return message;
  },
  fromSDK(object: QueryLiquidityNetInDirectionRequestSDKType): QueryLiquidityNetInDirectionRequest {
    return {
      poolId: object?.pool_id,
      tokenIn: object?.token_in,
      startTick: object?.start_tick,
      boundTick: object?.bound_tick
    };
  },
  fromSDKJSON(object: any): QueryLiquidityNetInDirectionRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? String(object.token_in) : "",
      start_tick: isSet(object.start_tick) ? String(object.start_tick) : undefined,
      bound_tick: isSet(object.bound_tick) ? String(object.bound_tick) : undefined
    };
  },
  toSDK(message: QueryLiquidityNetInDirectionRequest): QueryLiquidityNetInDirectionRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.token_in = message.tokenIn;
    obj.start_tick = message.startTick;
    obj.bound_tick = message.boundTick;
    return obj;
  }
};
function createBaseQueryLiquidityNetInDirectionResponse(): QueryLiquidityNetInDirectionResponse {
  return {
    liquidityDepths: [],
    currentTick: BigInt(0),
    currentLiquidity: ""
  };
}
export const QueryLiquidityNetInDirectionResponse = {
  encode(message: QueryLiquidityNetInDirectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityDepths) {
      TickLiquidityNet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentTick !== BigInt(0)) {
      writer.uint32(16).int64(message.currentTick);
    }
    if (message.currentLiquidity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.currentLiquidity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidityNetInDirectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidityNetInDirectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityDepths.push(TickLiquidityNet.decode(reader, reader.uint32()));
          break;
        case 2:
          message.currentTick = reader.int64();
          break;
        case 3:
          message.currentLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityNetInDirectionResponse {
    return {
      liquidityDepths: Array.isArray(object?.liquidityDepths) ? object.liquidityDepths.map((e: any) => TickLiquidityNet.fromJSON(e)) : [],
      currentTick: isSet(object.currentTick) ? BigInt(object.currentTick.toString()) : BigInt(0),
      currentLiquidity: isSet(object.currentLiquidity) ? String(object.currentLiquidity) : ""
    };
  },
  toJSON(message: QueryLiquidityNetInDirectionResponse): unknown {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidityDepths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toJSON(e) : undefined);
    } else {
      obj.liquidityDepths = [];
    }
    message.currentTick !== undefined && (obj.currentTick = (message.currentTick || BigInt(0)).toString());
    message.currentLiquidity !== undefined && (obj.currentLiquidity = message.currentLiquidity);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLiquidityNetInDirectionResponse>): QueryLiquidityNetInDirectionResponse {
    const message = createBaseQueryLiquidityNetInDirectionResponse();
    message.liquidityDepths = object.liquidityDepths?.map(e => TickLiquidityNet.fromPartial(e)) || [];
    message.currentTick = object.currentTick !== undefined && object.currentTick !== null ? BigInt(object.currentTick.toString()) : BigInt(0);
    message.currentLiquidity = object.currentLiquidity ?? "";
    return message;
  },
  fromSDK(object: QueryLiquidityNetInDirectionResponseSDKType): QueryLiquidityNetInDirectionResponse {
    return {
      liquidityDepths: Array.isArray(object?.liquidity_depths) ? object.liquidity_depths.map((e: any) => TickLiquidityNet.fromSDK(e)) : [],
      currentTick: object?.current_tick,
      currentLiquidity: object?.current_liquidity
    };
  },
  fromSDKJSON(object: any): QueryLiquidityNetInDirectionResponseSDKType {
    return {
      liquidity_depths: Array.isArray(object?.liquidity_depths) ? object.liquidity_depths.map((e: any) => TickLiquidityNet.fromSDKJSON(e)) : [],
      current_tick: isSet(object.current_tick) ? BigInt(object.current_tick.toString()) : BigInt(0),
      current_liquidity: isSet(object.current_liquidity) ? String(object.current_liquidity) : ""
    };
  },
  toSDK(message: QueryLiquidityNetInDirectionResponse): QueryLiquidityNetInDirectionResponseSDKType {
    const obj: any = {};
    if (message.liquidityDepths) {
      obj.liquidity_depths = message.liquidityDepths.map(e => e ? TickLiquidityNet.toSDK(e) : undefined);
    } else {
      obj.liquidity_depths = [];
    }
    obj.current_tick = message.currentTick;
    obj.current_liquidity = message.currentLiquidity;
    return obj;
  }
};
function createBaseQueryTotalLiquidityForRangeRequest(): QueryTotalLiquidityForRangeRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalLiquidityForRangeRequest = {
  encode(message: QueryTotalLiquidityForRangeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityForRangeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityForRangeRequest();
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
  fromJSON(object: any): QueryTotalLiquidityForRangeRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryTotalLiquidityForRangeRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalLiquidityForRangeRequest>): QueryTotalLiquidityForRangeRequest {
    const message = createBaseQueryTotalLiquidityForRangeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryTotalLiquidityForRangeRequestSDKType): QueryTotalLiquidityForRangeRequest {
    return {
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): QueryTotalLiquidityForRangeRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryTotalLiquidityForRangeRequest): QueryTotalLiquidityForRangeRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseQueryTotalLiquidityForRangeResponse(): QueryTotalLiquidityForRangeResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalLiquidityForRangeResponse = {
  encode(message: QueryTotalLiquidityForRangeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      LiquidityDepthWithRange.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityForRangeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityForRangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(LiquidityDepthWithRange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidityForRangeResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => LiquidityDepthWithRange.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTotalLiquidityForRangeResponse): unknown {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? LiquidityDepthWithRange.toJSON(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalLiquidityForRangeResponse>): QueryTotalLiquidityForRangeResponse {
    const message = createBaseQueryTotalLiquidityForRangeResponse();
    message.liquidity = object.liquidity?.map(e => LiquidityDepthWithRange.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryTotalLiquidityForRangeResponseSDKType): QueryTotalLiquidityForRangeResponse {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => LiquidityDepthWithRange.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryTotalLiquidityForRangeResponseSDKType {
    return {
      liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e: any) => LiquidityDepthWithRange.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryTotalLiquidityForRangeResponse): QueryTotalLiquidityForRangeResponseSDKType {
    const obj: any = {};
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map(e => e ? LiquidityDepthWithRange.toSDK(e) : undefined);
    } else {
      obj.liquidity = [];
    }
    return obj;
  }
};
function createBaseQueryClaimableFeesRequest(): QueryClaimableFeesRequest {
  return {
    positionId: BigInt(0)
  };
}
export const QueryClaimableFeesRequest = {
  encode(message: QueryClaimableFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.positionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimableFeesRequest {
    return {
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryClaimableFeesRequest): unknown {
    const obj: any = {};
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClaimableFeesRequest>): QueryClaimableFeesRequest {
    const message = createBaseQueryClaimableFeesRequest();
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: QueryClaimableFeesRequestSDKType): QueryClaimableFeesRequest {
    return {
      positionId: object?.position_id
    };
  },
  fromSDKJSON(object: any): QueryClaimableFeesRequestSDKType {
    return {
      position_id: isSet(object.position_id) ? BigInt(object.position_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryClaimableFeesRequest): QueryClaimableFeesRequestSDKType {
    const obj: any = {};
    obj.position_id = message.positionId;
    return obj;
  }
};
function createBaseQueryClaimableFeesResponse(): QueryClaimableFeesResponse {
  return {
    claimableFees: []
  };
}
export const QueryClaimableFeesResponse = {
  encode(message: QueryClaimableFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimableFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClaimableFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimableFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimableFeesResponse {
    return {
      claimableFees: Array.isArray(object?.claimableFees) ? object.claimableFees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryClaimableFeesResponse): unknown {
    const obj: any = {};
    if (message.claimableFees) {
      obj.claimableFees = message.claimableFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimableFees = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClaimableFeesResponse>): QueryClaimableFeesResponse {
    const message = createBaseQueryClaimableFeesResponse();
    message.claimableFees = object.claimableFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryClaimableFeesResponseSDKType): QueryClaimableFeesResponse {
    return {
      claimableFees: Array.isArray(object?.claimable_fees) ? object.claimable_fees.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryClaimableFeesResponseSDKType {
    return {
      claimable_fees: Array.isArray(object?.claimable_fees) ? object.claimable_fees.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryClaimableFeesResponse): QueryClaimableFeesResponseSDKType {
    const obj: any = {};
    if (message.claimableFees) {
      obj.claimable_fees = message.claimableFees.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.claimable_fees = [];
    }
    return obj;
  }
};