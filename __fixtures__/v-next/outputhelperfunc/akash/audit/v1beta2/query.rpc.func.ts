import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
export const createGetAllProvidersAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  encode: QueryAllProvidersAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.AllProvidersAttributes",
  method: "AllProvidersAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetAllProvidersAttributes = buildUseQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAllProvidersAttributes,
  queryKeyPrefix: "AllProvidersAttributesQuery"
});
export const createGetProviderAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  encode: QueryProviderAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.ProviderAttributes",
  method: "ProviderAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetProviderAttributes = buildUseQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAttributes,
  queryKeyPrefix: "ProviderAttributesQuery"
});
export const createGetProviderAuditorAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  encode: QueryProviderAuditorRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.ProviderAuditorAttributes",
  method: "ProviderAuditorAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetProviderAuditorAttributes = buildUseQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  builderQueryFn: createGetProviderAuditorAttributes,
  queryKeyPrefix: "ProviderAuditorAttributesQuery"
});
export const createGetAuditorAttributes = (getRpcInstance: RpcResolver) => buildQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  encode: QueryAuditorAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.AuditorAttributes",
  method: "AuditorAttributes",
  getRpcInstance: getRpcInstance
});
export const useGetAuditorAttributes = buildUseQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  builderQueryFn: createGetAuditorAttributes,
  queryKeyPrefix: "AuditorAttributesQuery"
});