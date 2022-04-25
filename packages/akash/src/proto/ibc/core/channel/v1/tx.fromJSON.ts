import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelOpenInitResponse, MsgChannelOpenTryResponse, MsgChannelOpenAckResponse, MsgChannelOpenConfirmResponse, MsgChannelCloseInitResponse, MsgChannelCloseConfirmResponse, MsgRecvPacketResponse, MsgTimeoutResponse, MsgTimeoutOnCloseResponse, MsgAcknowledgementResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Channel, Packet } from "../../../../ibc/core/channel/v1/channel";
import { Height } from "../../../../ibc/core/client/v1/client";
export const fromJSON = {
  channelOpenInit(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value: MsgChannelOpenInit.fromJSON(value)
    };
  },

  channelOpenTry(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value: MsgChannelOpenTry.fromJSON(value)
    };
  },

  channelOpenAck(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value: MsgChannelOpenAck.fromJSON(value)
    };
  },

  channelOpenConfirm(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.fromJSON(value)
    };
  },

  channelCloseInit(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value: MsgChannelCloseInit.fromJSON(value)
    };
  },

  channelCloseConfirm(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.fromJSON(value)
    };
  },

  recvPacket(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
      value: MsgRecvPacket.fromJSON(value)
    };
  },

  timeout(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeout",
      value: MsgTimeout.fromJSON(value)
    };
  },

  timeoutOnClose(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.fromJSON(value)
    };
  },

  acknowledgement(value: any) {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
      value: MsgAcknowledgement.fromJSON(value)
    };
  }

};