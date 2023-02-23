import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/epochs/v1/query.proto', {
  state: () => {
    return {
      epochInfos: ({} as QueryEpochsInfoResponse),
      currentEpoch: ({} as QueryCurrentEpochResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchEpochInfos(param : QueryEpochsInfoRequest) {
      this.epochInfos = await this.lcdClient.epochInfos(param);
      return this.epochInfos;
    },

    async fetchCurrentEpoch(param : QueryCurrentEpochRequest) {
      this.currentEpoch = await this.lcdClient.currentEpoch(param);
      return this.currentEpoch;
    }

  }
});