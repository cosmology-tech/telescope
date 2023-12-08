import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
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
export interface MsgChannelOpenInitProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit";
  value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitAmino {
  port_id: string;
  channel?: ChannelAmino;
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
export interface MsgChannelOpenInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse";
  value: Uint8Array;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {}
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
export interface MsgChannelOpenTryProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry";
  value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTryAmino {
  port_id: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previous_channel_id: string;
  channel?: ChannelAmino;
  counterparty_version: string;
  proof_init: string;
  proof_height?: HeightAmino;
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
export interface MsgChannelOpenTryResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse";
  value: Uint8Array;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {}
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
export interface MsgChannelOpenAckProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck";
  value: Uint8Array;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckAmino {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: string;
  proof_height?: HeightAmino;
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
export interface MsgChannelOpenAckResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse";
  value: Uint8Array;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {}
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
export interface MsgChannelOpenConfirmProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm";
  value: Uint8Array;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmAmino {
  port_id: string;
  channel_id: string;
  proof_ack: string;
  proof_height?: HeightAmino;
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
export interface MsgChannelOpenConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {}
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
export interface MsgChannelCloseInitProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit";
  value: Uint8Array;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitAmino {
  port_id: string;
  channel_id: string;
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
export interface MsgChannelCloseInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse";
  value: Uint8Array;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {}
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
export interface MsgChannelCloseConfirmProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm";
  value: Uint8Array;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmAmino {
  port_id: string;
  channel_id: string;
  proof_init: string;
  proof_height?: HeightAmino;
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
export interface MsgChannelCloseConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {}
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
export interface MsgRecvPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket";
  value: Uint8Array;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
  packet?: PacketAmino;
  proof_commitment: string;
  proof_height?: HeightAmino;
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
export interface MsgRecvPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse";
  value: Uint8Array;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: bigint;
  signer: string;
}
export interface MsgTimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout";
  value: Uint8Array;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
  packet?: PacketAmino;
  proof_unreceived: string;
  proof_height?: HeightAmino;
  next_sequence_recv: string;
  signer: string;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: bigint;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {}
export interface MsgTimeoutResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse";
  value: Uint8Array;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: bigint;
  signer: string;
}
export interface MsgTimeoutOnCloseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose";
  value: Uint8Array;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
  packet?: PacketAmino;
  proof_unreceived: string;
  proof_close: string;
  proof_height?: HeightAmino;
  next_sequence_recv: string;
  signer: string;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: bigint;
  signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {}
export interface MsgTimeoutOnCloseResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
  value: Uint8Array;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {}
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
export interface MsgAcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement";
  value: Uint8Array;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
  packet?: PacketAmino;
  acknowledgement: string;
  proof_acked: string;
  proof_height?: HeightAmino;
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
export interface MsgAcknowledgementResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse";
  value: Uint8Array;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {}
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
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
  aminoType: "cosmos-sdk/MsgChannelOpenInit",
  encode(message: MsgChannelOpenInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
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
  },
  fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit {
    return {
      portId: object.port_id,
      channel: object?.channel ? Channel.fromAmino(object.channel) : Channel.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenInit, useInterfaces: boolean = true): MsgChannelOpenInitAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel = message.channel ? Channel.toAmino(message.channel, useInterfaces) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenInitProtoMsg, useInterfaces: boolean = true): MsgChannelOpenInit {
    return MsgChannelOpenInit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenInit): Uint8Array {
    return MsgChannelOpenInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value: MsgChannelOpenInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {};
}
export const MsgChannelOpenInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
  encode(_: MsgChannelOpenInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenInitResponse, useInterfaces: boolean = true): MsgChannelOpenInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenInitResponseProtoMsg, useInterfaces: boolean = true): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenInitResponse): Uint8Array {
    return MsgChannelOpenInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
  aminoType: "cosmos-sdk/MsgChannelOpenTry",
  encode(message: MsgChannelOpenTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.channel = Channel.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
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
  },
  fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry {
    return {
      portId: object.port_id,
      previousChannelId: object.previous_channel_id,
      channel: object?.channel ? Channel.fromAmino(object.channel) : Channel.fromPartial({}),
      counterpartyVersion: object.counterparty_version,
      proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenTry, useInterfaces: boolean = true): MsgChannelOpenTryAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.previous_channel_id = message.previousChannelId;
    obj.channel = message.channel ? Channel.toAmino(message.channel, useInterfaces) : undefined;
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_init = base64FromBytes(message.proofInit);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenTryProtoMsg, useInterfaces: boolean = true): MsgChannelOpenTry {
    return MsgChannelOpenTry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenTry): Uint8Array {
    return MsgChannelOpenTry.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value: MsgChannelOpenTry.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {};
}
export const MsgChannelOpenTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
  encode(_: MsgChannelOpenTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenTryResponse, useInterfaces: boolean = true): MsgChannelOpenTryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenTryResponseProtoMsg, useInterfaces: boolean = true): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenTryResponse): Uint8Array {
    return MsgChannelOpenTryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
  aminoType: "cosmos-sdk/MsgChannelOpenAck",
  encode(message: MsgChannelOpenAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
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
  },
  fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      counterpartyChannelId: object.counterparty_channel_id,
      counterpartyVersion: object.counterparty_version,
      proof_try: isSet(object.proof_try) ? bytesFromBase64(object.proof_try) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenAck, useInterfaces: boolean = true): MsgChannelOpenAckAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.counterparty_channel_id = message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_try = base64FromBytes(message.proofTry);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenAckProtoMsg, useInterfaces: boolean = true): MsgChannelOpenAck {
    return MsgChannelOpenAck.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenAck): Uint8Array {
    return MsgChannelOpenAck.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value: MsgChannelOpenAck.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}
export const MsgChannelOpenAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
  encode(_: MsgChannelOpenAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenAckResponse, useInterfaces: boolean = true): MsgChannelOpenAckResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenAckResponseProtoMsg, useInterfaces: boolean = true): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenAckResponse): Uint8Array {
    return MsgChannelOpenAckResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
  encode(message: MsgChannelOpenConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
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
  },
  fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      proof_ack: isSet(object.proof_ack) ? bytesFromBase64(object.proof_ack) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenConfirm, useInterfaces: boolean = true): MsgChannelOpenConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_ack = base64FromBytes(message.proofAck);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenConfirmProtoMsg, useInterfaces: boolean = true): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenConfirm): Uint8Array {
    return MsgChannelOpenConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}
export const MsgChannelOpenConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
  encode(_: MsgChannelOpenConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelOpenConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenConfirmResponse, useInterfaces: boolean = true): MsgChannelOpenConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChannelOpenConfirmResponseProtoMsg, useInterfaces: boolean = true): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelOpenConfirmResponse): Uint8Array {
    return MsgChannelOpenConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
  aminoType: "cosmos-sdk/MsgChannelCloseInit",
  encode(message: MsgChannelCloseInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelCloseInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelCloseInit, useInterfaces: boolean = true): MsgChannelCloseInitAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgChannelCloseInitProtoMsg, useInterfaces: boolean = true): MsgChannelCloseInit {
    return MsgChannelCloseInit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelCloseInit): Uint8Array {
    return MsgChannelCloseInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value: MsgChannelCloseInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}
export const MsgChannelCloseInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
  aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
  encode(_: MsgChannelCloseInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelCloseInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse {
    return {};
  },
  toAmino(_: MsgChannelCloseInitResponse, useInterfaces: boolean = true): MsgChannelCloseInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChannelCloseInitResponseProtoMsg, useInterfaces: boolean = true): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelCloseInitResponse): Uint8Array {
    return MsgChannelCloseInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
  encode(message: MsgChannelCloseConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelCloseConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
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
  },
  fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelCloseConfirm, useInterfaces: boolean = true): MsgChannelCloseConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_init = base64FromBytes(message.proofInit);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgChannelCloseConfirmProtoMsg, useInterfaces: boolean = true): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelCloseConfirm): Uint8Array {
    return MsgChannelCloseConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}
export const MsgChannelCloseConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
  encode(_: MsgChannelCloseConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgChannelCloseConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse {
    return {};
  },
  toAmino(_: MsgChannelCloseConfirmResponse, useInterfaces: boolean = true): MsgChannelCloseConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgChannelCloseConfirmResponseProtoMsg, useInterfaces: boolean = true): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgChannelCloseConfirmResponse): Uint8Array {
    return MsgChannelCloseConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
  aminoType: "cosmos-sdk/MsgRecvPacket",
  encode(message: MsgRecvPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRecvPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
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
  },
  fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : Packet.fromPartial({}),
      proof_commitment: isSet(object.proof_commitment) ? bytesFromBase64(object.proof_commitment) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgRecvPacket, useInterfaces: boolean = true): MsgRecvPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet, useInterfaces) : undefined;
    obj.proof_commitment = base64FromBytes(message.proofCommitment);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgRecvPacketProtoMsg, useInterfaces: boolean = true): MsgRecvPacket {
    return MsgRecvPacket.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRecvPacket): Uint8Array {
    return MsgRecvPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
      value: MsgRecvPacket.encode(message).finish()
    };
  }
};
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}
export const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
  aminoType: "cosmos-sdk/MsgRecvPacketResponse",
  encode(_: MsgRecvPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRecvPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgRecvPacketResponseAmino): MsgRecvPacketResponse {
    return {};
  },
  toAmino(_: MsgRecvPacketResponse, useInterfaces: boolean = true): MsgRecvPacketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgRecvPacketResponseProtoMsg, useInterfaces: boolean = true): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRecvPacketResponse): Uint8Array {
    return MsgRecvPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: ""
  };
}
export const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
  aminoType: "cosmos-sdk/MsgTimeout",
  encode(message: MsgTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64();
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
    if (isSet(object.nextSequenceRecv)) obj.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    }
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
  },
  fromAmino(object: MsgTimeoutAmino): MsgTimeout {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : Packet.fromPartial({}),
      proof_unreceived: isSet(object.proof_unreceived) ? bytesFromBase64(object.proof_unreceived) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      nextSequenceRecv: BigInt(object.next_sequence_recv),
      signer: object.signer
    };
  },
  toAmino(message: MsgTimeout, useInterfaces: boolean = true): MsgTimeoutAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet, useInterfaces) : undefined;
    obj.proof_unreceived = base64FromBytes(message.proofUnreceived);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.next_sequence_recv = message.nextSequenceRecv ? message.nextSequenceRecv.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgTimeoutProtoMsg, useInterfaces: boolean = true): MsgTimeout {
    return MsgTimeout.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTimeout): Uint8Array {
    return MsgTimeout.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeout",
      value: MsgTimeout.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {};
}
export const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
  aminoType: "cosmos-sdk/MsgTimeoutResponse",
  encode(_: MsgTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgTimeoutResponseAmino): MsgTimeoutResponse {
    return {};
  },
  toAmino(_: MsgTimeoutResponse, useInterfaces: boolean = true): MsgTimeoutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgTimeoutResponseProtoMsg, useInterfaces: boolean = true): MsgTimeoutResponse {
    return MsgTimeoutResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTimeoutResponse): Uint8Array {
    return MsgTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
      value: MsgTimeoutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: ""
  };
}
export const MsgTimeoutOnClose = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  aminoType: "cosmos-sdk/MsgTimeoutOnClose",
  encode(message: MsgTimeoutOnClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTimeoutOnClose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64();
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
    if (isSet(object.nextSequenceRecv)) obj.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofClose !== undefined && (obj.proofClose = base64FromBytes(message.proofClose !== undefined ? message.proofClose : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    }
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
  },
  fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : Packet.fromPartial({}),
      proof_unreceived: isSet(object.proof_unreceived) ? bytesFromBase64(object.proof_unreceived) : new Uint8Array(),
      proof_close: isSet(object.proof_close) ? bytesFromBase64(object.proof_close) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      nextSequenceRecv: BigInt(object.next_sequence_recv),
      signer: object.signer
    };
  },
  toAmino(message: MsgTimeoutOnClose, useInterfaces: boolean = true): MsgTimeoutOnCloseAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet, useInterfaces) : undefined;
    obj.proof_unreceived = base64FromBytes(message.proofUnreceived);
    obj.proof_close = base64FromBytes(message.proofClose);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.next_sequence_recv = message.nextSequenceRecv ? message.nextSequenceRecv.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgTimeoutOnCloseProtoMsg, useInterfaces: boolean = true): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTimeoutOnClose): Uint8Array {
    return MsgTimeoutOnClose.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {};
}
export const MsgTimeoutOnCloseResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
  aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
  encode(_: MsgTimeoutOnCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgTimeoutOnCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse {
    return {};
  },
  toAmino(_: MsgTimeoutOnCloseResponse, useInterfaces: boolean = true): MsgTimeoutOnCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgTimeoutOnCloseResponseProtoMsg, useInterfaces: boolean = true): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgTimeoutOnCloseResponse): Uint8Array {
    return MsgTimeoutOnCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.encode(message).finish()
    };
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
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
  aminoType: "cosmos-sdk/MsgAcknowledgement",
  encode(message: MsgAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32(), useInterfaces);
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
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
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
  },
  fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : Packet.fromPartial({}),
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proof_acked: isSet(object.proof_acked) ? bytesFromBase64(object.proof_acked) : new Uint8Array(),
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : Height.fromPartial({}),
      signer: object.signer
    };
  },
  toAmino(message: MsgAcknowledgement, useInterfaces: boolean = true): MsgAcknowledgementAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet, useInterfaces) : undefined;
    obj.acknowledgement = base64FromBytes(message.acknowledgement);
    obj.proof_acked = base64FromBytes(message.proofAcked);
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight, useInterfaces) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromProtoMsg(message: MsgAcknowledgementProtoMsg, useInterfaces: boolean = true): MsgAcknowledgement {
    return MsgAcknowledgement.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAcknowledgement): Uint8Array {
    return MsgAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(message).finish()
    };
  }
};
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}
export const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
  aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
  encode(_: MsgAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse {
    return {};
  },
  toAmino(_: MsgAcknowledgementResponse, useInterfaces: boolean = true): MsgAcknowledgementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg, useInterfaces: boolean = true): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAcknowledgementResponse): Uint8Array {
    return MsgAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.encode(message).finish()
    };
  }
};