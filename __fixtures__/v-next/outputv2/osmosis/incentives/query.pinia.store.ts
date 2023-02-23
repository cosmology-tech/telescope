import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../pinia";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/incentives/query.proto', {
  state: () => {
    return {
      moduleToDistributeCoins: ({} as ModuleToDistributeCoinsResponse),
      gaugeByID: ({} as GaugeByIDResponse),
      gauges: ({} as GaugesResponse),
      activeGauges: ({} as ActiveGaugesResponse),
      activeGaugesPerDenom: ({} as ActiveGaugesPerDenomResponse),
      upcomingGauges: ({} as UpcomingGaugesResponse),
      upcomingGaugesPerDenom: ({} as UpcomingGaugesPerDenomResponse),
      rewardsEst: ({} as RewardsEstResponse),
      lockableDurations: ({} as QueryLockableDurationsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchModuleToDistributeCoins(param : ModuleToDistributeCoinsRequest) {
      this.moduleToDistributeCoins = await this.lcdClient.moduleToDistributeCoins(param);
      return this.moduleToDistributeCoins;
    },

    async fetchGaugeByID(param : GaugeByIDRequest) {
      this.gaugeByID = await this.lcdClient.gaugeByID(param);
      return this.gaugeByID;
    },

    async fetchGauges(param : GaugesRequest) {
      this.gauges = await this.lcdClient.gauges(param);
      return this.gauges;
    },

    async fetchActiveGauges(param : ActiveGaugesRequest) {
      this.activeGauges = await this.lcdClient.activeGauges(param);
      return this.activeGauges;
    },

    async fetchActiveGaugesPerDenom(param : ActiveGaugesPerDenomRequest) {
      this.activeGaugesPerDenom = await this.lcdClient.activeGaugesPerDenom(param);
      return this.activeGaugesPerDenom;
    },

    async fetchUpcomingGauges(param : UpcomingGaugesRequest) {
      this.upcomingGauges = await this.lcdClient.upcomingGauges(param);
      return this.upcomingGauges;
    },

    async fetchUpcomingGaugesPerDenom(param : UpcomingGaugesPerDenomRequest) {
      this.upcomingGaugesPerDenom = await this.lcdClient.upcomingGaugesPerDenom(param);
      return this.upcomingGaugesPerDenom;
    },

    async fetchRewardsEst(param : RewardsEstRequest) {
      this.rewardsEst = await this.lcdClient.rewardsEst(param);
      return this.rewardsEst;
    },

    async fetchLockableDurations(param : QueryLockableDurationsRequest) {
      this.lockableDurations = await this.lcdClient.lockableDurations(param);
      return this.lockableDurations;
    }

  }
});