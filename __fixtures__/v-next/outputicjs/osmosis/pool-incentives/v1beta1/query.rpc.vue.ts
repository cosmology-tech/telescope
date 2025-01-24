import { buildUseVueQuery } from "../../../vue-query";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
import { createGetGaugeIds, createGetDistrInfo, createGetParams, createGetLockableDurations, createGetIncentivizedPools, createGetExternalIncentiveGauges } from "./query.rpc.func.ts";
export const useGetGaugeIds = buildUseVueQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  builderQueryFn: createGetGaugeIds,
  queryKeyPrefix: "GaugeIdsQuery"
});
export const useGetDistrInfo = buildUseVueQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  builderQueryFn: createGetDistrInfo,
  queryKeyPrefix: "DistrInfoQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetLockableDurations = buildUseVueQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});
export const useGetIncentivizedPools = buildUseVueQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  builderQueryFn: createGetIncentivizedPools,
  queryKeyPrefix: "IncentivizedPoolsQuery"
});
export const useGetExternalIncentiveGauges = buildUseVueQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  builderQueryFn: createGetExternalIncentiveGauges,
  queryKeyPrefix: "ExternalIncentiveGaugesQuery"
});