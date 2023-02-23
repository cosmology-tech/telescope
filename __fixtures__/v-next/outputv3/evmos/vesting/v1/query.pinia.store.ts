import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('evmos/vesting/v1/query.proto', {
  state: () => {
    return {
      balances: ({} as QueryBalancesResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchBalances(param : QueryBalancesRequest) {
      this.balances = await this.lcdClient.balances(param);
      return this.balances;
    }

  }
});