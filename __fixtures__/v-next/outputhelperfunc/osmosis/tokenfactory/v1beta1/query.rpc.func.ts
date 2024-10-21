import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { SigningClientResolver } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataRequestSDKType, QueryDenomAuthorityMetadataResponse, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorRequestSDKType, QueryDenomsFromCreatorResponse, QueryDenomsFromCreatorResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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
export const createGetDenomAuthorityMetadata = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse>({
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
export const createGetDenomsFromCreator = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>({
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