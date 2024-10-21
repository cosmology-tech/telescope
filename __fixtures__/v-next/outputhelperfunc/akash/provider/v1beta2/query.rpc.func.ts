import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import { SigningClientResolver } from "../../../helpers";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";
export const createGetProviders = (getRpcInstance: SigningClientResolver) => buildQuery<QueryProvidersRequest, QueryProvidersResponse>({
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
export const createGetProvider = (getRpcInstance: SigningClientResolver) => buildQuery<QueryProviderRequest, QueryProviderResponse>({
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