import { _m0 } from "protobuf/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, Long } from "@osmonauts/helpers";
import { FieldMask } from "../../protobuf/field_mask";
import { Timestamp } from "../../protobuf/timestamp";
export interface LogBucket {
  name: string;
  description: string;
  createTime: Date;
  updateTime: Date;
  retentionDays: number;
  locked: boolean;
  lifecycleState: LifecycleState;
  restrictedFields: string[];
  cmekSettings: CmekSettings;
}

function createBaseLogBucket(): LogBucket {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    retentionDays: 0,
    locked: false,
    lifecycleState: undefined,
    restrictedFields: [],
    cmekSettings: undefined
  };
}

export const LogBucket = {
  encode(message: LogBucket, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    if (message.updateTime !== undefined) Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();

    if (message.retentionDays !== 0) {
      writer.uint32(88).int32(message.retentionDays);
    }

    if (message.locked === true) {
      writer.uint32(72).bool(message.locked);
    }

    if (message.lifecycleState !== 0) {
      writer.uint32(96).int32(message.lifecycleState);
    }

    for (const v of message.restrictedFields) {
      writer.uint32(122).string(v!);
    }

    if (message.cmekSettings !== undefined) {
      CmekSettings.encode(message.cmekSettings, writer.uint32(154).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): LogBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogBucket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 11:
          message.retentionDays = reader.int32();
          break;

        case 9:
          message.locked = reader.bool();
          break;

        case 12:
          message.lifecycleState = (reader.int32() as any);
          break;

        case 15:
          message.restrictedFields.push(reader.string());

        case 19:
          message.cmekSettings = CmekSettings.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogBucket {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      retentionDays: isSet(object.retentionDays) ? Number(object.retentionDays) : 0,
      locked: isSet(object.locked) ? Boolean(object.locked) : false,
      lifecycleState: isSet(object.lifecycleState) ? lifecycleStateFromJSON(object.lifecycleState) : 0,
      restrictedFields: Array.isArray(object?.restrictedFields) ? object.restrictedFields.map((e: any) => String(e)) : [],
      cmekSettings: isSet(object.cmekSettings) ? CmekSettings.fromJSON(object.cmekSettings) : undefined
    };
  },

  toJSON(message: LogBucket): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.retentionDays !== undefined && (obj.retentionDays = Math.round(message.retentionDays));
    message.locked !== undefined && (obj.locked = message.locked);
    message.lifecycleState !== undefined && (obj.lifecycleState = lifecycleStateToJSON(message.lifecycleState));

    if (message.restrictedFields) {
      obj.restrictedFields = message.restrictedFields.map(e => e);
    } else {
      obj.restrictedFields = [];
    }

    message.cmekSettings !== undefined && (obj.cmekSettings = message.cmekSettings ? CmekSettings.toJSON(message.cmekSettings) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogBucket>, I>>(object: I): LogBucket {
    const message = createBaseLogBucket();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.retentionDays = object.retentionDays ?? 0;
    message.locked = object.locked ?? false;
    message.lifecycleState = object.lifecycleState ?? 0;
    message.restrictedFields = object.restrictedFields?.map(e => e) || [];
    message.cmekSettings = object.cmekSettings !== undefined && object.cmekSettings !== null ? CmekSettings.fromPartial(object.cmekSettings) : undefined;
    return message;
  }

};
export interface LogView {
  name: string;
  description: string;
  createTime: Date;
  updateTime: Date;
  filter: string;
}

function createBaseLogView(): LogView {
  return {
    name: "",
    description: "",
    createTime: undefined,
    updateTime: undefined,
    filter: ""
  };
}

export const LogView = {
  encode(message: LogView, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    if (message.updateTime !== undefined) Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();

    if (message.filter !== "") {
      writer.uint32(58).string(message.filter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): LogView {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogView();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.filter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogView {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },

  toJSON(message: LogView): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogView>, I>>(object: I): LogView {
    const message = createBaseLogView();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.filter = object.filter ?? "";
    return message;
  }

};
export interface LogSink {
  name: string;
  destination: string;
  filter: string;
  description: string;
  disabled: boolean;
  exclusions: LogExclusion[];
  outputVersionFormat: VersionFormat;
  writerIdentity: string;
  includeChildren: boolean;
  bigqueryOptions?: BigQueryOptions;
  createTime: Date;
  updateTime: Date;
}

function createBaseLogSink(): LogSink {
  return {
    name: "",
    destination: "",
    filter: "",
    description: "",
    disabled: false,
    exclusions: [],
    outputVersionFormat: undefined,
    writerIdentity: "",
    includeChildren: false,
    bigqueryOptions: undefined,
    createTime: undefined,
    updateTime: undefined
  };
}

export const LogSink = {
  encode(message: LogSink, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.destination !== "") {
      writer.uint32(26).string(message.destination);
    }

    if (message.filter !== "") {
      writer.uint32(42).string(message.filter);
    }

    if (message.description !== "") {
      writer.uint32(146).string(message.description);
    }

    if (message.disabled === true) {
      writer.uint32(152).bool(message.disabled);
    }

    for (const v of message.exclusions) {
      LogExclusion.encode(v!, writer.uint32(130).fork()).ldelim();
    }

    if (message.outputVersionFormat !== 0) {
      writer.uint32(48).int32(message.outputVersionFormat);
    }

    if (message.writerIdentity !== "") {
      writer.uint32(66).string(message.writerIdentity);
    }

    if (message.includeChildren === true) {
      writer.uint32(72).bool(message.includeChildren);
    }

    if (message.bigqueryOptions !== undefined) {
      BigQueryOptions.encode(message.bigqueryOptions, writer.uint32(98).fork()).ldelim();
    }

    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(106).fork()).ldelim();
    if (message.updateTime !== undefined) Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(114).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): LogSink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogSink();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 3:
          message.destination = reader.string();
          break;

        case 5:
          message.filter = reader.string();
          break;

        case 18:
          message.description = reader.string();
          break;

        case 19:
          message.disabled = reader.bool();
          break;

        case 16:
          message.exclusions.push(LogExclusion.decode(reader, reader.uint32()));
          break;

        case 6:
          message.outputVersionFormat = (reader.int32() as any);
          break;

        case 8:
          message.writerIdentity = reader.string();
          break;

        case 9:
          message.includeChildren = reader.bool();
          break;

        case 12:
          message.bigqueryOptions = BigQueryOptions.decode(reader, reader.uint32());
          break;

        case 13:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 14:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogSink {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      description: isSet(object.description) ? String(object.description) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      exclusions: Array.isArray(object?.exclusions) ? object.exclusions.map((e: any) => LogExclusion.fromJSON(e)) : [],
      outputVersionFormat: isSet(object.outputVersionFormat) ? logSink_VersionFormatFromJSON(object.outputVersionFormat) : 0,
      writerIdentity: isSet(object.writerIdentity) ? String(object.writerIdentity) : "",
      includeChildren: isSet(object.includeChildren) ? Boolean(object.includeChildren) : false,
      bigqueryOptions: isSet(object.bigqueryOptions) ? BigQueryOptions.fromJSON(object.bigqueryOptions) : undefined,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined
    };
  },

  toJSON(message: LogSink): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.destination !== undefined && (obj.destination = message.destination);
    message.filter !== undefined && (obj.filter = message.filter);
    message.description !== undefined && (obj.description = message.description);
    message.disabled !== undefined && (obj.disabled = message.disabled);

    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toJSON(e) : undefined);
    } else {
      obj.exclusions = [];
    }

    message.outputVersionFormat !== undefined && (obj.outputVersionFormat = logSink_VersionFormatToJSON(message.outputVersionFormat));
    message.writerIdentity !== undefined && (obj.writerIdentity = message.writerIdentity);
    message.includeChildren !== undefined && (obj.includeChildren = message.includeChildren);
    message.bigqueryOptions !== undefined && (obj.bigqueryOptions = message.bigqueryOptions ? BigQueryOptions.toJSON(message.bigqueryOptions) : undefined);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogSink>, I>>(object: I): LogSink {
    const message = createBaseLogSink();
    message.name = object.name ?? "";
    message.destination = object.destination ?? "";
    message.filter = object.filter ?? "";
    message.description = object.description ?? "";
    message.disabled = object.disabled ?? false;
    message.exclusions = object.exclusions?.map(e => LogExclusion.fromPartial(e)) || [];
    message.outputVersionFormat = object.outputVersionFormat ?? 0;
    message.writerIdentity = object.writerIdentity ?? "";
    message.includeChildren = object.includeChildren ?? false;
    message.bigqueryOptions = object.bigqueryOptions !== undefined && object.bigqueryOptions !== null ? BigQueryOptions.fromPartial(object.bigqueryOptions) : undefined;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  }

};
export enum LogSink_VersionFormat {
  /*An unspecified format version that will default to V2.*/
  VERSION_FORMAT_UNSPECIFIED = 0,

  /*`LogEntry` version 2 format.*/
  V2 = 1,

  /*`LogEntry` version 1 format.*/
  V1 = 2,
  UNRECOGNIZED = -1,
}
export interface BigQueryOptions {
  usePartitionedTables: boolean;
  usesTimestampColumnPartitioning: boolean;
}

function createBaseBigQueryOptions(): BigQueryOptions {
  return {
    usePartitionedTables: false,
    usesTimestampColumnPartitioning: false
  };
}

export const BigQueryOptions = {
  encode(message: BigQueryOptions, writer = _m0.Writer.create()): _m0.Writer {
    if (message.usePartitionedTables === true) {
      writer.uint32(8).bool(message.usePartitionedTables);
    }

    if (message.usesTimestampColumnPartitioning === true) {
      writer.uint32(24).bool(message.usesTimestampColumnPartitioning);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): BigQueryOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBigQueryOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.usePartitionedTables = reader.bool();
          break;

        case 3:
          message.usesTimestampColumnPartitioning = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BigQueryOptions {
    return {
      usePartitionedTables: isSet(object.usePartitionedTables) ? Boolean(object.usePartitionedTables) : false,
      usesTimestampColumnPartitioning: isSet(object.usesTimestampColumnPartitioning) ? Boolean(object.usesTimestampColumnPartitioning) : false
    };
  },

  toJSON(message: BigQueryOptions): unknown {
    const obj: any = {};
    message.usePartitionedTables !== undefined && (obj.usePartitionedTables = message.usePartitionedTables);
    message.usesTimestampColumnPartitioning !== undefined && (obj.usesTimestampColumnPartitioning = message.usesTimestampColumnPartitioning);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BigQueryOptions>, I>>(object: I): BigQueryOptions {
    const message = createBaseBigQueryOptions();
    message.usePartitionedTables = object.usePartitionedTables ?? false;
    message.usesTimestampColumnPartitioning = object.usesTimestampColumnPartitioning ?? false;
    return message;
  }

};
export interface ListBucketsRequest {
  parent: string;
  pageToken: string;
  pageSize: number;
}

function createBaseListBucketsRequest(): ListBucketsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}

export const ListBucketsRequest = {
  encode(message: ListBucketsRequest, writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array): ListBucketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBucketsRequest();

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

  fromJSON(object: any): ListBucketsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },

  toJSON(message: ListBucketsRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBucketsRequest>, I>>(object: I): ListBucketsRequest {
    const message = createBaseListBucketsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  }

};
export interface ListBucketsResponse {
  buckets: LogBucket[];
  nextPageToken: string;
}

function createBaseListBucketsResponse(): ListBucketsResponse {
  return {
    buckets: [],
    nextPageToken: ""
  };
}

export const ListBucketsResponse = {
  encode(message: ListBucketsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buckets) {
      LogBucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ListBucketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListBucketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buckets.push(LogBucket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListBucketsResponse {
    return {
      buckets: Array.isArray(object?.buckets) ? object.buckets.map((e: any) => LogBucket.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListBucketsResponse): unknown {
    const obj: any = {};

    if (message.buckets) {
      obj.buckets = message.buckets.map(e => e ? LogBucket.toJSON(e) : undefined);
    } else {
      obj.buckets = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListBucketsResponse>, I>>(object: I): ListBucketsResponse {
    const message = createBaseListBucketsResponse();
    message.buckets = object.buckets?.map(e => LogBucket.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface CreateBucketRequest {
  parent: string;
  bucketId: string;
  bucket: LogBucket;
}

function createBaseCreateBucketRequest(): CreateBucketRequest {
  return {
    parent: "",
    bucketId: "",
    bucket: undefined
  };
}

export const CreateBucketRequest = {
  encode(message: CreateBucketRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.bucketId !== "") {
      writer.uint32(18).string(message.bucketId);
    }

    if (message.bucket !== undefined) {
      LogBucket.encode(message.bucket, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CreateBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBucketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.bucketId = reader.string();
          break;

        case 3:
          message.bucket = LogBucket.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateBucketRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      bucketId: isSet(object.bucketId) ? String(object.bucketId) : "",
      bucket: isSet(object.bucket) ? LogBucket.fromJSON(object.bucket) : undefined
    };
  },

  toJSON(message: CreateBucketRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.bucketId !== undefined && (obj.bucketId = message.bucketId);
    message.bucket !== undefined && (obj.bucket = message.bucket ? LogBucket.toJSON(message.bucket) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBucketRequest>, I>>(object: I): CreateBucketRequest {
    const message = createBaseCreateBucketRequest();
    message.parent = object.parent ?? "";
    message.bucketId = object.bucketId ?? "";
    message.bucket = object.bucket !== undefined && object.bucket !== null ? LogBucket.fromPartial(object.bucket) : undefined;
    return message;
  }

};
export interface UpdateBucketRequest {
  name: string;
  bucket: LogBucket;
  updateMask: FieldMask;
}

function createBaseUpdateBucketRequest(): UpdateBucketRequest {
  return {
    name: "",
    bucket: undefined,
    updateMask: undefined
  };
}

export const UpdateBucketRequest = {
  encode(message: UpdateBucketRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.bucket !== undefined) {
      LogBucket.encode(message.bucket, writer.uint32(18).fork()).ldelim();
    }

    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBucketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.bucket = LogBucket.decode(reader, reader.uint32());
          break;

        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateBucketRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      bucket: isSet(object.bucket) ? LogBucket.fromJSON(object.bucket) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined
    };
  },

  toJSON(message: UpdateBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.bucket !== undefined && (obj.bucket = message.bucket ? LogBucket.toJSON(message.bucket) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBucketRequest>, I>>(object: I): UpdateBucketRequest {
    const message = createBaseUpdateBucketRequest();
    message.name = object.name ?? "";
    message.bucket = object.bucket !== undefined && object.bucket !== null ? LogBucket.fromPartial(object.bucket) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  }

};
export interface GetBucketRequest {
  name: string;
}

function createBaseGetBucketRequest(): GetBucketRequest {
  return {
    name: ""
  };
}

export const GetBucketRequest = {
  encode(message: GetBucketRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GetBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBucketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetBucketRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: GetBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBucketRequest>, I>>(object: I): GetBucketRequest {
    const message = createBaseGetBucketRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface DeleteBucketRequest {
  name: string;
}

function createBaseDeleteBucketRequest(): DeleteBucketRequest {
  return {
    name: ""
  };
}

export const DeleteBucketRequest = {
  encode(message: DeleteBucketRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): DeleteBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBucketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteBucketRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: DeleteBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBucketRequest>, I>>(object: I): DeleteBucketRequest {
    const message = createBaseDeleteBucketRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface UndeleteBucketRequest {
  name: string;
}

function createBaseUndeleteBucketRequest(): UndeleteBucketRequest {
  return {
    name: ""
  };
}

export const UndeleteBucketRequest = {
  encode(message: UndeleteBucketRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UndeleteBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteBucketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndeleteBucketRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: UndeleteBucketRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndeleteBucketRequest>, I>>(object: I): UndeleteBucketRequest {
    const message = createBaseUndeleteBucketRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface ListViewsRequest {
  parent: string;
  pageToken: string;
  pageSize: number;
}

function createBaseListViewsRequest(): ListViewsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}

export const ListViewsRequest = {
  encode(message: ListViewsRequest, writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array): ListViewsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsRequest();

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

  fromJSON(object: any): ListViewsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },

  toJSON(message: ListViewsRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListViewsRequest>, I>>(object: I): ListViewsRequest {
    const message = createBaseListViewsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  }

};
export interface ListViewsResponse {
  views: LogView[];
  nextPageToken: string;
}

function createBaseListViewsResponse(): ListViewsResponse {
  return {
    views: [],
    nextPageToken: ""
  };
}

export const ListViewsResponse = {
  encode(message: ListViewsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.views) {
      LogView.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ListViewsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListViewsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.views.push(LogView.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListViewsResponse {
    return {
      views: Array.isArray(object?.views) ? object.views.map((e: any) => LogView.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListViewsResponse): unknown {
    const obj: any = {};

    if (message.views) {
      obj.views = message.views.map(e => e ? LogView.toJSON(e) : undefined);
    } else {
      obj.views = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListViewsResponse>, I>>(object: I): ListViewsResponse {
    const message = createBaseListViewsResponse();
    message.views = object.views?.map(e => LogView.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface CreateViewRequest {
  parent: string;
  viewId: string;
  view: LogView;
}

function createBaseCreateViewRequest(): CreateViewRequest {
  return {
    parent: "",
    viewId: "",
    view: undefined
  };
}

export const CreateViewRequest = {
  encode(message: CreateViewRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.viewId !== "") {
      writer.uint32(18).string(message.viewId);
    }

    if (message.view !== undefined) {
      LogView.encode(message.view, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CreateViewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateViewRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.viewId = reader.string();
          break;

        case 3:
          message.view = LogView.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateViewRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      viewId: isSet(object.viewId) ? String(object.viewId) : "",
      view: isSet(object.view) ? LogView.fromJSON(object.view) : undefined
    };
  },

  toJSON(message: CreateViewRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.viewId !== undefined && (obj.viewId = message.viewId);
    message.view !== undefined && (obj.view = message.view ? LogView.toJSON(message.view) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateViewRequest>, I>>(object: I): CreateViewRequest {
    const message = createBaseCreateViewRequest();
    message.parent = object.parent ?? "";
    message.viewId = object.viewId ?? "";
    message.view = object.view !== undefined && object.view !== null ? LogView.fromPartial(object.view) : undefined;
    return message;
  }

};
export interface UpdateViewRequest {
  name: string;
  view: LogView;
  updateMask: FieldMask;
}

function createBaseUpdateViewRequest(): UpdateViewRequest {
  return {
    name: "",
    view: undefined,
    updateMask: undefined
  };
}

export const UpdateViewRequest = {
  encode(message: UpdateViewRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.view !== undefined) {
      LogView.encode(message.view, writer.uint32(18).fork()).ldelim();
    }

    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateViewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateViewRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.view = LogView.decode(reader, reader.uint32());
          break;

        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateViewRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? LogView.fromJSON(object.view) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined
    };
  },

  toJSON(message: UpdateViewRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined && (obj.view = message.view ? LogView.toJSON(message.view) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateViewRequest>, I>>(object: I): UpdateViewRequest {
    const message = createBaseUpdateViewRequest();
    message.name = object.name ?? "";
    message.view = object.view !== undefined && object.view !== null ? LogView.fromPartial(object.view) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  }

};
export interface GetViewRequest {
  name: string;
}

function createBaseGetViewRequest(): GetViewRequest {
  return {
    name: ""
  };
}

export const GetViewRequest = {
  encode(message: GetViewRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GetViewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetViewRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetViewRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: GetViewRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetViewRequest>, I>>(object: I): GetViewRequest {
    const message = createBaseGetViewRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface DeleteViewRequest {
  name: string;
}

function createBaseDeleteViewRequest(): DeleteViewRequest {
  return {
    name: ""
  };
}

export const DeleteViewRequest = {
  encode(message: DeleteViewRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): DeleteViewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteViewRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteViewRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: DeleteViewRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteViewRequest>, I>>(object: I): DeleteViewRequest {
    const message = createBaseDeleteViewRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface ListSinksRequest {
  parent: string;
  pageToken: string;
  pageSize: number;
}

function createBaseListSinksRequest(): ListSinksRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}

export const ListSinksRequest = {
  encode(message: ListSinksRequest, writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array): ListSinksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksRequest();

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

  fromJSON(object: any): ListSinksRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },

  toJSON(message: ListSinksRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSinksRequest>, I>>(object: I): ListSinksRequest {
    const message = createBaseListSinksRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  }

};
export interface ListSinksResponse {
  sinks: LogSink[];
  nextPageToken: string;
}

function createBaseListSinksResponse(): ListSinksResponse {
  return {
    sinks: [],
    nextPageToken: ""
  };
}

export const ListSinksResponse = {
  encode(message: ListSinksResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sinks) {
      LogSink.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ListSinksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSinksResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sinks.push(LogSink.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListSinksResponse {
    return {
      sinks: Array.isArray(object?.sinks) ? object.sinks.map((e: any) => LogSink.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListSinksResponse): unknown {
    const obj: any = {};

    if (message.sinks) {
      obj.sinks = message.sinks.map(e => e ? LogSink.toJSON(e) : undefined);
    } else {
      obj.sinks = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSinksResponse>, I>>(object: I): ListSinksResponse {
    const message = createBaseListSinksResponse();
    message.sinks = object.sinks?.map(e => LogSink.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface GetSinkRequest {
  sinkName: string;
}

function createBaseGetSinkRequest(): GetSinkRequest {
  return {
    sinkName: ""
  };
}

export const GetSinkRequest = {
  encode(message: GetSinkRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkName !== "") {
      writer.uint32(10).string(message.sinkName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GetSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSinkRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetSinkRequest {
    return {
      sinkName: isSet(object.sinkName) ? String(object.sinkName) : ""
    };
  },

  toJSON(message: GetSinkRequest): unknown {
    const obj: any = {};
    message.sinkName !== undefined && (obj.sinkName = message.sinkName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSinkRequest>, I>>(object: I): GetSinkRequest {
    const message = createBaseGetSinkRequest();
    message.sinkName = object.sinkName ?? "";
    return message;
  }

};
export interface CreateSinkRequest {
  parent: string;
  sink: LogSink;
  uniqueWriterIdentity: boolean;
}

function createBaseCreateSinkRequest(): CreateSinkRequest {
  return {
    parent: "",
    sink: undefined,
    uniqueWriterIdentity: false
  };
}

export const CreateSinkRequest = {
  encode(message: CreateSinkRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.sink !== undefined) {
      LogSink.encode(message.sink, writer.uint32(18).fork()).ldelim();
    }

    if (message.uniqueWriterIdentity === true) {
      writer.uint32(24).bool(message.uniqueWriterIdentity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CreateSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSinkRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.sink = LogSink.decode(reader, reader.uint32());
          break;

        case 3:
          message.uniqueWriterIdentity = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateSinkRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      sink: isSet(object.sink) ? LogSink.fromJSON(object.sink) : undefined,
      uniqueWriterIdentity: isSet(object.uniqueWriterIdentity) ? Boolean(object.uniqueWriterIdentity) : false
    };
  },

  toJSON(message: CreateSinkRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.sink !== undefined && (obj.sink = message.sink ? LogSink.toJSON(message.sink) : undefined);
    message.uniqueWriterIdentity !== undefined && (obj.uniqueWriterIdentity = message.uniqueWriterIdentity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateSinkRequest>, I>>(object: I): CreateSinkRequest {
    const message = createBaseCreateSinkRequest();
    message.parent = object.parent ?? "";
    message.sink = object.sink !== undefined && object.sink !== null ? LogSink.fromPartial(object.sink) : undefined;
    message.uniqueWriterIdentity = object.uniqueWriterIdentity ?? false;
    return message;
  }

};
export interface UpdateSinkRequest {
  sinkName: string;
  sink: LogSink;
  uniqueWriterIdentity: boolean;
  updateMask: FieldMask;
}

function createBaseUpdateSinkRequest(): UpdateSinkRequest {
  return {
    sinkName: "",
    sink: undefined,
    uniqueWriterIdentity: false,
    updateMask: undefined
  };
}

export const UpdateSinkRequest = {
  encode(message: UpdateSinkRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkName !== "") {
      writer.uint32(10).string(message.sinkName);
    }

    if (message.sink !== undefined) {
      LogSink.encode(message.sink, writer.uint32(18).fork()).ldelim();
    }

    if (message.uniqueWriterIdentity === true) {
      writer.uint32(24).bool(message.uniqueWriterIdentity);
    }

    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSinkRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;

        case 2:
          message.sink = LogSink.decode(reader, reader.uint32());
          break;

        case 3:
          message.uniqueWriterIdentity = reader.bool();
          break;

        case 4:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateSinkRequest {
    return {
      sinkName: isSet(object.sinkName) ? String(object.sinkName) : "",
      sink: isSet(object.sink) ? LogSink.fromJSON(object.sink) : undefined,
      uniqueWriterIdentity: isSet(object.uniqueWriterIdentity) ? Boolean(object.uniqueWriterIdentity) : false,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined
    };
  },

  toJSON(message: UpdateSinkRequest): unknown {
    const obj: any = {};
    message.sinkName !== undefined && (obj.sinkName = message.sinkName);
    message.sink !== undefined && (obj.sink = message.sink ? LogSink.toJSON(message.sink) : undefined);
    message.uniqueWriterIdentity !== undefined && (obj.uniqueWriterIdentity = message.uniqueWriterIdentity);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSinkRequest>, I>>(object: I): UpdateSinkRequest {
    const message = createBaseUpdateSinkRequest();
    message.sinkName = object.sinkName ?? "";
    message.sink = object.sink !== undefined && object.sink !== null ? LogSink.fromPartial(object.sink) : undefined;
    message.uniqueWriterIdentity = object.uniqueWriterIdentity ?? false;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  }

};
export interface DeleteSinkRequest {
  sinkName: string;
}

function createBaseDeleteSinkRequest(): DeleteSinkRequest {
  return {
    sinkName: ""
  };
}

export const DeleteSinkRequest = {
  encode(message: DeleteSinkRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinkName !== "") {
      writer.uint32(10).string(message.sinkName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): DeleteSinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSinkRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sinkName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteSinkRequest {
    return {
      sinkName: isSet(object.sinkName) ? String(object.sinkName) : ""
    };
  },

  toJSON(message: DeleteSinkRequest): unknown {
    const obj: any = {};
    message.sinkName !== undefined && (obj.sinkName = message.sinkName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSinkRequest>, I>>(object: I): DeleteSinkRequest {
    const message = createBaseDeleteSinkRequest();
    message.sinkName = object.sinkName ?? "";
    return message;
  }

};
export interface LogExclusion {
  name: string;
  description: string;
  filter: string;
  disabled: boolean;
  createTime: Date;
  updateTime: Date;
}

function createBaseLogExclusion(): LogExclusion {
  return {
    name: "",
    description: "",
    filter: "",
    disabled: false,
    createTime: undefined,
    updateTime: undefined
  };
}

export const LogExclusion = {
  encode(message: LogExclusion, writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(32).bool(message.disabled);
    }

    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    if (message.updateTime !== undefined) Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): LogExclusion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogExclusion();

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

        case 4:
          message.disabled = reader.bool();
          break;

        case 5:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogExclusion {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined
    };
  },

  toJSON(message: LogExclusion): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.filter !== undefined && (obj.filter = message.filter);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogExclusion>, I>>(object: I): LogExclusion {
    const message = createBaseLogExclusion();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filter = object.filter ?? "";
    message.disabled = object.disabled ?? false;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  }

};
export interface ListExclusionsRequest {
  parent: string;
  pageToken: string;
  pageSize: number;
}

function createBaseListExclusionsRequest(): ListExclusionsRequest {
  return {
    parent: "",
    pageToken: "",
    pageSize: 0
  };
}

export const ListExclusionsRequest = {
  encode(message: ListExclusionsRequest, writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array): ListExclusionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExclusionsRequest();

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

  fromJSON(object: any): ListExclusionsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },

  toJSON(message: ListExclusionsRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExclusionsRequest>, I>>(object: I): ListExclusionsRequest {
    const message = createBaseListExclusionsRequest();
    message.parent = object.parent ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  }

};
export interface ListExclusionsResponse {
  exclusions: LogExclusion[];
  nextPageToken: string;
}

function createBaseListExclusionsResponse(): ListExclusionsResponse {
  return {
    exclusions: [],
    nextPageToken: ""
  };
}

export const ListExclusionsResponse = {
  encode(message: ListExclusionsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exclusions) {
      LogExclusion.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ListExclusionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExclusionsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exclusions.push(LogExclusion.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListExclusionsResponse {
    return {
      exclusions: Array.isArray(object?.exclusions) ? object.exclusions.map((e: any) => LogExclusion.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListExclusionsResponse): unknown {
    const obj: any = {};

    if (message.exclusions) {
      obj.exclusions = message.exclusions.map(e => e ? LogExclusion.toJSON(e) : undefined);
    } else {
      obj.exclusions = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListExclusionsResponse>, I>>(object: I): ListExclusionsResponse {
    const message = createBaseListExclusionsResponse();
    message.exclusions = object.exclusions?.map(e => LogExclusion.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface GetExclusionRequest {
  name: string;
}

function createBaseGetExclusionRequest(): GetExclusionRequest {
  return {
    name: ""
  };
}

export const GetExclusionRequest = {
  encode(message: GetExclusionRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GetExclusionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExclusionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetExclusionRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: GetExclusionRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetExclusionRequest>, I>>(object: I): GetExclusionRequest {
    const message = createBaseGetExclusionRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface CreateExclusionRequest {
  parent: string;
  exclusion: LogExclusion;
}

function createBaseCreateExclusionRequest(): CreateExclusionRequest {
  return {
    parent: "",
    exclusion: undefined
  };
}

export const CreateExclusionRequest = {
  encode(message: CreateExclusionRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }

    if (message.exclusion !== undefined) {
      LogExclusion.encode(message.exclusion, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CreateExclusionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateExclusionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;

        case 2:
          message.exclusion = LogExclusion.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateExclusionRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      exclusion: isSet(object.exclusion) ? LogExclusion.fromJSON(object.exclusion) : undefined
    };
  },

  toJSON(message: CreateExclusionRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.exclusion !== undefined && (obj.exclusion = message.exclusion ? LogExclusion.toJSON(message.exclusion) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateExclusionRequest>, I>>(object: I): CreateExclusionRequest {
    const message = createBaseCreateExclusionRequest();
    message.parent = object.parent ?? "";
    message.exclusion = object.exclusion !== undefined && object.exclusion !== null ? LogExclusion.fromPartial(object.exclusion) : undefined;
    return message;
  }

};
export interface UpdateExclusionRequest {
  name: string;
  exclusion: LogExclusion;
  updateMask: FieldMask;
}

function createBaseUpdateExclusionRequest(): UpdateExclusionRequest {
  return {
    name: "",
    exclusion: undefined,
    updateMask: undefined
  };
}

export const UpdateExclusionRequest = {
  encode(message: UpdateExclusionRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.exclusion !== undefined) {
      LogExclusion.encode(message.exclusion, writer.uint32(18).fork()).ldelim();
    }

    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateExclusionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateExclusionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.exclusion = LogExclusion.decode(reader, reader.uint32());
          break;

        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateExclusionRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      exclusion: isSet(object.exclusion) ? LogExclusion.fromJSON(object.exclusion) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined
    };
  },

  toJSON(message: UpdateExclusionRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.exclusion !== undefined && (obj.exclusion = message.exclusion ? LogExclusion.toJSON(message.exclusion) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateExclusionRequest>, I>>(object: I): UpdateExclusionRequest {
    const message = createBaseUpdateExclusionRequest();
    message.name = object.name ?? "";
    message.exclusion = object.exclusion !== undefined && object.exclusion !== null ? LogExclusion.fromPartial(object.exclusion) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  }

};
export interface DeleteExclusionRequest {
  name: string;
}

function createBaseDeleteExclusionRequest(): DeleteExclusionRequest {
  return {
    name: ""
  };
}

export const DeleteExclusionRequest = {
  encode(message: DeleteExclusionRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): DeleteExclusionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteExclusionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteExclusionRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: DeleteExclusionRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteExclusionRequest>, I>>(object: I): DeleteExclusionRequest {
    const message = createBaseDeleteExclusionRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface GetCmekSettingsRequest {
  name: string;
}

function createBaseGetCmekSettingsRequest(): GetCmekSettingsRequest {
  return {
    name: ""
  };
}

export const GetCmekSettingsRequest = {
  encode(message: GetCmekSettingsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GetCmekSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCmekSettingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetCmekSettingsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: GetCmekSettingsRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCmekSettingsRequest>, I>>(object: I): GetCmekSettingsRequest {
    const message = createBaseGetCmekSettingsRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface UpdateCmekSettingsRequest {
  name: string;
  cmekSettings: CmekSettings;
  updateMask: FieldMask;
}

function createBaseUpdateCmekSettingsRequest(): UpdateCmekSettingsRequest {
  return {
    name: "",
    cmekSettings: undefined,
    updateMask: undefined
  };
}

export const UpdateCmekSettingsRequest = {
  encode(message: UpdateCmekSettingsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.cmekSettings !== undefined) {
      CmekSettings.encode(message.cmekSettings, writer.uint32(18).fork()).ldelim();
    }

    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateCmekSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCmekSettingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.cmekSettings = CmekSettings.decode(reader, reader.uint32());
          break;

        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateCmekSettingsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      cmekSettings: isSet(object.cmekSettings) ? CmekSettings.fromJSON(object.cmekSettings) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined
    };
  },

  toJSON(message: UpdateCmekSettingsRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.cmekSettings !== undefined && (obj.cmekSettings = message.cmekSettings ? CmekSettings.toJSON(message.cmekSettings) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCmekSettingsRequest>, I>>(object: I): UpdateCmekSettingsRequest {
    const message = createBaseUpdateCmekSettingsRequest();
    message.name = object.name ?? "";
    message.cmekSettings = object.cmekSettings !== undefined && object.cmekSettings !== null ? CmekSettings.fromPartial(object.cmekSettings) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  }

};
export interface CmekSettings {
  name: string;
  kmsKeyName: string;
  serviceAccountId: string;
}

function createBaseCmekSettings(): CmekSettings {
  return {
    name: "",
    kmsKeyName: "",
    serviceAccountId: ""
  };
}

export const CmekSettings = {
  encode(message: CmekSettings, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.kmsKeyName !== "") {
      writer.uint32(18).string(message.kmsKeyName);
    }

    if (message.serviceAccountId !== "") {
      writer.uint32(26).string(message.serviceAccountId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CmekSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCmekSettings();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.kmsKeyName = reader.string();
          break;

        case 3:
          message.serviceAccountId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CmekSettings {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      kmsKeyName: isSet(object.kmsKeyName) ? String(object.kmsKeyName) : "",
      serviceAccountId: isSet(object.serviceAccountId) ? String(object.serviceAccountId) : ""
    };
  },

  toJSON(message: CmekSettings): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.kmsKeyName !== undefined && (obj.kmsKeyName = message.kmsKeyName);
    message.serviceAccountId !== undefined && (obj.serviceAccountId = message.serviceAccountId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CmekSettings>, I>>(object: I): CmekSettings {
    const message = createBaseCmekSettings();
    message.name = object.name ?? "";
    message.kmsKeyName = object.kmsKeyName ?? "";
    message.serviceAccountId = object.serviceAccountId ?? "";
    return message;
  }

};
export interface GetSettingsRequest {
  name: string;
}

function createBaseGetSettingsRequest(): GetSettingsRequest {
  return {
    name: ""
  };
}

export const GetSettingsRequest = {
  encode(message: GetSettingsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): GetSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSettingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetSettingsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: GetSettingsRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSettingsRequest>, I>>(object: I): GetSettingsRequest {
    const message = createBaseGetSettingsRequest();
    message.name = object.name ?? "";
    return message;
  }

};
export interface UpdateSettingsRequest {
  name: string;
  settings: Settings;
  updateMask: FieldMask;
}

function createBaseUpdateSettingsRequest(): UpdateSettingsRequest {
  return {
    name: "",
    settings: undefined,
    updateMask: undefined
  };
}

export const UpdateSettingsRequest = {
  encode(message: UpdateSettingsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.settings !== undefined) {
      Settings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }

    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): UpdateSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSettingsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.settings = Settings.decode(reader, reader.uint32());
          break;

        case 3:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateSettingsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      settings: isSet(object.settings) ? Settings.fromJSON(object.settings) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.fromJSON(object.updateMask) : undefined
    };
  },

  toJSON(message: UpdateSettingsRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.settings !== undefined && (obj.settings = message.settings ? Settings.toJSON(message.settings) : undefined);
    message.updateMask !== undefined && (obj.updateMask = message.updateMask ? FieldMask.toJSON(message.updateMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSettingsRequest>, I>>(object: I): UpdateSettingsRequest {
    const message = createBaseUpdateSettingsRequest();
    message.name = object.name ?? "";
    message.settings = object.settings !== undefined && object.settings !== null ? Settings.fromPartial(object.settings) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  }

};
export interface Settings {
  name: string;
  kmsKeyName: string;
  kmsServiceAccountId: string;
  storageLocation: string;
  disableDefaultSink: boolean;
}

function createBaseSettings(): Settings {
  return {
    name: "",
    kmsKeyName: "",
    kmsServiceAccountId: "",
    storageLocation: "",
    disableDefaultSink: false
  };
}

export const Settings = {
  encode(message: Settings, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.kmsKeyName !== "") {
      writer.uint32(18).string(message.kmsKeyName);
    }

    if (message.kmsServiceAccountId !== "") {
      writer.uint32(26).string(message.kmsServiceAccountId);
    }

    if (message.storageLocation !== "") {
      writer.uint32(34).string(message.storageLocation);
    }

    if (message.disableDefaultSink === true) {
      writer.uint32(40).bool(message.disableDefaultSink);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Settings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettings();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.kmsKeyName = reader.string();
          break;

        case 3:
          message.kmsServiceAccountId = reader.string();
          break;

        case 4:
          message.storageLocation = reader.string();
          break;

        case 5:
          message.disableDefaultSink = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Settings {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      kmsKeyName: isSet(object.kmsKeyName) ? String(object.kmsKeyName) : "",
      kmsServiceAccountId: isSet(object.kmsServiceAccountId) ? String(object.kmsServiceAccountId) : "",
      storageLocation: isSet(object.storageLocation) ? String(object.storageLocation) : "",
      disableDefaultSink: isSet(object.disableDefaultSink) ? Boolean(object.disableDefaultSink) : false
    };
  },

  toJSON(message: Settings): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.kmsKeyName !== undefined && (obj.kmsKeyName = message.kmsKeyName);
    message.kmsServiceAccountId !== undefined && (obj.kmsServiceAccountId = message.kmsServiceAccountId);
    message.storageLocation !== undefined && (obj.storageLocation = message.storageLocation);
    message.disableDefaultSink !== undefined && (obj.disableDefaultSink = message.disableDefaultSink);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Settings>, I>>(object: I): Settings {
    const message = createBaseSettings();
    message.name = object.name ?? "";
    message.kmsKeyName = object.kmsKeyName ?? "";
    message.kmsServiceAccountId = object.kmsServiceAccountId ?? "";
    message.storageLocation = object.storageLocation ?? "";
    message.disableDefaultSink = object.disableDefaultSink ?? false;
    return message;
  }

};
export interface CopyLogEntriesRequest {
  name: string;
  filter: string;
  destination: string;
}

function createBaseCopyLogEntriesRequest(): CopyLogEntriesRequest {
  return {
    name: "",
    filter: "",
    destination: ""
  };
}

export const CopyLogEntriesRequest = {
  encode(message: CopyLogEntriesRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.filter !== "") {
      writer.uint32(26).string(message.filter);
    }

    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CopyLogEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 3:
          message.filter = reader.string();
          break;

        case 4:
          message.destination = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CopyLogEntriesRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },

  toJSON(message: CopyLogEntriesRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.filter !== undefined && (obj.filter = message.filter);
    message.destination !== undefined && (obj.destination = message.destination);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CopyLogEntriesRequest>, I>>(object: I): CopyLogEntriesRequest {
    const message = createBaseCopyLogEntriesRequest();
    message.name = object.name ?? "";
    message.filter = object.filter ?? "";
    message.destination = object.destination ?? "";
    return message;
  }

};
export interface CopyLogEntriesMetadata {
  startTime: Date;
  endTime: Date;
  state: OperationState;
  cancellationRequested: boolean;
  request: CopyLogEntriesRequest;
  progress: number;
  writerIdentity: string;
}

function createBaseCopyLogEntriesMetadata(): CopyLogEntriesMetadata {
  return {
    startTime: undefined,
    endTime: undefined,
    state: undefined,
    cancellationRequested: false,
    request: undefined,
    progress: 0,
    writerIdentity: ""
  };
}

export const CopyLogEntriesMetadata = {
  encode(message: CopyLogEntriesMetadata, writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== undefined) Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
    if (message.endTime !== undefined) Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();

    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }

    if (message.cancellationRequested === true) {
      writer.uint32(32).bool(message.cancellationRequested);
    }

    if (message.request !== undefined) {
      CopyLogEntriesRequest.encode(message.request, writer.uint32(42).fork()).ldelim();
    }

    if (message.progress !== 0) {
      writer.uint32(48).int32(message.progress);
    }

    if (message.writerIdentity !== "") {
      writer.uint32(58).string(message.writerIdentity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CopyLogEntriesMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.state = (reader.int32() as any);
          break;

        case 4:
          message.cancellationRequested = reader.bool();
          break;

        case 5:
          message.request = CopyLogEntriesRequest.decode(reader, reader.uint32());
          break;

        case 6:
          message.progress = reader.int32();
          break;

        case 7:
          message.writerIdentity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CopyLogEntriesMetadata {
    return {
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      cancellationRequested: isSet(object.cancellationRequested) ? Boolean(object.cancellationRequested) : false,
      request: isSet(object.request) ? CopyLogEntriesRequest.fromJSON(object.request) : undefined,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
      writerIdentity: isSet(object.writerIdentity) ? String(object.writerIdentity) : ""
    };
  },

  toJSON(message: CopyLogEntriesMetadata): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.state !== undefined && (obj.state = operationStateToJSON(message.state));
    message.cancellationRequested !== undefined && (obj.cancellationRequested = message.cancellationRequested);
    message.request !== undefined && (obj.request = message.request ? CopyLogEntriesRequest.toJSON(message.request) : undefined);
    message.progress !== undefined && (obj.progress = Math.round(message.progress));
    message.writerIdentity !== undefined && (obj.writerIdentity = message.writerIdentity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CopyLogEntriesMetadata>, I>>(object: I): CopyLogEntriesMetadata {
    const message = createBaseCopyLogEntriesMetadata();
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.state = object.state ?? 0;
    message.cancellationRequested = object.cancellationRequested ?? false;
    message.request = object.request !== undefined && object.request !== null ? CopyLogEntriesRequest.fromPartial(object.request) : undefined;
    message.progress = object.progress ?? 0;
    message.writerIdentity = object.writerIdentity ?? "";
    return message;
  }

};
export interface CopyLogEntriesResponse {
  logEntriesCopiedCount: Long;
}

function createBaseCopyLogEntriesResponse(): CopyLogEntriesResponse {
  return {
    logEntriesCopiedCount: Long.UZERO
  };
}

export const CopyLogEntriesResponse = {
  encode(message: CopyLogEntriesResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.logEntriesCopiedCount.isZero()) {
      writer.uint32(8).int64(message.logEntriesCopiedCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CopyLogEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyLogEntriesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.logEntriesCopiedCount = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CopyLogEntriesResponse {
    return {
      logEntriesCopiedCount: isSet(object.logEntriesCopiedCount) ? Long.fromString(object.logEntriesCopiedCount) : Long.ZERO
    };
  },

  toJSON(message: CopyLogEntriesResponse): unknown {
    const obj: any = {};
    message.logEntriesCopiedCount !== undefined && (obj.logEntriesCopiedCount = (message.logEntriesCopiedCount || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CopyLogEntriesResponse>, I>>(object: I): CopyLogEntriesResponse {
    const message = createBaseCopyLogEntriesResponse();
    message.logEntriesCopiedCount = object.logEntriesCopiedCount !== undefined && object.logEntriesCopiedCount !== null ? Long.fromValue(object.logEntriesCopiedCount) : Long.ZERO;
    return message;
  }

};
export enum LifecycleState {
  /*Unspecified state. This is only used/useful for distinguishing unset
  values.*/
  LIFECYCLE_STATE_UNSPECIFIED = 0,

  /*The normal and active state.*/
  ACTIVE = 1,

  /*The resource has been marked for deletion by the user. For some resources
  (e.g. buckets), this can be reversed by an un-delete operation.*/
  DELETE_REQUESTED = 2,
  UNRECOGNIZED = -1,
}
export enum OperationState {
  /*Should not be used.*/
  OPERATION_STATE_UNSPECIFIED = 0,

  /*The operation is scheduled.*/
  OPERATION_STATE_SCHEDULED = 1,

  /*Waiting for necessary permissions.*/
  OPERATION_STATE_WAITING_FOR_PERMISSIONS = 2,

  /*The operation is running.*/
  OPERATION_STATE_RUNNING = 3,

  /*The operation was completed successfully.*/
  OPERATION_STATE_SUCCEEDED = 4,

  /*The operation failed.*/
  OPERATION_STATE_FAILED = 5,

  /*The operation was cancelled by the user.*/
  OPERATION_STATE_CANCELLED = 6,
  UNRECOGNIZED = -1,
}