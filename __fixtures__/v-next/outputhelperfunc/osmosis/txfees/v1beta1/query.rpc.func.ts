import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export const createGetFeeTokens = (getRpcInstance: SigningClientResolver) => buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
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
export const createGetDenomSpotPrice = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
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
export const createGetDenomPoolId = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
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
export const createGetBaseDenom = (getRpcInstance: SigningClientResolver) => buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
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