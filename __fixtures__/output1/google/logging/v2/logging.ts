import { MonitoredResource, MonitoredResourceDescriptor } from "../../api/monitored_resource";
import { LogEntry } from "./log_entry";
import { Duration } from "../../protobuf/duration";
import { Status } from "../../rpc/status";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, isObject, toDuration, fromDuration } from "@osmonauts/helpers";
export interface DeleteLogRequest {
  logName: string;
}

function createBaseDeleteLogRequest(): DeleteLogRequest {
  return {
    logName: ""
  };
}

export const DeleteLogRequest = {
  encode(message: DeleteLogRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.logName !== "") {
      writer.uint32(10).string(message.logName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLogRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.logName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteLogRequest {
    return {
      logName: isSet(object.logName) ? String(object.logName) : ""
    };
  },

  toJSON(message: DeleteLogRequest): unknown {
    const obj: any = {};
    message.logName !== undefined && (obj.logName = message.logName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLogRequest>, I>>(object: I): DeleteLogRequest {
    const message = createBaseDeleteLogRequest();
    message.logName = object.logName ?? "";
    return message;
  }

};
export interface WriteLogEntriesRequest_StringMapEntry {
  key: string;
  value: string;
}

function createBaseWriteLogEntriesRequest_StringMapEntry(): WriteLogEntriesRequest_StringMapEntry {
  return {
    key: "",
    value: ""
  };
}

export const WriteLogEntriesRequest_StringMapEntry = {
  encode(message: WriteLogEntriesRequest_StringMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesRequest_StringMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesRequest_StringMapEntry();

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

  fromJSON(object: any): WriteLogEntriesRequest_StringMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: WriteLogEntriesRequest_StringMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteLogEntriesRequest_StringMapEntry>, I>>(object: I): WriteLogEntriesRequest_StringMapEntry {
    const message = createBaseWriteLogEntriesRequest_StringMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface WriteLogEntriesRequest {
  logName: string;
  resource: MonitoredResource;
  labels: {
    [key: string]: string;
  };
  entries: LogEntry[];
  partialSuccess: boolean;
  dryRun: boolean;
}

function createBaseWriteLogEntriesRequest(): WriteLogEntriesRequest {
  return {
    logName: "",
    resource: undefined,
    labels: "",
    entries: [],
    partialSuccess: false,
    dryRun: false
  };
}

export const WriteLogEntriesRequest = {
  encode(message: WriteLogEntriesRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.logName !== "") {
      writer.uint32(10).string(message.logName);
    }

    if (message.resource !== undefined) {
      MonitoredResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      WriteLogEntriesRequest_LabelsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });

    for (const v of message.entries) {
      LogEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.partialSuccess === true) {
      writer.uint32(40).bool(message.partialSuccess);
    }

    if (message.dryRun === true) {
      writer.uint32(48).bool(message.dryRun);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.logName = reader.string();
          break;

        case 2:
          message.resource = MonitoredResource.decode(reader, reader.uint32());
          break;

        case 3:
          const entry3 = WriteLogEntriesRequest_LabelsMapEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }

          break;

        case 4:
          message.entries.push(LogEntry.decode(reader, reader.uint32()));
          break;

        case 5:
          message.partialSuccess = reader.bool();
          break;

        case 6:
          message.dryRun = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WriteLogEntriesRequest {
    return {
      logName: isSet(object.logName) ? String(object.logName) : "",
      resource: isSet(object.resource) ? MonitoredResource.fromJSON(object.resource) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => LogEntry.fromJSON(e)) : [],
      partialSuccess: isSet(object.partialSuccess) ? Boolean(object.partialSuccess) : false,
      dryRun: isSet(object.dryRun) ? Boolean(object.dryRun) : false
    };
  },

  toJSON(message: WriteLogEntriesRequest): unknown {
    const obj: any = {};
    message.logName !== undefined && (obj.logName = message.logName);
    message.resource !== undefined && (obj.resource = message.resource ? MonitoredResource.toJSON(message.resource) : undefined);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? LogEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    message.partialSuccess !== undefined && (obj.partialSuccess = message.partialSuccess);
    message.dryRun !== undefined && (obj.dryRun = message.dryRun);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteLogEntriesRequest>, I>>(object: I): WriteLogEntriesRequest {
    const message = createBaseWriteLogEntriesRequest();
    message.logName = object.logName ?? "";
    message.resource = object.resource !== undefined && object.resource !== null ? MonitoredResource.fromPartial(object.resource) : undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.entries = object.entries?.map(e => LogEntry.fromPartial(e)) || [];
    message.partialSuccess = object.partialSuccess ?? false;
    message.dryRun = object.dryRun ?? false;
    return message;
  }

};
export interface WriteLogEntriesResponse {}

function createBaseWriteLogEntriesResponse(): WriteLogEntriesResponse {
  return {};
}

export const WriteLogEntriesResponse = {
  encode(message: WriteLogEntriesResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WriteLogEntriesResponse {
    return {};
  },

  toJSON(message: WriteLogEntriesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteLogEntriesResponse>, I>>(object: I): WriteLogEntriesResponse {
    const message = createBaseWriteLogEntriesResponse();
    return message;
  }

};
export interface WriteLogEntriesPartialErrors_StatusMapEntry {
  key: number;
  value: Status;
}

function createBaseWriteLogEntriesPartialErrors_StatusMapEntry(): WriteLogEntriesPartialErrors_StatusMapEntry {
  return {
    key: 0,
    value: undefined
  };
}

export const WriteLogEntriesPartialErrors_StatusMapEntry = {
  encode(message: WriteLogEntriesPartialErrors_StatusMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }

    if (message.value !== undefined) {
      google.rpc.Status.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesPartialErrors_StatusMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesPartialErrors_StatusMapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;

        case 2:
          message.value = google.rpc.Status.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WriteLogEntriesPartialErrors_StatusMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? google.rpc.Status.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: WriteLogEntriesPartialErrors_StatusMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? google.rpc.Status.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteLogEntriesPartialErrors_StatusMapEntry>, I>>(object: I): WriteLogEntriesPartialErrors_StatusMapEntry {
    const message = createBaseWriteLogEntriesPartialErrors_StatusMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value !== undefined && object.value !== null ? google.rpc.Status.fromPartial(object.value) : undefined;
    return message;
  }

};
export interface WriteLogEntriesPartialErrors {
  logEntryErrors: {
    [key: number]: Status;
  };
}

function createBaseWriteLogEntriesPartialErrors(): WriteLogEntriesPartialErrors {
  return {
    logEntryErrors: undefined
  };
}

export const WriteLogEntriesPartialErrors = {
  encode(message: WriteLogEntriesPartialErrors, writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.logEntryErrors).forEach(([key, value]) => {
      WriteLogEntriesPartialErrors_LogEntryErrorsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteLogEntriesPartialErrors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteLogEntriesPartialErrors();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = WriteLogEntriesPartialErrors_LogEntryErrorsMapEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.logEntryErrors[entry1.key] = entry1.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WriteLogEntriesPartialErrors {
    return {
      logEntryErrors: isObject(object.logEntryErrors) ? Object.entries(object.logEntryErrors).reduce<{
        [key: number]: Status;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Status.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: WriteLogEntriesPartialErrors): unknown {
    const obj: any = {};
    obj.logEntryErrors = {};

    if (message.logEntryErrors) {
      Object.entries(message.logEntryErrors).forEach(([k, v]) => {
        obj.logEntryErrors[k] = Status.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WriteLogEntriesPartialErrors>, I>>(object: I): WriteLogEntriesPartialErrors {
    const message = createBaseWriteLogEntriesPartialErrors();
    message.logEntryErrors = Object.entries(object.logEntryErrors ?? {}).reduce<{
      [key: number]: Status;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Status.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface ListLogEntriesRequest {
  resourceNames: string[];
  filter: string;
  orderBy: string;
  pageSize: number;
  pageToken: string;
}

function createBaseListLogEntriesRequest(): ListLogEntriesRequest {
  return {
    resourceNames: [],
    filter: "",
    orderBy: "",
    pageSize: 0,
    pageToken: ""
  };
}

export const ListLogEntriesRequest = {
  encode(message: ListLogEntriesRequest, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceNames) {
      writer.uint32(66).string(v!);
    }

    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }

    if (message.orderBy !== "") {
      writer.uint32(26).string(message.orderBy);
    }

    if (message.pageSize !== 0) {
      writer.uint32(32).int32(message.pageSize);
    }

    if (message.pageToken !== "") {
      writer.uint32(42).string(message.pageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogEntriesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 8:
          message.resourceNames.push(reader.string());

        case 2:
          message.filter = reader.string();
          break;

        case 3:
          message.orderBy = reader.string();
          break;

        case 4:
          message.pageSize = reader.int32();
          break;

        case 5:
          message.pageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListLogEntriesRequest {
    return {
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : [],
      filter: isSet(object.filter) ? String(object.filter) : "",
      orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : ""
    };
  },

  toJSON(message: ListLogEntriesRequest): unknown {
    const obj: any = {};

    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }

    message.filter !== undefined && (obj.filter = message.filter);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLogEntriesRequest>, I>>(object: I): ListLogEntriesRequest {
    const message = createBaseListLogEntriesRequest();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  }

};
export interface ListLogEntriesResponse {
  entries: LogEntry[];
  nextPageToken: string;
}

function createBaseListLogEntriesResponse(): ListLogEntriesResponse {
  return {
    entries: [],
    nextPageToken: ""
  };
}

export const ListLogEntriesResponse = {
  encode(message: ListLogEntriesResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      LogEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogEntriesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(LogEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextPageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListLogEntriesResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => LogEntry.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListLogEntriesResponse): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? LogEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLogEntriesResponse>, I>>(object: I): ListLogEntriesResponse {
    const message = createBaseListLogEntriesResponse();
    message.entries = object.entries?.map(e => LogEntry.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface ListMonitoredResourceDescriptorsRequest {
  pageSize: number;
  pageToken: string;
}

function createBaseListMonitoredResourceDescriptorsRequest(): ListMonitoredResourceDescriptorsRequest {
  return {
    pageSize: 0,
    pageToken: ""
  };
}

export const ListMonitoredResourceDescriptorsRequest = {
  encode(message: ListMonitoredResourceDescriptorsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).int32(message.pageSize);
    }

    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMonitoredResourceDescriptorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMonitoredResourceDescriptorsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pageSize = reader.int32();
          break;

        case 2:
          message.pageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListMonitoredResourceDescriptorsRequest {
    return {
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : ""
    };
  },

  toJSON(message: ListMonitoredResourceDescriptorsRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMonitoredResourceDescriptorsRequest>, I>>(object: I): ListMonitoredResourceDescriptorsRequest {
    const message = createBaseListMonitoredResourceDescriptorsRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  }

};
export interface ListMonitoredResourceDescriptorsResponse {
  resourceDescriptors: MonitoredResourceDescriptor[];
  nextPageToken: string;
}

function createBaseListMonitoredResourceDescriptorsResponse(): ListMonitoredResourceDescriptorsResponse {
  return {
    resourceDescriptors: [],
    nextPageToken: ""
  };
}

export const ListMonitoredResourceDescriptorsResponse = {
  encode(message: ListMonitoredResourceDescriptorsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceDescriptors) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMonitoredResourceDescriptorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMonitoredResourceDescriptorsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceDescriptors.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nextPageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListMonitoredResourceDescriptorsResponse {
    return {
      resourceDescriptors: Array.isArray(object?.resourceDescriptors) ? object.resourceDescriptors.map((e: any) => MonitoredResourceDescriptor.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListMonitoredResourceDescriptorsResponse): unknown {
    const obj: any = {};

    if (message.resourceDescriptors) {
      obj.resourceDescriptors = message.resourceDescriptors.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.resourceDescriptors = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMonitoredResourceDescriptorsResponse>, I>>(object: I): ListMonitoredResourceDescriptorsResponse {
    const message = createBaseListMonitoredResourceDescriptorsResponse();
    message.resourceDescriptors = object.resourceDescriptors?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface ListLogsRequest {
  parent: string;
  pageSize: number;
  pageToken: string;
  resourceNames: string[];
}

function createBaseListLogsRequest(): ListLogsRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    resourceNames: []
  };
}

export const ListLogsRequest = {
  encode(message: ListLogsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }

    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }

    for (const v of message.resourceNames) {
      writer.uint32(66).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.pageSize = reader.int32();
          break;

        case 3:
          message.pageToken = reader.string();
          break;

        case 8:
          message.resourceNames.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListLogsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ListLogsRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);

    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLogsRequest>, I>>(object: I): ListLogsRequest {
    const message = createBaseListLogsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    return message;
  }

};
export interface ListLogsResponse {
  logNames: string[];
  nextPageToken: string;
}

function createBaseListLogsResponse(): ListLogsResponse {
  return {
    logNames: [],
    nextPageToken: ""
  };
}

export const ListLogsResponse = {
  encode(message: ListLogsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logNames) {
      writer.uint32(26).string(v!);
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 3:
          message.logNames.push(reader.string());

        case 2:
          message.nextPageToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListLogsResponse {
    return {
      logNames: Array.isArray(object?.logNames) ? object.logNames.map((e: any) => String(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListLogsResponse): unknown {
    const obj: any = {};

    if (message.logNames) {
      obj.logNames = message.logNames.map(e => e);
    } else {
      obj.logNames = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLogsResponse>, I>>(object: I): ListLogsResponse {
    const message = createBaseListLogsResponse();
    message.logNames = object.logNames?.map(e => e) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface TailLogEntriesRequest {
  resourceNames: string[];
  filter: string;
  bufferWindow: string;
}

function createBaseTailLogEntriesRequest(): TailLogEntriesRequest {
  return {
    resourceNames: [],
    filter: "",
    bufferWindow: undefined
  };
}

export const TailLogEntriesRequest = {
  encode(message: TailLogEntriesRequest, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceNames) {
      writer.uint32(10).string(v!);
    }

    if (message.filter !== "") {
      writer.uint32(18).string(message.filter);
    }

    if (message.bufferWindow !== undefined) Duration.encode(toDuration(message.bufferWindow), writer.uint32(26).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TailLogEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTailLogEntriesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceNames.push(reader.string());

        case 2:
          message.filter = reader.string();
          break;

        case 3:
          message.bufferWindow = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TailLogEntriesRequest {
    return {
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : [],
      filter: isSet(object.filter) ? String(object.filter) : "",
      bufferWindow: isSet(object.bufferWindow) ? String(object.bufferWindow) : undefined
    };
  },

  toJSON(message: TailLogEntriesRequest): unknown {
    const obj: any = {};

    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }

    message.filter !== undefined && (obj.filter = message.filter);
    message.bufferWindow !== undefined && (obj.bufferWindow = message.bufferWindow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TailLogEntriesRequest>, I>>(object: I): TailLogEntriesRequest {
    const message = createBaseTailLogEntriesRequest();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    message.filter = object.filter ?? "";
    message.bufferWindow = object.bufferWindow ?? undefined;
    return message;
  }

};
export interface TailLogEntriesResponse {
  entries: LogEntry[];
  suppressionInfo: TailLogEntriesResponse_SuppressionInfo[];
}

function createBaseTailLogEntriesResponse(): TailLogEntriesResponse {
  return {
    entries: [],
    suppressionInfo: []
  };
}

export const TailLogEntriesResponse = {
  encode(message: TailLogEntriesResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      LogEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.suppressionInfo) {
      TailLogEntriesResponse_SuppressionInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TailLogEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTailLogEntriesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(LogEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.suppressionInfo.push(TailLogEntriesResponse_SuppressionInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TailLogEntriesResponse {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => LogEntry.fromJSON(e)) : [],
      suppressionInfo: Array.isArray(object?.suppressionInfo) ? object.suppressionInfo.map((e: any) => TailLogEntriesResponse_SuppressionInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: TailLogEntriesResponse): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? LogEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    if (message.suppressionInfo) {
      obj.suppressionInfo = message.suppressionInfo.map(e => e ? TailLogEntriesResponse_SuppressionInfo.toJSON(e) : undefined);
    } else {
      obj.suppressionInfo = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TailLogEntriesResponse>, I>>(object: I): TailLogEntriesResponse {
    const message = createBaseTailLogEntriesResponse();
    message.entries = object.entries?.map(e => LogEntry.fromPartial(e)) || [];
    message.suppressionInfo = object.suppressionInfo?.map(e => SuppressionInfo.fromPartial(e)) || [];
    return message;
  }

};
export interface TailLogEntriesResponse_SuppressionInfo {
  reason: SuppressionInfo_TailLogEntriesResponse_Reason;
  suppressedCount: number;
}

function createBaseTailLogEntriesResponse_SuppressionInfo(): TailLogEntriesResponse_SuppressionInfo {
  return {
    reason: undefined,
    suppressedCount: 0
  };
}

export const TailLogEntriesResponse_SuppressionInfo = {
  encode(message: TailLogEntriesResponse_SuppressionInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }

    if (message.suppressedCount !== 0) {
      writer.uint32(16).int32(message.suppressedCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TailLogEntriesResponse_SuppressionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTailLogEntriesResponse_SuppressionInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reason = (reader.int32() as any);
          break;

        case 2:
          message.suppressedCount = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TailLogEntriesResponse_SuppressionInfo {
    return {
      reason: isSet(object.reason) ? suppressionInfo_TailLogEntriesResponse_ReasonFromJSON(object.reason) : 0,
      suppressedCount: isSet(object.suppressedCount) ? Number(object.suppressedCount) : 0
    };
  },

  toJSON(message: TailLogEntriesResponse_SuppressionInfo): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = suppressionInfo_TailLogEntriesResponse_ReasonToJSON(message.reason));
    message.suppressedCount !== undefined && (obj.suppressedCount = Math.round(message.suppressedCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TailLogEntriesResponse_SuppressionInfo>, I>>(object: I): TailLogEntriesResponse_SuppressionInfo {
    const message = createBaseTailLogEntriesResponse_SuppressionInfo();
    message.reason = object.reason ?? 0;
    message.suppressedCount = object.suppressedCount ?? 0;
    return message;
  }

};
export enum Reason {
  /*Unexpected default.*/
  REASON_UNSPECIFIED = 0,

  /*Indicates suppression occurred due to relevant entries being
  received in excess of rate limits. For quotas and limits, see
  [Logging API quotas and
  limits](https://cloud.google.com/logging/quotas#api-limits).*/
  RATE_LIMIT = 1,

  /*Indicates suppression occurred due to the client not consuming
  responses quickly enough.*/
  NOT_CONSUMED = 2,
  UNRECOGNIZED = -1,
}
export function reasonFromJSON(object: any): Reason {
  switch (object) {
    case "REASON_UNSPECIFIED":
      return Reason.REASON_UNSPECIFIED;

    case "RATE_LIMIT":
      return Reason.RATE_LIMIT;

    case "NOT_CONSUMED":
      return Reason.NOT_CONSUMED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Reason.UNRECOGNIZED;
  }
}
export function reasonToJSON(object: Reason): string {
  switch (object) {
    case Reason.REASON_UNSPECIFIED:
      return "REASON_UNSPECIFIED";

    case Reason.RATE_LIMIT:
      return "RATE_LIMIT";

    case Reason.NOT_CONSUMED:
      return "NOT_CONSUMED";

    default:
      return "UNKNOWN";
  }
}