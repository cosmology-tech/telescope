import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType, GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { SigningClientResolver } from "../../../helpers";
import { QueryGrantsRequest, QueryGrantsRequestSDKType, QueryGrantsResponse, QueryGrantsResponseSDKType, QueryGranterGrantsRequest, QueryGranterGrantsRequestSDKType, QueryGranterGrantsResponse, QueryGranterGrantsResponseSDKType, QueryGranteeGrantsRequest, QueryGranteeGrantsRequestSDKType, QueryGranteeGrantsResponse, QueryGranteeGrantsResponseSDKType } from "./query";
export const createGetGrants = (getRpcInstance: SigningClientResolver) => buildQuery<QueryGrantsRequest, QueryGrantsResponse>({
  encoder: QueryGrantsRequest.encode,
  decoder: QueryGrantsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Grants",
  getRpcInstance: getRpcInstance
});
export const useGetGrants = buildUseQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: createGetGrants,
  queryKeyPrefix: "GrantsQuery"
});
export const createGetGranterGrants = (getRpcInstance: SigningClientResolver) => buildQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  encoder: QueryGranterGrantsRequest.encode,
  decoder: QueryGranterGrantsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GranterGrants",
  getRpcInstance: getRpcInstance
});
export const useGetGranterGrants = buildUseQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: createGetGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
export const createGetGranteeGrants = (getRpcInstance: SigningClientResolver) => buildQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  encoder: QueryGranteeGrantsRequest.encode,
  decoder: QueryGranteeGrantsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GranteeGrants",
  getRpcInstance: getRpcInstance
});
export const useGetGranteeGrants = buildUseQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: createGetGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});