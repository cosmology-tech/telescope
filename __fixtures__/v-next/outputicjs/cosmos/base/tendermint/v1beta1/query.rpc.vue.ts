import { buildUseVueQuery } from "../../../../vue-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
import { createGetGetNodeInfo, createGetGetSyncing, createGetGetLatestBlock, createGetGetBlockByHeight, createGetGetLatestValidatorSet, createGetGetValidatorSetByHeight } from "./query.rpc.func.ts";
export const useGetGetNodeInfo = buildUseVueQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: createGetGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
export const useGetGetSyncing = buildUseVueQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: createGetGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
export const useGetGetLatestBlock = buildUseVueQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: createGetGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
export const useGetGetBlockByHeight = buildUseVueQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: createGetGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
export const useGetGetLatestValidatorSet = buildUseVueQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: createGetGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
export const useGetGetValidatorSetByHeight = buildUseVueQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: createGetGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});