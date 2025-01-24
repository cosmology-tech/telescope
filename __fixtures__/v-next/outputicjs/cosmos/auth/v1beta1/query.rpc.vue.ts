import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
import { createGetAccounts, createGetAccount, createGetParams, createGetModuleAccounts, createGetBech32Prefix, createGetAddressBytesToString, createGetAddressStringToBytes } from "./query.rpc.func.ts";
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetModuleAccounts = buildUseVueQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: createGetModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
export const useGetBech32Prefix = buildUseVueQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: createGetBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
export const useGetAddressBytesToString = buildUseVueQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: createGetAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
export const useGetAddressStringToBytes = buildUseVueQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: createGetAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});