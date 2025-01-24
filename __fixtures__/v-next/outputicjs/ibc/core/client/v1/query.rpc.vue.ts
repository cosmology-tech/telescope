import { buildUseVueQuery } from "../../../../vue-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
import { createGetClientState, createGetClientStates, createGetConsensusState, createGetConsensusStates, createGetClientStatus, createGetClientParams, createGetUpgradedClientState, createGetUpgradedConsensusState } from "./query.rpc.func.ts";
export const useGetClientState = buildUseVueQuery<QueryClientStateRequest, QueryClientStateResponse>({
  builderQueryFn: createGetClientState,
  queryKeyPrefix: "ClientStateQuery"
});
export const useGetClientStates = buildUseVueQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
  builderQueryFn: createGetClientStates,
  queryKeyPrefix: "ClientStatesQuery"
});
export const useGetConsensusState = buildUseVueQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
  builderQueryFn: createGetConsensusState,
  queryKeyPrefix: "ConsensusStateQuery"
});
export const useGetConsensusStates = buildUseVueQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
  builderQueryFn: createGetConsensusStates,
  queryKeyPrefix: "ConsensusStatesQuery"
});
export const useGetClientStatus = buildUseVueQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
  builderQueryFn: createGetClientStatus,
  queryKeyPrefix: "ClientStatusQuery"
});
export const useGetClientParams = buildUseVueQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
  builderQueryFn: createGetClientParams,
  queryKeyPrefix: "ClientParamsQuery"
});
export const useGetUpgradedClientState = buildUseVueQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
  builderQueryFn: createGetUpgradedClientState,
  queryKeyPrefix: "UpgradedClientStateQuery"
});
export const useGetUpgradedConsensusState = buildUseVueQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});