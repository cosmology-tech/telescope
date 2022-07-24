import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import { LCDClient } from "@osmonauts/lcd";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* ClientState queries an IBC light client. */
  async clientState(params: QueryClientStateRequest): Promise<QueryClientStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.clientId !== "undefined") {
      options.params.client_id = params.clientId;
    }

    const endpoint = `ibc/core/client/v1/client_states/${params.client_id}`;
    return await this.request(endpoint, options);
  }

  /* ClientStates queries all the IBC light clients of a chain. */
  async clientStates(params: QueryClientStatesRequest): Promise<QueryClientStatesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `ibc/core/client/v1/client_states`;
    return await this.request(endpoint, options);
  }

  /* ConsensusState queries a consensus state associated with a client state at
  a given height. */
  async consensusState(params: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.clientId !== "undefined") {
      options.params.client_id = params.clientId;
    }

    if (typeof params?.revisionNumber !== "undefined") {
      options.params.revision_number = params.revisionNumber;
    }

    if (typeof params?.revisionHeight !== "undefined") {
      options.params.revision_height = params.revisionHeight;
    }

    if (typeof params?.latestHeight !== "undefined") {
      options.params.latest_height = params.latestHeight;
    }

    const endpoint = `ibc/core/client/v1/consensus_states/${params.client_id}/revision/${params.revision_number}height/${params.revision_height}`;
    return await this.request(endpoint, options);
  }

  /* ConsensusStates queries all the consensus state associated with a given
  client. */
  async consensusStates(params: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.clientId !== "undefined") {
      options.params.client_id = params.clientId;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `ibc/core/client/v1/consensus_states/${params.client_id}`;
    return await this.request(endpoint, options);
  }

  /* Status queries the status of an IBC client. */
  async clientStatus(params: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.clientId !== "undefined") {
      options.params.client_id = params.clientId;
    }

    const endpoint = `ibc/core/client/v1/client_status/${params.client_id}`;
    return await this.request(endpoint, options);
  }

  /* ClientParams queries all parameters of the ibc client. */
  async clientParams(params: QueryClientParamsRequest): Promise<QueryClientParamsResponse> {
    const endpoint = `ibc/client/v1/params`;
    return await this.request(endpoint);
  }

  /* UpgradedClientState queries an Upgraded IBC light client. */
  async upgradedClientState(params: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse> {
    const endpoint = `ibc/core/client/v1/upgraded_client_states`;
    return await this.request(endpoint);
  }

  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  async upgradedConsensusState(params: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
    const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
    return await this.request(endpoint);
  }

}