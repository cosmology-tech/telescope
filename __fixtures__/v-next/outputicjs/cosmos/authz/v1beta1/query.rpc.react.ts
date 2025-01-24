import { buildUseQuery } from "../../../react-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
import { createGetGrants, createGetGranterGrants, createGetGranteeGrants } from "./query.rpc.func.ts";
export const useGetGrants = buildUseQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: createGetGrants,
  queryKeyPrefix: "GrantsQuery"
});
export const useGetGranterGrants = buildUseQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: createGetGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
export const useGetGranteeGrants = buildUseQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: createGetGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});