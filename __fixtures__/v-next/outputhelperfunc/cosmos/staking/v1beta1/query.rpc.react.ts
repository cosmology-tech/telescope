import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { createGetValidators, createGetValidator, createGetValidatorDelegations, createGetValidatorUnbondingDelegations, createGetDelegation, createGetUnbondingDelegation, createGetDelegatorDelegations, createGetDelegatorUnbondingDelegations, createGetRedelegations, createGetDelegatorValidators, createGetDelegatorValidator, createGetHistoricalInfo, createGetPool, createGetParams } from "./query.rpc.func";
export const useGetValidators = buildUseQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: createGetValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
export const useGetValidator = buildUseQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: createGetValidator,
  queryKeyPrefix: "ValidatorQuery"
});
export const useGetValidatorDelegations = buildUseQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: createGetValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
export const useGetValidatorUnbondingDelegations = buildUseQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
export const useGetDelegation = buildUseQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: createGetDelegation,
  queryKeyPrefix: "DelegationQuery"
});
export const useGetUnbondingDelegation = buildUseQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: createGetUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
export const useGetDelegatorDelegations = buildUseQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: createGetDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
export const useGetDelegatorUnbondingDelegations = buildUseQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
export const useGetRedelegations = buildUseQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: createGetRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const useGetDelegatorValidator = buildUseQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: createGetDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
export const useGetHistoricalInfo = buildUseQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: createGetHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});