import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { NodeInfo } from "../../../../tendermint/p2p/types";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
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

  /* GetNodeInfo queries the current node info. */
  async getNodeInfo(_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.get<GetNodeInfoResponse>(endpoint);
  }

  /* GetSyncing queries node syncing. */
  async getSyncing(_params: GetSyncingRequest = {}): Promise<GetSyncingResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.get<GetSyncingResponse>(endpoint);
  }

  /* GetLatestBlock returns the latest block. */
  async getLatestBlock(_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.get<GetLatestBlockResponse>(endpoint);
  }

  /* GetBlockByHeight queries block for given height. */
  async getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.get<GetBlockByHeightResponse>(endpoint);
  }

  /* GetLatestValidatorSet queries latest validator-set. */
  async getLatestValidatorSet(params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.get<GetLatestValidatorSetResponse>(endpoint, options);
  }

  /* GetValidatorSetByHeight queries validator-set at a given height. */
  async getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.get<GetValidatorSetByHeightResponse>(endpoint, options);
  }

}