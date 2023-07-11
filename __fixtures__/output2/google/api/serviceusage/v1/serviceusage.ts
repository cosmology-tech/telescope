//@ts-nocheck
/* eslint-disable */
import { Service } from "./resources";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "google.api.serviceusage.v1";
/**
 * Enum to determine if service usage should be checked when disabling a
 * service.
 */
export enum DisableServiceRequest_CheckIfServiceHasUsage {
  /** CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED - When unset, the default behavior is used, which is SKIP. */
  CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = 0,
  /** SKIP - If set, skip checking service usage when disabling a service. */
  SKIP = 1,
  /**
   * CHECK - If set, service usage is checked when disabling the service. If a
   * service, or its dependents, has usage in the last 30 days, the request
   * returns a FAILED_PRECONDITION error.
   */
  CHECK = 2,
  UNRECOGNIZED = -1,
}
export function disableServiceRequest_CheckIfServiceHasUsageFromJSON(object: any): DisableServiceRequest_CheckIfServiceHasUsage {
  switch (object) {
    case 0:
    case "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED":
      return DisableServiceRequest_CheckIfServiceHasUsage.CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED;
    case 1:
    case "SKIP":
      return DisableServiceRequest_CheckIfServiceHasUsage.SKIP;
    case 2:
    case "CHECK":
      return DisableServiceRequest_CheckIfServiceHasUsage.CHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DisableServiceRequest_CheckIfServiceHasUsage.UNRECOGNIZED;
  }
}
export function disableServiceRequest_CheckIfServiceHasUsageToJSON(object: DisableServiceRequest_CheckIfServiceHasUsage): string {
  switch (object) {
    case DisableServiceRequest_CheckIfServiceHasUsage.CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED:
      return "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED";
    case DisableServiceRequest_CheckIfServiceHasUsage.SKIP:
      return "SKIP";
    case DisableServiceRequest_CheckIfServiceHasUsage.CHECK:
      return "CHECK";
    case DisableServiceRequest_CheckIfServiceHasUsage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Request message for the `EnableService` method. */
export interface EnableServiceRequest {
  /**
   * Name of the consumer and service to enable the service on.
   * 
   * The `EnableService` and `DisableService` methods currently only support
   * projects.
   * 
   * Enabling a service requires that the service is public or is shared with
   * the user enabling the service.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
}
/**
 * Response message for the `EnableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface EnableServiceResponse {
  /** The new state of the service after enabling. */
  service: Service;
}
/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
  /**
   * Name of the consumer and service to disable the service on.
   * 
   * The enable and disable methods currently only support projects.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
  /**
   * Indicates if services that are enabled and which depend on this service
   * should also be disabled. If not set, an error will be generated if any
   * enabled services depend on the service to be disabled. When set, the
   * service, and any enabled services that depend on it, will be disabled
   * together.
   */
  disableDependentServices: boolean;
  /** Defines the behavior for checking service usage when disabling a service. */
  checkIfServiceHasUsage: DisableServiceRequest_CheckIfServiceHasUsage;
}
/**
 * Response message for the `DisableService` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface DisableServiceResponse {
  /** The new state of the service after disabling. */
  service: Service;
}
/** Request message for the `GetService` method. */
export interface GetServiceRequest {
  /**
   * Name of the consumer and service to get the `ConsumerState` for.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   */
  name: string;
}
/** Request message for the `ListServices` method. */
export interface ListServicesRequest {
  /**
   * Parent to search for services on.
   * 
   * An example name would be:
   * `projects/123` where `123` is the project number.
   */
  parent: string;
  /**
   * Requested size of the next page of data.
   * Requested page size cannot exceed 200.
   * If not set, the default page size is 50.
   */
  pageSize: number;
  /**
   * Token identifying which result to start with, which is returned by a
   * previous list call.
   */
  pageToken: string;
  /**
   * Only list services that conform to the given filter.
   * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
   */
  filter: string;
}
/** Response message for the `ListServices` method. */
export interface ListServicesResponse {
  /** The available services for the requested project. */
  services: Service[];
  /**
   * Token that can be passed to `ListServices` to resume a paginated
   * query.
   */
  nextPageToken: string;
}
/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequest {
  /**
   * Parent to enable services on.
   * 
   * An example name would be:
   * `projects/123` where `123` is the project number.
   * 
   * The `BatchEnableServices` method currently only supports projects.
   */
  parent: string;
  /**
   * The identifiers of the services to enable on the project.
   * 
   * A valid identifier would be:
   * serviceusage.googleapis.com
   * 
   * Enabling services requires that each service is public or is shared with
   * the user enabling the service.
   * 
   * A single request can enable a maximum of 20 services at a time. If more
   * than 20 services are specified, the request will fail, and no state changes
   * will occur.
   */
  serviceIds: string[];
}
/**
 * Response message for the `BatchEnableServices` method.
 * This response message is assigned to the `response` field of the returned
 * Operation when that operation is done.
 */
export interface BatchEnableServicesResponse {
  /** The new state of the services after enabling. */
  services: Service[];
  /**
   * If allow_partial_success is true, and one or more services could not be
   * enabled, this field contains the details about each failure.
   */
  failures: BatchEnableServicesResponse_EnableFailure[];
}
/** Provides error messages for the failing services. */
export interface BatchEnableServicesResponse_EnableFailure {
  /** The service id of a service that could not be enabled. */
  serviceId: string;
  /** An error message describing why the service could not be enabled. */
  errorMessage: string;
}
/** Request message for the `BatchGetServices` method. */
export interface BatchGetServicesRequest {
  /**
   * Parent to retrieve services from.
   * If this is set, the parent of all of the services specified in `names` must
   * match this field. An example name would be: `projects/123` where `123` is
   * the project number. The `BatchGetServices` method currently only supports
   * projects.
   */
  parent: string;
  /**
   * Names of the services to retrieve.
   * 
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com` where `123` is the
   * project number.
   * A single request can get a maximum of 30 services at a time.
   */
  names: string[];
}
/** Response message for the `BatchGetServices` method. */
export interface BatchGetServicesResponse {
  /** The requested Service states. */
  services: Service[];
}
function createBaseEnableServiceRequest(): EnableServiceRequest {
  return {
    name: ""
  };
}
export const EnableServiceRequest = {
  encode(message: EnableServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableServiceRequest();
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
  fromJSON(object: any): EnableServiceRequest {
    const obj = createBaseEnableServiceRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: EnableServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<EnableServiceRequest>): EnableServiceRequest {
    const message = createBaseEnableServiceRequest();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseEnableServiceResponse(): EnableServiceResponse {
  return {
    service: Service.fromPartial({})
  };
}
export const EnableServiceResponse = {
  encode(message: EnableServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnableServiceResponse {
    const obj = createBaseEnableServiceResponse();
    if (isSet(object.service)) obj.service = Service.fromJSON(object.service);
    return obj;
  },
  toJSON(message: EnableServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EnableServiceResponse>): EnableServiceResponse {
    const message = createBaseEnableServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : Service.fromPartial({});
    return message;
  }
};
function createBaseDisableServiceRequest(): DisableServiceRequest {
  return {
    name: "",
    disableDependentServices: false,
    checkIfServiceHasUsage: 0
  };
}
export const DisableServiceRequest = {
  encode(message: DisableServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.disableDependentServices === true) {
      writer.uint32(16).bool(message.disableDependentServices);
    }
    if (message.checkIfServiceHasUsage !== 0) {
      writer.uint32(24).int32(message.checkIfServiceHasUsage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.disableDependentServices = reader.bool();
          break;
        case 3:
          message.checkIfServiceHasUsage = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisableServiceRequest {
    const obj = createBaseDisableServiceRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.disableDependentServices)) obj.disableDependentServices = Boolean(object.disableDependentServices);
    if (isSet(object.checkIfServiceHasUsage)) obj.checkIfServiceHasUsage = disableServiceRequest_CheckIfServiceHasUsageFromJSON(object.checkIfServiceHasUsage);
    return obj;
  },
  toJSON(message: DisableServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.disableDependentServices !== undefined && (obj.disableDependentServices = message.disableDependentServices);
    message.checkIfServiceHasUsage !== undefined && (obj.checkIfServiceHasUsage = disableServiceRequest_CheckIfServiceHasUsageToJSON(message.checkIfServiceHasUsage));
    return obj;
  },
  fromPartial(object: DeepPartial<DisableServiceRequest>): DisableServiceRequest {
    const message = createBaseDisableServiceRequest();
    message.name = object.name ?? "";
    message.disableDependentServices = object.disableDependentServices ?? false;
    message.checkIfServiceHasUsage = object.checkIfServiceHasUsage ?? 0;
    return message;
  }
};
function createBaseDisableServiceResponse(): DisableServiceResponse {
  return {
    service: Service.fromPartial({})
  };
}
export const DisableServiceResponse = {
  encode(message: DisableServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisableServiceResponse {
    const obj = createBaseDisableServiceResponse();
    if (isSet(object.service)) obj.service = Service.fromJSON(object.service);
    return obj;
  },
  toJSON(message: DisableServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DisableServiceResponse>): DisableServiceResponse {
    const message = createBaseDisableServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : Service.fromPartial({});
    return message;
  }
};
function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    name: ""
  };
}
export const GetServiceRequest = {
  encode(message: GetServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceRequest();
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
  fromJSON(object: any): GetServiceRequest {
    const obj = createBaseGetServiceRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: GetServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceRequest>): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseListServicesRequest(): ListServicesRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    filter: ""
  };
}
export const ListServicesRequest = {
  encode(message: ListServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesRequest();
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
        case 4:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListServicesRequest {
    const obj = createBaseListServicesRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.filter)) obj.filter = String(object.filter);
    return obj;
  },
  toJSON(message: ListServicesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesRequest>): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  }
};
function createBaseListServicesResponse(): ListServicesResponse {
  return {
    services: [],
    nextPageToken: ""
  };
}
export const ListServicesResponse = {
  encode(message: ListServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
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
  fromJSON(object: any): ListServicesResponse {
    const obj = createBaseListServicesResponse();
    if (Array.isArray(object?.services)) object.services.map((e: any) => Service.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
  },
  toJSON(message: ListServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesResponse>): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }
};
function createBaseBatchEnableServicesRequest(): BatchEnableServicesRequest {
  return {
    parent: "",
    serviceIds: []
  };
}
export const BatchEnableServicesRequest = {
  encode(message: BatchEnableServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    for (const v of message.serviceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.serviceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEnableServicesRequest {
    const obj = createBaseBatchEnableServicesRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (Array.isArray(object?.serviceIds)) object.serviceIds.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: BatchEnableServicesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    if (message.serviceIds) {
      obj.serviceIds = message.serviceIds.map(e => e);
    } else {
      obj.serviceIds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEnableServicesRequest>): BatchEnableServicesRequest {
    const message = createBaseBatchEnableServicesRequest();
    message.parent = object.parent ?? "";
    message.serviceIds = object.serviceIds?.map(e => e) || [];
    return message;
  }
};
function createBaseBatchEnableServicesResponse(): BatchEnableServicesResponse {
  return {
    services: [],
    failures: []
  };
}
export const BatchEnableServicesResponse = {
  encode(message: BatchEnableServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.failures) {
      BatchEnableServicesResponse_EnableFailure.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 2:
          message.failures.push(BatchEnableServicesResponse_EnableFailure.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEnableServicesResponse {
    const obj = createBaseBatchEnableServicesResponse();
    if (Array.isArray(object?.services)) object.services.map((e: any) => Service.fromJSON(e));
    if (Array.isArray(object?.failures)) object.failures.map((e: any) => BatchEnableServicesResponse_EnableFailure.fromJSON(e));
    return obj;
  },
  toJSON(message: BatchEnableServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? BatchEnableServicesResponse_EnableFailure.toJSON(e) : undefined);
    } else {
      obj.failures = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEnableServicesResponse>): BatchEnableServicesResponse {
    const message = createBaseBatchEnableServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.failures = object.failures?.map(e => BatchEnableServicesResponse_EnableFailure.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBatchEnableServicesResponse_EnableFailure(): BatchEnableServicesResponse_EnableFailure {
  return {
    serviceId: "",
    errorMessage: ""
  };
}
export const BatchEnableServicesResponse_EnableFailure = {
  encode(message: BatchEnableServicesResponse_EnableFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceId !== "") {
      writer.uint32(10).string(message.serviceId);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse_EnableFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesResponse_EnableFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.string();
          break;
        case 2:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEnableServicesResponse_EnableFailure {
    const obj = createBaseBatchEnableServicesResponse_EnableFailure();
    if (isSet(object.serviceId)) obj.serviceId = String(object.serviceId);
    if (isSet(object.errorMessage)) obj.errorMessage = String(object.errorMessage);
    return obj;
  },
  toJSON(message: BatchEnableServicesResponse_EnableFailure): unknown {
    const obj: any = {};
    message.serviceId !== undefined && (obj.serviceId = message.serviceId);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEnableServicesResponse_EnableFailure>): BatchEnableServicesResponse_EnableFailure {
    const message = createBaseBatchEnableServicesResponse_EnableFailure();
    message.serviceId = object.serviceId ?? "";
    message.errorMessage = object.errorMessage ?? "";
    return message;
  }
};
function createBaseBatchGetServicesRequest(): BatchGetServicesRequest {
  return {
    parent: "",
    names: []
  };
}
export const BatchGetServicesRequest = {
  encode(message: BatchGetServicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchGetServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchGetServicesRequest {
    const obj = createBaseBatchGetServicesRequest();
    if (isSet(object.parent)) obj.parent = String(object.parent);
    if (Array.isArray(object?.names)) object.names.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: BatchGetServicesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    if (message.names) {
      obj.names = message.names.map(e => e);
    } else {
      obj.names = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchGetServicesRequest>): BatchGetServicesRequest {
    const message = createBaseBatchGetServicesRequest();
    message.parent = object.parent ?? "";
    message.names = object.names?.map(e => e) || [];
    return message;
  }
};
function createBaseBatchGetServicesResponse(): BatchGetServicesResponse {
  return {
    services: []
  };
}
export const BatchGetServicesResponse = {
  encode(message: BatchGetServicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchGetServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchGetServicesResponse {
    const obj = createBaseBatchGetServicesResponse();
    if (Array.isArray(object?.services)) object.services.map((e: any) => Service.fromJSON(e));
    return obj;
  },
  toJSON(message: BatchGetServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchGetServicesResponse>): BatchGetServicesResponse {
    const message = createBaseBatchGetServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    return message;
  }
};