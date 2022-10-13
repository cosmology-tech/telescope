import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }
  /* Connection queries an IBC connection end. */


  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
    return await this.req.get<QueryConnectionResponse>(endpoint);
  }
  /* Connections queries all the IBC connections of a chain. */


  async connections(params: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/connection/v1/connections`;
    return await this.req.get<QueryConnectionsResponse>(endpoint, options);
  }
  /* ClientConnections queries the connection paths associated with a client
   state. */


  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
    return await this.req.get<QueryClientConnectionsResponse>(endpoint);
  }
  /* ConnectionClientState queries the client state associated with the
   connection. */


  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
    return await this.req.get<QueryConnectionClientStateResponse>(endpoint);
  }
  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */


  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.req.get<QueryConnectionConsensusStateResponse>(endpoint);
  }

}