import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export const createGetClientState = (clientResolver?: RpcResolver) => buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
  encode: QueryClientStateRequest.encode,
  decode: QueryClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientState",
  clientResolver
});
export const useGetClientState = buildUseQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: createGetClientState,
  queryKeyPrefix: "ClientStateQuery"
});
export const createGetClientStates = (clientResolver?: RpcResolver) => buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  encode: QueryClientStatesRequest.encode,
  decode: QueryClientStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStates",
  clientResolver
});
export const useGetClientStates = buildUseQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: createGetClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
export const createGetConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  encode: QueryConsensusStateRequest.encode,
  decode: QueryConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusState",
  clientResolver
});
export const useGetConsensusState = buildUseQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: createGetConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
export const createGetConsensusStates = (clientResolver?: RpcResolver) => buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  encode: QueryConsensusStatesRequest.encode,
  decode: QueryConsensusStatesResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ConsensusStates",
  clientResolver
});
export const useGetConsensusStates = buildUseQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: createGetConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
export const createGetClientStatus = (clientResolver?: RpcResolver) => buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  encode: QueryClientStatusRequest.encode,
  decode: QueryClientStatusResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientStatus",
  clientResolver
});
export const useGetClientStatus = buildUseQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: createGetClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
export const createGetClientParams = (clientResolver?: RpcResolver) => buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  encode: QueryClientParamsRequest.encode,
  decode: QueryClientParamsResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "ClientParams",
  clientResolver
});
export const useGetClientParams = buildUseQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: createGetClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
export const createGetUpgradedClientState = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  encode: QueryUpgradedClientStateRequest.encode,
  decode: QueryUpgradedClientStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedClientState",
  clientResolver
});
export const useGetUpgradedClientState = buildUseQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: createGetUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
export const createGetUpgradedConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "ibc.core.client.v1.Query",
  method: "UpgradedConsensusState",
  clientResolver
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});