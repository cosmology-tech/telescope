import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export const createGetModuleAccountBalance = (clientResolver?: RpcResolver) => buildQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  encode: QueryModuleAccountBalanceRequest.encode,
  decode: QueryModuleAccountBalanceResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ModuleAccountBalance",
  clientResolver
});
export const useGetModuleAccountBalance = buildUseQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: createGetModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetClaimRecord = (clientResolver?: RpcResolver) => buildQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  encode: QueryClaimRecordRequest.encode,
  decode: QueryClaimRecordResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ClaimRecord",
  clientResolver
});
export const useGetClaimRecord = buildUseQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: createGetClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
export const createGetClaimableForAction = (clientResolver?: RpcResolver) => buildQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  encode: QueryClaimableForActionRequest.encode,
  decode: QueryClaimableForActionResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "ClaimableForAction",
  clientResolver
});
export const useGetClaimableForAction = buildUseQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: createGetClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
export const createGetTotalClaimable = (clientResolver?: RpcResolver) => buildQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  encode: QueryTotalClaimableRequest.encode,
  decode: QueryTotalClaimableResponse.decode,
  service: "osmosis.claim.v1beta1.Query",
  method: "TotalClaimable",
  clientResolver
});
export const useGetTotalClaimable = buildUseQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: createGetTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});