import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('akash/escrow/v1beta1/query.proto', {
  state: () => {
    return {
      accounts: ({} as QueryAccountsResponse),
      payments: ({} as QueryPaymentsResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchAccounts(param : QueryAccountsRequest) {
      this.accounts = await this.lcdClient.accounts(param);
      return this.accounts;
    },

    async fetchPayments(param : QueryPaymentsRequest) {
      this.payments = await this.lcdClient.payments(param);
      return this.payments;
    }

  }
});