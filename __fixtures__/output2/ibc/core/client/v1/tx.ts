//@ts-nocheck
/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Rpc } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v1";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  /** light client state */
  clientState: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState: Any;
  /** signer address */
  signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  clientId: string;
  /** header to update the light client */
  header: Any;
  /** signer address */
  signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  /** client unique identifier */
  clientId: string;
  /** upgraded client state */
  clientState: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState: Any;
  /** proof that old chain committed to new client */
  proofUpgradeClient: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proofUpgradeConsensusState: Uint8Array;
  /** signer address */
  signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
  /** client unique identifier */
  clientId: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour: Any;
  /** signer address */
  signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    clientState: Any.fromPartial({}),
    consensusState: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  encode(message: MsgCreateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient {
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
  fromPartial(object: Partial<MsgCreateClient>): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClientAmino): MsgCreateClient {
    return {
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgCreateClient): MsgCreateClientAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient {
    return MsgCreateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClient",
      value: MsgCreateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient {
    return MsgCreateClient.decode(message.value);
  },
  toProto(message: MsgCreateClient): Uint8Array {
    return MsgCreateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}
export const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  encode(_: MsgCreateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClientResponse {
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
  fromJSON(_: any): MsgCreateClientResponse {
    return {};
  },
  toJSON(_: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateClientResponse>): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse {
    return {};
  },
  toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClientResponse",
      value: MsgCreateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.decode(message.value);
  },
  toProto(message: MsgCreateClientResponse): Uint8Array {
    return MsgCreateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
      value: MsgCreateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    clientId: "",
    header: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  encode(message: MsgUpdateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient {
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
  fromPartial(object: Partial<MsgUpdateClient>): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient {
    return {
      clientId: object.client_id,
      header: object?.header ? Any.fromAmino(object.header) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgUpdateClient): MsgUpdateClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.header = message.header ? Any.toAmino(message.header) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient {
    return MsgUpdateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClient",
      value: MsgUpdateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient {
    return MsgUpdateClient.decode(message.value);
  },
  toProto(message: MsgUpdateClient): Uint8Array {
    return MsgUpdateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
export const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  encode(_: MsgUpdateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse {
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
  fromJSON(_: any): MsgUpdateClientResponse {
    return {};
  },
  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateClientResponse>): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse {
    return {};
  },
  toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClientResponse): Uint8Array {
    return MsgUpdateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    clientId: "",
    clientState: Any.fromPartial({}),
    consensusState: Any.fromPartial({}),
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
export const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  encode(message: MsgUpgradeClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient {
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
  fromPartial(object: Partial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient {
    return {
      clientId: object.client_id,
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      proofUpgradeClient: object.proof_upgrade_client,
      proofUpgradeConsensusState: object.proof_upgrade_consensus_state,
      signer: object.signer
    };
  },
  toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.proof_upgrade_client = message.proofUpgradeClient;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClient",
      value: MsgUpgradeClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.decode(message.value);
  },
  toProto(message: MsgUpgradeClient): Uint8Array {
    return MsgUpgradeClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
export const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  encode(_: MsgUpgradeClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClientResponse {
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
  fromJSON(_: any): MsgUpgradeClientResponse {
    return {};
  },
  toJSON(_: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse {
    return {};
  },
  toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.decode(message.value);
  },
  toProto(message: MsgUpgradeClientResponse): Uint8Array {
    return MsgUpgradeClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    clientId: "",
    misbehaviour: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  encode(message: MsgSubmitMisbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
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
  fromPartial(object: Partial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour {
    return {
      clientId: object.client_id,
      misbehaviour: object?.misbehaviour ? Any.fromAmino(object.misbehaviour) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviour): Uint8Array {
    return MsgSubmitMisbehaviour.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
export const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  encode(_: MsgSubmitMisbehaviourResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
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
  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array {
    return MsgSubmitMisbehaviourResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.encode(message).finish()
    };
  }
};
/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  SubmitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClient = this.CreateClient.bind(this);
    this.UpdateClient = this.UpdateClient.bind(this);
    this.UpgradeClient = this.UpgradeClient.bind(this);
    this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this);
  }
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then(data => MsgCreateClientResponse.decode(new _m0.Reader(data)));
  }
  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then(data => MsgUpdateClientResponse.decode(new _m0.Reader(data)));
  }
  UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse> {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then(data => MsgUpgradeClientResponse.decode(new _m0.Reader(data)));
  }
  SubmitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse> {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then(data => MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)));
  }
}