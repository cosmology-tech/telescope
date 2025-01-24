import { buildUseVueQuery } from "../../../vue-query";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
import { createGetEpochInfos, createGetCurrentEpoch } from "./query.rpc.func.ts";
export const useGetEpochInfos = buildUseVueQuery<QueryEpochsInfoRequest, QueryEpochsInfoResponse>({
  builderQueryFn: createGetEpochInfos,
  queryKeyPrefix: "EpochInfosQuery"
});
export const useGetCurrentEpoch = buildUseVueQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  builderQueryFn: createGetCurrentEpoch,
  queryKeyPrefix: "CurrentEpochQuery"
});