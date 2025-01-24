import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
export const createGetGetNodeInfo = (clientResolver?: RpcResolver) => buildQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  encode: GetNodeInfoRequest.encode,
  decode: GetNodeInfoResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetNodeInfo",
  clientResolver
});
export const createGetGetSyncing = (clientResolver?: RpcResolver) => buildQuery<GetSyncingRequest, GetSyncingResponse>({
  encode: GetSyncingRequest.encode,
  decode: GetSyncingResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetSyncing",
  clientResolver
});
export const createGetGetLatestBlock = (clientResolver?: RpcResolver) => buildQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  encode: GetLatestBlockRequest.encode,
  decode: GetLatestBlockResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestBlock",
  clientResolver
});
export const createGetGetBlockByHeight = (clientResolver?: RpcResolver) => buildQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  encode: GetBlockByHeightRequest.encode,
  decode: GetBlockByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetBlockByHeight",
  clientResolver
});
export const createGetGetLatestValidatorSet = (clientResolver?: RpcResolver) => buildQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  encode: GetLatestValidatorSetRequest.encode,
  decode: GetLatestValidatorSetResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetLatestValidatorSet",
  clientResolver
});
export const createGetGetValidatorSetByHeight = (clientResolver?: RpcResolver) => buildQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  encode: GetValidatorSetByHeightRequest.encode,
  decode: GetValidatorSetByHeightResponse.decode,
  service: "cosmos.base.tendermint.v1beta1.Service",
  method: "GetValidatorSetByHeight",
  clientResolver
});