import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
export const createGetEpochInfos = (getRpcInstance: RpcResolver) => buildQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  encode: QueryEpochsInfoRequest.encode,
  decode: QueryEpochsInfoResponse.decode,
  service: "evmos.epochs.v1.EpochInfos",
  method: "EpochInfos",
  getRpcInstance: getRpcInstance
});
export const useGetEpochInfos = buildUseQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: createGetEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
export const createGetCurrentEpoch = (getRpcInstance: RpcResolver) => buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "evmos.epochs.v1.CurrentEpoch",
  method: "CurrentEpoch",
  getRpcInstance: getRpcInstance
});
export const useGetCurrentEpoch = buildUseQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: createGetCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});