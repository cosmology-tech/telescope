import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelOpenInitResponse, MsgChannelOpenTryResponse, MsgChannelOpenAckResponse, MsgChannelOpenConfirmResponse, MsgChannelCloseInitResponse, MsgChannelCloseConfirmResponse, MsgRecvPacketResponse, MsgTimeoutResponse, MsgTimeoutOnCloseResponse, MsgAcknowledgementResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Channel, Packet } from "../../../../ibc/core/channel/v1/channel";
import { Height } from "../../../../ibc/core/client/v1/client";
export const encoded = {
  channelOpenInit(value: MsgChannelOpenInit) {
    return {
      type_url: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value: MsgChannelOpenInit.encode(value).finish()
    };
  },

  channelOpenTry(value: MsgChannelOpenTry) {
    return {
      type_url: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value: MsgChannelOpenTry.encode(value).finish()
    };
  },

  channelOpenAck(value: MsgChannelOpenAck) {
    return {
      type_url: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value: MsgChannelOpenAck.encode(value).finish()
    };
  },

  channelOpenConfirm(value: MsgChannelOpenConfirm) {
    return {
      type_url: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.encode(value).finish()
    };
  },

  channelCloseInit(value: MsgChannelCloseInit) {
    return {
      type_url: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value: MsgChannelCloseInit.encode(value).finish()
    };
  },

  channelCloseConfirm(value: MsgChannelCloseConfirm) {
    return {
      type_url: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.encode(value).finish()
    };
  },

  recvPacket(value: MsgRecvPacket) {
    return {
      type_url: "/ibc.core.channel.v1.MsgRecvPacket",
      value: MsgRecvPacket.encode(value).finish()
    };
  },

  timeout(value: MsgTimeout) {
    return {
      type_url: "/ibc.core.channel.v1.MsgTimeout",
      value: MsgTimeout.encode(value).finish()
    };
  },

  timeoutOnClose(value: MsgTimeoutOnClose) {
    return {
      type_url: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.encode(value).finish()
    };
  },

  acknowledgement(value: MsgAcknowledgement) {
    return {
      type_url: "/ibc.core.channel.v1.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(value).finish()
    };
  }

};