import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
export const createGetContractInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  encode: QueryContractInfoRequest.encode,
  decode: QueryContractInfoResponse.decode,
  service: "cosmwasm.wasm.v1.ContractInfo",
  method: "ContractInfo",
  getRpcInstance: getRpcInstance
});
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: createGetContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const createGetContractHistory = (getRpcInstance: RpcResolver) => buildQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  encode: QueryContractHistoryRequest.encode,
  decode: QueryContractHistoryResponse.decode,
  service: "cosmwasm.wasm.v1.ContractHistory",
  method: "ContractHistory",
  getRpcInstance: getRpcInstance
});
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: createGetContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const createGetContractsByCode = (getRpcInstance: RpcResolver) => buildQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  encode: QueryContractsByCodeRequest.encode,
  decode: QueryContractsByCodeResponse.decode,
  service: "cosmwasm.wasm.v1.ContractsByCode",
  method: "ContractsByCode",
  getRpcInstance: getRpcInstance
});
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: createGetContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const createGetAllContractState = (getRpcInstance: RpcResolver) => buildQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  encode: QueryAllContractStateRequest.encode,
  decode: QueryAllContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.AllContractState",
  method: "AllContractState",
  getRpcInstance: getRpcInstance
});
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: createGetAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const createGetRawContractState = (getRpcInstance: RpcResolver) => buildQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  encode: QueryRawContractStateRequest.encode,
  decode: QueryRawContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.RawContractState",
  method: "RawContractState",
  getRpcInstance: getRpcInstance
});
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: createGetRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const createGetSmartContractState = (getRpcInstance: RpcResolver) => buildQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  encode: QuerySmartContractStateRequest.encode,
  decode: QuerySmartContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.SmartContractState",
  method: "SmartContractState",
  getRpcInstance: getRpcInstance
});
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: createGetSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const createGetCode = (getRpcInstance: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Code",
  method: "Code",
  getRpcInstance: getRpcInstance
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const createGetCodes = (getRpcInstance: RpcResolver) => buildQuery<QueryCodesRequest, QueryCodesResponse>({
  encode: QueryCodesRequest.encode,
  decode: QueryCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Codes",
  method: "Codes",
  getRpcInstance: getRpcInstance
});
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: createGetCodes,
  queryKeyPrefix: "CodesQuery"
});
export const createGetPinnedCodes = (getRpcInstance: RpcResolver) => buildQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  encode: QueryPinnedCodesRequest.encode,
  decode: QueryPinnedCodesResponse.decode,
  service: "cosmwasm.wasm.v1.PinnedCodes",
  method: "PinnedCodes",
  getRpcInstance: getRpcInstance
});
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: createGetPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});