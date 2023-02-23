import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { QueryAppVersionRequest, QueryAppVersionRequestSDKType, QueryAppVersionResponse, QueryAppVersionResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/port/v1/query.proto', {
  state: () => {
    return {
      appVersion: ({} as QueryAppVersionResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchAppVersion(param : QueryAppVersionRequest) {
      this.appVersion = await this.lcdClient.appVersion(param);
      return this.appVersion;
    }

  }
});