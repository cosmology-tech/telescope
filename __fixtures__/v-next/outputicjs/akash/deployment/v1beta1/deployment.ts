import { GroupSpec, GroupSpecAmino } from "./group";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** State is an enum which refers to state of deployment */
export enum Deployment_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - DeploymentActive denotes state for deployment active */
  active = 1,
  /** closed - DeploymentClosed denotes state for deployment closed */
  closed = 2,
  UNRECOGNIZED = -1,
}
export const Deployment_StateAmino = Deployment_State;
export function deployment_StateFromJSON(object: any): Deployment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Deployment_State.invalid;
    case 1:
    case "active":
      return Deployment_State.active;
    case 2:
    case "closed":
      return Deployment_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deployment_State.UNRECOGNIZED;
  }
}
export function deployment_StateToJSON(object: Deployment_State): string {
  switch (object) {
    case Deployment_State.invalid:
      return "invalid";
    case Deployment_State.active:
      return "active";
    case Deployment_State.closed:
      return "closed";
    case Deployment_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  id: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin;
}
export interface MsgCreateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
  value: Uint8Array;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentAmino {
  id: DeploymentIDAmino;
  groups: GroupSpecAmino[];
  version: string;
  deposit: CoinAmino;
}
export interface MsgCreateDeploymentAminoMsg {
  type: "/akash.deployment.v1beta1.MsgCreateDeployment";
  value: MsgCreateDeploymentAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}
export interface MsgCreateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
  value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseAmino {}
export interface MsgCreateDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
  value: MsgCreateDeploymentResponseAmino;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id: DeploymentID;
  amount: Coin;
}
export interface MsgDepositDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment";
  value: Uint8Array;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentAmino {
  id: DeploymentIDAmino;
  amount: CoinAmino;
}
export interface MsgDepositDeploymentAminoMsg {
  type: "/akash.deployment.v1beta1.MsgDepositDeployment";
  value: MsgDepositDeploymentAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}
export interface MsgDepositDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
  value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseAmino {}
export interface MsgDepositDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
  value: MsgDepositDeploymentResponseAmino;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
}
export interface MsgUpdateDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment";
  value: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentAmino {
  id: DeploymentIDAmino;
  groups: GroupSpecAmino[];
  version: string;
}
export interface MsgUpdateDeploymentAminoMsg {
  type: "/akash.deployment.v1beta1.MsgUpdateDeployment";
  value: MsgUpdateDeploymentAmino;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}
export interface MsgUpdateDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
  value: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseAmino {}
export interface MsgUpdateDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
  value: MsgUpdateDeploymentResponseAmino;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id: DeploymentID;
}
export interface MsgCloseDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment";
  value: Uint8Array;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentAmino {
  id: DeploymentIDAmino;
}
export interface MsgCloseDeploymentAminoMsg {
  type: "/akash.deployment.v1beta1.MsgCloseDeployment";
  value: MsgCloseDeploymentAmino;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}
export interface MsgCloseDeploymentResponseProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
  value: Uint8Array;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseAmino {}
export interface MsgCloseDeploymentResponseAminoMsg {
  type: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
  value: MsgCloseDeploymentResponseAmino;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  owner: string;
  dseq: bigint;
}
export interface DeploymentIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID";
  value: Uint8Array;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDAmino {
  owner: string;
  dseq: string;
}
export interface DeploymentIDAminoMsg {
  type: "/akash.deployment.v1beta1.DeploymentID";
  value: DeploymentIDAmino;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId: DeploymentID;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: bigint;
}
export interface DeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Deployment";
  value: Uint8Array;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentAmino {
  deployment_id: DeploymentIDAmino;
  state: Deployment_State;
  version: string;
  created_at: string;
}
export interface DeploymentAminoMsg {
  type: "/akash.deployment.v1beta1.Deployment";
  value: DeploymentAmino;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: bigint;
  state: string;
}
export interface DeploymentFiltersProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters";
  value: Uint8Array;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersAmino {
  owner: string;
  dseq: string;
  state: string;
}
export interface DeploymentFiltersAminoMsg {
  type: "/akash.deployment.v1beta1.DeploymentFilters";
  value: DeploymentFiltersAmino;
}
function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    version: new Uint8Array(),
    deposit: Coin.fromPartial({})
  };
}
export const MsgCreateDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
  encode(message: MsgCreateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateDeployment): MsgCreateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.version = message.version ? base64FromBytes(message.version) : "";
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentAminoMsg): MsgCreateDeployment {
    return MsgCreateDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDeploymentProtoMsg): MsgCreateDeployment {
    return MsgCreateDeployment.decode(message.value);
  },
  toProto(message: MsgCreateDeployment): Uint8Array {
    return MsgCreateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeployment): MsgCreateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment",
      value: MsgCreateDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
export const MsgCreateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
  encode(_: MsgCreateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentResponse();
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
  fromPartial(_: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentResponseAminoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCreateDeploymentResponse): Uint8Array {
    return MsgCreateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse",
      value: MsgCreateDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    amount: Coin.fromPartial({})
  };
}
export const MsgDepositDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
  encode(message: MsgDepositDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDepositDeployment): MsgDepositDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgDepositDeploymentAminoMsg): MsgDepositDeployment {
    return MsgDepositDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositDeploymentProtoMsg): MsgDepositDeployment {
    return MsgDepositDeployment.decode(message.value);
  },
  toProto(message: MsgDepositDeployment): Uint8Array {
    return MsgDepositDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeployment): MsgDepositDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment",
      value: MsgDepositDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}
export const MsgDepositDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
  encode(_: MsgDepositDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeploymentResponse();
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
  fromPartial(_: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  toAmino(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositDeploymentResponseAminoMsg): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositDeploymentResponseProtoMsg): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgDepositDeploymentResponse): Uint8Array {
    return MsgDepositDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse",
      value: MsgDepositDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    groups: [],
    version: new Uint8Array()
  };
}
export const MsgUpdateDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
  encode(message: MsgUpdateDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          break;
        case 3:
          message.version = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    return message;
  },
  toAmino(message: MsgUpdateDeployment): MsgUpdateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    obj.version = message.version ? base64FromBytes(message.version) : "";
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentAminoMsg): MsgUpdateDeployment {
    return MsgUpdateDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDeploymentProtoMsg): MsgUpdateDeployment {
    return MsgUpdateDeployment.decode(message.value);
  },
  toProto(message: MsgUpdateDeployment): Uint8Array {
    return MsgUpdateDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment",
      value: MsgUpdateDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
export const MsgUpdateDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
  encode(_: MsgUpdateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentResponseAminoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDeploymentResponse): Uint8Array {
    return MsgUpdateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse",
      value: MsgUpdateDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: DeploymentID.fromPartial({})
  };
}
export const MsgCloseDeployment = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
  encode(message: MsgCloseDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseDeployment): MsgCloseDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCloseDeploymentAminoMsg): MsgCloseDeployment {
    return MsgCloseDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseDeploymentProtoMsg): MsgCloseDeployment {
    return MsgCloseDeployment.decode(message.value);
  },
  toProto(message: MsgCloseDeployment): Uint8Array {
    return MsgCloseDeployment.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeployment): MsgCloseDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment",
      value: MsgCloseDeployment.encode(message).finish()
    };
  }
};
function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}
export const MsgCloseDeploymentResponse = {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
  encode(_: MsgCloseDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeploymentResponse();
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
  fromPartial(_: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseDeploymentResponseAminoMsg): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseDeploymentResponseProtoMsg): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCloseDeploymentResponse): Uint8Array {
    return MsgCloseDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse",
      value: MsgCloseDeploymentResponse.encode(message).finish()
    };
  }
};
function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: BigInt(0)
  };
}
export const DeploymentID = {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID",
  encode(message: DeploymentID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DeploymentIDAmino): DeploymentID {
    const message = createBaseDeploymentID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    return message;
  },
  toAmino(message: DeploymentID): DeploymentIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: DeploymentIDAminoMsg): DeploymentID {
    return DeploymentID.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentIDProtoMsg): DeploymentID {
    return DeploymentID.decode(message.value);
  },
  toProto(message: DeploymentID): Uint8Array {
    return DeploymentID.encode(message).finish();
  },
  toProtoMsg(message: DeploymentID): DeploymentIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DeploymentID",
      value: DeploymentID.encode(message).finish()
    };
  }
};
function createBaseDeployment(): Deployment {
  return {
    deploymentId: DeploymentID.fromPartial({}),
    state: 0,
    version: new Uint8Array(),
    createdAt: BigInt(0)
  };
}
export const Deployment = {
  typeUrl: "/akash.deployment.v1beta1.Deployment",
  encode(message: Deployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentId = DeploymentID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.version = reader.bytes();
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = createBaseDeployment();
    message.deploymentId = object.deploymentId !== undefined && object.deploymentId !== null ? DeploymentID.fromPartial(object.deploymentId) : undefined;
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DeploymentAmino): Deployment {
    const message = createBaseDeployment();
    if (object.deployment_id !== undefined && object.deployment_id !== null) {
      message.deploymentId = DeploymentID.fromAmino(object.deployment_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = bytesFromBase64(object.version);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Deployment): DeploymentAmino {
    const obj: any = {};
    obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId) : DeploymentID.toAmino(DeploymentID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.version = message.version ? base64FromBytes(message.version) : "";
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DeploymentAminoMsg): Deployment {
    return Deployment.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentProtoMsg): Deployment {
    return Deployment.decode(message.value);
  },
  toProto(message: Deployment): Uint8Array {
    return Deployment.encode(message).finish();
  },
  toProtoMsg(message: Deployment): DeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.Deployment",
      value: Deployment.encode(message).finish()
    };
  }
};
function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    state: ""
  };
}
export const DeploymentFilters = {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
  encode(message: DeploymentFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: DeploymentFiltersAmino): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: DeploymentFilters): DeploymentFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: DeploymentFiltersAminoMsg): DeploymentFilters {
    return DeploymentFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentFiltersProtoMsg): DeploymentFilters {
    return DeploymentFilters.decode(message.value);
  },
  toProto(message: DeploymentFilters): Uint8Array {
    return DeploymentFilters.encode(message).finish();
  },
  toProtoMsg(message: DeploymentFilters): DeploymentFiltersProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta1.DeploymentFilters",
      value: DeploymentFilters.encode(message).finish()
    };
  }
};