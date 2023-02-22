import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";

/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  GetNodeInfo(request?: DeepPartial<GetNodeInfoRequest>, metadata?: grpc.Metadata): Promise<GetNodeInfoResponse>;

  /** GetSyncing queries node syncing. */
  GetSyncing(request?: DeepPartial<GetSyncingRequest>, metadata?: grpc.Metadata): Promise<GetSyncingResponse>;

  /** GetLatestBlock returns the latest block. */
  GetLatestBlock(request?: DeepPartial<GetLatestBlockRequest>, metadata?: grpc.Metadata): Promise<GetLatestBlockResponse>;

  /** GetBlockByHeight queries block for given height. */
  GetBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>, metadata?: grpc.Metadata): Promise<GetBlockByHeightResponse>;

  /** GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet(request?: DeepPartial<GetLatestValidatorSetRequest>, metadata?: grpc.Metadata): Promise<GetLatestValidatorSetResponse>;

  /** GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight(request: DeepPartial<GetValidatorSetByHeightRequest>, metadata?: grpc.Metadata): Promise<GetValidatorSetByHeightResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
  }

  getNodeInfo(request: DeepPartial<GetNodeInfoRequest> = {}, metadata?: grpc.Metadata): Promise<GetNodeInfoResponse> {
    return this.rpc.unary(GetNodeInfoDesc, GetNodeInfoRequest.fromPartial(request), metadata);
  }

  getSyncing(request: DeepPartial<GetSyncingRequest> = {}, metadata?: grpc.Metadata): Promise<GetSyncingResponse> {
    return this.rpc.unary(GetSyncingDesc, GetSyncingRequest.fromPartial(request), metadata);
  }

  getLatestBlock(request: DeepPartial<GetLatestBlockRequest> = {}, metadata?: grpc.Metadata): Promise<GetLatestBlockResponse> {
    return this.rpc.unary(GetLatestBlockDesc, GetLatestBlockRequest.fromPartial(request), metadata);
  }

  getBlockByHeight(request: DeepPartial<GetBlockByHeightRequest>, metadata?: grpc.Metadata): Promise<GetBlockByHeightResponse> {
    return this.rpc.unary(GetBlockByHeightDesc, GetBlockByHeightRequest.fromPartial(request), metadata);
  }

  getLatestValidatorSet(request: DeepPartial<GetLatestValidatorSetRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<GetLatestValidatorSetResponse> {
    return this.rpc.unary(GetLatestValidatorSetDesc, GetLatestValidatorSetRequest.fromPartial(request), metadata);
  }

  getValidatorSetByHeight(request: DeepPartial<GetValidatorSetByHeightRequest>, metadata?: grpc.Metadata): Promise<GetValidatorSetByHeightResponse> {
    return this.rpc.unary(GetValidatorSetByHeightDesc, GetValidatorSetByHeightRequest.fromPartial(request), metadata);
  }

}