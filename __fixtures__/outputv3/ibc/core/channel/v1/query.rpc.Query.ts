import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as fm from "../../../../grpc-gateway";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
export class Query {
  /** Channel queries an IBC Channel. */
  static Channel(request: QueryChannelRequest, initRequest?: fm.InitReq): Promise<QueryChannelResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** Channels queries all the IBC channels of a chain. */
  static Channels(request: QueryChannelsRequest, initRequest?: fm.InitReq): Promise<QueryChannelsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  static ConnectionChannels(request: QueryConnectionChannelsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionChannelsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/connections/${request["connection"]}/channels?${fm.renderURLSearchParams({ ...request
    }, ["connection"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  static ChannelClientState(request: QueryChannelClientStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelClientStateResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/client_state?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  static ChannelConsensusState(request: QueryChannelConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** PacketCommitment queries a stored packet commitment hash. */
  static PacketCommitment(request: QueryPacketCommitmentRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments/{sequence}?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  static PacketCommitments(request: QueryPacketCommitmentsRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  static PacketReceipt(request: QueryPacketReceiptRequest, initRequest?: fm.InitReq): Promise<QueryPacketReceiptResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_receipts/{sequence}?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  static PacketAcknowledgement(request: QueryPacketAcknowledgementRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_acks/{sequence}?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  static PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_acknowledgements?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  static UnreceivedPackets(request: QueryUnreceivedPacketsRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedPacketsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  static UnreceivedAcks(request: QueryUnreceivedAcksRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedAcksResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  static NextSequenceReceive(request: QueryNextSequenceReceiveRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceReceiveResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/next_sequence?${fm.renderURLSearchParams({ ...request
    }, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}