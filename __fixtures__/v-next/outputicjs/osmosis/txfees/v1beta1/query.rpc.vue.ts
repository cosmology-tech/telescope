import { buildUseVueQuery } from "../../../vue-query";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
import { createGetFeeTokens, createGetDenomSpotPrice, createGetDenomPoolId, createGetBaseDenom } from "./query.rpc.func.ts";
export const useGetFeeTokens = buildUseVueQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  builderQueryFn: createGetFeeTokens,
  queryKeyPrefix: "FeeTokensQuery"
});
export const useGetDenomSpotPrice = buildUseVueQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  builderQueryFn: createGetDenomSpotPrice,
  queryKeyPrefix: "DenomSpotPriceQuery"
});
export const useGetDenomPoolId = buildUseVueQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  builderQueryFn: createGetDenomPoolId,
  queryKeyPrefix: "DenomPoolIdQuery"
});
export const useGetBaseDenom = buildUseVueQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  builderQueryFn: createGetBaseDenom,
  queryKeyPrefix: "BaseDenomQuery"
});