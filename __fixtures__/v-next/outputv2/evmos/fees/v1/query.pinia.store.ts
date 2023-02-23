import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/fees/v1/query.proto', {
  state: () => {
    return {
      devFeeInfos: ({} as QueryDevFeeInfosResponse),
      devFeeInfo: ({} as QueryDevFeeInfoResponse),
      params: ({} as QueryParamsResponse),
      devFeeInfosPerDeployer: ({} as QueryDevFeeInfosPerDeployerResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchDevFeeInfos(param : QueryDevFeeInfosRequest) {
      this.devFeeInfos = await this.lcdClient.devFeeInfos(param);
      return this.devFeeInfos;
    },

    async fetchDevFeeInfo(param : QueryDevFeeInfoRequest) {
      this.devFeeInfo = await this.lcdClient.devFeeInfo(param);
      return this.devFeeInfo;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchDevFeeInfosPerDeployer(param : QueryDevFeeInfosPerDeployerRequest) {
      this.devFeeInfosPerDeployer = await this.lcdClient.devFeeInfosPerDeployer(param);
      return this.devFeeInfosPerDeployer;
    }

  }
});