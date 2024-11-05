import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
export const createGetBalance = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Balance",
  clientResolver
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetOwner = (clientResolver?: RpcResolver) => buildQuery<QueryOwnerRequest, QueryOwnerResponse>({
  encode: QueryOwnerRequest.encode,
  decode: QueryOwnerResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Owner",
  clientResolver
});
export const useGetOwner = buildUseQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: createGetOwner,
  queryKeyPrefix: "OwnerQuery"
});
export const createGetSupply = (clientResolver?: RpcResolver) => buildQuery<QuerySupplyRequest, QuerySupplyResponse>({
  encode: QuerySupplyRequest.encode,
  decode: QuerySupplyResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Supply",
  clientResolver
});
export const useGetSupply = buildUseQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: createGetSupply,
  queryKeyPrefix: "SupplyQuery"
});
export const createGetNFTs = (clientResolver?: RpcResolver) => buildQuery<QueryNFTsRequest, QueryNFTsResponse>({
  encode: QueryNFTsRequest.encode,
  decode: QueryNFTsResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFTs",
  clientResolver
});
export const useGetNFTs = buildUseQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: createGetNFTs,
  queryKeyPrefix: "NFTsQuery"
});
export const createGetNFT = (clientResolver?: RpcResolver) => buildQuery<QueryNFTRequest, QueryNFTResponse>({
  encode: QueryNFTRequest.encode,
  decode: QueryNFTResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFT",
  clientResolver
});
export const useGetNFT = buildUseQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: createGetNFT,
  queryKeyPrefix: "NFTQuery"
});
export const createGetClass = (clientResolver?: RpcResolver) => buildQuery<QueryClassRequest, QueryClassResponse>({
  encode: QueryClassRequest.encode,
  decode: QueryClassResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Class",
  clientResolver
});
export const useGetClass = buildUseQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: createGetClass,
  queryKeyPrefix: "ClassQuery"
});
export const createGetClasses = (clientResolver?: RpcResolver) => buildQuery<QueryClassesRequest, QueryClassesResponse>({
  encode: QueryClassesRequest.encode,
  decode: QueryClassesResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Classes",
  clientResolver
});
export const useGetClasses = buildUseQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: createGetClasses,
  queryKeyPrefix: "ClassesQuery"
});