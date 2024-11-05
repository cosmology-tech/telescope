import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetModuleBalance = (clientResolver?: RpcResolver) => buildQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  encode: ModuleBalanceRequest.encode,
  decode: ModuleBalanceResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleBalance",
  clientResolver
});
export const useGetModuleBalance = buildUseQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  builderQueryFn: createGetModuleBalance,
  queryKeyPrefix: "ModuleBalanceQuery"
});
export const createGetModuleLockedAmount = (clientResolver?: RpcResolver) => buildQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  encode: ModuleLockedAmountRequest.encode,
  decode: ModuleLockedAmountResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleLockedAmount",
  clientResolver
});
export const useGetModuleLockedAmount = buildUseQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  builderQueryFn: createGetModuleLockedAmount,
  queryKeyPrefix: "ModuleLockedAmountQuery"
});
export const createGetAccountUnlockableCoins = (clientResolver?: RpcResolver) => buildQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  encode: AccountUnlockableCoinsRequest.encode,
  decode: AccountUnlockableCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockableCoins",
  clientResolver
});
export const useGetAccountUnlockableCoins = buildUseQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  builderQueryFn: createGetAccountUnlockableCoins,
  queryKeyPrefix: "AccountUnlockableCoinsQuery"
});
export const createGetAccountUnlockingCoins = (clientResolver?: RpcResolver) => buildQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  encode: AccountUnlockingCoinsRequest.encode,
  decode: AccountUnlockingCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockingCoins",
  clientResolver
});
export const useGetAccountUnlockingCoins = buildUseQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  builderQueryFn: createGetAccountUnlockingCoins,
  queryKeyPrefix: "AccountUnlockingCoinsQuery"
});
export const createGetAccountLockedCoins = (clientResolver?: RpcResolver) => buildQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  encode: AccountLockedCoinsRequest.encode,
  decode: AccountLockedCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedCoins",
  clientResolver
});
export const useGetAccountLockedCoins = buildUseQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  builderQueryFn: createGetAccountLockedCoins,
  queryKeyPrefix: "AccountLockedCoinsQuery"
});
export const createGetAccountLockedPastTime = (clientResolver?: RpcResolver) => buildQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  encode: AccountLockedPastTimeRequest.encode,
  decode: AccountLockedPastTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTime",
  clientResolver
});
export const useGetAccountLockedPastTime = buildUseQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  builderQueryFn: createGetAccountLockedPastTime,
  queryKeyPrefix: "AccountLockedPastTimeQuery"
});
export const createGetAccountLockedPastTimeNotUnlockingOnly = (clientResolver?: RpcResolver) => buildQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  encode: AccountLockedPastTimeNotUnlockingOnlyRequest.encode,
  decode: AccountLockedPastTimeNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeNotUnlockingOnly",
  clientResolver
});
export const useGetAccountLockedPastTimeNotUnlockingOnly = buildUseQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedPastTimeNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedPastTimeNotUnlockingOnlyQuery"
});
export const createGetAccountUnlockedBeforeTime = (clientResolver?: RpcResolver) => buildQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  encode: AccountUnlockedBeforeTimeRequest.encode,
  decode: AccountUnlockedBeforeTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockedBeforeTime",
  clientResolver
});
export const useGetAccountUnlockedBeforeTime = buildUseQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  builderQueryFn: createGetAccountUnlockedBeforeTime,
  queryKeyPrefix: "AccountUnlockedBeforeTimeQuery"
});
export const createGetAccountLockedPastTimeDenom = (clientResolver?: RpcResolver) => buildQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  encode: AccountLockedPastTimeDenomRequest.encode,
  decode: AccountLockedPastTimeDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeDenom",
  clientResolver
});
export const useGetAccountLockedPastTimeDenom = buildUseQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  builderQueryFn: createGetAccountLockedPastTimeDenom,
  queryKeyPrefix: "AccountLockedPastTimeDenomQuery"
});
export const createGetLockedDenom = (clientResolver?: RpcResolver) => buildQuery<LockedDenomRequest, LockedDenomResponse>({
  encode: LockedDenomRequest.encode,
  decode: LockedDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedDenom",
  clientResolver
});
export const useGetLockedDenom = buildUseQuery<LockedDenomRequest, LockedDenomResponse>({
  builderQueryFn: createGetLockedDenom,
  queryKeyPrefix: "LockedDenomQuery"
});
export const createGetLockedByID = (clientResolver?: RpcResolver) => buildQuery<LockedRequest, LockedResponse>({
  encode: LockedRequest.encode,
  decode: LockedResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedByID",
  clientResolver
});
export const useGetLockedByID = buildUseQuery<LockedRequest, LockedResponse>({
  builderQueryFn: createGetLockedByID,
  queryKeyPrefix: "LockedByIDQuery"
});
export const createGetSyntheticLockupsByLockupID = (clientResolver?: RpcResolver) => buildQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  encode: SyntheticLockupsByLockupIDRequest.encode,
  decode: SyntheticLockupsByLockupIDResponse.decode,
  service: "osmosis.lockup.Query",
  method: "SyntheticLockupsByLockupID",
  clientResolver
});
export const useGetSyntheticLockupsByLockupID = buildUseQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  builderQueryFn: createGetSyntheticLockupsByLockupID,
  queryKeyPrefix: "SyntheticLockupsByLockupIDQuery"
});
export const createGetAccountLockedLongerDuration = (clientResolver?: RpcResolver) => buildQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  encode: AccountLockedLongerDurationRequest.encode,
  decode: AccountLockedLongerDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDuration",
  clientResolver
});
export const useGetAccountLockedLongerDuration = buildUseQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  builderQueryFn: createGetAccountLockedLongerDuration,
  queryKeyPrefix: "AccountLockedLongerDurationQuery"
});
export const createGetAccountLockedDuration = (clientResolver?: RpcResolver) => buildQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  encode: AccountLockedDurationRequest.encode,
  decode: AccountLockedDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedDuration",
  clientResolver
});
export const useGetAccountLockedDuration = buildUseQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  builderQueryFn: createGetAccountLockedDuration,
  queryKeyPrefix: "AccountLockedDurationQuery"
});
export const createGetAccountLockedLongerDurationNotUnlockingOnly = (clientResolver?: RpcResolver) => buildQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  encode: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode,
  decode: AccountLockedLongerDurationNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationNotUnlockingOnly",
  clientResolver
});
export const useGetAccountLockedLongerDurationNotUnlockingOnly = buildUseQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedLongerDurationNotUnlockingOnlyQuery"
});
export const createGetAccountLockedLongerDurationDenom = (clientResolver?: RpcResolver) => buildQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  encode: AccountLockedLongerDurationDenomRequest.encode,
  decode: AccountLockedLongerDurationDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationDenom",
  clientResolver
});
export const useGetAccountLockedLongerDurationDenom = buildUseQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationDenom,
  queryKeyPrefix: "AccountLockedLongerDurationDenomQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});