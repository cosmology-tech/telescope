import { ManagedService, ConfigSource, Rollout, ChangeReport, Diagnostic } from "./resources";
import { Service } from "../../service";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface ListServicesRequest {
  producerProjectId: string;
  pageSize: number;
  pageToken: string;
  consumerId: string;
}

function createBaseListServicesRequest(): ListServicesRequest {
  return {
    producerProjectId: "",
    pageSize: 0,
    pageToken: "",
    consumerId: ""
  };
}

export const ListServicesRequest = {
  encode(message: ListServicesRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.producerProjectId !== "") {
      writer.uint32(10).string(message.producerProjectId);
    }

    if (message.pageSize !== 0) {
      writer.uint32(40).int32(message.pageSize);
    }

    if (message.pageToken !== "") {
      writer.uint32(50).string(message.pageToken);
    }

    if (message.consumerId !== "") {
      writer.uint32(58).string(message.consumerId);
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
          message.producerProjectId = reader.string();
          break;

        case 5:
          message.pageSize = reader.int32();
          break;

        case 6:
          message.pageToken = reader.string();
          break;

        case 7:
          message.consumerId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListServicesRequest {
    return {
      producerProjectId: isSet(object.producerProjectId) ? String(object.producerProjectId) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      consumerId: isSet(object.consumerId) ? String(object.consumerId) : ""
    };
  },

  toJSON(message: ListServicesRequest): unknown {
    const obj: any = {};
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServicesRequest>, I>>(object: I): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.producerProjectId = object.producerProjectId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.consumerId = object.consumerId ?? "";
    return message;
  }

};
export interface ListServicesResponse {
  services: ManagedService[];
  nextPageToken: string;
}

function createBaseListServicesResponse(): ListServicesResponse {
  return {
    services: [],
    nextPageToken: ""
  };
}

export const ListServicesResponse = {
  encode(message: ListServicesResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      ManagedService.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.services.push(ManagedService.decode(reader, reader.uint32()));
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
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ManagedService.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListServicesResponse): unknown {
    const obj: any = {};

    if (message.services) {
      obj.services = message.services.map(e => e ? ManagedService.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServicesResponse>, I>>(object: I): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => ManagedService.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface GetServiceRequest {
  serviceName: string;
}

function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    serviceName: ""
  };
}

export const GetServiceRequest = {
  encode(message: GetServiceRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
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
          message.serviceName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetServiceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },

  toJSON(message: GetServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceRequest>, I>>(object: I): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  }

};
export interface CreateServiceRequest {
  service: ManagedService;
}

function createBaseCreateServiceRequest(): CreateServiceRequest {
  return {
    service: undefined
  };
}

export const CreateServiceRequest = {
  encode(message: CreateServiceRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      ManagedService.encode(message.service, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.service = ManagedService.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateServiceRequest {
    return {
      service: isSet(object.service) ? ManagedService.fromJSON(object.service) : undefined
    };
  },

  toJSON(message: CreateServiceRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toJSON(message.service) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateServiceRequest>, I>>(object: I): CreateServiceRequest {
    const message = createBaseCreateServiceRequest();
    message.service = object.service !== undefined && object.service !== null ? ManagedService.fromPartial(object.service) : undefined;
    return message;
  }

};
export interface DeleteServiceRequest {
  serviceName: string;
}

function createBaseDeleteServiceRequest(): DeleteServiceRequest {
  return {
    serviceName: ""
  };
}

export const DeleteServiceRequest = {
  encode(message: DeleteServiceRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteServiceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeleteServiceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },

  toJSON(message: DeleteServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteServiceRequest>, I>>(object: I): DeleteServiceRequest {
    const message = createBaseDeleteServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  }

};
export interface UndeleteServiceRequest {
  serviceName: string;
}

function createBaseUndeleteServiceRequest(): UndeleteServiceRequest {
  return {
    serviceName: ""
  };
}

export const UndeleteServiceRequest = {
  encode(message: UndeleteServiceRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteServiceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndeleteServiceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : ""
    };
  },

  toJSON(message: UndeleteServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndeleteServiceRequest>, I>>(object: I): UndeleteServiceRequest {
    const message = createBaseUndeleteServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  }

};
export interface UndeleteServiceResponse {
  service: ManagedService;
}

function createBaseUndeleteServiceResponse(): UndeleteServiceResponse {
  return {
    service: undefined
  };
}

export const UndeleteServiceResponse = {
  encode(message: UndeleteServiceResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      ManagedService.encode(message.service, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteServiceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.service = ManagedService.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndeleteServiceResponse {
    return {
      service: isSet(object.service) ? ManagedService.fromJSON(object.service) : undefined
    };
  },

  toJSON(message: UndeleteServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toJSON(message.service) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndeleteServiceResponse>, I>>(object: I): UndeleteServiceResponse {
    const message = createBaseUndeleteServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? ManagedService.fromPartial(object.service) : undefined;
    return message;
  }

};
export interface GetServiceConfigRequest {
  serviceName: string;
  configId: string;
  view: ConfigView;
}

function createBaseGetServiceConfigRequest(): GetServiceConfigRequest {
  return {
    serviceName: "",
    configId: "",
    view: undefined
  };
}

export const GetServiceConfigRequest = {
  encode(message: GetServiceConfigRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.configId !== "") {
      writer.uint32(18).string(message.configId);
    }

    if (message.view !== 0) {
      writer.uint32(24).int32(message.view);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceConfigRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.configId = reader.string();
          break;

        case 3:
          message.view = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetServiceConfigRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      configId: isSet(object.configId) ? String(object.configId) : "",
      view: isSet(object.view) ? getServiceConfigRequest_ConfigViewFromJSON(object.view) : 0
    };
  },

  toJSON(message: GetServiceConfigRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.configId !== undefined && (obj.configId = message.configId);
    message.view !== undefined && (obj.view = getServiceConfigRequest_ConfigViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceConfigRequest>, I>>(object: I): GetServiceConfigRequest {
    const message = createBaseGetServiceConfigRequest();
    message.serviceName = object.serviceName ?? "";
    message.configId = object.configId ?? "";
    message.view = object.view ?? 0;
    return message;
  }

};
export enum GetServiceConfigRequest_ConfigView {
  /*Server response includes all fields except SourceInfo.*/
  BASIC = 0,

  /*Server response includes all fields including SourceInfo.
  SourceFiles are of type 'google.api.servicemanagement.v1.ConfigFile'
  and are only available for configs created using the
  SubmitConfigSource method.*/
  FULL = 1,
  UNRECOGNIZED = -1,
}
export function getServiceConfigRequestConfigViewFromJSON(object: any): GetServiceConfigRequest_ConfigView {
  switch (object) {
    case "BASIC":
      return GetServiceConfigRequest_ConfigView.BASIC;

    case "FULL":
      return GetServiceConfigRequest_ConfigView.FULL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return GetServiceConfigRequest_ConfigView.UNRECOGNIZED;
  }
}
export function getServiceConfigRequestConfigViewToJSON(object: GetServiceConfigRequest_ConfigView): string {
  switch (object) {
    case GetServiceConfigRequest_ConfigView.BASIC:
      return "BASIC";

    case GetServiceConfigRequest_ConfigView.FULL:
      return "FULL";

    default:
      return "UNKNOWN";
  }
}
export interface ListServiceConfigsRequest {
  serviceName: string;
  pageToken: string;
  pageSize: number;
}

function createBaseListServiceConfigsRequest(): ListServiceConfigsRequest {
  return {
    serviceName: "",
    pageToken: "",
    pageSize: 0
  };
}

export const ListServiceConfigsRequest = {
  encode(message: ListServiceConfigsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }

    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceConfigsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
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

  fromJSON(object: any): ListServiceConfigsRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0
    };
  },

  toJSON(message: ListServiceConfigsRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServiceConfigsRequest>, I>>(object: I): ListServiceConfigsRequest {
    const message = createBaseListServiceConfigsRequest();
    message.serviceName = object.serviceName ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  }

};
export interface ListServiceConfigsResponse {
  serviceConfigs: Service[];
  nextPageToken: string;
}

function createBaseListServiceConfigsResponse(): ListServiceConfigsResponse {
  return {
    serviceConfigs: [],
    nextPageToken: ""
  };
}

export const ListServiceConfigsResponse = {
  encode(message: ListServiceConfigsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serviceConfigs) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceConfigsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceConfigs.push(Service.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListServiceConfigsResponse {
    return {
      serviceConfigs: Array.isArray(object?.serviceConfigs) ? object.serviceConfigs.map((e: any) => Service.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListServiceConfigsResponse): unknown {
    const obj: any = {};

    if (message.serviceConfigs) {
      obj.serviceConfigs = message.serviceConfigs.map(e => e ? Service.toJSON(e) : undefined);
    } else {
      obj.serviceConfigs = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServiceConfigsResponse>, I>>(object: I): ListServiceConfigsResponse {
    const message = createBaseListServiceConfigsResponse();
    message.serviceConfigs = object.serviceConfigs?.map(e => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface CreateServiceConfigRequest {
  serviceName: string;
  serviceConfig: Service;
}

function createBaseCreateServiceConfigRequest(): CreateServiceConfigRequest {
  return {
    serviceName: "",
    serviceConfig: undefined
  };
}

export const CreateServiceConfigRequest = {
  encode(message: CreateServiceConfigRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.serviceConfig !== undefined) {
      Service.encode(message.serviceConfig, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceConfigRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.serviceConfig = Service.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateServiceConfigRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      serviceConfig: isSet(object.serviceConfig) ? Service.fromJSON(object.serviceConfig) : undefined
    };
  },

  toJSON(message: CreateServiceConfigRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfig !== undefined && (obj.serviceConfig = message.serviceConfig ? Service.toJSON(message.serviceConfig) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateServiceConfigRequest>, I>>(object: I): CreateServiceConfigRequest {
    const message = createBaseCreateServiceConfigRequest();
    message.serviceName = object.serviceName ?? "";
    message.serviceConfig = object.serviceConfig !== undefined && object.serviceConfig !== null ? Service.fromPartial(object.serviceConfig) : undefined;
    return message;
  }

};
export interface SubmitConfigSourceRequest {
  serviceName: string;
  configSource: ConfigSource;
  validateOnly: boolean;
}

function createBaseSubmitConfigSourceRequest(): SubmitConfigSourceRequest {
  return {
    serviceName: "",
    configSource: undefined,
    validateOnly: false
  };
}

export const SubmitConfigSourceRequest = {
  encode(message: SubmitConfigSourceRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.configSource !== undefined) {
      ConfigSource.encode(message.configSource, writer.uint32(18).fork()).ldelim();
    }

    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitConfigSourceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.configSource = ConfigSource.decode(reader, reader.uint32());
          break;

        case 3:
          message.validateOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitConfigSourceRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      configSource: isSet(object.configSource) ? ConfigSource.fromJSON(object.configSource) : undefined,
      validateOnly: isSet(object.validateOnly) ? Boolean(object.validateOnly) : false
    };
  },

  toJSON(message: SubmitConfigSourceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.configSource !== undefined && (obj.configSource = message.configSource ? ConfigSource.toJSON(message.configSource) : undefined);
    message.validateOnly !== undefined && (obj.validateOnly = message.validateOnly);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitConfigSourceRequest>, I>>(object: I): SubmitConfigSourceRequest {
    const message = createBaseSubmitConfigSourceRequest();
    message.serviceName = object.serviceName ?? "";
    message.configSource = object.configSource !== undefined && object.configSource !== null ? ConfigSource.fromPartial(object.configSource) : undefined;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  }

};
export interface SubmitConfigSourceResponse {
  serviceConfig: Service;
}

function createBaseSubmitConfigSourceResponse(): SubmitConfigSourceResponse {
  return {
    serviceConfig: undefined
  };
}

export const SubmitConfigSourceResponse = {
  encode(message: SubmitConfigSourceResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceConfig !== undefined) {
      Service.encode(message.serviceConfig, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitConfigSourceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceConfig = Service.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitConfigSourceResponse {
    return {
      serviceConfig: isSet(object.serviceConfig) ? Service.fromJSON(object.serviceConfig) : undefined
    };
  },

  toJSON(message: SubmitConfigSourceResponse): unknown {
    const obj: any = {};
    message.serviceConfig !== undefined && (obj.serviceConfig = message.serviceConfig ? Service.toJSON(message.serviceConfig) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitConfigSourceResponse>, I>>(object: I): SubmitConfigSourceResponse {
    const message = createBaseSubmitConfigSourceResponse();
    message.serviceConfig = object.serviceConfig !== undefined && object.serviceConfig !== null ? Service.fromPartial(object.serviceConfig) : undefined;
    return message;
  }

};
export interface CreateServiceRolloutRequest {
  serviceName: string;
  rollout: Rollout;
}

function createBaseCreateServiceRolloutRequest(): CreateServiceRolloutRequest {
  return {
    serviceName: "",
    rollout: undefined
  };
}

export const CreateServiceRolloutRequest = {
  encode(message: CreateServiceRolloutRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.rollout !== undefined) {
      Rollout.encode(message.rollout, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRolloutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateServiceRolloutRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.rollout = Rollout.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateServiceRolloutRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      rollout: isSet(object.rollout) ? Rollout.fromJSON(object.rollout) : undefined
    };
  },

  toJSON(message: CreateServiceRolloutRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.rollout !== undefined && (obj.rollout = message.rollout ? Rollout.toJSON(message.rollout) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateServiceRolloutRequest>, I>>(object: I): CreateServiceRolloutRequest {
    const message = createBaseCreateServiceRolloutRequest();
    message.serviceName = object.serviceName ?? "";
    message.rollout = object.rollout !== undefined && object.rollout !== null ? Rollout.fromPartial(object.rollout) : undefined;
    return message;
  }

};
export interface ListServiceRolloutsRequest {
  serviceName: string;
  pageToken: string;
  pageSize: number;
  filter: string;
}

function createBaseListServiceRolloutsRequest(): ListServiceRolloutsRequest {
  return {
    serviceName: "",
    pageToken: "",
    pageSize: 0,
    filter: ""
  };
}

export const ListServiceRolloutsRequest = {
  encode(message: ListServiceRolloutsRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.pageToken !== "") {
      writer.uint32(18).string(message.pageToken);
    }

    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }

    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceRolloutsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.pageToken = reader.string();
          break;

        case 3:
          message.pageSize = reader.int32();
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

  fromJSON(object: any): ListServiceRolloutsRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },

  toJSON(message: ListServiceRolloutsRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServiceRolloutsRequest>, I>>(object: I): ListServiceRolloutsRequest {
    const message = createBaseListServiceRolloutsRequest();
    message.serviceName = object.serviceName ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.filter = object.filter ?? "";
    return message;
  }

};
export interface ListServiceRolloutsResponse {
  rollouts: Rollout[];
  nextPageToken: string;
}

function createBaseListServiceRolloutsResponse(): ListServiceRolloutsResponse {
  return {
    rollouts: [],
    nextPageToken: ""
  };
}

export const ListServiceRolloutsResponse = {
  encode(message: ListServiceRolloutsResponse, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rollouts) {
      Rollout.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServiceRolloutsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rollouts.push(Rollout.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListServiceRolloutsResponse {
    return {
      rollouts: Array.isArray(object?.rollouts) ? object.rollouts.map((e: any) => Rollout.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },

  toJSON(message: ListServiceRolloutsResponse): unknown {
    const obj: any = {};

    if (message.rollouts) {
      obj.rollouts = message.rollouts.map(e => e ? Rollout.toJSON(e) : undefined);
    } else {
      obj.rollouts = [];
    }

    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServiceRolloutsResponse>, I>>(object: I): ListServiceRolloutsResponse {
    const message = createBaseListServiceRolloutsResponse();
    message.rollouts = object.rollouts?.map(e => Rollout.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  }

};
export interface GetServiceRolloutRequest {
  serviceName: string;
  rolloutId: string;
}

function createBaseGetServiceRolloutRequest(): GetServiceRolloutRequest {
  return {
    serviceName: "",
    rolloutId: ""
  };
}

export const GetServiceRolloutRequest = {
  encode(message: GetServiceRolloutRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.rolloutId !== "") {
      writer.uint32(18).string(message.rolloutId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRolloutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceRolloutRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.rolloutId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GetServiceRolloutRequest {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      rolloutId: isSet(object.rolloutId) ? String(object.rolloutId) : ""
    };
  },

  toJSON(message: GetServiceRolloutRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.rolloutId !== undefined && (obj.rolloutId = message.rolloutId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceRolloutRequest>, I>>(object: I): GetServiceRolloutRequest {
    const message = createBaseGetServiceRolloutRequest();
    message.serviceName = object.serviceName ?? "";
    message.rolloutId = object.rolloutId ?? "";
    return message;
  }

};
export interface GenerateConfigReportRequest {
  newConfig: Any;
  oldConfig: Any;
}

function createBaseGenerateConfigReportRequest(): GenerateConfigReportRequest {
  return {
    newConfig: undefined,
    oldConfig: undefined
  };
}

export const GenerateConfigReportRequest = {
  encode(message: GenerateConfigReportRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.newConfig !== undefined) {
      Any.encode(message.newConfig, writer.uint32(10).fork()).ldelim();
    }

    if (message.oldConfig !== undefined) {
      Any.encode(message.oldConfig, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateConfigReportRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.newConfig = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.oldConfig = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenerateConfigReportRequest {
    return {
      newConfig: isSet(object.newConfig) ? Any.fromJSON(object.newConfig) : undefined,
      oldConfig: isSet(object.oldConfig) ? Any.fromJSON(object.oldConfig) : undefined
    };
  },

  toJSON(message: GenerateConfigReportRequest): unknown {
    const obj: any = {};
    message.newConfig !== undefined && (obj.newConfig = message.newConfig ? Any.toJSON(message.newConfig) : undefined);
    message.oldConfig !== undefined && (obj.oldConfig = message.oldConfig ? Any.toJSON(message.oldConfig) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateConfigReportRequest>, I>>(object: I): GenerateConfigReportRequest {
    const message = createBaseGenerateConfigReportRequest();
    message.newConfig = object.newConfig !== undefined && object.newConfig !== null ? Any.fromPartial(object.newConfig) : undefined;
    message.oldConfig = object.oldConfig !== undefined && object.oldConfig !== null ? Any.fromPartial(object.oldConfig) : undefined;
    return message;
  }

};
export interface GenerateConfigReportResponse {
  serviceName: string;
  id: string;
  changeReports: ChangeReport[];
  diagnostics: Diagnostic[];
}

function createBaseGenerateConfigReportResponse(): GenerateConfigReportResponse {
  return {
    serviceName: "",
    id: "",
    changeReports: [],
    diagnostics: []
  };
}

export const GenerateConfigReportResponse = {
  encode(message: GenerateConfigReportResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    for (const v of message.changeReports) {
      ChangeReport.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.diagnostics) {
      Diagnostic.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateConfigReportResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.serviceName = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.changeReports.push(ChangeReport.decode(reader, reader.uint32()));
          break;

        case 4:
          message.diagnostics.push(Diagnostic.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenerateConfigReportResponse {
    return {
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      id: isSet(object.id) ? String(object.id) : "",
      changeReports: Array.isArray(object?.changeReports) ? object.changeReports.map((e: any) => ChangeReport.fromJSON(e)) : [],
      diagnostics: Array.isArray(object?.diagnostics) ? object.diagnostics.map((e: any) => Diagnostic.fromJSON(e)) : []
    };
  },

  toJSON(message: GenerateConfigReportResponse): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.id !== undefined && (obj.id = message.id);

    if (message.changeReports) {
      obj.changeReports = message.changeReports.map(e => e ? ChangeReport.toJSON(e) : undefined);
    } else {
      obj.changeReports = [];
    }

    if (message.diagnostics) {
      obj.diagnostics = message.diagnostics.map(e => e ? Diagnostic.toJSON(e) : undefined);
    } else {
      obj.diagnostics = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateConfigReportResponse>, I>>(object: I): GenerateConfigReportResponse {
    const message = createBaseGenerateConfigReportResponse();
    message.serviceName = object.serviceName ?? "";
    message.id = object.id ?? "";
    message.changeReports = object.changeReports?.map(e => ChangeReport.fromPartial(e)) || [];
    message.diagnostics = object.diagnostics?.map(e => Diagnostic.fromPartial(e)) || [];
    return message;
  }

};