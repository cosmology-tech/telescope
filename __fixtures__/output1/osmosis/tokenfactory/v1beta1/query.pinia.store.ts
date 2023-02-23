import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataRequestSDKType, QueryDenomAuthorityMetadataResponse, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorRequestSDKType, QueryDenomsFromCreatorResponse, QueryDenomsFromCreatorResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/tokenfactory/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as QueryParamsResponse),
      denomAuthorityMetadata: ({} as QueryDenomAuthorityMetadataResponse),
      denomsFromCreator: ({} as QueryDenomsFromCreatorResponse)
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

    async fetchDenomAuthorityMetadata(param : QueryDenomAuthorityMetadataRequest) {
      this.denomAuthorityMetadata = await this.lcdClient.denomAuthorityMetadata(param);
      return this.denomAuthorityMetadata;
    },

    async fetchDenomsFromCreator(param : QueryDenomsFromCreatorRequest) {
      this.denomsFromCreator = await this.lcdClient.denomsFromCreator(param);
      return this.denomsFromCreator;
    }

  }
});