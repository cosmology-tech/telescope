import { buildUseVueQuery } from "../../vue-query";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetModuleBalance, createGetModuleLockedAmount, createGetAccountUnlockableCoins, createGetAccountUnlockingCoins, createGetAccountLockedCoins, createGetAccountLockedPastTime, createGetAccountLockedPastTimeNotUnlockingOnly, createGetAccountUnlockedBeforeTime, createGetAccountLockedPastTimeDenom, createGetLockedDenom, createGetLockedByID, createGetSyntheticLockupsByLockupID, createGetAccountLockedLongerDuration, createGetAccountLockedDuration, createGetAccountLockedLongerDurationNotUnlockingOnly, createGetAccountLockedLongerDurationDenom, createGetParams } from "./query.rpc.func.ts";
export const useGetModuleBalance = buildUseVueQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  builderQueryFn: createGetModuleBalance,
  queryKeyPrefix: "ModuleBalanceQuery"
});
export const useGetModuleLockedAmount = buildUseVueQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  builderQueryFn: createGetModuleLockedAmount,
  queryKeyPrefix: "ModuleLockedAmountQuery"
});
export const useGetAccountUnlockableCoins = buildUseVueQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  builderQueryFn: createGetAccountUnlockableCoins,
  queryKeyPrefix: "AccountUnlockableCoinsQuery"
});
export const useGetAccountUnlockingCoins = buildUseVueQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  builderQueryFn: createGetAccountUnlockingCoins,
  queryKeyPrefix: "AccountUnlockingCoinsQuery"
});
export const useGetAccountLockedCoins = buildUseVueQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  builderQueryFn: createGetAccountLockedCoins,
  queryKeyPrefix: "AccountLockedCoinsQuery"
});
export const useGetAccountLockedPastTime = buildUseVueQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  builderQueryFn: createGetAccountLockedPastTime,
  queryKeyPrefix: "AccountLockedPastTimeQuery"
});
export const useGetAccountLockedPastTimeNotUnlockingOnly = buildUseVueQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedPastTimeNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedPastTimeNotUnlockingOnlyQuery"
});
export const useGetAccountUnlockedBeforeTime = buildUseVueQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  builderQueryFn: createGetAccountUnlockedBeforeTime,
  queryKeyPrefix: "AccountUnlockedBeforeTimeQuery"
});
export const useGetAccountLockedPastTimeDenom = buildUseVueQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  builderQueryFn: createGetAccountLockedPastTimeDenom,
  queryKeyPrefix: "AccountLockedPastTimeDenomQuery"
});
export const useGetLockedDenom = buildUseVueQuery<LockedDenomRequest, LockedDenomResponse>({
  builderQueryFn: createGetLockedDenom,
  queryKeyPrefix: "LockedDenomQuery"
});
export const useGetLockedByID = buildUseVueQuery<LockedRequest, LockedResponse>({
  builderQueryFn: createGetLockedByID,
  queryKeyPrefix: "LockedByIDQuery"
});
export const useGetSyntheticLockupsByLockupID = buildUseVueQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  builderQueryFn: createGetSyntheticLockupsByLockupID,
  queryKeyPrefix: "SyntheticLockupsByLockupIDQuery"
});
export const useGetAccountLockedLongerDuration = buildUseVueQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  builderQueryFn: createGetAccountLockedLongerDuration,
  queryKeyPrefix: "AccountLockedLongerDurationQuery"
});
export const useGetAccountLockedDuration = buildUseVueQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  builderQueryFn: createGetAccountLockedDuration,
  queryKeyPrefix: "AccountLockedDurationQuery"
});
export const useGetAccountLockedLongerDurationNotUnlockingOnly = buildUseVueQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedLongerDurationNotUnlockingOnlyQuery"
});
export const useGetAccountLockedLongerDurationDenom = buildUseVueQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationDenom,
  queryKeyPrefix: "AccountLockedLongerDurationDenomQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});