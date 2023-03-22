import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.lockup";

/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export enum LockQueryType {
  ByDuration = 0,
  ByTime = 1,
  UNRECOGNIZED = -1,
}
export const LockQueryTypeSDKType = LockQueryType;
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

    case LockQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLock {
  /**
   * ID is the unique id of the lock.
   * The ID of the lock is decided upon lock creation, incrementing by 1 for
   * every lock.
   */
  ID: Long;

  /**
   * Owner is the account address of the lock owner.
   * Only the owner can modify the state of the lock.
   */
  owner: string;

  /**
   * Duration is the time needed for a lock to mature after unlocking has
   * started.
   */
  duration?: Duration;

  /**
   * EndTime refers to the time at which the lock would mature and get deleted.
   * This value is first initialized when an unlock has started for the lock,
   * end time being block time + duration.
   */
  endTime?: Date;

  /** Coins are the tokens locked within the lock, kept in the module account. */
  coins: Coin[];
}

/**
 * PeriodLock is a single lock unit by period defined by the x/lockup module.
 * It's a record of a locked coin at a specific time. It stores owner, duration,
 * unlock time and the number of coins locked. A state of a period lock is
 * created upon lock creation, and deleted once the lock has been matured after
 * the `duration` has passed since unbonding started.
 */
export interface PeriodLockSDKType {
  ID: Long;
  owner: string;
  duration?: DurationSDKType;
  end_time?: Date;
  coins: CoinSDKType[];
}

/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryCondition {
  /** LockQueryType is a type of lock query, ByLockDuration | ByLockTime */
  lockQueryType: LockQueryType;

  /** Denom represents the token denomination we are looking to lock up */
  denom: string;

  /**
   * Duration is used to query locks with longer duration than the specified
   * duration. Duration field must not be nil when the lock query type is
   * `ByLockDuration`.
   */
  duration?: Duration;

  /**
   * Timestamp is used by locks started before the specified duration.
   * Timestamp field must not be nil when the lock query type is `ByLockTime`.
   * Querying locks with timestamp is currently not implemented.
   */
  timestamp?: Date;
}

/**
 * QueryCondition is a struct used for querying locks upon different conditions.
 * Duration field and timestamp fields could be optional, depending on the
 * LockQueryType.
 */
export interface QueryConditionSDKType {
  lock_query_type: LockQueryType;
  denom: string;
  duration?: DurationSDKType;
  timestamp?: Date;
}

/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLock {
  /**
   * Underlying Lock ID is the underlying native lock's id for this synthetic
   * lockup. A synthetic lock MUST have an underlying lock.
   */
  underlyingLockId: Long;

  /**
   * SynthDenom is the synthetic denom that is a combination of
   * gamm share + bonding status + validator address.
   */
  synthDenom: string;

  /**
   * used for unbonding synthetic lockups, for active synthetic lockups, this
   * value is set to uninitialized value
   */
  endTime?: Date;

  /**
   * Duration is the duration for a synthetic lock to mature
   * at the point of unbonding has started.
   */
  duration?: Duration;
}

/**
 * SyntheticLock is creating virtual lockup where new denom is combination of
 * original denom and synthetic suffix. At the time of synthetic lockup creation
 * and deletion, accumulation store is also being updated and on querier side,
 * they can query as freely as native lockup.
 */
export interface SyntheticLockSDKType {
  underlying_lock_id: Long;
  synth_denom: string;
  end_time?: Date;
  duration?: DurationSDKType;
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

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }

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
          message.duration = Duration.decode(reader, reader.uint32());
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
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      endTime: isSet(object.endTime) ? new Date(object.endTime) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: PeriodLock): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PeriodLock>): PeriodLock {
    const message = createBasePeriodLock();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.endTime = object.endTime ?? undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: PeriodLockSDKType): PeriodLock {
    return {
      ID: object?.ID,
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      endTime: object.end_time ?? undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): PeriodLockSDKType {
    return {
      ID: isSet(object.ID) ? Long.fromValue(object.ID) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined,
      end_time: isSet(object.end_time) ? new Date(object.end_time) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: PeriodLock): PeriodLockSDKType {
    const obj: any = {};
    obj.ID = message.ID;
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  }

};

function createBaseQueryCondition(): QueryCondition {
  return {
    lockQueryType: 0,
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

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
    }

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
          message.duration = Duration.decode(reader, reader.uint32());
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
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined
    };
  },

  toJSON(message: QueryCondition): unknown {
    const obj: any = {};
    message.lockQueryType !== undefined && (obj.lockQueryType = lockQueryTypeToJSON(message.lockQueryType));
    message.denom !== undefined && (obj.denom = message.denom);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCondition>): QueryCondition {
    const message = createBaseQueryCondition();
    message.lockQueryType = object.lockQueryType ?? 0;
    message.denom = object.denom ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },

  fromSDK(object: QueryConditionSDKType): QueryCondition {
    return {
      lockQueryType: isSet(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : 0,
      denom: object?.denom,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      timestamp: object.timestamp ?? undefined
    };
  },

  fromSDKJSON(object: any): QueryConditionSDKType {
    return {
      lock_query_type: isSet(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : 0,
      denom: isSet(object.denom) ? String(object.denom) : "",
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined
    };
  },

  toSDK(message: QueryCondition): QueryConditionSDKType {
    const obj: any = {};
    message.lockQueryType !== undefined && (obj.lock_query_type = lockQueryTypeToJSON(message.lockQueryType));
    obj.denom = message.denom;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    return obj;
  }

};

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

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
    }

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
          message.duration = Duration.decode(reader, reader.uint32());
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
      underlyingLockId: isSet(object.underlyingLockId) ? Long.fromValue(object.underlyingLockId) : Long.UZERO,
      synthDenom: isSet(object.synthDenom) ? String(object.synthDenom) : "",
      endTime: isSet(object.endTime) ? new Date(object.endTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: SyntheticLock): unknown {
    const obj: any = {};
    message.underlyingLockId !== undefined && (obj.underlyingLockId = (message.underlyingLockId || Long.UZERO).toString());
    message.synthDenom !== undefined && (obj.synthDenom = message.synthDenom);
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SyntheticLock>): SyntheticLock {
    const message = createBaseSyntheticLock();
    message.underlyingLockId = object.underlyingLockId !== undefined && object.underlyingLockId !== null ? Long.fromValue(object.underlyingLockId) : Long.UZERO;
    message.synthDenom = object.synthDenom ?? "";
    message.endTime = object.endTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromSDK(object: SyntheticLockSDKType): SyntheticLock {
    return {
      underlyingLockId: object?.underlying_lock_id,
      synthDenom: object?.synth_denom,
      endTime: object.end_time ?? undefined,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },

  fromSDKJSON(object: any): SyntheticLockSDKType {
    return {
      underlying_lock_id: isSet(object.underlying_lock_id) ? Long.fromValue(object.underlying_lock_id) : Long.UZERO,
      synth_denom: isSet(object.synth_denom) ? String(object.synth_denom) : "",
      end_time: isSet(object.end_time) ? new Date(object.end_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined
    };
  },

  toSDK(message: SyntheticLock): SyntheticLockSDKType {
    const obj: any = {};
    obj.underlying_lock_id = message.underlyingLockId;
    obj.synth_denom = message.synthDenom;
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  }

};