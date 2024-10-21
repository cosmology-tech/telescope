import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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
export const createGetValidatorOutstandingRewards = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  encoder: QueryValidatorOutstandingRewardsRequest.encode,
  decoder: QueryValidatorOutstandingRewardsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ValidatorOutstandingRewards",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorOutstandingRewards = buildUseQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  builderQueryFn: createGetValidatorOutstandingRewards,
  queryKeyPrefix: "ValidatorOutstandingRewardsQuery"
});
export const createGetValidatorCommission = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  encoder: QueryValidatorCommissionRequest.encode,
  decoder: QueryValidatorCommissionResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ValidatorCommission",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorCommission = buildUseQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  builderQueryFn: createGetValidatorCommission,
  queryKeyPrefix: "ValidatorCommissionQuery"
});
export const createGetValidatorSlashes = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  encoder: QueryValidatorSlashesRequest.encode,
  decoder: QueryValidatorSlashesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ValidatorSlashes",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorSlashes = buildUseQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  builderQueryFn: createGetValidatorSlashes,
  queryKeyPrefix: "ValidatorSlashesQuery"
});
export const createGetDelegationRewards = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  encoder: QueryDelegationRewardsRequest.encode,
  decoder: QueryDelegationRewardsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegationRewards",
  getRpcInstance: getRpcInstance
});
export const useGetDelegationRewards = buildUseQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  builderQueryFn: createGetDelegationRewards,
  queryKeyPrefix: "DelegationRewardsQuery"
});
export const createGetDelegationTotalRewards = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  encoder: QueryDelegationTotalRewardsRequest.encode,
  decoder: QueryDelegationTotalRewardsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegationTotalRewards",
  getRpcInstance: getRpcInstance
});
export const useGetDelegationTotalRewards = buildUseQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  builderQueryFn: createGetDelegationTotalRewards,
  queryKeyPrefix: "DelegationTotalRewardsQuery"
});
export const createGetDelegatorValidators = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encoder: QueryDelegatorValidatorsRequest.encode,
  decoder: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegatorValidators",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const createGetDelegatorWithdrawAddress = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  encoder: QueryDelegatorWithdrawAddressRequest.encode,
  decoder: QueryDelegatorWithdrawAddressResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegatorWithdrawAddress",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorWithdrawAddress = buildUseQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  builderQueryFn: createGetDelegatorWithdrawAddress,
  queryKeyPrefix: "DelegatorWithdrawAddressQuery"
});
export const createGetCommunityPool = (getRpcInstance: RpcResolver) => buildQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  encoder: QueryCommunityPoolRequest.encode,
  decoder: QueryCommunityPoolResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CommunityPool",
  getRpcInstance: getRpcInstance
});
export const useGetCommunityPool = buildUseQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  builderQueryFn: createGetCommunityPool,
  queryKeyPrefix: "CommunityPoolQuery"
});