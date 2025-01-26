import { buildUseVueQuery } from "../../../vue-query";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
import { createGetModuleAccountBalance, createGetParams, createGetClaimRecord, createGetClaimableForAction, createGetTotalClaimable } from "./query.rpc.func.ts";
export const useGetModuleAccountBalance = buildUseVueQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: createGetModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetClaimRecord = buildUseVueQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: createGetClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
export const useGetClaimableForAction = buildUseVueQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: createGetClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
export const useGetTotalClaimable = buildUseVueQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: createGetTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});