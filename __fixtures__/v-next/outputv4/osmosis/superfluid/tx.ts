import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.superfluid";
export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: bigint;
  valAddr: string;
}
export interface MsgSuperfluidDelegateSDKType {
  sender: string;
  lock_id: bigint;
  val_addr: string;
}
export interface MsgSuperfluidDelegateResponse {}
export interface MsgSuperfluidDelegateResponseSDKType {}
export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: bigint;
}
export interface MsgSuperfluidUndelegateSDKType {
  sender: string;
  lock_id: bigint;
}
export interface MsgSuperfluidUndelegateResponse {}
export interface MsgSuperfluidUndelegateResponseSDKType {}
export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: bigint;
}
export interface MsgSuperfluidUnbondLockSDKType {
  sender: string;
  lock_id: bigint;
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
  ID: bigint;
}
export interface MsgLockAndSuperfluidDelegateResponseSDKType {
  ID: bigint;
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
  poolId: bigint;
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
  pool_id: bigint;
}
export interface MsgUnPoolWhitelistedPoolResponse {
  exitedLockIds: bigint[];
}
export interface MsgUnPoolWhitelistedPoolResponseSDKType {
  exited_lock_ids: bigint[];
}

function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return {
    sender: "",
    lockId: BigInt("0"),
    valAddr: ""
  };
}

export const MsgSuperfluidDelegate = {
  encode(message: MsgSuperfluidDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.lockId.toString()));
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
          message.lockId = BigInt(reader.uint64().toString());
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
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? BigInt(object.lockId.toString()) : BigInt("0"),
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
  },

  toJSON(message: MsgSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt("0")).toString());
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSuperfluidDelegate>): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt("0");
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

  fromSDKJSON(object: any): MsgSuperfluidDelegateSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt("0"),
      val_addr: isSet(object.val_addr) ? String(object.val_addr) : ""
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
    return {};
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

  fromSDKJSON(_: any): MsgSuperfluidDelegateResponseSDKType {
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
    lockId: BigInt("0")
  };
}

export const MsgSuperfluidUndelegate = {
  encode(message: MsgSuperfluidUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.lockId.toString()));
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
          message.lockId = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSuperfluidUndelegate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? BigInt(object.lockId.toString()) : BigInt("0")
    };
  },

  toJSON(message: MsgSuperfluidUndelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSuperfluidUndelegate>): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: MsgSuperfluidUndelegateSDKType): MsgSuperfluidUndelegate {
    return {
      sender: object?.sender,
      lockId: object?.lock_id
    };
  },

  fromSDKJSON(object: any): MsgSuperfluidUndelegateSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt("0")
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
    return {};
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

  fromSDKJSON(_: any): MsgSuperfluidUndelegateResponseSDKType {
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
    lockId: BigInt("0")
  };
}

export const MsgSuperfluidUnbondLock = {
  encode(message: MsgSuperfluidUnbondLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.lockId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.lockId.toString()));
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
          message.lockId = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSuperfluidUnbondLock {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lockId: isSet(object.lockId) ? BigInt(object.lockId.toString()) : BigInt("0")
    };
  },

  toJSON(message: MsgSuperfluidUnbondLock): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSuperfluidUnbondLock>): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: MsgSuperfluidUnbondLockSDKType): MsgSuperfluidUnbondLock {
    return {
      sender: object?.sender,
      lockId: object?.lock_id
    };
  },

  fromSDKJSON(object: any): MsgSuperfluidUnbondLockSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt("0")
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
    return {};
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

  fromSDKJSON(_: any): MsgSuperfluidUnbondLockResponseSDKType {
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
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : ""
    };
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

  fromSDKJSON(object: any): MsgLockAndSuperfluidDelegateSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : [],
      val_addr: isSet(object.val_addr) ? String(object.val_addr) : ""
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
    ID: BigInt("0")
  };
}

export const MsgLockAndSuperfluidDelegateResponse = {
  encode(message: MsgLockAndSuperfluidDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.ID.toString()));
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
          message.ID = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt("0")
    };
  },

  toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgLockAndSuperfluidDelegateResponse>): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: MsgLockAndSuperfluidDelegateResponseSDKType): MsgLockAndSuperfluidDelegateResponse {
    return {
      ID: object?.ID
    };
  },

  fromSDKJSON(object: any): MsgLockAndSuperfluidDelegateResponseSDKType {
    return {
      ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt("0")
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
    poolId: BigInt("0")
  };
}

export const MsgUnPoolWhitelistedPool = {
  encode(message: MsgUnPoolWhitelistedPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(Long.fromString(message.poolId.toString()));
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
          message.poolId = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnPoolWhitelistedPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt("0")
    };
  },

  toJSON(message: MsgUnPoolWhitelistedPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPool>): MsgUnPoolWhitelistedPool {
    const message = createBaseMsgUnPoolWhitelistedPool();
    message.sender = object.sender ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: MsgUnPoolWhitelistedPoolSDKType): MsgUnPoolWhitelistedPool {
    return {
      sender: object?.sender,
      poolId: object?.pool_id
    };
  },

  fromSDKJSON(object: any): MsgUnPoolWhitelistedPoolSDKType {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt("0")
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
      writer.uint64(Long.fromString(v.toString()));
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
              message.exitedLockIds.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.exitedLockIds.push(BigInt(reader.uint64().toString()));
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
    return {
      exitedLockIds: Array.isArray(object?.exitedLockIds) ? object.exitedLockIds.map((e: any) => BigInt(e.toString())) : []
    };
  },

  toJSON(message: MsgUnPoolWhitelistedPoolResponse): unknown {
    const obj: any = {};

    if (message.exitedLockIds) {
      obj.exitedLockIds = message.exitedLockIds.map(e => (e || BigInt("0")).toString());
    } else {
      obj.exitedLockIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnPoolWhitelistedPoolResponse>): MsgUnPoolWhitelistedPoolResponse {
    const message = createBaseMsgUnPoolWhitelistedPoolResponse();
    message.exitedLockIds = object.exitedLockIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },

  fromSDK(object: MsgUnPoolWhitelistedPoolResponseSDKType): MsgUnPoolWhitelistedPoolResponse {
    return {
      exitedLockIds: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e: any) => e) : []
    };
  },

  fromSDKJSON(object: any): MsgUnPoolWhitelistedPoolResponseSDKType {
    return {
      exited_lock_ids: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e: any) => BigInt(e.toString())) : []
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