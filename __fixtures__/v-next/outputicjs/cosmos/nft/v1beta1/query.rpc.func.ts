import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
export const createGetBalance = (getRpcInstance: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encoder: QueryBalanceRequest.encode,
  decoder: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance",
  getRpcInstance: getRpcInstance
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetOwner = (getRpcInstance: RpcResolver) => buildQuery<QueryOwnerRequest, QueryOwnerResponse>({
  encoder: QueryOwnerRequest.encode,
  decoder: QueryOwnerResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Owner",
  getRpcInstance: getRpcInstance
});
export const useGetOwner = buildUseQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: createGetOwner,
  queryKeyPrefix: "OwnerQuery"
});
export const createGetSupply = (getRpcInstance: RpcResolver) => buildQuery<QuerySupplyRequest, QuerySupplyResponse>({
  encoder: QuerySupplyRequest.encode,
  decoder: QuerySupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Supply",
  getRpcInstance: getRpcInstance
});
export const useGetSupply = buildUseQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: createGetSupply,
  queryKeyPrefix: "SupplyQuery"
});
export const createGetNFTs = (getRpcInstance: RpcResolver) => buildQuery<QueryNFTsRequest, QueryNFTsResponse>({
  encoder: QueryNFTsRequest.encode,
  decoder: QueryNFTsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "NFTs",
  getRpcInstance: getRpcInstance
});
export const useGetNFTs = buildUseQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: createGetNFTs,
  queryKeyPrefix: "NFTsQuery"
});
export const createGetNFT = (getRpcInstance: RpcResolver) => buildQuery<QueryNFTRequest, QueryNFTResponse>({
  encoder: QueryNFTRequest.encode,
  decoder: QueryNFTResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "NFT",
  getRpcInstance: getRpcInstance
});
export const useGetNFT = buildUseQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: createGetNFT,
  queryKeyPrefix: "NFTQuery"
});
export const createGetClass = (getRpcInstance: RpcResolver) => buildQuery<QueryClassRequest, QueryClassResponse>({
  encoder: QueryClassRequest.encode,
  decoder: QueryClassResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Class",
  getRpcInstance: getRpcInstance
});
export const useGetClass = buildUseQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: createGetClass,
  queryKeyPrefix: "ClassQuery"
});
export const createGetClasses = (getRpcInstance: RpcResolver) => buildQuery<QueryClassesRequest, QueryClassesResponse>({
  encoder: QueryClassesRequest.encode,
  decoder: QueryClassesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Classes",
  getRpcInstance: getRpcInstance
});
export const useGetClasses = buildUseQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: createGetClasses,
  queryKeyPrefix: "ClassesQuery"
});