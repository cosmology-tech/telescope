import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const createGetSigningInfo = (clientResolver?: RpcResolver) => buildQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  encode: QuerySigningInfoRequest.encode,
  decode: QuerySigningInfoResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "SigningInfo",
  clientResolver
});
export const createGetSigningInfos = (clientResolver?: RpcResolver) => buildQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  encode: QuerySigningInfosRequest.encode,
  decode: QuerySigningInfosResponse.decode,
  service: "cosmos.slashing.v1beta1.Query",
  method: "SigningInfos",
  clientResolver
});