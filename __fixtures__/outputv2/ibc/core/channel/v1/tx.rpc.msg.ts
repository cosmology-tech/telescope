import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export class Msg {
  static ChannelOpenInit(): Promise<MsgChannelOpenInitResponse> {}

  static ChannelOpenTry(): Promise<MsgChannelOpenTryResponse> {}

  static ChannelOpenAck(): Promise<MsgChannelOpenAckResponse> {}

  static ChannelOpenConfirm(): Promise<MsgChannelOpenConfirmResponse> {}

  static ChannelCloseInit(): Promise<MsgChannelCloseInitResponse> {}

  static ChannelCloseConfirm(): Promise<MsgChannelCloseConfirmResponse> {}

  static RecvPacket(): Promise<MsgRecvPacketResponse> {}

  static Timeout(): Promise<MsgTimeoutResponse> {}

  static TimeoutOnClose(): Promise<MsgTimeoutOnCloseResponse> {}

  static Acknowledgement(): Promise<MsgAcknowledgementResponse> {}

}