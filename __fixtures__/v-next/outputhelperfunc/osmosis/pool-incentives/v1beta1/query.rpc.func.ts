import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export const createGetGaugeIds = (getRpcInstance: RpcResolver) => buildQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  encoder: QueryGaugeIdsRequest.encode,
  decoder: QueryGaugeIdsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GaugeIds",
  getRpcInstance: getRpcInstance
});
export const useGetGaugeIds = buildUseQuery<QueryGaugeIdsRequest, QueryGaugeIdsResponse>({
  builderQueryFn: createGetGaugeIds,
  queryKeyPrefix: "GaugeIdsQuery"
});
export const createGetDistrInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  encoder: QueryDistrInfoRequest.encode,
  decoder: QueryDistrInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DistrInfo",
  getRpcInstance: getRpcInstance
});
export const useGetDistrInfo = buildUseQuery<QueryDistrInfoRequest, QueryDistrInfoResponse>({
  builderQueryFn: createGetDistrInfo,
  queryKeyPrefix: "DistrInfoQuery"
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
export const createGetLockableDurations = (getRpcInstance: RpcResolver) => buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encoder: QueryLockableDurationsRequest.encode,
  decoder: QueryLockableDurationsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "LockableDurations",
  getRpcInstance: getRpcInstance
});
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});
export const createGetIncentivizedPools = (getRpcInstance: RpcResolver) => buildQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  encoder: QueryIncentivizedPoolsRequest.encode,
  decoder: QueryIncentivizedPoolsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "IncentivizedPools",
  getRpcInstance: getRpcInstance
});
export const useGetIncentivizedPools = buildUseQuery<QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse>({
  builderQueryFn: createGetIncentivizedPools,
  queryKeyPrefix: "IncentivizedPoolsQuery"
});
export const createGetExternalIncentiveGauges = (getRpcInstance: RpcResolver) => buildQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  encoder: QueryExternalIncentiveGaugesRequest.encode,
  decoder: QueryExternalIncentiveGaugesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ExternalIncentiveGauges",
  getRpcInstance: getRpcInstance
});
export const useGetExternalIncentiveGauges = buildUseQuery<QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse>({
  builderQueryFn: createGetExternalIncentiveGauges,
  queryKeyPrefix: "ExternalIncentiveGaugesQuery"
});