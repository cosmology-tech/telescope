import { Operation } from "./operation";
import { CheckError } from "./check_error";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";

/**
 * The type of the consumer as defined in
 * [Google Resource Manager](https://cloud.google.com/resource-manager/).
 */
export enum CheckResponse_ConsumerInfo_ConsumerType {
  /** CONSUMER_TYPE_UNSPECIFIED - This is never used. */
  CONSUMER_TYPE_UNSPECIFIED = 0,

  /** PROJECT - The consumer is a Google Cloud Project. */
  PROJECT = 1,

  /** FOLDER - The consumer is a Google Cloud Folder. */
  FOLDER = 2,

  /** ORGANIZATION - The consumer is a Google Cloud Organization. */
  ORGANIZATION = 3,

  /**
   * SERVICE_SPECIFIC - Service-specific resource container which is defined by the service
   * producer to offer their users the ability to manage service control
   * functionalities at a finer level of granularity than the PROJECT.
   */
  SERVICE_SPECIFIC = 4,
  UNRECOGNIZED = -1,
}
export function checkResponse_ConsumerInfo_ConsumerTypeFromJSON(object: any): CheckResponse_ConsumerInfo_ConsumerType {
  switch (object) {
    case 0:
    case "CONSUMER_TYPE_UNSPECIFIED":
      return CheckResponse_ConsumerInfo_ConsumerType.CONSUMER_TYPE_UNSPECIFIED;

    case 1:
    case "PROJECT":
      return CheckResponse_ConsumerInfo_ConsumerType.PROJECT;

    case 2:
    case "FOLDER":
      return CheckResponse_ConsumerInfo_ConsumerType.FOLDER;

    case 3:
    case "ORGANIZATION":
      return CheckResponse_ConsumerInfo_ConsumerType.ORGANIZATION;

    case 4:
    case "SERVICE_SPECIFIC":
      return CheckResponse_ConsumerInfo_ConsumerType.SERVICE_SPECIFIC;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckResponse_ConsumerInfo_ConsumerType.UNRECOGNIZED;
  }
}
export function checkResponse_ConsumerInfo_ConsumerTypeToJSON(object: CheckResponse_ConsumerInfo_ConsumerType): string {
  switch (object) {
    case CheckResponse_ConsumerInfo_ConsumerType.CONSUMER_TYPE_UNSPECIFIED:
      return "CONSUMER_TYPE_UNSPECIFIED";

    case CheckResponse_ConsumerInfo_ConsumerType.PROJECT:
      return "PROJECT";

    case CheckResponse_ConsumerInfo_ConsumerType.FOLDER:
      return "FOLDER";

    case CheckResponse_ConsumerInfo_ConsumerType.ORGANIZATION:
      return "ORGANIZATION";

    case CheckResponse_ConsumerInfo_ConsumerType.SERVICE_SPECIFIC:
      return "SERVICE_SPECIFIC";

    default:
      return "UNKNOWN";
  }
}

/** Request message for the Check method. */
export interface CheckRequest {
  /**
   * The service name as specified in its service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See
   * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   * for the definition of a service name.
   */
  serviceName: string;

  /** The operation to be checked. */
  operation: Operation;

  /**
   * Specifies which version of service configuration should be used to process
   * the request.
   * 
   * If unspecified or no matching version can be found, the
   * latest one will be used.
   */
  serviceConfigId: string;
}

/** Response message for the Check method. */
export interface CheckResponse {
  /**
   * The same operation_id value used in the
   * [CheckRequest][google.api.servicecontrol.v1.CheckRequest]. Used for logging
   * and diagnostics purposes.
   */
  operationId: string;

  /**
   * Indicate the decision of the check.
   * 
   * If no check errors are present, the service should process the operation.
   * Otherwise the service should use the list of errors to determine the
   * appropriate action.
   */
  checkErrors: CheckError[];

  /** The actual config id used to process the request. */
  serviceConfigId: string;

  /** The current service rollout id used to process the request. */
  serviceRolloutId: string;

  /** Feedback data returned from the server during processing a Check request. */
  checkInfo: CheckResponse_CheckInfo;
}

/** Contains additional information about the check operation. */
export interface CheckResponse_CheckInfo {
  /**
   * A list of fields and label keys that are ignored by the server.
   * The client doesn't need to send them for following requests to improve
   * performance and allow better aggregation.
   */
  unusedArguments: string[];

  /** Consumer info of this check. */
  consumerInfo: CheckResponse_ConsumerInfo;
}

/** `ConsumerInfo` provides information about the consumer. */
export interface CheckResponse_ConsumerInfo {
  /**
   * The Google cloud project number, e.g. 1234567890. A value of 0 indicates
   * no project number is found.
   * 
   * NOTE: This field is deprecated after we support flexible consumer
   * id. New code should not depend on this field anymore.
   */
  projectNumber: Long;

  /**
   * The type of the consumer which should have been defined in
   * [Google Resource Manager](https://cloud.google.com/resource-manager/).
   */
  type: CheckResponse_ConsumerInfo_ConsumerType;

  /**
   * The consumer identity number, can be Google cloud project number, folder
   * number or organization number e.g. 1234567890. A value of 0 indicates no
   * consumer number is found.
   */
  consumerNumber: Long;
}

/** Request message for the Report method. */
export interface ReportRequest {
  /**
   * The service name as specified in its service configuration. For example,
   * `"pubsub.googleapis.com"`.
   * 
   * See
   * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   * for the definition of a service name.
   */
  serviceName: string;

  /**
   * Operations to be reported.
   * 
   * Typically the service should report one operation per request.
   * Putting multiple operations into a single request is allowed, but should
   * be used only when multiple operations are natually available at the time
   * of the report.
   * 
   * There is no limit on the number of operations in the same ReportRequest,
   * however the ReportRequest size should be no larger than 1MB. See
   * [ReportResponse.report_errors][google.api.servicecontrol.v1.ReportResponse.report_errors]
   * for partial failure behavior.
   */
  operations: Operation[];

  /**
   * Specifies which version of service config should be used to process the
   * request.
   * 
   * If unspecified or no matching version can be found, the
   * latest one will be used.
   */
  serviceConfigId: string;
}

/** Response message for the Report method. */
export interface ReportResponse {
  /**
   * Partial failures, one for each `Operation` in the request that failed
   * processing. There are three possible combinations of the RPC status:
   * 
   * 1. The combination of a successful RPC status and an empty `report_errors`
   * list indicates a complete success where all `Operations` in the
   * request are processed successfully.
   * 2. The combination of a successful RPC status and a non-empty
   * `report_errors` list indicates a partial success where some
   * `Operations` in the request succeeded. Each
   * `Operation` that failed processing has a corresponding item
   * in this list.
   * 3. A failed RPC status indicates a general non-deterministic failure.
   * When this happens, it's impossible to know which of the
   * 'Operations' in the request succeeded or failed.
   */
  reportErrors: ReportResponse_ReportError[];

  /** The actual config id used to process the request. */
  serviceConfigId: string;

  /** The current service rollout id used to process the request. */
  serviceRolloutId: string;
}

/**
 * Represents the processing error of one
 * [Operation][google.api.servicecontrol.v1.Operation] in the request.
 */
export interface ReportResponse_ReportError {
  /**
   * The
   * [Operation.operation_id][google.api.servicecontrol.v1.Operation.operation_id]
   * value from the request.
   */
  operationId: string;

  /**
   * Details of the error when processing the
   * [Operation][google.api.servicecontrol.v1.Operation].
   */
  status: Status;
}

function createBaseCheckRequest(): CheckRequest {
  return {
    serviceName: "",
    operation: undefined,
    serviceConfigId: ""
  };
}

export const CheckRequest = {
  encode(message: CheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.operation !== undefined) {
      Operation.encode(message.operation, writer.uint32(18).fork()).ldelim();
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(34).string(message.serviceConfigId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.operation = Operation.decode(reader, reader.uint32());
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

  fromJSON(object: any): CheckRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      operation: isSet(object.operation) ? Operation.fromJSON(object.operation) : undefined,
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : ""
    };
  },

  toJSON(message: CheckRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.operation !== undefined && (obj.operation = message.operation ? Operation.toJSON(message.operation) : undefined);
    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckRequest>, I>>(object: I): CheckRequest {
    const message = createBaseCheckRequest();
    message.serviceName = object.serviceName ?? "";
    message.operation = object.operation !== undefined && object.operation !== null ? Operation.fromPartial(object.operation) : undefined;
    message.serviceConfigId = object.serviceConfigId ?? "";
    return message;
  }

};

function createBaseCheckResponse(): CheckResponse {
  return {
    operationId: "",
    checkErrors: [],
    serviceConfigId: "",
    serviceRolloutId: "",
    checkInfo: undefined
  };
}

export const CheckResponse = {
  encode(message: CheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }

    for (const v of message.checkErrors) {
      CheckError.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(42).string(message.serviceConfigId);
    }

    if (message.serviceRolloutId !== "") {
      writer.uint32(90).string(message.serviceRolloutId);
    }

    if (message.checkInfo !== undefined) {
      CheckResponse_CheckInfo.encode(message.checkInfo, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;

        case 2:
          message.checkErrors.push(CheckError.decode(reader, reader.uint32()));
          break;

        case 5:
          message.serviceConfigId = reader.string();
          break;

        case 11:
          message.serviceRolloutId = reader.string();
          break;

        case 6:
          message.checkInfo = CheckResponse_CheckInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckResponse {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      checkErrors: Array.isArray(object?.checkErrors) ? object.checkErrors.map((e: any) => CheckError.fromJSON(e)) : [],
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : "",
      serviceRolloutId: isSet(object.serviceRolloutId) ? String(object.serviceRolloutId) : "",
      checkInfo: isSet(object.checkInfo) ? CheckResponse_CheckInfo.fromJSON(object.checkInfo) : undefined
    };
  },

  toJSON(message: CheckResponse): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);

    if (message.checkErrors) {
      obj.checkErrors = message.checkErrors.map(e => e ? CheckError.toJSON(e) : undefined);
    } else {
      obj.checkErrors = [];
    }

    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    message.serviceRolloutId !== undefined && (obj.serviceRolloutId = message.serviceRolloutId);
    message.checkInfo !== undefined && (obj.checkInfo = message.checkInfo ? CheckResponse_CheckInfo.toJSON(message.checkInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse>, I>>(object: I): CheckResponse {
    const message = createBaseCheckResponse();
    message.operationId = object.operationId ?? "";
    message.checkErrors = object.checkErrors?.map(e => CheckError.fromPartial(e)) || [];
    message.serviceConfigId = object.serviceConfigId ?? "";
    message.serviceRolloutId = object.serviceRolloutId ?? "";
    message.checkInfo = object.checkInfo !== undefined && object.checkInfo !== null ? CheckResponse_CheckInfo.fromPartial(object.checkInfo) : undefined;
    return message;
  }

};

function createBaseCheckResponse_CheckInfo(): CheckResponse_CheckInfo {
  return {
    unusedArguments: [],
    consumerInfo: undefined
  };
}

export const CheckResponse_CheckInfo = {
  encode(message: CheckResponse_CheckInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unusedArguments) {
      writer.uint32(10).string(v!);
    }

    if (message.consumerInfo !== undefined) {
      CheckResponse_ConsumerInfo.encode(message.consumerInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_CheckInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse_CheckInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.unusedArguments.push(reader.string());
          break;

        case 2:
          message.consumerInfo = CheckResponse_ConsumerInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckResponse_CheckInfo {
    return {
      unusedArguments: Array.isArray(object?.unusedArguments) ? object.unusedArguments.map((e: any) => String(e)) : [],
      consumerInfo: isSet(object.consumerInfo) ? CheckResponse_ConsumerInfo.fromJSON(object.consumerInfo) : undefined
    };
  },

  toJSON(message: CheckResponse_CheckInfo): unknown {
    const obj: any = {};

    if (message.unusedArguments) {
      obj.unusedArguments = message.unusedArguments.map(e => e);
    } else {
      obj.unusedArguments = [];
    }

    message.consumerInfo !== undefined && (obj.consumerInfo = message.consumerInfo ? CheckResponse_ConsumerInfo.toJSON(message.consumerInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse_CheckInfo>, I>>(object: I): CheckResponse_CheckInfo {
    const message = createBaseCheckResponse_CheckInfo();
    message.unusedArguments = object.unusedArguments?.map(e => e) || [];
    message.consumerInfo = object.consumerInfo !== undefined && object.consumerInfo !== null ? CheckResponse_ConsumerInfo.fromPartial(object.consumerInfo) : undefined;
    return message;
  }

};

function createBaseCheckResponse_ConsumerInfo(): CheckResponse_ConsumerInfo {
  return {
    projectNumber: Long.ZERO,
    type: 0,
    consumerNumber: Long.ZERO
  };
}

export const CheckResponse_ConsumerInfo = {
  encode(message: CheckResponse_ConsumerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectNumber.isZero()) {
      writer.uint32(8).int64(message.projectNumber);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    if (!message.consumerNumber.isZero()) {
      writer.uint32(24).int64(message.consumerNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_ConsumerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse_ConsumerInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.projectNumber = (reader.int64() as Long);
          break;

        case 2:
          message.type = (reader.int32() as any);
          break;

        case 3:
          message.consumerNumber = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CheckResponse_ConsumerInfo {
    return {
      projectNumber: isSet(object.projectNumber) ? Long.fromString(object.projectNumber) : Long.ZERO,
      type: isSet(object.type) ? checkResponse_ConsumerInfo_ConsumerTypeFromJSON(object.type) : 0,
      consumerNumber: isSet(object.consumerNumber) ? Long.fromString(object.consumerNumber) : Long.ZERO
    };
  },

  toJSON(message: CheckResponse_ConsumerInfo): unknown {
    const obj: any = {};
    message.projectNumber !== undefined && (obj.projectNumber = (message.projectNumber || Long.ZERO).toString());
    message.type !== undefined && (obj.type = checkResponse_ConsumerInfo_ConsumerTypeToJSON(message.type));
    message.consumerNumber !== undefined && (obj.consumerNumber = (message.consumerNumber || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse_ConsumerInfo>, I>>(object: I): CheckResponse_ConsumerInfo {
    const message = createBaseCheckResponse_ConsumerInfo();
    message.projectNumber = object.projectNumber !== undefined && object.projectNumber !== null ? Long.fromValue(object.projectNumber) : Long.ZERO;
    message.type = object.type ?? 0;
    message.consumerNumber = object.consumerNumber !== undefined && object.consumerNumber !== null ? Long.fromValue(object.consumerNumber) : Long.ZERO;
    return message;
  }

};

function createBaseReportRequest(): ReportRequest {
  return {
    serviceName: "",
    operations: [],
    serviceConfigId: ""
  };
}

export const ReportRequest = {
  encode(message: ReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(26).string(message.serviceConfigId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;

        case 3:
          message.serviceConfigId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReportRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromJSON(e)) : [],
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : ""
    };
  },

  toJSON(message: ReportRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);

    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }

    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportRequest>, I>>(object: I): ReportRequest {
    const message = createBaseReportRequest();
    message.serviceName = object.serviceName ?? "";
    message.operations = object.operations?.map(e => Operation.fromPartial(e)) || [];
    message.serviceConfigId = object.serviceConfigId ?? "";
    return message;
  }

};

function createBaseReportResponse(): ReportResponse {
  return {
    reportErrors: [],
    serviceConfigId: "",
    serviceRolloutId: ""
  };
}

export const ReportResponse = {
  encode(message: ReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reportErrors) {
      ReportResponse_ReportError.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(18).string(message.serviceConfigId);
    }

    if (message.serviceRolloutId !== "") {
      writer.uint32(34).string(message.serviceRolloutId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reportErrors.push(ReportResponse_ReportError.decode(reader, reader.uint32()));
          break;

        case 2:
          message.serviceConfigId = reader.string();
          break;

        case 4:
          message.serviceRolloutId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReportResponse {
    return {
      reportErrors: Array.isArray(object?.reportErrors) ? object.reportErrors.map((e: any) => ReportResponse_ReportError.fromJSON(e)) : [],
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : "",
      serviceRolloutId: isSet(object.serviceRolloutId) ? String(object.serviceRolloutId) : ""
    };
  },

  toJSON(message: ReportResponse): unknown {
    const obj: any = {};

    if (message.reportErrors) {
      obj.reportErrors = message.reportErrors.map(e => e ? ReportResponse_ReportError.toJSON(e) : undefined);
    } else {
      obj.reportErrors = [];
    }

    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    message.serviceRolloutId !== undefined && (obj.serviceRolloutId = message.serviceRolloutId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportResponse>, I>>(object: I): ReportResponse {
    const message = createBaseReportResponse();
    message.reportErrors = object.reportErrors?.map(e => ReportResponse_ReportError.fromPartial(e)) || [];
    message.serviceConfigId = object.serviceConfigId ?? "";
    message.serviceRolloutId = object.serviceRolloutId ?? "";
    return message;
  }

};

function createBaseReportResponse_ReportError(): ReportResponse_ReportError {
  return {
    operationId: "",
    status: undefined
  };
}

export const ReportResponse_ReportError = {
  encode(message: ReportResponse_ReportError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }

    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse_ReportError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportResponse_ReportError();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;

        case 2:
          message.status = Status.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ReportResponse_ReportError {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined
    };
  },

  toJSON(message: ReportResponse_ReportError): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportResponse_ReportError>, I>>(object: I): ReportResponse_ReportError {
    const message = createBaseReportResponse_ReportError();
    message.operationId = object.operationId ?? "";
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    return message;
  }

};