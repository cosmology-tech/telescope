import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.core.channel.v1";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel: Channel;
  signer: string;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitSDKType {
  port_id: string;
  channel: ChannelSDKType;
  signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseSDKType {}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previousChannelId: string;
  channel: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTrySDKType {
  port_id: string;
  previous_channel_id: string;
  channel: ChannelSDKType;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseSDKType {}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseSDKType {}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmSDKType {
  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseSDKType {}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitSDKType {
  port_id: string;
  channel_id: string;
  signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseSDKType {}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmSDKType {
  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseSDKType {}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet: Packet;
  proofCommitment: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketSDKType {
  packet: PacketSDKType;
  proof_commitment: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: Long;
  signer: string;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: Long;
  signer: string;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseSDKType {}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementSDKType {
  packet: PacketSDKType;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseSDKType {}
function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return {
    portId: "",
    channel: Channel.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenInit = {
  encode(message: MsgChannelOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenInit {
    const obj = createBaseMsgChannelOpenInit();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channel)) obj.channel = Channel.fromJSON(object.channel);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : Channel.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenInitSDKType): MsgChannelOpenInit {
    return {
      portId: object?.port_id,
      channel: object.channel ? Channel.fromSDK(object.channel) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenInit): MsgChannelOpenInitSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {};
}
export const MsgChannelOpenInitResponse = {
  encode(_: MsgChannelOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenInitResponse {
    const obj = createBaseMsgChannelOpenInitResponse();
    return obj;
  },
  toJSON(_: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenInitResponseSDKType): MsgChannelOpenInitResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    portId: "",
    previousChannelId: "",
    channel: Channel.fromPartial({}),
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenTry = {
  encode(message: MsgChannelOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenTry {
    const obj = createBaseMsgChannelOpenTry();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.previousChannelId)) obj.previousChannelId = String(object.previousChannelId);
    if (isSet(object.channel)) obj.channel = Channel.fromJSON(object.channel);
    if (isSet(object.counterpartyVersion)) obj.counterpartyVersion = String(object.counterpartyVersion);
    if (isSet(object.proofInit)) obj.proofInit = bytesFromBase64(object.proofInit);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenTry): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined && (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : Channel.fromPartial({});
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenTrySDKType): MsgChannelOpenTry {
    return {
      portId: object?.port_id,
      previousChannelId: object?.previous_channel_id,
      channel: object.channel ? Channel.fromSDK(object.channel) : undefined,
      counterpartyVersion: object?.counterparty_version,
      proofInit: object?.proof_init,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenTry): MsgChannelOpenTrySDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.previous_channel_id = message.previousChannelId;
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_init = message.proofInit;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {};
}
export const MsgChannelOpenTryResponse = {
  encode(_: MsgChannelOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenTryResponse {
    const obj = createBaseMsgChannelOpenTryResponse();
    return obj;
  },
  toJSON(_: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenTryResponseSDKType): MsgChannelOpenTryResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenAck = {
  encode(message: MsgChannelOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenAck {
    const obj = createBaseMsgChannelOpenAck();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.counterpartyChannelId)) obj.counterpartyChannelId = String(object.counterpartyChannelId);
    if (isSet(object.counterpartyVersion)) obj.counterpartyVersion = String(object.counterpartyVersion);
    if (isSet(object.proofTry)) obj.proofTry = bytesFromBase64(object.proofTry);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenAck): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined && (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined && (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenAckSDKType): MsgChannelOpenAck {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      counterpartyChannelId: object?.counterparty_channel_id,
      counterpartyVersion: object?.counterparty_version,
      proofTry: object?.proof_try,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenAck): MsgChannelOpenAckSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.counterparty_channel_id = message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_try = message.proofTry;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}
export const MsgChannelOpenAckResponse = {
  encode(_: MsgChannelOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenAckResponse {
    const obj = createBaseMsgChannelOpenAckResponse();
    return obj;
  },
  toJSON(_: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenAckResponseSDKType): MsgChannelOpenAckResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelOpenConfirm = {
  encode(message: MsgChannelOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenConfirm {
    const obj = createBaseMsgChannelOpenConfirm();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.proofAck)) obj.proofAck = bytesFromBase64(object.proofAck);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined && (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenConfirmSDKType): MsgChannelOpenConfirm {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      proofAck: object?.proof_ack,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_ack = message.proofAck;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}
export const MsgChannelOpenConfirmResponse = {
  encode(_: MsgChannelOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    const obj = createBaseMsgChannelOpenConfirmResponse();
    return obj;
  },
  toJSON(_: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenConfirmResponseSDKType): MsgChannelOpenConfirmResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}
export const MsgChannelCloseInit = {
  encode(message: MsgChannelCloseInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelCloseInit {
    const obj = createBaseMsgChannelCloseInit();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelCloseInitSDKType): MsgChannelCloseInit {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelCloseInit): MsgChannelCloseInitSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}
export const MsgChannelCloseInitResponse = {
  encode(_: MsgChannelCloseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelCloseInitResponse {
    const obj = createBaseMsgChannelCloseInitResponse();
    return obj;
  },
  toJSON(_: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  fromSDK(_: MsgChannelCloseInitResponseSDKType): MsgChannelCloseInitResponse {
    return {};
  },
  toSDK(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgChannelCloseConfirm = {
  encode(message: MsgChannelCloseConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelCloseConfirm {
    const obj = createBaseMsgChannelCloseConfirm();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.proofInit)) obj.proofInit = bytesFromBase64(object.proofInit);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelCloseConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelCloseConfirmSDKType): MsgChannelCloseConfirm {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      proofInit: object?.proof_init,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_init = message.proofInit;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}
export const MsgChannelCloseConfirmResponse = {
  encode(_: MsgChannelCloseConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    const obj = createBaseMsgChannelCloseConfirmResponse();
    return obj;
  },
  toJSON(_: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  fromSDK(_: MsgChannelCloseConfirmResponseSDKType): MsgChannelCloseConfirmResponse {
    return {};
  },
  toSDK(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgRecvPacket = {
  encode(message: MsgRecvPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecvPacket {
    const obj = createBaseMsgRecvPacket();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofCommitment)) obj.proofCommitment = bytesFromBase64(object.proofCommitment);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined && (obj.proofCommitment = base64FromBytes(message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : Packet.fromPartial({});
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgRecvPacketSDKType): MsgRecvPacket {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      proofCommitment: object?.proof_commitment,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgRecvPacket): MsgRecvPacketSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.proof_commitment = message.proofCommitment;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}
export const MsgRecvPacketResponse = {
  encode(_: MsgRecvPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRecvPacketResponse {
    const obj = createBaseMsgRecvPacketResponse();
    return obj;
  },
  toJSON(_: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    return message;
  },
  fromSDK(_: MsgRecvPacketResponseSDKType): MsgRecvPacketResponse {
    return {};
  },
  toSDK(_: MsgRecvPacketResponse): MsgRecvPacketResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: Long.UZERO,
    signer: ""
  };
}
export const MsgTimeout = {
  encode(message: MsgTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = (reader.uint64() as Long);
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeout {
    const obj = createBaseMsgTimeout();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofUnreceived)) obj.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.nextSequenceRecv)) obj.nextSequenceRecv = Long.fromValue(object.nextSequenceRecv);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : Packet.fromPartial({});
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgTimeoutSDKType): MsgTimeout {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      proofUnreceived: object?.proof_unreceived,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      nextSequenceRecv: object?.next_sequence_recv,
      signer: object?.signer
    };
  },
  toSDK(message: MsgTimeout): MsgTimeoutSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.proof_unreceived = message.proofUnreceived;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.next_sequence_recv = message.nextSequenceRecv;
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {};
}
export const MsgTimeoutResponse = {
  encode(_: MsgTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTimeoutResponse {
    const obj = createBaseMsgTimeoutResponse();
    return obj;
  },
  toJSON(_: MsgTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    return message;
  },
  fromSDK(_: MsgTimeoutResponseSDKType): MsgTimeoutResponse {
    return {};
  },
  toSDK(_: MsgTimeoutResponse): MsgTimeoutResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: Long.UZERO,
    signer: ""
  };
}
export const MsgTimeoutOnClose = {
  encode(message: MsgTimeoutOnClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = (reader.uint64() as Long);
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeoutOnClose {
    const obj = createBaseMsgTimeoutOnClose();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofUnreceived)) obj.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    if (isSet(object.proofClose)) obj.proofClose = bytesFromBase64(object.proofClose);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.nextSequenceRecv)) obj.nextSequenceRecv = Long.fromValue(object.nextSequenceRecv);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofClose !== undefined && (obj.proofClose = base64FromBytes(message.proofClose !== undefined ? message.proofClose : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : Packet.fromPartial({});
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgTimeoutOnCloseSDKType): MsgTimeoutOnClose {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      proofUnreceived: object?.proof_unreceived,
      proofClose: object?.proof_close,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      nextSequenceRecv: object?.next_sequence_recv,
      signer: object?.signer
    };
  },
  toSDK(message: MsgTimeoutOnClose): MsgTimeoutOnCloseSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.proof_unreceived = message.proofUnreceived;
    obj.proof_close = message.proofClose;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.next_sequence_recv = message.nextSequenceRecv;
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {};
}
export const MsgTimeoutOnCloseResponse = {
  encode(_: MsgTimeoutOnCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTimeoutOnCloseResponse {
    const obj = createBaseMsgTimeoutOnCloseResponse();
    return obj;
  },
  toJSON(_: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    return message;
  },
  fromSDK(_: MsgTimeoutOnCloseResponseSDKType): MsgTimeoutOnCloseResponse {
    return {};
  },
  toSDK(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: Packet.fromPartial({}),
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgAcknowledgement = {
  encode(message: MsgAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgement {
    const obj = createBaseMsgAcknowledgement();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.acknowledgement)) obj.acknowledgement = bytesFromBase64(object.acknowledgement);
    if (isSet(object.proofAcked)) obj.proofAcked = bytesFromBase64(object.proofAcked);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proofAcked !== undefined && (obj.proofAcked = base64FromBytes(message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : Packet.fromPartial({});
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : Height.fromPartial({});
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgAcknowledgementSDKType): MsgAcknowledgement {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      acknowledgement: object?.acknowledgement,
      proofAcked: object?.proof_acked,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgAcknowledgement): MsgAcknowledgementSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.acknowledgement = message.acknowledgement;
    obj.proof_acked = message.proofAcked;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  }
};
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}
export const MsgAcknowledgementResponse = {
  encode(_: MsgAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAcknowledgementResponse {
    const obj = createBaseMsgAcknowledgementResponse();
    return obj;
  },
  toJSON(_: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    return message;
  },
  fromSDK(_: MsgAcknowledgementResponseSDKType): MsgAcknowledgementResponse {
    return {};
  },
  toSDK(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseSDKType {
    const obj: any = {};
    return obj;
  }
};