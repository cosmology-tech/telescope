import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export const createGetGrants = (clientResolver?: RpcResolver) => buildQuery<QueryGrantsRequest, QueryGrantsResponse>({
  encode: QueryGrantsRequest.encode,
  decode: QueryGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "Grants",
  clientResolver
});
export const useGetGrants = buildUseQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: createGetGrants,
  queryKeyPrefix: "GrantsQuery"
});
export const createGetGranterGrants = (clientResolver?: RpcResolver) => buildQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  encode: QueryGranterGrantsRequest.encode,
  decode: QueryGranterGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranterGrants",
  clientResolver
});
export const useGetGranterGrants = buildUseQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: createGetGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
export const createGetGranteeGrants = (clientResolver?: RpcResolver) => buildQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  encode: QueryGranteeGrantsRequest.encode,
  decode: QueryGranteeGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranteeGrants",
  clientResolver
});
export const useGetGranteeGrants = buildUseQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: createGetGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});