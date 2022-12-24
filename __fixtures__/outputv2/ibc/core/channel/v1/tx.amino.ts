import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { MsgChannelOpenInit, MsgChannelOpenInitAmino, MsgChannelOpenInitSDKType, MsgChannelOpenTry, MsgChannelOpenTryAmino, MsgChannelOpenTrySDKType, MsgChannelOpenAck, MsgChannelOpenAckAmino, MsgChannelOpenAckSDKType, MsgChannelOpenConfirm, MsgChannelOpenConfirmAmino, MsgChannelOpenConfirmSDKType, MsgChannelCloseInit, MsgChannelCloseInitAmino, MsgChannelCloseInitSDKType, MsgChannelCloseConfirm, MsgChannelCloseConfirmAmino, MsgChannelCloseConfirmSDKType, MsgRecvPacket, MsgRecvPacketAmino, MsgRecvPacketSDKType, MsgTimeout, MsgTimeoutAmino, MsgTimeoutSDKType, MsgTimeoutOnClose, MsgTimeoutOnCloseAmino, MsgTimeoutOnCloseSDKType, MsgAcknowledgement, MsgAcknowledgementAmino, MsgAcknowledgementSDKType } from "./tx";
export const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: MsgChannelOpenInit.toAmino,
    fromAmino: MsgChannelOpenInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: MsgChannelOpenTry.toAmino,
    fromAmino: MsgChannelOpenTry.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: MsgChannelOpenAck.toAmino,
    fromAmino: MsgChannelOpenAck.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: MsgChannelOpenConfirm.toAmino,
    fromAmino: MsgChannelOpenConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: MsgChannelCloseInit.toAmino,
    fromAmino: MsgChannelCloseInit.fromAmino
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: MsgChannelCloseConfirm.toAmino,
    fromAmino: MsgChannelCloseConfirm.fromAmino
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: MsgRecvPacket.toAmino,
    fromAmino: MsgRecvPacket.fromAmino
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: MsgTimeout.toAmino,
    fromAmino: MsgTimeout.fromAmino
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: MsgTimeoutOnClose.toAmino,
    fromAmino: MsgTimeoutOnClose.fromAmino
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: MsgAcknowledgement.toAmino,
    fromAmino: MsgAcknowledgement.fromAmino
  }
};