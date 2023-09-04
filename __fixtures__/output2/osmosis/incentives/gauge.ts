//@ts-nocheck
/* eslint-disable */
import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.incentives";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface Gauge {
  /** id is the unique ID of a Gauge */
  id: Long;
  /**
   * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled, Intended for use with incentives that get refilled daily.
   */
  isPerpetual: boolean;
  /**
   * distribute_to is where the gauge rewards are distributed to.
   * This is queried via lock duration or by timestamp
   */
  distributeTo: QueryCondition;
  /**
   * coins is the total amount of coins that have been in the gauge
   * Can distribute multiple coin denoms
   */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Timestamp;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  numEpochsPaidOver: Long;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filledEpochs: Long;
  /** distributed_coins are coins that have been distributed already */
  distributedCoins: Coin[];
}
export interface LockableDurationsInfo {
  /** List of incentivised durations that gauges will pay out to */
  lockableDurations: Duration[];
}
function createBaseGauge(): Gauge {
  return {
    id: Long.UZERO,
    isPerpetual: false,
    distributeTo: QueryCondition.fromPartial({}),
    coins: [],
    startTime: Timestamp.fromPartial({}),
    numEpochsPaidOver: Long.UZERO,
    filledEpochs: Long.UZERO,
    distributedCoins: []
  };
}
export const Gauge = {
  encode(message: Gauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.isPerpetual === true) {
      writer.uint32(16).bool(message.isPerpetual);
    }
    if (message.distributeTo !== undefined) {
      QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
    }
    if (!message.numEpochsPaidOver.isZero()) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }
    if (!message.filledEpochs.isZero()) {
      writer.uint32(56).uint64(message.filledEpochs);
    }
    for (const v of message.distributedCoins) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Gauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.isPerpetual = reader.bool();
          break;
        case 3:
          message.distributeTo = QueryCondition.decode(reader, reader.uint32());
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.numEpochsPaidOver = (reader.uint64() as Long);
          break;
        case 7:
          message.filledEpochs = (reader.uint64() as Long);
          break;
        case 8:
          message.distributedCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Gauge {
    const obj = createBaseGauge();
    if (isSet(object.id)) obj.id = Long.fromValue(object.id);
    if (isSet(object.isPerpetual)) obj.isPerpetual = Boolean(object.isPerpetual);
    if (isSet(object.distributeTo)) obj.distributeTo = QueryCondition.fromJSON(object.distributeTo);
    if (Array.isArray(object?.coins)) object.coins.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.startTime)) obj.startTime = fromJsonTimestamp(object.startTime);
    if (isSet(object.numEpochsPaidOver)) obj.numEpochsPaidOver = Long.fromValue(object.numEpochsPaidOver);
    if (isSet(object.filledEpochs)) obj.filledEpochs = Long.fromValue(object.filledEpochs);
    if (Array.isArray(object?.distributedCoins)) object.distributedCoins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Gauge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
    message.distributeTo !== undefined && (obj.distributeTo = message.distributeTo ? QueryCondition.toJSON(message.distributeTo) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || Long.UZERO).toString());
    message.filledEpochs !== undefined && (obj.filledEpochs = (message.filledEpochs || Long.UZERO).toString());
    if (message.distributedCoins) {
      obj.distributedCoins = message.distributedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.distributedCoins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Gauge>): Gauge {
    const message = createBaseGauge();
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromValue(object.id);
    }
    message.isPerpetual = object.isPerpetual ?? false;
    if (object.distributeTo !== undefined && object.distributeTo !== null) {
      message.distributeTo = QueryCondition.fromPartial(object.distributeTo);
    }
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Timestamp.fromPartial(object.startTime);
    }
    if (object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null) {
      message.numEpochsPaidOver = Long.fromValue(object.numEpochsPaidOver);
    }
    if (object.filledEpochs !== undefined && object.filledEpochs !== null) {
      message.filledEpochs = Long.fromValue(object.filledEpochs);
    }
    message.distributedCoins = object.distributedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockableDurations: []
  };
}
export const LockableDurationsInfo = {
  encode(message: LockableDurationsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockableDurationsInfo {
    const obj = createBaseLockableDurationsInfo();
    if (Array.isArray(object?.lockableDurations)) object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    return obj;
  },
  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }
};