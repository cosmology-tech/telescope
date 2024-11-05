import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetValidators = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  encode: QueryValidatorsRequest.encode,
  decode: QueryValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Validators",
  clientResolver
});
export const useGetValidators = buildUseQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: createGetValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
export const createGetValidator = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorRequest, QueryValidatorResponse>({
  encode: QueryValidatorRequest.encode,
  decode: QueryValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Validator",
  clientResolver
});
export const useGetValidator = buildUseQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: createGetValidator,
  queryKeyPrefix: "ValidatorQuery"
});
export const createGetValidatorDelegations = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  encode: QueryValidatorDelegationsRequest.encode,
  decode: QueryValidatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "ValidatorDelegations",
  clientResolver
});
export const useGetValidatorDelegations = buildUseQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: createGetValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
export const createGetValidatorUnbondingDelegations = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  encode: QueryValidatorUnbondingDelegationsRequest.encode,
  decode: QueryValidatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "ValidatorUnbondingDelegations",
  clientResolver
});
export const useGetValidatorUnbondingDelegations = buildUseQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
export const createGetDelegation = (clientResolver?: RpcResolver) => buildQuery<QueryDelegationRequest, QueryDelegationResponse>({
  encode: QueryDelegationRequest.encode,
  decode: QueryDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Delegation",
  clientResolver
});
export const useGetDelegation = buildUseQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: createGetDelegation,
  queryKeyPrefix: "DelegationQuery"
});
export const createGetUnbondingDelegation = (clientResolver?: RpcResolver) => buildQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  encode: QueryUnbondingDelegationRequest.encode,
  decode: QueryUnbondingDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "UnbondingDelegation",
  clientResolver
});
export const useGetUnbondingDelegation = buildUseQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: createGetUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
export const createGetDelegatorDelegations = (clientResolver?: RpcResolver) => buildQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  encode: QueryDelegatorDelegationsRequest.encode,
  decode: QueryDelegatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorDelegations",
  clientResolver
});
export const useGetDelegatorDelegations = buildUseQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: createGetDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
export const createGetDelegatorUnbondingDelegations = (clientResolver?: RpcResolver) => buildQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  encode: QueryDelegatorUnbondingDelegationsRequest.encode,
  decode: QueryDelegatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorUnbondingDelegations",
  clientResolver
});
export const useGetDelegatorUnbondingDelegations = buildUseQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
export const createGetRedelegations = (clientResolver?: RpcResolver) => buildQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  encode: QueryRedelegationsRequest.encode,
  decode: QueryRedelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Redelegations",
  clientResolver
});
export const useGetRedelegations = buildUseQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: createGetRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
export const createGetDelegatorValidators = (clientResolver?: RpcResolver) => buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorValidators",
  clientResolver
});
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const createGetDelegatorValidator = (clientResolver?: RpcResolver) => buildQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  encode: QueryDelegatorValidatorRequest.encode,
  decode: QueryDelegatorValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorValidator",
  clientResolver
});
export const useGetDelegatorValidator = buildUseQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: createGetDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
export const createGetHistoricalInfo = (clientResolver?: RpcResolver) => buildQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  encode: QueryHistoricalInfoRequest.encode,
  decode: QueryHistoricalInfoResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "HistoricalInfo",
  clientResolver
});
export const useGetHistoricalInfo = buildUseQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: createGetHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
export const createGetPool = (clientResolver?: RpcResolver) => buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Pool",
  clientResolver
});
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});