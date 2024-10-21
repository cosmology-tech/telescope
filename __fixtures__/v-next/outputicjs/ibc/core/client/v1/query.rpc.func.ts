import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export const createGetClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encoder: QueryClientStateRequest.encode,
  decoder: QueryClientStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClientState",
  getRpcInstance: getRpcInstance
});
export const useGetClientState = buildUseQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: createGetClientState,
  queryKeyPrefix: "ClientStateQuery"
});
export const createGetClientStates = (getRpcInstance: RpcResolver) => buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encoder: QueryClientStatesRequest.encode,
  decoder: QueryClientStatesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClientStates",
  getRpcInstance: getRpcInstance
});
export const useGetClientStates = buildUseQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: createGetClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
export const createGetConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encoder: QueryConsensusStateRequest.encode,
  decoder: QueryConsensusStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetConsensusState = buildUseQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: createGetConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
export const createGetConsensusStates = (getRpcInstance: RpcResolver) => buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encoder: QueryConsensusStatesRequest.encode,
  decoder: QueryConsensusStatesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ConsensusStates",
  getRpcInstance: getRpcInstance
});
export const useGetConsensusStates = buildUseQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: createGetConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
export const createGetClientStatus = (getRpcInstance: RpcResolver) => buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encoder: QueryClientStatusRequest.encode,
  decoder: QueryClientStatusResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClientStatus",
  getRpcInstance: getRpcInstance
});
export const useGetClientStatus = buildUseQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: createGetClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
export const createGetClientParams = (getRpcInstance: RpcResolver) => buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encoder: QueryClientParamsRequest.encode,
  decoder: QueryClientParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClientParams",
  getRpcInstance: getRpcInstance
});
export const useGetClientParams = buildUseQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: createGetClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
export const createGetUpgradedClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encoder: QueryUpgradedClientStateRequest.encode,
  decoder: QueryUpgradedClientStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UpgradedClientState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedClientState = buildUseQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: createGetUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
export const createGetUpgradedConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encoder: QueryUpgradedConsensusStateRequest.encode,
  decoder: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UpgradedConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});