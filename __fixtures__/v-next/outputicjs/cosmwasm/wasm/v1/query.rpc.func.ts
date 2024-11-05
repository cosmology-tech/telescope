import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
export const createGetContractInfo = (clientResolver?: RpcResolver) => buildQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  encode: QueryContractInfoRequest.encode,
  decode: QueryContractInfoResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractInfo",
  clientResolver
});
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: createGetContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const createGetContractHistory = (clientResolver?: RpcResolver) => buildQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  encode: QueryContractHistoryRequest.encode,
  decode: QueryContractHistoryResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractHistory",
  clientResolver
});
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: createGetContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const createGetContractsByCode = (clientResolver?: RpcResolver) => buildQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  encode: QueryContractsByCodeRequest.encode,
  decode: QueryContractsByCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "ContractsByCode",
  clientResolver
});
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: createGetContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const createGetAllContractState = (clientResolver?: RpcResolver) => buildQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  encode: QueryAllContractStateRequest.encode,
  decode: QueryAllContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "AllContractState",
  clientResolver
});
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: createGetAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const createGetRawContractState = (clientResolver?: RpcResolver) => buildQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  encode: QueryRawContractStateRequest.encode,
  decode: QueryRawContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "RawContractState",
  clientResolver
});
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: createGetRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const createGetSmartContractState = (clientResolver?: RpcResolver) => buildQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  encode: QuerySmartContractStateRequest.encode,
  decode: QuerySmartContractStateResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "SmartContractState",
  clientResolver
});
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: createGetSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const createGetCode = (clientResolver?: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Code",
  clientResolver
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const createGetCodes = (clientResolver?: RpcResolver) => buildQuery<QueryCodesRequest, QueryCodesResponse>({
  encode: QueryCodesRequest.encode,
  decode: QueryCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "Codes",
  clientResolver
});
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: createGetCodes,
  queryKeyPrefix: "CodesQuery"
});
export const createGetPinnedCodes = (clientResolver?: RpcResolver) => buildQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  encode: QueryPinnedCodesRequest.encode,
  decode: QueryPinnedCodesResponse.decode,
  service: "cosmwasm.wasm.v1.Query",
  method: "PinnedCodes",
  clientResolver
});
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: createGetPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});