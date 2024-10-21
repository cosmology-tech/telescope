import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
export const createGetModuleAccountBalance = (getRpcInstance: SigningClientResolver) => buildQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  encoder: QueryModuleAccountBalanceRequest.encode,
  decoder: QueryModuleAccountBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleAccountBalance",
  getRpcInstance: getRpcInstance
});
export const useGetModuleAccountBalance = buildUseQuery<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse>({
  builderQueryFn: createGetModuleAccountBalance,
  queryKeyPrefix: "ModuleAccountBalanceQuery"
});
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetClaimRecord = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  encoder: QueryClaimRecordRequest.encode,
  decoder: QueryClaimRecordResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClaimRecord",
  getRpcInstance: getRpcInstance
});
export const useGetClaimRecord = buildUseQuery<QueryClaimRecordRequest, QueryClaimRecordResponse>({
  builderQueryFn: createGetClaimRecord,
  queryKeyPrefix: "ClaimRecordQuery"
});
export const createGetClaimableForAction = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  encoder: QueryClaimableForActionRequest.encode,
  decoder: QueryClaimableForActionResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClaimableForAction",
  getRpcInstance: getRpcInstance
});
export const useGetClaimableForAction = buildUseQuery<QueryClaimableForActionRequest, QueryClaimableForActionResponse>({
  builderQueryFn: createGetClaimableForAction,
  queryKeyPrefix: "ClaimableForActionQuery"
});
export const createGetTotalClaimable = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  encoder: QueryTotalClaimableRequest.encode,
  decoder: QueryTotalClaimableResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalClaimable",
  getRpcInstance: getRpcInstance
});
export const useGetTotalClaimable = buildUseQuery<QueryTotalClaimableRequest, QueryTotalClaimableResponse>({
  builderQueryFn: createGetTotalClaimable,
  queryKeyPrefix: "TotalClaimableQuery"
});