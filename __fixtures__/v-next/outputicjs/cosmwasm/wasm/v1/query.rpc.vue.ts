import { buildUseVueQuery } from "../../../vue-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
import { createGetContractInfo, createGetContractHistory, createGetContractsByCode, createGetAllContractState, createGetRawContractState, createGetSmartContractState, createGetCode, createGetCodes, createGetPinnedCodes } from "./query.rpc.func.ts";
export const useGetContractInfo = buildUseVueQuery<QueryContractInfoRequest, QueryContractInfoResponse>({
  builderQueryFn: createGetContractInfo,
  queryKeyPrefix: "ContractInfoQuery"
});
export const useGetContractHistory = buildUseVueQuery<QueryContractHistoryRequest, QueryContractHistoryResponse>({
  builderQueryFn: createGetContractHistory,
  queryKeyPrefix: "ContractHistoryQuery"
});
export const useGetContractsByCode = buildUseVueQuery<QueryContractsByCodeRequest, QueryContractsByCodeResponse>({
  builderQueryFn: createGetContractsByCode,
  queryKeyPrefix: "ContractsByCodeQuery"
});
export const useGetAllContractState = buildUseVueQuery<QueryAllContractStateRequest, QueryAllContractStateResponse>({
  builderQueryFn: createGetAllContractState,
  queryKeyPrefix: "AllContractStateQuery"
});
export const useGetRawContractState = buildUseVueQuery<QueryRawContractStateRequest, QueryRawContractStateResponse>({
  builderQueryFn: createGetRawContractState,
  queryKeyPrefix: "RawContractStateQuery"
});
export const useGetSmartContractState = buildUseVueQuery<QuerySmartContractStateRequest, QuerySmartContractStateResponse>({
  builderQueryFn: createGetSmartContractState,
  queryKeyPrefix: "SmartContractStateQuery"
});
export const useGetCode = buildUseVueQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetCodes = buildUseVueQuery<QueryCodesRequest, QueryCodesResponse>({
  builderQueryFn: createGetCodes,
  queryKeyPrefix: "CodesQuery"
});
export const useGetPinnedCodes = buildUseVueQuery<QueryPinnedCodesRequest, QueryPinnedCodesResponse>({
  builderQueryFn: createGetPinnedCodes,
  queryKeyPrefix: "PinnedCodesQuery"
});