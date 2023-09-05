//@ts-nocheck
/* eslint-disable */
import { GroupSpec, GroupSpecSDKType, GroupID, GroupIDSDKType } from "./group";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta1";
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
export const Deployment_StateSDKType = Deployment_State;
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
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin | undefined;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
  deposit: CoinSDKType | undefined;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id: DeploymentID | undefined;
  amount: Coin | undefined;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
  amount: CoinSDKType | undefined;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id: DeploymentID | undefined;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
  id: DeploymentIDSDKType | undefined;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {}
/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  owner: string;
  dseq: bigint;
}
/** DeploymentID stores owner and sequence number */
export interface DeploymentIDSDKType {
  owner: string;
  dseq: bigint;
}
/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId: DeploymentID | undefined;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: bigint;
}
/** Deployment stores deploymentID, state and version details */
export interface DeploymentSDKType {
  deployment_id: DeploymentIDSDKType | undefined;
  state: Deployment_State;
  version: Uint8Array;
  created_at: bigint;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: bigint;
  state: string;
}
/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
  owner: string;
  dseq: bigint;
  state: string;
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
  fromJSON(object: any): MsgCreateDeployment {
    const obj = createBaseMsgCreateDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (Array.isArray(object?.groups)) object.groups.map((e: any) => GroupSpec.fromJSON(e));
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    return obj;
  },
  toJSON(message: MsgCreateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCreateDeployment>, I>>(object: I): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    return message;
  },
  fromSDK(object: MsgCreateDeploymentSDKType): MsgCreateDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: object?.version,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDKJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      deposit: isSet(object.deposit) ? Coin.fromSDKJSON(object.deposit) : undefined
    };
  },
  toSDK(message: MsgCreateDeployment): MsgCreateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.version = message.version;
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  }
};
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
export const MsgCreateDeploymentResponse = {
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
  fromJSON(_: any): MsgCreateDeploymentResponse {
    const obj = createBaseMsgCreateDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgCreateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCreateDeploymentResponse>, I>>(_: I): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgCreateDeploymentResponseSDKType): MsgCreateDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: DeploymentID.fromPartial({}),
    amount: Coin.fromPartial({})
  };
}
export const MsgDepositDeployment = {
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
  fromJSON(object: any): MsgDepositDeployment {
    const obj = createBaseMsgDepositDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgDepositDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgDepositDeployment>, I>>(object: I): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
  fromSDK(object: MsgDepositDeploymentSDKType): MsgDepositDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },
  fromSDKJSON(object: any): MsgDepositDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromSDKJSON(object.amount) : undefined
    };
  },
  toSDK(message: MsgDepositDeployment): MsgDepositDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  }
};
function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}
export const MsgDepositDeploymentResponse = {
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
  fromJSON(_: any): MsgDepositDeploymentResponse {
    const obj = createBaseMsgDepositDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgDepositDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgDepositDeploymentResponse>, I>>(_: I): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgDepositDeploymentResponseSDKType): MsgDepositDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDepositDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
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
  fromJSON(object: any): MsgUpdateDeployment {
    const obj = createBaseMsgUpdateDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    if (Array.isArray(object?.groups)) object.groups.map((e: any) => GroupSpec.fromJSON(e));
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    return obj;
  },
  toJSON(message: MsgUpdateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgUpdateDeployment>, I>>(object: I): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MsgUpdateDeploymentSDKType): MsgUpdateDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: object?.version
    };
  },
  fromSDKJSON(object: any): MsgUpdateDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDKJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array()
    };
  },
  toSDK(message: MsgUpdateDeployment): MsgUpdateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toSDK(e) : undefined);
    } else {
      obj.groups = [];
    }
    obj.version = message.version;
    return obj;
  }
};
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
export const MsgUpdateDeploymentResponse = {
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
  fromJSON(_: any): MsgUpdateDeploymentResponse {
    const obj = createBaseMsgUpdateDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgUpdateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgUpdateDeploymentResponse>, I>>(_: I): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgUpdateDeploymentResponseSDKType): MsgUpdateDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgUpdateDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: DeploymentID.fromPartial({})
  };
}
export const MsgCloseDeployment = {
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
  fromJSON(object: any): MsgCloseDeployment {
    const obj = createBaseMsgCloseDeployment();
    if (isSet(object.id)) obj.id = DeploymentID.fromJSON(object.id);
    return obj;
  },
  toJSON(message: MsgCloseDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCloseDeployment>, I>>(object: I): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    }
    return message;
  },
  fromSDK(object: MsgCloseDeploymentSDKType): MsgCloseDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCloseDeploymentSDKType {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDKJSON(object.id) : undefined
    };
  },
  toSDK(message: MsgCloseDeployment): MsgCloseDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  }
};
function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}
export const MsgCloseDeploymentResponse = {
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
  fromJSON(_: any): MsgCloseDeploymentResponse {
    const obj = createBaseMsgCloseDeploymentResponse();
    return obj;
  },
  toJSON(_: MsgCloseDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<Partial<MsgCloseDeploymentResponse>, I>>(_: I): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
  fromSDK(_: MsgCloseDeploymentResponseSDKType): MsgCloseDeploymentResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCloseDeploymentResponseSDKType {
    return {};
  },
  toSDK(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: BigInt(0)
  };
}
export const DeploymentID = {
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
  fromJSON(object: any): DeploymentID {
    const obj = createBaseDeploymentID();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    return obj;
  },
  toJSON(message: DeploymentID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<Partial<DeploymentID>, I>>(object: I): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    return message;
  },
  fromSDK(object: DeploymentIDSDKType): DeploymentID {
    return {
      owner: object?.owner,
      dseq: object?.dseq
    };
  },
  fromSDKJSON(object: any): DeploymentIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0)
    };
  },
  toSDK(message: DeploymentID): DeploymentIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    return obj;
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
  fromJSON(object: any): Deployment {
    const obj = createBaseDeployment();
    if (isSet(object.deploymentId)) obj.deploymentId = DeploymentID.fromJSON(object.deploymentId);
    if (isSet(object.state)) obj.state = deployment_StateFromJSON(object.state);
    if (isSet(object.version)) obj.version = bytesFromBase64(object.version);
    if (isSet(object.createdAt)) obj.createdAt = BigInt(object.createdAt.toString());
    return obj;
  },
  toJSON(message: Deployment): unknown {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deploymentId = message.deploymentId ? DeploymentID.toJSON(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<Partial<Deployment>, I>>(object: I): Deployment {
    const message = createBaseDeployment();
    if (object.deploymentId !== undefined && object.deploymentId !== null) {
      message.deploymentId = DeploymentID.fromPartial(object.deploymentId);
    }
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt.toString());
    }
    return message;
  },
  fromSDK(object: DeploymentSDKType): Deployment {
    return {
      deploymentId: object.deployment_id ? DeploymentID.fromSDK(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : -1,
      version: object?.version,
      createdAt: object?.created_at
    };
  },
  fromSDKJSON(object: any): DeploymentSDKType {
    return {
      deployment_id: isSet(object.deployment_id) ? DeploymentID.fromSDKJSON(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : -1,
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      created_at: isSet(object.created_at) ? BigInt(object.created_at.toString()) : BigInt(0)
    };
  },
  toSDK(message: Deployment): DeploymentSDKType {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deployment_id = message.deploymentId ? DeploymentID.toSDK(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    obj.version = message.version;
    obj.created_at = message.createdAt;
    return obj;
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
  fromJSON(object: any): DeploymentFilters {
    const obj = createBaseDeploymentFilters();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.dseq)) obj.dseq = BigInt(object.dseq.toString());
    if (isSet(object.state)) obj.state = String(object.state);
    return obj;
  },
  toJSON(message: DeploymentFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial<I extends Exact<Partial<DeploymentFilters>, I>>(object: I): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq.toString());
    }
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: DeploymentFiltersSDKType): DeploymentFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      state: object?.state
    };
  },
  fromSDKJSON(object: any): DeploymentFiltersSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toSDK(message: DeploymentFilters): DeploymentFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.state = message.state;
    return obj;
  }
};
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment = async (request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse> => {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CreateDeployment", data);
    return promise.then(data => MsgCreateDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* DepositDeployment deposits more funds into the deployment account */
  depositDeployment = async (request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse> => {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "DepositDeployment", data);
    return promise.then(data => MsgDepositDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment = async (request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse> => {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "UpdateDeployment", data);
    return promise.then(data => MsgUpdateDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment = async (request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse> => {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseDeployment", data);
    return promise.then(data => MsgCloseDeploymentResponse.decode(new BinaryReader(data)));
  };
  /* CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup = async (request: MsgCloseGroup): Promise<MsgCloseGroupResponse> => {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "CloseGroup", data);
    return promise.then(data => MsgCloseGroupResponse.decode(new BinaryReader(data)));
  };
  /* PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup = async (request: MsgPauseGroup): Promise<MsgPauseGroupResponse> => {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "PauseGroup", data);
    return promise.then(data => MsgPauseGroupResponse.decode(new BinaryReader(data)));
  };
  /* StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup = async (request: MsgStartGroup): Promise<MsgStartGroupResponse> => {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request("akash.deployment.v1beta1.Msg", "StartGroup", data);
    return promise.then(data => MsgStartGroupResponse.decode(new BinaryReader(data)));
  };
}