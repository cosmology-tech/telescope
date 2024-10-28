import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDenomAuthorityMetadata = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomAuthorityMetadata = buildUseQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  builderQueryFn: createGetDenomAuthorityMetadata,
  queryKeyPrefix: "DenomAuthorityMetadataQuery"
});
export const createGetDenomsFromCreator = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encode: QueryDenomsFromCreatorRequest.encode,
  decode: QueryDenomsFromCreatorResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomsFromCreator",
  getRpcInstance: getRpcInstance
});
export const useGetDenomsFromCreator = buildUseQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  builderQueryFn: createGetDenomsFromCreator,
  queryKeyPrefix: "DenomsFromCreatorQuery"
});