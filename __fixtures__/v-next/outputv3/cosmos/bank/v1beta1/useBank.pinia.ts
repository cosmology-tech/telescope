import { defineStore } from "pinia";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
import useLCDClient from './someWhere'
import { LCDQueryClient } from "./query.lcd";

export const useBank = defineStore('pinia.bank.store', {
  state: () => {
    return {
      balance: {} as QueryBalanceResponseSDKType,
      denomMeta: {} as QueryDenomMetadataResponseSDKType,
    }
  },
  getters: {
    client(): LCDQueryClient {
      const clientStore = useLCDClient()
      return clientStore.LCDQueryClient()
    },
  },
  actions: {
    async fetchBalance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
      this.balance = this.client.balance(params)
      return this.balance
    },
    async fetchAllBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType> {
      return this.client.balance(params)
    },
    async fetchDenomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
      this.denomMeta = this.client.denomMetadata(params);
      return this.denomMeta
    }
  },
})
