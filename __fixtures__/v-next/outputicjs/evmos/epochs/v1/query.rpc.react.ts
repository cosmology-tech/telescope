import { buildUseQuery } from "../../../react-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
import { createGetEpochInfos, createGetCurrentEpoch } from "./query.rpc.func.ts";
export const useGetEpochInfos = buildUseQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: createGetEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
export const useGetCurrentEpoch = buildUseQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: createGetCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});