import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryPoolsRequest, QueryPoolsResponse, QueryNumPoolsRequest, QueryNumPoolsResponse, QueryTotalLiquidityRequest, QueryTotalLiquidityResponse, QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolTypeRequest, QueryPoolTypeResponse, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse, QueryTotalSharesRequest, QueryTotalSharesResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse } from "./query";
export const createGetPools = (clientResolver?: RpcResolver) => buildQuery<QueryPoolsRequest, QueryPoolsResponse>({
  encode: QueryPoolsRequest.encode,
  decode: QueryPoolsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "Pools",
  clientResolver
});
export const createGetNumPools = (clientResolver?: RpcResolver) => buildQuery<QueryNumPoolsRequest, QueryNumPoolsResponse>({
  encode: QueryNumPoolsRequest.encode,
  decode: QueryNumPoolsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "NumPools",
  clientResolver
});
export const createGetTotalLiquidity = (clientResolver?: RpcResolver) => buildQuery<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse>({
  encode: QueryTotalLiquidityRequest.encode,
  decode: QueryTotalLiquidityResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalLiquidity",
  clientResolver
});
export const createGetPoolsWithFilter = (clientResolver?: RpcResolver) => buildQuery<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse>({
  encode: QueryPoolsWithFilterRequest.encode,
  decode: QueryPoolsWithFilterResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolsWithFilter",
  clientResolver
});
export const createGetPool = (clientResolver?: RpcResolver) => buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "Pool",
  clientResolver
});
export const createGetPoolType = (clientResolver?: RpcResolver) => buildQuery<QueryPoolTypeRequest, QueryPoolTypeResponse>({
  encode: QueryPoolTypeRequest.encode,
  decode: QueryPoolTypeResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolType",
  clientResolver
});
export const createGetCalcJoinPoolNoSwapShares = (clientResolver?: RpcResolver) => buildQuery<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse>({
  encode: QueryCalcJoinPoolNoSwapSharesRequest.encode,
  decode: QueryCalcJoinPoolNoSwapSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcJoinPoolNoSwapShares",
  clientResolver
});
export const createGetCalcJoinPoolShares = (clientResolver?: RpcResolver) => buildQuery<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse>({
  encode: QueryCalcJoinPoolSharesRequest.encode,
  decode: QueryCalcJoinPoolSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcJoinPoolShares",
  clientResolver
});
export const createGetCalcExitPoolCoinsFromShares = (clientResolver?: RpcResolver) => buildQuery<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse>({
  encode: QueryCalcExitPoolCoinsFromSharesRequest.encode,
  decode: QueryCalcExitPoolCoinsFromSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "CalcExitPoolCoinsFromShares",
  clientResolver
});
export const createGetPoolParams = (clientResolver?: RpcResolver) => buildQuery<QueryPoolParamsRequest, QueryPoolParamsResponse>({
  encode: QueryPoolParamsRequest.encode,
  decode: QueryPoolParamsResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "PoolParams",
  clientResolver
});
export const createGetTotalPoolLiquidity = (clientResolver?: RpcResolver) => buildQuery<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse>({
  encode: QueryTotalPoolLiquidityRequest.encode,
  decode: QueryTotalPoolLiquidityResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalPoolLiquidity",
  clientResolver
});
export const createGetTotalShares = (clientResolver?: RpcResolver) => buildQuery<QueryTotalSharesRequest, QueryTotalSharesResponse>({
  encode: QueryTotalSharesRequest.encode,
  decode: QueryTotalSharesResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "TotalShares",
  clientResolver
});
export const createGetSpotPrice = (clientResolver?: RpcResolver) => buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "SpotPrice",
  clientResolver
});
export const createGetEstimateSwapExactAmountIn = (clientResolver?: RpcResolver) => buildQuery<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse>({
  encode: QuerySwapExactAmountInRequest.encode,
  decode: QuerySwapExactAmountInResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "EstimateSwapExactAmountIn",
  clientResolver
});
export const createGetEstimateSwapExactAmountOut = (clientResolver?: RpcResolver) => buildQuery<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse>({
  encode: QuerySwapExactAmountOutRequest.encode,
  decode: QuerySwapExactAmountOutResponse.decode,
  service: "osmosis.gamm.v1beta1.Query",
  method: "EstimateSwapExactAmountOut",
  clientResolver
});