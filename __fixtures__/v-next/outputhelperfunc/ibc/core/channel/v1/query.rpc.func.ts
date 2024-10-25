import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
export const createGetChannel = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelRequest, QueryChannelResponse>({
  encode: QueryChannelRequest.encode,
  decode: QueryChannelResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channel",
  getRpcInstance: getRpcInstance
});
export const useGetChannel = buildUseQuery<QueryChannelRequest, QueryChannelResponse>({
  builderQueryFn: createGetChannel,
  queryKeyPrefix: "ChannelQuery"
});
export const createGetChannels = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelsRequest, QueryChannelsResponse>({
  encode: QueryChannelsRequest.encode,
  decode: QueryChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "Channels",
  getRpcInstance: getRpcInstance
});
export const useGetChannels = buildUseQuery<QueryChannelsRequest, QueryChannelsResponse>({
  builderQueryFn: createGetChannels,
  queryKeyPrefix: "ChannelsQuery"
});
export const createGetConnectionChannels = (getRpcInstance: RpcResolver) => buildQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  encode: QueryConnectionChannelsRequest.encode,
  decode: QueryConnectionChannelsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ConnectionChannels",
  getRpcInstance: getRpcInstance
});
export const useGetConnectionChannels = buildUseQuery<QueryConnectionChannelsRequest, QueryConnectionChannelsResponse>({
  builderQueryFn: createGetConnectionChannels,
  queryKeyPrefix: "ConnectionChannelsQuery"
});
export const createGetChannelClientState = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  encode: QueryChannelClientStateRequest.encode,
  decode: QueryChannelClientStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelClientState",
  getRpcInstance: getRpcInstance
});
export const useGetChannelClientState = buildUseQuery<QueryChannelClientStateRequest, QueryChannelClientStateResponse>({
  builderQueryFn: createGetChannelClientState,
  queryKeyPrefix: "ChannelClientStateQuery"
});
export const createGetChannelConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  encode: QueryChannelConsensusStateRequest.encode,
  decode: QueryChannelConsensusStateResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "ChannelConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetChannelConsensusState = buildUseQuery<QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse>({
  builderQueryFn: createGetChannelConsensusState,
  queryKeyPrefix: "ChannelConsensusStateQuery"
});
export const createGetPacketCommitment = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  encode: QueryPacketCommitmentRequest.encode,
  decode: QueryPacketCommitmentResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitment",
  getRpcInstance: getRpcInstance
});
export const useGetPacketCommitment = buildUseQuery<QueryPacketCommitmentRequest, QueryPacketCommitmentResponse>({
  builderQueryFn: createGetPacketCommitment,
  queryKeyPrefix: "PacketCommitmentQuery"
});
export const createGetPacketCommitments = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  encode: QueryPacketCommitmentsRequest.encode,
  decode: QueryPacketCommitmentsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketCommitments",
  getRpcInstance: getRpcInstance
});
export const useGetPacketCommitments = buildUseQuery<QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse>({
  builderQueryFn: createGetPacketCommitments,
  queryKeyPrefix: "PacketCommitmentsQuery"
});
export const createGetPacketReceipt = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  encode: QueryPacketReceiptRequest.encode,
  decode: QueryPacketReceiptResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketReceipt",
  getRpcInstance: getRpcInstance
});
export const useGetPacketReceipt = buildUseQuery<QueryPacketReceiptRequest, QueryPacketReceiptResponse>({
  builderQueryFn: createGetPacketReceipt,
  queryKeyPrefix: "PacketReceiptQuery"
});
export const createGetPacketAcknowledgement = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  encode: QueryPacketAcknowledgementRequest.encode,
  decode: QueryPacketAcknowledgementResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgement",
  getRpcInstance: getRpcInstance
});
export const useGetPacketAcknowledgement = buildUseQuery<QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse>({
  builderQueryFn: createGetPacketAcknowledgement,
  queryKeyPrefix: "PacketAcknowledgementQuery"
});
export const createGetPacketAcknowledgements = (getRpcInstance: RpcResolver) => buildQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  encode: QueryPacketAcknowledgementsRequest.encode,
  decode: QueryPacketAcknowledgementsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "PacketAcknowledgements",
  getRpcInstance: getRpcInstance
});
export const useGetPacketAcknowledgements = buildUseQuery<QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse>({
  builderQueryFn: createGetPacketAcknowledgements,
  queryKeyPrefix: "PacketAcknowledgementsQuery"
});
export const createGetUnreceivedPackets = (getRpcInstance: RpcResolver) => buildQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  encode: QueryUnreceivedPacketsRequest.encode,
  decode: QueryUnreceivedPacketsResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedPackets",
  getRpcInstance: getRpcInstance
});
export const useGetUnreceivedPackets = buildUseQuery<QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse>({
  builderQueryFn: createGetUnreceivedPackets,
  queryKeyPrefix: "UnreceivedPacketsQuery"
});
export const createGetUnreceivedAcks = (getRpcInstance: RpcResolver) => buildQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  encode: QueryUnreceivedAcksRequest.encode,
  decode: QueryUnreceivedAcksResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "UnreceivedAcks",
  getRpcInstance: getRpcInstance
});
export const useGetUnreceivedAcks = buildUseQuery<QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse>({
  builderQueryFn: createGetUnreceivedAcks,
  queryKeyPrefix: "UnreceivedAcksQuery"
});
export const createGetNextSequenceReceive = (getRpcInstance: RpcResolver) => buildQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  encode: QueryNextSequenceReceiveRequest.encode,
  decode: QueryNextSequenceReceiveResponse.decode,
  service: "ibc.core.channel.v1.Query",
  method: "NextSequenceReceive",
  getRpcInstance: getRpcInstance
});
export const useGetNextSequenceReceive = buildUseQuery<QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse>({
  builderQueryFn: createGetNextSequenceReceive,
  queryKeyPrefix: "NextSequenceReceiveQuery"
});