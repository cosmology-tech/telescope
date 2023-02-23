import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/twap/v1beta1/query.proto', {
  state: () => {
    return {
      params: ({} as ParamsResponse),
      arithmeticTwap: ({} as ArithmeticTwapResponse),
      arithmeticTwapToNow: ({} as ArithmeticTwapToNowResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchParams(param : ParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchArithmeticTwap(param : ArithmeticTwapRequest) {
      this.arithmeticTwap = await this.lcdClient.arithmeticTwap(param);
      return this.arithmeticTwap;
    },

    async fetchArithmeticTwapToNow(param : ArithmeticTwapToNowRequest) {
      this.arithmeticTwapToNow = await this.lcdClient.arithmeticTwapToNow(param);
      return this.arithmeticTwapToNow;
    }

  }
});