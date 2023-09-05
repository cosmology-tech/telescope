import { Duration, DurationSDKType } from "../protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, isObject } from "../../helpers";
export const protobufPackage = "google.rpc";
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay: Duration;
}
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfoSDKType {
  retry_delay: DurationSDKType;
}
/** Describes additional debugging info. */
export interface DebugInfo {
  /** The stack trace entries indicating where the error occurred. */
  stackEntries: string[];
  /** Additional debugging information provided by the server. */
  detail: string;
}
/** Describes additional debugging info. */
export interface DebugInfoSDKType {
  stack_entries: string[];
  detail: string;
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailure {
  /** Describes all quota violations. */
  violations: QuotaFailure_Violation[];
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailureSDKType {
  violations: QuotaFailure_ViolationSDKType[];
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_Violation {
  /**
   * The subject on which the quota check failed.
   * For example, "clientip:<ip address of client>" or "project:<Google
   * developer project id>".
   */
  subject: string;
  /**
   * A description of how the quota check failed. Clients can use this
   * description to find more about the quota configuration in the service's
   * public documentation, or find the relevant quota limit to adjust through
   * developer console.
   * 
   * For example: "Service disabled" or "Daily Limit for read operations
   * exceeded".
   */
  description: string;
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_ViolationSDKType {
  subject: string;
  description: string;
}
export interface ErrorInfo_MetadataEntry {
  key: string;
  value: string;
}
export interface ErrorInfo_MetadataEntrySDKType {
  key: string;
  value: string;
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfo {
  /**
   * The reason of the error. This is a constant value that identifies the
   * proximate cause of the error. Error reasons are unique within a particular
   * domain of errors. This should be at most 63 characters and match
   * /[A-Z0-9_]+/.
   */
  reason: string;
  /**
   * The logical grouping to which the "reason" belongs. The error domain
   * is typically the registered service name of the tool or product that
   * generates the error. Example: "pubsub.googleapis.com". If the error is
   * generated by some common infrastructure, the error domain must be a
   * globally unique value that identifies the infrastructure. For Google API
   * infrastructure, the error domain is "googleapis.com".
   */
  domain: string;
  /**
   * Additional structured details about this error.
   * 
   * Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
   * length. When identifying the current value of an exceeded limit, the units
   * should be contained in the key, not the value.  For example, rather than
   * {"instanceLimit": "100/request"}, should be returned as,
   * {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
   * instances that can be created in a single (batch) request.
   */
  metadata: {
    [key: string]: string;
  };
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfoSDKType {
  reason: string;
  domain: string;
  metadata: {
    [key: string]: string;
  };
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations: PreconditionFailure_Violation[];
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailureSDKType {
  violations: PreconditionFailure_ViolationSDKType[];
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_Violation {
  /**
   * The type of PreconditionFailure. We recommend using a service-specific
   * enum type to define the supported precondition violation subjects. For
   * example, "TOS" for "Terms of Service violation".
   */
  type: string;
  /**
   * The subject, relative to the type, that failed.
   * For example, "google.com/cloud" relative to the "TOS" type would indicate
   * which terms of service is being referenced.
   */
  subject: string;
  /**
   * A description of how the precondition failed. Developers can use this
   * description to understand how to fix the failure.
   * 
   * For example: "Terms of service not accepted".
   */
  description: string;
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_ViolationSDKType {
  type: string;
  subject: string;
  description: string;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations: BadRequest_FieldViolation[];
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequestSDKType {
  field_violations: BadRequest_FieldViolationSDKType[];
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolation {
  /**
   * A path leading to a field in the request body. The value will be a
   * sequence of dot-separated identifiers that identify a protocol buffer
   * field. E.g., "field_violations.field" would identify this field.
   */
  field: string;
  /** A description of why the request element is bad. */
  description: string;
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolationSDKType {
  field: string;
  description: string;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfo {
  /**
   * An opaque string that should only be interpreted by the service generating
   * it. For example, it can be used to identify requests in the service's logs.
   */
  requestId: string;
  /**
   * Any data that was used to serve this request. For example, an encrypted
   * stack trace that can be sent back to the service provider for debugging.
   */
  servingData: string;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfoSDKType {
  request_id: string;
  serving_data: string;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfo {
  /**
   * A name for the type of resource being accessed, e.g. "sql table",
   * "cloud storage bucket", "file", "Google calendar"; or the type URL
   * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
   */
  resourceType: string;
  /**
   * The name of the resource being accessed.  For example, a shared calendar
   * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
   * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
   */
  resourceName: string;
  /**
   * The owner of the resource (optional).
   * For example, "user:<owner email>" or "project:<Google developer project
   * id>".
   */
  owner: string;
  /**
   * Describes what error is encountered when accessing this resource.
   * For example, updating a cloud project may require the `writer` permission
   * on the developer console project.
   */
  description: string;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfoSDKType {
  resource_type: string;
  resource_name: string;
  owner: string;
  description: string;
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links: Help_Link[];
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface HelpSDKType {
  links: Help_LinkSDKType[];
}
/** Describes a URL link. */
export interface Help_Link {
  /** Describes what the link offers. */
  description: string;
  /** The URL of the link. */
  url: string;
}
/** Describes a URL link. */
export interface Help_LinkSDKType {
  description: string;
  url: string;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessage {
  /**
   * The locale used following the specification defined at
   * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
   * Examples are: "en-US", "fr-CH", "es-MX"
   */
  locale: string;
  /** The localized error message in the above locale. */
  message: string;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessageSDKType {
  locale: string;
  message: string;
}
function createBaseRetryInfo(): RetryInfo {
  return {
    retryDelay: Duration.fromPartial({})
  };
}
export const RetryInfo = {
  encode(message: RetryInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.retryDelay !== undefined) {
      Duration.encode(message.retryDelay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RetryInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retryDelay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RetryInfo {
    const obj = createBaseRetryInfo();
    if (isSet(object.retryDelay)) obj.retryDelay = Duration.fromJSON(object.retryDelay);
    return obj;
  },
  toJSON(message: RetryInfo): unknown {
    const obj: any = {};
    message.retryDelay !== undefined && (obj.retryDelay = message.retryDelay ? Duration.toJSON(message.retryDelay) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<RetryInfo>): RetryInfo {
    const message = createBaseRetryInfo();
    if (object.retryDelay !== undefined && object.retryDelay !== null) {
      message.retryDelay = Duration.fromPartial(object.retryDelay);
    }
    return message;
  },
  fromSDK(object: RetryInfoSDKType): RetryInfo {
    return {
      retryDelay: object.retry_delay ? Duration.fromSDK(object.retry_delay) : undefined
    };
  },
  fromSDKJSON(object: any): RetryInfoSDKType {
    return {
      retry_delay: isSet(object.retry_delay) ? Duration.fromSDKJSON(object.retry_delay) : undefined
    };
  },
  toSDK(message: RetryInfo): RetryInfoSDKType {
    const obj: any = {};
    message.retryDelay !== undefined && (obj.retry_delay = message.retryDelay ? Duration.toSDK(message.retryDelay) : undefined);
    return obj;
  }
};
function createBaseDebugInfo(): DebugInfo {
  return {
    stackEntries: [],
    detail: ""
  };
}
export const DebugInfo = {
  encode(message: DebugInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stackEntries) {
      writer.uint32(10).string(v!);
    }
    if (message.detail !== "") {
      writer.uint32(18).string(message.detail);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DebugInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stackEntries.push(reader.string());
          break;
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
    const obj = createBaseDebugInfo();
    if (Array.isArray(object?.stackEntries)) object.stackEntries.map((e: any) => String(e));
    if (isSet(object.detail)) obj.detail = String(object.detail);
    return obj;
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
  fromPartial(object: DeepPartial<DebugInfo>): DebugInfo {
    const message = createBaseDebugInfo();
    message.stackEntries = object.stackEntries?.map(e => e) || [];
    message.detail = object.detail ?? "";
    return message;
  },
  fromSDK(object: DebugInfoSDKType): DebugInfo {
    return {
      stackEntries: Array.isArray(object?.stack_entries) ? object.stack_entries.map((e: any) => e) : [],
      detail: object?.detail
    };
  },
  fromSDKJSON(object: any): DebugInfoSDKType {
    return {
      stack_entries: Array.isArray(object?.stack_entries) ? object.stack_entries.map((e: any) => String(e)) : [],
      detail: isSet(object.detail) ? String(object.detail) : ""
    };
  },
  toSDK(message: DebugInfo): DebugInfoSDKType {
    const obj: any = {};
    if (message.stackEntries) {
      obj.stack_entries = message.stackEntries.map(e => e);
    } else {
      obj.stack_entries = [];
    }
    obj.detail = message.detail;
    return obj;
  }
};
function createBaseQuotaFailure(): QuotaFailure {
  return {
    violations: []
  };
}
export const QuotaFailure = {
  encode(message: QuotaFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQuotaFailure();
    if (Array.isArray(object?.violations)) object.violations.map((e: any) => QuotaFailure_Violation.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<QuotaFailure>): QuotaFailure {
    const message = createBaseQuotaFailure();
    message.violations = object.violations?.map(e => QuotaFailure_Violation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuotaFailureSDKType): QuotaFailure {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => QuotaFailure_Violation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QuotaFailureSDKType {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => QuotaFailure_Violation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QuotaFailure): QuotaFailureSDKType {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? QuotaFailure_Violation.toSDK(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  }
};
function createBaseQuotaFailure_Violation(): QuotaFailure_Violation {
  return {
    subject: "",
    description: ""
  };
}
export const QuotaFailure_Violation = {
  encode(message: QuotaFailure_Violation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaFailure_Violation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseQuotaFailure_Violation();
    if (isSet(object.subject)) obj.subject = String(object.subject);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: QuotaFailure_Violation): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaFailure_Violation>): QuotaFailure_Violation {
    const message = createBaseQuotaFailure_Violation();
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: QuotaFailure_ViolationSDKType): QuotaFailure_Violation {
    return {
      subject: object?.subject,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): QuotaFailure_ViolationSDKType {
    return {
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: QuotaFailure_Violation): QuotaFailure_ViolationSDKType {
    const obj: any = {};
    obj.subject = message.subject;
    obj.description = message.description;
    return obj;
  }
};
function createBaseErrorInfo_MetadataEntry(): ErrorInfo_MetadataEntry {
  return {
    key: "",
    value: ""
  };
}
export const ErrorInfo_MetadataEntry = {
  encode(message: ErrorInfo_MetadataEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorInfo_MetadataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo_MetadataEntry();
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
  fromJSON(object: any): ErrorInfo_MetadataEntry {
    const obj = createBaseErrorInfo_MetadataEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: ErrorInfo_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<ErrorInfo_MetadataEntry>): ErrorInfo_MetadataEntry {
    const message = createBaseErrorInfo_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: ErrorInfo_MetadataEntrySDKType): ErrorInfo_MetadataEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): ErrorInfo_MetadataEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: ErrorInfo_MetadataEntry): ErrorInfo_MetadataEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  }
};
function createBaseErrorInfo(): ErrorInfo {
  return {
    reason: "",
    domain: "",
    metadata: {}
  };
}
export const ErrorInfo = {
  encode(message: ErrorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ErrorInfo_MetadataEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          const entry3 = ErrorInfo_MetadataEntry.decode(reader, reader.uint32());
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
    const obj = createBaseErrorInfo();
    if (isSet(object.reason)) obj.reason = String(object.reason);
    if (isSet(object.domain)) obj.domain = String(object.domain);
    if (isObject(object.metadata)) obj.metadata = Object.entries(object.metadata).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return obj;
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
  fromPartial(object: DeepPartial<ErrorInfo>): ErrorInfo {
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
  },
  fromSDK(object: ErrorInfoSDKType): ErrorInfo {
    return {
      reason: object?.reason,
      domain: object?.domain,
      metadata: isObject(object.metadata) ? Object.entries(object.metadata).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): ErrorInfoSDKType {
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
  toSDK(message: ErrorInfo): ErrorInfoSDKType {
    const obj: any = {};
    obj.reason = message.reason;
    obj.domain = message.domain;
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  }
};
function createBasePreconditionFailure(): PreconditionFailure {
  return {
    violations: []
  };
}
export const PreconditionFailure = {
  encode(message: PreconditionFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.violations) {
      PreconditionFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PreconditionFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(PreconditionFailure_Violation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PreconditionFailure {
    const obj = createBasePreconditionFailure();
    if (Array.isArray(object?.violations)) object.violations.map((e: any) => PreconditionFailure_Violation.fromJSON(e));
    return obj;
  },
  toJSON(message: PreconditionFailure): unknown {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? PreconditionFailure_Violation.toJSON(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PreconditionFailure>): PreconditionFailure {
    const message = createBasePreconditionFailure();
    message.violations = object.violations?.map(e => PreconditionFailure_Violation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PreconditionFailureSDKType): PreconditionFailure {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => PreconditionFailure_Violation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): PreconditionFailureSDKType {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => PreconditionFailure_Violation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: PreconditionFailure): PreconditionFailureSDKType {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? PreconditionFailure_Violation.toSDK(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  }
};
function createBasePreconditionFailure_Violation(): PreconditionFailure_Violation {
  return {
    type: "",
    subject: "",
    description: ""
  };
}
export const PreconditionFailure_Violation = {
  encode(message: PreconditionFailure_Violation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PreconditionFailure_Violation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBasePreconditionFailure_Violation();
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.subject)) obj.subject = String(object.subject);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: PreconditionFailure_Violation): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<PreconditionFailure_Violation>): PreconditionFailure_Violation {
    const message = createBasePreconditionFailure_Violation();
    message.type = object.type ?? "";
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: PreconditionFailure_ViolationSDKType): PreconditionFailure_Violation {
    return {
      type: object?.type,
      subject: object?.subject,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): PreconditionFailure_ViolationSDKType {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: PreconditionFailure_Violation): PreconditionFailure_ViolationSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.subject = message.subject;
    obj.description = message.description;
    return obj;
  }
};
function createBaseBadRequest(): BadRequest {
  return {
    fieldViolations: []
  };
}
export const BadRequest = {
  encode(message: BadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fieldViolations) {
      BadRequest_FieldViolation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseBadRequest();
    if (Array.isArray(object?.fieldViolations)) object.fieldViolations.map((e: any) => BadRequest_FieldViolation.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<BadRequest>): BadRequest {
    const message = createBaseBadRequest();
    message.fieldViolations = object.fieldViolations?.map(e => BadRequest_FieldViolation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BadRequestSDKType): BadRequest {
    return {
      fieldViolations: Array.isArray(object?.field_violations) ? object.field_violations.map((e: any) => BadRequest_FieldViolation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): BadRequestSDKType {
    return {
      field_violations: Array.isArray(object?.field_violations) ? object.field_violations.map((e: any) => BadRequest_FieldViolation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: BadRequest): BadRequestSDKType {
    const obj: any = {};
    if (message.fieldViolations) {
      obj.field_violations = message.fieldViolations.map(e => e ? BadRequest_FieldViolation.toSDK(e) : undefined);
    } else {
      obj.field_violations = [];
    }
    return obj;
  }
};
function createBaseBadRequest_FieldViolation(): BadRequest_FieldViolation {
  return {
    field: "",
    description: ""
  };
}
export const BadRequest_FieldViolation = {
  encode(message: BadRequest_FieldViolation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadRequest_FieldViolation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseBadRequest_FieldViolation();
    if (isSet(object.field)) obj.field = String(object.field);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: BadRequest_FieldViolation): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<BadRequest_FieldViolation>): BadRequest_FieldViolation {
    const message = createBaseBadRequest_FieldViolation();
    message.field = object.field ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: BadRequest_FieldViolationSDKType): BadRequest_FieldViolation {
    return {
      field: object?.field,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): BadRequest_FieldViolationSDKType {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: BadRequest_FieldViolation): BadRequest_FieldViolationSDKType {
    const obj: any = {};
    obj.field = message.field;
    obj.description = message.description;
    return obj;
  }
};
function createBaseRequestInfo(): RequestInfo {
  return {
    requestId: "",
    servingData: ""
  };
}
export const RequestInfo = {
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.servingData !== "") {
      writer.uint32(18).string(message.servingData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseRequestInfo();
    if (isSet(object.requestId)) obj.requestId = String(object.requestId);
    if (isSet(object.servingData)) obj.servingData = String(object.servingData);
    return obj;
  },
  toJSON(message: RequestInfo): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.servingData !== undefined && (obj.servingData = message.servingData);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.requestId = object.requestId ?? "";
    message.servingData = object.servingData ?? "";
    return message;
  },
  fromSDK(object: RequestInfoSDKType): RequestInfo {
    return {
      requestId: object?.request_id,
      servingData: object?.serving_data
    };
  },
  fromSDKJSON(object: any): RequestInfoSDKType {
    return {
      request_id: isSet(object.request_id) ? String(object.request_id) : "",
      serving_data: isSet(object.serving_data) ? String(object.serving_data) : ""
    };
  },
  toSDK(message: RequestInfo): RequestInfoSDKType {
    const obj: any = {};
    obj.request_id = message.requestId;
    obj.serving_data = message.servingData;
    return obj;
  }
};
function createBaseResourceInfo(): ResourceInfo {
  return {
    resourceType: "",
    resourceName: "",
    owner: "",
    description: ""
  };
}
export const ResourceInfo = {
  encode(message: ResourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseResourceInfo();
    if (isSet(object.resourceType)) obj.resourceType = String(object.resourceType);
    if (isSet(object.resourceName)) obj.resourceName = String(object.resourceName);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    message.resourceType !== undefined && (obj.resourceType = message.resourceType);
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<ResourceInfo>): ResourceInfo {
    const message = createBaseResourceInfo();
    message.resourceType = object.resourceType ?? "";
    message.resourceName = object.resourceName ?? "";
    message.owner = object.owner ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: ResourceInfoSDKType): ResourceInfo {
    return {
      resourceType: object?.resource_type,
      resourceName: object?.resource_name,
      owner: object?.owner,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): ResourceInfoSDKType {
    return {
      resource_type: isSet(object.resource_type) ? String(object.resource_type) : "",
      resource_name: isSet(object.resource_name) ? String(object.resource_name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: ResourceInfo): ResourceInfoSDKType {
    const obj: any = {};
    obj.resource_type = message.resourceType;
    obj.resource_name = message.resourceName;
    obj.owner = message.owner;
    obj.description = message.description;
    return obj;
  }
};
function createBaseHelp(): Help {
  return {
    links: []
  };
}
export const Help = {
  encode(message: Help, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.links) {
      Help_Link.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Help {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseHelp();
    if (Array.isArray(object?.links)) object.links.map((e: any) => Help_Link.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<Help>): Help {
    const message = createBaseHelp();
    message.links = object.links?.map(e => Help_Link.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: HelpSDKType): Help {
    return {
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Help_Link.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): HelpSDKType {
    return {
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Help_Link.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Help): HelpSDKType {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map(e => e ? Help_Link.toSDK(e) : undefined);
    } else {
      obj.links = [];
    }
    return obj;
  }
};
function createBaseHelp_Link(): Help_Link {
  return {
    description: "",
    url: ""
  };
}
export const Help_Link = {
  encode(message: Help_Link, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Help_Link {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseHelp_Link();
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.url)) obj.url = String(object.url);
    return obj;
  },
  toJSON(message: Help_Link): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
  fromPartial(object: DeepPartial<Help_Link>): Help_Link {
    const message = createBaseHelp_Link();
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromSDK(object: Help_LinkSDKType): Help_Link {
    return {
      description: object?.description,
      url: object?.url
    };
  },
  fromSDKJSON(object: any): Help_LinkSDKType {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  toSDK(message: Help_Link): Help_LinkSDKType {
    const obj: any = {};
    obj.description = message.description;
    obj.url = message.url;
    return obj;
  }
};
function createBaseLocalizedMessage(): LocalizedMessage {
  return {
    locale: "",
    message: ""
  };
}
export const LocalizedMessage = {
  encode(message: LocalizedMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.locale !== "") {
      writer.uint32(10).string(message.locale);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalizedMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseLocalizedMessage();
    if (isSet(object.locale)) obj.locale = String(object.locale);
    if (isSet(object.message)) obj.message = String(object.message);
    return obj;
  },
  toJSON(message: LocalizedMessage): unknown {
    const obj: any = {};
    message.locale !== undefined && (obj.locale = message.locale);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial(object: DeepPartial<LocalizedMessage>): LocalizedMessage {
    const message = createBaseLocalizedMessage();
    message.locale = object.locale ?? "";
    message.message = object.message ?? "";
    return message;
  },
  fromSDK(object: LocalizedMessageSDKType): LocalizedMessage {
    return {
      locale: object?.locale,
      message: object?.message
    };
  },
  fromSDKJSON(object: any): LocalizedMessageSDKType {
    return {
      locale: isSet(object.locale) ? String(object.locale) : "",
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  toSDK(message: LocalizedMessage): LocalizedMessageSDKType {
    const obj: any = {};
    obj.locale = message.locale;
    obj.message = message.message;
    return obj;
  }
};