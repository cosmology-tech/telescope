/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  address: string;
  pubKey: Any;
  accountNumber: string;
  sequence: string;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccount {
  baseAccount: BaseAccount;
  name: string;
  permissions: string[];
}
/** Params defines the parameters for the auth module. */

export interface Params {
  maxMemoCharacters: string;
  txSigLimit: string;
  txSizeCostPerByte: string;
  sigVerifyCostEd25519: string;
  sigVerifyCostSecp256k1: string;
}

function createBaseBaseAccount(): BaseAccount {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: "0",
    sequence: "0"
  };
}

export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }

    if (message.accountNumber !== "0") {
      writer.uint32(24).uint64(message.accountNumber);
    }

    if (message.sequence !== "0") {
      writer.uint32(32).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.accountNumber = longToString((reader.uint64() as Long));
          break;

        case 4:
          message.sequence = longToString((reader.uint64() as Long));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BaseAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      accountNumber: isSet(object.accountNumber) ? String(object.accountNumber) : "0",
      sequence: isSet(object.sequence) ? String(object.sequence) : "0"
    };
  },

  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.accountNumber = message.accountNumber);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(object: I): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber ?? "0";
    message.sequence = object.sequence ?? "0";
    return message;
  }

};

function createBaseModuleAccount(): ModuleAccount {
  return {
    baseAccount: undefined,
    name: "",
    permissions: []
  };
}

export const ModuleAccount = {
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.permissions.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);

    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleAccount>, I>>(object: I): ModuleAccount {
    const message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    maxMemoCharacters: "0",
    txSigLimit: "0",
    txSizeCostPerByte: "0",
    sigVerifyCostEd25519: "0",
    sigVerifyCostSecp256k1: "0"
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxMemoCharacters !== "0") {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }

    if (message.txSigLimit !== "0") {
      writer.uint32(16).uint64(message.txSigLimit);
    }

    if (message.txSizeCostPerByte !== "0") {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }

    if (message.sigVerifyCostEd25519 !== "0") {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }

    if (message.sigVerifyCostSecp256k1 !== "0") {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = longToString((reader.uint64() as Long));
          break;

        case 2:
          message.txSigLimit = longToString((reader.uint64() as Long));
          break;

        case 3:
          message.txSizeCostPerByte = longToString((reader.uint64() as Long));
          break;

        case 4:
          message.sigVerifyCostEd25519 = longToString((reader.uint64() as Long));
          break;

        case 5:
          message.sigVerifyCostSecp256k1 = longToString((reader.uint64() as Long));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxMemoCharacters: isSet(object.maxMemoCharacters) ? String(object.maxMemoCharacters) : "0",
      txSigLimit: isSet(object.txSigLimit) ? String(object.txSigLimit) : "0",
      txSizeCostPerByte: isSet(object.txSizeCostPerByte) ? String(object.txSizeCostPerByte) : "0",
      sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519) ? String(object.sigVerifyCostEd25519) : "0",
      sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1) ? String(object.sigVerifyCostSecp256k1) : "0"
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxMemoCharacters !== undefined && (obj.maxMemoCharacters = message.maxMemoCharacters);
    message.txSigLimit !== undefined && (obj.txSigLimit = message.txSigLimit);
    message.txSizeCostPerByte !== undefined && (obj.txSizeCostPerByte = message.txSizeCostPerByte);
    message.sigVerifyCostEd25519 !== undefined && (obj.sigVerifyCostEd25519 = message.sigVerifyCostEd25519);
    message.sigVerifyCostSecp256k1 !== undefined && (obj.sigVerifyCostSecp256k1 = message.sigVerifyCostSecp256k1);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxMemoCharacters = object.maxMemoCharacters ?? "0";
    message.txSigLimit = object.txSigLimit ?? "0";
    message.txSizeCostPerByte = object.txSizeCostPerByte ?? "0";
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 ?? "0";
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 ?? "0";
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}