import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export class Msg {
  static ChannelOpenInit(request: MsgChannelOpenInit, initRequest?: fm.initReq): Promise<MsgChannelOpenInitResponse> {
    return fm.fetchReq(`/ChannelOpenInit/ChannelOpenInit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ChannelOpenTry(request: MsgChannelOpenTry, initRequest?: fm.initReq): Promise<MsgChannelOpenTryResponse> {
    return fm.fetchReq(`/ChannelOpenTry/ChannelOpenTry`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ChannelOpenAck(request: MsgChannelOpenAck, initRequest?: fm.initReq): Promise<MsgChannelOpenAckResponse> {
    return fm.fetchReq(`/ChannelOpenAck/ChannelOpenAck`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ChannelOpenConfirm(request: MsgChannelOpenConfirm, initRequest?: fm.initReq): Promise<MsgChannelOpenConfirmResponse> {
    return fm.fetchReq(`/ChannelOpenConfirm/ChannelOpenConfirm`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ChannelCloseInit(request: MsgChannelCloseInit, initRequest?: fm.initReq): Promise<MsgChannelCloseInitResponse> {
    return fm.fetchReq(`/ChannelCloseInit/ChannelCloseInit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ChannelCloseConfirm(request: MsgChannelCloseConfirm, initRequest?: fm.initReq): Promise<MsgChannelCloseConfirmResponse> {
    return fm.fetchReq(`/ChannelCloseConfirm/ChannelCloseConfirm`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static RecvPacket(request: MsgRecvPacket, initRequest?: fm.initReq): Promise<MsgRecvPacketResponse> {
    return fm.fetchReq(`/RecvPacket/RecvPacket`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Timeout(request: MsgTimeout, initRequest?: fm.initReq): Promise<MsgTimeoutResponse> {
    return fm.fetchReq(`/Timeout/Timeout`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static TimeoutOnClose(request: MsgTimeoutOnClose, initRequest?: fm.initReq): Promise<MsgTimeoutOnCloseResponse> {
    return fm.fetchReq(`/TimeoutOnClose/TimeoutOnClose`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Acknowledgement(request: MsgAcknowledgement, initRequest?: fm.initReq): Promise<MsgAcknowledgementResponse> {
    return fm.fetchReq(`/Acknowledgement/Acknowledgement`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}