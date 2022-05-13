import { Timestamp } from "../../../protobuf/timestamp";
import { LogSeverity, logSeverityFromJSON, logSeverityToJSON } from "../../../logging/type/log_severity";
import { HttpRequest } from "./http_request";
import { Any } from "../../../protobuf/any";
import { Struct } from "../../../protobuf/struct";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, isObject, Long } from "@osmonauts/helpers";
export interface LogEntry_LabelsEntry {
  key: string;
  value: string;
}

/** An individual log entry. */
export interface LogEntry {
  /**
   * Required. The log to which this log entry belongs. Examples: `"syslog"`,
   * `"book_log"`.
   */
  name: string;

  /**
   * The time the event described by the log entry occurred. If
   * omitted, defaults to operation start time.
   */
  timestamp: Date;

  /**
   * The severity of the log entry. The default value is
   * `LogSeverity.DEFAULT`.
   */
  severity: LogSeverity;

  /**
   * Optional. Information about the HTTP request associated with this
   * log entry, if applicable.
   */
  httpRequest: HttpRequest;

  /**
   * Optional. Resource name of the trace associated with the log entry, if any.
   * If this field contains a relative resource name, you can assume the name is
   * relative to `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace: string;

  /**
   * A unique ID for the log entry used for deduplication. If omitted,
   * the implementation will generate one based on operation_id.
   */
  insertId: string;

  /**
   * A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels: {
    [key: string]: string;
  };

  /**
   * The log entry payload, represented as a protocol buffer that is
   * expressed as a JSON object. The only accepted type currently is
   * [AuditLog][google.cloud.audit.AuditLog].
   */
  protoPayload?: Any;

  /** The log entry payload, represented as a Unicode string (UTF-8). */
  textPayload?: string;

  /**
   * The log entry payload, represented as a structure that
   * is expressed as a JSON object.
   */
  structPayload?: Struct;

  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation: LogEntryOperation;

  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   */
  sourceLocation: LogEntrySourceLocation;
}

/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the
   * same identifier are assumed to be part of the same operation.
   */
  id: string;

  /**
   * Optional. An arbitrary producer identifier. The combination of
   * `id` and `producer` must be globally unique.  Examples for `producer`:
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
    name: "",
    timestamp: undefined,
    severity: 0,
    httpRequest: undefined,
    trace: "",
    insertId: "",
    labels: {},
    protoPayload: undefined,
    textPayload: undefined,
    structPayload: undefined,
    operation: undefined,
    sourceLocation: undefined
  };
}

export const LogEntry = {
  encode(message: LogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(82).string(message.name);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(90).fork()).ldelim();
    }

    if (message.severity !== 0) {
      writer.uint32(96).int32(message.severity);
    }

    if (message.httpRequest !== undefined) {
      HttpRequest.encode(message.httpRequest, writer.uint32(114).fork()).ldelim();
    }

    if (message.trace !== "") {
      writer.uint32(122).string(message.trace);
    }

    if (message.insertId !== "") {
      writer.uint32(34).string(message.insertId);
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      LogEntry_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(106).fork()).ldelim();
    });

    if (message.protoPayload !== undefined) {
      Any.encode(message.protoPayload, writer.uint32(18).fork()).ldelim();
    }

    if (message.textPayload !== undefined) {
      writer.uint32(26).string(message.textPayload);
    }

    if (message.structPayload !== undefined) {
      Struct.encode(message.structPayload, writer.uint32(50).fork()).ldelim();
    }

    if (message.operation !== undefined) {
      LogEntryOperation.encode(message.operation, writer.uint32(130).fork()).ldelim();
    }

    if (message.sourceLocation !== undefined) {
      LogEntrySourceLocation.encode(message.sourceLocation, writer.uint32(138).fork()).ldelim();
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
        case 10:
          message.name = reader.string();
          break;

        case 11:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 12:
          message.severity = (reader.int32() as any);
          break;

        case 14:
          message.httpRequest = HttpRequest.decode(reader, reader.uint32());
          break;

        case 15:
          message.trace = reader.string();
          break;

        case 4:
          message.insertId = reader.string();
          break;

        case 13:
          const entry13 = LogEntry_LabelsEntry.decode(reader, reader.uint32());

          if (entry13.value !== undefined) {
            message.labels[entry13.key] = entry13.value;
          }

          break;

        case 2:
          message.protoPayload = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.textPayload = reader.string();
          break;

        case 6:
          message.structPayload = Struct.decode(reader, reader.uint32());
          break;

        case 16:
          message.operation = LogEntryOperation.decode(reader, reader.uint32());
          break;

        case 17:
          message.sourceLocation = LogEntrySourceLocation.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : 0,
      httpRequest: isSet(object.httpRequest) ? HttpRequest.fromJSON(object.httpRequest) : undefined,
      trace: isSet(object.trace) ? String(object.trace) : "",
      insertId: isSet(object.insertId) ? String(object.insertId) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      protoPayload: isSet(object.protoPayload) ? Any.fromJSON(object.protoPayload) : undefined,
      textPayload: isSet(object.textPayload) ? String(object.textPayload) : undefined,
      structPayload: isSet(object.structPayload) ? Struct.fromJSON(object.structPayload) : undefined,
      operation: isSet(object.operation) ? LogEntryOperation.fromJSON(object.operation) : undefined,
      sourceLocation: isSet(object.sourceLocation) ? LogEntrySourceLocation.fromJSON(object.sourceLocation) : undefined
    };
  },

  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.severity !== undefined && (obj.severity = logSeverityToJSON(message.severity));
    message.httpRequest !== undefined && (obj.httpRequest = message.httpRequest ? HttpRequest.toJSON(message.httpRequest) : undefined);
    message.trace !== undefined && (obj.trace = message.trace);
    message.insertId !== undefined && (obj.insertId = message.insertId);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    message.protoPayload !== undefined && (obj.protoPayload = message.protoPayload ? Any.toJSON(message.protoPayload) : undefined);
    message.textPayload !== undefined && (obj.textPayload = message.textPayload);
    message.structPayload !== undefined && (obj.structPayload = message.structPayload ? Struct.toJSON(message.structPayload) : undefined);
    message.operation !== undefined && (obj.operation = message.operation ? LogEntryOperation.toJSON(message.operation) : undefined);
    message.sourceLocation !== undefined && (obj.sourceLocation = message.sourceLocation ? LogEntrySourceLocation.toJSON(message.sourceLocation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEntry>, I>>(object: I): LogEntry {
    const message = createBaseLogEntry();
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.severity = object.severity ?? 0;
    message.httpRequest = object.httpRequest !== undefined && object.httpRequest !== null ? HttpRequest.fromPartial(object.httpRequest) : undefined;
    message.trace = object.trace ?? "";
    message.insertId = object.insertId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.protoPayload = object.protoPayload !== undefined && object.protoPayload !== null ? Any.fromPartial(object.protoPayload) : undefined;
    message.textPayload = object.textPayload ?? undefined;
    message.structPayload = object.structPayload !== undefined && object.structPayload !== null ? Struct.fromPartial(object.structPayload) : undefined;
    message.operation = object.operation !== undefined && object.operation !== null ? LogEntryOperation.fromPartial(object.operation) : undefined;
    message.sourceLocation = object.sourceLocation !== undefined && object.sourceLocation !== null ? LogEntrySourceLocation.fromPartial(object.sourceLocation) : undefined;
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