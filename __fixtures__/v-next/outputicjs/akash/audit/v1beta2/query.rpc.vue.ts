import { buildUseVueQuery } from "../../../vue-query";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
import { createGetAllProvidersAttributes, createGetProviderAttributes, createGetProviderAuditorAttributes, createGetAuditorAttributes } from "./query.rpc.func.ts";
export const useGetAllProvidersAttributes = buildUseVueQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAllProvidersAttributes,
  queryKeyPrefix: "AllProvidersAttributesQuery"
});
export const useGetProviderAttributes = buildUseVueQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAttributes,
  queryKeyPrefix: "ProviderAttributesQuery"
});
export const useGetProviderAuditorAttributes = buildUseVueQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAuditorAttributes,
  queryKeyPrefix: "ProviderAuditorAttributesQuery"
});
export const useGetAuditorAttributes = buildUseVueQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAuditorAttributes,
  queryKeyPrefix: "AuditorAttributesQuery"
});