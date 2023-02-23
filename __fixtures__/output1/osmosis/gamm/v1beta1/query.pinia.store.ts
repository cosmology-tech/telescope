import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/gamm/v1beta1/query.proto', {
  state: () => {
    return {
      pools: ({} as QueryPoolsResponse),
      numPools: ({} as QueryNumPoolsResponse),
      totalLiquidity: ({} as QueryTotalLiquidityResponse),
      poolsWithFilter: ({} as QueryPoolsWithFilterResponse),
      pool: ({} as QueryPoolResponse),
      poolType: ({} as QueryPoolTypeResponse),
      calcJoinPoolNoSwapShares: ({} as QueryCalcJoinPoolNoSwapSharesResponse),
      calcJoinPoolShares: ({} as QueryCalcJoinPoolSharesResponse),
      calcExitPoolCoinsFromShares: ({} as QueryCalcExitPoolCoinsFromSharesResponse),
      poolParams: ({} as QueryPoolParamsResponse),
      totalPoolLiquidity: ({} as QueryTotalPoolLiquidityResponse),
      totalShares: ({} as QueryTotalSharesResponse),
      spotPrice: ({} as QuerySpotPriceResponse),
      estimateSwapExactAmountIn: ({} as QuerySwapExactAmountInResponse),
      estimateSwapExactAmountOut: ({} as QuerySwapExactAmountOutResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchPools(param : QueryPoolsRequest) {
      this.pools = await this.lcdClient.pools(param);
      return this.pools;
    },

    async fetchNumPools(param : QueryNumPoolsRequest) {
      this.numPools = await this.lcdClient.numPools(param);
      return this.numPools;
    },

    async fetchTotalLiquidity(param : QueryTotalLiquidityRequest) {
      this.totalLiquidity = await this.lcdClient.totalLiquidity(param);
      return this.totalLiquidity;
    },

    async fetchPoolsWithFilter(param : QueryPoolsWithFilterRequest) {
      this.poolsWithFilter = await this.lcdClient.poolsWithFilter(param);
      return this.poolsWithFilter;
    },

    async fetchPool(param : QueryPoolRequest) {
      this.pool = await this.lcdClient.pool(param);
      return this.pool;
    },

    async fetchPoolType(param : QueryPoolTypeRequest) {
      this.poolType = await this.lcdClient.poolType(param);
      return this.poolType;
    },

    async fetchCalcJoinPoolNoSwapShares(param : QueryCalcJoinPoolNoSwapSharesRequest) {
      this.calcJoinPoolNoSwapShares = await this.lcdClient.calcJoinPoolNoSwapShares(param);
      return this.calcJoinPoolNoSwapShares;
    },

    async fetchCalcJoinPoolShares(param : QueryCalcJoinPoolSharesRequest) {
      this.calcJoinPoolShares = await this.lcdClient.calcJoinPoolShares(param);
      return this.calcJoinPoolShares;
    },

    async fetchCalcExitPoolCoinsFromShares(param : QueryCalcExitPoolCoinsFromSharesRequest) {
      this.calcExitPoolCoinsFromShares = await this.lcdClient.calcExitPoolCoinsFromShares(param);
      return this.calcExitPoolCoinsFromShares;
    },

    async fetchPoolParams(param : QueryPoolParamsRequest) {
      this.poolParams = await this.lcdClient.poolParams(param);
      return this.poolParams;
    },

    async fetchTotalPoolLiquidity(param : QueryTotalPoolLiquidityRequest) {
      this.totalPoolLiquidity = await this.lcdClient.totalPoolLiquidity(param);
      return this.totalPoolLiquidity;
    },

    async fetchTotalShares(param : QueryTotalSharesRequest) {
      this.totalShares = await this.lcdClient.totalShares(param);
      return this.totalShares;
    },

    async fetchSpotPrice(param : QuerySpotPriceRequest) {
      this.spotPrice = await this.lcdClient.spotPrice(param);
      return this.spotPrice;
    },

    async fetchEstimateSwapExactAmountIn(param : QuerySwapExactAmountInRequest) {
      this.estimateSwapExactAmountIn = await this.lcdClient.estimateSwapExactAmountIn(param);
      return this.estimateSwapExactAmountIn;
    },

    async fetchEstimateSwapExactAmountOut(param : QuerySwapExactAmountOutRequest) {
      this.estimateSwapExactAmountOut = await this.lcdClient.estimateSwapExactAmountOut(param);
      return this.estimateSwapExactAmountOut;
    }

  }
});