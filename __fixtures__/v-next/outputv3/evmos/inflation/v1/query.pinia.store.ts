import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/inflation/v1/query.proto', {
  state: () => {
    return {
      period: ({} as QueryPeriodResponse),
      epochMintProvision: ({} as QueryEpochMintProvisionResponse),
      skippedEpochs: ({} as QuerySkippedEpochsResponse),
      circulatingSupply: ({} as QueryCirculatingSupplyResponse),
      inflationRate: ({} as QueryInflationRateResponse),
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
    async fetchPeriod(param : QueryPeriodRequest) {
      this.period = await this.lcdClient.period(param);
      return this.period;
    },

    async fetchEpochMintProvision(param : QueryEpochMintProvisionRequest) {
      this.epochMintProvision = await this.lcdClient.epochMintProvision(param);
      return this.epochMintProvision;
    },

    async fetchSkippedEpochs(param : QuerySkippedEpochsRequest) {
      this.skippedEpochs = await this.lcdClient.skippedEpochs(param);
      return this.skippedEpochs;
    },

    async fetchCirculatingSupply(param : QueryCirculatingSupplyRequest) {
      this.circulatingSupply = await this.lcdClient.circulatingSupply(param);
      return this.circulatingSupply;
    },

    async fetchInflationRate(param : QueryInflationRateRequest) {
      this.inflationRate = await this.lcdClient.inflationRate(param);
      return this.inflationRate;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }

  }
});