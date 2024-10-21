import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export const createGetFeeTokens = (getRpcInstance: RpcResolver) => buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  encoder: QueryFeeTokensRequest.encode,
  decoder: QueryFeeTokensResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "FeeTokens",
  getRpcInstance: getRpcInstance
});
export const useGetFeeTokens = buildUseQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: createGetFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
export const createGetDenomSpotPrice = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  encoder: QueryDenomSpotPriceRequest.encode,
  decoder: QueryDenomSpotPriceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomSpotPrice",
  getRpcInstance: getRpcInstance
});
export const useGetDenomSpotPrice = buildUseQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: createGetDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
export const createGetDenomPoolId = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  encoder: QueryDenomPoolIdRequest.encode,
  decoder: QueryDenomPoolIdResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomPoolId",
  getRpcInstance: getRpcInstance
});
export const useGetDenomPoolId = buildUseQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: createGetDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
export const createGetBaseDenom = (getRpcInstance: RpcResolver) => buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  encoder: QueryBaseDenomRequest.encode,
  decoder: QueryBaseDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "BaseDenom",
  getRpcInstance: getRpcInstance
});
export const useGetBaseDenom = buildUseQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: createGetBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});