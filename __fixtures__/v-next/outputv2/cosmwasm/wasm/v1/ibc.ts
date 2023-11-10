import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmwasm.wasm.v1";
/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: bigint;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: bigint;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}
export interface MsgIBCSendProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend";
  value: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendAmino {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height: string;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: string;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data: Uint8Array;
}
export interface MsgIBCSendAminoMsg {
  type: "wasm/MsgIBCSend";
  value: MsgIBCSendAmino;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
  channel: string;
  timeout_height: bigint;
  timeout_timestamp: bigint;
  data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel: string;
}
export interface MsgIBCCloseChannelProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel";
  value: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelAmino {
  channel: string;
}
export interface MsgIBCCloseChannelAminoMsg {
  type: "wasm/MsgIBCCloseChannel";
  value: MsgIBCCloseChannelAmino;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
  channel: string;
}
function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: "",
    timeoutHeight: BigInt(0),
    timeoutTimestamp: BigInt(0),
    data: new Uint8Array()
  };
}
export const MsgIBCSend = {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
  aminoType: "wasm/MsgIBCSend",
  encode(message: MsgIBCSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.timeoutHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIBCSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        case 4:
          message.timeoutHeight = reader.uint64();
          break;
        case 5:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIBCSend {
    const obj = createBaseMsgIBCSend();
    if (isSet(object.channel)) obj.channel = String(object.channel);
    if (isSet(object.timeoutHeight)) obj.timeoutHeight = BigInt(object.timeoutHeight.toString());
    if (isSet(object.timeoutTimestamp)) obj.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || BigInt(0)).toString());
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt(0)).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = BigInt(object.timeoutHeight.toString());
    }
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgIBCSendSDKType): MsgIBCSend {
    return {
      channel: object?.channel,
      timeoutHeight: object?.timeout_height,
      timeoutTimestamp: object?.timeout_timestamp,
      data: object?.data
    };
  },
  toSDK(message: MsgIBCSend): MsgIBCSendSDKType {
    const obj: any = {};
    obj.channel = message.channel;
    obj.timeout_height = message.timeoutHeight;
    obj.timeout_timestamp = message.timeoutTimestamp;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: MsgIBCSendAmino): MsgIBCSend {
    return {
      channel: object.channel,
      timeoutHeight: BigInt(object.timeout_height),
      timeoutTimestamp: BigInt(object.timeout_timestamp),
      data: object.data
    };
  },
  toAmino(message: MsgIBCSend, useInterfaces: boolean = true): MsgIBCSendAmino {
    const obj: any = {};
    obj.channel = message.channel;
    obj.timeout_height = message.timeoutHeight ? message.timeoutHeight.toString() : undefined;
    obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgIBCSendAminoMsg): MsgIBCSend {
    return MsgIBCSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSend, useInterfaces: boolean = true): MsgIBCSendAminoMsg {
    return {
      type: "wasm/MsgIBCSend",
      value: MsgIBCSend.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgIBCSendProtoMsg, useInterfaces: boolean = true): MsgIBCSend {
    return MsgIBCSend.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIBCSend): Uint8Array {
    return MsgIBCSend.encode(message).finish();
  },
  toProtoMsg(message: MsgIBCSend): MsgIBCSendProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend",
      value: MsgIBCSend.encode(message).finish()
    };
  }
};
function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return {
    channel: ""
  };
}
export const MsgIBCCloseChannel = {
  typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
  aminoType: "wasm/MsgIBCCloseChannel",
  encode(message: MsgIBCCloseChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIBCCloseChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIBCCloseChannel {
    const obj = createBaseMsgIBCCloseChannel();
    if (isSet(object.channel)) obj.channel = String(object.channel);
    return obj;
  },
  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
    return message;
  },
  fromSDK(object: MsgIBCCloseChannelSDKType): MsgIBCCloseChannel {
    return {
      channel: object?.channel
    };
  },
  toSDK(message: MsgIBCCloseChannel): MsgIBCCloseChannelSDKType {
    const obj: any = {};
    obj.channel = message.channel;
    return obj;
  },
  fromAmino(object: MsgIBCCloseChannelAmino): MsgIBCCloseChannel {
    return {
      channel: object.channel
    };
  },
  toAmino(message: MsgIBCCloseChannel, useInterfaces: boolean = true): MsgIBCCloseChannelAmino {
    const obj: any = {};
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgIBCCloseChannelAminoMsg): MsgIBCCloseChannel {
    return MsgIBCCloseChannel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCCloseChannel, useInterfaces: boolean = true): MsgIBCCloseChannelAminoMsg {
    return {
      type: "wasm/MsgIBCCloseChannel",
      value: MsgIBCCloseChannel.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgIBCCloseChannelProtoMsg, useInterfaces: boolean = true): MsgIBCCloseChannel {
    return MsgIBCCloseChannel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIBCCloseChannel): Uint8Array {
    return MsgIBCCloseChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel",
      value: MsgIBCCloseChannel.encode(message).finish()
    };
  }
};