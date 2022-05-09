import { Duration } from "../protobuf/duration";
import * as _m0 from "protobuf/minimal";
import { toDuration, fromDuration, isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface RetryInfo {
  retryDelay: string;
}

function createBaseRetryInfo(): RetryInfo {
  return {
    retryDelay: undefined
  };
}

export const RetryInfo = {
  encode(message: RetryInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.retryDelay !== undefined) Duration.encode(toDuration(message.retryDelay), writer.uint32(10).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.retryDelay = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RetryInfo {
    return {
      retryDelay: isSet(object.retryDelay) ? String(object.retryDelay) : undefined
    };
  },

  toJSON(message: RetryInfo): unknown {
    const obj: any = {};
    message.retryDelay !== undefined && (obj.retryDelay = message.retryDelay);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetryInfo>, I>>(object: I): RetryInfo {
    const message = createBaseRetryInfo();
    message.retryDelay = object.retryDelay ?? undefined;
    return message;
  }

};
export interface DebugInfo {
  stackEntries: string[];
  detail: string;
}

function createBaseDebugInfo(): DebugInfo {
  return {
    stackEntries: [],
    detail: ""
  };
}

export const DebugInfo = {
  encode(message: DebugInfo, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stackEntries) {
      writer.uint32(10).string(v!);
    }

    if (message.detail !== "") {
      writer.uint32(18).string(message.detail);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.stackEntries.push(reader.string());

        case 2:
          message.detail = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DebugInfo {
    return {
      stackEntries: Array.isArray(object?.stackEntries) ? object.stackEntries.map((e: any) => String(e)) : [],
      detail: isSet(object.detail) ? String(object.detail) : ""
    };
  },

  toJSON(message: DebugInfo): unknown {
    const obj: any = {};

    if (message.stackEntries) {
      obj.stackEntries = message.stackEntries.map(e => e);
    } else {
      obj.stackEntries = [];
    }

    message.detail !== undefined && (obj.detail = message.detail);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugInfo>, I>>(object: I): DebugInfo {
    const message = createBaseDebugInfo();
    message.stackEntries = object.stackEntries?.map(e => e) || [];
    message.detail = object.detail ?? "";
    return message;
  }

};
export interface QuotaFailure {
  violations: Violation[];
}

function createBaseQuotaFailure(): QuotaFailure {
  return {
    violations: []
  };
}

export const QuotaFailure = {
  encode(message: QuotaFailure, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.violations.push(QuotaFailure_Violation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuotaFailure {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => QuotaFailure_Violation.fromJSON(e)) : []
    };
  },

  toJSON(message: QuotaFailure): unknown {
    const obj: any = {};

    if (message.violations) {
      obj.violations = message.violations.map(e => e ? QuotaFailure_Violation.toJSON(e) : undefined);
    } else {
      obj.violations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaFailure>, I>>(object: I): QuotaFailure {
    const message = createBaseQuotaFailure();
    message.violations = object.violations?.map(e => Violation.fromPartial(e)) || [];
    return message;
  }

};
export interface QuotaFailure_Violation {
  subject: string;
  description: string;
}

function createBaseQuotaFailure_Violation(): QuotaFailure_Violation {
  return {
    subject: "",
    description: ""
  };
}

export const QuotaFailure_Violation = {
  encode(message: QuotaFailure_Violation, writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure_Violation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure_Violation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subject = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuotaFailure_Violation {
    return {
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: QuotaFailure_Violation): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaFailure_Violation>, I>>(object: I): QuotaFailure_Violation {
    const message = createBaseQuotaFailure_Violation();
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    return message;
  }

};
export interface ErrorInfo_StringMapEntry {
  key: string;
  value: string;
}

function createBaseErrorInfo_StringMapEntry(): ErrorInfo_StringMapEntry {
  return {
    key: "",
    value: ""
  };
}

export const ErrorInfo_StringMapEntry = {
  encode(message: ErrorInfo_StringMapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorInfo_StringMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo_StringMapEntry();

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

  fromJSON(object: any): ErrorInfo_StringMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: ErrorInfo_StringMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorInfo_StringMapEntry>, I>>(object: I): ErrorInfo_StringMapEntry {
    const message = createBaseErrorInfo_StringMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface ErrorInfo {
  reason: string;
  domain: string;
  metadata: {
    [key: string]: string;
  };
}

function createBaseErrorInfo(): ErrorInfo {
  return {
    reason: "",
    domain: "",
    metadata: ""
  };
}

export const ErrorInfo = {
  encode(message: ErrorInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }

    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }

    Object.entries(message.metadata).forEach(([key, value]) => {
      ErrorInfo_MetadataMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reason = reader.string();
          break;

        case 2:
          message.domain = reader.string();
          break;

        case 3:
          const entry3 = ErrorInfo_MetadataMapEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ErrorInfo {
    return {
      reason: isSet(object.reason) ? String(object.reason) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      metadata: isObject(object.metadata) ? Object.entries(object.metadata).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: ErrorInfo): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = message.reason);
    message.domain !== undefined && (obj.domain = message.domain);
    obj.metadata = {};

    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorInfo>, I>>(object: I): ErrorInfo {
    const message = createBaseErrorInfo();
    message.reason = object.reason ?? "";
    message.domain = object.domain ?? "";
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface PreconditionFailure {
  violations: Violation[];
}

function createBasePreconditionFailure(): PreconditionFailure {
  return {
    violations: []
  };
}

export const PreconditionFailure = {
  encode(message: PreconditionFailure, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreconditionFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.violations.push(QuotaFailure_Violation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PreconditionFailure {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => QuotaFailure_Violation.fromJSON(e)) : []
    };
  },

  toJSON(message: PreconditionFailure): unknown {
    const obj: any = {};

    if (message.violations) {
      obj.violations = message.violations.map(e => e ? QuotaFailure_Violation.toJSON(e) : undefined);
    } else {
      obj.violations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PreconditionFailure>, I>>(object: I): PreconditionFailure {
    const message = createBasePreconditionFailure();
    message.violations = object.violations?.map(e => Violation.fromPartial(e)) || [];
    return message;
  }

};
export interface PreconditionFailure_Violation {
  type: string;
  subject: string;
  description: string;
}

function createBasePreconditionFailure_Violation(): PreconditionFailure_Violation {
  return {
    type: "",
    subject: "",
    description: ""
  };
}

export const PreconditionFailure_Violation = {
  encode(message: PreconditionFailure_Violation, writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreconditionFailure_Violation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure_Violation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.subject = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PreconditionFailure_Violation {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: PreconditionFailure_Violation): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PreconditionFailure_Violation>, I>>(object: I): PreconditionFailure_Violation {
    const message = createBasePreconditionFailure_Violation();
    message.type = object.type ?? "";
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    return message;
  }

};
export interface BadRequest {
  fieldViolations: FieldViolation[];
}

function createBaseBadRequest(): BadRequest {
  return {
    fieldViolations: []
  };
}

export const BadRequest = {
  encode(message: BadRequest, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fieldViolations) {
      BadRequest_FieldViolation.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fieldViolations.push(BadRequest_FieldViolation.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BadRequest {
    return {
      fieldViolations: Array.isArray(object?.fieldViolations) ? object.fieldViolations.map((e: any) => BadRequest_FieldViolation.fromJSON(e)) : []
    };
  },

  toJSON(message: BadRequest): unknown {
    const obj: any = {};

    if (message.fieldViolations) {
      obj.fieldViolations = message.fieldViolations.map(e => e ? BadRequest_FieldViolation.toJSON(e) : undefined);
    } else {
      obj.fieldViolations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BadRequest>, I>>(object: I): BadRequest {
    const message = createBaseBadRequest();
    message.fieldViolations = object.fieldViolations?.map(e => FieldViolation.fromPartial(e)) || [];
    return message;
  }

};
export interface BadRequest_FieldViolation {
  field: string;
  description: string;
}

function createBaseBadRequest_FieldViolation(): BadRequest_FieldViolation {
  return {
    field: "",
    description: ""
  };
}

export const BadRequest_FieldViolation = {
  encode(message: BadRequest_FieldViolation, writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BadRequest_FieldViolation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadRequest_FieldViolation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BadRequest_FieldViolation {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: BadRequest_FieldViolation): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BadRequest_FieldViolation>, I>>(object: I): BadRequest_FieldViolation {
    const message = createBaseBadRequest_FieldViolation();
    message.field = object.field ?? "";
    message.description = object.description ?? "";
    return message;
  }

};
export interface RequestInfo {
  requestId: string;
  servingData: string;
}

function createBaseRequestInfo(): RequestInfo {
  return {
    requestId: "",
    servingData: ""
  };
}

export const RequestInfo = {
  encode(message: RequestInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }

    if (message.servingData !== "") {
      writer.uint32(18).string(message.servingData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;

        case 2:
          message.servingData = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestInfo {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      servingData: isSet(object.servingData) ? String(object.servingData) : ""
    };
  },

  toJSON(message: RequestInfo): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.servingData !== undefined && (obj.servingData = message.servingData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(object: I): RequestInfo {
    const message = createBaseRequestInfo();
    message.requestId = object.requestId ?? "";
    message.servingData = object.servingData ?? "";
    return message;
  }

};
export interface ResourceInfo {
  resourceType: string;
  resourceName: string;
  owner: string;
  description: string;
}

function createBaseResourceInfo(): ResourceInfo {
  return {
    resourceType: "",
    resourceName: "",
    owner: "",
    description: ""
  };
}

export const ResourceInfo = {
  encode(message: ResourceInfo, writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceType !== "") {
      writer.uint32(10).string(message.resourceType);
    }

    if (message.resourceName !== "") {
      writer.uint32(18).string(message.resourceName);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.resourceType = reader.string();
          break;

        case 2:
          message.resourceName = reader.string();
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResourceInfo {
    return {
      resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
      resourceName: isSet(object.resourceName) ? String(object.resourceName) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    message.resourceType !== undefined && (obj.resourceType = message.resourceType);
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceInfo>, I>>(object: I): ResourceInfo {
    const message = createBaseResourceInfo();
    message.resourceType = object.resourceType ?? "";
    message.resourceName = object.resourceName ?? "";
    message.owner = object.owner ?? "";
    message.description = object.description ?? "";
    return message;
  }

};
export interface Help {
  links: Link[];
}

function createBaseHelp(): Help {
  return {
    links: []
  };
}

export const Help = {
  encode(message: Help, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.links) {
      Help_Link.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Help {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.links.push(Help_Link.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Help {
    return {
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Help_Link.fromJSON(e)) : []
    };
  },

  toJSON(message: Help): unknown {
    const obj: any = {};

    if (message.links) {
      obj.links = message.links.map(e => e ? Help_Link.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Help>, I>>(object: I): Help {
    const message = createBaseHelp();
    message.links = object.links?.map(e => Link.fromPartial(e)) || [];
    return message;
  }

};
export interface Help_Link {
  description: string;
  url: string;
}

function createBaseHelp_Link(): Help_Link {
  return {
    description: "",
    url: ""
  };
}

export const Help_Link = {
  encode(message: Help_Link, writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Help_Link {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelp_Link();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;

        case 2:
          message.url = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Help_Link {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },

  toJSON(message: Help_Link): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Help_Link>, I>>(object: I): Help_Link {
    const message = createBaseHelp_Link();
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    return message;
  }

};
export interface LocalizedMessage {
  locale: string;
  message: string;
}

function createBaseLocalizedMessage(): LocalizedMessage {
  return {
    locale: "",
    message: ""
  };
}

export const LocalizedMessage = {
  encode(message: LocalizedMessage, writer = _m0.Writer.create()): _m0.Writer {
    if (message.locale !== "") {
      writer.uint32(10).string(message.locale);
    }

    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalizedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizedMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.locale = reader.string();
          break;

        case 2:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LocalizedMessage {
    return {
      locale: isSet(object.locale) ? String(object.locale) : "",
      message: isSet(object.message) ? String(object.message) : ""
    };
  },

  toJSON(message: LocalizedMessage): unknown {
    const obj: any = {};
    message.locale !== undefined && (obj.locale = message.locale);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LocalizedMessage>, I>>(object: I): LocalizedMessage {
    const message = createBaseLocalizedMessage();
    message.locale = object.locale ?? "";
    message.message = object.message ?? "";
    return message;
  }

};