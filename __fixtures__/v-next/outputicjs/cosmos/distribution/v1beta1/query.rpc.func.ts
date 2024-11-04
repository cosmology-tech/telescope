import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export const createGetParams = (clientResolver: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetValidatorOutstandingRewards = (clientResolver: RpcResolver) => buildQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  encode: QueryValidatorOutstandingRewardsRequest.encode,
  decode: QueryValidatorOutstandingRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorOutstandingRewards",
  clientResolver
});
export const useGetValidatorOutstandingRewards = buildUseQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  builderQueryFn: createGetValidatorOutstandingRewards,
  queryKeyPrefix: "ValidatorOutstandingRewardsQuery"
});
export const createGetValidatorCommission = (clientResolver: RpcResolver) => buildQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  encode: QueryValidatorCommissionRequest.encode,
  decode: QueryValidatorCommissionResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorCommission",
  clientResolver
});
export const useGetValidatorCommission = buildUseQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  builderQueryFn: createGetValidatorCommission,
  queryKeyPrefix: "ValidatorCommissionQuery"
});
export const createGetValidatorSlashes = (clientResolver: RpcResolver) => buildQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  encode: QueryValidatorSlashesRequest.encode,
  decode: QueryValidatorSlashesResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorSlashes",
  clientResolver
});
export const useGetValidatorSlashes = buildUseQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  builderQueryFn: createGetValidatorSlashes,
  queryKeyPrefix: "ValidatorSlashesQuery"
});
export const createGetDelegationRewards = (clientResolver: RpcResolver) => buildQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  encode: QueryDelegationRewardsRequest.encode,
  decode: QueryDelegationRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegationRewards",
  clientResolver
});
export const useGetDelegationRewards = buildUseQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  builderQueryFn: createGetDelegationRewards,
  queryKeyPrefix: "DelegationRewardsQuery"
});
export const createGetDelegationTotalRewards = (clientResolver: RpcResolver) => buildQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  encode: QueryDelegationTotalRewardsRequest.encode,
  decode: QueryDelegationTotalRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegationTotalRewards",
  clientResolver
});
export const useGetDelegationTotalRewards = buildUseQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  builderQueryFn: createGetDelegationTotalRewards,
  queryKeyPrefix: "DelegationTotalRewardsQuery"
});
export const createGetDelegatorValidators = (clientResolver: RpcResolver) => buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegatorValidators",
  clientResolver
});
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const createGetDelegatorWithdrawAddress = (clientResolver: RpcResolver) => buildQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  encode: QueryDelegatorWithdrawAddressRequest.encode,
  decode: QueryDelegatorWithdrawAddressResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegatorWithdrawAddress",
  clientResolver
});
export const useGetDelegatorWithdrawAddress = buildUseQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  builderQueryFn: createGetDelegatorWithdrawAddress,
  queryKeyPrefix: "DelegatorWithdrawAddressQuery"
});
export const createGetCommunityPool = (clientResolver: RpcResolver) => buildQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  encode: QueryCommunityPoolRequest.encode,
  decode: QueryCommunityPoolResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "CommunityPool",
  clientResolver
});
export const useGetCommunityPool = buildUseQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  builderQueryFn: createGetCommunityPool,
  queryKeyPrefix: "CommunityPoolQuery"
});