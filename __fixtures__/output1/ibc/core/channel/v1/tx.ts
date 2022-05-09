import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
export interface MsgChannelOpenInit {
  portId: string;
  channel: Channel;
  signer: string;
}

function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return {
    portId: "",
    channel: undefined,
    signer: ""
  };
}

export const MsgChannelOpenInit = {
  encode(message: MsgChannelOpenInit, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenInit>, I>>(object: I): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgChannelOpenInitResponse {}

function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {};
}

export const MsgChannelOpenInitResponse = {
  encode(message: MsgChannelOpenInitResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgChannelOpenInitResponse {
    return {};
  },

  toJSON(message: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenInitResponse>, I>>(object: I): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    return message;
  }

};
export interface MsgChannelOpenTry {
  portId: string;
  previousChannelId: string;
  channel: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    portId: "",
    previousChannelId: "",
    channel: undefined,
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgChannelOpenTry = {
  encode(message: MsgChannelOpenTry, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      previousChannelId: isSet(object.previousChannelId) ? String(object.previousChannelId) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenTry>, I>>(object: I): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgChannelOpenTryResponse {}

function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {};
}

export const MsgChannelOpenTryResponse = {
  encode(message: MsgChannelOpenTryResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgChannelOpenTryResponse {
    return {};
  },

  toJSON(message: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenTryResponse>, I>>(object: I): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    return message;
  }

};
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgChannelOpenAck = {
  encode(message: MsgChannelOpenAck, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      counterpartyChannelId: isSet(object.counterpartyChannelId) ? String(object.counterpartyChannelId) : "",
      counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenAck>, I>>(object: I): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgChannelOpenAckResponse {}

function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}

export const MsgChannelOpenAckResponse = {
  encode(message: MsgChannelOpenAckResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgChannelOpenAckResponse {
    return {};
  },

  toJSON(message: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenAckResponse>, I>>(object: I): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  }

};
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgChannelOpenConfirm = {
  encode(message: MsgChannelOpenConfirm, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenConfirm>, I>>(object: I): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgChannelOpenConfirmResponse {}

function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}

export const MsgChannelOpenConfirmResponse = {
  encode(message: MsgChannelOpenConfirmResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgChannelOpenConfirmResponse {
    return {};
  },

  toJSON(message: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenConfirmResponse>, I>>(object: I): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  }

};
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}

function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}

export const MsgChannelCloseInit = {
  encode(message: MsgChannelCloseInit, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseInit>, I>>(object: I): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgChannelCloseInitResponse {}

function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}

export const MsgChannelCloseInitResponse = {
  encode(message: MsgChannelCloseInitResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgChannelCloseInitResponse {
    return {};
  },

  toJSON(message: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseInitResponse>, I>>(object: I): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  }

};
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgChannelCloseConfirm = {
  encode(message: MsgChannelCloseConfirm, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseConfirm>, I>>(object: I): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgChannelCloseConfirmResponse {}

function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}

export const MsgChannelCloseConfirmResponse = {
  encode(message: MsgChannelCloseConfirmResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgChannelCloseConfirmResponse {
    return {};
  },

  toJSON(message: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseConfirmResponse>, I>>(object: I): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  }

};
export interface MsgRecvPacket {
  packet: Packet;
  proofCommitment: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: undefined,
    proofCommitment: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgRecvPacket = {
  encode(message: MsgRecvPacket, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined && (obj.proofCommitment = base64FromBytes(message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvPacket>, I>>(object: I): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgRecvPacketResponse {}

function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}

export const MsgRecvPacketResponse = {
  encode(message: MsgRecvPacketResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgRecvPacketResponse {
    return {};
  },

  toJSON(message: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecvPacketResponse>, I>>(object: I): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    return message;
  }

};
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: Long;
  signer: string;
}

function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: Long.UZERO,
    signer: ""
  };
}

export const MsgTimeout = {
  encode(message: MsgTimeout, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      nextSequenceRecv: isSet(object.nextSequenceRecv) ? Long.fromString(object.nextSequenceRecv) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgTimeout>, I>>(object: I): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgTimeoutResponse {}

function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {};
}

export const MsgTimeoutResponse = {
  encode(message: MsgTimeoutResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgTimeoutResponse {
    return {};
  },

  toJSON(message: MsgTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTimeoutResponse>, I>>(object: I): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    return message;
  }

};
export interface MsgTimeoutOnClose {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: Long;
  signer: string;
}

function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: Long.UZERO,
    signer: ""
  };
}

export const MsgTimeoutOnClose = {
  encode(message: MsgTimeoutOnClose, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
      proofClose: isSet(object.proofClose) ? bytesFromBase64(object.proofClose) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      nextSequenceRecv: isSet(object.nextSequenceRecv) ? Long.fromString(object.nextSequenceRecv) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgTimeoutOnClose>, I>>(object: I): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgTimeoutOnCloseResponse {}

function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {};
}

export const MsgTimeoutOnCloseResponse = {
  encode(message: MsgTimeoutOnCloseResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgTimeoutOnCloseResponse {
    return {};
  },

  toJSON(message: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTimeoutOnCloseResponse>, I>>(object: I): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    return message;
  }

};
export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgAcknowledgement = {
  encode(message: MsgAcknowledgement, writer = _m0.Writer.create()): _m0.Writer {
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
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgement>, I>>(object: I): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgAcknowledgementResponse {}

function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}

export const MsgAcknowledgementResponse = {
  encode(message: MsgAcknowledgementResponse, writer = _m0.Writer.create()): _m0.Writer {
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

  fromJSON(object: any): MsgAcknowledgementResponse {
    return {};
  },

  toJSON(message: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgementResponse>, I>>(object: I): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    return message;
  }

};
export interface AminoMsgChannelOpenInit extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInit";
  value: {
    port_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
    };
    signer: string;
  };
}
export interface AminoMsgChannelOpenTry extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTry";
  value: {
    port_id: string;
    previous_channel_id: string;
    channel: {
      state: number;
      ordering: number;
      counterparty: {
        port_id: string;
        channel_id: string;
      };
      connection_hops: string[];
      version: string;
    };
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgChannelOpenAck extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAck";
  value: {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgChannelOpenConfirm extends AminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgChannelCloseInit extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInit";
  value: {
    port_id: string;
    channel_id: string;
    signer: string;
  };
}
export interface AminoMsgChannelCloseConfirm extends AminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirm";
  value: {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgRecvPacket extends AminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: {
        revision_number: string;
        revision_height: string;
      };
      timeout_timestamp: string;
    };
    proof_commitment: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgTimeout extends AminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: {
        revision_number: string;
        revision_height: string;
      };
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    next_sequence_recv: string;
    signer: string;
  };
}
export interface AminoMsgTimeoutOnClose extends AminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnClose";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: {
        revision_number: string;
        revision_height: string;
      };
      timeout_timestamp: string;
    };
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    next_sequence_recv: string;
    signer: string;
  };
}
export interface AminoMsgAcknowledgement extends AminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: {
    packet: {
      sequence: string;
      source_port: string;
      source_channel: string;
      destination_port: string;
      destination_channel: string;
      data: Uint8Array;
      timeout_height: {
        revision_number: string;
        revision_height: string;
      };
      timeout_timestamp: string;
    };
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: ({
      portId,
      channel,
      signer
    }: MsgChannelOpenInit): AminoMsgChannelOpenInit["value"] => {
      return {
        port_id: portId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId
          },
          connection_hops: channel.connectionHops,
          version: channel.version
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel,
      signer
    }: AminoMsgChannelOpenInit["value"]): MsgChannelOpenInit => {
      return {
        portId: port_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id
          },
          connectionHops: channel.connection_hops,
          version: channel.version
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: ({
      portId,
      previousChannelId,
      channel,
      counterpartyVersion,
      proofInit,
      proofHeight,
      signer
    }: MsgChannelOpenTry): AminoMsgChannelOpenTry["value"] => {
      return {
        port_id: portId,
        previous_channel_id: previousChannelId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId
          },
          connection_hops: channel.connectionHops,
          version: channel.version
        },
        counterparty_version: counterpartyVersion,
        proof_init: proofInit,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      previous_channel_id,
      channel,
      counterparty_version,
      proof_init,
      proof_height,
      signer
    }: AminoMsgChannelOpenTry["value"]): MsgChannelOpenTry => {
      return {
        portId: port_id,
        previousChannelId: previous_channel_id,
        channel: {
          state: stateFromJSON(channel.state),
          ordering: orderFromJSON(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id
          },
          connectionHops: channel.connection_hops,
          version: channel.version
        },
        counterpartyVersion: counterparty_version,
        proofInit: proof_init,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: ({
      portId,
      channelId,
      counterpartyChannelId,
      counterpartyVersion,
      proofTry,
      proofHeight,
      signer
    }: MsgChannelOpenAck): AminoMsgChannelOpenAck["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel_id: counterpartyChannelId,
        counterparty_version: counterpartyVersion,
        proof_try: proofTry,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      counterparty_channel_id,
      counterparty_version,
      proof_try,
      proof_height,
      signer
    }: AminoMsgChannelOpenAck["value"]): MsgChannelOpenAck => {
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannelId: counterparty_channel_id,
        counterpartyVersion: counterparty_version,
        proofTry: proof_try,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: ({
      portId,
      channelId,
      proofAck,
      proofHeight,
      signer
    }: MsgChannelOpenConfirm): AminoMsgChannelOpenConfirm["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proof_ack: proofAck,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_ack,
      proof_height,
      signer
    }: AminoMsgChannelOpenConfirm["value"]): MsgChannelOpenConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        proofAck: proof_ack,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: ({
      portId,
      channelId,
      signer
    }: MsgChannelCloseInit): AminoMsgChannelCloseInit["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      signer
    }: AminoMsgChannelCloseInit["value"]): MsgChannelCloseInit => {
      return {
        portId: port_id,
        channelId: channel_id,
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: ({
      portId,
      channelId,
      proofInit,
      proofHeight,
      signer
    }: MsgChannelCloseConfirm): AminoMsgChannelCloseConfirm["value"] => {
      return {
        port_id: portId,
        channel_id: channelId,
        proof_init: proofInit,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      port_id,
      channel_id,
      proof_init,
      proof_height,
      signer
    }: AminoMsgChannelCloseConfirm["value"]): MsgChannelCloseConfirm => {
      return {
        portId: port_id,
        channelId: channel_id,
        proofInit: proof_init,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: ({
      packet,
      proofCommitment,
      proofHeight,
      signer
    }: MsgRecvPacket): AminoMsgRecvPacket["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: {
            revision_number: packet.timeoutHeight.revisionNumber.toString(),
            revision_height: packet.timeoutHeight.revisionHeight.toString()
          },
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_commitment: proofCommitment,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_commitment,
      proof_height,
      signer
    }: AminoMsgRecvPacket["value"]): MsgRecvPacket => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: {
            revisionNumber: Long.fromString(packet.timeout_height.revision_number),
            revisionHeight: Long.fromString(packet.timeout_height.revision_height)
          },
          timeoutTimestamp: Long.fromString(packet.timeout_timestamp)
        },
        proofCommitment: proof_commitment,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: ({
      packet,
      proofUnreceived,
      proofHeight,
      nextSequenceRecv,
      signer
    }: MsgTimeout): AminoMsgTimeout["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: {
            revision_number: packet.timeoutHeight.revisionNumber.toString(),
            revision_height: packet.timeoutHeight.revisionHeight.toString()
          },
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_unreceived: proofUnreceived,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        next_sequence_recv: nextSequenceRecv.toString(),
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_height,
      next_sequence_recv,
      signer
    }: AminoMsgTimeout["value"]): MsgTimeout => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: {
            revisionNumber: Long.fromString(packet.timeout_height.revision_number),
            revisionHeight: Long.fromString(packet.timeout_height.revision_height)
          },
          timeoutTimestamp: Long.fromString(packet.timeout_timestamp)
        },
        proofUnreceived: proof_unreceived,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        nextSequenceRecv: Long.fromString(next_sequence_recv),
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: ({
      packet,
      proofUnreceived,
      proofClose,
      proofHeight,
      nextSequenceRecv,
      signer
    }: MsgTimeoutOnClose): AminoMsgTimeoutOnClose["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: {
            revision_number: packet.timeoutHeight.revisionNumber.toString(),
            revision_height: packet.timeoutHeight.revisionHeight.toString()
          },
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_unreceived: proofUnreceived,
        proof_close: proofClose,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        next_sequence_recv: nextSequenceRecv.toString(),
        signer
      };
    },
    fromAmino: ({
      packet,
      proof_unreceived,
      proof_close,
      proof_height,
      next_sequence_recv,
      signer
    }: AminoMsgTimeoutOnClose["value"]): MsgTimeoutOnClose => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: {
            revisionNumber: Long.fromString(packet.timeout_height.revision_number),
            revisionHeight: Long.fromString(packet.timeout_height.revision_height)
          },
          timeoutTimestamp: Long.fromString(packet.timeout_timestamp)
        },
        proofUnreceived: proof_unreceived,
        proofClose: proof_close,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        nextSequenceRecv: Long.fromString(next_sequence_recv),
        signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: ({
      packet,
      acknowledgement,
      proofAcked,
      proofHeight,
      signer
    }: MsgAcknowledgement): AminoMsgAcknowledgement["value"] => {
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: {
            revision_number: packet.timeoutHeight.revisionNumber.toString(),
            revision_height: packet.timeoutHeight.revisionHeight.toString()
          },
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        acknowledgement,
        proof_acked: proofAcked,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      packet,
      acknowledgement,
      proof_acked,
      proof_height,
      signer
    }: AminoMsgAcknowledgement["value"]): MsgAcknowledgement => {
      return {
        packet: {
          sequence: Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: {
            revisionNumber: Long.fromString(packet.timeout_height.revision_number),
            revisionHeight: Long.fromString(packet.timeout_height.revision_height)
          },
          timeoutTimestamp: Long.fromString(packet.timeout_timestamp)
        },
        acknowledgement,
        proofAcked: proof_acked,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  }
};