import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  moduleBalance(request?: DeepPartial<ModuleBalanceRequest>, metadata?: grpc.Metadata): Promise<ModuleBalanceResponse>;

  /** Return locked balance of the module */
  moduleLockedAmount(request?: DeepPartial<ModuleLockedAmountRequest>, metadata?: grpc.Metadata): Promise<ModuleLockedAmountResponse>;

  /** Returns unlockable coins which are not withdrawn yet */
  accountUnlockableCoins(request: DeepPartial<AccountUnlockableCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockableCoinsResponse>;

  /** Returns unlocking coins */
  accountUnlockingCoins(request: DeepPartial<AccountUnlockingCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockingCoinsResponse>;

  /** Return a locked coins that can't be withdrawn */
  accountLockedCoins(request: DeepPartial<AccountLockedCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountLockedCoinsResponse>;

  /** Returns locked records of an account with unlock time beyond timestamp */
  accountLockedPastTime(request: DeepPartial<AccountLockedPastTimeRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeResponse>;

  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  accountLockedPastTimeNotUnlockingOnly(request: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;

  /** Returns unlocked records with unlock time before timestamp */
  accountUnlockedBeforeTime(request: DeepPartial<AccountUnlockedBeforeTimeRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockedBeforeTimeResponse>;

  /** Returns lock records by address, timestamp, denom */
  accountLockedPastTimeDenom(request: DeepPartial<AccountLockedPastTimeDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeDenomResponse>;

  /** Returns total locked per denom with longer past given time */
  lockedDenom(request: DeepPartial<LockedDenomRequest>, metadata?: grpc.Metadata): Promise<LockedDenomResponse>;

  /** Returns lock record by id */
  lockedByID(request: DeepPartial<LockedRequest>, metadata?: grpc.Metadata): Promise<LockedResponse>;

  /** Returns synthetic lockups by native lockup id */
  syntheticLockupsByLockupID(request: DeepPartial<SyntheticLockupsByLockupIDRequest>, metadata?: grpc.Metadata): Promise<SyntheticLockupsByLockupIDResponse>;

  /** Returns account locked records with longer duration */
  accountLockedLongerDuration(request: DeepPartial<AccountLockedLongerDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationResponse>;

  /** Returns account locked records with a specific duration */
  accountLockedDuration(request: DeepPartial<AccountLockedDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedDurationResponse>;

  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  accountLockedLongerDurationNotUnlockingOnly(request: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;

  /** Returns account's locked records for a denom with longer duration */
  accountLockedLongerDurationDenom(request: DeepPartial<AccountLockedLongerDurationDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationDenomResponse>;

  /** Params returns lockup params. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }

  moduleBalance(request: DeepPartial<ModuleBalanceRequest> = {}, metadata?: grpc.Metadata): Promise<ModuleBalanceResponse> {
    return this.rpc.unary(ModuleBalanceDesc, ModuleBalanceRequest.fromPartial(request), metadata);
  }

  moduleLockedAmount(request: DeepPartial<ModuleLockedAmountRequest> = {}, metadata?: grpc.Metadata): Promise<ModuleLockedAmountResponse> {
    return this.rpc.unary(ModuleLockedAmountDesc, ModuleLockedAmountRequest.fromPartial(request), metadata);
  }

  accountUnlockableCoins(request: DeepPartial<AccountUnlockableCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockableCoinsResponse> {
    return this.rpc.unary(AccountUnlockableCoinsDesc, AccountUnlockableCoinsRequest.fromPartial(request), metadata);
  }

  accountUnlockingCoins(request: DeepPartial<AccountUnlockingCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockingCoinsResponse> {
    return this.rpc.unary(AccountUnlockingCoinsDesc, AccountUnlockingCoinsRequest.fromPartial(request), metadata);
  }

  accountLockedCoins(request: DeepPartial<AccountLockedCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountLockedCoinsResponse> {
    return this.rpc.unary(AccountLockedCoinsDesc, AccountLockedCoinsRequest.fromPartial(request), metadata);
  }

  accountLockedPastTime(request: DeepPartial<AccountLockedPastTimeRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeResponse> {
    return this.rpc.unary(AccountLockedPastTimeDesc, AccountLockedPastTimeRequest.fromPartial(request), metadata);
  }

  accountLockedPastTimeNotUnlockingOnly(request: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return this.rpc.unary(AccountLockedPastTimeNotUnlockingOnlyDesc, AccountLockedPastTimeNotUnlockingOnlyRequest.fromPartial(request), metadata);
  }

  accountUnlockedBeforeTime(request: DeepPartial<AccountUnlockedBeforeTimeRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockedBeforeTimeResponse> {
    return this.rpc.unary(AccountUnlockedBeforeTimeDesc, AccountUnlockedBeforeTimeRequest.fromPartial(request), metadata);
  }

  accountLockedPastTimeDenom(request: DeepPartial<AccountLockedPastTimeDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeDenomResponse> {
    return this.rpc.unary(AccountLockedPastTimeDenomDesc, AccountLockedPastTimeDenomRequest.fromPartial(request), metadata);
  }

  lockedDenom(request: DeepPartial<LockedDenomRequest>, metadata?: grpc.Metadata): Promise<LockedDenomResponse> {
    return this.rpc.unary(LockedDenomDesc, LockedDenomRequest.fromPartial(request), metadata);
  }

  lockedByID(request: DeepPartial<LockedRequest>, metadata?: grpc.Metadata): Promise<LockedResponse> {
    return this.rpc.unary(LockedDesc, LockedRequest.fromPartial(request), metadata);
  }

  syntheticLockupsByLockupID(request: DeepPartial<SyntheticLockupsByLockupIDRequest>, metadata?: grpc.Metadata): Promise<SyntheticLockupsByLockupIDResponse> {
    return this.rpc.unary(SyntheticLockupsByLockupIDDesc, SyntheticLockupsByLockupIDRequest.fromPartial(request), metadata);
  }

  accountLockedLongerDuration(request: DeepPartial<AccountLockedLongerDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationResponse> {
    return this.rpc.unary(AccountLockedLongerDurationDesc, AccountLockedLongerDurationRequest.fromPartial(request), metadata);
  }

  accountLockedDuration(request: DeepPartial<AccountLockedDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedDurationResponse> {
    return this.rpc.unary(AccountLockedDurationDesc, AccountLockedDurationRequest.fromPartial(request), metadata);
  }

  accountLockedLongerDurationNotUnlockingOnly(request: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return this.rpc.unary(AccountLockedLongerDurationNotUnlockingOnlyDesc, AccountLockedLongerDurationNotUnlockingOnlyRequest.fromPartial(request), metadata);
  }

  accountLockedLongerDurationDenom(request: DeepPartial<AccountLockedLongerDurationDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationDenomResponse> {
    return this.rpc.unary(AccountLockedLongerDurationDenomDesc, AccountLockedLongerDurationDenomRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

}