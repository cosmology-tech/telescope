import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { SigningClientResolver } from "../../../helpers";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
export const createGetAllProvidersAttributes = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  encoder: QueryAllProvidersAttributesRequest.encode,
  decoder: QueryProvidersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllProvidersAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetAllProvidersAttributes = buildUseQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAllProvidersAttributes,
  queryKeyPrefix: "AllProvidersAttributesQuery"
});
export const createGetProviderAttributes = (getRpcInstance: SigningClientResolver) => buildQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  encoder: QueryProviderAttributesRequest.encode,
  decoder: QueryProvidersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ProviderAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetProviderAttributes = buildUseQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAttributes,
  queryKeyPrefix: "ProviderAttributesQuery"
});
export const createGetProviderAuditorAttributes = (getRpcInstance: SigningClientResolver) => buildQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  encoder: QueryProviderAuditorRequest.encode,
  decoder: QueryProvidersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ProviderAuditorAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetProviderAuditorAttributes = buildUseQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAuditorAttributes,
  queryKeyPrefix: "ProviderAuditorAttributesQuery"
});
export const createGetAuditorAttributes = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  encoder: QueryAuditorAttributesRequest.encode,
  decoder: QueryProvidersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AuditorAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetAuditorAttributes = buildUseQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAuditorAttributes,
  queryKeyPrefix: "AuditorAttributesQuery"
});