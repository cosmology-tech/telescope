import { buildUseQuery } from "../../../react-query";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
import { createGetFeeTokens, createGetDenomSpotPrice, createGetDenomPoolId, createGetBaseDenom } from "./query.rpc.func";
export const useGetFeeTokens = buildUseQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: createGetFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
export const useGetDenomSpotPrice = buildUseQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: createGetDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
export const useGetDenomPoolId = buildUseQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: createGetDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
export const useGetBaseDenom = buildUseQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: createGetBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});