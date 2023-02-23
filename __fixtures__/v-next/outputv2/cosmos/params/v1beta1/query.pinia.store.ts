import { ParamChange, ParamChangeSDKType } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/params/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      subspaces: ({} as QuerySubspacesResponse)
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

    async fetchSubspaces(param : QuerySubspacesRequest) {
      this.subspaces = await this.lcdClient.subspaces(param);
      return this.subspaces;
    }

  }
});