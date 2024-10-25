import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoRequestSDKType, QuerySigningInfoResponse, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosRequestSDKType, QuerySigningInfosResponse, QuerySigningInfosResponseSDKType } from "./query";
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