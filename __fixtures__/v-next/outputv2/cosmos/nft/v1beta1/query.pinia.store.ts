import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmos/nft/v1beta1/query.proto', {
  state: () => {
    return {
      balance: ({} as QueryBalanceResponse),
      owner: ({} as QueryOwnerResponse),
      supply: ({} as QuerySupplyResponse),
      nFTs: ({} as QueryNFTsResponse),
      nFT: ({} as QueryNFTResponse),
      class: ({} as QueryClassResponse),
      classes: ({} as QueryClassesResponse)
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

    async fetchOwner(param : QueryOwnerRequest) {
      this.owner = await this.lcdClient.owner(param);
      return this.owner;
    },

    async fetchSupply(param : QuerySupplyRequest) {
      this.supply = await this.lcdClient.supply(param);
      return this.supply;
    },

    async fetchNFTs(param : QueryNFTsRequest) {
      this.nFTs = await this.lcdClient.nFTs(param);
      return this.nFTs;
    },

    async fetchNFT(param : QueryNFTRequest) {
      this.nFT = await this.lcdClient.nFT(param);
      return this.nFT;
    },

    async fetchClass(param : QueryClassRequest) {
      this.class = await this.lcdClient.class(param);
      return this.class;
    },

    async fetchClasses(param : QueryClassesRequest) {
      this.classes = await this.lcdClient.classes(param);
      return this.classes;
    }

  }
});