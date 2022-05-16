import { AttributeContext } from "../../../rpc/context/attribute_context";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, isObject } from "@osmonauts/helpers";

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

  /**
   * Specifies the version of the service configuration that should be used to
   * process the request. Must not be empty. Set this field to 'latest' to
   * specify using the latest configuration.
   */
  serviceConfigId: string;

  /** Describes attributes about the operation being executed by the service. */
  attributes: AttributeContext;

  /** Describes the resources and the policies applied to each resource. */
  resources: ResourceInfo[];

  /** Optional. Contains a comma-separated list of flags. */
  flags: string;
}

/** Describes a resource referenced in the request. */
export interface ResourceInfo {
  /** The name of the resource referenced in the request. */
  name: string;

  /** The resource type in the format of "{service}/{kind}". */
  type: string;

  /**
   * The resource permission needed for this request.
   * The format must be "{service}/{plural}.{verb}".
   */
  permission: string;

  /**
   * Optional. The identifier of the container of this resource. For Google
   * Cloud APIs, the resource container must be one of the following formats:
   * - `projects/<project-id or project-number>`
   * - `folders/<folder-id>`
   * - `organizations/<organization-id>`
   * For the policy enforcement on the container level (VPCSC and Location
   * Policy check), this field takes precedence on the container extracted from
   * name when presents.
   */
  container: string;

  /**
   * Optional. The location of the resource. The value must be a valid zone,
   * region or multiregion. For example: "europe-west4" or
   * "northamerica-northeast1-a"
   */
  location: string;
}
export interface CheckResponse_HeadersEntry {
  key: string;
  value: string;
}

/** Response message for the Check method. */
export interface CheckResponse {
  /**
   * Operation is allowed when this field is not set. Any non-'OK' status
   * indicates a denial; [google.rpc.Status.details][google.rpc.Status.details]
   * would contain additional details about the denial.
   */
  status: Status;

  /** Returns a set of request contexts generated from the `CheckRequest`. */
  headers: {
    [key: string]: string;
  };
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
   * Specifies the version of the service configuration that should be used to
   * process the request. Must not be empty. Set this field to 'latest' to
   * specify using the latest configuration.
   */
  serviceConfigId: string;

  /**
   * Describes the list of operations to be reported. Each operation is
   * represented as an AttributeContext, and contains all attributes around an
   * API access.
   */
  operations: AttributeContext[];
}

/**
 * Response message for the Report method.
 * If the request contains any invalid data, the server returns an RPC error.
 */
export interface ReportResponse {}

function createBaseCheckRequest(): CheckRequest {
  return {
    serviceName: "",
    serviceConfigId: "",
    attributes: undefined,
    resources: [],
    flags: ""
  };
}

export const CheckRequest = {
  encode(message: CheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(18).string(message.serviceConfigId);
    }

    if (message.attributes !== undefined) {
      AttributeContext.encode(message.attributes, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.resources) {
      ResourceInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.flags !== "") {
      writer.uint32(42).string(message.flags);
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
          message.serviceConfigId = reader.string();
          break;

        case 3:
          message.attributes = AttributeContext.decode(reader, reader.uint32());
          break;

        case 4:
          message.resources.push(ResourceInfo.decode(reader, reader.uint32()));
          break;

        case 5:
          message.flags = reader.string();
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
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : "",
      attributes: isSet(object.attributes) ? AttributeContext.fromJSON(object.attributes) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceInfo.fromJSON(e)) : [],
      flags: isSet(object.flags) ? String(object.flags) : ""
    };
  },

  toJSON(message: CheckRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);
    message.attributes !== undefined && (obj.attributes = message.attributes ? AttributeContext.toJSON(message.attributes) : undefined);

    if (message.resources) {
      obj.resources = message.resources.map(e => e ? ResourceInfo.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }

    message.flags !== undefined && (obj.flags = message.flags);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckRequest>, I>>(object: I): CheckRequest {
    const message = createBaseCheckRequest();
    message.serviceName = object.serviceName ?? "";
    message.serviceConfigId = object.serviceConfigId ?? "";
    message.attributes = object.attributes !== undefined && object.attributes !== null ? AttributeContext.fromPartial(object.attributes) : undefined;
    message.resources = object.resources?.map(e => ResourceInfo.fromPartial(e)) || [];
    message.flags = object.flags ?? "";
    return message;
  }

};

function createBaseResourceInfo(): ResourceInfo {
  return {
    name: "",
    type: "",
    permission: "",
    container: "",
    location: ""
  };
}

export const ResourceInfo = {
  encode(message: ResourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }

    if (message.container !== "") {
      writer.uint32(34).string(message.container);
    }

    if (message.location !== "") {
      writer.uint32(42).string(message.location);
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
          message.name = reader.string();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.permission = reader.string();
          break;

        case 4:
          message.container = reader.string();
          break;

        case 5:
          message.location = reader.string();
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
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
      container: isSet(object.container) ? String(object.container) : "",
      location: isSet(object.location) ? String(object.location) : ""
    };
  },

  toJSON(message: ResourceInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    message.permission !== undefined && (obj.permission = message.permission);
    message.container !== undefined && (obj.container = message.container);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceInfo>, I>>(object: I): ResourceInfo {
    const message = createBaseResourceInfo();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.permission = object.permission ?? "";
    message.container = object.container ?? "";
    message.location = object.location ?? "";
    return message;
  }

};

function createBaseCheckResponse_HeadersEntry(): CheckResponse_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}

export const CheckResponse_HeadersEntry = {
  encode(message: CheckResponse_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse_HeadersEntry();

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

  fromJSON(object: any): CheckResponse_HeadersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: CheckResponse_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse_HeadersEntry>, I>>(object: I): CheckResponse_HeadersEntry {
    const message = createBaseCheckResponse_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseCheckResponse(): CheckResponse {
  return {
    status: undefined,
    headers: {}
  };
}

export const CheckResponse = {
  encode(message: CheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }

    Object.entries(message.headers).forEach(([key, value]) => {
      CheckResponse_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(18).fork()).ldelim();
    });
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
          message.status = Status.decode(reader, reader.uint32());
          break;

        case 2:
          const entry2 = CheckResponse_HeadersEntry.decode(reader, reader.uint32());

          if (entry2.value !== undefined) {
            message.headers[entry2.key] = entry2.value;
          }

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
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: CheckResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    obj.headers = {};

    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse>, I>>(object: I): CheckResponse {
    const message = createBaseCheckResponse();
    message.status = object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined;
    message.headers = Object.entries(object.headers ?? {}).reduce<{
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

function createBaseReportRequest(): ReportRequest {
  return {
    serviceName: "",
    serviceConfigId: "",
    operations: []
  };
}

export const ReportRequest = {
  encode(message: ReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.serviceConfigId !== "") {
      writer.uint32(18).string(message.serviceConfigId);
    }

    for (const v of message.operations) {
      AttributeContext.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.serviceConfigId = reader.string();
          break;

        case 3:
          message.operations.push(AttributeContext.decode(reader, reader.uint32()));
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
      serviceConfigId: isSet(object.serviceConfigId) ? String(object.serviceConfigId) : "",
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => AttributeContext.fromJSON(e)) : []
    };
  },

  toJSON(message: ReportRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfigId !== undefined && (obj.serviceConfigId = message.serviceConfigId);

    if (message.operations) {
      obj.operations = message.operations.map(e => e ? AttributeContext.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportRequest>, I>>(object: I): ReportRequest {
    const message = createBaseReportRequest();
    message.serviceName = object.serviceName ?? "";
    message.serviceConfigId = object.serviceConfigId ?? "";
    message.operations = object.operations?.map(e => AttributeContext.fromPartial(e)) || [];
    return message;
  }

};

function createBaseReportResponse(): ReportResponse {
  return {};
}

export const ReportResponse = {
  encode(_: ReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportResponse();

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

  fromJSON(_: any): ReportResponse {
    return {};
  },

  toJSON(_: ReportResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReportResponse>, I>>(_: I): ReportResponse {
    const message = createBaseReportResponse();
    return message;
  }

};