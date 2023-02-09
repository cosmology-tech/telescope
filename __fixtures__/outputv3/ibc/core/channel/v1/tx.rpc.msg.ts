import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as fm from "../../../../grpc-gateway";
import { MsgChannelOpenInit, MsgChannelOpenInitSDKType, MsgChannelOpenInitResponse, MsgChannelOpenInitResponseSDKType, MsgChannelOpenTry, MsgChannelOpenTrySDKType, MsgChannelOpenTryResponse, MsgChannelOpenTryResponseSDKType, MsgChannelOpenAck, MsgChannelOpenAckSDKType, MsgChannelOpenAckResponse, MsgChannelOpenAckResponseSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmSDKType, MsgChannelOpenConfirmResponse, MsgChannelOpenConfirmResponseSDKType, MsgChannelCloseInit, MsgChannelCloseInitSDKType, MsgChannelCloseInitResponse, MsgChannelCloseInitResponseSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmSDKType, MsgChannelCloseConfirmResponse, MsgChannelCloseConfirmResponseSDKType, MsgRecvPacket, MsgRecvPacketSDKType, MsgRecvPacketResponse, MsgRecvPacketResponseSDKType, MsgTimeout, MsgTimeoutSDKType, MsgTimeoutResponse, MsgTimeoutResponseSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseSDKType, MsgTimeoutOnCloseResponse, MsgTimeoutOnCloseResponseSDKType, MsgAcknowledgement, MsgAcknowledgementSDKType, MsgAcknowledgementResponse, MsgAcknowledgementResponseSDKType } from "./tx";
export class Msg {
  //ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
  static ChannelOpenInit(request: MsgChannelOpenInit, initRequest?: fm.InitReq): Promise<MsgChannelOpenInitResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenInit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
  static ChannelOpenTry(request: MsgChannelOpenTry, initRequest?: fm.InitReq): Promise<MsgChannelOpenTryResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenTry`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
  static ChannelOpenAck(request: MsgChannelOpenAck, initRequest?: fm.InitReq): Promise<MsgChannelOpenAckResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenAck`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
  static ChannelOpenConfirm(request: MsgChannelOpenConfirm, initRequest?: fm.InitReq): Promise<MsgChannelOpenConfirmResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenConfirm`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
  static ChannelCloseInit(request: MsgChannelCloseInit, initRequest?: fm.InitReq): Promise<MsgChannelCloseInitResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/ChannelCloseInit`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //ChannelCloseConfirm defines a rpc handler method for
 MsgChannelCloseConfirm.
  static ChannelCloseConfirm(request: MsgChannelCloseConfirm, initRequest?: fm.InitReq): Promise<MsgChannelCloseConfirmResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/ChannelCloseConfirm`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //RecvPacket defines a rpc handler method for MsgRecvPacket.
  static RecvPacket(request: MsgRecvPacket, initRequest?: fm.InitReq): Promise<MsgRecvPacketResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/RecvPacket`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //Timeout defines a rpc handler method for MsgTimeout.
  static Timeout(request: MsgTimeout, initRequest?: fm.InitReq): Promise<MsgTimeoutResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/Timeout`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
  static TimeoutOnClose(request: MsgTimeoutOnClose, initRequest?: fm.InitReq): Promise<MsgTimeoutOnCloseResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/TimeoutOnClose`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //Acknowledgement defines a rpc handler method for MsgAcknowledgement.
  static Acknowledgement(request: MsgAcknowledgement, initRequest?: fm.InitReq): Promise<MsgAcknowledgementResponse> {
    return fm.fetchReq(`/ibc.core.channel.v1/Acknowledgement`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}