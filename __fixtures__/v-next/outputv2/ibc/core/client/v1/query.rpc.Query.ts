import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  ClientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse>;

  /** ClientStates queries all the IBC light clients of a chain. */
  ClientStates(request?: DeepPartial<QueryClientStatesRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse>;

  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  ConsensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse>;

  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  ConsensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse>;

  /** Status queries the status of an IBC client. */
  ClientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse>;

  /** ClientParams queries all parameters of the ibc client. */
  ClientParams(request?: DeepPartial<QueryClientParamsRequest>, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse>;

  /** UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState(request?: DeepPartial<QueryUpgradedClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse>;

  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState(request?: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }

  clientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse> {
    return this.rpc.unary(QueryClientStateDesc, QueryClientStateRequest.fromPartial(request), metadata);
  }

  clientStates(request: DeepPartial<QueryClientStatesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse> {
    return this.rpc.unary(QueryClientStatesDesc, QueryClientStatesRequest.fromPartial(request), metadata);
  }

  consensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse> {
    return this.rpc.unary(QueryConsensusStateDesc, QueryConsensusStateRequest.fromPartial(request), metadata);
  }

  consensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse> {
    return this.rpc.unary(QueryConsensusStatesDesc, QueryConsensusStatesRequest.fromPartial(request), metadata);
  }

  clientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse> {
    return this.rpc.unary(QueryClientStatusDesc, QueryClientStatusRequest.fromPartial(request), metadata);
  }

  clientParams(request: DeepPartial<QueryClientParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse> {
    return this.rpc.unary(QueryClientParamsDesc, QueryClientParamsRequest.fromPartial(request), metadata);
  }

  upgradedClientState(request: DeepPartial<QueryUpgradedClientStateRequest> = {}, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse> {
    return this.rpc.unary(QueryUpgradedClientStateDesc, QueryUpgradedClientStateRequest.fromPartial(request), metadata);
  }

  upgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest> = {}, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse> {
    return this.rpc.unary(QueryUpgradedConsensusStateDesc, QueryUpgradedConsensusStateRequest.fromPartial(request), metadata);
  }

}