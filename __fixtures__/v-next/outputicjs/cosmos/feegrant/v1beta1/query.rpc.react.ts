import { buildUseQuery } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
import { createGetAllowance, createGetAllowances, createGetAllowancesByGranter } from "./query.rpc.func";
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: createGetAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: createGetAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: createGetAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});