import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { SigningClientResolver } from "../../../helpers";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
export const createGetEpochInfos = (getRpcInstance: SigningClientResolver) => buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
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
export const createGetCurrentEpoch = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
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