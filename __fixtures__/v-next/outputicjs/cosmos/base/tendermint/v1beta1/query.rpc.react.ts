import { buildUseQuery } from "../../../../react-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
import { createGetGetNodeInfo, createGetGetSyncing, createGetGetLatestBlock, createGetGetBlockByHeight, createGetGetLatestValidatorSet, createGetGetValidatorSetByHeight } from "./query.rpc.func";
export const useGetGetNodeInfo = buildUseQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: createGetGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
export const useGetGetSyncing = buildUseQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: createGetGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
export const useGetGetLatestBlock = buildUseQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: createGetGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
export const useGetGetBlockByHeight = buildUseQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: createGetGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
export const useGetGetLatestValidatorSet = buildUseQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: createGetGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
export const useGetGetValidatorSetByHeight = buildUseQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: createGetGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});