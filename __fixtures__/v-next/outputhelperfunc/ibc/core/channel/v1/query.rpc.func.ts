import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
export const createGetChannel = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encoder: QueryChannelRequest.encode,
  decoder: QueryChannelResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Channel",
  getRpcInstance: getRpcInstance
});
export const useGetChannel = buildUseQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: createGetChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const createGetChannels = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encoder: QueryChannelsRequest.encode,
  decoder: QueryChannelsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Channels",
  getRpcInstance: getRpcInstance
});
export const useGetChannels = buildUseQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: createGetChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const createGetConnectionChannels = (getRpcInstance: RpcResolver) => buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encoder: QueryConnectionChannelsRequest.encode,
  decoder: QueryConnectionChannelsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ConnectionChannels",
  getRpcInstance: getRpcInstance
});
export const useGetConnectionChannels = buildUseQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: createGetConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const createGetChannelClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encoder: QueryChannelClientStateRequest.encode,
  decoder: QueryChannelClientStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ChannelClientState",
  getRpcInstance: getRpcInstance
});
export const useGetChannelClientState = buildUseQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: createGetChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const createGetChannelConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encoder: QueryChannelConsensusStateRequest.encode,
  decoder: QueryChannelConsensusStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ChannelConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetChannelConsensusState = buildUseQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: createGetChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const createGetPacketCommitment = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encoder: QueryPacketCommitmentRequest.encode,
  decoder: QueryPacketCommitmentResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PacketCommitment",
  getRpcInstance: getRpcInstance
});
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: createGetPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const createGetPacketCommitments = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encoder: QueryPacketCommitmentsRequest.encode,
  decoder: QueryPacketCommitmentsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PacketCommitments",
  getRpcInstance: getRpcInstance
});
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: createGetPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const createGetPacketReceipt = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encoder: QueryPacketReceiptRequest.encode,
  decoder: QueryPacketReceiptResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PacketReceipt",
  getRpcInstance: getRpcInstance
});
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: createGetPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const createGetPacketAcknowledgement = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encoder: QueryPacketAcknowledgementRequest.encode,
  decoder: QueryPacketAcknowledgementResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PacketAcknowledgement",
  getRpcInstance: getRpcInstance
});
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: createGetPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const createGetPacketAcknowledgements = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encoder: QueryPacketAcknowledgementsRequest.encode,
  decoder: QueryPacketAcknowledgementsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "PacketAcknowledgements",
  getRpcInstance: getRpcInstance
});
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: createGetPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const createGetUnreceivedPackets = (getRpcInstance: RpcResolver) => buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encoder: QueryUnreceivedPacketsRequest.encode,
  decoder: QueryUnreceivedPacketsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UnreceivedPackets",
  getRpcInstance: getRpcInstance
});
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: createGetUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const createGetUnreceivedAcks = (getRpcInstance: RpcResolver) => buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encoder: QueryUnreceivedAcksRequest.encode,
  decoder: QueryUnreceivedAcksResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UnreceivedAcks",
  getRpcInstance: getRpcInstance
});
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: createGetUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const createGetNextSequenceReceive = (getRpcInstance: RpcResolver) => buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encoder: QueryNextSequenceReceiveRequest.encode,
  decoder: QueryNextSequenceReceiveResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "NextSequenceReceive",
  getRpcInstance: getRpcInstance
});
export const useGetNextSequenceReceive = buildUseQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: createGetNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});