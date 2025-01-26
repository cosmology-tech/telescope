import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { buildUseVueQuery } from "../../../vue-query";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { createGetValidators, createGetValidator, createGetValidatorDelegations, createGetValidatorUnbondingDelegations, createGetDelegation, createGetUnbondingDelegation, createGetDelegatorDelegations, createGetDelegatorUnbondingDelegations, createGetRedelegations, createGetDelegatorValidators, createGetDelegatorValidator, createGetHistoricalInfo, createGetPool, createGetParams } from "./query.rpc.func.ts";
export const useGetValidators = buildUseVueQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: createGetValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
export const useGetValidator = buildUseVueQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: createGetValidator,
  queryKeyPrefix: "ValidatorQuery"
});
export const useGetValidatorDelegations = buildUseVueQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: createGetValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
export const useGetValidatorUnbondingDelegations = buildUseVueQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
export const useGetDelegation = buildUseVueQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: createGetDelegation,
  queryKeyPrefix: "DelegationQuery"
});
export const useGetUnbondingDelegation = buildUseVueQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: createGetUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
export const useGetDelegatorDelegations = buildUseVueQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: createGetDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
export const useGetDelegatorUnbondingDelegations = buildUseVueQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: createGetDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
export const useGetRedelegations = buildUseVueQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: createGetRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
export const useGetDelegatorValidators = buildUseVueQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: createGetDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
export const useGetDelegatorValidator = buildUseVueQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: createGetDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
export const useGetHistoricalInfo = buildUseVueQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: createGetHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
export const useGetPool = buildUseVueQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: createGetPool,
  queryKeyPrefix: "PoolQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});