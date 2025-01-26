import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
import { createGetParams, createGetValidatorOutstandingRewards, createGetValidatorCommission, createGetValidatorSlashes, createGetDelegationRewards, createGetDelegationTotalRewards, createGetDelegatorValidators, createGetDelegatorWithdrawAddress, createGetCommunityPool } from "./query.rpc.func.ts";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetValidatorOutstandingRewards = buildUseVueQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  builderQueryFn: createGetValidatorOutstandingRewards,
  queryKeyPrefix: "ValidatorOutstandingRewardsQuery"
});
export const useGetValidatorCommission = buildUseVueQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  builderQueryFn: createGetValidatorCommission,
  queryKeyPrefix: "ValidatorCommissionQuery"
});
export const useGetValidatorSlashes = buildUseVueQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  builderQueryFn: createGetValidatorSlashes,
  queryKeyPrefix: "ValidatorSlashesQuery"
});
export const useGetDelegationRewards = buildUseVueQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  builderQueryFn: createGetDelegationRewards,
  queryKeyPrefix: "DelegationRewardsQuery"
});
export const useGetDelegationTotalRewards = buildUseVueQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  builderQueryFn: createGetDelegationTotalRewards,
  queryKeyPrefix: "DelegationTotalRewardsQuery"
});
export const useGetDelegatorValidators = buildUseVueQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const useGetDelegatorWithdrawAddress = buildUseVueQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  builderQueryFn: createGetDelegatorWithdrawAddress,
  queryKeyPrefix: "DelegatorWithdrawAddressQuery"
});
export const useGetCommunityPool = buildUseVueQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  builderQueryFn: createGetCommunityPool,
  queryKeyPrefix: "CommunityPoolQuery"
});