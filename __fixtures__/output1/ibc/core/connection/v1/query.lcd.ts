import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Connection queries an IBC connection end. */
  async connection(params: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
    return await this.get<QueryConnectionResponseSDKType>(endpoint);
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
    return await this.get<QueryConnectionsResponseSDKType>(endpoint, options);
  }

  /* ClientConnections queries the connection paths associated with a client
  state. */
  async clientConnections(params: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
    return await this.get<QueryClientConnectionsResponseSDKType>(endpoint);
  }

  /* ConnectionClientState queries the client state associated with the
  connection. */
  async connectionClientState(params: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
    return await this.get<QueryConnectionClientStateResponseSDKType>(endpoint);
  }

  /* ConnectionConsensusState queries the consensus state associated with the
  connection. */
  async connectionConsensusState(params: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
    const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.get<QueryConnectionConsensusStateResponseSDKType>(endpoint);
  }

}