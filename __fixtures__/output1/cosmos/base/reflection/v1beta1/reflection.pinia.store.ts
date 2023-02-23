import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { ListAllInterfacesRequest, ListAllInterfacesRequestSDKType, ListAllInterfacesResponse, ListAllInterfacesResponseSDKType, ListImplementationsRequest, ListImplementationsRequestSDKType, ListImplementationsResponse, ListImplementationsResponseSDKType } from "./reflection";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/base/reflection/v1beta1/reflection.proto', {
  state: () => {
    return {
      listAllInterfaces: ({} as ListAllInterfacesResponse),
      listImplementations: ({} as ListImplementationsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchListAllInterfaces(param : ListAllInterfacesRequest) {
      this.listAllInterfaces = await this.lcdClient.listAllInterfaces(param);
      return this.listAllInterfaces;
    },

    async fetchListImplementations(param : ListImplementationsRequest) {
      this.listImplementations = await this.lcdClient.listImplementations(param);
      return this.listImplementations;
    }

  }
});