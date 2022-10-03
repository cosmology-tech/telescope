import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  id: DeploymentID;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit: Coin;

  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
  id: DeploymentIDSDKType;
  groups: GroupSpecSDKType[];
  version: Uint8Array;
  deposit: CoinSDKType;

  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  id: DeploymentID;
  amount: Coin;

  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
  id: DeploymentIDSDKType;
  amount: CoinSDKType;

  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  id: DeploymentID;
  version: Uint8Array;
}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
  id: DeploymentIDSDKType;
  version: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  id: DeploymentID;
}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
  id: DeploymentIDSDKType;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {}

function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    id: undefined,
    groups: [],
    version: new Uint8Array(),
    deposit: undefined,
    depositor: ""
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

    if (message.depositor !== "") {
      writer.uint32(42).string(message.depositor);
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

        case 5:
          message.depositor = reader.string();
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
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
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
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDeployment>, I>>(object: I): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map(e => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },

  fromSDK(object: MsgCreateDeploymentSDKType): MsgCreateDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDK(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromSDK(e)) : [],
      version: isSet(object.version) ? object.version : undefined,
      deposit: isSet(object.deposit) ? Coin.fromSDK(object.deposit) : undefined,
      depositor: isSet(object.depositor) ? object.depositor : undefined
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

    message.version !== undefined && (obj.version = message.version);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateDeploymentResponse>, I>>(_: I): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgCreateDeploymentResponseSDKType): MsgCreateDeploymentResponse {
    return {};
  },

  toSDK(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return {
    id: undefined,
    amount: undefined,
    depositor: ""
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

    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
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

        case 3:
          message.depositor = reader.string();
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },

  toJSON(message: MsgDepositDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositDeployment>, I>>(object: I): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },

  fromSDK(object: MsgDepositDeploymentSDKType): MsgDepositDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDK(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromSDK(object.amount) : undefined,
      depositor: isSet(object.depositor) ? object.depositor : undefined
    };
  },

  toSDK(message: MsgDepositDeployment): MsgDepositDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
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

  fromPartial<I extends Exact<DeepPartial<MsgDepositDeploymentResponse>, I>>(_: I): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgDepositDeploymentResponseSDKType): MsgDepositDeploymentResponse {
    return {};
  },

  toSDK(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return {
    id: undefined,
    version: new Uint8Array()
  };
}

export const MsgUpdateDeployment = {
  encode(message: MsgUpdateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
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
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array()
    };
  },

  toJSON(message: MsgUpdateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.version !== undefined && (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDeployment>, I>>(object: I): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    message.version = object.version ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgUpdateDeploymentSDKType): MsgUpdateDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDK(object.id) : undefined,
      version: isSet(object.version) ? object.version : undefined
    };
  },

  toSDK(message: MsgUpdateDeployment): MsgUpdateDeploymentSDKType {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toSDK(message.id) : undefined);
    message.version !== undefined && (obj.version = message.version);
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDeploymentResponse>, I>>(_: I): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgUpdateDeploymentResponseSDKType): MsgUpdateDeploymentResponse {
    return {};
  },

  toSDK(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseSDKType {
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

  fromPartial<I extends Exact<DeepPartial<MsgCloseDeployment>, I>>(object: I): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id = object.id !== undefined && object.id !== null ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },

  fromSDK(object: MsgCloseDeploymentSDKType): MsgCloseDeployment {
    return {
      id: isSet(object.id) ? DeploymentID.fromSDK(object.id) : undefined
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

  fromPartial<I extends Exact<DeepPartial<MsgCloseDeploymentResponse>, I>>(_: I): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },

  fromSDK(_: MsgCloseDeploymentResponseSDKType): MsgCloseDeploymentResponse {
    return {};
  },

  toSDK(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseSDKType {
    const obj: any = {};
    return obj;
  }

};