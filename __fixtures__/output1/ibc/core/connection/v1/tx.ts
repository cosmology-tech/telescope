import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface MsgConnectionOpenInit {
  clientId: string;
  counterparty: Counterparty;
  version: Version;
  delayPeriod: Long;
  signer: string;
}

function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return {
    clientId: "",
    counterparty: undefined,
    version: undefined,
    delayPeriod: Long.UZERO,
    signer: ""
  };
}

export const MsgConnectionOpenInit = {
  encode(message: MsgConnectionOpenInit, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(32).uint64(message.delayPeriod);
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.delayPeriod = (reader.uint64() as Long);
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

  fromJSON(object: any): MsgConnectionOpenInit {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromString(object.delayPeriod) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgConnectionOpenInit): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenInit>, I>>(object: I): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = object.clientId ?? "";
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? Long.fromValue(object.delayPeriod) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgConnectionOpenInitResponse {}

function createBaseMsgConnectionOpenInitResponse(): MsgConnectionOpenInitResponse {
  return {};
}

export const MsgConnectionOpenInitResponse = {
  encode(message: MsgConnectionOpenInitResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();

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

  fromJSON(object: any): MsgConnectionOpenInitResponse {
    return {};
  },

  toJSON(message: MsgConnectionOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenInitResponse>, I>>(object: I): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  }

};
export interface MsgConnectionOpenTry {
  clientId: string;
  previousConnectionId: string;
  clientState: Any;
  counterparty: Counterparty;
  delayPeriod: Long;
  counterpartyVersions: Version[];
  proofHeight: Height;
  proofInit: Uint8Array;
  proofClient: Uint8Array;
  proofConsensus: Uint8Array;
  consensusHeight: Height;
  signer: string;
}

function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: undefined,
    counterparty: undefined,
    delayPeriod: Long.UZERO,
    counterpartyVersions: [],
    proofHeight: undefined,
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: ""
  };
}

export const MsgConnectionOpenTry = {
  encode(message: MsgConnectionOpenTry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }

    for (const v of message.counterpartyVersions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }

    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }

    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }

    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }

    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.previousConnectionId = reader.string();
          break;

        case 3:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delayPeriod = (reader.uint64() as Long);
          break;

        case 6:
          message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
          break;

        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proofInit = reader.bytes();
          break;

        case 9:
          message.proofClient = reader.bytes();
          break;

        case 10:
          message.proofConsensus = reader.bytes();
          break;

        case 11:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;

        case 12:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConnectionOpenTry {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      previousConnectionId: isSet(object.previousConnectionId) ? String(object.previousConnectionId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromString(object.delayPeriod) : Long.UZERO,
      counterpartyVersions: Array.isArray(object?.counterpartyVersions) ? object.counterpartyVersions.map((e: any) => Version.fromJSON(e)) : [],
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
      proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgConnectionOpenTry): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.previousConnectionId !== undefined && (obj.previousConnectionId = message.previousConnectionId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());

    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map(e => e ? Version.toJSON(e) : undefined);
    } else {
      obj.counterpartyVersions = [];
    }

    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofClient !== undefined && (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== undefined && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== undefined && (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenTry>, I>>(object: I): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = object.clientId ?? "";
    message.previousConnectionId = object.previousConnectionId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? Long.fromValue(object.delayPeriod) : Long.UZERO;
    message.counterpartyVersions = object.counterpartyVersions?.map(e => Version.fromPartial(e)) || [];
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgConnectionOpenTryResponse {}

function createBaseMsgConnectionOpenTryResponse(): MsgConnectionOpenTryResponse {
  return {};
}

export const MsgConnectionOpenTryResponse = {
  encode(message: MsgConnectionOpenTryResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();

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

  fromJSON(object: any): MsgConnectionOpenTryResponse {
    return {};
  },

  toJSON(message: MsgConnectionOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenTryResponse>, I>>(object: I): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  }

};
export interface MsgConnectionOpenAck {
  connectionId: string;
  counterpartyConnectionId: string;
  version: Version;
  clientState: Any;
  proofHeight: Height;
  proofTry: Uint8Array;
  proofClient: Uint8Array;
  proofConsensus: Uint8Array;
  consensusHeight: Height;
  signer: string;
}

function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: undefined,
    clientState: undefined,
    proofHeight: undefined,
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: ""
  };
}

export const MsgConnectionOpenAck = {
  encode(message: MsgConnectionOpenAck, writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }

    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }

    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }

    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }

    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.counterpartyConnectionId = reader.string();
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 6:
          message.proofTry = reader.bytes();
          break;

        case 7:
          message.proofClient = reader.bytes();
          break;

        case 8:
          message.proofConsensus = reader.bytes();
          break;

        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;

        case 10:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConnectionOpenAck {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      counterpartyConnectionId: isSet(object.counterpartyConnectionId) ? String(object.counterpartyConnectionId) : "",
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
      proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : new Uint8Array(),
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgConnectionOpenAck): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.counterpartyConnectionId !== undefined && (obj.counterpartyConnectionId = message.counterpartyConnectionId);
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofTry !== undefined && (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofClient !== undefined && (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== undefined && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== undefined && (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenAck>, I>>(object: I): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = object.connectionId ?? "";
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgConnectionOpenAckResponse {}

function createBaseMsgConnectionOpenAckResponse(): MsgConnectionOpenAckResponse {
  return {};
}

export const MsgConnectionOpenAckResponse = {
  encode(message: MsgConnectionOpenAckResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();

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

  fromJSON(object: any): MsgConnectionOpenAckResponse {
    return {};
  },

  toJSON(message: MsgConnectionOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenAckResponse>, I>>(object: I): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  }

};
export interface MsgConnectionOpenConfirm {
  connectionId: string;
  proofAck: Uint8Array;
  proofHeight: Height;
  signer: string;
}

function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}

export const MsgConnectionOpenConfirm = {
  encode(message: MsgConnectionOpenConfirm, writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.proofAck = reader.bytes();
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

  fromJSON(object: any): MsgConnectionOpenConfirm {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgConnectionOpenConfirm): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.proofAck !== undefined && (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenConfirm>, I>>(object: I): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgConnectionOpenConfirmResponse {}

function createBaseMsgConnectionOpenConfirmResponse(): MsgConnectionOpenConfirmResponse {
  return {};
}

export const MsgConnectionOpenConfirmResponse = {
  encode(message: MsgConnectionOpenConfirmResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();

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

  fromJSON(object: any): MsgConnectionOpenConfirmResponse {
    return {};
  },

  toJSON(message: MsgConnectionOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenConfirmResponse>, I>>(object: I): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  }

};
export interface AminoMsgConnectionOpenInit extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenInit";
  value: {
    client_id: string;
    counterparty: {
      client_id: string;
      connection_id: string;
      prefix: {
        key_prefix: Uint8Array;
      };
    };
    version: {
      identifier: string;
      features: string[];
    };
    delay_period: string;
    signer: string;
  };
}
export interface AminoMsgConnectionOpenTry extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenTry";
  value: {
    client_id: string;
    previous_connection_id: string;
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    counterparty: {
      client_id: string;
      connection_id: string;
      prefix: {
        key_prefix: Uint8Array;
      };
    };
    delay_period: string;
    counterparty_versions: {
      identifier: string;
      features: string[];
    }[];
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    proof_init: Uint8Array;
    proof_client: Uint8Array;
    proof_consensus: Uint8Array;
    consensus_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgConnectionOpenAck extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenAck";
  value: {
    connection_id: string;
    counterparty_connection_id: string;
    version: {
      identifier: string;
      features: string[];
    };
    client_state: {
      type_url: string;
      value: Uint8Array;
    };
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    proof_try: Uint8Array;
    proof_client: Uint8Array;
    proof_consensus: Uint8Array;
    consensus_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export interface AminoMsgConnectionOpenConfirm extends AminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenConfirm";
  value: {
    connection_id: string;
    proof_ack: Uint8Array;
    proof_height: {
      revision_number: string;
      revision_height: string;
    };
    signer: string;
  };
}
export const AminoConverter = {
  "/ibc.core.connection.v1.MsgConnectionOpenInit": {
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    toAmino: ({
      clientId,
      counterparty,
      version,
      delayPeriod,
      signer
    }: MsgConnectionOpenInit): AminoMsgConnectionOpenInit["value"] => {
      return {
        client_id: clientId,
        counterparty: {
          client_id: counterparty.clientId,
          connection_id: counterparty.connectionId,
          prefix: {
            key_prefix: counterparty.prefix.keyPrefix
          }
        },
        version: {
          identifier: version.identifier,
          features: version.features
        },
        delay_period: delayPeriod.toString(),
        signer
      };
    },
    fromAmino: ({
      client_id,
      counterparty,
      version,
      delay_period,
      signer
    }: AminoMsgConnectionOpenInit["value"]): MsgConnectionOpenInit => {
      return {
        clientId: client_id,
        counterparty: {
          clientId: counterparty.client_id,
          connectionId: counterparty.connection_id,
          prefix: {
            keyPrefix: counterparty.prefix.key_prefix
          }
        },
        version: {
          identifier: version.identifier,
          features: version.features
        },
        delayPeriod: Long.fromString(delay_period),
        signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenTry": {
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    toAmino: ({
      clientId,
      previousConnectionId,
      clientState,
      counterparty,
      delayPeriod,
      counterpartyVersions,
      proofHeight,
      proofInit,
      proofClient,
      proofConsensus,
      consensusHeight,
      signer
    }: MsgConnectionOpenTry): AminoMsgConnectionOpenTry["value"] => {
      return {
        client_id: clientId,
        previous_connection_id: previousConnectionId,
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        counterparty: {
          client_id: counterparty.clientId,
          connection_id: counterparty.connectionId,
          prefix: {
            key_prefix: counterparty.prefix.keyPrefix
          }
        },
        delay_period: delayPeriod.toString(),
        counterparty_versions: counterpartyVersions.map(el0 => ({
          identifier: el0.identifier,
          features: el0.features
        })),
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        proof_init: proofInit,
        proof_client: proofClient,
        proof_consensus: proofConsensus,
        consensus_height: {
          revision_number: consensusHeight.revisionNumber.toString(),
          revision_height: consensusHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      client_id,
      previous_connection_id,
      client_state,
      counterparty,
      delay_period,
      counterparty_versions,
      proof_height,
      proof_init,
      proof_client,
      proof_consensus,
      consensus_height,
      signer
    }: AminoMsgConnectionOpenTry["value"]): MsgConnectionOpenTry => {
      return {
        clientId: client_id,
        previousConnectionId: previous_connection_id,
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        counterparty: {
          clientId: counterparty.client_id,
          connectionId: counterparty.connection_id,
          prefix: {
            keyPrefix: counterparty.prefix.key_prefix
          }
        },
        delayPeriod: Long.fromString(delay_period),
        counterpartyVersions: counterparty_versions.map(el0 => ({
          identifier: el0.identifier,
          features: el0.features
        })),
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        proofInit: proof_init,
        proofClient: proof_client,
        proofConsensus: proof_consensus,
        consensusHeight: {
          revisionNumber: Long.fromString(consensus_height.revision_number),
          revisionHeight: Long.fromString(consensus_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenAck": {
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    toAmino: ({
      connectionId,
      counterpartyConnectionId,
      version,
      clientState,
      proofHeight,
      proofTry,
      proofClient,
      proofConsensus,
      consensusHeight,
      signer
    }: MsgConnectionOpenAck): AminoMsgConnectionOpenAck["value"] => {
      return {
        connection_id: connectionId,
        counterparty_connection_id: counterpartyConnectionId,
        version: {
          identifier: version.identifier,
          features: version.features
        },
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        proof_try: proofTry,
        proof_client: proofClient,
        proof_consensus: proofConsensus,
        consensus_height: {
          revision_number: consensusHeight.revisionNumber.toString(),
          revision_height: consensusHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      connection_id,
      counterparty_connection_id,
      version,
      client_state,
      proof_height,
      proof_try,
      proof_client,
      proof_consensus,
      consensus_height,
      signer
    }: AminoMsgConnectionOpenAck["value"]): MsgConnectionOpenAck => {
      return {
        connectionId: connection_id,
        counterpartyConnectionId: counterparty_connection_id,
        version: {
          identifier: version.identifier,
          features: version.features
        },
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        proofTry: proof_try,
        proofClient: proof_client,
        proofConsensus: proof_consensus,
        consensusHeight: {
          revisionNumber: Long.fromString(consensus_height.revision_number),
          revisionHeight: Long.fromString(consensus_height.revision_height)
        },
        signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    toAmino: ({
      connectionId,
      proofAck,
      proofHeight,
      signer
    }: MsgConnectionOpenConfirm): AminoMsgConnectionOpenConfirm["value"] => {
      return {
        connection_id: connectionId,
        proof_ack: proofAck,
        proof_height: {
          revision_number: proofHeight.revisionNumber.toString(),
          revision_height: proofHeight.revisionHeight.toString()
        },
        signer
      };
    },
    fromAmino: ({
      connection_id,
      proof_ack,
      proof_height,
      signer
    }: AminoMsgConnectionOpenConfirm["value"]): MsgConnectionOpenConfirm => {
      return {
        connectionId: connection_id,
        proofAck: proof_ack,
        proofHeight: {
          revisionNumber: Long.fromString(proof_height.revision_number),
          revisionHeight: Long.fromString(proof_height.revision_height)
        },
        signer
      };
    }
  }
};