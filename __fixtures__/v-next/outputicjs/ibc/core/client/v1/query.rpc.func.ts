import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export const createGetClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encode: QueryClientStateRequest.encode,
  decode: QueryClientStateResponse.decode,
  service: "ibc.core.client.v1.ClientState",
  method: "ClientState",
  getRpcInstance: getRpcInstance
});
export const useGetClientState = buildUseQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: createGetClientState,
  queryKeyPrefix: "ClientStateQuery"
});
export const createGetClientStates = (getRpcInstance: RpcResolver) => buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encode: QueryClientStatesRequest.encode,
  decode: QueryClientStatesResponse.decode,
  service: "ibc.core.client.v1.ClientStates",
  method: "ClientStates",
  getRpcInstance: getRpcInstance
});
export const useGetClientStates = buildUseQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: createGetClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
export const createGetConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "ibc.core.client.v1.ConsensusState",
  method: "ConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetConsensusState = buildUseQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: createGetConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
export const createGetConsensusStates = (getRpcInstance: RpcResolver) => buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encode: QueryConsensusStatesRequest.encode,
  decode: QueryConsensusStatesResponse.decode,
  service: "ibc.core.client.v1.ConsensusStates",
  method: "ConsensusStates",
  getRpcInstance: getRpcInstance
});
export const useGetConsensusStates = buildUseQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: createGetConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
export const createGetClientStatus = (getRpcInstance: RpcResolver) => buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encode: QueryClientStatusRequest.encode,
  decode: QueryClientStatusResponse.decode,
  service: "ibc.core.client.v1.ClientStatus",
  method: "ClientStatus",
  getRpcInstance: getRpcInstance
});
export const useGetClientStatus = buildUseQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: createGetClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
export const createGetClientParams = (getRpcInstance: RpcResolver) => buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encode: QueryClientParamsRequest.encode,
  decode: QueryClientParamsResponse.decode,
  service: "ibc.core.client.v1.ClientParams",
  method: "ClientParams",
  getRpcInstance: getRpcInstance
});
export const useGetClientParams = buildUseQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: createGetClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
export const createGetUpgradedClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encode: QueryUpgradedClientStateRequest.encode,
  decode: QueryUpgradedClientStateResponse.decode,
  service: "ibc.core.client.v1.UpgradedClientState",
  method: "UpgradedClientState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedClientState = buildUseQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: createGetUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
export const createGetUpgradedConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "ibc.core.client.v1.UpgradedConsensusState",
  method: "UpgradedConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});