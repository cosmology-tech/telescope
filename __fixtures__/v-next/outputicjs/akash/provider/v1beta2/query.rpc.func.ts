import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export const createGetProviders = (clientResolver?: RpcResolver) => buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
  encode: QueryProvidersRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Providers",
  clientResolver
});
export const useGetProviders = buildUseQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviders,
  queryKeyPrefix: "ProvidersQuery"
});
export const createGetProvider = (clientResolver?: RpcResolver) => buildQuery<QueryProviderRequest, QueryProviderResponse>({
  encode: QueryProviderRequest.encode,
  decode: QueryProviderResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Provider",
  clientResolver
});
export const useGetProvider = buildUseQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: createGetProvider,
  queryKeyPrefix: "ProviderQuery"
});