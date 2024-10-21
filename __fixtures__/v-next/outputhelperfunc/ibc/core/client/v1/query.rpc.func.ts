import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import { SigningClientResolver } from "../../../../helper-func-types";
import { QueryClientStateRequest, QueryClientStateRequestSDKType, QueryClientStateResponse, QueryClientStateResponseSDKType, QueryClientStatesRequest, QueryClientStatesRequestSDKType, QueryClientStatesResponse, QueryClientStatesResponseSDKType, QueryConsensusStateRequest, QueryConsensusStateRequestSDKType, QueryConsensusStateResponse, QueryConsensusStateResponseSDKType, QueryConsensusStatesRequest, QueryConsensusStatesRequestSDKType, QueryConsensusStatesResponse, QueryConsensusStatesResponseSDKType, QueryClientStatusRequest, QueryClientStatusRequestSDKType, QueryClientStatusResponse, QueryClientStatusResponseSDKType, QueryClientParamsRequest, QueryClientParamsRequestSDKType, QueryClientParamsResponse, QueryClientParamsResponseSDKType, QueryUpgradedClientStateRequest, QueryUpgradedClientStateRequestSDKType, QueryUpgradedClientStateResponse, QueryUpgradedClientStateResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType } from "./query";
export const createGetClientState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClientStateRequest, QueryClientStateResponse>({
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
export const createGetClientStates = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClientStatesRequest, QueryClientStatesResponse>({
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
export const createGetConsensusState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConsensusStateRequest, QueryConsensusStateResponse>({
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
export const createGetConsensusStates = (getRpcInstance: SigningClientResolver) => buildQuery<QueryConsensusStatesRequest, QueryConsensusStatesResponse>({
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
export const createGetClientStatus = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClientStatusRequest, QueryClientStatusResponse>({
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
export const createGetClientParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClientParamsRequest, QueryClientParamsResponse>({
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
export const createGetUpgradedClientState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse>({
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
export const createGetUpgradedConsensusState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
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