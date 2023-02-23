import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { QueryDenomTraceRequest, QueryDenomTraceRequestSDKType, QueryDenomTraceResponse, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesRequestSDKType, QueryDenomTracesResponse, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/applications/transfer/v1/query.proto', {
  state: () => {
    return {
      denomTrace: ({} as QueryDenomTraceResponse),
      denomTraces: ({} as QueryDenomTracesResponse),
      params: ({} as QueryParamsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchDenomTrace(param : QueryDenomTraceRequest) {
      this.denomTrace = await this.lcdClient.denomTrace(param);
      return this.denomTrace;
    },

    async fetchDenomTraces(param : QueryDenomTracesRequest) {
      this.denomTraces = await this.lcdClient.denomTraces(param);
      return this.denomTraces;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    }

  }
});