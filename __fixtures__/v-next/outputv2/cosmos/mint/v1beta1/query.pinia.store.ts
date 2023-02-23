import { Params, ParamsSDKType } from "./mint";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/mint/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      inflation: ({} as QueryInflationResponse),
      annualProvisions: ({} as QueryAnnualProvisionsResponse)
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

    async fetchInflation(param : QueryInflationRequest) {
      this.inflation = await this.lcdClient.inflation(param);
      return this.inflation;
    },

    async fetchAnnualProvisions(param : QueryAnnualProvisionsRequest) {
      this.annualProvisions = await this.lcdClient.annualProvisions(param);
      return this.annualProvisions;
    }

  }
});