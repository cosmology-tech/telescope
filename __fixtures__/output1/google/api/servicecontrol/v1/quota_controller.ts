import { MetricValueSet } from "./metric_value";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, isObject } from "@osmonauts/helpers";

/** Supported quota modes. */
export enum QuotaOperation_QuotaMode {
  /** UNSPECIFIED - Guard against implicit default. Must not be used. */
  UNSPECIFIED = 0,

  /**
   * NORMAL - For AllocateQuota request, allocates quota for the amount specified in
   * the service configuration or specified using the quota metrics. If the
   * amount is higher than the available quota, allocation error will be
   * returned and no quota will be allocated.
   * If multiple quotas are part of the request, and one fails, none of the
   * quotas are allocated or released.
   */
  NORMAL = 1,

  /**
   * BEST_EFFORT - The operation allocates quota for the amount specified in the service
   * configuration or specified using the quota metrics. If the amount is
   * higher than the available quota, request does not fail but all available
   * quota will be allocated.
   * For rate quota, BEST_EFFORT will continue to deduct from other groups
   * even if one does not have enough quota. For allocation, it will find the
   * minimum available amount across all groups and deduct that amount from
   * all the affected groups.
   */
  BEST_EFFORT = 2,

  /**
   * CHECK_ONLY - For AllocateQuota request, only checks if there is enough quota
   * available and does not change the available quota. No lock is placed on
   * the available quota either.
   */
  CHECK_ONLY = 3,

  /**
   * QUERY_ONLY - Unimplemented. When used in AllocateQuotaRequest, this returns the
   * effective quota limit(s) in the response, and no quota check will be
   * performed. Not supported for other requests, and even for
   * AllocateQuotaRequest, this is currently supported only for allowlisted
   * services.
   */
  QUERY_ONLY = 4,

  /**
   * ADJUST_ONLY - The operation allocates quota for the amount specified in the service
   * configuration or specified using the quota metrics. If the requested
   * amount is higher than the available quota, request does not fail and
   * remaining quota would become negative (going over the limit).
   * Not supported for Rate Quota.
   */
  ADJUST_ONLY = 5,
  UNRECOGNIZED = -1,
}
export function quotaOperation_QuotaModeFromJSON(object: any): QuotaOperation_QuotaMode {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return QuotaOperation_QuotaMode.UNSPECIFIED;

    case 1:
    case "NORMAL":
      return QuotaOperation_QuotaMode.NORMAL;

    case 2:
    case "BEST_EFFORT":
      return QuotaOperation_QuotaMode.BEST_EFFORT;

    case 3:
    case "CHECK_ONLY":
      return QuotaOperation_QuotaMode.CHECK_ONLY;

    case 4:
    case "QUERY_ONLY":
      return QuotaOperation_QuotaMode.QUERY_ONLY;

    case 5:
    case "ADJUST_ONLY":
      return QuotaOperation_QuotaMode.ADJUST_ONLY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaOperation_QuotaMode.UNRECOGNIZED;
  }
}
export function quotaOperation_QuotaModeToJSON(object: QuotaOperation_QuotaMode): string {
  switch (object) {
    case QuotaOperation_QuotaMode.UNSPECIFIED:
      return "UNSPECIFIED";

    case QuotaOperation_QuotaMode.NORMAL:
      return "NORMAL";

    case QuotaOperation_QuotaMode.BEST_EFFORT:
      return "BEST_EFFORT";

    case QuotaOperation_QuotaMode.CHECK_ONLY:
      return "CHECK_ONLY";

    case QuotaOperation_QuotaMode.QUERY_ONLY:
      return "QUERY_ONLY";

    case QuotaOperation_QuotaMode.ADJUST_ONLY:
      return "ADJUST_ONLY";

    default:
      return "UNKNOWN";
  }
}

/**
 * Error codes related to project config validations are deprecated since the
 * quota controller methods do not perform these validations. Instead services
 * have to call the Check method, without quota_properties field, to perform
 * these validations before calling the quota controller methods. These
 * methods check only for project deletion to be wipe out compliant.
 */
export enum QuotaError_Code {
  /** UNSPECIFIED - This is never used. */
  UNSPECIFIED = 0,

  /**
   * RESOURCE_EXHAUSTED - Quota allocation failed.
   * Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED].
   */
  RESOURCE_EXHAUSTED = 8,

  /**
   * BILLING_NOT_ACTIVE - Consumer cannot access the service because the service requires active
   * billing.
   */
  BILLING_NOT_ACTIVE = 107,

  /** PROJECT_DELETED - Consumer's project has been marked as deleted (soft deletion). */
  PROJECT_DELETED = 108,

  /** API_KEY_INVALID - Specified API key is invalid. */
  API_KEY_INVALID = 105,

  /** API_KEY_EXPIRED - Specified API Key has expired. */
  API_KEY_EXPIRED = 112,
  UNRECOGNIZED = -1,
}
export function quotaError_CodeFromJSON(object: any): QuotaError_Code {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return QuotaError_Code.UNSPECIFIED;

    case 8:
    case "RESOURCE_EXHAUSTED":
      return QuotaError_Code.RESOURCE_EXHAUSTED;

    case 107:
    case "BILLING_NOT_ACTIVE":
      return QuotaError_Code.BILLING_NOT_ACTIVE;

    case 108:
    case "PROJECT_DELETED":
      return QuotaError_Code.PROJECT_DELETED;

    case 105:
    case "API_KEY_INVALID":
      return QuotaError_Code.API_KEY_INVALID;

    case 112:
    case "API_KEY_EXPIRED":
      return QuotaError_Code.API_KEY_EXPIRED;

    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaError_Code.UNRECOGNIZED;
  }
}
export function quotaError_CodeToJSON(object: QuotaError_Code): string {
  switch (object) {
    case QuotaError_Code.UNSPECIFIED:
      return "UNSPECIFIED";

    case QuotaError_Code.RESOURCE_EXHAUSTED:
      return "RESOURCE_EXHAUSTED";

    case QuotaError_Code.BILLING_NOT_ACTIVE:
      return "BILLING_NOT_ACTIVE";

    case QuotaError_Code.PROJECT_DELETED:
      return "PROJECT_DELETED";

    case QuotaError_Code.API_KEY_INVALID:
      return "API_KEY_INVALID";

    case QuotaError_Code.API_KEY_EXPIRED:
      return "API_KEY_EXPIRED";

    default:
      return "UNKNOWN";
  }
}

/** Request message for the AllocateQuota method. */
export interface AllocateQuotaRequest {
  /**
   * Name of the service as specified in the service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See [google.api.Service][google.api.Service] for the definition of a service name.
   */
  serviceName: string;

  /** Operation that describes the quota allocation. */
  allocateOperation: QuotaOperation;

  /**
   * Specifies which version of service configuration should be used to process
   * the request. If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}
export interface QuotaOperation_LabelsEntry {
  key: string;
  value: string;
}

/** Represents information regarding a quota operation. */
export interface QuotaOperation {
  /**
   * Identity of the operation. This is expected to be unique within the scope
   * of the service that generated the operation, and guarantees idempotency in
   * case of retries.
   * 
   * In order to ensure best performance and latency in the Quota backends,
   * operation_ids are optimally associated with time, so that related
   * operations can be accessed fast in storage. For this reason, the
   * recommended token for services that intend to operate at a high QPS is
   * Unix time in nanos + UUID
   */
  operationId: string;

  /**
   * Fully qualified name of the API method for which this quota operation is
   * requested. This name is used for matching quota rules or metric rules and
   * billing status rules defined in service configuration.
   * 
   * This field should not be set if any of the following is true:
   * (1) the quota operation is performed on non-API resources.
   * (2) quota_metrics is set because the caller is doing quota override.
   * 
   * 
   * Example of an RPC method name:
   * google.example.library.v1.LibraryService.CreateShelf
   */
  methodName: string;

  /**
   * Identity of the consumer for whom this quota operation is being performed.
   * 
   * This can be in one of the following formats:
   * project:<project_id>,
   * project_number:<project_number>,
   * api_key:<api_key>.
   */
  consumerId: string;

  /** Labels describing the operation. */
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
   * 
   * This field is mutually exclusive with method_name.
   */
  quotaMetrics: MetricValueSet[];

  /** Quota mode for this operation. */
  quotaMode: QuotaOperation_QuotaMode;
}

/** Response message for the AllocateQuota method. */
export interface AllocateQuotaResponse {
  /**
   * The same operation_id value used in the AllocateQuotaRequest. Used for
   * logging and diagnostics purposes.
   */
  operationId: string;

  /** Indicates the decision of the allocate. */
  allocateErrors: QuotaError[];

  /**
   * Quota metrics to indicate the result of allocation. Depending on the
   * request, one or more of the following metrics will be included:
   * 
   * 1. Per quota group or per quota metric incremental usage will be specified
   * using the following delta metric :
   * "serviceruntime.googleapis.com/api/consumer/quota_used_count"
   * 
   * 2. The quota limit reached condition will be specified using the following
   * boolean metric :
   * "serviceruntime.googleapis.com/quota/exceeded"
   */
  quotaMetrics: MetricValueSet[];

  /** ID of the actual config used to process the request. */
  serviceConfigId: string;
}

/** Represents error information for [QuotaOperation][google.api.servicecontrol.v1.QuotaOperation]. */
export interface QuotaError {
  /** Error code. */
  code: QuotaError_Code;

  /**
   * Subject to whom this error applies. See the specific enum for more details
   * on this field. For example, "clientip:<ip address of client>" or
   * "project:<Google developer project id>".
   */
  subject: string;

  /** Free-form text that provides details on the cause of the error. */
  description: string;

  /**
   * Contains additional information about the quota error.
   * If available, `status.code` will be non zero.
   */
  status: Status;
}

function createBaseAllocateQuotaRequest(): AllocateQuotaRequest {
  return {
    serviceName: "",
    allocateOperation: undefined,
    serviceConfigId: ""
  };
}

export const AllocateQuotaRequest = {
  encode(message: AllocateQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.allocateOperation !== undefined) {
      QuotaOperation.encode(message.allocateOperation, writer.uint32(18).fork()).ldelim();
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(34).string(message.serviceConfigId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocateQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocateQuotaRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.allocateOperation = QuotaOperation.decode(reader, reader.uint32());
          break;

        case 4:
          message.serviceConfigId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllocateQuotaRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      allocateOperation: isSet(object.allocateOperation) ? QuotaOperation.fromJSON(object.allocateOperation) : undefined,
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : ""
    };
  },

  toJSON(message: AllocateQuotaRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.allocateOperation !== undefined && (obj.allocateOperation = message.allocateOperation ? QuotaOperation.toJSON(message.allocateOperation) : undefined);
    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocateQuotaRequest>, I>>(object: I): AllocateQuotaRequest {
    const message = createBaseAllocateQuotaRequest();
    message.serviceName = object.serviceName ?? "";
    message.allocateOperation = object.allocateOperation !== undefined && object.allocateOperation !== null ? QuotaOperation.fromPartial(object.allocateOperation) : undefined;
    message.serviceConfigId = object.serviceConfigId ?? "";
    return message;
  }

};

function createBaseQuotaOperation_LabelsEntry(): QuotaOperation_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const QuotaOperation_LabelsEntry = {
  encode(message: QuotaOperation_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOperation_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOperation_LabelsEntry();

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

  fromJSON(object: any): QuotaOperation_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: QuotaOperation_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaOperation_LabelsEntry>, I>>(object: I): QuotaOperation_LabelsEntry {
    const message = createBaseQuotaOperation_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseQuotaOperation(): QuotaOperation {
  return {
    operationId: "",
    methodName: "",
    consumerId: "",
    labels: {},
    quotaMetrics: [],
    quotaMode: 0
  };
}

export const QuotaOperation = {
  encode(message: QuotaOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }

    if (message.methodName !== "") {
      writer.uint32(18).string(message.methodName);
    }

    if (message.consumerId !== "") {
      writer.uint32(26).string(message.consumerId);
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      QuotaOperation_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
    });

    for (const v of message.quotaMetrics) {
      MetricValueSet.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.quotaMode !== 0) {
      writer.uint32(48).int32(message.quotaMode);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOperation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;

        case 2:
          message.methodName = reader.string();
          break;

        case 3:
          message.consumerId = reader.string();
          break;

        case 4:
          const entry4 = QuotaOperation_LabelsEntry.decode(reader, reader.uint32());

          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }

          break;

        case 5:
          message.quotaMetrics.push(MetricValueSet.decode(reader, reader.uint32()));
          break;

        case 6:
          message.quotaMode = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuotaOperation {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      consumerId: isSet(object.consumerId) ? String(object.consumerId) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      quotaMetrics: Array.isArray(object?.quotaMetrics) ? object.quotaMetrics.map((e: any) => MetricValueSet.fromJSON(e)) : [],
      quotaMode: isSet(object.quotaMode) ? quotaOperation_QuotaModeFromJSON(object.quotaMode) : 0
    };
  },

  toJSON(message: QuotaOperation): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    if (message.quotaMetrics) {
      obj.quotaMetrics = message.quotaMetrics.map(e => e ? MetricValueSet.toJSON(e) : undefined);
    } else {
      obj.quotaMetrics = [];
    }

    message.quotaMode !== undefined && (obj.quotaMode = quotaOperation_QuotaModeToJSON(message.quotaMode));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaOperation>, I>>(object: I): QuotaOperation {
    const message = createBaseQuotaOperation();
    message.operationId = object.operationId ?? "";
    message.methodName = object.methodName ?? "";
    message.consumerId = object.consumerId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.quotaMetrics = object.quotaMetrics?.map(e => MetricValueSet.fromPartial(e)) || [];
    message.quotaMode = object.quotaMode ?? 0;
    return message;
  }

};

function createBaseAllocateQuotaResponse(): AllocateQuotaResponse {
  return {
    operationId: "",
    allocateErrors: [],
    quotaMetrics: [],
    serviceConfigId: ""
  };
}

export const AllocateQuotaResponse = {
  encode(message: AllocateQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }

    for (const v of message.allocateErrors) {
      QuotaError.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.quotaMetrics) {
      MetricValueSet.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(34).string(message.serviceConfigId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllocateQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocateQuotaResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;

        case 2:
          message.allocateErrors.push(QuotaError.decode(reader, reader.uint32()));
          break;

        case 3:
          message.quotaMetrics.push(MetricValueSet.decode(reader, reader.uint32()));
          break;

        case 4:
          message.serviceConfigId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllocateQuotaResponse {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      allocateErrors: Array.isArray(object?.allocateErrors) ? object.allocateErrors.map((e: any) => QuotaError.fromJSON(e)) : [],
      quotaMetrics: Array.isArray(object?.quotaMetrics) ? object.quotaMetrics.map((e: any) => MetricValueSet.fromJSON(e)) : [],
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : ""
    };
  },

  toJSON(message: AllocateQuotaResponse): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);

    if (message.allocateErrors) {
      obj.allocateErrors = message.allocateErrors.map(e => e ? QuotaError.toJSON(e) : undefined);
    } else {
      obj.allocateErrors = [];
    }

    if (message.quotaMetrics) {
      obj.quotaMetrics = message.quotaMetrics.map(e => e ? MetricValueSet.toJSON(e) : undefined);
    } else {
      obj.quotaMetrics = [];
    }

    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllocateQuotaResponse>, I>>(object: I): AllocateQuotaResponse {
    const message = createBaseAllocateQuotaResponse();
    message.operationId = object.operationId ?? "";
    message.allocateErrors = object.allocateErrors?.map(e => QuotaError.fromPartial(e)) || [];
    message.quotaMetrics = object.quotaMetrics?.map(e => MetricValueSet.fromPartial(e)) || [];
    message.serviceConfigId = object.serviceConfigId ?? "";
    return message;
  }

};

function createBaseQuotaError(): QuotaError {
  return {
    code: 0,
    subject: "",
    description: "",
    status: undefined
  };
}

export const QuotaError = {
  encode(message: QuotaError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }

    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaError();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = (reader.int32() as any);
          break;

        case 2:
          message.subject = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.status = Status.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuotaError {
    return {
      code: isSet(object.code) ? quotaError_CodeFromJSON(object.code) : 0,
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined
    };
  },

  toJSON(message: QuotaError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = quotaError_CodeToJSON(message.code));
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaError>, I>>(object: I): QuotaError {
    const message = createBaseQuotaError();
    message.code = object.code ?? 0;
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    return message;
  }

};