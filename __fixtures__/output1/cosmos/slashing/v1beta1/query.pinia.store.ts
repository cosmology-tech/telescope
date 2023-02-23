import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/slashing/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      signingInfo: ({} as QuerySigningInfoResponse),
      signingInfos: ({} as QuerySigningInfosResponse)
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

    async fetchSigningInfo(param : QuerySigningInfoRequest) {
      this.signingInfo = await this.lcdClient.signingInfo(param);
      return this.signingInfo;
    },

    async fetchSigningInfos(param : QuerySigningInfosRequest) {
      this.signingInfos = await this.lcdClient.signingInfos(param);
      return this.signingInfos;
    }

  }
});