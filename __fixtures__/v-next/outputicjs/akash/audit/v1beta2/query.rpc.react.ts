import { buildUseQuery } from "../../../react-query";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
import { createGetAllProvidersAttributes, createGetProviderAttributes, createGetProviderAuditorAttributes, createGetAuditorAttributes } from "./query.rpc.func.ts";
export const useGetAllProvidersAttributes = buildUseQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAllProvidersAttributes,
  queryKeyPrefix: "AllProvidersAttributesQuery"
});
export const useGetProviderAttributes = buildUseQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAttributes,
  queryKeyPrefix: "ProviderAttributesQuery"
});
export const useGetProviderAuditorAttributes = buildUseQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAuditorAttributes,
  queryKeyPrefix: "ProviderAuditorAttributesQuery"
});
export const useGetAuditorAttributes = buildUseQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAuditorAttributes,
  queryKeyPrefix: "AuditorAttributesQuery"
});