import { buildUseQuery } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
import { createGetContractInfo, createGetContractHistory, createGetContractsByCode, createGetAllContractState, createGetRawContractState, createGetSmartContractState, createGetCode, createGetCodes, createGetPinnedCodes } from "./query.rpc.func.ts";
export const useGetContractInfo = buildUseQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: createGetContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const useGetContractHistory = buildUseQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: createGetContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const useGetContractsByCode = buildUseQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: createGetContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const useGetAllContractState = buildUseQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: createGetAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const useGetRawContractState = buildUseQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: createGetRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const useGetSmartContractState = buildUseQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: createGetSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetCodes = buildUseQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: createGetCodes,
  queryKeyPrefix: "CodesQuery"
});
export const useGetPinnedCodes = buildUseQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: createGetPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});