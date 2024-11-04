import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export const createGetFeeTokens = (clientResolver: RpcResolver) => buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  encode: QueryFeeTokensRequest.encode,
  decode: QueryFeeTokensResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "FeeTokens",
  clientResolver
});
export const useGetFeeTokens = buildUseQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: createGetFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
export const createGetDenomSpotPrice = (clientResolver: RpcResolver) => buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  encode: QueryDenomSpotPriceRequest.encode,
  decode: QueryDenomSpotPriceResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomSpotPrice",
  clientResolver
});
export const useGetDenomSpotPrice = buildUseQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: createGetDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
export const createGetDenomPoolId = (clientResolver: RpcResolver) => buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  encode: QueryDenomPoolIdRequest.encode,
  decode: QueryDenomPoolIdResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomPoolId",
  clientResolver
});
export const useGetDenomPoolId = buildUseQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: createGetDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
export const createGetBaseDenom = (clientResolver: RpcResolver) => buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  encode: QueryBaseDenomRequest.encode,
  decode: QueryBaseDenomResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "BaseDenom",
  clientResolver
});
export const useGetBaseDenom = buildUseQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: createGetBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});