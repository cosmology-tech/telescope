import { buildUseQuery } from "../../../react-query";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
import { createGetProviders, createGetProvider } from "./query.rpc.func";
export const useGetProviders = buildUseQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviders,
  queryKeyPrefix: "ProvidersQuery"
});
export const useGetProvider = buildUseQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: createGetProvider,
  queryKeyPrefix: "ProviderQuery"
});