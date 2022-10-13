import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  /* ClientState queries an IBC light client. */


  async clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponse> {
    const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`;
    return await this.req.get<QueryClientStateResponse>(endpoint);
  }
  /* ClientStates queries all the IBC light clients of a chain. */


  async clientStates(params: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/client/v1/client_states`;
    return await this.req.get<QueryClientStatesResponse>(endpoint, options);
  }
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */


  async consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.latestHeight !== "undefined") {
      options.params.latest_height = params.latestHeight;
    }

    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.req.get<QueryConsensusStateResponse>(endpoint, options);
  }
  /* ConsensusStates queries all the consensus state associated with a given
   client. */


  async consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}`;
    return await this.req.get<QueryConsensusStatesResponse>(endpoint, options);
  }
  /* Status queries the status of an IBC client. */


  async clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
    const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`;
    return await this.req.get<QueryClientStatusResponse>(endpoint);
  }
  /* ClientParams queries all parameters of the ibc client. */


  async clientParams(_params: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponse> {
    const endpoint = `ibc/client/v1/params`;
    return await this.req.get<QueryClientParamsResponse>(endpoint);
  }
  /* UpgradedClientState queries an Upgraded IBC light client. */


  async upgradedClientState(_params: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponse> {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return await this.req.get<QueryUpgradedClientStateResponse>(endpoint);
  }
  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */


  async upgradedConsensusState(_params: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponse> {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return await this.req.get<QueryUpgradedConsensusStateResponse>(endpoint);
  }

}