import { MonitoredResource } from "../../api/monitored_resource";
import { Any } from "../../protobuf/any";
import { Struct } from "../../protobuf/struct";
import { Timestamp } from "../../protobuf/timestamp";
import { LogSeverity, logSeverityFromJSON, logSeverityToJSON } from "../type/log_severity";
import { HttpRequest } from "../type/http_request";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, isObject, Long } from "@osmonauts/helpers";
export interface LogEntry_LabelsEntry {
  key: string;
  value: string;
}

/** An individual entry in a log. */
export interface LogEntry {
  /**
   * Required. The resource name of the log to which this log entry belongs:
   * 
   * "projects/[PROJECT_ID]/logs/[LOG_ID]"
   * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   * "folders/[FOLDER_ID]/logs/[LOG_ID]"
   * 
   * A project number may be used in place of PROJECT_ID. The project number is
   * translated to its corresponding PROJECT_ID internally and the `log_name`
   * field will contain PROJECT_ID in queries and exports.
   * 
   * `[LOG_ID]` must be URL-encoded within `log_name`. Example:
   * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   * 
   * `[LOG_ID]` must be less than 512 characters long and can only include the
   * following characters: upper and lower case alphanumeric characters,
   * forward-slash, underscore, hyphen, and period.
   * 
   * For backward compatibility, if `log_name` begins with a forward-slash, such
   * as `/projects/...`, then the log entry is ingested as usual, but the
   * forward-slash is removed. Listing the log entry will not show the leading
   * slash and filtering for a log name with a leading slash will never return
   * any results.
   */
  logName: string;

  /**
   * Required. The monitored resource that produced this log entry.
   * 
   * Example: a log entry that reports a database error would be associated with
   * the monitored resource designating the particular database that reported
   * the error.
   */
  resource: MonitoredResource;

  /**
   * The log entry payload, represented as a protocol buffer. Some Google
   * Cloud Platform services use this field for their log entry payloads.
   * 
   * The following protocol buffer types are supported; user-defined types
   * are not supported:
   * 
   * "type.googleapis.com/google.cloud.audit.AuditLog"
   * "type.googleapis.com/google.appengine.logging.v1.RequestLog"
   */
  protoPayload?: Any;

  /** The log entry payload, represented as a Unicode string (UTF-8). */
  textPayload?: string;

  /**
   * The log entry payload, represented as a structure that is
   * expressed as a JSON object.
   */
  jsonPayload?: Struct;

  /**
   * Optional. The time the event described by the log entry occurred. This time is used
   * to compute the log entry's age and to enforce the logs retention period.
   * If this field is omitted in a new log entry, then Logging assigns it the
   * current time. Timestamps have nanosecond accuracy, but trailing zeros in
   * the fractional seconds might be omitted when the timestamp is displayed.
   * 
   * Incoming log entries must have timestamps that don't exceed the
   * [logs retention
   * period](https://cloud.google.com/logging/quotas#logs_retention_periods) in
   * the past, and that don't exceed 24 hours in the future. Log entries outside
   * those time boundaries aren't ingested by Logging.
   */
  timestamp: Date;

  /** Output only. The time the log entry was received by Logging. */
  receiveTimestamp: Date;

  /** Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
  severity: LogSeverity;

  /**
   * Optional. A unique identifier for the log entry. If you provide a value, then
   * Logging considers other log entries in the same project, with the same
   * `timestamp`, and with the same `insert_id` to be duplicates which are
   * removed in a single query result. However, there are no guarantees of
   * de-duplication in the export of logs.
   * 
   * If the `insert_id` is omitted when writing a log entry, the Logging API
   * assigns its own unique identifier in this field.
   * 
   * In queries, the `insert_id` is also used to order log entries that have
   * the same `log_name` and `timestamp` values.
   */
  insertId: string;

  /**
   * Optional. Information about the HTTP request associated with this log entry, if
   * applicable.
   */
  httpRequest: HttpRequest;

  /**
   * Optional. A map of key, value pairs that provides additional information about the
   * log entry. The labels can be user-defined or system-defined.
   * 
   * User-defined labels are arbitrary key, value pairs that you can use to
   * classify logs.
   * 
   * System-defined labels are defined by GCP services for platform logs.
   * They have two components - a service namespace component and the
   * attribute name. For example: `compute.googleapis.com/resource_name`.
   * 
   * Cloud Logging truncates label keys that exceed 512 B and label
   * values that exceed 64 KB upon their associated log entry being
   * written. The truncation is indicated by an ellipsis at the
   * end of the character string.
   */
  labels: {
    [key: string]: string;
  };

  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation: LogEntryOperation;

  /**
   * Optional. Resource name of the trace associated with the log entry, if any. If it
   * contains a relative resource name, the name is assumed to be relative to
   * `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace: string;

  /**
   * Optional. The span ID within the trace associated with the log entry.
   * 
   * For Trace spans, this is the same format that the Trace API v2 uses: a
   * 16-character hexadecimal encoding of an 8-byte array, such as
   * `000000000000004a`.
   */
  spanId: string;

  /**
   * Optional. The sampling decision of the trace associated with the log entry.
   * 
   * True means that the trace resource name in the `trace` field was sampled
   * for storage in a trace backend. False means that the trace was not sampled
   * for storage when this log entry was written, or the sampling decision was
   * unknown at the time. A non-sampled `trace` value is still useful as a
   * request correlation identifier. The default is False.
   */
  traceSampled: boolean;

  /** Optional. Source code location information associated with the log entry, if any. */
  sourceLocation: LogEntrySourceLocation;

  /**
   * Optional. Information indicating this LogEntry is part of a sequence of multiple log
   * entries split from a single LogEntry.
   */
  split: LogSplit;
}

/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the same
   * identifier are assumed to be part of the same operation.
   */
  id: string;

  /**
   * Optional. An arbitrary producer identifier. The combination of `id` and
   * `producer` must be globally unique. Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer: string;

  /** Optional. Set this to True if this is the first log entry in the operation. */
  first: boolean;

  /** Optional. Set this to True if this is the last log entry in the operation. */
  last: boolean;
}

/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocation {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file: string;

  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line: Long;

  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
   * (Python).
   */
  function: string;
}

/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 */
export interface LogSplit {
  /**
   * A globally unique identifier for all log entries in a sequence of split log
   * entries. All log entries with the same |LogSplit.uid| are assumed to be
   * part of the same sequence of split log entries.
   */
  uid: string;

  /**
   * The index of this LogEntry in the sequence of split log entries. Log
   * entries are given |index| values 0, 1, ..., n-1 for a sequence of n log
   * entries.
   */
  index: number;

  /** The total number of log entries that the original LogEntry was split into. */
  totalSplits: number;
}

function createBaseLogEntry_LabelsEntry(): LogEntry_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const LogEntry_LabelsEntry = {
  encode(message: LogEntry_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry_LabelsEntry();

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

  fromJSON(object: any): LogEntry_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: LogEntry_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntry_LabelsEntry>, I>>(object: I): LogEntry_LabelsEntry {
    const message = createBaseLogEntry_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseLogEntry(): LogEntry {
  return {
    logName: "",
    resource: undefined,
    protoPayload: undefined,
    textPayload: undefined,
    jsonPayload: undefined,
    timestamp: undefined,
    receiveTimestamp: undefined,
    severity: 0,
    insertId: "",
    httpRequest: undefined,
    labels: {},
    operation: undefined,
    trace: "",
    spanId: "",
    traceSampled: false,
    sourceLocation: undefined,
    split: undefined
  };
}

export const LogEntry = {
  encode(message: LogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logName !== "") {
      writer.uint32(98).string(message.logName);
    }

    if (message.resource !== undefined) {
      MonitoredResource.encode(message.resource, writer.uint32(66).fork()).ldelim();
    }

    if (message.protoPayload !== undefined) {
      Any.encode(message.protoPayload, writer.uint32(18).fork()).ldelim();
    }

    if (message.textPayload !== undefined) {
      writer.uint32(26).string(message.textPayload);
    }

    if (message.jsonPayload !== undefined) {
      Struct.encode(message.jsonPayload, writer.uint32(50).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(74).fork()).ldelim();
    }

    if (message.receiveTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.receiveTimestamp), writer.uint32(194).fork()).ldelim();
    }

    if (message.severity !== 0) {
      writer.uint32(80).int32(message.severity);
    }

    if (message.insertId !== "") {
      writer.uint32(34).string(message.insertId);
    }

    if (message.httpRequest !== undefined) {
      HttpRequest.encode(message.httpRequest, writer.uint32(58).fork()).ldelim();
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      LogEntry_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(90).fork()).ldelim();
    });

    if (message.operation !== undefined) {
      LogEntryOperation.encode(message.operation, writer.uint32(122).fork()).ldelim();
    }

    if (message.trace !== "") {
      writer.uint32(178).string(message.trace);
    }

    if (message.spanId !== "") {
      writer.uint32(218).string(message.spanId);
    }

    if (message.traceSampled === true) {
      writer.uint32(240).bool(message.traceSampled);
    }

    if (message.sourceLocation !== undefined) {
      LogEntrySourceLocation.encode(message.sourceLocation, writer.uint32(186).fork()).ldelim();
    }

    if (message.split !== undefined) {
      LogSplit.encode(message.split, writer.uint32(282).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 12:
          message.logName = reader.string();
          break;

        case 8:
          message.resource = MonitoredResource.decode(reader, reader.uint32());
          break;

        case 2:
          message.protoPayload = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.textPayload = reader.string();
          break;

        case 6:
          message.jsonPayload = Struct.decode(reader, reader.uint32());
          break;

        case 9:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 24:
          message.receiveTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.severity = (reader.int32() as any);
          break;

        case 4:
          message.insertId = reader.string();
          break;

        case 7:
          message.httpRequest = HttpRequest.decode(reader, reader.uint32());
          break;

        case 11:
          const entry11 = LogEntry_LabelsEntry.decode(reader, reader.uint32());

          if (entry11.value !== undefined) {
            message.labels[entry11.key] = entry11.value;
          }

          break;

        case 15:
          message.operation = LogEntryOperation.decode(reader, reader.uint32());
          break;

        case 22:
          message.trace = reader.string();
          break;

        case 27:
          message.spanId = reader.string();
          break;

        case 30:
          message.traceSampled = reader.bool();
          break;

        case 23:
          message.sourceLocation = LogEntrySourceLocation.decode(reader, reader.uint32());
          break;

        case 35:
          message.split = LogSplit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogEntry {
    return {
      logName: isSet(object.logName) ? String(object.logName) : "",
      resource: isSet(object.resource) ? MonitoredResource.fromJSON(object.resource) : undefined,
      protoPayload: isSet(object.protoPayload) ? Any.fromJSON(object.protoPayload) : undefined,
      textPayload: isSet(object.textPayload) ? String(object.textPayload) : undefined,
      jsonPayload: isSet(object.jsonPayload) ? Struct.fromJSON(object.jsonPayload) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      receiveTimestamp: isSet(object.receiveTimestamp) ? fromJsonTimestamp(object.receiveTimestamp) : undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : 0,
      insertId: isSet(object.insertId) ? String(object.insertId) : "",
      httpRequest: isSet(object.httpRequest) ? HttpRequest.fromJSON(object.httpRequest) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      operation: isSet(object.operation) ? LogEntryOperation.fromJSON(object.operation) : undefined,
      trace: isSet(object.trace) ? String(object.trace) : "",
      spanId: isSet(object.spanId) ? String(object.spanId) : "",
      traceSampled: isSet(object.traceSampled) ? Boolean(object.traceSampled) : false,
      sourceLocation: isSet(object.sourceLocation) ? LogEntrySourceLocation.fromJSON(object.sourceLocation) : undefined,
      split: isSet(object.split) ? LogSplit.fromJSON(object.split) : undefined
    };
  },

  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    message.logName !== undefined && (obj.logName = message.logName);
    message.resource !== undefined && (obj.resource = message.resource ? MonitoredResource.toJSON(message.resource) : undefined);
    message.protoPayload !== undefined && (obj.protoPayload = message.protoPayload ? Any.toJSON(message.protoPayload) : undefined);
    message.textPayload !== undefined && (obj.textPayload = message.textPayload);
    message.jsonPayload !== undefined && (obj.jsonPayload = message.jsonPayload ? Struct.toJSON(message.jsonPayload) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.receiveTimestamp !== undefined && (obj.receiveTimestamp = message.receiveTimestamp.toISOString());
    message.severity !== undefined && (obj.severity = logSeverityToJSON(message.severity));
    message.insertId !== undefined && (obj.insertId = message.insertId);
    message.httpRequest !== undefined && (obj.httpRequest = message.httpRequest ? HttpRequest.toJSON(message.httpRequest) : undefined);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    message.operation !== undefined && (obj.operation = message.operation ? LogEntryOperation.toJSON(message.operation) : undefined);
    message.trace !== undefined && (obj.trace = message.trace);
    message.spanId !== undefined && (obj.spanId = message.spanId);
    message.traceSampled !== undefined && (obj.traceSampled = message.traceSampled);
    message.sourceLocation !== undefined && (obj.sourceLocation = message.sourceLocation ? LogEntrySourceLocation.toJSON(message.sourceLocation) : undefined);
    message.split !== undefined && (obj.split = message.split ? LogSplit.toJSON(message.split) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntry>, I>>(object: I): LogEntry {
    const message = createBaseLogEntry();
    message.logName = object.logName ?? "";
    message.resource = object.resource !== undefined && object.resource !== null ? MonitoredResource.fromPartial(object.resource) : undefined;
    message.protoPayload = object.protoPayload !== undefined && object.protoPayload !== null ? Any.fromPartial(object.protoPayload) : undefined;
    message.textPayload = object.textPayload ?? undefined;
    message.jsonPayload = object.jsonPayload !== undefined && object.jsonPayload !== null ? Struct.fromPartial(object.jsonPayload) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.receiveTimestamp = object.receiveTimestamp ?? undefined;
    message.severity = object.severity ?? 0;
    message.insertId = object.insertId ?? "";
    message.httpRequest = object.httpRequest !== undefined && object.httpRequest !== null ? HttpRequest.fromPartial(object.httpRequest) : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.operation = object.operation !== undefined && object.operation !== null ? LogEntryOperation.fromPartial(object.operation) : undefined;
    message.trace = object.trace ?? "";
    message.spanId = object.spanId ?? "";
    message.traceSampled = object.traceSampled ?? false;
    message.sourceLocation = object.sourceLocation !== undefined && object.sourceLocation !== null ? LogEntrySourceLocation.fromPartial(object.sourceLocation) : undefined;
    message.split = object.split !== undefined && object.split !== null ? LogSplit.fromPartial(object.split) : undefined;
    return message;
  }

};

function createBaseLogEntryOperation(): LogEntryOperation {
  return {
    id: "",
    producer: "",
    first: false,
    last: false
  };
}

export const LogEntryOperation = {
  encode(message: LogEntryOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.producer !== "") {
      writer.uint32(18).string(message.producer);
    }

    if (message.first === true) {
      writer.uint32(24).bool(message.first);
    }

    if (message.last === true) {
      writer.uint32(32).bool(message.last);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntryOperation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.producer = reader.string();
          break;

        case 3:
          message.first = reader.bool();
          break;

        case 4:
          message.last = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogEntryOperation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      producer: isSet(object.producer) ? String(object.producer) : "",
      first: isSet(object.first) ? Boolean(object.first) : false,
      last: isSet(object.last) ? Boolean(object.last) : false
    };
  },

  toJSON(message: LogEntryOperation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.producer !== undefined && (obj.producer = message.producer);
    message.first !== undefined && (obj.first = message.first);
    message.last !== undefined && (obj.last = message.last);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntryOperation>, I>>(object: I): LogEntryOperation {
    const message = createBaseLogEntryOperation();
    message.id = object.id ?? "";
    message.producer = object.producer ?? "";
    message.first = object.first ?? false;
    message.last = object.last ?? false;
    return message;
  }

};

function createBaseLogEntrySourceLocation(): LogEntrySourceLocation {
  return {
    file: "",
    line: Long.ZERO,
    function: ""
  };
}

export const LogEntrySourceLocation = {
  encode(message: LogEntrySourceLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }

    if (!message.line.isZero()) {
      writer.uint32(16).int64(message.line);
    }

    if (message.function !== "") {
      writer.uint32(26).string(message.function);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntrySourceLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntrySourceLocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;

        case 2:
          message.line = (reader.int64() as Long);
          break;

        case 3:
          message.function = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogEntrySourceLocation {
    return {
      file: isSet(object.file) ? String(object.file) : "",
      line: isSet(object.line) ? Long.fromString(object.line) : Long.ZERO,
      function: isSet(object.function) ? String(object.function) : ""
    };
  },

  toJSON(message: LogEntrySourceLocation): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.line !== undefined && (obj.line = (message.line || Long.ZERO).toString());
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntrySourceLocation>, I>>(object: I): LogEntrySourceLocation {
    const message = createBaseLogEntrySourceLocation();
    message.file = object.file ?? "";
    message.line = object.line !== undefined && object.line !== null ? Long.fromValue(object.line) : Long.ZERO;
    message.function = object.function ?? "";
    return message;
  }

};

function createBaseLogSplit(): LogSplit {
  return {
    uid: "",
    index: 0,
    totalSplits: 0
  };
}

export const LogSplit = {
  encode(message: LogSplit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }

    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }

    if (message.totalSplits !== 0) {
      writer.uint32(24).int32(message.totalSplits);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogSplit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogSplit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;

        case 2:
          message.index = reader.int32();
          break;

        case 3:
          message.totalSplits = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogSplit {
    return {
      uid: isSet(object.uid) ? String(object.uid) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      totalSplits: isSet(object.totalSplits) ? Number(object.totalSplits) : 0
    };
  },

  toJSON(message: LogSplit): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.totalSplits !== undefined && (obj.totalSplits = Math.round(message.totalSplits));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogSplit>, I>>(object: I): LogSplit {
    const message = createBaseLogSplit();
    message.uid = object.uid ?? "";
    message.index = object.index ?? 0;
    message.totalSplits = object.totalSplits ?? 0;
    return message;
  }

};