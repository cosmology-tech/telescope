import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, SyntheticLock } from "./lock";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Return full balance of the module */
  async moduleBalance(params: ModuleBalanceRequest): Promise<ModuleBalanceResponse> {
    const endpoint = `osmosis/lockup/v1beta1/module_balance/`;
    return await this.request(endpoint);
  }

  /* Return locked balance of the module */
  async moduleLockedAmount(params: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse> {
    const endpoint = `osmosis/lockup/v1beta1/module_locked_amount/`;
    return await this.request(endpoint);
  }

  /* Returns unlockable coins which are not withdrawn yet */
  async accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlockable_coins/${params.owner}`;
    return await this.request(endpoint);
  }

  /* Returns unlocking coins */
  async accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlocking_coins/${params.owner}`;
    return await this.request(endpoint);
  }

  /* Return a locked coins that can't be withdrawn */
  async accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${params.owner}`;
    return await this.request(endpoint);
  }

  /* Returns locked records of an account with unlock time beyond timestamp */
  async accountLockedPastTime(params: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Returns locked records of an account with unlock time beyond timestamp
  excluding tokens started unlocking */
  async accountLockedPastTimeNotUnlockingOnly(params: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Returns unlocked records with unlock time before timestamp */
  async accountUnlockedBeforeTime(params: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_unlocked_before_time/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Returns lock records by address, timestamp, denom */
  async accountLockedPastTimeDenom(params: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.timestamp !== "undefined") {
      options.params.timestamp = params.timestamp;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_pasttime_denom/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Returns total locked per denom with longer past given time */
  async lockedDenom(params: LockedDenomRequest): Promise<LockedDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/locked_denom/`;
    return await this.request(endpoint, options);
  }

  /* Returns lock record by id */
  async lockedByID(params: LockedRequest): Promise<LockedResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.lockId !== "undefined") {
      options.params.lock_id = params.lockId;
    }

    const endpoint = `osmosis/lockup/v1beta1/locked_by_id/${params.lock_id}`;
    return await this.request(endpoint, options);
  }

  /* Returns synthetic lockups by native lockup id */
  async syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.lockId !== "undefined") {
      options.params.lock_id = params.lockId;
    }

    const endpoint = `osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${params.lock_id}`;
    return await this.request(endpoint, options);
  }

  /* Returns account locked records with longer duration */
  async accountLockedLongerDuration(params: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Returns account locked records with longer duration excluding tokens
  started unlocking */
  async accountLockedLongerDurationNotUnlockingOnly(params: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Returns account's locked records for a denom with longer duration */
  async accountLockedLongerDurationDenom(params: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${params.owner}`;
    return await this.request(endpoint, options);
  }

}