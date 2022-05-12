import { Operation } from "./operation";
import { CheckError } from "./check_error";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface CheckRequest {
  serviceName: string;
  operation: Operation;
  serviceConfigId: string;
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
export interface CheckResponse {
  operationId: string;
  checkErrors: CheckError[];
  serviceConfigId: string;
  serviceRolloutId: string;
  checkInfo: CheckResponse_CheckInfo;
}

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
export interface CheckResponse_CheckInfo {
  unusedArguments: string[];
  consumerInfo: CheckResponse_ConsumerInfo;
}

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
export interface CheckResponse_ConsumerInfo {
  projectNumber: Long;
  type: CheckResponse_ConsumerInfo_ConsumerType;
  consumerNumber: Long;
}

function createBaseCheckResponse_ConsumerInfo(): CheckResponse_ConsumerInfo {
  return {
    projectNumber: Long.ZERO,
    type: undefined,
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
    message.type = object.type ?? undefined;
    message.consumerNumber = object.consumerNumber !== undefined && object.consumerNumber !== null ? Long.fromValue(object.consumerNumber) : Long.ZERO;
    return message;
  }

};
export enum CheckResponse_ConsumerInfo_ConsumerType {
  /*This is never used.*/
  CONSUMER_TYPE_UNSPECIFIED = 0,

  /*The consumer is a Google Cloud Project.*/
  PROJECT = 1,

  /*The consumer is a Google Cloud Folder.*/
  FOLDER = 2,

  /*The consumer is a Google Cloud Organization.*/
  ORGANIZATION = 3,

  /*Service-specific resource container which is defined by the service
  producer to offer their users the ability to manage service control
  functionalities at a finer level of granularity than the PROJECT.*/
  SERVICE_SPECIFIC = 4,
  UNRECOGNIZED = -1,
}
export function checkResponse_ConsumerInfo_ConsumerTypeFromJSON(object: any): CheckResponse_ConsumerInfo_ConsumerType {
  switch (object) {
    case "CONSUMER_TYPE_UNSPECIFIED":
      return CheckResponse_ConsumerInfo_ConsumerType.CONSUMER_TYPE_UNSPECIFIED;

    case "PROJECT":
      return CheckResponse_ConsumerInfo_ConsumerType.PROJECT;

    case "FOLDER":
      return CheckResponse_ConsumerInfo_ConsumerType.FOLDER;

    case "ORGANIZATION":
      return CheckResponse_ConsumerInfo_ConsumerType.ORGANIZATION;

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
export interface ReportRequest {
  serviceName: string;
  operations: Operation[];
  serviceConfigId: string;
}

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
export interface ReportResponse {
  reportErrors: ReportResponse_ReportError[];
  serviceConfigId: string;
  serviceRolloutId: string;
}

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
export interface ReportResponse_ReportError {
  operationId: string;
  status: Status;
}

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