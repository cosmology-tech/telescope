import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
export const createGetContractInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  encoder: QueryContractInfoRequest.encode,
  decoder: QueryContractInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ContractInfo",
  getRpcInstance: getRpcInstance
});
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: createGetContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const createGetContractHistory = (getRpcInstance: RpcResolver) => buildQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  encoder: QueryContractHistoryRequest.encode,
  decoder: QueryContractHistoryResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ContractHistory",
  getRpcInstance: getRpcInstance
});
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: createGetContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const createGetContractsByCode = (getRpcInstance: RpcResolver) => buildQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  encoder: QueryContractsByCodeRequest.encode,
  decoder: QueryContractsByCodeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ContractsByCode",
  getRpcInstance: getRpcInstance
});
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: createGetContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const createGetAllContractState = (getRpcInstance: RpcResolver) => buildQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  encoder: QueryAllContractStateRequest.encode,
  decoder: QueryAllContractStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllContractState",
  getRpcInstance: getRpcInstance
});
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: createGetAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const createGetRawContractState = (getRpcInstance: RpcResolver) => buildQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  encoder: QueryRawContractStateRequest.encode,
  decoder: QueryRawContractStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "RawContractState",
  getRpcInstance: getRpcInstance
});
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: createGetRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const createGetSmartContractState = (getRpcInstance: RpcResolver) => buildQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  encoder: QuerySmartContractStateRequest.encode,
  decoder: QuerySmartContractStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SmartContractState",
  getRpcInstance: getRpcInstance
});
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: createGetSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const createGetCode = (getRpcInstance: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encoder: QueryCodeRequest.encode,
  decoder: QueryCodeResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Code",
  getRpcInstance: getRpcInstance
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const createGetCodes = (getRpcInstance: RpcResolver) => buildQuery<QueryCodesRequest, QueryCodesResponse>({
  encoder: QueryCodesRequest.encode,
  decoder: QueryCodesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Codes",
  getRpcInstance: getRpcInstance
});
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: createGetCodes,
  queryKeyPrefix: "CodesQuery"
});
export const createGetPinnedCodes = (getRpcInstance: RpcResolver) => buildQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  encoder: QueryPinnedCodesRequest.encode,
  decoder: QueryPinnedCodesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PinnedCodes",
  getRpcInstance: getRpcInstance
});
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: createGetPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});