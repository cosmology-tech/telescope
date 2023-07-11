import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.superfluid";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: Long;
  valAddr: string;
}
export interface MsgSuperfluidDelegateSDKType {
  sender: string;
  lock_id: Long;
  val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {}
export interface MsgSuperfluidDelegateResponseSDKType {}
export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUndelegateSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUndelegateResponse {}
export interface MsgSuperfluidUndelegateResponseSDKType {}
export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: Long;
}
export interface MsgSuperfluidUnbondLockSDKType {
  sender: string;
  lock_id: Long;
}
export interface MsgSuperfluidUnbondLockResponse {}
export interface MsgSuperfluidUnbondLockResponseSDKType {}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
  sender: string;
  coins: Coin[];
  valAddr: string;
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegateSDKType {
  sender: string;
  coins: CoinSDKType[];
  val_addr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
  ID: Long;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
  ID: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPool {
  sender: string;
  poolId: Long;
}
/**
 * MsgUnPoolWhitelistedPool Unpools every lock the sender has, that is
 * associated with pool pool_id. If pool_id is not approved for unpooling by
 * governance, this is a no-op. Unpooling takes the locked gamm shares, and runs
 * "ExitPool" on it, to get the constituent tokens. e.g. z gamm/pool/1 tokens
 * ExitPools into constituent tokens x uatom, y uosmo. Then it creates a new
 * lock for every constituent token, with the duration associated with the lock.
 * If the lock was unbonding, the new lockup durations should be the time left
 * until unbond completion.
 */
export interface MsgUnPoolWhitelistedPoolSDKType {
  sender: string;
  pool_id: Long;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: Long[];
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
  exited_lock_ids: Long[];
}
function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return {
    sender: "",
    lockId: Long.UZERO,
    valAddr: ""
  };
}
export const MsgSuperfluidDelegate = {
  encode(message: MsgSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = (reader.uint64() as Long);
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidDelegate {
    const obj = createBaseMsgSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = Long.fromValue(object.lockId);
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    return obj;
  },
  toJSON(message: MsgSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromSDK(object: MsgSuperfluidDelegateSDKType): MsgSuperfluidDelegate {
    return {
      sender: object?.sender,
      lockId: object?.lock_id,
      valAddr: object?.val_addr
    };
  },
  toSDK(message: MsgSuperfluidDelegate): MsgSuperfluidDelegateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId;
    obj.val_addr = message.valAddr;
    return obj;
  }
};
function createBaseMsgSuperfluidDelegateResponse(): MsgSuperfluidDelegateResponse {
  return {};
}
export const MsgSuperfluidDelegateResponse = {
  encode(_: MsgSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidDelegateResponse();
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
  fromJSON(_: any): MsgSuperfluidDelegateResponse {
    const obj = createBaseMsgSuperfluidDelegateResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSuperfluidDelegateResponse>): MsgSuperfluidDelegateResponse {
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  },
  fromSDK(_: MsgSuperfluidDelegateResponseSDKType): MsgSuperfluidDelegateResponse {
    return {};
  },
  toSDK(_: MsgSuperfluidDelegateResponse): MsgSuperfluidDelegateResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSuperfluidUndelegate(): MsgSuperfluidUndelegate {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUndelegate = {
  encode(message: MsgSuperfluidUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUndelegate {
    const obj = createBaseMsgSuperfluidUndelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = Long.fromValue(object.lockId);
    return obj;
  },
  toJSON(message: MsgSuperfluidUndelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgSuperfluidUndelegateSDKType): MsgSuperfluidUndelegate {
    return {
      sender: object?.sender,
      lockId: object?.lock_id
    };
  },
  toSDK(message: MsgSuperfluidUndelegate): MsgSuperfluidUndelegateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId;
    return obj;
  }
};
function createBaseMsgSuperfluidUndelegateResponse(): MsgSuperfluidUndelegateResponse {
  return {};
}
export const MsgSuperfluidUndelegateResponse = {
  encode(_: MsgSuperfluidUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUndelegateResponse();
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
  fromJSON(_: any): MsgSuperfluidUndelegateResponse {
    const obj = createBaseMsgSuperfluidUndelegateResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSuperfluidUndelegateResponse>): MsgSuperfluidUndelegateResponse {
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  },
  fromSDK(_: MsgSuperfluidUndelegateResponseSDKType): MsgSuperfluidUndelegateResponse {
    return {};
  },
  toSDK(_: MsgSuperfluidUndelegateResponse): MsgSuperfluidUndelegateResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgSuperfluidUnbondLock(): MsgSuperfluidUnbondLock {
  return {
    sender: "",
    lockId: Long.UZERO
  };
}
export const MsgSuperfluidUnbondLock = {
  encode(message: MsgSuperfluidUnbondLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.lockId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSuperfluidUnbondLock {
    const obj = createBaseMsgSuperfluidUnbondLock();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.lockId)) obj.lockId = Long.fromValue(object.lockId);
    return obj;
  },
  toJSON(message: MsgSuperfluidUnbondLock): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgSuperfluidUnbondLockSDKType): MsgSuperfluidUnbondLock {
    return {
      sender: object?.sender,
      lockId: object?.lock_id
    };
  },
  toSDK(message: MsgSuperfluidUnbondLock): MsgSuperfluidUnbondLockSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.lock_id = message.lockId;
    return obj;
  }
};
function createBaseMsgSuperfluidUnbondLockResponse(): MsgSuperfluidUnbondLockResponse {
  return {};
}
export const MsgSuperfluidUnbondLockResponse = {
  encode(_: MsgSuperfluidUnbondLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSuperfluidUnbondLockResponse();
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
  fromJSON(_: any): MsgSuperfluidUnbondLockResponse {
    const obj = createBaseMsgSuperfluidUnbondLockResponse();
    return obj;
  },
  toJSON(_: MsgSuperfluidUnbondLockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSuperfluidUnbondLockResponse>): MsgSuperfluidUnbondLockResponse {
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  },
  fromSDK(_: MsgSuperfluidUnbondLockResponseSDKType): MsgSuperfluidUnbondLockResponse {
    return {};
  },
  toSDK(_: MsgSuperfluidUnbondLockResponse): MsgSuperfluidUnbondLockResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgLockAndSuperfluidDelegate(): MsgLockAndSuperfluidDelegate {
  return {
    sender: "",
    coins: [],
    valAddr: ""
  };
}
export const MsgLockAndSuperfluidDelegate = {
  encode(message: MsgLockAndSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.valAddr !== "") {
      writer.uint32(26).string(message.valAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegate {
    const obj = createBaseMsgLockAndSuperfluidDelegate();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (Array.isArray(object?.coins)) object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.valAddr)) obj.valAddr = String(object.valAddr);
    return obj;
  },
  toJSON(message: MsgLockAndSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockAndSuperfluidDelegate>): MsgLockAndSuperfluidDelegate {
    const message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    return message;
  },
  fromSDK(object: MsgLockAndSuperfluidDelegateSDKType): MsgLockAndSuperfluidDelegate {
    return {
      sender: object?.sender,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : [],
      valAddr: object?.val_addr
    };
  },
  toSDK(message: MsgLockAndSuperfluidDelegate): MsgLockAndSuperfluidDelegateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.val_addr = message.valAddr;
    return obj;
  }
};
function createBaseMsgLockAndSuperfluidDelegateResponse(): MsgLockAndSuperfluidDelegateResponse {
  return {
    ID: Long.UZERO
  };
}
export const MsgLockAndSuperfluidDelegateResponse = {
  encode(message: MsgLockAndSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse {
    const obj = createBaseMsgLockAndSuperfluidDelegateResponse();
    if (isSet(object.ID)) obj.ID = Long.fromValue(object.ID);
    return obj;
  },
  toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgLockAndSuperfluidDelegateResponseSDKType): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: object?.ID
    };
  },
  toSDK(message: MsgLockAndSuperfluidDelegateResponse): MsgLockAndSuperfluidDelegateResponseSDKType {
    const obj: any = {};
    obj.ID = message.ID;
    return obj;
  }
};
function createBaseMsgUnPoolWhitelistedPool(): MsgUnPoolWhitelistedPool {
  return {
    sender: "",
    poolId: Long.UZERO
  };
}
export const MsgUnPoolWhitelistedPool = {
  encode(message: MsgUnPoolWhitelistedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPool {
    const obj = createBaseMsgUnPoolWhitelistedPool();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.poolId)) obj.poolId = Long.fromValue(object.poolId);
    return obj;
  },
  toJSON(message: MsgUnPoolWhitelistedPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool {
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgUnPoolWhitelistedPoolSDKType): MsgUnPoolWhitelistedPool {
    return {
      sender: object?.sender,
      poolId: object?.pool_id
    };
  },
  toSDK(message: MsgUnPoolWhitelistedPool): MsgUnPoolWhitelistedPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.poolId;
    return obj;
  }
};
function createBaseMsgUnPoolWhitelistedPoolResponse(): MsgUnPoolWhitelistedPoolResponse {
  return {
    exitedLockIds: []
  };
}
export const MsgUnPoolWhitelistedPoolResponse = {
  encode(message: MsgUnPoolWhitelistedPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.exitedLockIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnPoolWhitelistedPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.exitedLockIds.push((reader.uint64() as Long));
            }
          } else {
            message.exitedLockIds.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnPoolWhitelistedPoolResponse {
    const obj = createBaseMsgUnPoolWhitelistedPoolResponse();
    if (Array.isArray(object?.exitedLockIds)) object.exitedLockIds.map((e: any) => Long.fromValue(e));
    return obj;
  },
  toJSON(message: MsgUnPoolWhitelistedPoolResponse): unknown {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exitedLockIds = message.exitedLockIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.exitedLockIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse {
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exitedLockIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromSDK(object: MsgUnPoolWhitelistedPoolResponseSDKType): MsgUnPoolWhitelistedPoolResponse {
    return {
      exitedLockIds: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e: any) => e) : []
    };
  },
  toSDK(message: MsgUnPoolWhitelistedPoolResponse): MsgUnPoolWhitelistedPoolResponseSDKType {
    const obj: any = {};
    if (message.exitedLockIds) {
      obj.exited_lock_ids = message.exitedLockIds.map(e => e);
    } else {
      obj.exited_lock_ids = [];
    }
    return obj;
  }
};