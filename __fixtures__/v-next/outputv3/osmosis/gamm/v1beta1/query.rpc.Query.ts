import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import * as fm from "../../../grpc-gateway";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class Query {
  static Pools(request: QueryPoolsRequest, initRequest?: fm.InitReq): Promise<QueryPoolsResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static NumPools(request: QueryNumPoolsRequest, initRequest?: fm.InitReq): Promise<QueryNumPoolsResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/num_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static TotalLiquidity(request: QueryTotalLiquidityRequest, initRequest?: fm.InitReq): Promise<QueryTotalLiquidityResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/total_liquidity?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  static PoolsWithFilter(request: QueryPoolsWithFilterRequest, initRequest?: fm.InitReq): Promise<QueryPoolsWithFilterResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/filtered_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Per Pool gRPC Endpoints */
  static Pool(request: QueryPoolRequest, initRequest?: fm.InitReq): Promise<QueryPoolResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  static PoolType(request: QueryPoolTypeRequest, initRequest?: fm.InitReq): Promise<QueryPoolTypeResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pool_type/${request["pool_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  static CalcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    return fm.fetchReq(`osmosis.gamm.v1beta1.CalcJoinPoolNoSwapShares?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static CalcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcJoinPoolSharesResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/join_swap_exact_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static CalcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest, initRequest?: fm.InitReq): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/exit_swap_share_amount_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static PoolParams(request: QueryPoolParamsRequest, initRequest?: fm.InitReq): Promise<QueryPoolParamsResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/params?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static TotalPoolLiquidity(request: QueryTotalPoolLiquidityRequest, initRequest?: fm.InitReq): Promise<QueryTotalPoolLiquidityResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/total_pool_liquidity?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static TotalShares(request: QueryTotalSharesRequest, initRequest?: fm.InitReq): Promise<QueryTotalSharesResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/total_shares?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  static SpotPrice(request: QuerySpotPriceRequest, initRequest?: fm.InitReq): Promise<QuerySpotPriceResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/pools/${request["pool_id"]}/prices?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Estimate the swap. */
  static EstimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest, initRequest?: fm.InitReq): Promise<QuerySwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static EstimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest, initRequest?: fm.InitReq): Promise<QuerySwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_out?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}