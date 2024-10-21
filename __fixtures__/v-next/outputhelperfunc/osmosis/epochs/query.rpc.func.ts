import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { RpcResolver, buildQuery } from "../../helper-func-types";
import { buildUseQuery } from "../../react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
export const createGetEpochInfos = (getRpcInstance: RpcResolver) => buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encoder: QueryEpochsInfoRequest.encode,
  decoder: QueryEpochsInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "EpochInfos",
  getRpcInstance: getRpcInstance
});
export const useGetEpochInfos = buildUseQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: createGetEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
export const createGetCurrentEpoch = (getRpcInstance: RpcResolver) => buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encoder: QueryCurrentEpochRequest.encode,
  decoder: QueryCurrentEpochResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CurrentEpoch",
  getRpcInstance: getRpcInstance
});
export const useGetCurrentEpoch = buildUseQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: createGetCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});