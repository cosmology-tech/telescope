import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export const createGetModuleToDistributeCoins = (getRpcInstance: RpcResolver) => buildQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  encode: ModuleToDistributeCoinsRequest.encode,
  decode: ModuleToDistributeCoinsResponse.decode,
  service: "osmosis.incentives.ModuleToDistributeCoins",
  method: "ModuleToDistributeCoins",
  getRpcInstance: getRpcInstance
});
export const useGetModuleToDistributeCoins = buildUseQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  builderQueryFn: createGetModuleToDistributeCoins,
  queryKeyPrefix: "ModuleToDistributeCoinsQuery"
});
export const createGetGaugeByID = (getRpcInstance: RpcResolver) => buildQuery<GaugeByIDRequest, GaugeByIDResponse>({
  encode: GaugeByIDRequest.encode,
  decode: GaugeByIDResponse.decode,
  service: "osmosis.incentives.GaugeByID",
  method: "GaugeByID",
  getRpcInstance: getRpcInstance
});
export const useGetGaugeByID = buildUseQuery<GaugeByIDRequest, GaugeByIDResponse>({
  builderQueryFn: createGetGaugeByID,
  queryKeyPrefix: "GaugeByIDQuery"
});
export const createGetGauges = (getRpcInstance: RpcResolver) => buildQuery<GaugesRequest, GaugesResponse>({
  encode: GaugesRequest.encode,
  decode: GaugesResponse.decode,
  service: "osmosis.incentives.Gauges",
  method: "Gauges",
  getRpcInstance: getRpcInstance
});
export const useGetGauges = buildUseQuery<GaugesRequest, GaugesResponse>({
  builderQueryFn: createGetGauges,
  queryKeyPrefix: "GaugesQuery"
});
export const createGetActiveGauges = (getRpcInstance: RpcResolver) => buildQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  encode: ActiveGaugesRequest.encode,
  decode: ActiveGaugesResponse.decode,
  service: "osmosis.incentives.ActiveGauges",
  method: "ActiveGauges",
  getRpcInstance: getRpcInstance
});
export const useGetActiveGauges = buildUseQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  builderQueryFn: createGetActiveGauges,
  queryKeyPrefix: "ActiveGaugesQuery"
});
export const createGetActiveGaugesPerDenom = (getRpcInstance: RpcResolver) => buildQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  encode: ActiveGaugesPerDenomRequest.encode,
  decode: ActiveGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.ActiveGaugesPerDenom",
  method: "ActiveGaugesPerDenom",
  getRpcInstance: getRpcInstance
});
export const useGetActiveGaugesPerDenom = buildUseQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  builderQueryFn: createGetActiveGaugesPerDenom,
  queryKeyPrefix: "ActiveGaugesPerDenomQuery"
});
export const createGetUpcomingGauges = (getRpcInstance: RpcResolver) => buildQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  encode: UpcomingGaugesRequest.encode,
  decode: UpcomingGaugesResponse.decode,
  service: "osmosis.incentives.UpcomingGauges",
  method: "UpcomingGauges",
  getRpcInstance: getRpcInstance
});
export const useGetUpcomingGauges = buildUseQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  builderQueryFn: createGetUpcomingGauges,
  queryKeyPrefix: "UpcomingGaugesQuery"
});
export const createGetUpcomingGaugesPerDenom = (getRpcInstance: RpcResolver) => buildQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  encode: UpcomingGaugesPerDenomRequest.encode,
  decode: UpcomingGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.UpcomingGaugesPerDenom",
  method: "UpcomingGaugesPerDenom",
  getRpcInstance: getRpcInstance
});
export const useGetUpcomingGaugesPerDenom = buildUseQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  builderQueryFn: createGetUpcomingGaugesPerDenom,
  queryKeyPrefix: "UpcomingGaugesPerDenomQuery"
});
export const createGetRewardsEst = (getRpcInstance: RpcResolver) => buildQuery<RewardsEstRequest, RewardsEstResponse>({
  encode: RewardsEstRequest.encode,
  decode: RewardsEstResponse.decode,
  service: "osmosis.incentives.RewardsEst",
  method: "RewardsEst",
  getRpcInstance: getRpcInstance
});
export const useGetRewardsEst = buildUseQuery<RewardsEstRequest, RewardsEstResponse>({
  builderQueryFn: createGetRewardsEst,
  queryKeyPrefix: "RewardsEstQuery"
});
export const createGetLockableDurations = (getRpcInstance: RpcResolver) => buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.incentives.LockableDurations",
  method: "LockableDurations",
  getRpcInstance: getRpcInstance
});
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});