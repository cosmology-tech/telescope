import * as _m0 from "protobuf/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
import { Any } from "../../../../google/protobuf/any";
export interface MsgCreateClient {
  clientState: Any;
  consensusState: Any;
  signer: string;
}

function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    clientState: undefined,
    consensusState: undefined,
    signer: ""
  };
}

export const MsgCreateClient = {
  encode(message: MsgCreateClient, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }

    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgCreateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgCreateClient {
    return {
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {};
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateClient>, I>>(object: I): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgCreateClientResponse {}

function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}

export const MsgCreateClientResponse = {
  encode(message: MsgCreateClientResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgCreateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();

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

  fromJSON(object: any): MsgCreateClientResponse {
    return {};
  },

  toJSON(message: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateClientResponse>, I>>(object: I): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  }

};
export interface MsgUpdateClient {
  clientId: string;
  header: Any;
  signer: string;
}

function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    clientId: "",
    header: undefined,
    signer: ""
  };
}

export const MsgUpdateClient = {
  encode(message: MsgUpdateClient, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgUpdateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.header = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateClient {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header !== undefined && (obj.header = message.header ? Any.toJSON(message.header) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClient>, I>>(object: I): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgUpdateClientResponse {}

function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}

export const MsgUpdateClientResponse = {
  encode(message: MsgUpdateClientResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgUpdateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();

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

  fromJSON(object: any): MsgUpdateClientResponse {
    return {};
  },

  toJSON(message: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClientResponse>, I>>(object: I): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  }

};
export interface MsgUpgradeClient {
  clientId: string;
  clientState: Any;
  consensusState: Any;
  proofUpgradeClient: Uint8Array;
  proofUpgradeConsensusState: Uint8Array;
  signer: string;
}

function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    clientId: "",
    clientState: undefined,
    consensusState: undefined,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}

export const MsgUpgradeClient = {
  encode(message: MsgUpgradeClient, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }

    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }

    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }

    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }

    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgUpgradeClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;

        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
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

  fromJSON(object: any): MsgUpgradeClient {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      proofUpgradeClient: isSet(object.proofUpgradeClient) ? bytesFromBase64(object.proofUpgradeClient) : new Uint8Array(),
      proofUpgradeConsensusState: isSet(object.proofUpgradeConsensusState) ? bytesFromBase64(object.proofUpgradeConsensusState) : new Uint8Array(),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgUpgradeClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proofUpgradeClient !== undefined && (obj.proofUpgradeClient = base64FromBytes(message.proofUpgradeClient !== undefined ? message.proofUpgradeClient : new Uint8Array()));
    message.proofUpgradeConsensusState !== undefined && (obj.proofUpgradeConsensusState = base64FromBytes(message.proofUpgradeConsensusState !== undefined ? message.proofUpgradeConsensusState : new Uint8Array()));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeClient>, I>>(object: I): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgUpgradeClientResponse {}

function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}

export const MsgUpgradeClientResponse = {
  encode(message: MsgUpgradeClientResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgUpgradeClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();

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

  fromJSON(object: any): MsgUpgradeClientResponse {
    return {};
  },

  toJSON(message: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpgradeClientResponse>, I>>(object: I): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  }

};
export interface MsgSubmitMisbehaviour {
  clientId: string;
  misbehaviour: Any;
  signer: string;
}

function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    clientId: "",
    misbehaviour: undefined,
    signer: ""
  };
}

export const MsgSubmitMisbehaviour = {
  encode(message: MsgSubmitMisbehaviour, writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }

    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgSubmitMisbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgSubmitMisbehaviour {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgSubmitMisbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviour>, I>>(object: I): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};
export interface MsgSubmitMisbehaviourResponse {}

function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}

export const MsgSubmitMisbehaviourResponse = {
  encode(message: MsgSubmitMisbehaviourResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();

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

  fromJSON(object: any): MsgSubmitMisbehaviourResponse {
    return {};
  },

  toJSON(message: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviourResponse>, I>>(object: I): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  }

};