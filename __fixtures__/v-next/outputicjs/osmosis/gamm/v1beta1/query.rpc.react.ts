import { buildUseQuery } from "../../../react-query";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
import { createGetPools, createGetNumPools, createGetTotalLiquidity, createGetPoolsWithFilter, createGetPool, createGetPoolType, createGetCalcJoinPoolNoSwapShares, createGetCalcJoinPoolShares, createGetCalcExitPoolCoinsFromShares, createGetPoolParams, createGetTotalPoolLiquidity, createGetTotalShares, createGetSpotPrice, createGetEstimateSwapExactAmountIn, createGetEstimateSwapExactAmountOut } from "./query.rpc.func.ts";
export const useGetPools = buildUseQuery<QueryPoolsRequest, QueryPoolsResponse>({
  builderQueryFn: createGetPools,
  queryKeyPrefix: "PoolsQuery"
});
export const useGetNumPools = buildUseQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  builderQueryFn: createGetNumPools,
  queryKeyPrefix: "NumPoolsQuery"
});
export const useGetTotalLiquidity = buildUseQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  builderQueryFn: createGetTotalLiquidity,
  queryKeyPrefix: "TotalLiquidityQuery"
});
export const useGetPoolsWithFilter = buildUseQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  builderQueryFn: createGetPoolsWithFilter,
  queryKeyPrefix: "PoolsWithFilterQuery"
});
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const useGetPoolType = buildUseQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  builderQueryFn: createGetPoolType,
  queryKeyPrefix: "PoolTypeQuery"
});
export const useGetCalcJoinPoolNoSwapShares = buildUseQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  builderQueryFn: createGetCalcJoinPoolNoSwapShares,
  queryKeyPrefix: "CalcJoinPoolNoSwapSharesQuery"
});
export const useGetCalcJoinPoolShares = buildUseQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  builderQueryFn: createGetCalcJoinPoolShares,
  queryKeyPrefix: "CalcJoinPoolSharesQuery"
});
export const useGetCalcExitPoolCoinsFromShares = buildUseQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  builderQueryFn: createGetCalcExitPoolCoinsFromShares,
  queryKeyPrefix: "CalcExitPoolCoinsFromSharesQuery"
});
export const useGetPoolParams = buildUseQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  builderQueryFn: createGetPoolParams,
  queryKeyPrefix: "PoolParamsQuery"
});
export const useGetTotalPoolLiquidity = buildUseQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  builderQueryFn: createGetTotalPoolLiquidity,
  queryKeyPrefix: "TotalPoolLiquidityQuery"
});
export const useGetTotalShares = buildUseQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  builderQueryFn: createGetTotalShares,
  queryKeyPrefix: "TotalSharesQuery"
});
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});
export const useGetEstimateSwapExactAmountIn = buildUseQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  builderQueryFn: createGetEstimateSwapExactAmountIn,
  queryKeyPrefix: "EstimateSwapExactAmountInQuery"
});
export const useGetEstimateSwapExactAmountOut = buildUseQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  builderQueryFn: createGetEstimateSwapExactAmountOut,
  queryKeyPrefix: "EstimateSwapExactAmountOutQuery"
});