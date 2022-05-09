import { MetricValueSet } from "./metric_value";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, isObject } from "@osmonauts/helpers";
export interface AllocateQuotaRequest {
  serviceName: string;
  allocateOperation: QuotaOperation;
  serviceConfigId: string;
}

function createBaseAllocateQuotaRequest(): AllocateQuotaRequest {
  return {
    serviceName: "",
    allocateOperation: undefined,
    serviceConfigId: ""
  };
}

export const AllocateQuotaRequest = {
  encode(message: AllocateQuotaRequest, writer = _m0.Writer.create()): _m0.Writer {
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
export interface QuotaOperation_LabelsEntry {
  key: string;
  value: string;
}

function createBaseQuotaOperation_LabelsEntry(): QuotaOperation_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const QuotaOperation_LabelsEntry = {
  encode(message: QuotaOperation_LabelsEntry, writer = _m0.Writer.create()): _m0.Writer {
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
export interface QuotaOperation {
  operationId: string;
  methodName: string;
  consumerId: string;
  labels: {
    [key: string]: string;
  };
  quotaMetrics: MetricValueSet[];
  quotaMode: QuotaOperation_QuotaMode;
}

function createBaseQuotaOperation(): QuotaOperation {
  return {
    operationId: "",
    methodName: "",
    consumerId: "",
    labels: {},
    quotaMetrics: [],
    quotaMode: undefined
  };
}

export const QuotaOperation = {
  encode(message: QuotaOperation, writer = _m0.Writer.create()): _m0.Writer {
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
export enum QuotaMode {
  /*Guard against implicit default. Must not be used.*/
  UNSPECIFIED = 0,

  /*For AllocateQuota request, allocates quota for the amount specified in
  the service configuration or specified using the quota metrics. If the
  amount is higher than the available quota, allocation error will be
  returned and no quota will be allocated.
  If multiple quotas are part of the request, and one fails, none of the
  quotas are allocated or released.*/
  NORMAL = 1,

  /*The operation allocates quota for the amount specified in the service
  configuration or specified using the quota metrics. If the amount is
  higher than the available quota, request does not fail but all available
  quota will be allocated.
  For rate quota, BEST_EFFORT will continue to deduct from other groups
  even if one does not have enough quota. For allocation, it will find the
  minimum available amount across all groups and deduct that amount from
  all the affected groups.*/
  BEST_EFFORT = 2,

  /*For AllocateQuota request, only checks if there is enough quota
  available and does not change the available quota. No lock is placed on
  the available quota either.*/
  CHECK_ONLY = 3,

  /*Unimplemented. When used in AllocateQuotaRequest, this returns the
  effective quota limit(s) in the response, and no quota check will be
  performed. Not supported for other requests, and even for
  AllocateQuotaRequest, this is currently supported only for allowlisted
  services.*/
  QUERY_ONLY = 4,

  /*The operation allocates quota for the amount specified in the service
  configuration or specified using the quota metrics. If the requested
  amount is higher than the available quota, request does not fail and
  remaining quota would become negative (going over the limit).
  Not supported for Rate Quota.*/
  ADJUST_ONLY = 5,
  UNRECOGNIZED = -1,
}
export function quotaModeFromJSON(object: any): QuotaMode {
  switch (object) {
    case "UNSPECIFIED":
      return QuotaMode.UNSPECIFIED;

    case "NORMAL":
      return QuotaMode.NORMAL;

    case "BEST_EFFORT":
      return QuotaMode.BEST_EFFORT;

    case "CHECK_ONLY":
      return QuotaMode.CHECK_ONLY;

    case "QUERY_ONLY":
      return QuotaMode.QUERY_ONLY;

    case "ADJUST_ONLY":
      return QuotaMode.ADJUST_ONLY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaMode.UNRECOGNIZED;
  }
}
export function quotaModeToJSON(object: QuotaMode): string {
  switch (object) {
    case QuotaMode.UNSPECIFIED:
      return "UNSPECIFIED";

    case QuotaMode.NORMAL:
      return "NORMAL";

    case QuotaMode.BEST_EFFORT:
      return "BEST_EFFORT";

    case QuotaMode.CHECK_ONLY:
      return "CHECK_ONLY";

    case QuotaMode.QUERY_ONLY:
      return "QUERY_ONLY";

    case QuotaMode.ADJUST_ONLY:
      return "ADJUST_ONLY";

    default:
      return "UNKNOWN";
  }
}
export interface AllocateQuotaResponse {
  operationId: string;
  allocateErrors: QuotaError[];
  quotaMetrics: MetricValueSet[];
  serviceConfigId: string;
}

function createBaseAllocateQuotaResponse(): AllocateQuotaResponse {
  return {
    operationId: "",
    allocateErrors: [],
    quotaMetrics: [],
    serviceConfigId: ""
  };
}

export const AllocateQuotaResponse = {
  encode(message: AllocateQuotaResponse, writer = _m0.Writer.create()): _m0.Writer {
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
export interface QuotaError {
  code: QuotaError_Code;
  subject: string;
  description: string;
  status: Status;
}

function createBaseQuotaError(): QuotaError {
  return {
    code: undefined,
    subject: "",
    description: "",
    status: undefined
  };
}

export const QuotaError = {
  encode(message: QuotaError, writer = _m0.Writer.create()): _m0.Writer {
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
export enum QuotaError_Code {
  /*This is never used.*/
  UNSPECIFIED = 0,

  /*Quota allocation failed.
  Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED].*/
  RESOURCE_EXHAUSTED = 8,

  /*Consumer cannot access the service because the service requires active
  billing.*/
  BILLING_NOT_ACTIVE = 107,

  /*Consumer's project has been marked as deleted (soft deletion).*/
  PROJECT_DELETED = 108,

  /*Specified API key is invalid.*/
  API_KEY_INVALID = 105,

  /*Specified API Key has expired.*/
  API_KEY_EXPIRED = 112,
  UNRECOGNIZED = -1,
}
export function quotaError_CodeFromJSON(object: any): QuotaError_Code {
  switch (object) {
    case "UNSPECIFIED":
      return QuotaError_Code.UNSPECIFIED;

    case "RESOURCE_EXHAUSTED":
      return QuotaError_Code.RESOURCE_EXHAUSTED;

    case "BILLING_NOT_ACTIVE":
      return QuotaError_Code.BILLING_NOT_ACTIVE;

    case "PROJECT_DELETED":
      return QuotaError_Code.PROJECT_DELETED;

    case "API_KEY_INVALID":
      return QuotaError_Code.API_KEY_INVALID;

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