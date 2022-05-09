import { MetricDescriptor } from "../../api/metric";
import { Timestamp } from "../../protobuf/timestamp";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export interface LogMetric_StringMapEntry {
  key: string;
  value: string;
}

function createBaseLogMetric_StringMapEntry(): LogMetric_StringMapEntry {
  return {
    key: "",
    value: ""
  };
}

export const LogMetric_StringMapEntry = {
  encode(message: LogMetric_StringMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogMetric_StringMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogMetric_StringMapEntry();

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

  fromJSON(object: any): LogMetric_StringMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: LogMetric_StringMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogMetric_StringMapEntry>, I>>(object: I): LogMetric_StringMapEntry {
    const message = createBaseLogMetric_StringMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface LogMetric {
  name: string;
  description: string;
  filter: string;
  disabled: boolean;
  metricDescriptor: MetricDescriptor;
  valueExtractor: string;
  labelExtractors: {
    [key: string]: string;
  };
  createTime: Date;
  updateTime: Date;
  version: ApiVersion;
}

function createBaseLogMetric(): LogMetric {
  return {
    name: "",
    description: "",
    filter: "",
    disabled: false,
    metricDescriptor: undefined,
    valueExtractor: "",
    labelExtractors: "",
    createTime: undefined,
    updateTime: undefined,
    version: undefined
  };
}

export const LogMetric = {
  encode(message: LogMetric, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }

    if (message.disabled === true) {
      writer.uint32(96).bool(message.disabled);
    }

    if (message.metricDescriptor !== undefined) {
      MetricDescriptor.encode(message.metricDescriptor, writer.uint32(42).fork()).ldelim();
    }

    if (message.valueExtractor !== "") {
      writer.uint32(50).string(message.valueExtractor);
    }

    Object.entries(message.labelExtractors).forEach(([key, value]) => {
      LogMetric_LabelExtractorsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(58).fork()).ldelim();
    });
    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(74).fork()).ldelim();
    if (message.updateTime !== undefined) Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(82).fork()).ldelim();

    if (message.version !== 0) {
      writer.uint32(32).int32(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogMetric();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.filter = reader.string();
          break;

        case 12:
          message.disabled = reader.bool();
          break;

        case 5:
          message.metricDescriptor = MetricDescriptor.decode(reader, reader.uint32());
          break;

        case 6:
          message.valueExtractor = reader.string();
          break;

        case 7:
          const entry7 = LogMetric_LabelExtractorsMapEntry.decode(reader, reader.uint32());

          if (entry7.value !== undefined) {
            message.labelExtractors[entry7.key] = entry7.value;
          }

          break;

        case 9:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.version = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogMetric {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      metricDescriptor: isSet(object.metricDescriptor) ? MetricDescriptor.fromJSON(object.metricDescriptor) : undefined,
      valueExtractor: isSet(object.valueExtractor) ? String(object.valueExtractor) : "",
      labelExtractors: isObject(object.labelExtractors) ? Object.entries(object.labelExtractors).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      version: isSet(object.version) ? logMetric_ApiVersionFromJSON(object.version) : 0
    };
  },

  toJSON(message: LogMetric): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.filter !== undefined && (obj.filter = message.filter);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.metricDescriptor !== undefined && (obj.metricDescriptor = message.metricDescriptor ? MetricDescriptor.toJSON(message.metricDescriptor) : undefined);
    message.valueExtractor !== undefined && (obj.valueExtractor = message.valueExtractor);
    obj.labelExtractors = {};

    if (message.labelExtractors) {
      Object.entries(message.labelExtractors).forEach(([k, v]) => {
        obj.labelExtractors[k] = v;
      });
    }

    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.version !== undefined && (obj.version = logMetric_ApiVersionToJSON(message.version));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogMetric>, I>>(object: I): LogMetric {
    const message = createBaseLogMetric();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filter = object.filter ?? "";
    message.disabled = object.disabled ?? false;
    message.metricDescriptor = object.metricDescriptor !== undefined && object.metricDescriptor !== null ? MetricDescriptor.fromPartial(object.metricDescriptor) : undefined;
    message.valueExtractor = object.valueExtractor ?? "";
    message.labelExtractors = Object.entries(object.labelExtractors ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.version = object.version ?? 0;
    return message;
  }

};
export enum ApiVersion {
  /*Logging API v2.*/
  V2 = 0,

  /*Logging API v1.*/
  V1 = 1,
  UNRECOGNIZED = -1,
}
export function apiVersionFromJSON(object: any): ApiVersion {
  switch (object) {
    case "V2":
      return ApiVersion.V2;

    case "V1":
      return ApiVersion.V1;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ApiVersion.UNRECOGNIZED;
  }
}
export function apiVersionToJSON(object: ApiVersion): string {
  switch (object) {
    case ApiVersion.V2:
      return "V2";

    case ApiVersion.V1:
      return "V1";

    default:
      return "UNKNOWN";
  }
}
export interface ListLogMetricsRequest {
  parent: string;
  pageToken: string;
  pageSize: number;
}

function createBaseListLogMetricsRequest(): ListLogMetricsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}

export const ListLogMetricsRequest = {
  encode(message: ListLogMetricsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }

    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogMetricsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogMetricsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.pageToken = reader.string();
          break;

        case 3:
          message.pageSize = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListLogMetricsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },

  toJSON(message: ListLogMetricsRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLogMetricsRequest>, I>>(object: I): ListLogMetricsRequest {
    const message = createBaseListLogMetricsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  }

};
export interface ListLogMetricsResponse {
  metrics: LogMetric[];
  nextPageToken: string;
}

function createBaseListLogMetricsResponse(): ListLogMetricsResponse {
  return {
    metrics: [],
    nextPageToken: ""
  };
}

export const ListLogMetricsResponse = {
  encode(message: ListLogMetricsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.metrics) {
      LogMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListLogMetricsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLogMetricsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metrics.push(LogMetric.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListLogMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => LogMetric.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListLogMetricsResponse): unknown {
    const obj: any = {};

    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? LogMetric.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListLogMetricsResponse>, I>>(object: I): ListLogMetricsResponse {
    const message = createBaseListLogMetricsResponse();
    message.metrics = object.metrics?.map(e => LogMetric.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface GetLogMetricRequest {
  metricName: string;
}

function createBaseGetLogMetricRequest(): GetLogMetricRequest {
  return {
    metricName: ""
  };
}

export const GetLogMetricRequest = {
  encode(message: GetLogMetricRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLogMetricRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetLogMetricRequest {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : ""
    };
  },

  toJSON(message: GetLogMetricRequest): unknown {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLogMetricRequest>, I>>(object: I): GetLogMetricRequest {
    const message = createBaseGetLogMetricRequest();
    message.metricName = object.metricName ?? "";
    return message;
  }

};
export interface CreateLogMetricRequest {
  parent: string;
  metric: LogMetric;
}

function createBaseCreateLogMetricRequest(): CreateLogMetricRequest {
  return {
    parent: "",
    metric: undefined
  };
}

export const CreateLogMetricRequest = {
  encode(message: CreateLogMetricRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.metric !== undefined) {
      LogMetric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLogMetricRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.metric = LogMetric.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateLogMetricRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      metric: isSet(object.metric) ? LogMetric.fromJSON(object.metric) : undefined
    };
  },

  toJSON(message: CreateLogMetricRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toJSON(message.metric) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateLogMetricRequest>, I>>(object: I): CreateLogMetricRequest {
    const message = createBaseCreateLogMetricRequest();
    message.parent = object.parent ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? LogMetric.fromPartial(object.metric) : undefined;
    return message;
  }

};
export interface UpdateLogMetricRequest {
  metricName: string;
  metric: LogMetric;
}

function createBaseUpdateLogMetricRequest(): UpdateLogMetricRequest {
  return {
    metricName: "",
    metric: undefined
  };
}

export const UpdateLogMetricRequest = {
  encode(message: UpdateLogMetricRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }

    if (message.metric !== undefined) {
      LogMetric.encode(message.metric, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateLogMetricRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;

        case 2:
          message.metric = LogMetric.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateLogMetricRequest {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : "",
      metric: isSet(object.metric) ? LogMetric.fromJSON(object.metric) : undefined
    };
  },

  toJSON(message: UpdateLogMetricRequest): unknown {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    message.metric !== undefined && (obj.metric = message.metric ? LogMetric.toJSON(message.metric) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateLogMetricRequest>, I>>(object: I): UpdateLogMetricRequest {
    const message = createBaseUpdateLogMetricRequest();
    message.metricName = object.metricName ?? "";
    message.metric = object.metric !== undefined && object.metric !== null ? LogMetric.fromPartial(object.metric) : undefined;
    return message;
  }

};
export interface DeleteLogMetricRequest {
  metricName: string;
}

function createBaseDeleteLogMetricRequest(): DeleteLogMetricRequest {
  return {
    metricName: ""
  };
}

export const DeleteLogMetricRequest = {
  encode(message: DeleteLogMetricRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.metricName !== "") {
      writer.uint32(10).string(message.metricName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteLogMetricRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metricName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteLogMetricRequest {
    return {
      metricName: isSet(object.metricName) ? String(object.metricName) : ""
    };
  },

  toJSON(message: DeleteLogMetricRequest): unknown {
    const obj: any = {};
    message.metricName !== undefined && (obj.metricName = message.metricName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLogMetricRequest>, I>>(object: I): DeleteLogMetricRequest {
    const message = createBaseDeleteLogMetricRequest();
    message.metricName = object.metricName ?? "";
    return message;
  }

};