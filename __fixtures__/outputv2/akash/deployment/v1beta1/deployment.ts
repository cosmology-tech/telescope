//@ts-nocheck
/* eslint-disable */
import { GroupSpec, GroupSpecAmino, GroupSpecSDKType, GroupID, GroupIDAmino, GroupIDSDKType } from "./group";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "../../../helpers";
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
  id?: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit?: Coin;
}
export interface MsgCreateDeploymentProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeployment";
  value: Uint8Array;
}

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentAmino {
  id?: DeploymentIDAmino;
  groups: GroupSpecAmino[];
  version: Uint8Array;
  deposit?: CoinAmino;
}
export interface MsgCreateDeploymentAminoType {
  type: "/akash.deployment.v1beta1.MsgCreateDeployment";
  value: MsgCreateDeploymentAmino;
}

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
  id?: DeploymentIDSDKType;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
  deposit?: CoinSDKType;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}
export interface MsgCreateDeploymentResponseProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
  value: Uint8Array;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseAmino {}
export interface MsgCreateDeploymentResponseAminoType {
  type: "/akash.deployment.v1beta1.MsgCreateDeploymentResponse";
  value: MsgCreateDeploymentResponseAmino;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id?: DeploymentID;
  amount?: Coin;
}
export interface MsgDepositDeploymentProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeployment";
  value: Uint8Array;
}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentAmino {
  id?: DeploymentIDAmino;
  amount?: CoinAmino;
}
export interface MsgDepositDeploymentAminoType {
  type: "/akash.deployment.v1beta1.MsgDepositDeployment";
  value: MsgDepositDeploymentAmino;
}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
  id?: DeploymentIDSDKType;
  amount?: CoinSDKType;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}
export interface MsgDepositDeploymentResponseProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
  value: Uint8Array;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseAmino {}
export interface MsgDepositDeploymentResponseAminoType {
  type: "/akash.deployment.v1beta1.MsgDepositDeploymentResponse";
  value: MsgDepositDeploymentResponseAmino;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id?: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
}
export interface MsgUpdateDeploymentProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeployment";
  value: Uint8Array;
}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentAmino {
  id?: DeploymentIDAmino;
  groups: GroupSpecAmino[];
  version: Uint8Array;
}
export interface MsgUpdateDeploymentAminoType {
  type: "/akash.deployment.v1beta1.MsgUpdateDeployment";
  value: MsgUpdateDeploymentAmino;
}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
  id?: DeploymentIDSDKType;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}
export interface MsgUpdateDeploymentResponseProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
  value: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseAmino {}
export interface MsgUpdateDeploymentResponseAminoType {
  type: "/akash.deployment.v1beta1.MsgUpdateDeploymentResponse";
  value: MsgUpdateDeploymentResponseAmino;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id?: DeploymentID;
}
export interface MsgCloseDeploymentProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeployment";
  value: Uint8Array;
}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentAmino {
  id?: DeploymentIDAmino;
}
export interface MsgCloseDeploymentAminoType {
  type: "/akash.deployment.v1beta1.MsgCloseDeployment";
  value: MsgCloseDeploymentAmino;
}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
  id?: DeploymentIDSDKType;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}
export interface MsgCloseDeploymentResponseProtoType {
  typeUrl: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
  value: Uint8Array;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseAmino {}
export interface MsgCloseDeploymentResponseAminoType {
  type: "/akash.deployment.v1beta1.MsgCloseDeploymentResponse";
  value: MsgCloseDeploymentResponseAmino;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {}

/** DeploymentID stores owner and sequence number */
export interface DeploymentID {
  owner: string;
  dseq: Long;
}
export interface DeploymentIDProtoType {
  typeUrl: "/akash.deployment.v1beta1.DeploymentID";
  value: Uint8Array;
}

/** DeploymentID stores owner and sequence number */
export interface DeploymentIDAmino {
  owner: string;
  dseq: string;
}
export interface DeploymentIDAminoType {
  type: "/akash.deployment.v1beta1.DeploymentID";
  value: DeploymentIDAmino;
}

/** DeploymentID stores owner and sequence number */
export interface DeploymentIDSDKType {
  owner: string;
  dseq: Long;
}

/** Deployment stores deploymentID, state and version details */
export interface Deployment {
  deploymentId?: DeploymentID;
  state: Deployment_State;
  version: Uint8Array;
  createdAt: Long;
}
export interface DeploymentProtoType {
  typeUrl: "/akash.deployment.v1beta1.Deployment";
  value: Uint8Array;
}

/** Deployment stores deploymentID, state and version details */
export interface DeploymentAmino {
  deployment_id?: DeploymentIDAmino;
  state: Deployment_State;
  version: Uint8Array;
  created_at: string;
}
export interface DeploymentAminoType {
  type: "/akash.deployment.v1beta1.Deployment";
  value: DeploymentAmino;
}

/** Deployment stores deploymentID, state and version details */
export interface DeploymentSDKType {
  deployment_id?: DeploymentIDSDKType;
  state: Deployment_State;
  version: Uint8Array;
  created_at: Long;
}

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFilters {
  owner: string;
  dseq: Long;
  state: string;
}
export interface DeploymentFiltersProtoType {
  typeUrl: "/akash.deployment.v1beta1.DeploymentFilters";
  value: Uint8Array;
}

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersAmino {
  owner: string;
  dseq: string;
  state: string;
}
export interface DeploymentFiltersAminoType {
  type: "/akash.deployment.v1beta1.DeploymentFilters";
  value: DeploymentFiltersAmino;
}

/** DeploymentFilters defines filters used to filter deployments */
export interface DeploymentFiltersSDKType {
  owner: string;
  dseq: Long;
  state: string;
}

function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: undefined,
    groups: [],
    version: new Uint8Array(),
    deposit: undefined
  };
}

export const MsgCreateDeployment = {
  encode(message: MsgCreateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
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

  fromPartial(object: DeepPartial<MsgCreateDeployment>): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
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
  },

  fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment {
    return {
      id: object?.id ? DeploymentID.fromAmino(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromAmino(e)) : [],
      version: object.version,
      deposit: object?.deposit ? Coin.fromAmino(object.deposit) : undefined
    };
  },

  toAmino(message: MsgCreateDeployment): MsgCreateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;

    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
    } else {
      obj.groups = [];
    }

    obj.version = message.version;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  }

};

function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}

export const MsgCreateDeploymentResponse = {
  encode(_: MsgCreateDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgCreateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgCreateDeploymentResponseSDKType): MsgCreateDeploymentResponse {
    return {};
  },

  toSDK(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse {
    return {};
  },

  toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: undefined,
    amount: undefined
  };
}

export const MsgDepositDeployment = {
  encode(message: MsgDepositDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgDepositDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositDeployment>): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },

  fromSDK(object: MsgDepositDeploymentSDKType): MsgDepositDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined,
      amount: object.amount ? Coin.fromSDK(object.amount) : undefined
    };
  },

  toSDK(message: MsgDepositDeployment): MsgDepositDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    return obj;
  },

  fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment {
    return {
      id: object?.id ? DeploymentID.fromAmino(object.id) : undefined,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },

  toAmino(message: MsgDepositDeployment): MsgDepositDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  }

};

function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return {};
}

export const MsgDepositDeploymentResponse = {
  encode(_: MsgDepositDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgDepositDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgDepositDeploymentResponseSDKType): MsgDepositDeploymentResponse {
    return {};
  },

  toSDK(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse {
    return {};
  },

  toAmino(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: undefined,
    groups: [],
    version: new Uint8Array()
  };
}

export const MsgUpdateDeployment = {
  encode(message: MsgUpdateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array()
    };
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

  fromPartial(object: DeepPartial<MsgUpdateDeployment>): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
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
  },

  fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment {
    return {
      id: object?.id ? DeploymentID.fromAmino(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromAmino(e)) : [],
      version: object.version
    };
  },

  toAmino(message: MsgUpdateDeployment): MsgUpdateDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;

    if (message.groups) {
      obj.groups = message.groups.map(e => e ? GroupSpec.toAmino(e) : undefined);
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
  encode(_: MsgUpdateDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgUpdateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgUpdateDeploymentResponseSDKType): MsgUpdateDeploymentResponse {
    return {};
  },

  toSDK(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse {
    return {};
  },

  toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return {
    id: undefined
  };
}

export const MsgCloseDeployment = {
  encode(message: MsgCloseDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined
    };
  },

  toJSON(message: MsgCloseDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseDeployment>): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: MsgCloseDeploymentSDKType): MsgCloseDeployment {
    return {
      id: object.id ? DeploymentID.fromSDK(object.id) : undefined
    };
  },

  toSDK(message: MsgCloseDeployment): MsgCloseDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    return obj;
  },

  fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment {
    return {
      id: object?.id ? DeploymentID.fromAmino(object.id) : undefined
    };
  },

  toAmino(message: MsgCloseDeployment): MsgCloseDeploymentAmino {
    const obj: any = {};
    obj.id = message.id ? DeploymentID.toAmino(message.id) : undefined;
    return obj;
  }

};

function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return {};
}

export const MsgCloseDeploymentResponse = {
  encode(_: MsgCloseDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {};
  },

  toJSON(_: MsgCloseDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgCloseDeploymentResponseSDKType): MsgCloseDeploymentResponse {
    return {};
  },

  toSDK(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse {
    return {};
  },

  toAmino(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseDeploymentID(): DeploymentID {
  return {
    owner: "",
    dseq: Long.UZERO
  };
}

export const DeploymentID = {
  encode(message: DeploymentID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeploymentID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO
    };
  },

  toJSON(message: DeploymentID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DeploymentID>): DeploymentID {
    const message = createBaseDeploymentID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    return message;
  },

  fromSDK(object: DeploymentIDSDKType): DeploymentID {
    return {
      owner: object?.owner,
      dseq: object?.dseq
    };
  },

  toSDK(message: DeploymentID): DeploymentIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    return obj;
  },

  fromAmino(object: DeploymentIDAmino): DeploymentID {
    return {
      owner: object.owner,
      dseq: Long.fromString(object.dseq)
    };
  },

  toAmino(message: DeploymentID): DeploymentIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    return obj;
  }

};

function createBaseDeployment(): Deployment {
  return {
    deploymentId: undefined,
    state: 0,
    version: new Uint8Array(),
    createdAt: Long.ZERO
  };
}

export const Deployment = {
  encode(message: Deployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentId !== undefined) {
      DeploymentID.encode(message.deploymentId, writer.uint32(10).fork()).ldelim();
    }

    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }

    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.createdAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Deployment {
    return {
      deploymentId: isSet(object.deploymentId) ? DeploymentID.fromJSON(object.deploymentId) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO
    };
  },

  toJSON(message: Deployment): unknown {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deploymentId = message.deploymentId ? DeploymentID.toJSON(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Deployment>): Deployment {
    const message = createBaseDeployment();
    message.deploymentId = object.deploymentId !== undefined && object.deploymentId !== null ? DeploymentID.fromPartial(object.deploymentId) : undefined;
    message.state = object.state ?? 0;
    message.version = object.version ?? new Uint8Array();
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  },

  fromSDK(object: DeploymentSDKType): Deployment {
    return {
      deploymentId: object.deployment_id ? DeploymentID.fromSDK(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
      version: object?.version,
      createdAt: object?.created_at
    };
  },

  toSDK(message: Deployment): DeploymentSDKType {
    const obj: any = {};
    message.deploymentId !== undefined && (obj.deployment_id = message.deploymentId ? DeploymentID.toSDK(message.deploymentId) : undefined);
    message.state !== undefined && (obj.state = deployment_StateToJSON(message.state));
    obj.version = message.version;
    obj.created_at = message.createdAt;
    return obj;
  },

  fromAmino(object: DeploymentAmino): Deployment {
    return {
      deploymentId: object?.deployment_id ? DeploymentID.fromAmino(object.deployment_id) : undefined,
      state: isSet(object.state) ? deployment_StateFromJSON(object.state) : 0,
      version: object.version,
      createdAt: Long.fromString(object.created_at)
    };
  },

  toAmino(message: Deployment): DeploymentAmino {
    const obj: any = {};
    obj.deployment_id = message.deploymentId ? DeploymentID.toAmino(message.deploymentId) : undefined;
    obj.state = message.state;
    obj.version = message.version;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  }

};

function createBaseDeploymentFilters(): DeploymentFilters {
  return {
    owner: "",
    dseq: Long.UZERO,
    state: ""
  };
}

export const DeploymentFilters = {
  encode(message: DeploymentFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }

    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeploymentFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeploymentFilters();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.dseq = (reader.uint64() as Long);
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
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      state: isSet(object.state) ? String(object.state) : ""
    };
  },

  toJSON(message: DeploymentFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<DeploymentFilters>): DeploymentFilters {
    const message = createBaseDeploymentFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
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

  toSDK(message: DeploymentFilters): DeploymentFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.state = message.state;
    return obj;
  },

  fromAmino(object: DeploymentFiltersAmino): DeploymentFilters {
    return {
      owner: object.owner,
      dseq: Long.fromString(object.dseq),
      state: object.state
    };
  },

  toAmino(message: DeploymentFilters): DeploymentFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.state = message.state;
    return obj;
  }

};