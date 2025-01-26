import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
import { createGetParams, createGetSigningInfo, createGetSigningInfos } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSigningInfo = buildUseQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: createGetSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
export const useGetSigningInfos = buildUseQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: createGetSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});