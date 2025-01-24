import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
import { createGetBalance, createGetOwner, createGetSupply, createGetNFTs, createGetNFT, createGetClass, createGetClasses } from "./query.rpc.func.ts";
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetOwner = buildUseVueQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: createGetOwner,
  queryKeyPrefix: "OwnerQuery"
});
export const useGetSupply = buildUseVueQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: createGetSupply,
  queryKeyPrefix: "SupplyQuery"
});
export const useGetNFTs = buildUseVueQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: createGetNFTs,
  queryKeyPrefix: "NFTsQuery"
});
export const useGetNFT = buildUseVueQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: createGetNFT,
  queryKeyPrefix: "NFTQuery"
});
export const useGetClass = buildUseVueQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: createGetClass,
  queryKeyPrefix: "ClassQuery"
});
export const useGetClasses = buildUseVueQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: createGetClasses,
  queryKeyPrefix: "ClassesQuery"
});