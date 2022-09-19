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
  async clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`;
    return await this.get<QueryClientStateResponseSDKType>(endpoint);
  }

  /* ClientStates queries all the IBC light clients of a chain. */
  async clientStates(params: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/client/v1/client_states`;
    return await this.get<QueryClientStatesResponseSDKType>(endpoint, options);
  }

  /* ConsensusState queries a consensus state associated with a client state at
  a given height. */
  async consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.latestHeight !== "undefined") {
      options.params.latest_height = params.latestHeight;
    }

    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.get<QueryConsensusStateResponseSDKType>(endpoint, options);
  }

  /* ConsensusStates queries all the consensus state associated with a given
  client. */
  async consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}`;
    return await this.get<QueryConsensusStatesResponseSDKType>(endpoint, options);
  }

  /* Status queries the status of an IBC client. */
  async clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponseSDKType> {
    const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`;
    return await this.get<QueryClientStatusResponseSDKType>(endpoint);
  }

  /* ClientParams queries all parameters of the ibc client. */
  async clientParams(_params: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponseSDKType> {
    const endpoint = `ibc/client/v1/params`;
    return await this.get<QueryClientParamsResponseSDKType>(endpoint);
  }

  /* UpgradedClientState queries an Upgraded IBC light client. */
  async upgradedClientState(_params: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return await this.get<QueryUpgradedClientStateResponseSDKType>(endpoint);
  }

  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  async upgradedConsensusState(_params: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponseSDKType> {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return await this.get<QueryUpgradedConsensusStateResponseSDKType>(endpoint);
  }

}