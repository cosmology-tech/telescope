import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/bank/v1beta1/query.proto', {
  state: () => {
    return {
      balance: ({} as QueryBalanceResponse),
      allBalances: ({} as QueryAllBalancesResponse),
      spendableBalances: ({} as QuerySpendableBalancesResponse),
      totalSupply: ({} as QueryTotalSupplyResponse),
      supplyOf: ({} as QuerySupplyOfResponse),
      params: ({} as QueryParamsResponse),
      denomMetadata: ({} as QueryDenomMetadataResponse),
      denomsMetadata: ({} as QueryDenomsMetadataResponse),
      denomOwners: ({} as QueryDenomOwnersResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchBalance(param : QueryBalanceRequest) {
      this.balance = await this.lcdClient.balance(param);
      return this.balance;
    },

    async fetchAllBalances(param : QueryAllBalancesRequest) {
      this.allBalances = await this.lcdClient.allBalances(param);
      return this.allBalances;
    },

    async fetchSpendableBalances(param : QuerySpendableBalancesRequest) {
      this.spendableBalances = await this.lcdClient.spendableBalances(param);
      return this.spendableBalances;
    },

    async fetchTotalSupply(param : QueryTotalSupplyRequest) {
      this.totalSupply = await this.lcdClient.totalSupply(param);
      return this.totalSupply;
    },

    async fetchSupplyOf(param : QuerySupplyOfRequest) {
      this.supplyOf = await this.lcdClient.supplyOf(param);
      return this.supplyOf;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchDenomMetadata(param : QueryDenomMetadataRequest) {
      this.denomMetadata = await this.lcdClient.denomMetadata(param);
      return this.denomMetadata;
    },

    async fetchDenomsMetadata(param : QueryDenomsMetadataRequest) {
      this.denomsMetadata = await this.lcdClient.denomsMetadata(param);
      return this.denomsMetadata;
    },

    async fetchDenomOwners(param : QueryDenomOwnersRequest) {
      this.denomOwners = await this.lcdClient.denomOwners(param);
      return this.denomOwners;
    }

  }
});