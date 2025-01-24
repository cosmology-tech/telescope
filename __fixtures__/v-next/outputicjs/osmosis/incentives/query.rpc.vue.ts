import { buildUseVueQuery } from "../../vue-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
import { createGetModuleToDistributeCoins, createGetGaugeByID, createGetGauges, createGetActiveGauges, createGetActiveGaugesPerDenom, createGetUpcomingGauges, createGetUpcomingGaugesPerDenom, createGetRewardsEst, createGetLockableDurations } from "./query.rpc.func.ts";
export const useGetModuleToDistributeCoins = buildUseVueQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  builderQueryFn: createGetModuleToDistributeCoins,
  queryKeyPrefix: "ModuleToDistributeCoinsQuery"
});
export const useGetGaugeByID = buildUseVueQuery<GaugeByIDRequest, GaugeByIDResponse>({
  builderQueryFn: createGetGaugeByID,
  queryKeyPrefix: "GaugeByIDQuery"
});
export const useGetGauges = buildUseVueQuery<GaugesRequest, GaugesResponse>({
  builderQueryFn: createGetGauges,
  queryKeyPrefix: "GaugesQuery"
});
export const useGetActiveGauges = buildUseVueQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  builderQueryFn: createGetActiveGauges,
  queryKeyPrefix: "ActiveGaugesQuery"
});
export const useGetActiveGaugesPerDenom = buildUseVueQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  builderQueryFn: createGetActiveGaugesPerDenom,
  queryKeyPrefix: "ActiveGaugesPerDenomQuery"
});
export const useGetUpcomingGauges = buildUseVueQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  builderQueryFn: createGetUpcomingGauges,
  queryKeyPrefix: "UpcomingGaugesQuery"
});
export const useGetUpcomingGaugesPerDenom = buildUseVueQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  builderQueryFn: createGetUpcomingGaugesPerDenom,
  queryKeyPrefix: "UpcomingGaugesPerDenomQuery"
});
export const useGetRewardsEst = buildUseVueQuery<RewardsEstRequest, RewardsEstResponse>({
  builderQueryFn: createGetRewardsEst,
  queryKeyPrefix: "RewardsEstQuery"
});
export const useGetLockableDurations = buildUseVueQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});