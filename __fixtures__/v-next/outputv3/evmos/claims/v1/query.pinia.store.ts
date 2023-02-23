import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/claims/v1/query.proto', {
  state: () => {
    return {
      totalUnclaimed: ({} as QueryTotalUnclaimedResponse),
      params: ({} as QueryParamsResponse),
      claimsRecords: ({} as QueryClaimsRecordsResponse),
      claimsRecord: ({} as QueryClaimsRecordResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchTotalUnclaimed(param : QueryTotalUnclaimedRequest) {
      this.totalUnclaimed = await this.lcdClient.totalUnclaimed(param);
      return this.totalUnclaimed;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchClaimsRecords(param : QueryClaimsRecordsRequest) {
      this.claimsRecords = await this.lcdClient.claimsRecords(param);
      return this.claimsRecords;
    },

    async fetchClaimsRecord(param : QueryClaimsRecordRequest) {
      this.claimsRecord = await this.lcdClient.claimsRecord(param);
      return this.claimsRecord;
    }

  }
});