import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export const createGetProviders = (getRpcInstance: RpcResolver) => buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
  encode: QueryProvidersRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Providers",
  getRpcInstance: getRpcInstance
});
export const useGetProviders = buildUseQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviders,
  queryKeyPrefix: "ProvidersQuery"
});
export const createGetProvider = (getRpcInstance: RpcResolver) => buildQuery<QueryProviderRequest, QueryProviderResponse>({
  encode: QueryProviderRequest.encode,
  decode: QueryProviderResponse.decode,
  service: "akash.provider.v1beta2.Query",
  method: "Provider",
  getRpcInstance: getRpcInstance
});
export const useGetProvider = buildUseQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: createGetProvider,
  queryKeyPrefix: "ProviderQuery"
});