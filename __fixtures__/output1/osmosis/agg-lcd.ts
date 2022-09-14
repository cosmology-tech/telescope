import { Coin } from "../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./gamm/v1beta1/tx";
import { Params, Metadata } from "../cosmos/bank/v1beta1/bank";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "../cosmos/bank/v1beta1/query";
import { Any } from "../google/protobuf/any";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./gamm/v1beta1/query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Balance queries the balance of a single coin for a single account. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`;
    return await this.get<QueryBalanceResponse>(endpoint, options);
  }

  /* AllBalances queries the balance of all coins for a single account. */
  async allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`;
    return await this.get<QueryAllBalancesResponse>(endpoint, options);
  }

  /* SpendableBalances queries the spenable balance of all coins for a single
  account. */
  async spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`;
    return await this.get<QuerySpendableBalancesResponse>(endpoint, options);
  }

  /* TotalSupply queries the total supply of all coins. */
  async totalSupply(params: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/supply`;
    return await this.get<QueryTotalSupplyResponse>(endpoint, options);
  }

  /* SupplyOf queries the supply of a single coin. */
  async supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `cosmos/bank/v1beta1/supply/by_denom`;
    return await this.get<QuerySupplyOfResponse>(endpoint, options);
  }

  /* Params queries the parameters of x/bank module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/bank/v1beta1/params`;
    return await this.get<QueryParamsResponse>(endpoint);
  }

  /* DenomsMetadata queries the client metadata of a given coin denomination. */
  async denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
    const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`;
    return await this.get<QueryDenomMetadataResponse>(endpoint);
  }

  /* DenomsMetadata queries the client metadata for all registered coin
  denominations. */
  async denomsMetadata(params: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denoms_metadata`;
    return await this.get<QueryDenomsMetadataResponse>(endpoint, options);
  }

  /* DenomOwners queries for all account addresses that own a particular token
  denomination. */
  async denomOwners(params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`;
    return await this.get<QueryDenomOwnersResponse>(endpoint, options);
  }

  /* Pools */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/gamm/v1beta1/pools`;
    return await this.get<QueryPoolsResponse>(endpoint, options);
  }

  /* NumPools */
  async numPools(_params: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponse> {
    const endpoint = `osmosis/gamm/v1beta1/num_pools`;
    return await this.get<QueryNumPoolsResponse>(endpoint);
  }

  /* TotalLiquidity */
  async totalLiquidity(_params: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponse> {
    const endpoint = `osmosis/gamm/v1beta1/total_liquidity`;
    return await this.get<QueryTotalLiquidityResponse>(endpoint);
  }

  /* Per Pool gRPC Endpoints */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}`;
    return await this.get<QueryPoolResponse>(endpoint);
  }

  /* PoolParams */
  async poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/params`;
    return await this.get<QueryPoolParamsResponse>(endpoint);
  }

  /* TotalPoolLiquidity */
  async totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_pool_liquidity`;
    return await this.get<QueryTotalPoolLiquidityResponse>(endpoint);
  }

  /* TotalShares */
  async totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const endpoint = `osmosis/gamm/v1beta1/pools/${params.poolId}/total_shares`;
    return await this.get<QueryTotalSharesResponse>(endpoint);
  }

  /* SpotPrice defines a gRPC query handler that returns the spot price given
  a base denomination and a quote denomination. */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
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
    return await this.get<QuerySpotPriceResponse>(endpoint, options);
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
      options.params.tokenIn = params.tokenIn;
    }

    if (typeof params?.routes !== "undefined") {
      options.params.routes = params.routes;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_in`;
    return await this.get<QuerySwapExactAmountInResponse>(endpoint, options);
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
      options.params.tokenOut = params.tokenOut;
    }

    const endpoint = `osmosis/gamm/v1beta1/${params.poolId}/estimate/swap_exact_amount_out`;
    return await this.get<QuerySwapExactAmountOutResponse>(endpoint, options);
  }

}