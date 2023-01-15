import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export class Msg {
  static ChannelOpenInit(request: MsgChannelOpenInit, initRequest?: fm.initReq): Promise<MsgChannelOpenInitResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenInit`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelOpenTry(request: MsgChannelOpenTry, initRequest?: fm.initReq): Promise<MsgChannelOpenTryResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenTry`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelOpenAck(request: MsgChannelOpenAck, initRequest?: fm.initReq): Promise<MsgChannelOpenAckResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenAck`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelOpenConfirm(request: MsgChannelOpenConfirm, initRequest?: fm.initReq): Promise<MsgChannelOpenConfirmResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelOpenConfirm`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelCloseInit(request: MsgChannelCloseInit, initRequest?: fm.initReq): Promise<MsgChannelCloseInitResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelCloseInit`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelCloseConfirm(request: MsgChannelCloseConfirm, initRequest?: fm.initReq): Promise<MsgChannelCloseConfirmResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/ChannelCloseConfirm`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static RecvPacket(request: MsgRecvPacket, initRequest?: fm.initReq): Promise<MsgRecvPacketResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/RecvPacket`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Timeout(request: MsgTimeout, initRequest?: fm.initReq): Promise<MsgTimeoutResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/Timeout`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static TimeoutOnClose(request: MsgTimeoutOnClose, initRequest?: fm.initReq): Promise<MsgTimeoutOnCloseResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/TimeoutOnClose`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Acknowledgement(request: MsgAcknowledgement, initRequest?: fm.initReq): Promise<MsgAcknowledgementResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1.Msg/Acknowledgement`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}