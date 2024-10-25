import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTSDKType, Class, ClassSDKType } from "./nft";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryOwnerRequest, QueryOwnerRequestSDKType, QueryOwnerResponse, QueryOwnerResponseSDKType, QuerySupplyRequest, QuerySupplyRequestSDKType, QuerySupplyResponse, QuerySupplyResponseSDKType, QueryNFTsRequest, QueryNFTsRequestSDKType, QueryNFTsResponse, QueryNFTsResponseSDKType, QueryNFTRequest, QueryNFTRequestSDKType, QueryNFTResponse, QueryNFTResponseSDKType, QueryClassRequest, QueryClassRequestSDKType, QueryClassResponse, QueryClassResponseSDKType, QueryClassesRequest, QueryClassesRequestSDKType, QueryClassesResponse, QueryClassesResponseSDKType } from "./query";
export const createGetBalance = (getRpcInstance: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Balance",
  getRpcInstance: getRpcInstance
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetOwner = (getRpcInstance: RpcResolver) => buildQuery<QueryOwnerRequest, QueryOwnerResponse>({
  encode: QueryOwnerRequest.encode,
  decode: QueryOwnerResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Owner",
  getRpcInstance: getRpcInstance
});
export const useGetOwner = buildUseQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: createGetOwner,
  queryKeyPrefix: "OwnerQuery"
});
export const createGetSupply = (getRpcInstance: RpcResolver) => buildQuery<QuerySupplyRequest, QuerySupplyResponse>({
  encode: QuerySupplyRequest.encode,
  decode: QuerySupplyResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Supply",
  getRpcInstance: getRpcInstance
});
export const useGetSupply = buildUseQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: createGetSupply,
  queryKeyPrefix: "SupplyQuery"
});
export const createGetNFTs = (getRpcInstance: RpcResolver) => buildQuery<QueryNFTsRequest, QueryNFTsResponse>({
  encode: QueryNFTsRequest.encode,
  decode: QueryNFTsResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFTs",
  getRpcInstance: getRpcInstance
});
export const useGetNFTs = buildUseQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: createGetNFTs,
  queryKeyPrefix: "NFTsQuery"
});
export const createGetNFT = (getRpcInstance: RpcResolver) => buildQuery<QueryNFTRequest, QueryNFTResponse>({
  encode: QueryNFTRequest.encode,
  decode: QueryNFTResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFT",
  getRpcInstance: getRpcInstance
});
export const useGetNFT = buildUseQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: createGetNFT,
  queryKeyPrefix: "NFTQuery"
});
export const createGetClass = (getRpcInstance: RpcResolver) => buildQuery<QueryClassRequest, QueryClassResponse>({
  encode: QueryClassRequest.encode,
  decode: QueryClassResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Class",
  getRpcInstance: getRpcInstance
});
export const useGetClass = buildUseQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: createGetClass,
  queryKeyPrefix: "ClassQuery"
});
export const createGetClasses = (getRpcInstance: RpcResolver) => buildQuery<QueryClassesRequest, QueryClassesResponse>({
  encode: QueryClassesRequest.encode,
  decode: QueryClassesResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Classes",
  getRpcInstance: getRpcInstance
});
export const useGetClasses = buildUseQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: createGetClasses,
  queryKeyPrefix: "ClassesQuery"
});