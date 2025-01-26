import { buildUseQuery } from "../../react-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
import { createGetModuleToDistributeCoins, createGetGaugeByID, createGetGauges, createGetActiveGauges, createGetActiveGaugesPerDenom, createGetUpcomingGauges, createGetUpcomingGaugesPerDenom, createGetRewardsEst, createGetLockableDurations } from "./query.rpc.func";
export const useGetModuleToDistributeCoins = buildUseQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  builderQueryFn: createGetModuleToDistributeCoins,
  queryKeyPrefix: "ModuleToDistributeCoinsQuery"
});
export const useGetGaugeByID = buildUseQuery<GaugeByIDRequest, GaugeByIDResponse>({
  builderQueryFn: createGetGaugeByID,
  queryKeyPrefix: "GaugeByIDQuery"
});
export const useGetGauges = buildUseQuery<GaugesRequest, GaugesResponse>({
  builderQueryFn: createGetGauges,
  queryKeyPrefix: "GaugesQuery"
});
export const useGetActiveGauges = buildUseQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  builderQueryFn: createGetActiveGauges,
  queryKeyPrefix: "ActiveGaugesQuery"
});
export const useGetActiveGaugesPerDenom = buildUseQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  builderQueryFn: createGetActiveGaugesPerDenom,
  queryKeyPrefix: "ActiveGaugesPerDenomQuery"
});
export const useGetUpcomingGauges = buildUseQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  builderQueryFn: createGetUpcomingGauges,
  queryKeyPrefix: "UpcomingGaugesQuery"
});
export const useGetUpcomingGaugesPerDenom = buildUseQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  builderQueryFn: createGetUpcomingGaugesPerDenom,
  queryKeyPrefix: "UpcomingGaugesPerDenomQuery"
});
export const useGetRewardsEst = buildUseQuery<RewardsEstRequest, RewardsEstResponse>({
  builderQueryFn: createGetRewardsEst,
  queryKeyPrefix: "RewardsEstQuery"
});
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});