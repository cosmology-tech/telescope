import { Timestamp } from "../../../protobuf/timestamp";
import { MetricValueSet } from "./metric_value";
import { LogEntry } from "./log_entry";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, isObject } from "@osmonauts/helpers";
export interface Operation_LabelsEntry {
  key: string;
  value: string;
}

function createBaseOperation_LabelsEntry(): Operation_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const Operation_LabelsEntry = {
  encode(message: Operation_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_LabelsEntry();

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

  fromJSON(object: any): Operation_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Operation_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Operation_LabelsEntry>, I>>(object: I): Operation_LabelsEntry {
    const message = createBaseOperation_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Operation {
  operationId: string;
  operationName: string;
  consumerId: string;
  startTime: Date;
  endTime: Date;
  labels: {
    [key: string]: string;
  };
  metricValueSets: MetricValueSet[];
  logEntries: LogEntry[];
  importance: Operation_Importance;
  extensions: Any[];
}

function createBaseOperation(): Operation {
  return {
    operationId: "",
    operationName: "",
    consumerId: "",
    startTime: undefined,
    endTime: undefined,
    labels: {},
    metricValueSets: [],
    logEntries: [],
    importance: undefined,
    extensions: []
  };
}

export const Operation = {
  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }

    if (message.operationName !== "") {
      writer.uint32(18).string(message.operationName);
    }

    if (message.consumerId !== "") {
      writer.uint32(26).string(message.consumerId);
    }

    if (message.startTime !== undefined) Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    if (message.endTime !== undefined) Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    Object.entries(message.labels).forEach(([key, value]) => {
      Operation_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });

    for (const v of message.metricValueSets) {
      MetricValueSet.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.logEntries) {
      LogEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.importance !== 0) {
      writer.uint32(88).int32(message.importance);
    }

    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(130).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;

        case 2:
          message.operationName = reader.string();
          break;

        case 3:
          message.consumerId = reader.string();
          break;

        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          const entry6 = Operation_LabelsEntry.decode(reader, reader.uint32());

          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }

          break;

        case 7:
          message.metricValueSets.push(MetricValueSet.decode(reader, reader.uint32()));
          break;

        case 8:
          message.logEntries.push(LogEntry.decode(reader, reader.uint32()));
          break;

        case 11:
          message.importance = (reader.int32() as any);
          break;

        case 16:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Operation {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      operationName: isSet(object.operationName) ? String(object.operationName) : "",
      consumerId: isSet(object.consumerId) ? String(object.consumerId) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metricValueSets: Array.isArray(object?.metricValueSets) ? object.metricValueSets.map((e: any) => MetricValueSet.fromJSON(e)) : [],
      logEntries: Array.isArray(object?.logEntries) ? object.logEntries.map((e: any) => LogEntry.fromJSON(e)) : [],
      importance: isSet(object.importance) ? operation_ImportanceFromJSON(object.importance) : 0,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);
    message.operationName !== undefined && (obj.operationName = message.operationName);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    if (message.metricValueSets) {
      obj.metricValueSets = message.metricValueSets.map(e => e ? MetricValueSet.toJSON(e) : undefined);
    } else {
      obj.metricValueSets = [];
    }

    if (message.logEntries) {
      obj.logEntries = message.logEntries.map(e => e ? LogEntry.toJSON(e) : undefined);
    } else {
      obj.logEntries = [];
    }

    message.importance !== undefined && (obj.importance = operation_ImportanceToJSON(message.importance));

    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Operation>, I>>(object: I): Operation {
    const message = createBaseOperation();
    message.operationId = object.operationId ?? "";
    message.operationName = object.operationName ?? "";
    message.consumerId = object.consumerId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.metricValueSets = object.metricValueSets?.map(e => MetricValueSet.fromPartial(e)) || [];
    message.logEntries = object.logEntries?.map(e => LogEntry.fromPartial(e)) || [];
    message.importance = object.importance ?? undefined;
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};
export enum Importance {
  /** LOW - Allows data caching, batching, and aggregation. It provides
  higher performance with higher data loss risk. */
  LOW = 0,

  /** HIGH - Disables data aggregation to minimize data loss. It is for operations
  that contains significant monetary value or audit trail. This feature
  only applies to the client libraries. */
  HIGH = 1,
  UNRECOGNIZED = -1,
}
export function importanceFromJSON(object: any): Importance {
  switch (object) {
    case 0:
    case "LOW":
      return Importance.LOW;

    case 1:
    case "HIGH":
      return Importance.HIGH;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Importance.UNRECOGNIZED;
  }
}
export function importanceToJSON(object: Importance): string {
  switch (object) {
    case Importance.LOW:
      return "LOW";

    case Importance.HIGH:
      return "HIGH";

    default:
      return "UNKNOWN";
  }
}