import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetSigningInfo = (getRpcInstance: RpcResolver) => buildQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  encode: QuerySigningInfoRequest.encode,
  decode: QuerySigningInfoResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "SigningInfo",
  getRpcInstance: getRpcInstance
});
export const useGetSigningInfo = buildUseQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: createGetSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
export const createGetSigningInfos = (getRpcInstance: RpcResolver) => buildQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  encode: QuerySigningInfosRequest.encode,
  decode: QuerySigningInfosResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "SigningInfos",
  getRpcInstance: getRpcInstance
});
export const useGetSigningInfos = buildUseQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: createGetSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});