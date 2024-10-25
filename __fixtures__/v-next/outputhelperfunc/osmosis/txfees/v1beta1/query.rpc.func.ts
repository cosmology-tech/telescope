import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
export const createGetFeeTokens = (getRpcInstance: RpcResolver) => buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  encode: QueryFeeTokensRequest.encode,
  decode: QueryFeeTokensResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "FeeTokens",
  getRpcInstance: getRpcInstance
});
export const useGetFeeTokens = buildUseQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: createGetFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
export const createGetDenomSpotPrice = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  encode: QueryDenomSpotPriceRequest.encode,
  decode: QueryDenomSpotPriceResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomSpotPrice",
  getRpcInstance: getRpcInstance
});
export const useGetDenomSpotPrice = buildUseQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: createGetDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
export const createGetDenomPoolId = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  encode: QueryDenomPoolIdRequest.encode,
  decode: QueryDenomPoolIdResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomPoolId",
  getRpcInstance: getRpcInstance
});
export const useGetDenomPoolId = buildUseQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: createGetDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
export const createGetBaseDenom = (getRpcInstance: RpcResolver) => buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  encode: QueryBaseDenomRequest.encode,
  decode: QueryBaseDenomResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "BaseDenom",
  getRpcInstance: getRpcInstance
});
export const useGetBaseDenom = buildUseQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: createGetBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});