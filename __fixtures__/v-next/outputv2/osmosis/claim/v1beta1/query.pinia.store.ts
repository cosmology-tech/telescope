import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/claim/v1beta1/query.proto', {
  state: () => {
    return {
      moduleAccountBalance: ({} as QueryModuleAccountBalanceResponse),
      params: ({} as QueryParamsResponse),
      claimRecord: ({} as QueryClaimRecordResponse),
      claimableForAction: ({} as QueryClaimableForActionResponse),
      totalClaimable: ({} as QueryTotalClaimableResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchModuleAccountBalance(param : QueryModuleAccountBalanceRequest) {
      this.moduleAccountBalance = await this.lcdClient.moduleAccountBalance(param);
      return this.moduleAccountBalance;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchClaimRecord(param : QueryClaimRecordRequest) {
      this.claimRecord = await this.lcdClient.claimRecord(param);
      return this.claimRecord;
    },

    async fetchClaimableForAction(param : QueryClaimableForActionRequest) {
      this.claimableForAction = await this.lcdClient.claimableForAction(param);
      return this.claimableForAction;
    },

    async fetchTotalClaimable(param : QueryTotalClaimableRequest) {
      this.totalClaimable = await this.lcdClient.totalClaimable(param);
      return this.totalClaimable;
    }

  }
});