import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetValidators = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  encode: QueryValidatorsRequest.encode,
  decode: QueryValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Validators",
  method: "Validators",
  getRpcInstance: getRpcInstance
});
export const useGetValidators = buildUseQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: createGetValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
export const createGetValidator = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorRequest, QueryValidatorResponse>({
  encode: QueryValidatorRequest.encode,
  decode: QueryValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Validator",
  method: "Validator",
  getRpcInstance: getRpcInstance
});
export const useGetValidator = buildUseQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: createGetValidator,
  queryKeyPrefix: "ValidatorQuery"
});
export const createGetValidatorDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  encode: QueryValidatorDelegationsRequest.encode,
  decode: QueryValidatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.ValidatorDelegations",
  method: "ValidatorDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorDelegations = buildUseQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: createGetValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
export const createGetValidatorUnbondingDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  encode: QueryValidatorUnbondingDelegationsRequest.encode,
  decode: QueryValidatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.ValidatorUnbondingDelegations",
  method: "ValidatorUnbondingDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorUnbondingDelegations = buildUseQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
export const createGetDelegation = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegationRequest, QueryDelegationResponse>({
  encode: QueryDelegationRequest.encode,
  decode: QueryDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Delegation",
  method: "Delegation",
  getRpcInstance: getRpcInstance
});
export const useGetDelegation = buildUseQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: createGetDelegation,
  queryKeyPrefix: "DelegationQuery"
});
export const createGetUnbondingDelegation = (getRpcInstance: RpcResolver) => buildQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  encode: QueryUnbondingDelegationRequest.encode,
  decode: QueryUnbondingDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.UnbondingDelegation",
  method: "UnbondingDelegation",
  getRpcInstance: getRpcInstance
});
export const useGetUnbondingDelegation = buildUseQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: createGetUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
export const createGetDelegatorDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  encode: QueryDelegatorDelegationsRequest.encode,
  decode: QueryDelegatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.DelegatorDelegations",
  method: "DelegatorDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorDelegations = buildUseQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: createGetDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
export const createGetDelegatorUnbondingDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  encode: QueryDelegatorUnbondingDelegationsRequest.encode,
  decode: QueryDelegatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.DelegatorUnbondingDelegations",
  method: "DelegatorUnbondingDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorUnbondingDelegations = buildUseQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
export const createGetRedelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  encode: QueryRedelegationsRequest.encode,
  decode: QueryRedelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Redelegations",
  method: "Redelegations",
  getRpcInstance: getRpcInstance
});
export const useGetRedelegations = buildUseQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: createGetRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
export const createGetDelegatorValidators = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.DelegatorValidators",
  method: "DelegatorValidators",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const createGetDelegatorValidator = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  encode: QueryDelegatorValidatorRequest.encode,
  decode: QueryDelegatorValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.DelegatorValidator",
  method: "DelegatorValidator",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorValidator = buildUseQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: createGetDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
export const createGetHistoricalInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  encode: QueryHistoricalInfoRequest.encode,
  decode: QueryHistoricalInfoResponse.decode,
  service: "cosmos.staking.v1beta1.HistoricalInfo",
  method: "HistoricalInfo",
  getRpcInstance: getRpcInstance
});
export const useGetHistoricalInfo = buildUseQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: createGetHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
export const createGetPool = (getRpcInstance: RpcResolver) => buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "cosmos.staking.v1beta1.Pool",
  method: "Pool",
  getRpcInstance: getRpcInstance
});
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.staking.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});