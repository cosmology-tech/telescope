import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAllProvidersAttributesRequest, QueryProvidersResponse, QueryProviderAttributesRequest, QueryProviderAuditorRequest, QueryAuditorAttributesRequest } from "./query";
export const createGetAllProvidersAttributes = (clientResolver?: RpcResolver) => buildQuery<QueryAllProvidersAttributesRequest, QueryProvidersResponse>({
  encode: QueryAllProvidersAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "AllProvidersAttributes",
  clientResolver
});
export const createGetProviderAttributes = (clientResolver?: RpcResolver) => buildQuery<QueryProviderAttributesRequest, QueryProvidersResponse>({
  encode: QueryProviderAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "ProviderAttributes",
  clientResolver
});
export const createGetProviderAuditorAttributes = (clientResolver?: RpcResolver) => buildQuery<QueryProviderAuditorRequest, QueryProvidersResponse>({
  encode: QueryProviderAuditorRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "ProviderAuditorAttributes",
  clientResolver
});
export const createGetAuditorAttributes = (clientResolver?: RpcResolver) => buildQuery<QueryAuditorAttributesRequest, QueryProvidersResponse>({
  encode: QueryAuditorAttributesRequest.encode,
  decode: QueryProvidersResponse.decode,
  service: "akash.audit.v1beta2.Query",
  method: "AuditorAttributes",
  clientResolver
});