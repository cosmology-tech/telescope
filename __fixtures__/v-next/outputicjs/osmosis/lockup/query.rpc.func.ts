import { RpcResolver, buildQuery } from "../../helper-func-types";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetModuleBalance = (clientResolver?: RpcResolver) => buildQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  encode: ModuleBalanceRequest.encode,
  decode: ModuleBalanceResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleBalance",
  clientResolver
});
export const createGetModuleLockedAmount = (clientResolver?: RpcResolver) => buildQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  encode: ModuleLockedAmountRequest.encode,
  decode: ModuleLockedAmountResponse.decode,
  service: "osmosis.lockup.Query",
  method: "ModuleLockedAmount",
  clientResolver
});
export const createGetAccountUnlockableCoins = (clientResolver?: RpcResolver) => buildQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  encode: AccountUnlockableCoinsRequest.encode,
  decode: AccountUnlockableCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockableCoins",
  clientResolver
});
export const createGetAccountUnlockingCoins = (clientResolver?: RpcResolver) => buildQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  encode: AccountUnlockingCoinsRequest.encode,
  decode: AccountUnlockingCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockingCoins",
  clientResolver
});
export const createGetAccountLockedCoins = (clientResolver?: RpcResolver) => buildQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  encode: AccountLockedCoinsRequest.encode,
  decode: AccountLockedCoinsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedCoins",
  clientResolver
});
export const createGetAccountLockedPastTime = (clientResolver?: RpcResolver) => buildQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  encode: AccountLockedPastTimeRequest.encode,
  decode: AccountLockedPastTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTime",
  clientResolver
});
export const createGetAccountLockedPastTimeNotUnlockingOnly = (clientResolver?: RpcResolver) => buildQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  encode: AccountLockedPastTimeNotUnlockingOnlyRequest.encode,
  decode: AccountLockedPastTimeNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeNotUnlockingOnly",
  clientResolver
});
export const createGetAccountUnlockedBeforeTime = (clientResolver?: RpcResolver) => buildQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  encode: AccountUnlockedBeforeTimeRequest.encode,
  decode: AccountUnlockedBeforeTimeResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountUnlockedBeforeTime",
  clientResolver
});
export const createGetAccountLockedPastTimeDenom = (clientResolver?: RpcResolver) => buildQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  encode: AccountLockedPastTimeDenomRequest.encode,
  decode: AccountLockedPastTimeDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedPastTimeDenom",
  clientResolver
});
export const createGetLockedDenom = (clientResolver?: RpcResolver) => buildQuery<LockedDenomRequest, LockedDenomResponse>({
  encode: LockedDenomRequest.encode,
  decode: LockedDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedDenom",
  clientResolver
});
export const createGetLockedByID = (clientResolver?: RpcResolver) => buildQuery<LockedRequest, LockedResponse>({
  encode: LockedRequest.encode,
  decode: LockedResponse.decode,
  service: "osmosis.lockup.Query",
  method: "LockedByID",
  clientResolver
});
export const createGetSyntheticLockupsByLockupID = (clientResolver?: RpcResolver) => buildQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  encode: SyntheticLockupsByLockupIDRequest.encode,
  decode: SyntheticLockupsByLockupIDResponse.decode,
  service: "osmosis.lockup.Query",
  method: "SyntheticLockupsByLockupID",
  clientResolver
});
export const createGetAccountLockedLongerDuration = (clientResolver?: RpcResolver) => buildQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  encode: AccountLockedLongerDurationRequest.encode,
  decode: AccountLockedLongerDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDuration",
  clientResolver
});
export const createGetAccountLockedDuration = (clientResolver?: RpcResolver) => buildQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  encode: AccountLockedDurationRequest.encode,
  decode: AccountLockedDurationResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedDuration",
  clientResolver
});
export const createGetAccountLockedLongerDurationNotUnlockingOnly = (clientResolver?: RpcResolver) => buildQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  encode: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode,
  decode: AccountLockedLongerDurationNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationNotUnlockingOnly",
  clientResolver
});
export const createGetAccountLockedLongerDurationDenom = (clientResolver?: RpcResolver) => buildQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  encode: AccountLockedLongerDurationDenomRequest.encode,
  decode: AccountLockedLongerDurationDenomResponse.decode,
  service: "osmosis.lockup.Query",
  method: "AccountLockedLongerDurationDenom",
  clientResolver
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.lockup.Query",
  method: "Params",
  clientResolver
});