import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
export const createGetAllProvidersAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
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
export const createGetProviderAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
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
export const createGetProviderAuditorAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
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
export const createGetAuditorAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
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