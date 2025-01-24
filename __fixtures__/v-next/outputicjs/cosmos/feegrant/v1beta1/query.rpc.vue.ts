import { buildUseVueQuery } from "../../../vue-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
import { createGetAllowance, createGetAllowances, createGetAllowancesByGranter } from "./query.rpc.func.ts";
export const useGetAllowance = buildUseVueQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: createGetAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const useGetAllowances = buildUseVueQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: createGetAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const useGetAllowancesByGranter = buildUseVueQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: createGetAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});