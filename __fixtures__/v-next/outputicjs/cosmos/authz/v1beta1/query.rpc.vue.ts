import { buildUseVueQuery } from "../../../vue-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
import { createGetGrants, createGetGranterGrants, createGetGranteeGrants } from "./query.rpc.func.ts";
export const useGetGrants = buildUseVueQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: createGetGrants,
  queryKeyPrefix: "GrantsQuery"
});
export const useGetGranterGrants = buildUseVueQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: createGetGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
export const useGetGranteeGrants = buildUseVueQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: createGetGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});