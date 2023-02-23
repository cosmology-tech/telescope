import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('cosmwasm/wasm/v1/query.proto', {
  state: () => {
    return {
      contractInfo: ({} as QueryContractInfoResponse),
      contractHistory: ({} as QueryContractHistoryResponse),
      contractsByCode: ({} as QueryContractsByCodeResponse),
      allContractState: ({} as QueryAllContractStateResponse),
      rawContractState: ({} as QueryRawContractStateResponse),
      smartContractState: ({} as QuerySmartContractStateResponse),
      code: ({} as QueryCodeResponse),
      codes: ({} as QueryCodesResponse),
      pinnedCodes: ({} as QueryPinnedCodesResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchContractInfo(param : QueryContractInfoRequest) {
      this.contractInfo = await this.lcdClient.contractInfo(param);
      return this.contractInfo;
    },

    async fetchContractHistory(param : QueryContractHistoryRequest) {
      this.contractHistory = await this.lcdClient.contractHistory(param);
      return this.contractHistory;
    },

    async fetchContractsByCode(param : QueryContractsByCodeRequest) {
      this.contractsByCode = await this.lcdClient.contractsByCode(param);
      return this.contractsByCode;
    },

    async fetchAllContractState(param : QueryAllContractStateRequest) {
      this.allContractState = await this.lcdClient.allContractState(param);
      return this.allContractState;
    },

    async fetchRawContractState(param : QueryRawContractStateRequest) {
      this.rawContractState = await this.lcdClient.rawContractState(param);
      return this.rawContractState;
    },

    async fetchSmartContractState(param : QuerySmartContractStateRequest) {
      this.smartContractState = await this.lcdClient.smartContractState(param);
      return this.smartContractState;
    },

    async fetchCode(param : QueryCodeRequest) {
      this.code = await this.lcdClient.code(param);
      return this.code;
    },

    async fetchCodes(param : QueryCodesRequest) {
      this.codes = await this.lcdClient.codes(param);
      return this.codes;
    },

    async fetchPinnedCodes(param : QueryPinnedCodesRequest) {
      this.pinnedCodes = await this.lcdClient.pinnedCodes(param);
      return this.pinnedCodes;
    }

  }
});