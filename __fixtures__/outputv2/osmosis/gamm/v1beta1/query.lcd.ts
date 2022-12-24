import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteAminoType, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteAminoType, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolAmino as Pool1Amino } from "../pool-models/balancer/balancerPool";
import { PoolAminoType as Pool1AminoType } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolAmino as Pool2Amino } from "../pool-models/stableswap/stableswap_pool";
import { PoolAminoType as Pool2AminoType } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsRequestAmino, QueryPoolsRequestAminoType, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseAmino, QueryPoolsResponseAminoType, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestAmino, QueryNumPoolsRequestAminoType, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseAmino, QueryNumPoolsResponseAminoType, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestAmino, QueryTotalLiquidityRequestAminoType, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseAmino, QueryTotalLiquidityResponseAminoType, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestAmino, QueryPoolsWithFilterRequestAminoType, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseAmino, QueryPoolsWithFilterResponseAminoType, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestAmino, QueryPoolRequestAminoType, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseAmino, QueryPoolResponseAminoType, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestAmino, QueryPoolTypeRequestAminoType, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseAmino, QueryPoolTypeResponseAminoType, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestAmino, QueryCalcJoinPoolNoSwapSharesRequestAminoType, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseAmino, QueryCalcJoinPoolNoSwapSharesResponseAminoType, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestAmino, QueryCalcJoinPoolSharesRequestAminoType, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseAmino, QueryCalcJoinPoolSharesResponseAminoType, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestAmino, QueryCalcExitPoolCoinsFromSharesRequestAminoType, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseAmino, QueryCalcExitPoolCoinsFromSharesResponseAminoType, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestAmino, QueryPoolParamsRequestAminoType, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseAmino, QueryPoolParamsResponseAminoType, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestAmino, QueryTotalPoolLiquidityRequestAminoType, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseAmino, QueryTotalPoolLiquidityResponseAminoType, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestAmino, QueryTotalSharesRequestAminoType, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseAmino, QueryTotalSharesResponseAminoType, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestAmino, QuerySpotPriceRequestAminoType, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseAmino, QuerySpotPriceResponseAminoType, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestAmino, QuerySwapExactAmountInRequestAminoType, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseAmino, QuerySwapExactAmountInResponseAminoType, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestAmino, QuerySwapExactAmountOutRequestAminoType, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseAmino, QuerySwapExactAmountOutResponseAminoType, QuerySwapExactAmountOutResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }

  /* Pools */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }

  /* NumPools */
  async numPools(_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.req.get<QueryNumPoolsResponseSDKType>(endpoint);
  }

  /* TotalLiquidity */
  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.req.get<QueryTotalLiquidityResponseSDKType>(endpoint);
  }

  /* PoolsWithFilter allows you to query specific pools with requested
   parameters */
  async poolsWithFilter(params: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.minLiquidity !== "undefined") {
      options.params.min_liquidity = params.minLiquidity;
    }

    if (typeof params?.poolType !== "undefined") {
      options.params.pool_type = params.poolType;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/gamm/v1beta1/filtered_pools`;
    return await this.req.get<QueryPoolsWithFilterResponseSDKType>(endpoint, options);
  }

  /* Per Pool gRPC Endpoints */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }

  /* PoolType returns the type of the pool.
   Returns "Balancer" as a string literal when the pool is a balancer pool.
   Errors if the pool is failed to be type caseted. */
  async poolType(params: QueryPoolTypeRequest): Promise<QueryPoolTypeResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pool_type/${params.poolId}`;
    return await this.req.get<QueryPoolTypeResponseSDKType>(endpoint);
  }

  /* CalcJoinPoolShares */
  async calcJoinPoolShares(params: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.tokensIn !== "undefined") {
      options.params.tokens_in = params.tokensIn;
    }

    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/join_swap_exact_in`;
    return await this.req.get<QueryCalcJoinPoolSharesResponseSDKType>(endpoint, options);
  }

  /* CalcExitPoolCoinsFromShares */
  async calcExitPoolCoinsFromShares(params: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.shareInAmount !== "undefined") {
      options.params.share_in_amount = params.shareInAmount;
    }

    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/exit_swap_share_amount_in`;
    return await this.req.get<QueryCalcExitPoolCoinsFromSharesResponseSDKType>(endpoint, options);
  }

  /* PoolParams */
  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  }

  /* TotalPoolLiquidity */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.req.get<QueryTotalPoolLiquidityResponseSDKType>(endpoint);
  }

  /* TotalShares */
  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.req.get<QueryTotalSharesResponseSDKType>(endpoint);
  }

  /* SpotPrice defines a gRPC query handler that returns the spot price given
   a base denomination and a quote denomination. */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.baseAssetDenom !== "undefined") {
      options.params.base_asset_denom = params.baseAssetDenom;
    }

    if (typeof params?.quoteAssetDenom !== "undefined") {
      options.params.quote_asset_denom = params.quoteAssetDenom;
    }

    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/prices`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint, options);
  }

  /* Estimate the swap. */
  async estimateSwapExactAmountIn(params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }

    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }

    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.req.get<QuerySwapExactAmountInResponseSDKType>(endpoint, options);
  }

  /* EstimateSwapExactAmountOut */
  async estimateSwapExactAmountOut(params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }

    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }

    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.req.get<QuerySwapExactAmountOutResponseSDKType>(endpoint, options);
  }

}