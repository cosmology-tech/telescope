import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
import { createGetAccounts, createGetAccount, createGetParams, createGetModuleAccounts, createGetBech32Prefix, createGetAddressBytesToString, createGetAddressStringToBytes } from "./query.rpc.func.ts";
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: createGetModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: createGetBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: createGetAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: createGetAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});