import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryAllowanceRequest, QueryAllowanceRequestSDKType, QueryAllowanceResponse, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesRequestSDKType, QueryAllowancesResponse, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponse, QueryAllowancesByGranterResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/feegrant/v1beta1/query.proto', {
  state: () => {
    return {
      allowance: ({} as QueryAllowanceResponse),
      allowances: ({} as QueryAllowancesResponse),
      allowancesByGranter: ({} as QueryAllowancesByGranterResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchAllowance(param : QueryAllowanceRequest) {
      this.allowance = await this.lcdClient.allowance(param);
      return this.allowance;
    },

    async fetchAllowances(param : QueryAllowancesRequest) {
      this.allowances = await this.lcdClient.allowances(param);
      return this.allowances;
    },

    async fetchAllowancesByGranter(param : QueryAllowancesByGranterRequest) {
      this.allowancesByGranter = await this.lcdClient.allowancesByGranter(param);
      return this.allowancesByGranter;
    }

  }
});