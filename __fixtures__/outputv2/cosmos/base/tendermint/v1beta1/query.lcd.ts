import { PageRequest, PageRequestAmino, PageRequestAminoType, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseAminoType, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyAmino, AnyAminoType, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDAmino, BlockIDAminoType, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockAmino, BlockAminoType, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoAmino, NodeInfoAminoType, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { GetNodeInfoRequest, GetNodeInfoRequestAmino, GetNodeInfoRequestAminoType, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseAmino, GetNodeInfoResponseAminoType, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestAmino, GetSyncingRequestAminoType, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseAmino, GetSyncingResponseAminoType, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestAmino, GetLatestBlockRequestAminoType, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseAmino, GetLatestBlockResponseAminoType, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestAmino, GetBlockByHeightRequestAminoType, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseAmino, GetBlockByHeightResponseAminoType, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestAmino, GetLatestValidatorSetRequestAminoType, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseAmino, GetLatestValidatorSetResponseAminoType, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestAmino, GetValidatorSetByHeightRequestAminoType, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseAmino, GetValidatorSetByHeightResponseAminoType, GetValidatorSetByHeightResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
  }

  /* GetNodeInfo queries the current node info. */
  async getNodeInfo(_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.req.get<GetNodeInfoResponseSDKType>(endpoint);
  }

  /* GetSyncing queries node syncing. */
  async getSyncing(_params: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.req.get<GetSyncingResponseSDKType>(endpoint);
  }

  /* GetLatestBlock returns the latest block. */
  async getLatestBlock(_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.req.get<GetLatestBlockResponseSDKType>(endpoint);
  }

  /* GetBlockByHeight queries block for given height. */
  async getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.req.get<GetBlockByHeightResponseSDKType>(endpoint);
  }

  /* GetLatestValidatorSet queries latest validator-set. */
  async getLatestValidatorSet(params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.req.get<GetLatestValidatorSetResponseSDKType>(endpoint, options);
  }

  /* GetValidatorSetByHeight queries validator-set at a given height. */
  async getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.req.get<GetValidatorSetByHeightResponseSDKType>(endpoint, options);
  }

}