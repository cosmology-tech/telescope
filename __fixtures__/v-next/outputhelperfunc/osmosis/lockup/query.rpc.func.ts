import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetModuleBalance = (getRpcInstance: RpcResolver) => buildQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  encode: ModuleBalanceRequest.encode,
  decode: ModuleBalanceResponse.decode,
  service: "osmosis.lockup.ModuleBalance",
  method: "ModuleBalance",
  getRpcInstance: getRpcInstance
});
export const useGetModuleBalance = buildUseQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  builderQueryFn: createGetModuleBalance,
  queryKeyPrefix: "ModuleBalanceQuery"
});
export const createGetModuleLockedAmount = (getRpcInstance: RpcResolver) => buildQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  encode: ModuleLockedAmountRequest.encode,
  decode: ModuleLockedAmountResponse.decode,
  service: "osmosis.lockup.ModuleLockedAmount",
  method: "ModuleLockedAmount",
  getRpcInstance: getRpcInstance
});
export const useGetModuleLockedAmount = buildUseQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  builderQueryFn: createGetModuleLockedAmount,
  queryKeyPrefix: "ModuleLockedAmountQuery"
});
export const createGetAccountUnlockableCoins = (getRpcInstance: RpcResolver) => buildQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  encode: AccountUnlockableCoinsRequest.encode,
  decode: AccountUnlockableCoinsResponse.decode,
  service: "osmosis.lockup.AccountUnlockableCoins",
  method: "AccountUnlockableCoins",
  getRpcInstance: getRpcInstance
});
export const useGetAccountUnlockableCoins = buildUseQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  builderQueryFn: createGetAccountUnlockableCoins,
  queryKeyPrefix: "AccountUnlockableCoinsQuery"
});
export const createGetAccountUnlockingCoins = (getRpcInstance: RpcResolver) => buildQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  encode: AccountUnlockingCoinsRequest.encode,
  decode: AccountUnlockingCoinsResponse.decode,
  service: "osmosis.lockup.AccountUnlockingCoins",
  method: "AccountUnlockingCoins",
  getRpcInstance: getRpcInstance
});
export const useGetAccountUnlockingCoins = buildUseQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  builderQueryFn: createGetAccountUnlockingCoins,
  queryKeyPrefix: "AccountUnlockingCoinsQuery"
});
export const createGetAccountLockedCoins = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  encode: AccountLockedCoinsRequest.encode,
  decode: AccountLockedCoinsResponse.decode,
  service: "osmosis.lockup.AccountLockedCoins",
  method: "AccountLockedCoins",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedCoins = buildUseQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  builderQueryFn: createGetAccountLockedCoins,
  queryKeyPrefix: "AccountLockedCoinsQuery"
});
export const createGetAccountLockedPastTime = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  encode: AccountLockedPastTimeRequest.encode,
  decode: AccountLockedPastTimeResponse.decode,
  service: "osmosis.lockup.AccountLockedPastTime",
  method: "AccountLockedPastTime",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedPastTime = buildUseQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  builderQueryFn: createGetAccountLockedPastTime,
  queryKeyPrefix: "AccountLockedPastTimeQuery"
});
export const createGetAccountLockedPastTimeNotUnlockingOnly = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  encode: AccountLockedPastTimeNotUnlockingOnlyRequest.encode,
  decode: AccountLockedPastTimeNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.AccountLockedPastTimeNotUnlockingOnly",
  method: "AccountLockedPastTimeNotUnlockingOnly",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedPastTimeNotUnlockingOnly = buildUseQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedPastTimeNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedPastTimeNotUnlockingOnlyQuery"
});
export const createGetAccountUnlockedBeforeTime = (getRpcInstance: RpcResolver) => buildQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  encode: AccountUnlockedBeforeTimeRequest.encode,
  decode: AccountUnlockedBeforeTimeResponse.decode,
  service: "osmosis.lockup.AccountUnlockedBeforeTime",
  method: "AccountUnlockedBeforeTime",
  getRpcInstance: getRpcInstance
});
export const useGetAccountUnlockedBeforeTime = buildUseQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  builderQueryFn: createGetAccountUnlockedBeforeTime,
  queryKeyPrefix: "AccountUnlockedBeforeTimeQuery"
});
export const createGetAccountLockedPastTimeDenom = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  encode: AccountLockedPastTimeDenomRequest.encode,
  decode: AccountLockedPastTimeDenomResponse.decode,
  service: "osmosis.lockup.AccountLockedPastTimeDenom",
  method: "AccountLockedPastTimeDenom",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedPastTimeDenom = buildUseQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  builderQueryFn: createGetAccountLockedPastTimeDenom,
  queryKeyPrefix: "AccountLockedPastTimeDenomQuery"
});
export const createGetLockedDenom = (getRpcInstance: RpcResolver) => buildQuery<LockedDenomRequest, LockedDenomResponse>({
  encode: LockedDenomRequest.encode,
  decode: LockedDenomResponse.decode,
  service: "osmosis.lockup.LockedDenom",
  method: "LockedDenom",
  getRpcInstance: getRpcInstance
});
export const useGetLockedDenom = buildUseQuery<LockedDenomRequest, LockedDenomResponse>({
  builderQueryFn: createGetLockedDenom,
  queryKeyPrefix: "LockedDenomQuery"
});
export const createGetLockedByID = (getRpcInstance: RpcResolver) => buildQuery<LockedRequest, LockedResponse>({
  encode: LockedRequest.encode,
  decode: LockedResponse.decode,
  service: "osmosis.lockup.LockedByID",
  method: "LockedByID",
  getRpcInstance: getRpcInstance
});
export const useGetLockedByID = buildUseQuery<LockedRequest, LockedResponse>({
  builderQueryFn: createGetLockedByID,
  queryKeyPrefix: "LockedByIDQuery"
});
export const createGetSyntheticLockupsByLockupID = (getRpcInstance: RpcResolver) => buildQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  encode: SyntheticLockupsByLockupIDRequest.encode,
  decode: SyntheticLockupsByLockupIDResponse.decode,
  service: "osmosis.lockup.SyntheticLockupsByLockupID",
  method: "SyntheticLockupsByLockupID",
  getRpcInstance: getRpcInstance
});
export const useGetSyntheticLockupsByLockupID = buildUseQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  builderQueryFn: createGetSyntheticLockupsByLockupID,
  queryKeyPrefix: "SyntheticLockupsByLockupIDQuery"
});
export const createGetAccountLockedLongerDuration = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  encode: AccountLockedLongerDurationRequest.encode,
  decode: AccountLockedLongerDurationResponse.decode,
  service: "osmosis.lockup.AccountLockedLongerDuration",
  method: "AccountLockedLongerDuration",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedLongerDuration = buildUseQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  builderQueryFn: createGetAccountLockedLongerDuration,
  queryKeyPrefix: "AccountLockedLongerDurationQuery"
});
export const createGetAccountLockedDuration = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  encode: AccountLockedDurationRequest.encode,
  decode: AccountLockedDurationResponse.decode,
  service: "osmosis.lockup.AccountLockedDuration",
  method: "AccountLockedDuration",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedDuration = buildUseQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  builderQueryFn: createGetAccountLockedDuration,
  queryKeyPrefix: "AccountLockedDurationQuery"
});
export const createGetAccountLockedLongerDurationNotUnlockingOnly = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  encode: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode,
  decode: AccountLockedLongerDurationNotUnlockingOnlyResponse.decode,
  service: "osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnly",
  method: "AccountLockedLongerDurationNotUnlockingOnly",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedLongerDurationNotUnlockingOnly = buildUseQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedLongerDurationNotUnlockingOnlyQuery"
});
export const createGetAccountLockedLongerDurationDenom = (getRpcInstance: RpcResolver) => buildQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  encode: AccountLockedLongerDurationDenomRequest.encode,
  decode: AccountLockedLongerDurationDenomResponse.decode,
  service: "osmosis.lockup.AccountLockedLongerDurationDenom",
  method: "AccountLockedLongerDurationDenom",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedLongerDurationDenom = buildUseQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationDenom,
  queryKeyPrefix: "AccountLockedLongerDurationDenomQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.lockup.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});