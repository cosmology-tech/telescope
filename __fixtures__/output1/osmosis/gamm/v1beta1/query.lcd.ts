import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
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
    this.pool = this.pool.bind(this);
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

  /* Per Pool gRPC Endpoints */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
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
      options.params.tokenIn = params.tokenIn;
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
      options.params.tokenOut = params.tokenOut;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.req.get<QuerySwapExactAmountOutResponseSDKType>(endpoint, options);
  }

}