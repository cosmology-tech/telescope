import { buildUseQuery } from "../../../../react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
import { createGetConnection, createGetConnections, createGetClientConnections, createGetConnectionClientState, createGetConnectionConsensusState } from "./query.rpc.func.ts";
export const useGetConnection = buildUseQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: createGetConnection,
  queryKeyPrefix: "ConnectionQuery"
});
export const useGetConnections = buildUseQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: createGetConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
export const useGetClientConnections = buildUseQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: createGetClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
export const useGetConnectionClientState = buildUseQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: createGetConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
export const useGetConnectionConsensusState = buildUseQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: createGetConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});