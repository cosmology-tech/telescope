import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../protobuf/timestamp";
import { LogSeverity, LogSeveritySDKType, logSeverityFromJSON, logSeverityToJSON } from "../../../logging/type/log_severity";
import { HttpRequest, HttpRequestAmino, HttpRequestSDKType } from "./http_request";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../protobuf/any";
import { Struct, StructAmino, StructSDKType } from "../../../protobuf/struct";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../../helpers";
export const protobufPackage = "google.api.servicecontrol.v1";
export interface LogEntry_LabelsEntry {
  key: string;
  value: string;
}
export interface LogEntry_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface LogEntry_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface LogEntry_LabelsEntrySDKType {
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
  timestamp?: Date;
  /**
   * The severity of the log entry. The default value is
   * `LogSeverity.DEFAULT`.
   */
  severity: LogSeverity;
  /**
   * Optional. Information about the HTTP request associated with this
   * log entry, if applicable.
   */
  httpRequest?: HttpRequest;
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
  operation?: LogEntryOperation;
  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   */
  sourceLocation?: LogEntrySourceLocation;
}
export interface LogEntryProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.LogEntry";
  value: Uint8Array;
}
/** An individual log entry. */
export interface LogEntryAmino {
  /**
   * Required. The log to which this log entry belongs. Examples: `"syslog"`,
   * `"book_log"`.
   */
  name: string;
  /**
   * The time the event described by the log entry occurred. If
   * omitted, defaults to operation start time.
   */
  timestamp?: string;
  /**
   * The severity of the log entry. The default value is
   * `LogSeverity.DEFAULT`.
   */
  severity: LogSeverity;
  /**
   * Optional. Information about the HTTP request associated with this
   * log entry, if applicable.
   */
  http_request?: HttpRequestAmino;
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
  insert_id: string;
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
  proto_payload?: AnyAmino;
  /** The log entry payload, represented as a Unicode string (UTF-8). */
  text_payload?: string;
  /**
   * The log entry payload, represented as a structure that
   * is expressed as a JSON object.
   */
  struct_payload?: StructAmino;
  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation?: LogEntryOperationAmino;
  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   */
  source_location?: LogEntrySourceLocationAmino;
}
/** An individual log entry. */
export interface LogEntrySDKType {
  name: string;
  timestamp?: Date;
  severity: LogSeverity;
  http_request?: HttpRequestSDKType;
  trace: string;
  insert_id: string;
  labels: {
    [key: string]: string;
  };
  proto_payload?: AnySDKType;
  text_payload?: string;
  struct_payload?: StructSDKType;
  operation?: LogEntryOperationSDKType;
  source_location?: LogEntrySourceLocationSDKType;
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
export interface LogEntryOperationProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.LogEntryOperation";
  value: Uint8Array;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationAmino {
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
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationSDKType {
  id: string;
  producer: string;
  first: boolean;
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
  line: bigint;
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
export interface LogEntrySourceLocationProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.LogEntrySourceLocation";
  value: Uint8Array;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationAmino {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file: string;
  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line: string;
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
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationSDKType {
  file: string;
  line: bigint;
  function: string;
}
function createBaseLogEntry_LabelsEntry(): LogEntry_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const LogEntry_LabelsEntry = {
  encode(message: LogEntry_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntry_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseLogEntry_LabelsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: LogEntry_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntry_LabelsEntry>): LogEntry_LabelsEntry {
    const message = createBaseLogEntry_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: LogEntry_LabelsEntrySDKType): LogEntry_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: LogEntry_LabelsEntry): LogEntry_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: LogEntry_LabelsEntryAmino): LogEntry_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: LogEntry_LabelsEntry, useInterfaces: boolean = true): LogEntry_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromProtoMsg(message: LogEntry_LabelsEntryProtoMsg, useInterfaces: boolean = true): LogEntry_LabelsEntry {
    return LogEntry_LabelsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntry_LabelsEntry): Uint8Array {
    return LogEntry_LabelsEntry.encode(message).finish();
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
  typeUrl: "/google.api.servicecontrol.v1.LogEntry",
  encode(message: LogEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.httpRequest = HttpRequest.decode(reader, reader.uint32(), useInterfaces);
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
          message.protoPayload = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.textPayload = reader.string();
          break;
        case 6:
          message.structPayload = Struct.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 16:
          message.operation = LogEntryOperation.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 17:
          message.sourceLocation = LogEntrySourceLocation.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntry {
    const obj = createBaseLogEntry();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    if (isSet(object.severity)) obj.severity = logSeverityFromJSON(object.severity);
    if (isSet(object.httpRequest)) obj.httpRequest = HttpRequest.fromJSON(object.httpRequest);
    if (isSet(object.trace)) obj.trace = String(object.trace);
    if (isSet(object.insertId)) obj.insertId = String(object.insertId);
    if (isObject(object.labels)) obj.labels = Object.entries(object.labels).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    if (isSet(object.protoPayload)) obj.protoPayload = Any.fromJSON(object.protoPayload);
    if (isSet(object.textPayload)) obj.textPayload = String(object.textPayload);
    if (isSet(object.structPayload)) obj.structPayload = Struct.fromJSON(object.structPayload);
    if (isSet(object.operation)) obj.operation = LogEntryOperation.fromJSON(object.operation);
    if (isSet(object.sourceLocation)) obj.sourceLocation = LogEntrySourceLocation.fromJSON(object.sourceLocation);
    return obj;
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
  fromPartial(object: DeepPartial<LogEntry>): LogEntry {
    const message = createBaseLogEntry();
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.severity = object.severity ?? 0;
    if (object.httpRequest !== undefined && object.httpRequest !== null) {
      message.httpRequest = HttpRequest.fromPartial(object.httpRequest);
    }
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
    if (object.protoPayload !== undefined && object.protoPayload !== null) {
      message.protoPayload = Any.fromPartial(object.protoPayload);
    }
    message.textPayload = object.textPayload ?? undefined;
    if (object.structPayload !== undefined && object.structPayload !== null) {
      message.structPayload = Struct.fromPartial(object.structPayload);
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = LogEntryOperation.fromPartial(object.operation);
    }
    if (object.sourceLocation !== undefined && object.sourceLocation !== null) {
      message.sourceLocation = LogEntrySourceLocation.fromPartial(object.sourceLocation);
    }
    return message;
  },
  fromSDK(object: LogEntrySDKType): LogEntry {
    return {
      name: object?.name,
      timestamp: object.timestamp ?? undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : -1,
      httpRequest: object.http_request ? HttpRequest.fromSDK(object.http_request) : undefined,
      trace: object?.trace,
      insertId: object?.insert_id,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      protoPayload: object.proto_payload ? Any.fromSDK(object.proto_payload) : undefined,
      textPayload: object?.text_payload,
      structPayload: object.struct_payload ? Struct.fromSDK(object.struct_payload) : undefined,
      operation: object.operation ? LogEntryOperation.fromSDK(object.operation) : undefined,
      sourceLocation: object.source_location ? LogEntrySourceLocation.fromSDK(object.source_location) : undefined
    };
  },
  toSDK(message: LogEntry): LogEntrySDKType {
    const obj: any = {};
    obj.name = message.name;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    message.severity !== undefined && (obj.severity = logSeverityToJSON(message.severity));
    message.httpRequest !== undefined && (obj.http_request = message.httpRequest ? HttpRequest.toSDK(message.httpRequest) : undefined);
    obj.trace = message.trace;
    obj.insert_id = message.insertId;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.protoPayload !== undefined && (obj.proto_payload = message.protoPayload ? Any.toSDK(message.protoPayload) : undefined);
    obj.text_payload = message.textPayload;
    message.structPayload !== undefined && (obj.struct_payload = message.structPayload ? Struct.toSDK(message.structPayload) : undefined);
    message.operation !== undefined && (obj.operation = message.operation ? LogEntryOperation.toSDK(message.operation) : undefined);
    message.sourceLocation !== undefined && (obj.source_location = message.sourceLocation ? LogEntrySourceLocation.toSDK(message.sourceLocation) : undefined);
    return obj;
  },
  fromAmino(object: LogEntryAmino): LogEntry {
    return {
      name: object.name,
      timestamp: object?.timestamp ? fromTimestamp(Timestamp.fromAmino(object.timestamp)) : undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : -1,
      httpRequest: object?.http_request ? HttpRequest.fromAmino(object.http_request) : undefined,
      trace: object.trace,
      insertId: object.insert_id,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      protoPayload: object?.proto_payload ? Any.fromAmino(object.proto_payload) : undefined,
      textPayload: object?.text_payload,
      structPayload: object?.struct_payload ? Struct.fromAmino(object.struct_payload) : undefined,
      operation: object?.operation ? LogEntryOperation.fromAmino(object.operation) : undefined,
      sourceLocation: object?.source_location ? LogEntrySourceLocation.fromAmino(object.source_location) : undefined
    };
  },
  toAmino(message: LogEntry, useInterfaces: boolean = true): LogEntryAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.severity = message.severity;
    obj.http_request = message.httpRequest ? HttpRequest.toAmino(message.httpRequest, useInterfaces) : undefined;
    obj.trace = message.trace;
    obj.insert_id = message.insertId;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.proto_payload = message.protoPayload ? Any.toAmino(message.protoPayload, useInterfaces) : undefined;
    obj.text_payload = message.textPayload;
    obj.struct_payload = message.structPayload ? Struct.toAmino(message.structPayload, useInterfaces) : undefined;
    obj.operation = message.operation ? LogEntryOperation.toAmino(message.operation, useInterfaces) : undefined;
    obj.source_location = message.sourceLocation ? LogEntrySourceLocation.toAmino(message.sourceLocation, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: LogEntryProtoMsg, useInterfaces: boolean = true): LogEntry {
    return LogEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntry): Uint8Array {
    return LogEntry.encode(message).finish();
  },
  toProtoMsg(message: LogEntry): LogEntryProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.LogEntry",
      value: LogEntry.encode(message).finish()
    };
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
  typeUrl: "/google.api.servicecontrol.v1.LogEntryOperation",
  encode(message: LogEntryOperation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntryOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseLogEntryOperation();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.producer)) obj.producer = String(object.producer);
    if (isSet(object.first)) obj.first = Boolean(object.first);
    if (isSet(object.last)) obj.last = Boolean(object.last);
    return obj;
  },
  toJSON(message: LogEntryOperation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.producer !== undefined && (obj.producer = message.producer);
    message.first !== undefined && (obj.first = message.first);
    message.last !== undefined && (obj.last = message.last);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntryOperation>): LogEntryOperation {
    const message = createBaseLogEntryOperation();
    message.id = object.id ?? "";
    message.producer = object.producer ?? "";
    message.first = object.first ?? false;
    message.last = object.last ?? false;
    return message;
  },
  fromSDK(object: LogEntryOperationSDKType): LogEntryOperation {
    return {
      id: object?.id,
      producer: object?.producer,
      first: object?.first,
      last: object?.last
    };
  },
  toSDK(message: LogEntryOperation): LogEntryOperationSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.producer = message.producer;
    obj.first = message.first;
    obj.last = message.last;
    return obj;
  },
  fromAmino(object: LogEntryOperationAmino): LogEntryOperation {
    return {
      id: object.id,
      producer: object.producer,
      first: object.first,
      last: object.last
    };
  },
  toAmino(message: LogEntryOperation, useInterfaces: boolean = true): LogEntryOperationAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.producer = message.producer;
    obj.first = message.first;
    obj.last = message.last;
    return obj;
  },
  fromProtoMsg(message: LogEntryOperationProtoMsg, useInterfaces: boolean = true): LogEntryOperation {
    return LogEntryOperation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntryOperation): Uint8Array {
    return LogEntryOperation.encode(message).finish();
  },
  toProtoMsg(message: LogEntryOperation): LogEntryOperationProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.LogEntryOperation",
      value: LogEntryOperation.encode(message).finish()
    };
  }
};
function createBaseLogEntrySourceLocation(): LogEntrySourceLocation {
  return {
    file: "",
    line: BigInt(0),
    function: ""
  };
}
export const LogEntrySourceLocation = {
  typeUrl: "/google.api.servicecontrol.v1.LogEntrySourceLocation",
  encode(message: LogEntrySourceLocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.line !== BigInt(0)) {
      writer.uint32(16).int64(message.line);
    }
    if (message.function !== "") {
      writer.uint32(26).string(message.function);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntrySourceLocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntrySourceLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.line = reader.int64();
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
    const obj = createBaseLogEntrySourceLocation();
    if (isSet(object.file)) obj.file = String(object.file);
    if (isSet(object.line)) obj.line = BigInt(object.line.toString());
    if (isSet(object.function)) obj.function = String(object.function);
    return obj;
  },
  toJSON(message: LogEntrySourceLocation): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.line !== undefined && (obj.line = (message.line || BigInt(0)).toString());
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntrySourceLocation>): LogEntrySourceLocation {
    const message = createBaseLogEntrySourceLocation();
    message.file = object.file ?? "";
    if (object.line !== undefined && object.line !== null) {
      message.line = BigInt(object.line.toString());
    }
    message.function = object.function ?? "";
    return message;
  },
  fromSDK(object: LogEntrySourceLocationSDKType): LogEntrySourceLocation {
    return {
      file: object?.file,
      line: object?.line,
      function: object?.function
    };
  },
  toSDK(message: LogEntrySourceLocation): LogEntrySourceLocationSDKType {
    const obj: any = {};
    obj.file = message.file;
    obj.line = message.line;
    obj.function = message.function;
    return obj;
  },
  fromAmino(object: LogEntrySourceLocationAmino): LogEntrySourceLocation {
    return {
      file: object.file,
      line: BigInt(object.line),
      function: object.function
    };
  },
  toAmino(message: LogEntrySourceLocation, useInterfaces: boolean = true): LogEntrySourceLocationAmino {
    const obj: any = {};
    obj.file = message.file;
    obj.line = message.line ? message.line.toString() : undefined;
    obj.function = message.function;
    return obj;
  },
  fromProtoMsg(message: LogEntrySourceLocationProtoMsg, useInterfaces: boolean = true): LogEntrySourceLocation {
    return LogEntrySourceLocation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntrySourceLocation): Uint8Array {
    return LogEntrySourceLocation.encode(message).finish();
  },
  toProtoMsg(message: LogEntrySourceLocation): LogEntrySourceLocationProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.LogEntrySourceLocation",
      value: LogEntrySourceLocation.encode(message).finish()
    };
  }
};