import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export const createGetAccounts = (clientResolver: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Accounts",
  clientResolver
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const createGetAccount = (clientResolver: RpcResolver) => buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Account",
  clientResolver
});
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const createGetParams = (clientResolver: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetModuleAccounts = (clientResolver: RpcResolver) => buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encode: QueryModuleAccountsRequest.encode,
  decode: QueryModuleAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccounts",
  clientResolver
});
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: createGetModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
export const createGetBech32Prefix = (clientResolver: RpcResolver) => buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encode: Bech32PrefixRequest.encode,
  decode: Bech32PrefixResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Bech32Prefix",
  clientResolver
});
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: createGetBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
export const createGetAddressBytesToString = (clientResolver: RpcResolver) => buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encode: AddressBytesToStringRequest.encode,
  decode: AddressBytesToStringResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressBytesToString",
  clientResolver
});
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: createGetAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
export const createGetAddressStringToBytes = (clientResolver: RpcResolver) => buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encode: AddressStringToBytesRequest.encode,
  decode: AddressStringToBytesResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressStringToBytes",
  clientResolver
});
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: createGetAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});