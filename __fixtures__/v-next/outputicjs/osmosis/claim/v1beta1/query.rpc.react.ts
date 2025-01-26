import { buildUseQuery } from "../../../react-query";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
import { createGetModuleAccountBalance, createGetParams, createGetClaimRecord, createGetClaimableForAction, createGetTotalClaimable } from "./query.rpc.func.ts";
export const useGetModuleAccountBalance = buildUseQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: createGetModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetClaimRecord = buildUseQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: createGetClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
export const useGetClaimableForAction = buildUseQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: createGetClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
export const useGetTotalClaimable = buildUseQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: createGetTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});