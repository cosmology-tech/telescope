import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "./auth";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/auth/v1beta1/query.proto', {
  state: () => {
    return {
      accounts: ({} as QueryAccountsResponse),
      account: ({} as QueryAccountResponse),
      params: ({} as QueryParamsResponse),
      moduleAccounts: ({} as QueryModuleAccountsResponse),
      bech32Prefix: ({} as Bech32PrefixResponse),
      addressBytesToString: ({} as AddressBytesToStringResponse),
      addressStringToBytes: ({} as AddressStringToBytesResponse)
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

    async fetchAccount(param : QueryAccountRequest) {
      this.account = await this.lcdClient.account(param);
      return this.account;
    },

    async fetchParams(param : QueryParamsRequest) {
      this.params = await this.lcdClient.params(param);
      return this.params;
    },

    async fetchModuleAccounts(param : QueryModuleAccountsRequest) {
      this.moduleAccounts = await this.lcdClient.moduleAccounts(param);
      return this.moduleAccounts;
    },

    async fetchBech32Prefix(param : Bech32PrefixRequest) {
      this.bech32Prefix = await this.lcdClient.bech32Prefix(param);
      return this.bech32Prefix;
    },

    async fetchAddressBytesToString(param : AddressBytesToStringRequest) {
      this.addressBytesToString = await this.lcdClient.addressBytesToString(param);
      return this.addressBytesToString;
    },

    async fetchAddressStringToBytes(param : AddressStringToBytesRequest) {
      this.addressStringToBytes = await this.lcdClient.addressStringToBytes(param);
      return this.addressStringToBytes;
    }

  }
});