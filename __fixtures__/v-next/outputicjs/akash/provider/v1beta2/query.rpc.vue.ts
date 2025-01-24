import { buildUseVueQuery } from "../../../vue-query";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
import { createGetProviders, createGetProvider } from "./query.rpc.func.ts";
export const useGetProviders = buildUseVueQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviders,
  queryKeyPrefix: "ProvidersQuery"
});
export const useGetProvider = buildUseVueQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: createGetProvider,
  queryKeyPrefix: "ProviderQuery"
});