import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDenomAuthorityMetadata = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encoder: QueryDenomAuthorityMetadataRequest.encode,
  decoder: QueryDenomAuthorityMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomAuthorityMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomAuthorityMetadata = buildUseQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: createGetDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
export const createGetDenomsFromCreator = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encoder: QueryDenomsFromCreatorRequest.encode,
  decoder: QueryDenomsFromCreatorResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsFromCreator",
  getRpcInstance: getRpcInstance
});
export const useGetDenomsFromCreator = buildUseQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: createGetDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});