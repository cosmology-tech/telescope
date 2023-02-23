import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/client/v1/query.proto', {
  state: () => {
    return {
      clientState: ({} as QueryClientStateResponse),
      clientStates: ({} as QueryClientStatesResponse),
      consensusState: ({} as QueryConsensusStateResponse),
      consensusStates: ({} as QueryConsensusStatesResponse),
      clientStatus: ({} as QueryClientStatusResponse),
      clientParams: ({} as QueryClientParamsResponse),
      upgradedClientState: ({} as QueryUpgradedClientStateResponse),
      upgradedConsensusState: ({} as QueryUpgradedConsensusStateResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchClientState(param : QueryClientStateRequest) {
      this.clientState = await this.lcdClient.clientState(param);
      return this.clientState;
    },

    async fetchClientStates(param : QueryClientStatesRequest) {
      this.clientStates = await this.lcdClient.clientStates(param);
      return this.clientStates;
    },

    async fetchConsensusState(param : QueryConsensusStateRequest) {
      this.consensusState = await this.lcdClient.consensusState(param);
      return this.consensusState;
    },

    async fetchConsensusStates(param : QueryConsensusStatesRequest) {
      this.consensusStates = await this.lcdClient.consensusStates(param);
      return this.consensusStates;
    },

    async fetchClientStatus(param : QueryClientStatusRequest) {
      this.clientStatus = await this.lcdClient.clientStatus(param);
      return this.clientStatus;
    },

    async fetchClientParams(param : QueryClientParamsRequest) {
      this.clientParams = await this.lcdClient.clientParams(param);
      return this.clientParams;
    },

    async fetchUpgradedClientState(param : QueryUpgradedClientStateRequest) {
      this.upgradedClientState = await this.lcdClient.upgradedClientState(param);
      return this.upgradedClientState;
    },

    async fetchUpgradedConsensusState(param : QueryUpgradedConsensusStateRequest) {
      this.upgradedConsensusState = await this.lcdClient.upgradedConsensusState(param);
      return this.upgradedConsensusState;
    }

  }
});