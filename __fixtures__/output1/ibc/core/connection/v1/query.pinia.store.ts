import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/connection/v1/query.proto', {
  state: () => {
    return {
      connection: ({} as QueryConnectionResponse),
      connections: ({} as QueryConnectionsResponse),
      clientConnections: ({} as QueryClientConnectionsResponse),
      connectionClientState: ({} as QueryConnectionClientStateResponse),
      connectionConsensusState: ({} as QueryConnectionConsensusStateResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchConnection(param : QueryConnectionRequest) {
      this.connection = await this.lcdClient.connection(param);
      return this.connection;
    },

    async fetchConnections(param : QueryConnectionsRequest) {
      this.connections = await this.lcdClient.connections(param);
      return this.connections;
    },

    async fetchClientConnections(param : QueryClientConnectionsRequest) {
      this.clientConnections = await this.lcdClient.clientConnections(param);
      return this.clientConnections;
    },

    async fetchConnectionClientState(param : QueryConnectionClientStateRequest) {
      this.connectionClientState = await this.lcdClient.connectionClientState(param);
      return this.connectionClientState;
    },

    async fetchConnectionConsensusState(param : QueryConnectionConsensusStateRequest) {
      this.connectionConsensusState = await this.lcdClient.connectionConsensusState(param);
      return this.connectionConsensusState;
    }

  }
});