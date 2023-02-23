import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryAllProvidersAttributesRequest, QueryAllProvidersAttributesRequestSDKType, QueryProvidersResponse, QueryProvidersResponseSDKType, QueryProviderAttributesRequest, QueryProviderAttributesRequestSDKType, QueryProviderAuditorRequest, QueryProviderAuditorRequestSDKType, QueryAuditorAttributesRequest, QueryAuditorAttributesRequestSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('akash/audit/v1beta2/query.proto', {
  state: () => {
    return {
      allProvidersAttributes: ({} as QueryProvidersResponse),
      providerAttributes: ({} as QueryProvidersResponse),
      providerAuditorAttributes: ({} as QueryProvidersResponse),
      auditorAttributes: ({} as QueryProvidersResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchAllProvidersAttributes(param : QueryAllProvidersAttributesRequest) {
      this.allProvidersAttributes = await this.lcdClient.allProvidersAttributes(param);
      return this.allProvidersAttributes;
    },

    async fetchProviderAttributes(param : QueryProviderAttributesRequest) {
      this.providerAttributes = await this.lcdClient.providerAttributes(param);
      return this.providerAttributes;
    },

    async fetchProviderAuditorAttributes(param : QueryProviderAuditorRequest) {
      this.providerAuditorAttributes = await this.lcdClient.providerAuditorAttributes(param);
      return this.providerAuditorAttributes;
    },

    async fetchAuditorAttributes(param : QueryAuditorAttributesRequest) {
      this.auditorAttributes = await this.lcdClient.auditorAttributes(param);
      return this.auditorAttributes;
    }

  }
});