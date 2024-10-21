import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";
export const createGetGetNodeInfo = (getRpcInstance: RpcResolver) => buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encoder: GetNodeInfoRequest.encode,
  decoder: GetNodeInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetNodeInfo",
  getRpcInstance: getRpcInstance
});
export const useGetGetNodeInfo = buildUseQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: createGetGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
export const createGetGetSyncing = (getRpcInstance: RpcResolver) => buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encoder: GetSyncingRequest.encode,
  decoder: GetSyncingResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetSyncing",
  getRpcInstance: getRpcInstance
});
export const useGetGetSyncing = buildUseQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: createGetGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
export const createGetGetLatestBlock = (getRpcInstance: RpcResolver) => buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encoder: GetLatestBlockRequest.encode,
  decoder: GetLatestBlockResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetLatestBlock",
  getRpcInstance: getRpcInstance
});
export const useGetGetLatestBlock = buildUseQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: createGetGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
export const createGetGetBlockByHeight = (getRpcInstance: RpcResolver) => buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encoder: GetBlockByHeightRequest.encode,
  decoder: GetBlockByHeightResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetBlockByHeight",
  getRpcInstance: getRpcInstance
});
export const useGetGetBlockByHeight = buildUseQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: createGetGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
export const createGetGetLatestValidatorSet = (getRpcInstance: RpcResolver) => buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encoder: GetLatestValidatorSetRequest.encode,
  decoder: GetLatestValidatorSetResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetLatestValidatorSet",
  getRpcInstance: getRpcInstance
});
export const useGetGetLatestValidatorSet = buildUseQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: createGetGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
export const createGetGetValidatorSetByHeight = (getRpcInstance: RpcResolver) => buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encoder: GetValidatorSetByHeightRequest.encode,
  decoder: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GetValidatorSetByHeight",
  getRpcInstance: getRpcInstance
});
export const useGetGetValidatorSetByHeight = buildUseQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: createGetGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});