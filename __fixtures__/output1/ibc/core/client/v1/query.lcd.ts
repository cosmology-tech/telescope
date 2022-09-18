import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
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

  /* ClientState queries an IBC light client. */
  async clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponse> {
    const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`;
    return await this.get<QueryClientStateResponse>(endpoint);
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
    return await this.get<QueryClientStatesResponse>(endpoint, options);
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
    return await this.get<QueryConsensusStateResponse>(endpoint, options);
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
    return await this.get<QueryConsensusStatesResponse>(endpoint, options);
  }

  /* Status queries the status of an IBC client. */
  async clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
    const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`;
    return await this.get<QueryClientStatusResponse>(endpoint);
  }

  /* ClientParams queries all parameters of the ibc client. */
  async clientParams(_params: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponse> {
    const endpoint = `ibc/client/v1/params`;
    return await this.get<QueryClientParamsResponse>(endpoint);
  }

  /* UpgradedClientState queries an Upgraded IBC light client. */
  async upgradedClientState(_params: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponse> {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return await this.get<QueryUpgradedClientStateResponse>(endpoint);
  }

  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  async upgradedConsensusState(_params: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponse> {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return await this.get<QueryUpgradedConsensusStateResponse>(endpoint);
  }

}