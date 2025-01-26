import { buildUseQuery } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
import { createGetClientState, createGetClientStates, createGetConsensusState, createGetConsensusStates, createGetClientStatus, createGetClientParams, createGetUpgradedClientState, createGetUpgradedConsensusState } from "./query.rpc.func";
export const useGetClientState = buildUseQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: createGetClientState,
  queryKeyPrefix: "ClientStateQuery"
});
export const useGetClientStates = buildUseQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: createGetClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
export const useGetConsensusState = buildUseQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: createGetConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
export const useGetConsensusStates = buildUseQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: createGetConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
export const useGetClientStatus = buildUseQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: createGetClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
export const useGetClientParams = buildUseQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: createGetClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
export const useGetUpgradedClientState = buildUseQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: createGetUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});