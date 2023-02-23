import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryFeeTokensRequest, QueryFeeTokensRequestSDKType, QueryFeeTokensResponse, QueryFeeTokensResponseSDKType, QueryDenomSpotPriceRequest, QueryDenomSpotPriceRequestSDKType, QueryDenomSpotPriceResponse, QueryDenomSpotPriceResponseSDKType, QueryDenomPoolIdRequest, QueryDenomPoolIdRequestSDKType, QueryDenomPoolIdResponse, QueryDenomPoolIdResponseSDKType, QueryBaseDenomRequest, QueryBaseDenomRequestSDKType, QueryBaseDenomResponse, QueryBaseDenomResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/txfees/v1beta1/query.proto', {
  state: () => {
    return {
      feeTokens: ({} as QueryFeeTokensResponse),
      denomSpotPrice: ({} as QueryDenomSpotPriceResponse),
      denomPoolId: ({} as QueryDenomPoolIdResponse),
      baseDenom: ({} as QueryBaseDenomResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchFeeTokens(param : QueryFeeTokensRequest) {
      this.feeTokens = await this.lcdClient.feeTokens(param);
      return this.feeTokens;
    },

    async fetchDenomSpotPrice(param : QueryDenomSpotPriceRequest) {
      this.denomSpotPrice = await this.lcdClient.denomSpotPrice(param);
      return this.denomSpotPrice;
    },

    async fetchDenomPoolId(param : QueryDenomPoolIdRequest) {
      this.denomPoolId = await this.lcdClient.denomPoolId(param);
      return this.denomPoolId;
    },

    async fetchBaseDenom(param : QueryBaseDenomRequest) {
      this.baseDenom = await this.lcdClient.baseDenom(param);
      return this.baseDenom;
    }

  }
});