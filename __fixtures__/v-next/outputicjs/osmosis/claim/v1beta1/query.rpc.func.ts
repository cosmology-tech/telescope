import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export const createGetModuleAccountBalance = (getRpcInstance: RpcResolver) => buildQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  encode: QueryModuleAccountBalanceRequest.encode,
  decode: QueryModuleAccountBalanceResponse.decode,
  service: "osmosis.claim.v1beta1.ModuleAccountBalance",
  method: "ModuleAccountBalance",
  getRpcInstance: getRpcInstance
});
export const useGetModuleAccountBalance = buildUseQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: createGetModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.claim.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetClaimRecord = (getRpcInstance: RpcResolver) => buildQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  encode: QueryClaimRecordRequest.encode,
  decode: QueryClaimRecordResponse.decode,
  service: "osmosis.claim.v1beta1.ClaimRecord",
  method: "ClaimRecord",
  getRpcInstance: getRpcInstance
});
export const useGetClaimRecord = buildUseQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: createGetClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
export const createGetClaimableForAction = (getRpcInstance: RpcResolver) => buildQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  encode: QueryClaimableForActionRequest.encode,
  decode: QueryClaimableForActionResponse.decode,
  service: "osmosis.claim.v1beta1.ClaimableForAction",
  method: "ClaimableForAction",
  getRpcInstance: getRpcInstance
});
export const useGetClaimableForAction = buildUseQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: createGetClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
export const createGetTotalClaimable = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  encode: QueryTotalClaimableRequest.encode,
  decode: QueryTotalClaimableResponse.decode,
  service: "osmosis.claim.v1beta1.TotalClaimable",
  method: "TotalClaimable",
  getRpcInstance: getRpcInstance
});
export const useGetTotalClaimable = buildUseQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: createGetTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});