import { buildUseVueQuery } from "../../../vue-query";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
import { createGetPools, createGetNumPools, createGetTotalLiquidity, createGetPoolsWithFilter, createGetPool, createGetPoolType, createGetCalcJoinPoolNoSwapShares, createGetCalcJoinPoolShares, createGetCalcExitPoolCoinsFromShares, createGetPoolParams, createGetTotalPoolLiquidity, createGetTotalShares, createGetSpotPrice, createGetEstimateSwapExactAmountIn, createGetEstimateSwapExactAmountOut } from "./query.rpc.func.ts";
export const useGetPools = buildUseVueQuery<QueryPoolsRequest, QueryPoolsResponse>({
  builderQueryFn: createGetPools,
  queryKeyPrefix: "PoolsQuery"
});
export const useGetNumPools = buildUseVueQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  builderQueryFn: createGetNumPools,
  queryKeyPrefix: "NumPoolsQuery"
});
export const useGetTotalLiquidity = buildUseVueQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  builderQueryFn: createGetTotalLiquidity,
  queryKeyPrefix: "TotalLiquidityQuery"
});
export const useGetPoolsWithFilter = buildUseVueQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  builderQueryFn: createGetPoolsWithFilter,
  queryKeyPrefix: "PoolsWithFilterQuery"
});
export const useGetPool = buildUseVueQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const useGetPoolType = buildUseVueQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  builderQueryFn: createGetPoolType,
  queryKeyPrefix: "PoolTypeQuery"
});
export const useGetCalcJoinPoolNoSwapShares = buildUseVueQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  builderQueryFn: createGetCalcJoinPoolNoSwapShares,
  queryKeyPrefix: "CalcJoinPoolNoSwapSharesQuery"
});
export const useGetCalcJoinPoolShares = buildUseVueQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  builderQueryFn: createGetCalcJoinPoolShares,
  queryKeyPrefix: "CalcJoinPoolSharesQuery"
});
export const useGetCalcExitPoolCoinsFromShares = buildUseVueQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  builderQueryFn: createGetCalcExitPoolCoinsFromShares,
  queryKeyPrefix: "CalcExitPoolCoinsFromSharesQuery"
});
export const useGetPoolParams = buildUseVueQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  builderQueryFn: createGetPoolParams,
  queryKeyPrefix: "PoolParamsQuery"
});
export const useGetTotalPoolLiquidity = buildUseVueQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  builderQueryFn: createGetTotalPoolLiquidity,
  queryKeyPrefix: "TotalPoolLiquidityQuery"
});
export const useGetTotalShares = buildUseVueQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  builderQueryFn: createGetTotalShares,
  queryKeyPrefix: "TotalSharesQuery"
});
export const useGetSpotPrice = buildUseVueQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});
export const useGetEstimateSwapExactAmountIn = buildUseVueQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  builderQueryFn: createGetEstimateSwapExactAmountIn,
  queryKeyPrefix: "EstimateSwapExactAmountInQuery"
});
export const useGetEstimateSwapExactAmountOut = buildUseVueQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  builderQueryFn: createGetEstimateSwapExactAmountOut,
  queryKeyPrefix: "EstimateSwapExactAmountOutQuery"
});