import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./provider";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryProvidersRequest, QueryProvidersRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderRequest, QueryProviderRequestSDKType, QueryProviderResponse, QueryProviderResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('akash/provider/v1beta2/query.proto', {
  state: () => {
    return {
      providers: ({} as QueryProvidersResponse),
      provider: ({} as QueryProviderResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchProviders(param : QueryProvidersRequest) {
      this.providers = await this.lcdClient.providers(param);
      return this.providers;
    },

    async fetchProvider(param : QueryProviderRequest) {
      this.provider = await this.lcdClient.provider(param);
      return this.provider;
    }

  }
});