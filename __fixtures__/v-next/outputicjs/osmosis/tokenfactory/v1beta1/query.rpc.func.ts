import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const createGetDenomAuthorityMetadata = (clientResolver?: RpcResolver) => buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata",
  clientResolver
});
export const createGetDenomsFromCreator = (clientResolver?: RpcResolver) => buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
  encode: QueryDenomsFromCreatorRequest.encode,
  decode: QueryDenomsFromCreatorResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomsFromCreator",
  clientResolver
});