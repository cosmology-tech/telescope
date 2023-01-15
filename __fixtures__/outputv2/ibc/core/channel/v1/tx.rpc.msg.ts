import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export class Msg {
  static ChannelOpenInit(request: MsgChannelOpenInit, initRequest?: fm.initReq): Promise<MsgChannelOpenInitResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelOpenTry(request: MsgChannelOpenTry, initRequest?: fm.initReq): Promise<MsgChannelOpenTryResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelOpenAck(request: MsgChannelOpenAck, initRequest?: fm.initReq): Promise<MsgChannelOpenAckResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelOpenConfirm(request: MsgChannelOpenConfirm, initRequest?: fm.initReq): Promise<MsgChannelOpenConfirmResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelCloseInit(request: MsgChannelCloseInit, initRequest?: fm.initReq): Promise<MsgChannelCloseInitResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ChannelCloseConfirm(request: MsgChannelCloseConfirm, initRequest?: fm.initReq): Promise<MsgChannelCloseConfirmResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static RecvPacket(request: MsgRecvPacket, initRequest?: fm.initReq): Promise<MsgRecvPacketResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Timeout(request: MsgTimeout, initRequest?: fm.initReq): Promise<MsgTimeoutResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static TimeoutOnClose(request: MsgTimeoutOnClose, initRequest?: fm.initReq): Promise<MsgTimeoutOnCloseResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static Acknowledgement(request: MsgAcknowledgement, initRequest?: fm.initReq): Promise<MsgAcknowledgementResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}