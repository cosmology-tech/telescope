import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { GetAuthnDescriptorRequest, GetAuthnDescriptorRequestSDKType, GetAuthnDescriptorResponse, GetAuthnDescriptorResponseSDKType, GetChainDescriptorRequest, GetChainDescriptorRequestSDKType, GetChainDescriptorResponse, GetChainDescriptorResponseSDKType, GetCodecDescriptorRequest, GetCodecDescriptorRequestSDKType, GetCodecDescriptorResponse, GetCodecDescriptorResponseSDKType, GetConfigurationDescriptorRequest, GetConfigurationDescriptorRequestSDKType, GetConfigurationDescriptorResponse, GetConfigurationDescriptorResponseSDKType, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorRequestSDKType, GetQueryServicesDescriptorResponse, GetQueryServicesDescriptorResponseSDKType, GetTxDescriptorRequest, GetTxDescriptorRequestSDKType, GetTxDescriptorResponse, GetTxDescriptorResponseSDKType } from "./reflection";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/base/reflection/v2alpha1/reflection.proto', {
  state: () => {
    return {
      getAuthnDescriptor: ({} as GetAuthnDescriptorResponse),
      getChainDescriptor: ({} as GetChainDescriptorResponse),
      getCodecDescriptor: ({} as GetCodecDescriptorResponse),
      getConfigurationDescriptor: ({} as GetConfigurationDescriptorResponse),
      getQueryServicesDescriptor: ({} as GetQueryServicesDescriptorResponse),
      getTxDescriptor: ({} as GetTxDescriptorResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchGetAuthnDescriptor(param : GetAuthnDescriptorRequest) {
      this.getAuthnDescriptor = await this.lcdClient.getAuthnDescriptor(param);
      return this.getAuthnDescriptor;
    },

    async fetchGetChainDescriptor(param : GetChainDescriptorRequest) {
      this.getChainDescriptor = await this.lcdClient.getChainDescriptor(param);
      return this.getChainDescriptor;
    },

    async fetchGetCodecDescriptor(param : GetCodecDescriptorRequest) {
      this.getCodecDescriptor = await this.lcdClient.getCodecDescriptor(param);
      return this.getCodecDescriptor;
    },

    async fetchGetConfigurationDescriptor(param : GetConfigurationDescriptorRequest) {
      this.getConfigurationDescriptor = await this.lcdClient.getConfigurationDescriptor(param);
      return this.getConfigurationDescriptor;
    },

    async fetchGetQueryServicesDescriptor(param : GetQueryServicesDescriptorRequest) {
      this.getQueryServicesDescriptor = await this.lcdClient.getQueryServicesDescriptor(param);
      return this.getQueryServicesDescriptor;
    },

    async fetchGetTxDescriptor(param : GetTxDescriptorRequest) {
      this.getTxDescriptor = await this.lcdClient.getTxDescriptor(param);
      return this.getTxDescriptor;
    }

  }
});