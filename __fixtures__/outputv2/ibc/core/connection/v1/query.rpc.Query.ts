import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as fm from "../../../../grpc-gateway";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
export class Query {
  static Connection(request: QueryConnectionRequest, initRequest?: fm.InitReq): Promise<QueryConnectionResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}?${fm.renderURLSearchParams(request, ["connection_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Connections(request: QueryConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ClientConnections(request: QueryClientConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryClientConnectionsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/client_connections/${request["client_id"]}?${fm.renderURLSearchParams(request, ["client_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ConnectionClientState(request: QueryConnectionClientStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionClientStateResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/client_state?${fm.renderURLSearchParams(request, ["connection_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ConnectionConsensusState(request: QueryConnectionConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/consensus_state/revision/{revision_number}/height/{revision_height}?${fm.renderURLSearchParams(request, ["connection_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}