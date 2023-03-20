//@ts-nocheck
/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string;
}
export interface LockableDurationsInfo {
  lockableDurations: Duration[];
}
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrRecord {
  gaugeId: Long;
  weight: string;
}
export interface PoolToGauge {
  poolId: Long;
  gaugeId: Long;
  duration?: Duration;
}
export interface PoolToGauges {
  poolToGauge: PoolToGauge[];
}

function createBaseParams(): Params {
  return {
    mintedDenom: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
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
          message.mintedDenom = reader.string();
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
      mintedDenom: isSet(object.mintedDenom) ? String(object.mintedDenom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintedDenom !== undefined && (obj.mintedDenom = message.mintedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintedDenom = object.mintedDenom ?? "";
    return message;
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      minted_denom: isSet(object.minted_denom) ? String(object.minted_denom) : ""
    };
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
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
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
  },

  fromSDKJSON(object: any): LockableDurationsInfoSDKType {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDKJSON(e)) : []
    };
  }

};

function createBaseDistrInfo(): DistrInfo {
  return {
    totalWeight: "",
    records: []
  };
}

export const DistrInfo = {
  encode(message: DistrInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }

    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;

        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistrInfo {
    return {
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: DistrInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);

    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): DistrInfoSDKType {
    return {
      total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDKJSON(e)) : []
    };
  }

};

function createBaseDistrRecord(): DistrRecord {
  return {
    gaugeId: Long.UZERO,
    weight: ""
  };
}

export const DistrRecord = {
  encode(message: DistrRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistrRecord {
    return {
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: DistrRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },

  fromSDKJSON(object: any): DistrRecordSDKType {
    return {
      gauge_id: isSet(object.gauge_id) ? Long.fromValue(object.gauge_id) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  }

};

function createBasePoolToGauge(): PoolToGauge {
  return {
    poolId: Long.UZERO,
    gaugeId: Long.UZERO,
    duration: undefined
  };
}

export const PoolToGauge = {
  encode(message: PoolToGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeId);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolToGauge {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: PoolToGauge): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolToGauge>): PoolToGauge {
    const message = createBasePoolToGauge();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromSDKJSON(object: any): PoolToGaugeSDKType {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromValue(object.pool_id) : Long.UZERO,
      gauge_id: isSet(object.gauge_id) ? Long.fromValue(object.gauge_id) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined
    };
  }

};

function createBasePoolToGauges(): PoolToGauges {
  return {
    poolToGauge: []
  };
}

export const PoolToGauges = {
  encode(message: PoolToGauges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauges();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolToGauges {
    return {
      poolToGauge: Array.isArray(object?.poolToGauge) ? object.poolToGauge.map((e: any) => PoolToGauge.fromJSON(e)) : []
    };
  },

  toJSON(message: PoolToGauges): unknown {
    const obj: any = {};

    if (message.poolToGauge) {
      obj.poolToGauge = message.poolToGauge.map(e => e ? PoolToGauge.toJSON(e) : undefined);
    } else {
      obj.poolToGauge = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PoolToGauges>): PoolToGauges {
    const message = createBasePoolToGauges();
    message.poolToGauge = object.poolToGauge?.map(e => PoolToGauge.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): PoolToGaugesSDKType {
    return {
      pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromSDKJSON(e)) : []
    };
  }

};