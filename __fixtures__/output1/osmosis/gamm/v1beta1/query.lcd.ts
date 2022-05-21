import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./tx";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Pools */
  async pools(params: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `osmosis/gamm/v1beta1/pools/`;
    return await this.request(endpoint, options);
  }

  /* NumPools */
  async numPools(params: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
    const endpoint = `osmosis/gamm/v1beta1/num_pools/`;
    return await this.request(endpoint);
  }

  /* TotalLiquidity */
  async totalLiquidity(params: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse> {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity/`;
    return await this.request(endpoint);
  }

  /* Per Pool gRPC Endpoints */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.request(endpoint);
  }

  /* PoolParams */
  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.request(endpoint);
  }

  /* TotalPoolLiquidity */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.request(endpoint);
  }

  /* TotalShares */
  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.request(endpoint);
  }

  /* SpotPrice */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.tokenInDenom !== "undefined") {
      options.params.token_in_denom = params.tokenInDenom;
    }

    if (typeof params?.tokenOutDenom !== "undefined") {
      options.params.token_out_denom = params.tokenOutDenom;
    }

    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/prices`;
    return await this.request(endpoint, options);
  }

  /* Estimate the swap. */
  async estimateSwapExactAmountIn(params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse> {
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
    return await this.request(endpoint, options);
  }

  /* EstimateSwapExactAmountOut */
  async estimateSwapExactAmountOut(params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse> {
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
    return await this.request(endpoint, options);
  }

}