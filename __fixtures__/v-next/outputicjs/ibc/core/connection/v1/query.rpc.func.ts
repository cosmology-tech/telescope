import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export const createGetConnection = (getRpcInstance: RpcResolver) => buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encoder: QueryConnectionRequest.encode,
  decoder: QueryConnectionResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Connection",
  getRpcInstance: getRpcInstance
});
export const useGetConnection = buildUseQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: createGetConnection,
  queryKeyPrefix: "ConnectionQuery"
});
export const createGetConnections = (getRpcInstance: RpcResolver) => buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encoder: QueryConnectionsRequest.encode,
  decoder: QueryConnectionsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Connections",
  getRpcInstance: getRpcInstance
});
export const useGetConnections = buildUseQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: createGetConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
export const createGetClientConnections = (getRpcInstance: RpcResolver) => buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encoder: QueryClientConnectionsRequest.encode,
  decoder: QueryClientConnectionsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClientConnections",
  getRpcInstance: getRpcInstance
});
export const useGetClientConnections = buildUseQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: createGetClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
export const createGetConnectionClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encoder: QueryConnectionClientStateRequest.encode,
  decoder: QueryConnectionClientStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ConnectionClientState",
  getRpcInstance: getRpcInstance
});
export const useGetConnectionClientState = buildUseQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: createGetConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
export const createGetConnectionConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encoder: QueryConnectionConsensusStateRequest.encode,
  decoder: QueryConnectionConsensusStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ConnectionConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetConnectionConsensusState = buildUseQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: createGetConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});