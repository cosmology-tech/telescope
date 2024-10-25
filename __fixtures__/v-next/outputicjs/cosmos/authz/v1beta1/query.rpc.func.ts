import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export const createGetGrants = (getRpcInstance: RpcResolver) => buildQuery<QueryGrantsRequest, QueryGrantsResponse>({
  encode: QueryGrantsRequest.encode,
  decode: QueryGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "Grants",
  getRpcInstance: getRpcInstance
});
export const useGetGrants = buildUseQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: createGetGrants,
  queryKeyPrefix: "GrantsQuery"
});
export const createGetGranterGrants = (getRpcInstance: RpcResolver) => buildQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  encode: QueryGranterGrantsRequest.encode,
  decode: QueryGranterGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranterGrants",
  getRpcInstance: getRpcInstance
});
export const useGetGranterGrants = buildUseQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: createGetGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
export const createGetGranteeGrants = (getRpcInstance: RpcResolver) => buildQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  encode: QueryGranteeGrantsRequest.encode,
  decode: QueryGranteeGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranteeGrants",
  getRpcInstance: getRpcInstance
});
export const useGetGranteeGrants = buildUseQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: createGetGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});