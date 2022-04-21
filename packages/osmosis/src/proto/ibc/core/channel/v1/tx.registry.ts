import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelOpenInitResponse, MsgChannelOpenTryResponse, MsgChannelOpenAckResponse, MsgChannelOpenConfirmResponse, MsgChannelCloseInitResponse, MsgChannelCloseConfirmResponse, MsgRecvPacketResponse, MsgTimeoutResponse, MsgTimeoutOnCloseResponse, MsgAcknowledgementResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Channel, Packet } from "../../../../ibc/core/channel/v1/channel";
import { Height } from "../../../../ibc/core/client/v1/client";
export const registry = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": MsgChannelOpenInit,
  "/ibc.core.channel.v1.MsgChannelOpenTry": MsgChannelOpenTry,
  "/ibc.core.channel.v1.MsgChannelOpenAck": MsgChannelOpenAck,
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": MsgChannelOpenConfirm,
  "/ibc.core.channel.v1.MsgChannelCloseInit": MsgChannelCloseInit,
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": MsgChannelCloseConfirm,
  "/ibc.core.channel.v1.MsgRecvPacket": MsgRecvPacket,
  "/ibc.core.channel.v1.MsgTimeout": MsgTimeout,
  "/ibc.core.channel.v1.MsgTimeoutOnClose": MsgTimeoutOnClose,
  "/ibc.core.channel.v1.MsgAcknowledgement": MsgAcknowledgement
};