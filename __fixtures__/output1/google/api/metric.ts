import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./launch_stage";
import { Duration } from "../protobuf/duration";
import { LabelDescriptor } from "./label";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, toDuration, fromDuration, isObject } from "@osmonauts/helpers";
export interface MetricDescriptor {
  name: string;
  type: string;
  labels: LabelDescriptor[];
  metricKind: MetricDescriptor_MetricKind;
  valueType: MetricDescriptor_ValueType;
  unit: string;
  description: string;
  displayName: string;
  metadata: MetricDescriptor_MetricDescriptorMetadata;
  launchStage: LaunchStage;
  monitoredResourceTypes: string[];
}

function createBaseMetricDescriptor(): MetricDescriptor {
  return {
    name: "",
    type: "",
    labels: [],
    metricKind: undefined,
    valueType: undefined,
    unit: "",
    description: "",
    displayName: "",
    metadata: undefined,
    launchStage: undefined,
    monitoredResourceTypes: []
  };
}

export const MetricDescriptor = {
  encode(message: MetricDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }

    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.metricKind !== 0) {
      writer.uint32(24).int32(message.metricKind);
    }

    if (message.valueType !== 0) {
      writer.uint32(32).int32(message.valueType);
    }

    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }

    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }

    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }

    if (message.metadata !== undefined) {
      MetricDescriptor_MetricDescriptorMetadata.encode(message.metadata, writer.uint32(82).fork()).ldelim();
    }

    if (message.launchStage !== 0) {
      writer.uint32(96).int32(message.launchStage);
    }

    for (const v of message.monitoredResourceTypes) {
      writer.uint32(106).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 8:
          message.type = reader.string();
          break;

        case 2:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.metricKind = (reader.int32() as any);
          break;

        case 4:
          message.valueType = (reader.int32() as any);
          break;

        case 5:
          message.unit = reader.string();
          break;

        case 6:
          message.description = reader.string();
          break;

        case 7:
          message.displayName = reader.string();
          break;

        case 10:
          message.metadata = MetricDescriptor_MetricDescriptorMetadata.decode(reader, reader.uint32());
          break;

        case 12:
          message.launchStage = (reader.int32() as any);
          break;

        case 13:
          message.monitoredResourceTypes.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetricDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : [],
      metricKind: isSet(object.metricKind) ? metricDescriptor_MetricKindFromJSON(object.metricKind) : 0,
      valueType: isSet(object.valueType) ? metricDescriptor_ValueTypeFromJSON(object.valueType) : 0,
      unit: isSet(object.unit) ? String(object.unit) : "",
      description: isSet(object.description) ? String(object.description) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      metadata: isSet(object.metadata) ? MetricDescriptor_MetricDescriptorMetadata.fromJSON(object.metadata) : undefined,
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0,
      monitoredResourceTypes: Array.isArray(object?.monitoredResourceTypes) ? object.monitoredResourceTypes.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MetricDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);

    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }

    message.metricKind !== undefined && (obj.metricKind = metricDescriptor_MetricKindToJSON(message.metricKind));
    message.valueType !== undefined && (obj.valueType = metricDescriptor_ValueTypeToJSON(message.valueType));
    message.unit !== undefined && (obj.unit = message.unit);
    message.description !== undefined && (obj.description = message.description);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.metadata !== undefined && (obj.metadata = message.metadata ? MetricDescriptor_MetricDescriptorMetadata.toJSON(message.metadata) : undefined);
    message.launchStage !== undefined && (obj.launchStage = launchStageToJSON(message.launchStage));

    if (message.monitoredResourceTypes) {
      obj.monitoredResourceTypes = message.monitoredResourceTypes.map(e => e);
    } else {
      obj.monitoredResourceTypes = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricDescriptor>, I>>(object: I): MetricDescriptor {
    const message = createBaseMetricDescriptor();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.labels = object.labels?.map(e => LabelDescriptor.fromPartial(e)) || [];
    message.metricKind = object.metricKind ?? 0;
    message.valueType = object.valueType ?? 0;
    message.unit = object.unit ?? "";
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? MetricDescriptorMetadata.fromPartial(object.metadata) : undefined;
    message.launchStage = object.launchStage ?? 0;
    message.monitoredResourceTypes = object.monitoredResourceTypes?.map(e => e) || [];
    return message;
  }

};
export interface MetricDescriptor_MetricDescriptorMetadata {
  launchStage: LaunchStage;
  samplePeriod: string;
  ingestDelay: string;
}

function createBaseMetricDescriptor_MetricDescriptorMetadata(): MetricDescriptor_MetricDescriptorMetadata {
  return {
    launchStage: undefined,
    samplePeriod: undefined,
    ingestDelay: undefined
  };
}

export const MetricDescriptor_MetricDescriptorMetadata = {
  encode(message: MetricDescriptor_MetricDescriptorMetadata, writer = _m0.Writer.create()): _m0.Writer {
    if (message.launchStage !== 0) {
      writer.uint32(8).int32(message.launchStage);
    }

    if (message.samplePeriod !== undefined) Duration.encode(toDuration(message.samplePeriod), writer.uint32(18).fork()).ldelim();
    if (message.ingestDelay !== undefined) Duration.encode(toDuration(message.ingestDelay), writer.uint32(26).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricDescriptor_MetricDescriptorMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricDescriptor_MetricDescriptorMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.launchStage = (reader.int32() as any);
          break;

        case 2:
          message.samplePeriod = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 3:
          message.ingestDelay = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetricDescriptor_MetricDescriptorMetadata {
    return {
      launchStage: isSet(object.launchStage) ? launchStageFromJSON(object.launchStage) : 0,
      samplePeriod: isSet(object.samplePeriod) ? String(object.samplePeriod) : undefined,
      ingestDelay: isSet(object.ingestDelay) ? String(object.ingestDelay) : undefined
    };
  },

  toJSON(message: MetricDescriptor_MetricDescriptorMetadata): unknown {
    const obj: any = {};
    message.launchStage !== undefined && (obj.launchStage = launchStageToJSON(message.launchStage));
    message.samplePeriod !== undefined && (obj.samplePeriod = message.samplePeriod);
    message.ingestDelay !== undefined && (obj.ingestDelay = message.ingestDelay);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricDescriptor_MetricDescriptorMetadata>, I>>(object: I): MetricDescriptor_MetricDescriptorMetadata {
    const message = createBaseMetricDescriptor_MetricDescriptorMetadata();
    message.launchStage = object.launchStage ?? 0;
    message.samplePeriod = object.samplePeriod ?? undefined;
    message.ingestDelay = object.ingestDelay ?? undefined;
    return message;
  }

};
export enum MetricDescriptor_MetricKind {
  /*Do not use this default value.*/
  METRIC_KIND_UNSPECIFIED = 0,

  /*An instantaneous measurement of a value.*/
  GAUGE = 1,

  /*The change in a value during a time interval.*/
  DELTA = 2,

  /*A value accumulated over a time interval.  Cumulative
  measurements in a time series should have the same start time
  and increasing end times, until an event resets the cumulative
  value to zero and sets a new start time for the following
  points.*/
  CUMULATIVE = 3,
  UNRECOGNIZED = -1,
}
export function metricDescriptorMetricKindFromJSON(object: any): MetricDescriptor_MetricKind {
  switch (object) {
    case "METRIC_KIND_UNSPECIFIED":
      return MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED;

    case "GAUGE":
      return MetricDescriptor_MetricKind.GAUGE;

    case "DELTA":
      return MetricDescriptor_MetricKind.DELTA;

    case "CUMULATIVE":
      return MetricDescriptor_MetricKind.CUMULATIVE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricDescriptor_MetricKind.UNRECOGNIZED;
  }
}
export function metricDescriptorMetricKindToJSON(object: MetricDescriptor_MetricKind): string {
  switch (object) {
    case MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED:
      return "METRIC_KIND_UNSPECIFIED";

    case MetricDescriptor_MetricKind.GAUGE:
      return "GAUGE";

    case MetricDescriptor_MetricKind.DELTA:
      return "DELTA";

    case MetricDescriptor_MetricKind.CUMULATIVE:
      return "CUMULATIVE";

    default:
      return "UNKNOWN";
  }
}
export enum MetricDescriptor_ValueType {
  /*Do not use this default value.*/
  VALUE_TYPE_UNSPECIFIED = 0,

  /*The value is a boolean.
  This value type can be used only if the metric kind is `GAUGE`.*/
  BOOL = 1,

  /*The value is a signed 64-bit integer.*/
  INT64 = 2,

  /*The value is a double precision floating point number.*/
  DOUBLE = 3,

  /*The value is a text string.
  This value type can be used only if the metric kind is `GAUGE`.*/
  STRING = 4,

  /*The value is a [`Distribution`][google.api.Distribution].*/
  DISTRIBUTION = 5,

  /*The value is money.*/
  MONEY = 6,
  UNRECOGNIZED = -1,
}
export function metricDescriptorValueTypeFromJSON(object: any): MetricDescriptor_ValueType {
  switch (object) {
    case "VALUE_TYPE_UNSPECIFIED":
      return MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED;

    case "BOOL":
      return MetricDescriptor_ValueType.BOOL;

    case "INT64":
      return MetricDescriptor_ValueType.INT64;

    case "DOUBLE":
      return MetricDescriptor_ValueType.DOUBLE;

    case "STRING":
      return MetricDescriptor_ValueType.STRING;

    case "DISTRIBUTION":
      return MetricDescriptor_ValueType.DISTRIBUTION;

    case "MONEY":
      return MetricDescriptor_ValueType.MONEY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return MetricDescriptor_ValueType.UNRECOGNIZED;
  }
}
export function metricDescriptorValueTypeToJSON(object: MetricDescriptor_ValueType): string {
  switch (object) {
    case MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED:
      return "VALUE_TYPE_UNSPECIFIED";

    case MetricDescriptor_ValueType.BOOL:
      return "BOOL";

    case MetricDescriptor_ValueType.INT64:
      return "INT64";

    case MetricDescriptor_ValueType.DOUBLE:
      return "DOUBLE";

    case MetricDescriptor_ValueType.STRING:
      return "STRING";

    case MetricDescriptor_ValueType.DISTRIBUTION:
      return "DISTRIBUTION";

    case MetricDescriptor_ValueType.MONEY:
      return "MONEY";

    default:
      return "UNKNOWN";
  }
}
export interface Metric_StringMapEntry {
  key: string;
  value: string;
}

function createBaseMetric_StringMapEntry(): Metric_StringMapEntry {
  return {
    key: "",
    value: ""
  };
}

export const Metric_StringMapEntry = {
  encode(message: Metric_StringMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric_StringMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric_StringMapEntry();

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

  fromJSON(object: any): Metric_StringMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Metric_StringMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metric_StringMapEntry>, I>>(object: I): Metric_StringMapEntry {
    const message = createBaseMetric_StringMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Metric {
  type: string;
  labels: {
    [key: string]: string;
  };
}

function createBaseMetric(): Metric {
  return {
    type: "",
    labels: ""
  };
}

export const Metric = {
  encode(message: Metric, writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      Metric_LabelsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.type = reader.string();
          break;

        case 2:
          const entry2 = Metric_LabelsMapEntry.decode(reader, reader.uint32());

          if (entry2.value !== undefined) {
            message.labels[entry2.key] = entry2.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Metric {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: Metric): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metric>, I>>(object: I): Metric {
    const message = createBaseMetric();
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};