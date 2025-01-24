import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
import { createGetParams, createGetDenomAuthorityMetadata, createGetDenomsFromCreator } from "./query.rpc.func.ts";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDenomAuthorityMetadata = buildUseVueQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: createGetDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
export const useGetDenomsFromCreator = buildUseVueQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: createGetDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});