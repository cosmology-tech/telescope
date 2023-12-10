import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
/** EventSend is emitted on Msg/Send */
export interface EventSend {
  classId: string;
  id: string;
  sender: string;
  receiver: string;
}
export interface EventSendProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventSend";
  value: Uint8Array;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendAmino {
  class_id?: string;
  id?: string;
  sender?: string;
  receiver?: string;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendSDKType {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
  classId: string;
  id: string;
  owner: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventMint";
  value: Uint8Array;
}
/** EventMint is emitted on Mint */
export interface EventMintAmino {
  class_id?: string;
  id?: string;
  owner?: string;
}
/** EventMint is emitted on Mint */
export interface EventMintSDKType {
  class_id: string;
  id: string;
  owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
  classId: string;
  id: string;
  owner: string;
}
export interface EventBurnProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn";
  value: Uint8Array;
}
/** EventBurn is emitted on Burn */
export interface EventBurnAmino {
  class_id?: string;
  id?: string;
  owner?: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurnSDKType {
  class_id: string;
  id: string;
  owner: string;
}
function createBaseEventSend(): EventSend {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
export const EventSend = {
  typeUrl: "/cosmos.nft.v1beta1.EventSend",
  aminoType: "cosmos-sdk/EventSend",
  encode(message: EventSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSend {
    const obj = createBaseEventSend();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: EventSend): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial(object: DeepPartial<EventSend>): EventSend {
    const message = createBaseEventSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromSDK(object: EventSendSDKType): EventSend {
    return {
      classId: object?.class_id,
      id: object?.id,
      sender: object?.sender,
      receiver: object?.receiver
    };
  },
  toSDK(message: EventSend): EventSendSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAmino(object: EventSendAmino): EventSend {
    return {
      classId: object.class_id,
      id: object.id,
      sender: object.sender,
      receiver: object.receiver
    };
  },
  toAmino(message: EventSend, useInterfaces: boolean = true): EventSendAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromProtoMsg(message: EventSendProtoMsg, useInterfaces: boolean = true): EventSend {
    return EventSend.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSend): Uint8Array {
    return EventSend.encode(message).finish();
  },
  toProtoMsg(message: EventSend): EventSendProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventSend",
      value: EventSend.encode(message).finish()
    };
  }
};
function createBaseEventMint(): EventMint {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventMint = {
  typeUrl: "/cosmos.nft.v1beta1.EventMint",
  aminoType: "cosmos-sdk/EventMint",
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMint {
    const obj = createBaseEventMint();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: EventMintSDKType): EventMint {
    return {
      classId: object?.class_id,
      id: object?.id,
      owner: object?.owner
    };
  },
  toSDK(message: EventMint): EventMintSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: EventMintAmino): EventMint {
    return {
      classId: object.class_id,
      id: object.id,
      owner: object.owner
    };
  },
  toAmino(message: EventMint, useInterfaces: boolean = true): EventMintAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromProtoMsg(message: EventMintProtoMsg, useInterfaces: boolean = true): EventMint {
    return EventMint.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  }
};
function createBaseEventBurn(): EventBurn {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
export const EventBurn = {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn",
  aminoType: "cosmos-sdk/EventBurn",
  encode(message: EventBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBurn {
    const obj = createBaseEventBurn();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: EventBurn): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: EventBurnSDKType): EventBurn {
    return {
      classId: object?.class_id,
      id: object?.id,
      owner: object?.owner
    };
  },
  toSDK(message: EventBurn): EventBurnSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: EventBurnAmino): EventBurn {
    return {
      classId: object.class_id,
      id: object.id,
      owner: object.owner
    };
  },
  toAmino(message: EventBurn, useInterfaces: boolean = true): EventBurnAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.owner = message.owner;
    return obj;
  },
  fromProtoMsg(message: EventBurnProtoMsg, useInterfaces: boolean = true): EventBurn {
    return EventBurn.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventBurn): Uint8Array {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message: EventBurn): EventBurnProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  }
};