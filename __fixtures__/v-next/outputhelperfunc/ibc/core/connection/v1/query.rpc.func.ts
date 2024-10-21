import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { SigningClientResolver } from "../../../../helpers";
import { QueryConnectionRequest, QueryConnectionRequestSDKType, QueryConnectionResponse, QueryConnectionResponseSDKType, QueryConnectionsRequest, QueryConnectionsRequestSDKType, QueryConnectionsResponse, QueryConnectionsResponseSDKType, QueryClientConnectionsRequest, QueryClientConnectionsRequestSDKType, QueryClientConnectionsResponse, QueryClientConnectionsResponseSDKType, QueryConnectionClientStateRequest, QueryConnectionClientStateRequestSDKType, QueryConnectionClientStateResponse, QueryConnectionClientStateResponseSDKType, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateRequestSDKType, QueryConnectionConsensusStateResponse, QueryConnectionConsensusStateResponseSDKType } from "./query";
export const createGetConnection = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
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
export const createGetConnections = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
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
export const createGetClientConnections = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
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
export const createGetConnectionClientState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
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
export const createGetConnectionConsensusState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
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