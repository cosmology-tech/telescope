import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Channel queries an IBC Channel. */


  async channel(params: QueryChannelRequest): Promise<QueryChannelResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}ports/${params.portId}`;
    return await this.req.get<QueryChannelResponse>(endpoint);
  }
  /* Channels queries all the IBC channels of a chain. */


  async channels(params: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/channels`;
    return await this.req.get<QueryChannelsResponse>(endpoint, options);
  }
  /* ConnectionChannels queries all the channels associated with a connection
   end. */


  async connectionChannels(params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return await this.req.get<QueryConnectionChannelsResponse>(endpoint, options);
  }
  /* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */


  async channelClientState(params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/client_state`;
    return await this.req.get<QueryChannelClientStateResponse>(endpoint);
  }
  /* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */


  async channelConsensusState(params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/consensus_state/revision/${params.revisionNumber}height/${params.revisionHeight}`;
    return await this.req.get<QueryChannelConsensusStateResponse>(endpoint);
  }
  /* PacketCommitment queries a stored packet commitment hash. */


  async packetCommitment(params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}packet_commitments/${params.sequence}`;
    return await this.req.get<QueryPacketCommitmentResponse>(endpoint);
  }
  /* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */


  async packetCommitments(params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments`;
    return await this.req.get<QueryPacketCommitmentsResponse>(endpoint, options);
  }
  /* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */


  async packetReceipt(params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}packet_receipts/${params.sequence}`;
    return await this.req.get<QueryPacketReceiptResponse>(endpoint);
  }
  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */


  async packetAcknowledgement(params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}packet_acks/${params.sequence}`;
    return await this.req.get<QueryPacketAcknowledgementResponse>(endpoint);
  }
  /* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */


  async packetAcknowledgements(params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    if (typeof params?.packetCommitmentSequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packetCommitmentSequences;
    }

    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_acknowledgements`;
    return await this.req.get<QueryPacketAcknowledgementsResponse>(endpoint, options);
  }
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */


  async unreceivedPackets(params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetCommitmentSequences}/unreceived_packets`;
    return await this.req.get<QueryUnreceivedPacketsResponse>(endpoint);
  }
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */


  async unreceivedAcks(params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetAckSequences}/unreceived_acks`;
    return await this.req.get<QueryUnreceivedAcksResponse>(endpoint);
  }
  /* NextSequenceReceive returns the next receive sequence for a given channel. */


  async nextSequenceReceive(params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
    const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/next_sequence`;
    return await this.req.get<QueryNextSequenceReceiveResponse>(endpoint);
  }

}