import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { SigningClientResolver } from "../../helper-func-types";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetModuleBalance = (getRpcInstance: SigningClientResolver) => buildQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  encoder: ModuleBalanceRequest.encode,
  decoder: ModuleBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleBalance",
  getRpcInstance: getRpcInstance
});
export const useGetModuleBalance = buildUseQuery<ModuleBalanceRequest, ModuleBalanceResponse>({
  builderQueryFn: createGetModuleBalance,
  queryKeyPrefix: "ModuleBalanceQuery"
});
export const createGetModuleLockedAmount = (getRpcInstance: SigningClientResolver) => buildQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  encoder: ModuleLockedAmountRequest.encode,
  decoder: ModuleLockedAmountResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleLockedAmount",
  getRpcInstance: getRpcInstance
});
export const useGetModuleLockedAmount = buildUseQuery<ModuleLockedAmountRequest, ModuleLockedAmountResponse>({
  builderQueryFn: createGetModuleLockedAmount,
  queryKeyPrefix: "ModuleLockedAmountQuery"
});
export const createGetAccountUnlockableCoins = (getRpcInstance: SigningClientResolver) => buildQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  encoder: AccountUnlockableCoinsRequest.encode,
  decoder: AccountUnlockableCoinsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountUnlockableCoins",
  getRpcInstance: getRpcInstance
});
export const useGetAccountUnlockableCoins = buildUseQuery<AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse>({
  builderQueryFn: createGetAccountUnlockableCoins,
  queryKeyPrefix: "AccountUnlockableCoinsQuery"
});
export const createGetAccountUnlockingCoins = (getRpcInstance: SigningClientResolver) => buildQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  encoder: AccountUnlockingCoinsRequest.encode,
  decoder: AccountUnlockingCoinsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountUnlockingCoins",
  getRpcInstance: getRpcInstance
});
export const useGetAccountUnlockingCoins = buildUseQuery<AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse>({
  builderQueryFn: createGetAccountUnlockingCoins,
  queryKeyPrefix: "AccountUnlockingCoinsQuery"
});
export const createGetAccountLockedCoins = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  encoder: AccountLockedCoinsRequest.encode,
  decoder: AccountLockedCoinsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedCoins",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedCoins = buildUseQuery<AccountLockedCoinsRequest, AccountLockedCoinsResponse>({
  builderQueryFn: createGetAccountLockedCoins,
  queryKeyPrefix: "AccountLockedCoinsQuery"
});
export const createGetAccountLockedPastTime = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  encoder: AccountLockedPastTimeRequest.encode,
  decoder: AccountLockedPastTimeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedPastTime",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedPastTime = buildUseQuery<AccountLockedPastTimeRequest, AccountLockedPastTimeResponse>({
  builderQueryFn: createGetAccountLockedPastTime,
  queryKeyPrefix: "AccountLockedPastTimeQuery"
});
export const createGetAccountLockedPastTimeNotUnlockingOnly = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  encoder: AccountLockedPastTimeNotUnlockingOnlyRequest.encode,
  decoder: AccountLockedPastTimeNotUnlockingOnlyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedPastTimeNotUnlockingOnly",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedPastTimeNotUnlockingOnly = buildUseQuery<AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedPastTimeNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedPastTimeNotUnlockingOnlyQuery"
});
export const createGetAccountUnlockedBeforeTime = (getRpcInstance: SigningClientResolver) => buildQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  encoder: AccountUnlockedBeforeTimeRequest.encode,
  decoder: AccountUnlockedBeforeTimeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountUnlockedBeforeTime",
  getRpcInstance: getRpcInstance
});
export const useGetAccountUnlockedBeforeTime = buildUseQuery<AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse>({
  builderQueryFn: createGetAccountUnlockedBeforeTime,
  queryKeyPrefix: "AccountUnlockedBeforeTimeQuery"
});
export const createGetAccountLockedPastTimeDenom = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  encoder: AccountLockedPastTimeDenomRequest.encode,
  decoder: AccountLockedPastTimeDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedPastTimeDenom",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedPastTimeDenom = buildUseQuery<AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse>({
  builderQueryFn: createGetAccountLockedPastTimeDenom,
  queryKeyPrefix: "AccountLockedPastTimeDenomQuery"
});
export const createGetLockedDenom = (getRpcInstance: SigningClientResolver) => buildQuery<LockedDenomRequest, LockedDenomResponse>({
  encoder: LockedDenomRequest.encode,
  decoder: LockedDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "LockedDenom",
  getRpcInstance: getRpcInstance
});
export const useGetLockedDenom = buildUseQuery<LockedDenomRequest, LockedDenomResponse>({
  builderQueryFn: createGetLockedDenom,
  queryKeyPrefix: "LockedDenomQuery"
});
export const createGetLockedByID = (getRpcInstance: SigningClientResolver) => buildQuery<LockedRequest, LockedResponse>({
  encoder: LockedRequest.encode,
  decoder: LockedResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "LockedByID",
  getRpcInstance: getRpcInstance
});
export const useGetLockedByID = buildUseQuery<LockedRequest, LockedResponse>({
  builderQueryFn: createGetLockedByID,
  queryKeyPrefix: "LockedByIDQuery"
});
export const createGetSyntheticLockupsByLockupID = (getRpcInstance: SigningClientResolver) => buildQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  encoder: SyntheticLockupsByLockupIDRequest.encode,
  decoder: SyntheticLockupsByLockupIDResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SyntheticLockupsByLockupID",
  getRpcInstance: getRpcInstance
});
export const useGetSyntheticLockupsByLockupID = buildUseQuery<SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse>({
  builderQueryFn: createGetSyntheticLockupsByLockupID,
  queryKeyPrefix: "SyntheticLockupsByLockupIDQuery"
});
export const createGetAccountLockedLongerDuration = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  encoder: AccountLockedLongerDurationRequest.encode,
  decoder: AccountLockedLongerDurationResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedLongerDuration",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedLongerDuration = buildUseQuery<AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse>({
  builderQueryFn: createGetAccountLockedLongerDuration,
  queryKeyPrefix: "AccountLockedLongerDurationQuery"
});
export const createGetAccountLockedDuration = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  encoder: AccountLockedDurationRequest.encode,
  decoder: AccountLockedDurationResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedDuration",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedDuration = buildUseQuery<AccountLockedDurationRequest, AccountLockedDurationResponse>({
  builderQueryFn: createGetAccountLockedDuration,
  queryKeyPrefix: "AccountLockedDurationQuery"
});
export const createGetAccountLockedLongerDurationNotUnlockingOnly = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  encoder: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode,
  decoder: AccountLockedLongerDurationNotUnlockingOnlyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedLongerDurationNotUnlockingOnly",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedLongerDurationNotUnlockingOnly = buildUseQuery<AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationNotUnlockingOnly,
  queryKeyPrefix: "AccountLockedLongerDurationNotUnlockingOnlyQuery"
});
export const createGetAccountLockedLongerDurationDenom = (getRpcInstance: SigningClientResolver) => buildQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  encoder: AccountLockedLongerDurationDenomRequest.encode,
  decoder: AccountLockedLongerDurationDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountLockedLongerDurationDenom",
  getRpcInstance: getRpcInstance
});
export const useGetAccountLockedLongerDurationDenom = buildUseQuery<AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse>({
  builderQueryFn: createGetAccountLockedLongerDurationDenom,
  queryKeyPrefix: "AccountLockedLongerDurationDenomQuery"
});
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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