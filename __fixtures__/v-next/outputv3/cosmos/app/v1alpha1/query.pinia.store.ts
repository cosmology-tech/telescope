import { Config, ConfigSDKType } from "./config";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryConfigRequest, QueryConfigRequestSDKType, QueryConfigResponse, QueryConfigResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/app/v1alpha1/query.proto', {
  state: () => {
    return {
      config: ({} as QueryConfigResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchConfig(param : QueryConfigRequest) {
      this.config = await this.lcdClient.config(param);
      return this.config;
    }

  }
});