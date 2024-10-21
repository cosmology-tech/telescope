import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetValidators = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  encoder: QueryValidatorsRequest.encode,
  decoder: QueryValidatorsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Validators",
  getRpcInstance: getRpcInstance
});
export const useGetValidators = buildUseQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: createGetValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
export const createGetValidator = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorRequest, QueryValidatorResponse>({
  encoder: QueryValidatorRequest.encode,
  decoder: QueryValidatorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Validator",
  getRpcInstance: getRpcInstance
});
export const useGetValidator = buildUseQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: createGetValidator,
  queryKeyPrefix: "ValidatorQuery"
});
export const createGetValidatorDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  encoder: QueryValidatorDelegationsRequest.encode,
  decoder: QueryValidatorDelegationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ValidatorDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorDelegations = buildUseQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: createGetValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
export const createGetValidatorUnbondingDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  encoder: QueryValidatorUnbondingDelegationsRequest.encode,
  decoder: QueryValidatorUnbondingDelegationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ValidatorUnbondingDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetValidatorUnbondingDelegations = buildUseQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
export const createGetDelegation = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegationRequest, QueryDelegationResponse>({
  encoder: QueryDelegationRequest.encode,
  decoder: QueryDelegationResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Delegation",
  getRpcInstance: getRpcInstance
});
export const useGetDelegation = buildUseQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: createGetDelegation,
  queryKeyPrefix: "DelegationQuery"
});
export const createGetUnbondingDelegation = (getRpcInstance: RpcResolver) => buildQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  encoder: QueryUnbondingDelegationRequest.encode,
  decoder: QueryUnbondingDelegationResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UnbondingDelegation",
  getRpcInstance: getRpcInstance
});
export const useGetUnbondingDelegation = buildUseQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: createGetUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
export const createGetDelegatorDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  encoder: QueryDelegatorDelegationsRequest.encode,
  decoder: QueryDelegatorDelegationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegatorDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorDelegations = buildUseQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: createGetDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
export const createGetDelegatorUnbondingDelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  encoder: QueryDelegatorUnbondingDelegationsRequest.encode,
  decoder: QueryDelegatorUnbondingDelegationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegatorUnbondingDelegations",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorUnbondingDelegations = buildUseQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
export const createGetRedelegations = (getRpcInstance: RpcResolver) => buildQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  encoder: QueryRedelegationsRequest.encode,
  decoder: QueryRedelegationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Redelegations",
  getRpcInstance: getRpcInstance
});
export const useGetRedelegations = buildUseQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: createGetRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
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
export const createGetDelegatorValidator = (getRpcInstance: RpcResolver) => buildQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  encoder: QueryDelegatorValidatorRequest.encode,
  decoder: QueryDelegatorValidatorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DelegatorValidator",
  getRpcInstance: getRpcInstance
});
export const useGetDelegatorValidator = buildUseQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: createGetDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
export const createGetHistoricalInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  encoder: QueryHistoricalInfoRequest.encode,
  decoder: QueryHistoricalInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "HistoricalInfo",
  getRpcInstance: getRpcInstance
});
export const useGetHistoricalInfo = buildUseQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: createGetHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
export const createGetPool = (getRpcInstance: RpcResolver) => buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encoder: QueryPoolRequest.encode,
  decoder: QueryPoolResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Pool",
  getRpcInstance: getRpcInstance
});
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
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