import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export const createGetPools = (getRpcInstance: SigningClientResolver) => buildQuery<QueryPoolsRequest, QueryPoolsResponse>({
  encoder: QueryPoolsRequest.encode,
  decoder: QueryPoolsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Pools",
  getRpcInstance: getRpcInstance
});
export const useGetPools = buildUseQuery<QueryPoolsRequest, QueryPoolsResponse>({
  builderQueryFn: createGetPools,
  queryKeyPrefix: "PoolsQuery"
});
export const createGetNumPools = (getRpcInstance: SigningClientResolver) => buildQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  encoder: QueryNumPoolsRequest.encode,
  decoder: QueryNumPoolsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "NumPools",
  getRpcInstance: getRpcInstance
});
export const useGetNumPools = buildUseQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  builderQueryFn: createGetNumPools,
  queryKeyPrefix: "NumPoolsQuery"
});
export const createGetTotalLiquidity = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  encoder: QueryTotalLiquidityRequest.encode,
  decoder: QueryTotalLiquidityResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalLiquidity",
  getRpcInstance: getRpcInstance
});
export const useGetTotalLiquidity = buildUseQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  builderQueryFn: createGetTotalLiquidity,
  queryKeyPrefix: "TotalLiquidityQuery"
});
export const createGetPoolsWithFilter = (getRpcInstance: SigningClientResolver) => buildQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  encoder: QueryPoolsWithFilterRequest.encode,
  decoder: QueryPoolsWithFilterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PoolsWithFilter",
  getRpcInstance: getRpcInstance
});
export const useGetPoolsWithFilter = buildUseQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  builderQueryFn: createGetPoolsWithFilter,
  queryKeyPrefix: "PoolsWithFilterQuery"
});
export const createGetPool = (getRpcInstance: SigningClientResolver) => buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encoder: QueryPoolRequest.encode,
  decoder: QueryPoolResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Pool",
  getRpcInstance: getRpcInstance
});
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const createGetPoolType = (getRpcInstance: SigningClientResolver) => buildQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  encoder: QueryPoolTypeRequest.encode,
  decoder: QueryPoolTypeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PoolType",
  getRpcInstance: getRpcInstance
});
export const useGetPoolType = buildUseQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  builderQueryFn: createGetPoolType,
  queryKeyPrefix: "PoolTypeQuery"
});
export const createGetCalcJoinPoolNoSwapShares = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  encoder: QueryCalcJoinPoolNoSwapSharesRequest.encode,
  decoder: QueryCalcJoinPoolNoSwapSharesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CalcJoinPoolNoSwapShares",
  getRpcInstance: getRpcInstance
});
export const useGetCalcJoinPoolNoSwapShares = buildUseQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  builderQueryFn: createGetCalcJoinPoolNoSwapShares,
  queryKeyPrefix: "CalcJoinPoolNoSwapSharesQuery"
});
export const createGetCalcJoinPoolShares = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  encoder: QueryCalcJoinPoolSharesRequest.encode,
  decoder: QueryCalcJoinPoolSharesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CalcJoinPoolShares",
  getRpcInstance: getRpcInstance
});
export const useGetCalcJoinPoolShares = buildUseQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  builderQueryFn: createGetCalcJoinPoolShares,
  queryKeyPrefix: "CalcJoinPoolSharesQuery"
});
export const createGetCalcExitPoolCoinsFromShares = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  encoder: QueryCalcExitPoolCoinsFromSharesRequest.encode,
  decoder: QueryCalcExitPoolCoinsFromSharesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CalcExitPoolCoinsFromShares",
  getRpcInstance: getRpcInstance
});
export const useGetCalcExitPoolCoinsFromShares = buildUseQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  builderQueryFn: createGetCalcExitPoolCoinsFromShares,
  queryKeyPrefix: "CalcExitPoolCoinsFromSharesQuery"
});
export const createGetPoolParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  encoder: QueryPoolParamsRequest.encode,
  decoder: QueryPoolParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PoolParams",
  getRpcInstance: getRpcInstance
});
export const useGetPoolParams = buildUseQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  builderQueryFn: createGetPoolParams,
  queryKeyPrefix: "PoolParamsQuery"
});
export const createGetTotalPoolLiquidity = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  encoder: QueryTotalPoolLiquidityRequest.encode,
  decoder: QueryTotalPoolLiquidityResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalPoolLiquidity",
  getRpcInstance: getRpcInstance
});
export const useGetTotalPoolLiquidity = buildUseQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  builderQueryFn: createGetTotalPoolLiquidity,
  queryKeyPrefix: "TotalPoolLiquidityQuery"
});
export const createGetTotalShares = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  encoder: QueryTotalSharesRequest.encode,
  decoder: QueryTotalSharesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalShares",
  getRpcInstance: getRpcInstance
});
export const useGetTotalShares = buildUseQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  builderQueryFn: createGetTotalShares,
  queryKeyPrefix: "TotalSharesQuery"
});
export const createGetSpotPrice = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encoder: QuerySpotPriceRequest.encode,
  decoder: QuerySpotPriceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpotPrice",
  getRpcInstance: getRpcInstance
});
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});
export const createGetEstimateSwapExactAmountIn = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  encoder: QuerySwapExactAmountInRequest.encode,
  decoder: QuerySwapExactAmountInResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "EstimateSwapExactAmountIn",
  getRpcInstance: getRpcInstance
});
export const useGetEstimateSwapExactAmountIn = buildUseQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  builderQueryFn: createGetEstimateSwapExactAmountIn,
  queryKeyPrefix: "EstimateSwapExactAmountInQuery"
});
export const createGetEstimateSwapExactAmountOut = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  encoder: QuerySwapExactAmountOutRequest.encode,
  decoder: QuerySwapExactAmountOutResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "EstimateSwapExactAmountOut",
  getRpcInstance: getRpcInstance
});
export const useGetEstimateSwapExactAmountOut = buildUseQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  builderQueryFn: createGetEstimateSwapExactAmountOut,
  queryKeyPrefix: "EstimateSwapExactAmountOutQuery"
});