import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/incentives/v1/query.proto', {
  state: () => {
    return {
      incentives: ({} as QueryIncentivesResponse),
      incentive: ({} as QueryIncentiveResponse),
      gasMeters: ({} as QueryGasMetersResponse),
      gasMeter: ({} as QueryGasMeterResponse),
      allocationMeters: ({} as QueryAllocationMetersResponse),
      allocationMeter: ({} as QueryAllocationMeterResponse),
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
    async fetchIncentives(param : QueryIncentivesRequest) {
      this.incentives = await this.lcdClient.incentives(param);
      return this.incentives;
    },

    async fetchIncentive(param : QueryIncentiveRequest) {
      this.incentive = await this.lcdClient.incentive(param);
      return this.incentive;
    },

    async fetchGasMeters(param : QueryGasMetersRequest) {
      this.gasMeters = await this.lcdClient.gasMeters(param);
      return this.gasMeters;
    },

    async fetchGasMeter(param : QueryGasMeterRequest) {
      this.gasMeter = await this.lcdClient.gasMeter(param);
      return this.gasMeter;
    },

    async fetchAllocationMeters(param : QueryAllocationMetersRequest) {
      this.allocationMeters = await this.lcdClient.allocationMeters(param);
      return this.allocationMeters;
    },

    async fetchAllocationMeter(param : QueryAllocationMeterRequest) {
      this.allocationMeter = await this.lcdClient.allocationMeter(param);
      return this.allocationMeter;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }

  }
});