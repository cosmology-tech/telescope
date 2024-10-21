import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryProvidersRequest, QueryProvidersResponse, QueryProviderRequest, QueryProviderResponse } from "./query";
export const createGetProviders = (getRpcInstance: RpcResolver) => buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
  encoder: QueryProvidersRequest.encode,
  decoder: QueryProvidersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Providers",
  getRpcInstance: getRpcInstance
});
export const useGetProviders = buildUseQuery<QueryProvidersRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviders,
  queryKeyPrefix: "ProvidersQuery"
});
export const createGetProvider = (getRpcInstance: RpcResolver) => buildQuery<QueryProviderRequest, QueryProviderResponse>({
  encoder: QueryProviderRequest.encode,
  decoder: QueryProviderResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Provider",
  getRpcInstance: getRpcInstance
});
export const useGetProvider = buildUseQuery<QueryProviderRequest, QueryProviderResponse>({
  builderQueryFn: createGetProvider,
  queryKeyPrefix: "ProviderQuery"
});