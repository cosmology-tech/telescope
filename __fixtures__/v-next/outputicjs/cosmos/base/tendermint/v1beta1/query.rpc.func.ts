import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
export const createGetGetNodeInfo = (getRpcInstance: RpcResolver) => buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.GetNodeInfo",
  method: "GetNodeInfo",
  getRpcInstance: getRpcInstance
});
export const useGetGetNodeInfo = buildUseQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: createGetGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
export const createGetGetSyncing = (getRpcInstance: RpcResolver) => buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.GetSyncing",
  method: "GetSyncing",
  getRpcInstance: getRpcInstance
});
export const useGetGetSyncing = buildUseQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: createGetGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
export const createGetGetLatestBlock = (getRpcInstance: RpcResolver) => buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.GetLatestBlock",
  method: "GetLatestBlock",
  getRpcInstance: getRpcInstance
});
export const useGetGetLatestBlock = buildUseQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: createGetGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
export const createGetGetBlockByHeight = (getRpcInstance: RpcResolver) => buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.GetBlockByHeight",
  method: "GetBlockByHeight",
  getRpcInstance: getRpcInstance
});
export const useGetGetBlockByHeight = buildUseQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: createGetGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
export const createGetGetLatestValidatorSet = (getRpcInstance: RpcResolver) => buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.GetLatestValidatorSet",
  method: "GetLatestValidatorSet",
  getRpcInstance: getRpcInstance
});
export const useGetGetLatestValidatorSet = buildUseQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: createGetGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
export const createGetGetValidatorSetByHeight = (getRpcInstance: RpcResolver) => buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeight",
  method: "GetValidatorSetByHeight",
  getRpcInstance: getRpcInstance
});
export const useGetGetValidatorSetByHeight = buildUseQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: createGetGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});