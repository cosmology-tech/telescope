import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Connection queries an IBC connection end. */
  connection(request: DeepPartial<QueryConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionResponse>;

  /** Connections queries all the IBC connections of a chain. */
  connections(request?: DeepPartial<QueryConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionsResponse>;

  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  clientConnections(request: DeepPartial<QueryClientConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryClientConnectionsResponse>;

  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  connectionClientState(request: DeepPartial<QueryConnectionClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionClientStateResponse>;

  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  connectionConsensusState(request: DeepPartial<QueryConnectionConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }

  connection(request: DeepPartial<QueryConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionResponse> {
    return this.rpc.unary(QueryConnectionDesc, QueryConnectionRequest.fromPartial(request), metadata);
  }

  connections(request: DeepPartial<QueryConnectionsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryConnectionsResponse> {
    return this.rpc.unary(QueryConnectionsDesc, QueryConnectionsRequest.fromPartial(request), metadata);
  }

  clientConnections(request: DeepPartial<QueryClientConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryClientConnectionsResponse> {
    return this.rpc.unary(QueryClientConnectionsDesc, QueryClientConnectionsRequest.fromPartial(request), metadata);
  }

  connectionClientState(request: DeepPartial<QueryConnectionClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionClientStateResponse> {
    return this.rpc.unary(QueryConnectionClientStateDesc, QueryConnectionClientStateRequest.fromPartial(request), metadata);
  }

  connectionConsensusState(request: DeepPartial<QueryConnectionConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionConsensusStateResponse> {
    return this.rpc.unary(QueryConnectionConsensusStateDesc, QueryConnectionConsensusStateRequest.fromPartial(request), metadata);
  }

}