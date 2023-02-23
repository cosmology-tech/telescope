import { Params, ParamsSDKType } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/mint/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      epochProvisions: ({} as QueryEpochProvisionsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchEpochProvisions(param : QueryEpochProvisionsRequest) {
      this.epochProvisions = await this.lcdClient.epochProvisions(param);
      return this.epochProvisions;
    }

  }
});