import { LCDClient } from "@osmonauts/lcd";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  }
  /* Return full balance of the module */


  async moduleBalance(_params: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponse> {
    const endpoint = `osmosis/lockup/v1beta1/module_balance`;
    return await this.req.get<ModuleBalanceResponse>(endpoint);
  }
  /* Return locked balance of the module */


  async moduleLockedAmount(_params: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponse> {
    const endpoint = `osmosis/lockup/v1beta1/module_locked_amount`;
    return await this.req.get<ModuleLockedAmountResponse>(endpoint);
  }
  /* Returns unlockable coins which are not withdrawn yet */


  async accountUnlockableCoins(params: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlockable_coins/${params.owner}`;
    return await this.req.get<AccountUnlockableCoinsResponse>(endpoint);
  }
  /* Returns unlocking coins */


  async accountUnlockingCoins(params: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_unlocking_coins/${params.owner}`;
    return await this.req.get<AccountUnlockingCoinsResponse>(endpoint);
  }
  /* Return a locked coins that can't be withdrawn */


  async accountLockedCoins(params: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
    const endpoint = `osmosis/lockup/v1beta1/account_locked_coins/${params.owner}`;
    return await this.req.get<AccountLockedCoinsResponse>(endpoint);
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
    return await this.req.get<AccountLockedPastTimeResponse>(endpoint, options);
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
    return await this.req.get<AccountLockedPastTimeNotUnlockingOnlyResponse>(endpoint, options);
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
    return await this.req.get<AccountUnlockedBeforeTimeResponse>(endpoint, options);
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
    return await this.req.get<AccountLockedPastTimeDenomResponse>(endpoint, options);
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

    const endpoint = `osmosis/lockup/v1beta1/locked_denom`;
    return await this.req.get<LockedDenomResponse>(endpoint, options);
  }
  /* Returns lock record by id */


  async lockedByID(params: LockedRequest): Promise<LockedResponse> {
    const endpoint = `osmosis/lockup/v1beta1/locked_by_id/${params.lockId}`;
    return await this.req.get<LockedResponse>(endpoint);
  }
  /* Returns synthetic lockups by native lockup id */


  async syntheticLockupsByLockupID(params: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
    const endpoint = `osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${params.lockId}`;
    return await this.req.get<SyntheticLockupsByLockupIDResponse>(endpoint);
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
    return await this.req.get<AccountLockedLongerDurationResponse>(endpoint, options);
  }
  /* Returns account locked records with a specific duration */


  async accountLockedDuration(params: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.duration !== "undefined") {
      options.params.duration = params.duration;
    }

    const endpoint = `osmosis/lockup/v1beta1/account_locked_duration/${params.owner}`;
    return await this.req.get<AccountLockedDurationResponse>(endpoint, options);
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
    return await this.req.get<AccountLockedLongerDurationNotUnlockingOnlyResponse>(endpoint, options);
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
    return await this.req.get<AccountLockedLongerDurationDenomResponse>(endpoint, options);
  }

}