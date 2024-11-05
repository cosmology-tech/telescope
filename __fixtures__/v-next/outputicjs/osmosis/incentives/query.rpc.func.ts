import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export const createGetModuleToDistributeCoins = (clientResolver?: RpcResolver) => buildQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  encode: ModuleToDistributeCoinsRequest.encode,
  decode: ModuleToDistributeCoinsResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ModuleToDistributeCoins",
  clientResolver
});
export const useGetModuleToDistributeCoins = buildUseQuery<ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse>({
  builderQueryFn: createGetModuleToDistributeCoins,
  queryKeyPrefix: "ModuleToDistributeCoinsQuery"
});
export const createGetGaugeByID = (clientResolver?: RpcResolver) => buildQuery<GaugeByIDRequest, GaugeByIDResponse>({
  encode: GaugeByIDRequest.encode,
  decode: GaugeByIDResponse.decode,
  service: "osmosis.incentives.Query",
  method: "GaugeByID",
  clientResolver
});
export const useGetGaugeByID = buildUseQuery<GaugeByIDRequest, GaugeByIDResponse>({
  builderQueryFn: createGetGaugeByID,
  queryKeyPrefix: "GaugeByIDQuery"
});
export const createGetGauges = (clientResolver?: RpcResolver) => buildQuery<GaugesRequest, GaugesResponse>({
  encode: GaugesRequest.encode,
  decode: GaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "Gauges",
  clientResolver
});
export const useGetGauges = buildUseQuery<GaugesRequest, GaugesResponse>({
  builderQueryFn: createGetGauges,
  queryKeyPrefix: "GaugesQuery"
});
export const createGetActiveGauges = (clientResolver?: RpcResolver) => buildQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  encode: ActiveGaugesRequest.encode,
  decode: ActiveGaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ActiveGauges",
  clientResolver
});
export const useGetActiveGauges = buildUseQuery<ActiveGaugesRequest, ActiveGaugesResponse>({
  builderQueryFn: createGetActiveGauges,
  queryKeyPrefix: "ActiveGaugesQuery"
});
export const createGetActiveGaugesPerDenom = (clientResolver?: RpcResolver) => buildQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  encode: ActiveGaugesPerDenomRequest.encode,
  decode: ActiveGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.Query",
  method: "ActiveGaugesPerDenom",
  clientResolver
});
export const useGetActiveGaugesPerDenom = buildUseQuery<ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse>({
  builderQueryFn: createGetActiveGaugesPerDenom,
  queryKeyPrefix: "ActiveGaugesPerDenomQuery"
});
export const createGetUpcomingGauges = (clientResolver?: RpcResolver) => buildQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  encode: UpcomingGaugesRequest.encode,
  decode: UpcomingGaugesResponse.decode,
  service: "osmosis.incentives.Query",
  method: "UpcomingGauges",
  clientResolver
});
export const useGetUpcomingGauges = buildUseQuery<UpcomingGaugesRequest, UpcomingGaugesResponse>({
  builderQueryFn: createGetUpcomingGauges,
  queryKeyPrefix: "UpcomingGaugesQuery"
});
export const createGetUpcomingGaugesPerDenom = (clientResolver?: RpcResolver) => buildQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  encode: UpcomingGaugesPerDenomRequest.encode,
  decode: UpcomingGaugesPerDenomResponse.decode,
  service: "osmosis.incentives.Query",
  method: "UpcomingGaugesPerDenom",
  clientResolver
});
export const useGetUpcomingGaugesPerDenom = buildUseQuery<UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse>({
  builderQueryFn: createGetUpcomingGaugesPerDenom,
  queryKeyPrefix: "UpcomingGaugesPerDenomQuery"
});
export const createGetRewardsEst = (clientResolver?: RpcResolver) => buildQuery<RewardsEstRequest, RewardsEstResponse>({
  encode: RewardsEstRequest.encode,
  decode: RewardsEstResponse.decode,
  service: "osmosis.incentives.Query",
  method: "RewardsEst",
  clientResolver
});
export const useGetRewardsEst = buildUseQuery<RewardsEstRequest, RewardsEstResponse>({
  builderQueryFn: createGetRewardsEst,
  queryKeyPrefix: "RewardsEstQuery"
});
export const createGetLockableDurations = (clientResolver?: RpcResolver) => buildQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  encode: QueryLockableDurationsRequest.encode,
  decode: QueryLockableDurationsResponse.decode,
  service: "osmosis.incentives.Query",
  method: "LockableDurations",
  clientResolver
});
export const useGetLockableDurations = buildUseQuery<QueryLockableDurationsRequest, QueryLockableDurationsResponse>({
  builderQueryFn: createGetLockableDurations,
  queryKeyPrefix: "LockableDurationsQuery"
});