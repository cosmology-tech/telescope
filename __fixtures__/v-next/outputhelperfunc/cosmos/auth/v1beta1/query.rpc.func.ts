import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsSDKType } from "./auth";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountRequestSDKType, QueryAccountResponse, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsRequestSDKType, QueryModuleAccountsResponse, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixRequestSDKType, Bech32PrefixResponse, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringRequestSDKType, AddressBytesToStringResponse, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesRequestSDKType, AddressStringToBytesResponse, AddressStringToBytesResponseSDKType } from "./query";
export const createGetAccounts = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encoder: QueryAccountsRequest.encode,
  decoder: QueryAccountsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Accounts",
  getRpcInstance: getRpcInstance
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const createGetAccount = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encoder: QueryAccountRequest.encode,
  decoder: QueryAccountResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Account",
  getRpcInstance: getRpcInstance
});
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
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
export const createGetModuleAccounts = (getRpcInstance: SigningClientResolver) => buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encoder: QueryModuleAccountsRequest.encode,
  decoder: QueryModuleAccountsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleAccounts",
  getRpcInstance: getRpcInstance
});
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: createGetModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
export const createGetBech32Prefix = (getRpcInstance: SigningClientResolver) => buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encoder: Bech32PrefixRequest.encode,
  decoder: Bech32PrefixResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Bech32Prefix",
  getRpcInstance: getRpcInstance
});
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: createGetBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
export const createGetAddressBytesToString = (getRpcInstance: SigningClientResolver) => buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encoder: AddressBytesToStringRequest.encode,
  decoder: AddressBytesToStringResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AddressBytesToString",
  getRpcInstance: getRpcInstance
});
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: createGetAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
export const createGetAddressStringToBytes = (getRpcInstance: SigningClientResolver) => buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encoder: AddressStringToBytesRequest.encode,
  decoder: AddressStringToBytesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AddressStringToBytes",
  getRpcInstance: getRpcInstance
});
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: createGetAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});