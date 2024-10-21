import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export const createGetModuleToDistributeCoins = (getRpcInstance: RpcResolver) => buildQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  encoder: ModuleToDistributeCoinsRequest.encode,
  decoder: ModuleToDistributeCoinsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleToDistributeCoins",
  getRpcInstance: getRpcInstance
});
export const useGetModuleToDistributeCoins = buildUseQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  builderQueryFn: createGetModuleToDistributeCoins,
  queryKeyPrefix: "ModuleToDistributeCoinsQuery"
});
export const createGetGaugeByID = (getRpcInstance: RpcResolver) => buildQuery<GaugeByIDRequest, GaugeByIDResponse>({
  encoder: GaugeByIDRequest.encode,
  decoder: GaugeByIDResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GaugeByID",
  getRpcInstance: getRpcInstance
});
export const useGetGaugeByID = buildUseQuery<GaugeByIDRequest, GaugeByIDResponse>({
  builderQueryFn: createGetGaugeByID,
  queryKeyPrefix: "GaugeByIDQuery"
});
export const createGetGauges = (getRpcInstance: RpcResolver) => buildQuery<GaugesRequest, GaugesResponse>({
  encoder: GaugesRequest.encode,
  decoder: GaugesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Gauges",
  getRpcInstance: getRpcInstance
});
export const useGetGauges = buildUseQuery<GaugesRequest, GaugesResponse>({
  builderQueryFn: createGetGauges,
  queryKeyPrefix: "GaugesQuery"
});
export const createGetActiveGauges = (getRpcInstance: RpcResolver) => buildQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  encoder: ActiveGaugesRequest.encode,
  decoder: ActiveGaugesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ActiveGauges",
  getRpcInstance: getRpcInstance
});
export const useGetActiveGauges = buildUseQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  builderQueryFn: createGetActiveGauges,
  queryKeyPrefix: "ActiveGaugesQuery"
});
export const createGetActiveGaugesPerDenom = (getRpcInstance: RpcResolver) => buildQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  encoder: ActiveGaugesPerDenomRequest.encode,
  decoder: ActiveGaugesPerDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ActiveGaugesPerDenom",
  getRpcInstance: getRpcInstance
});
export const useGetActiveGaugesPerDenom = buildUseQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  builderQueryFn: createGetActiveGaugesPerDenom,
  queryKeyPrefix: "ActiveGaugesPerDenomQuery"
});
export const createGetUpcomingGauges = (getRpcInstance: RpcResolver) => buildQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  encoder: UpcomingGaugesRequest.encode,
  decoder: UpcomingGaugesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UpcomingGauges",
  getRpcInstance: getRpcInstance
});
export const useGetUpcomingGauges = buildUseQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  builderQueryFn: createGetUpcomingGauges,
  queryKeyPrefix: "UpcomingGaugesQuery"
});
export const createGetUpcomingGaugesPerDenom = (getRpcInstance: RpcResolver) => buildQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  encoder: UpcomingGaugesPerDenomRequest.encode,
  decoder: UpcomingGaugesPerDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UpcomingGaugesPerDenom",
  getRpcInstance: getRpcInstance
});
export const useGetUpcomingGaugesPerDenom = buildUseQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  builderQueryFn: createGetUpcomingGaugesPerDenom,
  queryKeyPrefix: "UpcomingGaugesPerDenomQuery"
});
export const createGetRewardsEst = (getRpcInstance: RpcResolver) => buildQuery<RewardsEstRequest, RewardsEstResponse>({
  encoder: RewardsEstRequest.encode,
  decoder: RewardsEstResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "RewardsEst",
  getRpcInstance: getRpcInstance
});
export const useGetRewardsEst = buildUseQuery<RewardsEstRequest, RewardsEstResponse>({
  builderQueryFn: createGetRewardsEst,
  queryKeyPrefix: "RewardsEstQuery"
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