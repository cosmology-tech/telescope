import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import * as fm from "../../../../grpc-gateway";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
export class Query {
  // ClientState queries an IBC light client.
  static ClientState(request: QueryClientStateRequest, initRequest?: fm.InitReq): Promise<QueryClientStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/client_states/${request["client_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["client_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  // ClientStates queries all the IBC light clients of a chain.
  static ClientStates(request: QueryClientStatesRequest, initRequest?: fm.InitReq): Promise<QueryClientStatesResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/client_states?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // ConsensusState queries a consensus state associated with a client state at
 a given height.
  static ConsensusState(request: QueryConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}/revision/{revision_number}/height/{revision_height}?${fm.renderURLSearchParams({ ...request
    }, ["client_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  // ConsensusStates queries all the consensus state associated with a given
 client.
  static ConsensusStates(request: QueryConsensusStatesRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStatesResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["client_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  // Status queries the status of an IBC client.
  static ClientStatus(request: QueryClientStatusRequest, initRequest?: fm.InitReq): Promise<QueryClientStatusResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/client_status/${request["client_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["client_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  // ClientParams queries all parameters of the ibc client.
  static ClientParams(request: QueryClientParamsRequest, initRequest?: fm.InitReq): Promise<QueryClientParamsResponse> {
    return fm.fetchReq(`/ibc/client/v1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // UpgradedClientState queries an Upgraded IBC light client.
  static UpgradedClientState(request: QueryUpgradedClientStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedClientStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/upgraded_client_states?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  // UpgradedConsensusState queries an Upgraded IBC consensus state.
  static UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/upgraded_consensus_states?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}