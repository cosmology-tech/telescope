import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import * as fm from "../../../../grpc-gateway";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";
export class Service {
  /** GetNodeInfo queries the current node info. */
  static GetNodeInfo(request: GetNodeInfoRequest, initRequest?: fm.InitReq): Promise<GetNodeInfoResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/node_info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetSyncing queries node syncing. */
  static GetSyncing(request: GetSyncingRequest, initRequest?: fm.InitReq): Promise<GetSyncingResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/syncing?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetLatestBlock returns the latest block. */
  static GetLatestBlock(request: GetLatestBlockRequest, initRequest?: fm.InitReq): Promise<GetLatestBlockResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/latest?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetBlockByHeight queries block for given height. */
  static GetBlockByHeight(request: GetBlockByHeightRequest, initRequest?: fm.InitReq): Promise<GetBlockByHeightResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetLatestValidatorSet queries latest validator-set. */
  static GetLatestValidatorSet(request: GetLatestValidatorSetRequest, initRequest?: fm.InitReq): Promise<GetLatestValidatorSetResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/latest?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  static GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest, initRequest?: fm.InitReq): Promise<GetValidatorSetByHeightResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** GetNodeInfo queries the current node info. */
  async GetNodeInfo(req: GetNodeInfoRequest, headers?: HeadersInit): Promise<GetNodeInfoResponse> {
    return Service.GetNodeInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetSyncing queries node syncing. */
  async GetSyncing(req: GetSyncingRequest, headers?: HeadersInit): Promise<GetSyncingResponse> {
    return Service.GetSyncing(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetLatestBlock returns the latest block. */
  async GetLatestBlock(req: GetLatestBlockRequest, headers?: HeadersInit): Promise<GetLatestBlockResponse> {
    return Service.GetLatestBlock(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetBlockByHeight queries block for given height. */
  async GetBlockByHeight(req: GetBlockByHeightRequest, headers?: HeadersInit): Promise<GetBlockByHeightResponse> {
    return Service.GetBlockByHeight(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetLatestValidatorSet queries latest validator-set. */
  async GetLatestValidatorSet(req: GetLatestValidatorSetRequest, headers?: HeadersInit): Promise<GetLatestValidatorSetResponse> {
    return Service.GetLatestValidatorSet(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  async GetValidatorSetByHeight(req: GetValidatorSetByHeightRequest, headers?: HeadersInit): Promise<GetValidatorSetByHeightResponse> {
    return Service.GetValidatorSetByHeight(req, {
      headers,
      pathPrefix: this.url
    });
  }
}