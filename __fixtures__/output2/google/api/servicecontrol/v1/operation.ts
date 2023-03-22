//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../../protobuf/timestamp";
import { MetricValueSet } from "./metric_value";
import { LogEntry } from "./log_entry";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, fromJsonTimestamp, isObject, fromTimestamp } from "../../../../helpers";
export const protobufPackage = "google.api.servicecontrol.v1";

/** Defines the importance of the data contained in the operation. */
export enum Operation_Importance {
  /**
   * LOW - Allows data caching, batching, and aggregation. It provides
   * higher performance with higher data loss risk.
   */
  LOW = 0,

  /**
   * HIGH - Disables data aggregation to minimize data loss. It is for operations
   * that contains significant monetary value or audit trail. This feature
   * only applies to the client libraries.
   */
  HIGH = 1,
  UNRECOGNIZED = -1,
}
export function operation_ImportanceFromJSON(object: any): Operation_Importance {
  switch (object) {
    case 0:
    case "LOW":
      return Operation_Importance.LOW;

    case 1:
    case "HIGH":
      return Operation_Importance.HIGH;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Operation_Importance.UNRECOGNIZED;
  }
}
export function operation_ImportanceToJSON(object: Operation_Importance): string {
  switch (object) {
    case Operation_Importance.LOW:
      return "LOW";

    case Operation_Importance.HIGH:
      return "HIGH";

    case Operation_Importance.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Operation_LabelsEntry {
  key: string;
  value: string;
}

/** Represents information regarding an operation. */
export interface Operation {
  /**
   * Identity of the operation. This must be unique within the scope of the
   * service that generated the operation. If the service calls
   * Check() and Report() on the same operation, the two calls should carry
   * the same id.
   * 
   * UUID version 4 is recommended, though not required.
   * In scenarios where an operation is computed from existing information
   * and an idempotent id is desirable for deduplication purpose, UUID version 5
   * is recommended. See RFC 4122 for details.
   */
  operationId: string;

  /** Fully qualified name of the operation. Reserved for future use. */
  operationName: string;

  /**
   * Identity of the consumer who is using the service.
   * This field should be filled in for the operations initiated by a
   * consumer, but not for service-initiated operations that are
   * not related to a specific consumer.
   * 
   * - This can be in one of the following formats:
   *     - project:PROJECT_ID,
   *     - project`_`number:PROJECT_NUMBER,
   *     - projects/PROJECT_ID or PROJECT_NUMBER,
   *     - folders/FOLDER_NUMBER,
   *     - organizations/ORGANIZATION_NUMBER,
   *     - api`_`key:API_KEY.
   */
  consumerId: string;

  /** Required. Start time of the operation. */
  startTime?: Timestamp;

  /**
   * End time of the operation.
   * Required when the operation is used in
   * [ServiceController.Report][google.api.servicecontrol.v1.ServiceController.Report],
   * but optional when the operation is used in
   * [ServiceController.Check][google.api.servicecontrol.v1.ServiceController.Check].
   */
  endTime?: Timestamp;

  /**
   * Labels describing the operation. Only the following labels are allowed:
   * 
   * - Labels describing monitored resources as defined in
   *   the service configuration.
   * - Default labels of metric values. When specified, labels defined in the
   *   metric value override these default.
   * - The following labels defined by Google Cloud Platform:
   *     - `cloud.googleapis.com/location` describing the location where the
   *        operation happened,
   *     - `servicecontrol.googleapis.com/user_agent` describing the user agent
   *        of the API request,
   *     - `servicecontrol.googleapis.com/service_agent` describing the service
   *        used to handle the API request (e.g. ESP),
   *     - `servicecontrol.googleapis.com/platform` describing the platform
   *        where the API is served, such as App Engine, Compute Engine, or
   *        Kubernetes Engine.
   */
  labels: {
    [key: string]: string;
  };

  /**
   * Represents information about this operation. Each MetricValueSet
   * corresponds to a metric defined in the service configuration.
   * The data type used in the MetricValueSet must agree with
   * the data type specified in the metric definition.
   * 
   * Within a single operation, it is not allowed to have more than one
   * MetricValue instances that have the same metric names and identical
   * label value combinations. If a request has such duplicated MetricValue
   * instances, the entire request is rejected with
   * an invalid argument error.
   */
  metricValueSets: MetricValueSet[];

  /** Represents information to be logged. */
  logEntries: LogEntry[];

  /** DO NOT USE. This is an experimental field. */
  importance: Operation_Importance;

  /** Unimplemented. */
  extensions: Any[];
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

  fromPartial(object: DeepPartial<Operation_LabelsEntry>): Operation_LabelsEntry {
    const message = createBaseOperation_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },

  fromSDKJSON(object: any): Operation_LabelsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  }

};

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
    importance: 0,
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

    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }

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
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.endTime = Timestamp.decode(reader, reader.uint32());
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
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.endTime !== undefined && (obj.endTime = fromTimestamp(message.endTime).toISOString());
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

  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = createBaseOperation();
    message.operationId = object.operationId ?? "";
    message.operationName = object.operationName ?? "";
    message.consumerId = object.consumerId ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
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
    message.importance = object.importance ?? 0;
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): OperationSDKType {
    return {
      operation_id: isSet(object.operation_id) ? String(object.operation_id) : "",
      operation_name: isSet(object.operation_name) ? String(object.operation_name) : "",
      consumer_id: isSet(object.consumer_id) ? String(object.consumer_id) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric_value_sets: Array.isArray(object?.metric_value_sets) ? object.metric_value_sets.map((e: any) => MetricValueSet.fromSDKJSON(e)) : [],
      log_entries: Array.isArray(object?.log_entries) ? object.log_entries.map((e: any) => LogEntry.fromSDKJSON(e)) : [],
      importance: isSet(object.importance) ? operation_ImportanceFromJSON(object.importance) : 0,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromSDKJSON(e)) : []
    };
  }

};