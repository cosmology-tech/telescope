import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/pool-incentives/v1beta1/query.proto', {
  state: () => {
    return {
      gaugeIds: ({} as QueryGaugeIdsResponse),
      distrInfo: ({} as QueryDistrInfoResponse),
      params: ({} as QueryParamsResponse),
      lockableDurations: ({} as QueryLockableDurationsResponse),
      incentivizedPools: ({} as QueryIncentivizedPoolsResponse),
      externalIncentiveGauges: ({} as QueryExternalIncentiveGaugesResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchGaugeIds(param : QueryGaugeIdsRequest) {
      this.gaugeIds = await this.lcdClient.gaugeIds(param);
      return this.gaugeIds;
    },

    async fetchDistrInfo(param : QueryDistrInfoRequest) {
      this.distrInfo = await this.lcdClient.distrInfo(param);
      return this.distrInfo;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchLockableDurations(param : QueryLockableDurationsRequest) {
      this.lockableDurations = await this.lcdClient.lockableDurations(param);
      return this.lockableDurations;
    },

    async fetchIncentivizedPools(param : QueryIncentivizedPoolsRequest) {
      this.incentivizedPools = await this.lcdClient.incentivizedPools(param);
      return this.incentivizedPools;
    },

    async fetchExternalIncentiveGauges(param : QueryExternalIncentiveGaugesRequest) {
      this.externalIncentiveGauges = await this.lcdClient.externalIncentiveGauges(param);
      return this.externalIncentiveGauges;
    }

  }
});