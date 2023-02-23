import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../../pinia";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('ibc/core/channel/v1/query.proto', {
  state: () => {
    return {
      channel: ({} as QueryChannelResponse),
      channels: ({} as QueryChannelsResponse),
      connectionChannels: ({} as QueryConnectionChannelsResponse),
      channelClientState: ({} as QueryChannelClientStateResponse),
      channelConsensusState: ({} as QueryChannelConsensusStateResponse),
      packetCommitment: ({} as QueryPacketCommitmentResponse),
      packetCommitments: ({} as QueryPacketCommitmentsResponse),
      packetReceipt: ({} as QueryPacketReceiptResponse),
      packetAcknowledgement: ({} as QueryPacketAcknowledgementResponse),
      packetAcknowledgements: ({} as QueryPacketAcknowledgementsResponse),
      unreceivedPackets: ({} as QueryUnreceivedPacketsResponse),
      unreceivedAcks: ({} as QueryUnreceivedAcksResponse),
      nextSequenceReceive: ({} as QueryNextSequenceReceiveResponse)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }

  },
  actions: {
    async fetchChannel(param : QueryChannelRequest) {
      this.channel = await this.lcdClient.channel(param);
      return this.channel;
    },

    async fetchChannels(param : QueryChannelsRequest) {
      this.channels = await this.lcdClient.channels(param);
      return this.channels;
    },

    async fetchConnectionChannels(param : QueryConnectionChannelsRequest) {
      this.connectionChannels = await this.lcdClient.connectionChannels(param);
      return this.connectionChannels;
    },

    async fetchChannelClientState(param : QueryChannelClientStateRequest) {
      this.channelClientState = await this.lcdClient.channelClientState(param);
      return this.channelClientState;
    },

    async fetchChannelConsensusState(param : QueryChannelConsensusStateRequest) {
      this.channelConsensusState = await this.lcdClient.channelConsensusState(param);
      return this.channelConsensusState;
    },

    async fetchPacketCommitment(param : QueryPacketCommitmentRequest) {
      this.packetCommitment = await this.lcdClient.packetCommitment(param);
      return this.packetCommitment;
    },

    async fetchPacketCommitments(param : QueryPacketCommitmentsRequest) {
      this.packetCommitments = await this.lcdClient.packetCommitments(param);
      return this.packetCommitments;
    },

    async fetchPacketReceipt(param : QueryPacketReceiptRequest) {
      this.packetReceipt = await this.lcdClient.packetReceipt(param);
      return this.packetReceipt;
    },

    async fetchPacketAcknowledgement(param : QueryPacketAcknowledgementRequest) {
      this.packetAcknowledgement = await this.lcdClient.packetAcknowledgement(param);
      return this.packetAcknowledgement;
    },

    async fetchPacketAcknowledgements(param : QueryPacketAcknowledgementsRequest) {
      this.packetAcknowledgements = await this.lcdClient.packetAcknowledgements(param);
      return this.packetAcknowledgements;
    },

    async fetchUnreceivedPackets(param : QueryUnreceivedPacketsRequest) {
      this.unreceivedPackets = await this.lcdClient.unreceivedPackets(param);
      return this.unreceivedPackets;
    },

    async fetchUnreceivedAcks(param : QueryUnreceivedAcksRequest) {
      this.unreceivedAcks = await this.lcdClient.unreceivedAcks(param);
      return this.unreceivedAcks;
    },

    async fetchNextSequenceReceive(param : QueryNextSequenceReceiveRequest) {
      this.nextSequenceReceive = await this.lcdClient.nextSequenceReceive(param);
      return this.nextSequenceReceive;
    }

  }
});