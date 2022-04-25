import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelOpenInitResponse, MsgChannelOpenTryResponse, MsgChannelOpenAckResponse, MsgChannelOpenConfirmResponse, MsgChannelCloseInitResponse, MsgChannelCloseConfirmResponse, MsgRecvPacketResponse, MsgTimeoutResponse, MsgTimeoutOnCloseResponse, MsgAcknowledgementResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Channel, Packet } from "../../../../ibc/core/channel/v1/channel";
import { Height } from "../../../../ibc/core/client/v1/client";
export const json = {
  channelOpenInit(value: MsgChannelOpenInit) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value
    };
  },

  channelOpenTry(value: MsgChannelOpenTry) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value
    };
  },

  channelOpenAck(value: MsgChannelOpenAck) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value
    };
  },

  channelOpenConfirm(value: MsgChannelOpenConfirm) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value
    };
  },

  channelCloseInit(value: MsgChannelCloseInit) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value
    };
  },

  channelCloseConfirm(value: MsgChannelCloseConfirm) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value
    };
  },

  recvPacket(value: MsgRecvPacket) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
      value
    };
  },

  timeout(value: MsgTimeout) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeout",
      value
    };
  },

  timeoutOnClose(value: MsgTimeoutOnClose) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value
    };
  },

  acknowledgement(value: MsgAcknowledgement) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
      value
    };
  }

};