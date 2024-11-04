import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
export const createGetChannel = (clientResolver: RpcResolver) => buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel",
  clientResolver
});
export const useGetChannel = buildUseQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: createGetChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const createGetChannels = (clientResolver: RpcResolver) => buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels",
  clientResolver
});
export const useGetChannels = buildUseQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: createGetChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const createGetConnectionChannels = (clientResolver: RpcResolver) => buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels",
  clientResolver
});
export const useGetConnectionChannels = buildUseQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: createGetConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const createGetChannelClientState = (clientResolver: RpcResolver) => buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState",
  clientResolver
});
export const useGetChannelClientState = buildUseQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: createGetChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const createGetChannelConsensusState = (clientResolver: RpcResolver) => buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState",
  clientResolver
});
export const useGetChannelConsensusState = buildUseQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: createGetChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const createGetPacketCommitment = (clientResolver: RpcResolver) => buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment",
  clientResolver
});
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: createGetPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const createGetPacketCommitments = (clientResolver: RpcResolver) => buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments",
  clientResolver
});
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: createGetPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const createGetPacketReceipt = (clientResolver: RpcResolver) => buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt",
  clientResolver
});
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: createGetPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const createGetPacketAcknowledgement = (clientResolver: RpcResolver) => buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement",
  clientResolver
});
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: createGetPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const createGetPacketAcknowledgements = (clientResolver: RpcResolver) => buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements",
  clientResolver
});
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: createGetPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const createGetUnreceivedPackets = (clientResolver: RpcResolver) => buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets",
  clientResolver
});
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: createGetUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const createGetUnreceivedAcks = (clientResolver: RpcResolver) => buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks",
  clientResolver
});
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: createGetUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const createGetNextSequenceReceive = (clientResolver: RpcResolver) => buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive",
  clientResolver
});
export const useGetNextSequenceReceive = buildUseQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: createGetNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});