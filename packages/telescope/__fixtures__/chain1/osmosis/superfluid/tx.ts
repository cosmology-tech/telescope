/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "osmosis.superfluid";

export interface MsgSuperfluidDelegate {
  sender: string;
  lockId: Long;
  valAddr: string;
}

export interface MsgSuperfluidDelegateResponse {}

export interface MsgSuperfluidUndelegate {
  sender: string;
  lockId: Long;
}

export interface MsgSuperfluidUndelegateResponse {}

export interface MsgSuperfluidUnbondLock {
  sender: string;
  lockId: Long;
}

export interface MsgSuperfluidUnbondLockResponse {}

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

export interface MsgLockAndSuperfluidDelegateResponse {
  ID: Long;
}

function createBaseMsgSuperfluidDelegate(): MsgSuperfluidDelegate {
  return { sender: "", lockId: Long.UZERO, valAddr: "" };
}

export const MsgSuperfluidDelegate = {
  encode(
    message: MsgSuperfluidDelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuperfluidDelegate {
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
          message.lockId = reader.uint64() as Long;
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
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
    };
  },

  toJSON(message: MsgSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidDelegate>, I>>(
    object: I
  ): MsgSuperfluidDelegate {
    const message = createBaseMsgSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    message.valAddr = object.valAddr ?? "";
    return message;
  },
};

function createBaseMsgSuperfluidDelegateResponse(): MsgSuperfluidDelegateResponse {
  return {};
}

export const MsgSuperfluidDelegateResponse = {
  encode(
    _: MsgSuperfluidDelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuperfluidDelegateResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidDelegateResponse>, I>>(
    _: I
  ): MsgSuperfluidDelegateResponse {
    const message = createBaseMsgSuperfluidDelegateResponse();
    return message;
  },
};

function createBaseMsgSuperfluidUndelegate(): MsgSuperfluidUndelegate {
  return { sender: "", lockId: Long.UZERO };
}

export const MsgSuperfluidUndelegate = {
  encode(
    message: MsgSuperfluidUndelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuperfluidUndelegate {
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
          message.lockId = reader.uint64() as Long;
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
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgSuperfluidUndelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUndelegate>, I>>(
    object: I
  ): MsgSuperfluidUndelegate {
    const message = createBaseMsgSuperfluidUndelegate();
    message.sender = object.sender ?? "";
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgSuperfluidUndelegateResponse(): MsgSuperfluidUndelegateResponse {
  return {};
}

export const MsgSuperfluidUndelegateResponse = {
  encode(
    _: MsgSuperfluidUndelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuperfluidUndelegateResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUndelegateResponse>, I>>(
    _: I
  ): MsgSuperfluidUndelegateResponse {
    const message = createBaseMsgSuperfluidUndelegateResponse();
    return message;
  },
};

function createBaseMsgSuperfluidUnbondLock(): MsgSuperfluidUnbondLock {
  return { sender: "", lockId: Long.UZERO };
}

export const MsgSuperfluidUnbondLock = {
  encode(
    message: MsgSuperfluidUnbondLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (!message.lockId.isZero()) {
      writer.uint32(16).uint64(message.lockId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuperfluidUnbondLock {
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
          message.lockId = reader.uint64() as Long;
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
      lockId: isSet(object.lockId)
        ? Long.fromString(object.lockId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgSuperfluidUnbondLock): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.lockId !== undefined &&
      (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUnbondLock>, I>>(
    object: I
  ): MsgSuperfluidUnbondLock {
    const message = createBaseMsgSuperfluidUnbondLock();
    message.sender = object.sender ?? "";
    message.lockId =
      object.lockId !== undefined && object.lockId !== null
        ? Long.fromValue(object.lockId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgSuperfluidUnbondLockResponse(): MsgSuperfluidUnbondLockResponse {
  return {};
}

export const MsgSuperfluidUnbondLockResponse = {
  encode(
    _: MsgSuperfluidUnbondLockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSuperfluidUnbondLockResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgSuperfluidUnbondLockResponse>, I>>(
    _: I
  ): MsgSuperfluidUnbondLockResponse {
    const message = createBaseMsgSuperfluidUnbondLockResponse();
    return message;
  },
};

function createBaseMsgLockAndSuperfluidDelegate(): MsgLockAndSuperfluidDelegate {
  return { sender: "", coins: [], valAddr: "" };
}

export const MsgLockAndSuperfluidDelegate = {
  encode(
    message: MsgLockAndSuperfluidDelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLockAndSuperfluidDelegate {
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
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
    };
  },

  toJSON(message: MsgLockAndSuperfluidDelegate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockAndSuperfluidDelegate>, I>>(
    object: I
  ): MsgLockAndSuperfluidDelegate {
    const message = createBaseMsgLockAndSuperfluidDelegate();
    message.sender = object.sender ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.valAddr = object.valAddr ?? "";
    return message;
  },
};

function createBaseMsgLockAndSuperfluidDelegateResponse(): MsgLockAndSuperfluidDelegateResponse {
  return { ID: Long.UZERO };
}

export const MsgLockAndSuperfluidDelegateResponse = {
  encode(
    message: MsgLockAndSuperfluidDelegateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLockAndSuperfluidDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64() as Long;
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
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO,
    };
  },

  toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown {
    const obj: any = {};
    message.ID !== undefined &&
      (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgLockAndSuperfluidDelegateResponse>, I>
  >(object: I): MsgLockAndSuperfluidDelegateResponse {
    const message = createBaseMsgLockAndSuperfluidDelegateResponse();
    message.ID =
      object.ID !== undefined && object.ID !== null
        ? Long.fromValue(object.ID)
        : Long.UZERO;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** Execute superfluid delegation for a lockup */
  SuperfluidDelegate(
    request: MsgSuperfluidDelegate
  ): Promise<MsgSuperfluidDelegateResponse>;
  /** Execute superfluid undelegation for a lockup */
  SuperfluidUndelegate(
    request: MsgSuperfluidUndelegate
  ): Promise<MsgSuperfluidUndelegateResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */
  SuperfluidUnbondLock(
    request: MsgSuperfluidUnbondLock
  ): Promise<MsgSuperfluidUnbondLockResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */
  LockAndSuperfluidDelegate(
    request: MsgLockAndSuperfluidDelegate
  ): Promise<MsgLockAndSuperfluidDelegateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SuperfluidDelegate = this.SuperfluidDelegate.bind(this);
    this.SuperfluidUndelegate = this.SuperfluidUndelegate.bind(this);
    this.SuperfluidUnbondLock = this.SuperfluidUnbondLock.bind(this);
    this.LockAndSuperfluidDelegate = this.LockAndSuperfluidDelegate.bind(this);
  }
  SuperfluidDelegate(
    request: MsgSuperfluidDelegate
  ): Promise<MsgSuperfluidDelegateResponse> {
    const data = MsgSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "SuperfluidDelegate",
      data
    );
    return promise.then((data) =>
      MsgSuperfluidDelegateResponse.decode(new _m0.Reader(data))
    );
  }

  SuperfluidUndelegate(
    request: MsgSuperfluidUndelegate
  ): Promise<MsgSuperfluidUndelegateResponse> {
    const data = MsgSuperfluidUndelegate.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "SuperfluidUndelegate",
      data
    );
    return promise.then((data) =>
      MsgSuperfluidUndelegateResponse.decode(new _m0.Reader(data))
    );
  }

  SuperfluidUnbondLock(
    request: MsgSuperfluidUnbondLock
  ): Promise<MsgSuperfluidUnbondLockResponse> {
    const data = MsgSuperfluidUnbondLock.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "SuperfluidUnbondLock",
      data
    );
    return promise.then((data) =>
      MsgSuperfluidUnbondLockResponse.decode(new _m0.Reader(data))
    );
  }

  LockAndSuperfluidDelegate(
    request: MsgLockAndSuperfluidDelegate
  ): Promise<MsgLockAndSuperfluidDelegateResponse> {
    const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "osmosis.superfluid.Msg",
      "LockAndSuperfluidDelegate",
      data
    );
    return promise.then((data) =>
      MsgLockAndSuperfluidDelegateResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
