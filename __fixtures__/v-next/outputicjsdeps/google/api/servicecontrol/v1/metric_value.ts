import { Timestamp } from "../../../protobuf/timestamp";
import { Distribution, DistributionAmino } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../../helpers";
export interface MetricValue_LabelsEntry {
  key: string;
  value: string;
}
export interface MetricValue_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface MetricValue_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface MetricValue_LabelsEntryAminoMsg {
  type: string;
  value: MetricValue_LabelsEntryAmino;
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
  startTime?: Date;
  /**
   * The end of the time period over which this metric value's measurement
   * applies.  If not specified,
   * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
   */
  endTime?: Date;
  /** A boolean value. */
  boolValue?: boolean;
  /** A signed 64-bit integer value. */
  int64Value?: bigint;
  /** A double precision floating point value. */
  doubleValue?: number;
  /** A text string value. */
  stringValue?: string;
  /** A distribution value. */
  distributionValue?: Distribution;
}
export interface MetricValueProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.MetricValue";
  value: Uint8Array;
}
/** Represents a single metric value. */
export interface MetricValueAmino {
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
  start_time?: string;
  /**
   * The end of the time period over which this metric value's measurement
   * applies.  If not specified,
   * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
   */
  end_time?: string;
  /** A boolean value. */
  bool_value?: boolean;
  /** A signed 64-bit integer value. */
  int64_value?: string;
  /** A double precision floating point value. */
  double_value?: number;
  /** A text string value. */
  string_value?: string;
  /** A distribution value. */
  distribution_value?: DistributionAmino;
}
export interface MetricValueAminoMsg {
  type: "/google.api.servicecontrol.v1.MetricValue";
  value: MetricValueAmino;
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
export interface MetricValueSetProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.MetricValueSet";
  value: Uint8Array;
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSetAmino {
  /** The metric name defined in the service configuration. */
  metric_name: string;
  /** The values in this metric. */
  metric_values: MetricValueAmino[];
}
export interface MetricValueSetAminoMsg {
  type: "/google.api.servicecontrol.v1.MetricValueSet";
  value: MetricValueSetAmino;
}
function createBaseMetricValue_LabelsEntry(): MetricValue_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const MetricValue_LabelsEntry = {
  encode(message: MetricValue_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetricValue_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<MetricValue_LabelsEntry>): MetricValue_LabelsEntry {
    const message = createBaseMetricValue_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MetricValue_LabelsEntryAmino): MetricValue_LabelsEntry {
    const message = createBaseMetricValue_LabelsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MetricValue_LabelsEntry): MetricValue_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MetricValue_LabelsEntryAminoMsg): MetricValue_LabelsEntry {
    return MetricValue_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValue_LabelsEntryProtoMsg): MetricValue_LabelsEntry {
    return MetricValue_LabelsEntry.decode(message.value);
  },
  toProto(message: MetricValue_LabelsEntry): Uint8Array {
    return MetricValue_LabelsEntry.encode(message).finish();
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
  typeUrl: "/google.api.servicecontrol.v1.MetricValue",
  encode(message: MetricValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MetricValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.int64Value = reader.int64();
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
  fromPartial(object: DeepPartial<MetricValue>): MetricValue {
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
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? BigInt(object.int64Value.toString()) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.distributionValue = object.distributionValue !== undefined && object.distributionValue !== null ? Distribution.fromPartial(object.distributionValue) : undefined;
    return message;
  },
  fromAmino(object: MetricValueAmino): MetricValue {
    const message = createBaseMetricValue();
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    if (object.bool_value !== undefined && object.bool_value !== null) {
      message.boolValue = object.bool_value;
    }
    if (object.int64_value !== undefined && object.int64_value !== null) {
      message.int64Value = BigInt(object.int64_value);
    }
    if (object.double_value !== undefined && object.double_value !== null) {
      message.doubleValue = object.double_value;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.stringValue = object.string_value;
    }
    if (object.distribution_value !== undefined && object.distribution_value !== null) {
      message.distributionValue = Distribution.fromAmino(object.distribution_value);
    }
    return message;
  },
  toAmino(message: MetricValue): MetricValueAmino {
    const obj: any = {};
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.bool_value = message.boolValue === null ? undefined : message.boolValue;
    obj.int64_value = message.int64Value !== BigInt(0) ? message.int64Value?.toString() : undefined;
    obj.double_value = message.doubleValue === null ? undefined : message.doubleValue;
    obj.string_value = message.stringValue === null ? undefined : message.stringValue;
    obj.distribution_value = message.distributionValue ? Distribution.toAmino(message.distributionValue) : undefined;
    return obj;
  },
  fromAminoMsg(object: MetricValueAminoMsg): MetricValue {
    return MetricValue.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValueProtoMsg): MetricValue {
    return MetricValue.decode(message.value);
  },
  toProto(message: MetricValue): Uint8Array {
    return MetricValue.encode(message).finish();
  },
  toProtoMsg(message: MetricValue): MetricValueProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.MetricValue",
      value: MetricValue.encode(message).finish()
    };
  }
};
function createBaseMetricValueSet(): MetricValueSet {
  return {
    metricName: "",
    metricValues: []
  };
}
export const MetricValueSet = {
  typeUrl: "/google.api.servicecontrol.v1.MetricValueSet",
  encode(message: MetricValueSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }
    for (const v of message.metricValues) {
      MetricValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetricValueSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<MetricValueSet>): MetricValueSet {
    const message = createBaseMetricValueSet();
    message.metricName = object.metricName ?? "";
    message.metricValues = object.metricValues?.map(e => MetricValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MetricValueSetAmino): MetricValueSet {
    const message = createBaseMetricValueSet();
    if (object.metric_name !== undefined && object.metric_name !== null) {
      message.metricName = object.metric_name;
    }
    message.metricValues = object.metric_values?.map(e => MetricValue.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MetricValueSet): MetricValueSetAmino {
    const obj: any = {};
    obj.metric_name = message.metricName === "" ? undefined : message.metricName;
    if (message.metricValues) {
      obj.metric_values = message.metricValues.map(e => e ? MetricValue.toAmino(e) : undefined);
    } else {
      obj.metric_values = message.metricValues;
    }
    return obj;
  },
  fromAminoMsg(object: MetricValueSetAminoMsg): MetricValueSet {
    return MetricValueSet.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValueSetProtoMsg): MetricValueSet {
    return MetricValueSet.decode(message.value);
  },
  toProto(message: MetricValueSet): Uint8Array {
    return MetricValueSet.encode(message).finish();
  },
  toProtoMsg(message: MetricValueSet): MetricValueSetProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.MetricValueSet",
      value: MetricValueSet.encode(message).finish()
    };
  }
};