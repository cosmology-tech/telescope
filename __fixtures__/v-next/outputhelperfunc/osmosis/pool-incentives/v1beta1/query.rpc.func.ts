import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export const createGetGaugeIds = (getRpcInstance: RpcResolver) => buildQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  encode: QueryGaugeIdsRequest.encode,
  decode: QueryGaugeIdsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.GaugeIds",
  method: "GaugeIds",
  getRpcInstance: getRpcInstance
});
export const useGetGaugeIds = buildUseQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  builderQueryFn: createGetGaugeIds,
  queryKeyPrefix: "GaugeIdsQuery"
});
export const createGetDistrInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  encode: QueryDistrInfoRequest.encode,
  decode: QueryDistrInfoResponse.decode,
  service: "osmosis.poolincentives.v1beta1.DistrInfo",
  method: "DistrInfo",
  getRpcInstance: getRpcInstance
});
export const useGetDistrInfo = buildUseQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  builderQueryFn: createGetDistrInfo,
  queryKeyPrefix: "DistrInfoQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetLockableDurations = (getRpcInstance: RpcResolver) => buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.LockableDurations",
  method: "LockableDurations",
  getRpcInstance: getRpcInstance
});
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});
export const createGetIncentivizedPools = (getRpcInstance: RpcResolver) => buildQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  encode: QueryIncentivizedPoolsRequest.encode,
  decode: QueryIncentivizedPoolsResponse.decode,
  service: "osmosis.poolincentives.v1beta1.IncentivizedPools",
  method: "IncentivizedPools",
  getRpcInstance: getRpcInstance
});
export const useGetIncentivizedPools = buildUseQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  builderQueryFn: createGetIncentivizedPools,
  queryKeyPrefix: "IncentivizedPoolsQuery"
});
export const createGetExternalIncentiveGauges = (getRpcInstance: RpcResolver) => buildQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  encode: QueryExternalIncentiveGaugesRequest.encode,
  decode: QueryExternalIncentiveGaugesResponse.decode,
  service: "osmosis.poolincentives.v1beta1.ExternalIncentiveGauges",
  method: "ExternalIncentiveGauges",
  getRpcInstance: getRpcInstance
});
export const useGetExternalIncentiveGauges = buildUseQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  builderQueryFn: createGetExternalIncentiveGauges,
  queryKeyPrefix: "ExternalIncentiveGaugesQuery"
});