import { MonitoredResource } from "../../api/monitored_resource";
import { Any } from "../../protobuf/any";
import { Struct } from "../../protobuf/struct";
import { Timestamp } from "../../protobuf/timestamp";
import { LogSeverity, logSeverityFromJSON, logSeverityToJSON } from "../type/log_severity";
import { HttpRequest } from "../type/http_request";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, isObject, Long } from "@osmonauts/helpers";
export interface LogEntry_LabelsEntry {
  key: string;
  value: string;
}

function createBaseLogEntry_LabelsEntry(): LogEntry_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const LogEntry_LabelsEntry = {
  encode(message: LogEntry_LabelsEntry, writer = _m0.Writer.create()): _m0.Writer {
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
export interface LogEntry {
  logName: string;
  resource: MonitoredResource;
  protoPayload?: Any;
  textPayload?: string;
  jsonPayload?: Struct;
  timestamp: Date;
  receiveTimestamp: Date;
  severity: LogSeverity;
  insertId: string;
  httpRequest: HttpRequest;
  labels: {
    [key: string]: string;
  };
  operation: LogEntryOperation;
  trace: string;
  spanId: string;
  traceSampled: boolean;
  sourceLocation: LogEntrySourceLocation;
  split: LogSplit;
}

function createBaseLogEntry(): LogEntry {
  return {
    logName: "",
    resource: undefined,
    protoPayload: undefined,
    textPayload: undefined,
    jsonPayload: undefined,
    timestamp: undefined,
    receiveTimestamp: undefined,
    severity: undefined,
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
  encode(message: LogEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.logName !== "") {
      writer.uint32(98).string(message.logName);
    }

    if (message.resource !== undefined) {
      MonitoredResource.encode(message.resource, writer.uint32(66).fork()).ldelim();
    }

    if (message.protoPayload !== undefined) {
      Any.encode(message.protoPayload, writer.uint32(18).fork()).ldelim();
    }

    if (message.textPayload !== "") {
      writer.uint32(26).string(message.textPayload);
    }

    if (message.jsonPayload !== undefined) {
      Struct.encode(message.jsonPayload, writer.uint32(50).fork()).ldelim();
    }

    if (message.timestamp !== undefined) Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(74).fork()).ldelim();
    if (message.receiveTimestamp !== undefined) Timestamp.encode(toTimestamp(message.receiveTimestamp), writer.uint32(194).fork()).ldelim();

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
      textPayload: isSet(object.textPayload) ? String(object.textPayload) : "",
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
    message.textPayload = object.textPayload ?? "";
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
export interface LogEntryOperation {
  id: string;
  producer: string;
  first: boolean;
  last: boolean;
}

function createBaseLogEntryOperation(): LogEntryOperation {
  return {
    id: "",
    producer: "",
    first: false,
    last: false
  };
}

export const LogEntryOperation = {
  encode(message: LogEntryOperation, writer = _m0.Writer.create()): _m0.Writer {
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
export interface LogEntrySourceLocation {
  file: string;
  line: Long;
  function: string;
}

function createBaseLogEntrySourceLocation(): LogEntrySourceLocation {
  return {
    file: "",
    line: Long.ZERO,
    function: ""
  };
}

export const LogEntrySourceLocation = {
  encode(message: LogEntrySourceLocation, writer = _m0.Writer.create()): _m0.Writer {
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
export interface LogSplit {
  uid: string;
  index: number;
  totalSplits: number;
}

function createBaseLogSplit(): LogSplit {
  return {
    uid: "",
    index: 0,
    totalSplits: 0
  };
}

export const LogSplit = {
  encode(message: LogSplit, writer = _m0.Writer.create()): _m0.Writer {
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