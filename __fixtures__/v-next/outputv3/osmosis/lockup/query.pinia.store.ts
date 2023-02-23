import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../pinia";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/lockup/query.proto', {
  state: () => {
    return {
      moduleBalance: ({} as ModuleBalanceResponse),
      moduleLockedAmount: ({} as ModuleLockedAmountResponse),
      accountUnlockableCoins: ({} as AccountUnlockableCoinsResponse),
      accountUnlockingCoins: ({} as AccountUnlockingCoinsResponse),
      accountLockedCoins: ({} as AccountLockedCoinsResponse),
      accountLockedPastTime: ({} as AccountLockedPastTimeResponse),
      accountLockedPastTimeNotUnlockingOnly: ({} as AccountLockedPastTimeNotUnlockingOnlyResponse),
      accountUnlockedBeforeTime: ({} as AccountUnlockedBeforeTimeResponse),
      accountLockedPastTimeDenom: ({} as AccountLockedPastTimeDenomResponse),
      lockedDenom: ({} as LockedDenomResponse),
      lockedByID: ({} as LockedResponse),
      syntheticLockupsByLockupID: ({} as SyntheticLockupsByLockupIDResponse),
      accountLockedLongerDuration: ({} as AccountLockedLongerDurationResponse),
      accountLockedDuration: ({} as AccountLockedDurationResponse),
      accountLockedLongerDurationNotUnlockingOnly: ({} as AccountLockedLongerDurationNotUnlockingOnlyResponse),
      accountLockedLongerDurationDenom: ({} as AccountLockedLongerDurationDenomResponse),
      params: ({} as QueryParamsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchModuleBalance(param : ModuleBalanceRequest) {
      this.moduleBalance = await this.lcdClient.moduleBalance(param);
      return this.moduleBalance;
    },

    async fetchModuleLockedAmount(param : ModuleLockedAmountRequest) {
      this.moduleLockedAmount = await this.lcdClient.moduleLockedAmount(param);
      return this.moduleLockedAmount;
    },

    async fetchAccountUnlockableCoins(param : AccountUnlockableCoinsRequest) {
      this.accountUnlockableCoins = await this.lcdClient.accountUnlockableCoins(param);
      return this.accountUnlockableCoins;
    },

    async fetchAccountUnlockingCoins(param : AccountUnlockingCoinsRequest) {
      this.accountUnlockingCoins = await this.lcdClient.accountUnlockingCoins(param);
      return this.accountUnlockingCoins;
    },

    async fetchAccountLockedCoins(param : AccountLockedCoinsRequest) {
      this.accountLockedCoins = await this.lcdClient.accountLockedCoins(param);
      return this.accountLockedCoins;
    },

    async fetchAccountLockedPastTime(param : AccountLockedPastTimeRequest) {
      this.accountLockedPastTime = await this.lcdClient.accountLockedPastTime(param);
      return this.accountLockedPastTime;
    },

    async fetchAccountLockedPastTimeNotUnlockingOnly(param : AccountLockedPastTimeNotUnlockingOnlyRequest) {
      this.accountLockedPastTimeNotUnlockingOnly = await this.lcdClient.accountLockedPastTimeNotUnlockingOnly(param);
      return this.accountLockedPastTimeNotUnlockingOnly;
    },

    async fetchAccountUnlockedBeforeTime(param : AccountUnlockedBeforeTimeRequest) {
      this.accountUnlockedBeforeTime = await this.lcdClient.accountUnlockedBeforeTime(param);
      return this.accountUnlockedBeforeTime;
    },

    async fetchAccountLockedPastTimeDenom(param : AccountLockedPastTimeDenomRequest) {
      this.accountLockedPastTimeDenom = await this.lcdClient.accountLockedPastTimeDenom(param);
      return this.accountLockedPastTimeDenom;
    },

    async fetchLockedDenom(param : LockedDenomRequest) {
      this.lockedDenom = await this.lcdClient.lockedDenom(param);
      return this.lockedDenom;
    },

    async fetchLockedByID(param : LockedRequest) {
      this.lockedByID = await this.lcdClient.lockedByID(param);
      return this.lockedByID;
    },

    async fetchSyntheticLockupsByLockupID(param : SyntheticLockupsByLockupIDRequest) {
      this.syntheticLockupsByLockupID = await this.lcdClient.syntheticLockupsByLockupID(param);
      return this.syntheticLockupsByLockupID;
    },

    async fetchAccountLockedLongerDuration(param : AccountLockedLongerDurationRequest) {
      this.accountLockedLongerDuration = await this.lcdClient.accountLockedLongerDuration(param);
      return this.accountLockedLongerDuration;
    },

    async fetchAccountLockedDuration(param : AccountLockedDurationRequest) {
      this.accountLockedDuration = await this.lcdClient.accountLockedDuration(param);
      return this.accountLockedDuration;
    },

    async fetchAccountLockedLongerDurationNotUnlockingOnly(param : AccountLockedLongerDurationNotUnlockingOnlyRequest) {
      this.accountLockedLongerDurationNotUnlockingOnly = await this.lcdClient.accountLockedLongerDurationNotUnlockingOnly(param);
      return this.accountLockedLongerDurationNotUnlockingOnly;
    },

    async fetchAccountLockedLongerDurationDenom(param : AccountLockedLongerDurationDenomRequest) {
      this.accountLockedLongerDurationDenom = await this.lcdClient.accountLockedLongerDurationDenom(param);
      return this.accountLockedLongerDurationDenom;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }

  }
});