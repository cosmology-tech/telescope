import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
import { createGetParams, createGetSigningInfo, createGetSigningInfos } from "./query.rpc.func.ts";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSigningInfo = buildUseVueQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: createGetSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
export const useGetSigningInfos = buildUseVueQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: createGetSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});