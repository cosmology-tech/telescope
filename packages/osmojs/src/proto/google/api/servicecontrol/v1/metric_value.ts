import { Timestamp } from "../../../protobuf/timestamp";
import { Distribution } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, Long, isObject, fromJsonTimestamp } from "@osmonauts/helpers";
export interface MetricValue_LabelsEntry {
  key: string;
  value: string;
}

/** Represents a single metric value. */
export interface MetricValue {
  /**
   * The labels describing the metric value.
   * See comments on [google.api.servicecontrol.v1.Operation.labels][google.api.servicecontrol.v1.Operation.labels] for
   * the overriding relationship.
   * Note that this map must not contain monitored resource labels.
   */
  labels: {
    [key: string]: string;
  };

  /**
   * The start of the time period over which this metric value's measurement
   * applies. The time period has different semantics for different metric
   * types (cumulative, delta, and gauge). See the metric definition
   * documentation in the service configuration for details. If not specified,
   * [google.api.servicecontrol.v1.Operation.start_time][google.api.servicecontrol.v1.Operation.start_time] will be used.
   */
  startTime: Date;

  /**
   * The end of the time period over which this metric value's measurement
   * applies.  If not specified,
   * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
   */
  endTime: Date;

  /** A boolean value. */
  boolValue?: boolean;

  /** A signed 64-bit integer value. */
  int64Value?: Long;

  /** A double precision floating point value. */
  doubleValue?: number;

  /** A text string value. */
  stringValue?: string;

  /** A distribution value. */
  distributionValue?: Distribution;
}

/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSet {
  /** The metric name defined in the service configuration. */
  metricName: string;

  /** The values in this metric. */
  metricValues: MetricValue[];
}

function createBaseMetricValue_LabelsEntry(): MetricValue_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const MetricValue_LabelsEntry = {
  encode(message: MetricValue_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValue_LabelsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetricValue_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: MetricValue_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricValue_LabelsEntry>, I>>(object: I): MetricValue_LabelsEntry {
    const message = createBaseMetricValue_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseMetricValue(): MetricValue {
  return {
    labels: {},
    startTime: undefined,
    endTime: undefined,
    boolValue: undefined,
    int64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    distributionValue: undefined
  };
}

export const MetricValue = {
  encode(message: MetricValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.labels).forEach(([key, value]) => {
      MetricValue_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }

    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }

    if (message.int64Value !== undefined) {
      writer.uint32(40).int64(message.int64Value);
    }

    if (message.doubleValue !== undefined) {
      writer.uint32(49).double(message.doubleValue);
    }

    if (message.stringValue !== undefined) {
      writer.uint32(58).string(message.stringValue);
    }

    if (message.distributionValue !== undefined) {
      Distribution.encode(message.distributionValue, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = MetricValue_LabelsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.labels[entry1.key] = entry1.value;
          }

          break;

        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.boolValue = reader.bool();
          break;

        case 5:
          message.int64Value = (reader.int64() as Long);
          break;

        case 6:
          message.doubleValue = reader.double();
          break;

        case 7:
          message.stringValue = reader.string();
          break;

        case 8:
          message.distributionValue = Distribution.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetricValue {
    return {
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      int64Value: isSet(object.int64Value) ? Long.fromString(object.int64Value) : undefined,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      distributionValue: isSet(object.distributionValue) ? Distribution.fromJSON(object.distributionValue) : undefined
    };
  },

  toJSON(message: MetricValue): unknown {
    const obj: any = {};
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.distributionValue !== undefined && (obj.distributionValue = message.distributionValue ? Distribution.toJSON(message.distributionValue) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricValue>, I>>(object: I): MetricValue {
    const message = createBaseMetricValue();
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.distributionValue = object.distributionValue !== undefined && object.distributionValue !== null ? Distribution.fromPartial(object.distributionValue) : undefined;
    return message;
  }

};

function createBaseMetricValueSet(): MetricValueSet {
  return {
    metricName: "",
    metricValues: []
  };
}

export const MetricValueSet = {
  encode(message: MetricValueSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }

    for (const v of message.metricValues) {
      MetricValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricValueSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValueSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;

        case 2:
          message.metricValues.push(MetricValue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetricValueSet {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : "",
      metricValues: Array.isArray(object?.metricValues) ? object.metricValues.map((e: any) => MetricValue.fromJSON(e)) : []
    };
  },

  toJSON(message: MetricValueSet): unknown {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);

    if (message.metricValues) {
      obj.metricValues = message.metricValues.map(e => e ? MetricValue.toJSON(e) : undefined);
    } else {
      obj.metricValues = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricValueSet>, I>>(object: I): MetricValueSet {
    const message = createBaseMetricValueSet();
    message.metricName = object.metricName ?? "";
    message.metricValues = object.metricValues?.map(e => MetricValue.fromPartial(e)) || [];
    return message;
  }

};