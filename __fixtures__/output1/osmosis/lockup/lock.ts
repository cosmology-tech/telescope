import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { toDuration, toTimestamp, Long, fromDuration, fromTimestamp, isSet, fromJsonTimestamp, Exact, DeepPartial } from "@osmonauts/helpers";
export interface PeriodLock {
  ID: Long;
  owner: string;
  duration: string;
  endTime: Date;
  coins: Coin[];
}

function createBasePeriodLock(): PeriodLock {
  return {
    ID: Long.UZERO,
    owner: "",
    duration: undefined,
    endTime: undefined,
    coins: []
  };
}

export const PeriodLock = {
  encode(message: PeriodLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.duration !== undefined) Duration.encode(toDuration(message.duration), writer.uint32(26).fork()).ldelim();
    if (message.endTime !== undefined) Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodLock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.duration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 4:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PeriodLock {
    return {
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? String(object.duration) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: PeriodLock): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration);
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeriodLock>, I>>(object: I): PeriodLock {
    const message = createBasePeriodLock();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.duration = object.duration ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export enum LockQueryType {
  /** ByDuration - Queries for locks that are longer than a certain duration */
  ByDuration = 0,

  /** ByTime - Queries for lockups that started before a specific time */
  ByTime = 1,
  UNRECOGNIZED = -1,
}
export function lockQueryTypeFromJSON(object: any): LockQueryType {
  switch (object) {
    case 0:
    case "ByDuration":
      return LockQueryType.ByDuration;

    case 1:
    case "ByTime":
      return LockQueryType.ByTime;

    case -1:
    case "UNRECOGNIZED":
    default:
      return LockQueryType.UNRECOGNIZED;
  }
}
export function lockQueryTypeToJSON(object: LockQueryType): string {
  switch (object) {
    case LockQueryType.ByDuration:
      return "ByDuration";

    case LockQueryType.ByTime:
      return "ByTime";

    default:
      return "UNKNOWN";
  }
}
export interface QueryCondition {
  lockQueryType: LockQueryType;
  denom: string;
  duration: string;
  timestamp: Date;
}

function createBaseQueryCondition(): QueryCondition {
  return {
    lockQueryType: undefined,
    denom: "",
    duration: undefined,
    timestamp: undefined
  };
}

export const QueryCondition = {
  encode(message: QueryCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockQueryType !== 0) {
      writer.uint32(8).int32(message.lockQueryType);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.duration !== undefined) Duration.encode(toDuration(message.duration), writer.uint32(26).fork()).ldelim();
    if (message.timestamp !== undefined) Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCondition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockQueryType = (reader.int32() as any);
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.duration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 4:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCondition {
    return {
      lockQueryType: isSet(object.lockQueryType) ? lockQueryTypeFromJSON(object.lockQueryType) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? String(object.duration) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },

  toJSON(message: QueryCondition): unknown {
    const obj: any = {};
    message.lockQueryType !== undefined && (obj.lockQueryType = lockQueryTypeToJSON(message.lockQueryType));
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCondition>, I>>(object: I): QueryCondition {
    const message = createBaseQueryCondition();
    message.lockQueryType = object.lockQueryType ?? undefined;
    message.denom = object.denom ?? "";
    message.duration = object.duration ?? undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  }

};
export interface SyntheticLock {
  underlyingLockId: Long;
  synthDenom: string;
  endTime: Date;
  duration: string;
}

function createBaseSyntheticLock(): SyntheticLock {
  return {
    underlyingLockId: Long.UZERO,
    synthDenom: "",
    endTime: undefined,
    duration: undefined
  };
}

export const SyntheticLock = {
  encode(message: SyntheticLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.underlyingLockId.isZero()) {
      writer.uint32(8).uint64(message.underlyingLockId);
    }

    if (message.synthDenom !== "") {
      writer.uint32(18).string(message.synthDenom);
    }

    if (message.endTime !== undefined) Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    if (message.duration !== undefined) Duration.encode(toDuration(message.duration), writer.uint32(34).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticLock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.underlyingLockId = (reader.uint64() as Long);
          break;

        case 2:
          message.synthDenom = reader.string();
          break;

        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.duration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticLock {
    return {
      underlyingLockId: isSet(object.underlyingLockId) ? Long.fromString(object.underlyingLockId) : Long.UZERO,
      synthDenom: isSet(object.synthDenom) ? String(object.synthDenom) : "",
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      duration: isSet(object.duration) ? String(object.duration) : undefined
    };
  },

  toJSON(message: SyntheticLock): unknown {
    const obj: any = {};
    message.underlyingLockId !== undefined && (obj.underlyingLockId = (message.underlyingLockId || Long.UZERO).toString());
    message.synthDenom !== undefined && (obj.synthDenom = message.synthDenom);
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SyntheticLock>, I>>(object: I): SyntheticLock {
    const message = createBaseSyntheticLock();
    message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? Long.fromValue(object.underlyingLockId) : Long.UZERO;
    message.synthDenom = object.synthDenom ?? "";
    message.endTime = object.endTime ?? undefined;
    message.duration = object.duration ?? undefined;
    return message;
  }

};