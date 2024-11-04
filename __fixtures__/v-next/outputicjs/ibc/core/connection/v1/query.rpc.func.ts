import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export const createGetConnection = (clientResolver: RpcResolver) => buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encode: QueryConnectionRequest.encode,
  decode: QueryConnectionResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connection",
  clientResolver
});
export const useGetConnection = buildUseQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: createGetConnection,
  queryKeyPrefix: "ConnectionQuery"
});
export const createGetConnections = (clientResolver: RpcResolver) => buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encode: QueryConnectionsRequest.encode,
  decode: QueryConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connections",
  clientResolver
});
export const useGetConnections = buildUseQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: createGetConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
export const createGetClientConnections = (clientResolver: RpcResolver) => buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encode: QueryClientConnectionsRequest.encode,
  decode: QueryClientConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ClientConnections",
  clientResolver
});
export const useGetClientConnections = buildUseQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: createGetClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
export const createGetConnectionClientState = (clientResolver: RpcResolver) => buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encode: QueryConnectionClientStateRequest.encode,
  decode: QueryConnectionClientStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionClientState",
  clientResolver
});
export const useGetConnectionClientState = buildUseQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: createGetConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
export const createGetConnectionConsensusState = (clientResolver: RpcResolver) => buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encode: QueryConnectionConsensusStateRequest.encode,
  decode: QueryConnectionConsensusStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionConsensusState",
  clientResolver
});
export const useGetConnectionConsensusState = buildUseQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: createGetConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});