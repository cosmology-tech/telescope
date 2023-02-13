import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import * as fm from "../../grpc-gateway";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** Return full balance of the module */
  static ModuleBalance(request: ModuleBalanceRequest, initRequest?: fm.InitReq): Promise<ModuleBalanceResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/module_balance?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Return locked balance of the module */
  static ModuleLockedAmount(request: ModuleLockedAmountRequest, initRequest?: fm.InitReq): Promise<ModuleLockedAmountResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/module_locked_amount?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns unlockable coins which are not withdrawn yet */
  static AccountUnlockableCoins(request: AccountUnlockableCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockableCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlockable_coins/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns unlocking coins */
  static AccountUnlockingCoins(request: AccountUnlockingCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockingCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocking_coins/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Return a locked coins that can't be withdrawn */
  static AccountLockedCoins(request: AccountLockedCoinsRequest, initRequest?: fm.InitReq): Promise<AccountLockedCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_coins/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns locked records of an account with unlock time beyond timestamp */
  static AccountLockedPastTime(request: AccountLockedPastTimeRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  static AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns unlocked records with unlock time before timestamp */
  static AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest, initRequest?: fm.InitReq): Promise<AccountUnlockedBeforeTimeResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocked_before_time/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns lock records by address, timestamp, denom */
  static AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_denom/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns total locked per denom with longer past given time */
  static LockedDenom(request: LockedDenomRequest, initRequest?: fm.InitReq): Promise<LockedDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns lock record by id */
  static LockedByID(request: LockedRequest, initRequest?: fm.InitReq): Promise<LockedResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_by_id/${request["lock_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["lock_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns synthetic lockups by native lockup id */
  static SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest, initRequest?: fm.InitReq): Promise<SyntheticLockupsByLockupIDResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${request["lock_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["lock_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns account locked records with longer duration */
  static AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns account locked records with a specific duration */
  static AccountLockedDuration(request: AccountLockedDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedDurationResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_duration/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  static AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Returns account's locked records for a denom with longer duration */
  static AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Params returns lockup params. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}