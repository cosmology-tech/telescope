import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as fm from "../../../../grpc-gateway";
import { QueryChannelRequest, QueryChannelRequestSDKType, QueryChannelResponse, QueryChannelResponseSDKType, QueryChannelsRequest, QueryChannelsRequestSDKType, QueryChannelsResponse, QueryChannelsResponseSDKType, QueryConnectionChannelsRequest, QueryConnectionChannelsRequestSDKType, QueryConnectionChannelsResponse, QueryConnectionChannelsResponseSDKType, QueryChannelClientStateRequest, QueryChannelClientStateRequestSDKType, QueryChannelClientStateResponse, QueryChannelClientStateResponseSDKType, QueryChannelConsensusStateRequest, QueryChannelConsensusStateRequestSDKType, QueryChannelConsensusStateResponse, QueryChannelConsensusStateResponseSDKType, QueryPacketCommitmentRequest, QueryPacketCommitmentRequestSDKType, QueryPacketCommitmentResponse, QueryPacketCommitmentResponseSDKType, QueryPacketCommitmentsRequest, QueryPacketCommitmentsRequestSDKType, QueryPacketCommitmentsResponse, QueryPacketCommitmentsResponseSDKType, QueryPacketReceiptRequest, QueryPacketReceiptRequestSDKType, QueryPacketReceiptResponse, QueryPacketReceiptResponseSDKType, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementRequestSDKType, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementResponseSDKType, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsRequestSDKType, QueryPacketAcknowledgementsResponse, QueryPacketAcknowledgementsResponseSDKType, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsRequestSDKType, QueryUnreceivedPacketsResponse, QueryUnreceivedPacketsResponseSDKType, QueryUnreceivedAcksRequest, QueryUnreceivedAcksRequestSDKType, QueryUnreceivedAcksResponse, QueryUnreceivedAcksResponseSDKType, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveRequestSDKType, QueryNextSequenceReceiveResponse, QueryNextSequenceReceiveResponseSDKType } from "./query";
export class Query {
  static Channel(request: QueryChannelRequest, initRequest?: fm.InitReq): Promise<QueryChannelResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Channels(request: QueryChannelsRequest, initRequest?: fm.InitReq): Promise<QueryChannelsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ConnectionChannels(request: QueryConnectionChannelsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionChannelsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/connections/${request["connection"]}/channels?${fm.renderURLSearchParams(request, ["connection"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ChannelClientState(request: QueryChannelClientStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelClientStateResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/client_state?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ChannelConsensusState(request: QueryChannelConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static PacketCommitment(request: QueryPacketCommitmentRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments/{sequence}?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static PacketCommitments(request: QueryPacketCommitmentsRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static PacketReceipt(request: QueryPacketReceiptRequest, initRequest?: fm.InitReq): Promise<QueryPacketReceiptResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_receipts/{sequence}?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static PacketAcknowledgement(request: QueryPacketAcknowledgementRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_acks/{sequence}?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_acknowledgements?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static UnreceivedPackets(request: QueryUnreceivedPacketsRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedPacketsResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static UnreceivedAcks(request: QueryUnreceivedAcksRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedAcksResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static NextSequenceReceive(request: QueryNextSequenceReceiveRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceReceiveResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/{port_id}/next_sequence?${fm.renderURLSearchParams(request, ["channel_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

}