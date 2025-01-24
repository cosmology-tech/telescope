import { buildUseVueQuery } from "../../../../vue-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
import { createGetConnection, createGetConnections, createGetClientConnections, createGetConnectionClientState, createGetConnectionConsensusState } from "./query.rpc.func.ts";
export const useGetConnection = buildUseVueQuery<QueryConnectionRequest, QueryConnectionResponse>({
  builderQueryFn: createGetConnection,
  queryKeyPrefix: "ConnectionQuery"
});
export const useGetConnections = buildUseVueQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  builderQueryFn: createGetConnections,
  queryKeyPrefix: "ConnectionsQuery"
});
export const useGetClientConnections = buildUseVueQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  builderQueryFn: createGetClientConnections,
  queryKeyPrefix: "ClientConnectionsQuery"
});
export const useGetConnectionClientState = buildUseVueQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  builderQueryFn: createGetConnectionClientState,
  queryKeyPrefix: "ConnectionClientStateQuery"
});
export const useGetConnectionConsensusState = buildUseVueQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  builderQueryFn: createGetConnectionConsensusState,
  queryKeyPrefix: "ConnectionConsensusStateQuery"
});