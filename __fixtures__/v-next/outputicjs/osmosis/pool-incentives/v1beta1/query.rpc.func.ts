import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export const createGetGaugeIds = (clientResolver: RpcResolver) => buildQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  encode: QueryGaugeIdsRequest.encode,
  decode: QueryGaugeIdsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "GaugeIds",
  clientResolver
});
export const useGetGaugeIds = buildUseQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  builderQueryFn: createGetGaugeIds,
  queryKeyPrefix: "GaugeIdsQuery"
});
export const createGetDistrInfo = (clientResolver: RpcResolver) => buildQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  encode: QueryDistrInfoRequest.encode,
  decode: QueryDistrInfoResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "DistrInfo",
  clientResolver
});
export const useGetDistrInfo = buildUseQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  builderQueryFn: createGetDistrInfo,
  queryKeyPrefix: "DistrInfoQuery"
});
export const createGetParams = (clientResolver: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetLockableDurations = (clientResolver: RpcResolver) => buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "LockableDurations",
  clientResolver
});
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});
export const createGetIncentivizedPools = (clientResolver: RpcResolver) => buildQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  encode: QueryIncentivizedPoolsRequest.encode,
  decode: QueryIncentivizedPoolsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "IncentivizedPools",
  clientResolver
});
export const useGetIncentivizedPools = buildUseQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  builderQueryFn: createGetIncentivizedPools,
  queryKeyPrefix: "IncentivizedPoolsQuery"
});
export const createGetExternalIncentiveGauges = (clientResolver: RpcResolver) => buildQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  encode: QueryExternalIncentiveGaugesRequest.encode,
  decode: QueryExternalIncentiveGaugesResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Query",
  method: "ExternalIncentiveGauges",
  clientResolver
});
export const useGetExternalIncentiveGauges = buildUseQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  builderQueryFn: createGetExternalIncentiveGauges,
  queryKeyPrefix: "ExternalIncentiveGaugesQuery"
});