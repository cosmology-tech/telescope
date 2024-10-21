import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
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
export const createGetValidatorOutstandingRewards = (getRpcInstance: SigningClientResolver) => buildQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
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
export const createGetValidatorCommission = (getRpcInstance: SigningClientResolver) => buildQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
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
export const createGetValidatorSlashes = (getRpcInstance: SigningClientResolver) => buildQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
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
export const createGetDelegationRewards = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
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
export const createGetDelegationTotalRewards = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
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
export const createGetDelegatorValidators = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
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
export const createGetDelegatorWithdrawAddress = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
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
export const createGetCommunityPool = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
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