//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, SyntheticLock } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, fromJsonTimestamp, fromTimestamp, Long, Rpc } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
export interface ModuleBalanceRequest {}
export interface ModuleBalanceResponse {
  coins: Coin[];
}
export interface ModuleLockedAmountRequest {}
export interface ModuleLockedAmountResponse {
  coins: Coin[];
}
export interface AccountUnlockableCoinsRequest {
  owner: string;
}
export interface AccountUnlockableCoinsResponse {
  coins: Coin[];
}
export interface AccountUnlockingCoinsRequest {
  owner: string;
}
export interface AccountUnlockingCoinsResponse {
  coins: Coin[];
}
export interface AccountLockedCoinsRequest {
  owner: string;
}
export interface AccountLockedCoinsResponse {
  coins: Coin[];
}
export interface AccountLockedPastTimeRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountLockedPastTimeResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeNotUnlockingOnlyRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountLockedPastTimeNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}
export interface AccountUnlockedBeforeTimeRequest {
  owner: string;
  timestamp?: Timestamp;
}
export interface AccountUnlockedBeforeTimeResponse {
  locks: PeriodLock[];
}
export interface AccountLockedPastTimeDenomRequest {
  owner: string;
  timestamp?: Timestamp;
  denom: string;
}
export interface AccountLockedPastTimeDenomResponse {
  locks: PeriodLock[];
}
export interface LockedDenomRequest {
  denom: string;
  duration?: Duration;
}
export interface LockedDenomResponse {
  amount: string;
}
export interface LockedRequest {
  lockId: Long;
}
export interface LockedResponse {
  lock?: PeriodLock;
}
export interface SyntheticLockupsByLockupIDRequest {
  lockId: Long;
}
export interface SyntheticLockupsByLockupIDResponse {
  syntheticLocks: SyntheticLock[];
}
export interface AccountLockedLongerDurationRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedLongerDurationResponse {
  locks: PeriodLock[];
}
export interface AccountLockedDurationRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedDurationResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationNotUnlockingOnlyRequest {
  owner: string;
  duration?: Duration;
}
export interface AccountLockedLongerDurationNotUnlockingOnlyResponse {
  locks: PeriodLock[];
}
export interface AccountLockedLongerDurationDenomRequest {
  owner: string;
  duration?: Duration;
  denom: string;
}
export interface AccountLockedLongerDurationDenomResponse {
  locks: PeriodLock[];
}

function createBaseModuleBalanceRequest(): ModuleBalanceRequest {
  return {};
}

export const ModuleBalanceRequest = {
  encode(_: ModuleBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceRequest();

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

  fromJSON(_: any): ModuleBalanceRequest {
    return {};
  },

  toJSON(_: ModuleBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ModuleBalanceRequest>): ModuleBalanceRequest {
    const message = createBaseModuleBalanceRequest();
    return message;
  },

  fromAmino(_: ModuleBalanceRequestSDKType): ModuleBalanceRequest {
    return {};
  },

  toAmino(_: ModuleBalanceRequest): ModuleBalanceRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseModuleBalanceResponse(): ModuleBalanceResponse {
  return {
    coins: []
  };
}

export const ModuleBalanceResponse = {
  encode(message: ModuleBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleBalanceResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ModuleBalanceResponse>): ModuleBalanceResponse {
    const message = createBaseModuleBalanceResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ModuleBalanceResponseSDKType): ModuleBalanceResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: ModuleBalanceResponse): ModuleBalanceResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseModuleLockedAmountRequest(): ModuleLockedAmountRequest {
  return {};
}

export const ModuleLockedAmountRequest = {
  encode(_: ModuleLockedAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountRequest();

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

  fromJSON(_: any): ModuleLockedAmountRequest {
    return {};
  },

  toJSON(_: ModuleLockedAmountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ModuleLockedAmountRequest>): ModuleLockedAmountRequest {
    const message = createBaseModuleLockedAmountRequest();
    return message;
  },

  fromAmino(_: ModuleLockedAmountRequestSDKType): ModuleLockedAmountRequest {
    return {};
  },

  toAmino(_: ModuleLockedAmountRequest): ModuleLockedAmountRequestSDKType {
    const obj: any = {};
    return obj;
  }

};

function createBaseModuleLockedAmountResponse(): ModuleLockedAmountResponse {
  return {
    coins: []
  };
}

export const ModuleLockedAmountResponse = {
  encode(message: ModuleLockedAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleLockedAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleLockedAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: ModuleLockedAmountResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ModuleLockedAmountResponse>): ModuleLockedAmountResponse {
    const message = createBaseModuleLockedAmountResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: ModuleLockedAmountResponseSDKType): ModuleLockedAmountResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: ModuleLockedAmountResponse): ModuleLockedAmountResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountUnlockableCoinsRequest(): AccountUnlockableCoinsRequest {
  return {
    owner: ""
  };
}

export const AccountUnlockableCoinsRequest = {
  encode(message: AccountUnlockableCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockableCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: AccountUnlockableCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnlockableCoinsRequest>): AccountUnlockableCoinsRequest {
    const message = createBaseAccountUnlockableCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: AccountUnlockableCoinsRequestSDKType): AccountUnlockableCoinsRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined
    };
  },

  toAmino(message: AccountUnlockableCoinsRequest): AccountUnlockableCoinsRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  }

};

function createBaseAccountUnlockableCoinsResponse(): AccountUnlockableCoinsResponse {
  return {
    coins: []
  };
}

export const AccountUnlockableCoinsResponse = {
  encode(message: AccountUnlockableCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockableCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockableCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountUnlockableCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnlockableCoinsResponse>): AccountUnlockableCoinsResponse {
    const message = createBaseAccountUnlockableCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountUnlockableCoinsResponseSDKType): AccountUnlockableCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountUnlockableCoinsResponse): AccountUnlockableCoinsResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountUnlockingCoinsRequest(): AccountUnlockingCoinsRequest {
  return {
    owner: ""
  };
}

export const AccountUnlockingCoinsRequest = {
  encode(message: AccountUnlockingCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockingCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: AccountUnlockingCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnlockingCoinsRequest>): AccountUnlockingCoinsRequest {
    const message = createBaseAccountUnlockingCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: AccountUnlockingCoinsRequestSDKType): AccountUnlockingCoinsRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined
    };
  },

  toAmino(message: AccountUnlockingCoinsRequest): AccountUnlockingCoinsRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  }

};

function createBaseAccountUnlockingCoinsResponse(): AccountUnlockingCoinsResponse {
  return {
    coins: []
  };
}

export const AccountUnlockingCoinsResponse = {
  encode(message: AccountUnlockingCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockingCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockingCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountUnlockingCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnlockingCoinsResponse>): AccountUnlockingCoinsResponse {
    const message = createBaseAccountUnlockingCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountUnlockingCoinsResponseSDKType): AccountUnlockingCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountUnlockingCoinsResponse): AccountUnlockingCoinsResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountLockedCoinsRequest(): AccountLockedCoinsRequest {
  return {
    owner: ""
  };
}

export const AccountLockedCoinsRequest = {
  encode(message: AccountLockedCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedCoinsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: AccountLockedCoinsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedCoinsRequest>): AccountLockedCoinsRequest {
    const message = createBaseAccountLockedCoinsRequest();
    message.owner = object.owner ?? "";
    return message;
  },

  fromAmino(object: AccountLockedCoinsRequestSDKType): AccountLockedCoinsRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined
    };
  },

  toAmino(message: AccountLockedCoinsRequest): AccountLockedCoinsRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  }

};

function createBaseAccountLockedCoinsResponse(): AccountLockedCoinsResponse {
  return {
    coins: []
  };
}

export const AccountLockedCoinsResponse = {
  encode(message: AccountLockedCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedCoinsResponse): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedCoinsResponse>): AccountLockedCoinsResponse {
    const message = createBaseAccountLockedCoinsResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedCoinsResponseSDKType): AccountLockedCoinsResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedCoinsResponse): AccountLockedCoinsResponseSDKType {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseAccountLockedPastTimeRequest(): AccountLockedPastTimeRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}

export const AccountLockedPastTimeRequest = {
  encode(message: AccountLockedPastTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AccountLockedPastTimeRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedPastTimeRequest>): AccountLockedPastTimeRequest {
    const message = createBaseAccountLockedPastTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedPastTimeRequestSDKType): AccountLockedPastTimeRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AccountLockedPastTimeRequest): AccountLockedPastTimeRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined);
    return obj;
  }

};

function createBaseAccountLockedPastTimeResponse(): AccountLockedPastTimeResponse {
  return {
    locks: []
  };
}

export const AccountLockedPastTimeResponse = {
  encode(message: AccountLockedPastTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedPastTimeResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedPastTimeResponse>): AccountLockedPastTimeResponse {
    const message = createBaseAccountLockedPastTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedPastTimeResponseSDKType): AccountLockedPastTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedPastTimeResponse): AccountLockedPastTimeResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest(): AccountLockedPastTimeNotUnlockingOnlyRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}

export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
  encode(message: AccountLockedPastTimeNotUnlockingOnlyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>): AccountLockedPastTimeNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): AccountLockedPastTimeNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AccountLockedPastTimeNotUnlockingOnlyRequest): AccountLockedPastTimeNotUnlockingOnlyRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined);
    return obj;
  }

};

function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse(): AccountLockedPastTimeNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}

export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
  encode(message: AccountLockedPastTimeNotUnlockingOnlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedPastTimeNotUnlockingOnlyResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyResponse>): AccountLockedPastTimeNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): AccountLockedPastTimeNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedPastTimeNotUnlockingOnlyResponse): AccountLockedPastTimeNotUnlockingOnlyResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountUnlockedBeforeTimeRequest(): AccountUnlockedBeforeTimeRequest {
  return {
    owner: "",
    timestamp: undefined
  };
}

export const AccountUnlockedBeforeTimeRequest = {
  encode(message: AccountUnlockedBeforeTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockedBeforeTimeRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: AccountUnlockedBeforeTimeRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnlockedBeforeTimeRequest>): AccountUnlockedBeforeTimeRequest {
    const message = createBaseAccountUnlockedBeforeTimeRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromAmino(object: AccountUnlockedBeforeTimeRequestSDKType): AccountUnlockedBeforeTimeRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },

  toAmino(message: AccountUnlockedBeforeTimeRequest): AccountUnlockedBeforeTimeRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined);
    return obj;
  }

};

function createBaseAccountUnlockedBeforeTimeResponse(): AccountUnlockedBeforeTimeResponse {
  return {
    locks: []
  };
}

export const AccountUnlockedBeforeTimeResponse = {
  encode(message: AccountUnlockedBeforeTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountUnlockedBeforeTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountUnlockedBeforeTimeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountUnlockedBeforeTimeResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountUnlockedBeforeTimeResponse>): AccountUnlockedBeforeTimeResponse {
    const message = createBaseAccountUnlockedBeforeTimeResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountUnlockedBeforeTimeResponseSDKType): AccountUnlockedBeforeTimeResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountUnlockedBeforeTimeResponse): AccountUnlockedBeforeTimeResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedPastTimeDenomRequest(): AccountLockedPastTimeDenomRequest {
  return {
    owner: "",
    timestamp: undefined,
    denom: ""
  };
}

export const AccountLockedPastTimeDenomRequest = {
  encode(message: AccountLockedPastTimeDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AccountLockedPastTimeDenomRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedPastTimeDenomRequest>): AccountLockedPastTimeDenomRequest {
    const message = createBaseAccountLockedPastTimeDenomRequest();
    message.owner = object.owner ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: AccountLockedPastTimeDenomRequestSDKType): AccountLockedPastTimeDenomRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      timestamp: isSet(object.timestamp) ? Timestamp.fromAmino(object.timestamp) : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: AccountLockedPastTimeDenomRequest): AccountLockedPastTimeDenomRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseAccountLockedPastTimeDenomResponse(): AccountLockedPastTimeDenomResponse {
  return {
    locks: []
  };
}

export const AccountLockedPastTimeDenomResponse = {
  encode(message: AccountLockedPastTimeDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedPastTimeDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedPastTimeDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedPastTimeDenomResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedPastTimeDenomResponse>): AccountLockedPastTimeDenomResponse {
    const message = createBaseAccountLockedPastTimeDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedPastTimeDenomResponseSDKType): AccountLockedPastTimeDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedPastTimeDenomResponse): AccountLockedPastTimeDenomResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseLockedDenomRequest(): LockedDenomRequest {
  return {
    denom: "",
    duration: undefined
  };
}

export const LockedDenomRequest = {
  encode(message: LockedDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: LockedDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedDenomRequest>): LockedDenomRequest {
    const message = createBaseLockedDenomRequest();
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: LockedDenomRequestSDKType): LockedDenomRequest {
    return {
      denom: isSet(object.denom) ? object.denom : undefined,
      duration: isSet(object.duration) ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: LockedDenomRequest): LockedDenomRequestSDKType {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined);
    return obj;
  }

};

function createBaseLockedDenomResponse(): LockedDenomResponse {
  return {
    amount: ""
  };
}

export const LockedDenomResponse = {
  encode(message: LockedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedDenomResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: LockedDenomResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedDenomResponse>): LockedDenomResponse {
    const message = createBaseLockedDenomResponse();
    message.amount = object.amount ?? "";
    return message;
  },

  fromAmino(object: LockedDenomResponseSDKType): LockedDenomResponse {
    return {
      amount: isSet(object.amount) ? object.amount : undefined
    };
  },

  toAmino(message: LockedDenomResponse): LockedDenomResponseSDKType {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  }

};

function createBaseLockedRequest(): LockedRequest {
  return {
    lockId: Long.UZERO
  };
}

export const LockedRequest = {
  encode(message: LockedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: LockedRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<LockedRequest>): LockedRequest {
    const message = createBaseLockedRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromAmino(object: LockedRequestSDKType): LockedRequest {
    return {
      lockId: isSet(object.lock_id) ? object.lock_id : undefined
    };
  },

  toAmino(message: LockedRequest): LockedRequestSDKType {
    const obj: any = {};
    message.lockId !== undefined && (obj.lock_id = message.lockId);
    return obj;
  }

};

function createBaseLockedResponse(): LockedResponse {
  return {
    lock: undefined
  };
}

export const LockedResponse = {
  encode(message: LockedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lock = PeriodLock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LockedResponse {
    return {
      lock: isSet(object.lock) ? PeriodLock.fromJSON(object.lock) : undefined
    };
  },

  toJSON(message: LockedResponse): unknown {
    const obj: any = {};
    message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toJSON(message.lock) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LockedResponse>): LockedResponse {
    const message = createBaseLockedResponse();
    message.lock = object.lock !== undefined && object.lock !== null ? PeriodLock.fromPartial(object.lock) : undefined;
    return message;
  },

  fromAmino(object: LockedResponseSDKType): LockedResponse {
    return {
      lock: isSet(object.lock) ? PeriodLock.fromAmino(object.lock) : undefined
    };
  },

  toAmino(message: LockedResponse): LockedResponseSDKType {
    const obj: any = {};
    message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toAmino(message.lock) : undefined);
    return obj;
  }

};

function createBaseSyntheticLockupsByLockupIDRequest(): SyntheticLockupsByLockupIDRequest {
  return {
    lockId: Long.UZERO
  };
}

export const SyntheticLockupsByLockupIDRequest = {
  encode(message: SyntheticLockupsByLockupIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: SyntheticLockupsByLockupIDRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SyntheticLockupsByLockupIDRequest>): SyntheticLockupsByLockupIDRequest {
    const message = createBaseSyntheticLockupsByLockupIDRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromAmino(object: SyntheticLockupsByLockupIDRequestSDKType): SyntheticLockupsByLockupIDRequest {
    return {
      lockId: isSet(object.lock_id) ? object.lock_id : undefined
    };
  },

  toAmino(message: SyntheticLockupsByLockupIDRequest): SyntheticLockupsByLockupIDRequestSDKType {
    const obj: any = {};
    message.lockId !== undefined && (obj.lock_id = message.lockId);
    return obj;
  }

};

function createBaseSyntheticLockupsByLockupIDResponse(): SyntheticLockupsByLockupIDResponse {
  return {
    syntheticLocks: []
  };
}

export const SyntheticLockupsByLockupIDResponse = {
  encode(message: SyntheticLockupsByLockupIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLockupsByLockupIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLockupsByLockupIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },

  toJSON(message: SyntheticLockupsByLockupIDResponse): unknown {
    const obj: any = {};

    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SyntheticLockupsByLockupIDResponse>): SyntheticLockupsByLockupIDResponse {
    const message = createBaseSyntheticLockupsByLockupIDResponse();
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: SyntheticLockupsByLockupIDResponseSDKType): SyntheticLockupsByLockupIDResponse {
    return {
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromAmino(e)) : []
    };
  },

  toAmino(message: SyntheticLockupsByLockupIDResponse): SyntheticLockupsByLockupIDResponseSDKType {
    const obj: any = {};

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedLongerDurationRequest(): AccountLockedLongerDurationRequest {
  return {
    owner: "",
    duration: undefined
  };
}

export const AccountLockedLongerDurationRequest = {
  encode(message: AccountLockedLongerDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: AccountLockedLongerDurationRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedLongerDurationRequest>): AccountLockedLongerDurationRequest {
    const message = createBaseAccountLockedLongerDurationRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationRequestSDKType): AccountLockedLongerDurationRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      duration: isSet(object.duration) ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: AccountLockedLongerDurationRequest): AccountLockedLongerDurationRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined);
    return obj;
  }

};

function createBaseAccountLockedLongerDurationResponse(): AccountLockedLongerDurationResponse {
  return {
    locks: []
  };
}

export const AccountLockedLongerDurationResponse = {
  encode(message: AccountLockedLongerDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedLongerDurationResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedLongerDurationResponse>): AccountLockedLongerDurationResponse {
    const message = createBaseAccountLockedLongerDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationResponseSDKType): AccountLockedLongerDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedLongerDurationResponse): AccountLockedLongerDurationResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedDurationRequest(): AccountLockedDurationRequest {
  return {
    owner: "",
    duration: undefined
  };
}

export const AccountLockedDurationRequest = {
  encode(message: AccountLockedDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedDurationRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: AccountLockedDurationRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedDurationRequest>): AccountLockedDurationRequest {
    const message = createBaseAccountLockedDurationRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedDurationRequestSDKType): AccountLockedDurationRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      duration: isSet(object.duration) ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: AccountLockedDurationRequest): AccountLockedDurationRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined);
    return obj;
  }

};

function createBaseAccountLockedDurationResponse(): AccountLockedDurationResponse {
  return {
    locks: []
  };
}

export const AccountLockedDurationResponse = {
  encode(message: AccountLockedDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedDurationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedDurationResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedDurationResponse>): AccountLockedDurationResponse {
    const message = createBaseAccountLockedDurationResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedDurationResponseSDKType): AccountLockedDurationResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedDurationResponse): AccountLockedDurationResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest(): AccountLockedLongerDurationNotUnlockingOnlyRequest {
  return {
    owner: "",
    duration: undefined
  };
}

export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): AccountLockedLongerDurationNotUnlockingOnlyRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      duration: isSet(object.duration) ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyRequest): AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined);
    return obj;
  }

};

function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse(): AccountLockedLongerDurationNotUnlockingOnlyResponse {
  return {
    locks: []
  };
}

export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
  encode(message: AccountLockedLongerDurationNotUnlockingOnlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyResponse>): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): AccountLockedLongerDurationNotUnlockingOnlyResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedLongerDurationNotUnlockingOnlyResponse): AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

function createBaseAccountLockedLongerDurationDenomRequest(): AccountLockedLongerDurationDenomRequest {
  return {
    owner: "",
    duration: undefined,
    denom: ""
  };
}

export const AccountLockedLongerDurationDenomRequest = {
  encode(message: AccountLockedLongerDurationDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationDenomRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AccountLockedLongerDurationDenomRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedLongerDurationDenomRequest>): AccountLockedLongerDurationDenomRequest {
    const message = createBaseAccountLockedLongerDurationDenomRequest();
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationDenomRequestSDKType): AccountLockedLongerDurationDenomRequest {
    return {
      owner: isSet(object.owner) ? object.owner : undefined,
      duration: isSet(object.duration) ? Duration.fromAmino(object.duration) : undefined,
      denom: isSet(object.denom) ? object.denom : undefined
    };
  },

  toAmino(message: AccountLockedLongerDurationDenomRequest): AccountLockedLongerDurationDenomRequestSDKType {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  }

};

function createBaseAccountLockedLongerDurationDenomResponse(): AccountLockedLongerDurationDenomResponse {
  return {
    locks: []
  };
}

export const AccountLockedLongerDurationDenomResponse = {
  encode(message: AccountLockedLongerDurationDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountLockedLongerDurationDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountLockedLongerDurationDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : []
    };
  },

  toJSON(message: AccountLockedLongerDurationDenomResponse): unknown {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AccountLockedLongerDurationDenomResponse>): AccountLockedLongerDurationDenomResponse {
    const message = createBaseAccountLockedLongerDurationDenomResponse();
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: AccountLockedLongerDurationDenomResponseSDKType): AccountLockedLongerDurationDenomResponse {
    return {
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },

  toAmino(message: AccountLockedLongerDurationDenomResponse): AccountLockedLongerDurationDenomResponseSDKType {
    const obj: any = {};

    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }

    return obj;
  }

};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  ModuleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;

  /** Return locked balance of the module */
  ModuleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;

  /** Returns unlockable coins which are not withdrawn yet */
  AccountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;

  /** Returns unlocking coins */
  AccountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;

  /** Return a locked coins that can't be withdrawn */
  AccountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;

  /** Returns locked records of an account with unlock time beyond timestamp */
  AccountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;

  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;

  /** Returns unlocked records with unlock time before timestamp */
  AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;

  /** Returns lock records by address, timestamp, denom */
  AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;

  /** Returns total locked per denom with longer past given time */
  LockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;

  /** Returns lock record by id */
  LockedByID(request: LockedRequest): Promise<LockedResponse>;

  /** Returns synthetic lockups by native lockup id */
  SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;

  /** Returns account locked records with longer duration */
  AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;

  /** Returns account locked records with a specific duration */
  AccountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;

  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;

  /** Returns account's locked records for a denom with longer duration */
  AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ModuleBalance = this.ModuleBalance.bind(this);
    this.ModuleLockedAmount = this.ModuleLockedAmount.bind(this);
    this.AccountUnlockableCoins = this.AccountUnlockableCoins.bind(this);
    this.AccountUnlockingCoins = this.AccountUnlockingCoins.bind(this);
    this.AccountLockedCoins = this.AccountLockedCoins.bind(this);
    this.AccountLockedPastTime = this.AccountLockedPastTime.bind(this);
    this.AccountLockedPastTimeNotUnlockingOnly = this.AccountLockedPastTimeNotUnlockingOnly.bind(this);
    this.AccountUnlockedBeforeTime = this.AccountUnlockedBeforeTime.bind(this);
    this.AccountLockedPastTimeDenom = this.AccountLockedPastTimeDenom.bind(this);
    this.LockedDenom = this.LockedDenom.bind(this);
    this.LockedByID = this.LockedByID.bind(this);
    this.SyntheticLockupsByLockupID = this.SyntheticLockupsByLockupID.bind(this);
    this.AccountLockedLongerDuration = this.AccountLockedLongerDuration.bind(this);
    this.AccountLockedDuration = this.AccountLockedDuration.bind(this);
    this.AccountLockedLongerDurationNotUnlockingOnly = this.AccountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.AccountLockedLongerDurationDenom = this.AccountLockedLongerDurationDenom.bind(this);
  }

  ModuleBalance(request: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponse> {
    const data = ModuleBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
    return promise.then(data => ModuleBalanceResponse.decode(new _m0.Reader(data)));
  }

  ModuleLockedAmount(request: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponse> {
    const data = ModuleLockedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
    return promise.then(data => ModuleLockedAmountResponse.decode(new _m0.Reader(data)));
  }

  AccountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
    const data = AccountUnlockableCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
    return promise.then(data => AccountUnlockableCoinsResponse.decode(new _m0.Reader(data)));
  }

  AccountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
    const data = AccountUnlockingCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
    return promise.then(data => AccountUnlockingCoinsResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
    const data = AccountLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
    return promise.then(data => AccountLockedCoinsResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
    const data = AccountLockedPastTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
    return promise.then(data => AccountLockedPastTimeResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const data = AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
    return promise.then(data => AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new _m0.Reader(data)));
  }

  AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
    const data = AccountUnlockedBeforeTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
    return promise.then(data => AccountUnlockedBeforeTimeResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
    const data = AccountLockedPastTimeDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
    return promise.then(data => AccountLockedPastTimeDenomResponse.decode(new _m0.Reader(data)));
  }

  LockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
    const data = LockedDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
    return promise.then(data => LockedDenomResponse.decode(new _m0.Reader(data)));
  }

  LockedByID(request: LockedRequest): Promise<LockedResponse> {
    const data = LockedRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
    return promise.then(data => LockedResponse.decode(new _m0.Reader(data)));
  }

  SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
    const data = SyntheticLockupsByLockupIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
    return promise.then(data => SyntheticLockupsByLockupIDResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
    const data = AccountLockedLongerDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
    return promise.then(data => AccountLockedLongerDurationResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
    const data = AccountLockedDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
    return promise.then(data => AccountLockedDurationResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const data = AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
    return promise.then(data => AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new _m0.Reader(data)));
  }

  AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
    const data = AccountLockedLongerDurationDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
    return promise.then(data => AccountLockedLongerDurationDenomResponse.decode(new _m0.Reader(data)));
  }

}