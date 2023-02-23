import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../../helpers";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Channel queries an IBC Channel. */
  Channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse>;

  /** Channels queries all the IBC channels of a chain. */
  Channels(request?: DeepPartial<QueryChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryChannelsResponse>;

  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  ConnectionChannels(request: DeepPartial<QueryConnectionChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionChannelsResponse>;

  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  ChannelClientState(request: DeepPartial<QueryChannelClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelClientStateResponse>;

  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  ChannelConsensusState(request: DeepPartial<QueryChannelConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelConsensusStateResponse>;

  /** PacketCommitment queries a stored packet commitment hash. */
  PacketCommitment(request: DeepPartial<QueryPacketCommitmentRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentResponse>;

  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  PacketCommitments(request: DeepPartial<QueryPacketCommitmentsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentsResponse>;

  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  PacketReceipt(request: DeepPartial<QueryPacketReceiptRequest>, metadata?: grpc.Metadata): Promise<QueryPacketReceiptResponse>;

  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  PacketAcknowledgement(request: DeepPartial<QueryPacketAcknowledgementRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementResponse>;

  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  PacketAcknowledgements(request: DeepPartial<QueryPacketAcknowledgementsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementsResponse>;

  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  UnreceivedPackets(request: DeepPartial<QueryUnreceivedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedPacketsResponse>;

  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  UnreceivedAcks(request: DeepPartial<QueryUnreceivedAcksRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedAcksResponse>;

  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  NextSequenceReceive(request: DeepPartial<QueryNextSequenceReceiveRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceReceiveResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.channel = this.channel.bind(this);
    this.channels = this.channels.bind(this);
    this.connectionChannels = this.connectionChannels.bind(this);
    this.channelClientState = this.channelClientState.bind(this);
    this.channelConsensusState = this.channelConsensusState.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
    this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
  }

  channel(request: DeepPartial<QueryChannelRequest>, metadata?: grpc.Metadata): Promise<QueryChannelResponse> {
    return this.rpc.unary(QueryChannelDesc, QueryChannelRequest.fromPartial(request), metadata);
  }

  channels(request: DeepPartial<QueryChannelsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryChannelsResponse> {
    return this.rpc.unary(QueryChannelsDesc, QueryChannelsRequest.fromPartial(request), metadata);
  }

  connectionChannels(request: DeepPartial<QueryConnectionChannelsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionChannelsResponse> {
    return this.rpc.unary(QueryConnectionChannelsDesc, QueryConnectionChannelsRequest.fromPartial(request), metadata);
  }

  channelClientState(request: DeepPartial<QueryChannelClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelClientStateResponse> {
    return this.rpc.unary(QueryChannelClientStateDesc, QueryChannelClientStateRequest.fromPartial(request), metadata);
  }

  channelConsensusState(request: DeepPartial<QueryChannelConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryChannelConsensusStateResponse> {
    return this.rpc.unary(QueryChannelConsensusStateDesc, QueryChannelConsensusStateRequest.fromPartial(request), metadata);
  }

  packetCommitment(request: DeepPartial<QueryPacketCommitmentRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentResponse> {
    return this.rpc.unary(QueryPacketCommitmentDesc, QueryPacketCommitmentRequest.fromPartial(request), metadata);
  }

  packetCommitments(request: DeepPartial<QueryPacketCommitmentsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketCommitmentsResponse> {
    return this.rpc.unary(QueryPacketCommitmentsDesc, QueryPacketCommitmentsRequest.fromPartial(request), metadata);
  }

  packetReceipt(request: DeepPartial<QueryPacketReceiptRequest>, metadata?: grpc.Metadata): Promise<QueryPacketReceiptResponse> {
    return this.rpc.unary(QueryPacketReceiptDesc, QueryPacketReceiptRequest.fromPartial(request), metadata);
  }

  packetAcknowledgement(request: DeepPartial<QueryPacketAcknowledgementRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementResponse> {
    return this.rpc.unary(QueryPacketAcknowledgementDesc, QueryPacketAcknowledgementRequest.fromPartial(request), metadata);
  }

  packetAcknowledgements(request: DeepPartial<QueryPacketAcknowledgementsRequest>, metadata?: grpc.Metadata): Promise<QueryPacketAcknowledgementsResponse> {
    return this.rpc.unary(QueryPacketAcknowledgementsDesc, QueryPacketAcknowledgementsRequest.fromPartial(request), metadata);
  }

  unreceivedPackets(request: DeepPartial<QueryUnreceivedPacketsRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedPacketsResponse> {
    return this.rpc.unary(QueryUnreceivedPacketsDesc, QueryUnreceivedPacketsRequest.fromPartial(request), metadata);
  }

  unreceivedAcks(request: DeepPartial<QueryUnreceivedAcksRequest>, metadata?: grpc.Metadata): Promise<QueryUnreceivedAcksResponse> {
    return this.rpc.unary(QueryUnreceivedAcksDesc, QueryUnreceivedAcksRequest.fromPartial(request), metadata);
  }

  nextSequenceReceive(request: DeepPartial<QueryNextSequenceReceiveRequest>, metadata?: grpc.Metadata): Promise<QueryNextSequenceReceiveResponse> {
    return this.rpc.unary(QueryNextSequenceReceiveDesc, QueryNextSequenceReceiveRequest.fromPartial(request), metadata);
  }

}