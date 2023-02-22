import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export interface Query {
  Pools(request?: DeepPartial<QueryPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsResponse>;
  NumPools(request?: DeepPartial<QueryNumPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryNumPoolsResponse>;
  TotalLiquidity(request?: DeepPartial<QueryTotalLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalLiquidityResponse>;

  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  PoolsWithFilter(request: DeepPartial<QueryPoolsWithFilterRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsWithFilterResponse>;

  /** Per Pool gRPC Endpoints */
  Pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;

  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  PoolType(request: DeepPartial<QueryPoolTypeRequest>, metadata?: grpc.Metadata): Promise<QueryPoolTypeResponse>;

  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  CalcJoinPoolNoSwapShares(request: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
  CalcJoinPoolShares(request: DeepPartial<QueryCalcJoinPoolSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolSharesResponse>;
  CalcExitPoolCoinsFromShares(request: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
  PoolParams(request: DeepPartial<QueryPoolParamsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolParamsResponse>;
  TotalPoolLiquidity(request: DeepPartial<QueryTotalPoolLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalPoolLiquidityResponse>;
  TotalShares(request: DeepPartial<QueryTotalSharesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSharesResponse>;

  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  SpotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse>;

  /** Estimate the swap. */
  EstimateSwapExactAmountIn(request: DeepPartial<QuerySwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountInResponse>;
  EstimateSwapExactAmountOut(request: DeepPartial<QuerySwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountOutResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolNoSwapShares = this.calcJoinPoolNoSwapShares.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }

  pools(request: DeepPartial<QueryPoolsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryPoolsResponse> {
    return this.rpc.unary(QueryPoolsDesc, QueryPoolsRequest.fromPartial(request), metadata);
  }

  numPools(request: DeepPartial<QueryNumPoolsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryNumPoolsResponse> {
    return this.rpc.unary(QueryNumPoolsDesc, QueryNumPoolsRequest.fromPartial(request), metadata);
  }

  totalLiquidity(request: DeepPartial<QueryTotalLiquidityRequest> = {}, metadata?: grpc.Metadata): Promise<QueryTotalLiquidityResponse> {
    return this.rpc.unary(QueryTotalLiquidityDesc, QueryTotalLiquidityRequest.fromPartial(request), metadata);
  }

  poolsWithFilter(request: DeepPartial<QueryPoolsWithFilterRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsWithFilterResponse> {
    return this.rpc.unary(QueryPoolsWithFilterDesc, QueryPoolsWithFilterRequest.fromPartial(request), metadata);
  }

  pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryPoolRequest.fromPartial(request), metadata);
  }

  poolType(request: DeepPartial<QueryPoolTypeRequest>, metadata?: grpc.Metadata): Promise<QueryPoolTypeResponse> {
    return this.rpc.unary(QueryPoolTypeDesc, QueryPoolTypeRequest.fromPartial(request), metadata);
  }

  calcJoinPoolNoSwapShares(request: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    return this.rpc.unary(QueryCalcJoinPoolNoSwapSharesDesc, QueryCalcJoinPoolNoSwapSharesRequest.fromPartial(request), metadata);
  }

  calcJoinPoolShares(request: DeepPartial<QueryCalcJoinPoolSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolSharesResponse> {
    return this.rpc.unary(QueryCalcJoinPoolSharesDesc, QueryCalcJoinPoolSharesRequest.fromPartial(request), metadata);
  }

  calcExitPoolCoinsFromShares(request: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    return this.rpc.unary(QueryCalcExitPoolCoinsFromSharesDesc, QueryCalcExitPoolCoinsFromSharesRequest.fromPartial(request), metadata);
  }

  poolParams(request: DeepPartial<QueryPoolParamsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolParamsResponse> {
    return this.rpc.unary(QueryPoolParamsDesc, QueryPoolParamsRequest.fromPartial(request), metadata);
  }

  totalPoolLiquidity(request: DeepPartial<QueryTotalPoolLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalPoolLiquidityResponse> {
    return this.rpc.unary(QueryTotalPoolLiquidityDesc, QueryTotalPoolLiquidityRequest.fromPartial(request), metadata);
  }

  totalShares(request: DeepPartial<QueryTotalSharesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSharesResponse> {
    return this.rpc.unary(QueryTotalSharesDesc, QueryTotalSharesRequest.fromPartial(request), metadata);
  }

  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse> {
    return this.rpc.unary(QuerySpotPriceDesc, QuerySpotPriceRequest.fromPartial(request), metadata);
  }

  estimateSwapExactAmountIn(request: DeepPartial<QuerySwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountInResponse> {
    return this.rpc.unary(QuerySwapExactAmountInDesc, QuerySwapExactAmountInRequest.fromPartial(request), metadata);
  }

  estimateSwapExactAmountOut(request: DeepPartial<QuerySwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountOutResponse> {
    return this.rpc.unary(QuerySwapExactAmountOutDesc, QuerySwapExactAmountOutRequest.fromPartial(request), metadata);
  }

}