import { ManagedService, ManagedServiceSDKType, ConfigSource, ConfigSourceSDKType, Rollout, RolloutSDKType, ChangeReport, ChangeReportSDKType, Diagnostic, DiagnosticSDKType } from "./resources";
import { Service, ServiceSDKType } from "../../service";
import { Any, AnySDKType } from "../../../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "google.api.servicemanagement.v1";
export enum GetServiceConfigRequest_ConfigView {
  /** BASIC - Server response includes all fields except SourceInfo. */
  BASIC = 0,
  /**
   * FULL - Server response includes all fields including SourceInfo.
   * SourceFiles are of type 'google.api.servicemanagement.v1.ConfigFile'
   * and are only available for configs created using the
   * SubmitConfigSource method.
   */
  FULL = 1,
  UNRECOGNIZED = -1,
}
export const GetServiceConfigRequest_ConfigViewSDKType = GetServiceConfigRequest_ConfigView;
export function getServiceConfigRequest_ConfigViewFromJSON(object: any): GetServiceConfigRequest_ConfigView {
  switch (object) {
    case 0:
    case "BASIC":
      return GetServiceConfigRequest_ConfigView.BASIC;
    case 1:
    case "FULL":
      return GetServiceConfigRequest_ConfigView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetServiceConfigRequest_ConfigView.UNRECOGNIZED;
  }
}
export function getServiceConfigRequest_ConfigViewToJSON(object: GetServiceConfigRequest_ConfigView): string {
  switch (object) {
    case GetServiceConfigRequest_ConfigView.BASIC:
      return "BASIC";
    case GetServiceConfigRequest_ConfigView.FULL:
      return "FULL";
    case GetServiceConfigRequest_ConfigView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Request message for `ListServices` method. */
export interface ListServicesRequest {
  /** Include services produced by the specified project. */
  producerProjectId: string;
  /**
   * The max number of items to include in the response list. Page size is 50
   * if not specified. Maximum value is 100.
   */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
  /**
   * Include services consumed by the specified consumer.
   * 
   * The Google Service Management implementation accepts the following
   * forms:
   * - project:<project_id>
   */
  /** @deprecated */
  consumerId: string;
}
/** Request message for `ListServices` method. */
export interface ListServicesRequestSDKType {
  producer_project_id: string;
  page_size: number;
  page_token: string;
  /** @deprecated */
  consumer_id: string;
}
/** Response message for `ListServices` method. */
export interface ListServicesResponse {
  /** The returned services will only have the name field set. */
  services: ManagedService[];
  /** Token that can be passed to `ListServices` to resume a paginated query. */
  nextPageToken: string;
}
/** Response message for `ListServices` method. */
export interface ListServicesResponseSDKType {
  services: ManagedServiceSDKType[];
  next_page_token: string;
}
/** Request message for `GetService` method. */
export interface GetServiceRequest {
  /**
   * Required. The name of the service.  See the `ServiceManager` overview for naming
   * requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
}
/** Request message for `GetService` method. */
export interface GetServiceRequestSDKType {
  service_name: string;
}
/** Request message for CreateService method. */
export interface CreateServiceRequest {
  /** Required. Initial values for the service resource. */
  service: ManagedService;
}
/** Request message for CreateService method. */
export interface CreateServiceRequestSDKType {
  service: ManagedServiceSDKType;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequestSDKType {
  service_name: string;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequest {
  /**
   * Required. The name of the service. See the [overview](/service-management/overview)
   * for naming requirements. For example: `example.googleapis.com`.
   */
  serviceName: string;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequestSDKType {
  service_name: string;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponse {
  /** Revived service resource. */
  service: ManagedService;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponseSDKType {
  service: ManagedServiceSDKType;
}
/** Request message for GetServiceConfig method. */
export interface GetServiceConfigRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /**
   * Required. The id of the service configuration resource.
   * 
   * This field must be specified for the server to return all fields, including
   * `SourceInfo`.
   */
  configId: string;
  /**
   * Specifies which parts of the Service Config should be returned in the
   * response.
   */
  view: GetServiceConfigRequest_ConfigView;
}
/** Request message for GetServiceConfig method. */
export interface GetServiceConfigRequestSDKType {
  service_name: string;
  config_id: string;
  view: GetServiceConfigRequest_ConfigView;
}
/** Request message for ListServiceConfigs method. */
export interface ListServiceConfigsRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** The token of the page to retrieve. */
  pageToken: string;
  /**
   * The max number of items to include in the response list. Page size is 50
   * if not specified. Maximum value is 100.
   */
  pageSize: number;
}
/** Request message for ListServiceConfigs method. */
export interface ListServiceConfigsRequestSDKType {
  service_name: string;
  page_token: string;
  page_size: number;
}
/** Response message for ListServiceConfigs method. */
export interface ListServiceConfigsResponse {
  /** The list of service configuration resources. */
  serviceConfigs: Service[];
  /** The token of the next page of results. */
  nextPageToken: string;
}
/** Response message for ListServiceConfigs method. */
export interface ListServiceConfigsResponseSDKType {
  service_configs: ServiceSDKType[];
  next_page_token: string;
}
/** Request message for CreateServiceConfig method. */
export interface CreateServiceConfigRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The service configuration resource. */
  serviceConfig: Service;
}
/** Request message for CreateServiceConfig method. */
export interface CreateServiceConfigRequestSDKType {
  service_name: string;
  service_config: ServiceSDKType;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The source configuration for the service. */
  configSource: ConfigSource;
  /**
   * Optional. If set, this will result in the generation of a
   * `google.api.Service` configuration based on the `ConfigSource` provided,
   * but the generated config and the sources will NOT be persisted.
   */
  validateOnly: boolean;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequestSDKType {
  service_name: string;
  config_source: ConfigSourceSDKType;
  validate_only: boolean;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponse {
  /** The generated service configuration. */
  serviceConfig: Service;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponseSDKType {
  service_config: ServiceSDKType;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The rollout resource. The `service_name` field is output only. */
  rollout: Rollout;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequestSDKType {
  service_name: string;
  rollout: RolloutSDKType;
}
/** Request message for 'ListServiceRollouts' */
export interface ListServiceRolloutsRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** The token of the page to retrieve. */
  pageToken: string;
  /**
   * The max number of items to include in the response list. Page size is 50
   * if not specified. Maximum value is 100.
   */
  pageSize: number;
  /**
   * Required. Use `filter` to return subset of rollouts.
   * The following filters are supported:
   *   -- To limit the results to only those in
   *      [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',
   *      use filter='status=SUCCESS'
   *   -- To limit the results to those in
   *      [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'
   *      or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
   */
  filter: string;
}
/** Request message for 'ListServiceRollouts' */
export interface ListServiceRolloutsRequestSDKType {
  service_name: string;
  page_token: string;
  page_size: number;
  filter: string;
}
/** Response message for ListServiceRollouts method. */
export interface ListServiceRolloutsResponse {
  /** The list of rollout resources. */
  rollouts: Rollout[];
  /** The token of the next page of results. */
  nextPageToken: string;
}
/** Response message for ListServiceRollouts method. */
export interface ListServiceRolloutsResponseSDKType {
  rollouts: RolloutSDKType[];
  next_page_token: string;
}
/** Request message for GetServiceRollout method. */
export interface GetServiceRolloutRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The id of the rollout resource. */
  rolloutId: string;
}
/** Request message for GetServiceRollout method. */
export interface GetServiceRolloutRequestSDKType {
  service_name: string;
  rollout_id: string;
}
/** Request message for GenerateConfigReport method. */
export interface GenerateConfigReportRequest {
  /**
   * Required. Service configuration for which we want to generate the report.
   * For this version of API, the supported types are
   * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
   * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
   * and [google.api.Service][google.api.Service]
   */
  newConfig: Any;
  /**
   * Optional. Service configuration against which the comparison will be done.
   * For this version of API, the supported types are
   * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
   * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
   * and [google.api.Service][google.api.Service]
   */
  oldConfig: Any;
}
/** Request message for GenerateConfigReport method. */
export interface GenerateConfigReportRequestSDKType {
  new_config: AnySDKType;
  old_config: AnySDKType;
}
/** Response message for GenerateConfigReport method. */
export interface GenerateConfigReportResponse {
  /** Name of the service this report belongs to. */
  serviceName: string;
  /** ID of the service configuration this report belongs to. */
  id: string;
  /**
   * list of ChangeReport, each corresponding to comparison between two
   * service configurations.
   */
  changeReports: ChangeReport[];
  /**
   * Errors / Linter warnings associated with the service definition this
   * report
   * belongs to.
   */
  diagnostics: Diagnostic[];
}
/** Response message for GenerateConfigReport method. */
export interface GenerateConfigReportResponseSDKType {
  service_name: string;
  id: string;
  change_reports: ChangeReportSDKType[];
  diagnostics: DiagnosticSDKType[];
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
  encode(message: ListServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseListServicesRequest();
    if (isSet(object.producerProjectId)) obj.producerProjectId = String(object.producerProjectId);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.consumerId)) obj.consumerId = String(object.consumerId);
    return obj;
  },
  toJSON(message: ListServicesRequest): unknown {
    const obj: any = {};
    message.producerProjectId !== undefined && (obj.producerProjectId = message.producerProjectId);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServicesRequest>): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.producerProjectId = object.producerProjectId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.consumerId = object.consumerId ?? "";
    return message;
  },
  fromSDK(object: ListServicesRequestSDKType): ListServicesRequest {
    return {
      producerProjectId: object?.producer_project_id,
      pageSize: object?.page_size,
      pageToken: object?.page_token,
      consumerId: object?.consumer_id
    };
  },
  fromSDKJSON(object: any): ListServicesRequestSDKType {
    return {
      producer_project_id: isSet(object.producer_project_id) ? String(object.producer_project_id) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      consumer_id: isSet(object.consumer_id) ? String(object.consumer_id) : ""
    };
  },
  toSDK(message: ListServicesRequest): ListServicesRequestSDKType {
    const obj: any = {};
    obj.producer_project_id = message.producerProjectId;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    obj.consumer_id = message.consumerId;
    return obj;
  }
};
function createBaseListServicesResponse(): ListServicesResponse {
  return {
    services: [],
    nextPageToken: ""
  };
}
export const ListServicesResponse = {
  encode(message: ListServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      ManagedService.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseListServicesResponse();
    if (Array.isArray(object?.services)) obj.services = object.services.map((e: any) => ManagedService.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
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
  fromPartial(object: DeepPartial<ListServicesResponse>): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services = object.services?.map(e => ManagedService.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServicesResponseSDKType): ListServicesResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ManagedService.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServicesResponseSDKType {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => ManagedService.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServicesResponse): ListServicesResponseSDKType {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ManagedService.toSDK(e) : undefined);
    } else {
      obj.services = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  }
};
function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    serviceName: ""
  };
}
export const GetServiceRequest = {
  encode(message: GetServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGetServiceRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    return obj;
  },
  toJSON(message: GetServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceRequest>): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
  fromSDK(object: GetServiceRequestSDKType): GetServiceRequest {
    return {
      serviceName: object?.service_name
    };
  },
  fromSDKJSON(object: any): GetServiceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : ""
    };
  },
  toSDK(message: GetServiceRequest): GetServiceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    return obj;
  }
};
function createBaseCreateServiceRequest(): CreateServiceRequest {
  return {
    service: ManagedService.fromPartial({})
  };
}
export const CreateServiceRequest = {
  encode(message: CreateServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      ManagedService.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseCreateServiceRequest();
    if (isSet(object.service)) obj.service = ManagedService.fromJSON(object.service);
    return obj;
  },
  toJSON(message: CreateServiceRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateServiceRequest>): CreateServiceRequest {
    const message = createBaseCreateServiceRequest();
    if (object.service !== undefined && object.service !== null) {
      message.service = ManagedService.fromPartial(object.service);
    }
    return message;
  },
  fromSDK(object: CreateServiceRequestSDKType): CreateServiceRequest {
    return {
      service: object.service ? ManagedService.fromSDK(object.service) : undefined
    };
  },
  fromSDKJSON(object: any): CreateServiceRequestSDKType {
    return {
      service: isSet(object.service) ? ManagedService.fromSDKJSON(object.service) : undefined
    };
  },
  toSDK(message: CreateServiceRequest): CreateServiceRequestSDKType {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toSDK(message.service) : undefined);
    return obj;
  }
};
function createBaseDeleteServiceRequest(): DeleteServiceRequest {
  return {
    serviceName: ""
  };
}
export const DeleteServiceRequest = {
  encode(message: DeleteServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseDeleteServiceRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    return obj;
  },
  toJSON(message: DeleteServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteServiceRequest>): DeleteServiceRequest {
    const message = createBaseDeleteServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
  fromSDK(object: DeleteServiceRequestSDKType): DeleteServiceRequest {
    return {
      serviceName: object?.service_name
    };
  },
  fromSDKJSON(object: any): DeleteServiceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : ""
    };
  },
  toSDK(message: DeleteServiceRequest): DeleteServiceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    return obj;
  }
};
function createBaseUndeleteServiceRequest(): UndeleteServiceRequest {
  return {
    serviceName: ""
  };
}
export const UndeleteServiceRequest = {
  encode(message: UndeleteServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseUndeleteServiceRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    return obj;
  },
  toJSON(message: UndeleteServiceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    return obj;
  },
  fromPartial(object: DeepPartial<UndeleteServiceRequest>): UndeleteServiceRequest {
    const message = createBaseUndeleteServiceRequest();
    message.serviceName = object.serviceName ?? "";
    return message;
  },
  fromSDK(object: UndeleteServiceRequestSDKType): UndeleteServiceRequest {
    return {
      serviceName: object?.service_name
    };
  },
  fromSDKJSON(object: any): UndeleteServiceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : ""
    };
  },
  toSDK(message: UndeleteServiceRequest): UndeleteServiceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    return obj;
  }
};
function createBaseUndeleteServiceResponse(): UndeleteServiceResponse {
  return {
    service: ManagedService.fromPartial({})
  };
}
export const UndeleteServiceResponse = {
  encode(message: UndeleteServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      ManagedService.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseUndeleteServiceResponse();
    if (isSet(object.service)) obj.service = ManagedService.fromJSON(object.service);
    return obj;
  },
  toJSON(message: UndeleteServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toJSON(message.service) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<UndeleteServiceResponse>): UndeleteServiceResponse {
    const message = createBaseUndeleteServiceResponse();
    if (object.service !== undefined && object.service !== null) {
      message.service = ManagedService.fromPartial(object.service);
    }
    return message;
  },
  fromSDK(object: UndeleteServiceResponseSDKType): UndeleteServiceResponse {
    return {
      service: object.service ? ManagedService.fromSDK(object.service) : undefined
    };
  },
  fromSDKJSON(object: any): UndeleteServiceResponseSDKType {
    return {
      service: isSet(object.service) ? ManagedService.fromSDKJSON(object.service) : undefined
    };
  },
  toSDK(message: UndeleteServiceResponse): UndeleteServiceResponseSDKType {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? ManagedService.toSDK(message.service) : undefined);
    return obj;
  }
};
function createBaseGetServiceConfigRequest(): GetServiceConfigRequest {
  return {
    serviceName: "",
    configId: "",
    view: 0
  };
}
export const GetServiceConfigRequest = {
  encode(message: GetServiceConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGetServiceConfigRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.configId)) obj.configId = String(object.configId);
    if (isSet(object.view)) obj.view = getServiceConfigRequest_ConfigViewFromJSON(object.view);
    return obj;
  },
  toJSON(message: GetServiceConfigRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.configId !== undefined && (obj.configId = message.configId);
    message.view !== undefined && (obj.view = getServiceConfigRequest_ConfigViewToJSON(message.view));
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceConfigRequest>): GetServiceConfigRequest {
    const message = createBaseGetServiceConfigRequest();
    message.serviceName = object.serviceName ?? "";
    message.configId = object.configId ?? "";
    message.view = object.view ?? 0;
    return message;
  },
  fromSDK(object: GetServiceConfigRequestSDKType): GetServiceConfigRequest {
    return {
      serviceName: object?.service_name,
      configId: object?.config_id,
      view: isSet(object.view) ? getServiceConfigRequest_ConfigViewFromJSON(object.view) : -1
    };
  },
  fromSDKJSON(object: any): GetServiceConfigRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      config_id: isSet(object.config_id) ? String(object.config_id) : "",
      view: isSet(object.view) ? getServiceConfigRequest_ConfigViewFromJSON(object.view) : -1
    };
  },
  toSDK(message: GetServiceConfigRequest): GetServiceConfigRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.config_id = message.configId;
    message.view !== undefined && (obj.view = getServiceConfigRequest_ConfigViewToJSON(message.view));
    return obj;
  }
};
function createBaseListServiceConfigsRequest(): ListServiceConfigsRequest {
  return {
    serviceName: "",
    pageToken: "",
    pageSize: 0
  };
}
export const ListServiceConfigsRequest = {
  encode(message: ListServiceConfigsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceConfigsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseListServiceConfigsRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    return obj;
  },
  toJSON(message: ListServiceConfigsRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },
  fromPartial(object: DeepPartial<ListServiceConfigsRequest>): ListServiceConfigsRequest {
    const message = createBaseListServiceConfigsRequest();
    message.serviceName = object.serviceName ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
  fromSDK(object: ListServiceConfigsRequestSDKType): ListServiceConfigsRequest {
    return {
      serviceName: object?.service_name,
      pageToken: object?.page_token,
      pageSize: object?.page_size
    };
  },
  fromSDKJSON(object: any): ListServiceConfigsRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0
    };
  },
  toSDK(message: ListServiceConfigsRequest): ListServiceConfigsRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    return obj;
  }
};
function createBaseListServiceConfigsResponse(): ListServiceConfigsResponse {
  return {
    serviceConfigs: [],
    nextPageToken: ""
  };
}
export const ListServiceConfigsResponse = {
  encode(message: ListServiceConfigsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.serviceConfigs) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceConfigsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseListServiceConfigsResponse();
    if (Array.isArray(object?.serviceConfigs)) obj.serviceConfigs = object.serviceConfigs.map((e: any) => Service.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
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
  fromPartial(object: DeepPartial<ListServiceConfigsResponse>): ListServiceConfigsResponse {
    const message = createBaseListServiceConfigsResponse();
    message.serviceConfigs = object.serviceConfigs?.map(e => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServiceConfigsResponseSDKType): ListServiceConfigsResponse {
    return {
      serviceConfigs: Array.isArray(object?.service_configs) ? object.service_configs.map((e: any) => Service.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServiceConfigsResponseSDKType {
    return {
      service_configs: Array.isArray(object?.service_configs) ? object.service_configs.map((e: any) => Service.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServiceConfigsResponse): ListServiceConfigsResponseSDKType {
    const obj: any = {};
    if (message.serviceConfigs) {
      obj.service_configs = message.serviceConfigs.map(e => e ? Service.toSDK(e) : undefined);
    } else {
      obj.service_configs = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  }
};
function createBaseCreateServiceConfigRequest(): CreateServiceConfigRequest {
  return {
    serviceName: "",
    serviceConfig: Service.fromPartial({})
  };
}
export const CreateServiceConfigRequest = {
  encode(message: CreateServiceConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.serviceConfig !== undefined) {
      Service.encode(message.serviceConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateServiceConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseCreateServiceConfigRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.serviceConfig)) obj.serviceConfig = Service.fromJSON(object.serviceConfig);
    return obj;
  },
  toJSON(message: CreateServiceConfigRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.serviceConfig !== undefined && (obj.serviceConfig = message.serviceConfig ? Service.toJSON(message.serviceConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateServiceConfigRequest>): CreateServiceConfigRequest {
    const message = createBaseCreateServiceConfigRequest();
    message.serviceName = object.serviceName ?? "";
    if (object.serviceConfig !== undefined && object.serviceConfig !== null) {
      message.serviceConfig = Service.fromPartial(object.serviceConfig);
    }
    return message;
  },
  fromSDK(object: CreateServiceConfigRequestSDKType): CreateServiceConfigRequest {
    return {
      serviceName: object?.service_name,
      serviceConfig: object.service_config ? Service.fromSDK(object.service_config) : undefined
    };
  },
  fromSDKJSON(object: any): CreateServiceConfigRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      service_config: isSet(object.service_config) ? Service.fromSDKJSON(object.service_config) : undefined
    };
  },
  toSDK(message: CreateServiceConfigRequest): CreateServiceConfigRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    message.serviceConfig !== undefined && (obj.service_config = message.serviceConfig ? Service.toSDK(message.serviceConfig) : undefined);
    return obj;
  }
};
function createBaseSubmitConfigSourceRequest(): SubmitConfigSourceRequest {
  return {
    serviceName: "",
    configSource: ConfigSource.fromPartial({}),
    validateOnly: false
  };
}
export const SubmitConfigSourceRequest = {
  encode(message: SubmitConfigSourceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): SubmitConfigSourceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseSubmitConfigSourceRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.configSource)) obj.configSource = ConfigSource.fromJSON(object.configSource);
    if (isSet(object.validateOnly)) obj.validateOnly = Boolean(object.validateOnly);
    return obj;
  },
  toJSON(message: SubmitConfigSourceRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.configSource !== undefined && (obj.configSource = message.configSource ? ConfigSource.toJSON(message.configSource) : undefined);
    message.validateOnly !== undefined && (obj.validateOnly = message.validateOnly);
    return obj;
  },
  fromPartial(object: DeepPartial<SubmitConfigSourceRequest>): SubmitConfigSourceRequest {
    const message = createBaseSubmitConfigSourceRequest();
    message.serviceName = object.serviceName ?? "";
    if (object.configSource !== undefined && object.configSource !== null) {
      message.configSource = ConfigSource.fromPartial(object.configSource);
    }
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
  fromSDK(object: SubmitConfigSourceRequestSDKType): SubmitConfigSourceRequest {
    return {
      serviceName: object?.service_name,
      configSource: object.config_source ? ConfigSource.fromSDK(object.config_source) : undefined,
      validateOnly: object?.validate_only
    };
  },
  fromSDKJSON(object: any): SubmitConfigSourceRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      config_source: isSet(object.config_source) ? ConfigSource.fromSDKJSON(object.config_source) : undefined,
      validate_only: isSet(object.validate_only) ? Boolean(object.validate_only) : false
    };
  },
  toSDK(message: SubmitConfigSourceRequest): SubmitConfigSourceRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    message.configSource !== undefined && (obj.config_source = message.configSource ? ConfigSource.toSDK(message.configSource) : undefined);
    obj.validate_only = message.validateOnly;
    return obj;
  }
};
function createBaseSubmitConfigSourceResponse(): SubmitConfigSourceResponse {
  return {
    serviceConfig: Service.fromPartial({})
  };
}
export const SubmitConfigSourceResponse = {
  encode(message: SubmitConfigSourceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceConfig !== undefined) {
      Service.encode(message.serviceConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubmitConfigSourceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseSubmitConfigSourceResponse();
    if (isSet(object.serviceConfig)) obj.serviceConfig = Service.fromJSON(object.serviceConfig);
    return obj;
  },
  toJSON(message: SubmitConfigSourceResponse): unknown {
    const obj: any = {};
    message.serviceConfig !== undefined && (obj.serviceConfig = message.serviceConfig ? Service.toJSON(message.serviceConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SubmitConfigSourceResponse>): SubmitConfigSourceResponse {
    const message = createBaseSubmitConfigSourceResponse();
    if (object.serviceConfig !== undefined && object.serviceConfig !== null) {
      message.serviceConfig = Service.fromPartial(object.serviceConfig);
    }
    return message;
  },
  fromSDK(object: SubmitConfigSourceResponseSDKType): SubmitConfigSourceResponse {
    return {
      serviceConfig: object.service_config ? Service.fromSDK(object.service_config) : undefined
    };
  },
  fromSDKJSON(object: any): SubmitConfigSourceResponseSDKType {
    return {
      service_config: isSet(object.service_config) ? Service.fromSDKJSON(object.service_config) : undefined
    };
  },
  toSDK(message: SubmitConfigSourceResponse): SubmitConfigSourceResponseSDKType {
    const obj: any = {};
    message.serviceConfig !== undefined && (obj.service_config = message.serviceConfig ? Service.toSDK(message.serviceConfig) : undefined);
    return obj;
  }
};
function createBaseCreateServiceRolloutRequest(): CreateServiceRolloutRequest {
  return {
    serviceName: "",
    rollout: Rollout.fromPartial({})
  };
}
export const CreateServiceRolloutRequest = {
  encode(message: CreateServiceRolloutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.rollout !== undefined) {
      Rollout.encode(message.rollout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateServiceRolloutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseCreateServiceRolloutRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.rollout)) obj.rollout = Rollout.fromJSON(object.rollout);
    return obj;
  },
  toJSON(message: CreateServiceRolloutRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.rollout !== undefined && (obj.rollout = message.rollout ? Rollout.toJSON(message.rollout) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CreateServiceRolloutRequest>): CreateServiceRolloutRequest {
    const message = createBaseCreateServiceRolloutRequest();
    message.serviceName = object.serviceName ?? "";
    if (object.rollout !== undefined && object.rollout !== null) {
      message.rollout = Rollout.fromPartial(object.rollout);
    }
    return message;
  },
  fromSDK(object: CreateServiceRolloutRequestSDKType): CreateServiceRolloutRequest {
    return {
      serviceName: object?.service_name,
      rollout: object.rollout ? Rollout.fromSDK(object.rollout) : undefined
    };
  },
  fromSDKJSON(object: any): CreateServiceRolloutRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      rollout: isSet(object.rollout) ? Rollout.fromSDKJSON(object.rollout) : undefined
    };
  },
  toSDK(message: CreateServiceRolloutRequest): CreateServiceRolloutRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    message.rollout !== undefined && (obj.rollout = message.rollout ? Rollout.toSDK(message.rollout) : undefined);
    return obj;
  }
};
function createBaseListServiceRolloutsRequest(): ListServiceRolloutsRequest {
  return {
    serviceName: "",
    pageToken: "",
    pageSize: 0,
    filter: ""
  };
}
export const ListServiceRolloutsRequest = {
  encode(message: ListServiceRolloutsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceRolloutsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseListServiceRolloutsRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.pageToken)) obj.pageToken = String(object.pageToken);
    if (isSet(object.pageSize)) obj.pageSize = Number(object.pageSize);
    if (isSet(object.filter)) obj.filter = String(object.filter);
    return obj;
  },
  toJSON(message: ListServiceRolloutsRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },
  fromPartial(object: DeepPartial<ListServiceRolloutsRequest>): ListServiceRolloutsRequest {
    const message = createBaseListServiceRolloutsRequest();
    message.serviceName = object.serviceName ?? "";
    message.pageToken = object.pageToken ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.filter = object.filter ?? "";
    return message;
  },
  fromSDK(object: ListServiceRolloutsRequestSDKType): ListServiceRolloutsRequest {
    return {
      serviceName: object?.service_name,
      pageToken: object?.page_token,
      pageSize: object?.page_size,
      filter: object?.filter
    };
  },
  fromSDKJSON(object: any): ListServiceRolloutsRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      page_token: isSet(object.page_token) ? String(object.page_token) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      filter: isSet(object.filter) ? String(object.filter) : ""
    };
  },
  toSDK(message: ListServiceRolloutsRequest): ListServiceRolloutsRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.page_token = message.pageToken;
    obj.page_size = message.pageSize;
    obj.filter = message.filter;
    return obj;
  }
};
function createBaseListServiceRolloutsResponse(): ListServiceRolloutsResponse {
  return {
    rollouts: [],
    nextPageToken: ""
  };
}
export const ListServiceRolloutsResponse = {
  encode(message: ListServiceRolloutsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rollouts) {
      Rollout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListServiceRolloutsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseListServiceRolloutsResponse();
    if (Array.isArray(object?.rollouts)) obj.rollouts = object.rollouts.map((e: any) => Rollout.fromJSON(e));
    if (isSet(object.nextPageToken)) obj.nextPageToken = String(object.nextPageToken);
    return obj;
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
  fromPartial(object: DeepPartial<ListServiceRolloutsResponse>): ListServiceRolloutsResponse {
    const message = createBaseListServiceRolloutsResponse();
    message.rollouts = object.rollouts?.map(e => Rollout.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListServiceRolloutsResponseSDKType): ListServiceRolloutsResponse {
    return {
      rollouts: Array.isArray(object?.rollouts) ? object.rollouts.map((e: any) => Rollout.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListServiceRolloutsResponseSDKType {
    return {
      rollouts: Array.isArray(object?.rollouts) ? object.rollouts.map((e: any) => Rollout.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListServiceRolloutsResponse): ListServiceRolloutsResponseSDKType {
    const obj: any = {};
    if (message.rollouts) {
      obj.rollouts = message.rollouts.map(e => e ? Rollout.toSDK(e) : undefined);
    } else {
      obj.rollouts = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  }
};
function createBaseGetServiceRolloutRequest(): GetServiceRolloutRequest {
  return {
    serviceName: "",
    rolloutId: ""
  };
}
export const GetServiceRolloutRequest = {
  encode(message: GetServiceRolloutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.rolloutId !== "") {
      writer.uint32(18).string(message.rolloutId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetServiceRolloutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGetServiceRolloutRequest();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.rolloutId)) obj.rolloutId = String(object.rolloutId);
    return obj;
  },
  toJSON(message: GetServiceRolloutRequest): unknown {
    const obj: any = {};
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.rolloutId !== undefined && (obj.rolloutId = message.rolloutId);
    return obj;
  },
  fromPartial(object: DeepPartial<GetServiceRolloutRequest>): GetServiceRolloutRequest {
    const message = createBaseGetServiceRolloutRequest();
    message.serviceName = object.serviceName ?? "";
    message.rolloutId = object.rolloutId ?? "";
    return message;
  },
  fromSDK(object: GetServiceRolloutRequestSDKType): GetServiceRolloutRequest {
    return {
      serviceName: object?.service_name,
      rolloutId: object?.rollout_id
    };
  },
  fromSDKJSON(object: any): GetServiceRolloutRequestSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      rollout_id: isSet(object.rollout_id) ? String(object.rollout_id) : ""
    };
  },
  toSDK(message: GetServiceRolloutRequest): GetServiceRolloutRequestSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.rollout_id = message.rolloutId;
    return obj;
  }
};
function createBaseGenerateConfigReportRequest(): GenerateConfigReportRequest {
  return {
    newConfig: Any.fromPartial({}),
    oldConfig: Any.fromPartial({})
  };
}
export const GenerateConfigReportRequest = {
  encode(message: GenerateConfigReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newConfig !== undefined) {
      Any.encode(message.newConfig, writer.uint32(10).fork()).ldelim();
    }
    if (message.oldConfig !== undefined) {
      Any.encode(message.oldConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateConfigReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGenerateConfigReportRequest();
    if (isSet(object.newConfig)) obj.newConfig = Any.fromJSON(object.newConfig);
    if (isSet(object.oldConfig)) obj.oldConfig = Any.fromJSON(object.oldConfig);
    return obj;
  },
  toJSON(message: GenerateConfigReportRequest): unknown {
    const obj: any = {};
    message.newConfig !== undefined && (obj.newConfig = message.newConfig ? Any.toJSON(message.newConfig) : undefined);
    message.oldConfig !== undefined && (obj.oldConfig = message.oldConfig ? Any.toJSON(message.oldConfig) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenerateConfigReportRequest>): GenerateConfigReportRequest {
    const message = createBaseGenerateConfigReportRequest();
    if (object.newConfig !== undefined && object.newConfig !== null) {
      message.newConfig = Any.fromPartial(object.newConfig);
    }
    if (object.oldConfig !== undefined && object.oldConfig !== null) {
      message.oldConfig = Any.fromPartial(object.oldConfig);
    }
    return message;
  },
  fromSDK(object: GenerateConfigReportRequestSDKType): GenerateConfigReportRequest {
    return {
      newConfig: object.new_config ? Any.fromSDK(object.new_config) : undefined,
      oldConfig: object.old_config ? Any.fromSDK(object.old_config) : undefined
    };
  },
  fromSDKJSON(object: any): GenerateConfigReportRequestSDKType {
    return {
      new_config: isSet(object.new_config) ? Any.fromSDKJSON(object.new_config) : undefined,
      old_config: isSet(object.old_config) ? Any.fromSDKJSON(object.old_config) : undefined
    };
  },
  toSDK(message: GenerateConfigReportRequest): GenerateConfigReportRequestSDKType {
    const obj: any = {};
    message.newConfig !== undefined && (obj.new_config = message.newConfig ? Any.toSDK(message.newConfig) : undefined);
    message.oldConfig !== undefined && (obj.old_config = message.oldConfig ? Any.toSDK(message.oldConfig) : undefined);
    return obj;
  }
};
function createBaseGenerateConfigReportResponse(): GenerateConfigReportResponse {
  return {
    serviceName: "",
    id: "",
    changeReports: [],
    diagnostics: []
  };
}
export const GenerateConfigReportResponse = {
  encode(message: GenerateConfigReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): GenerateConfigReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseGenerateConfigReportResponse();
    if (isSet(object.serviceName)) obj.serviceName = String(object.serviceName);
    if (isSet(object.id)) obj.id = String(object.id);
    if (Array.isArray(object?.changeReports)) obj.changeReports = object.changeReports.map((e: any) => ChangeReport.fromJSON(e));
    if (Array.isArray(object?.diagnostics)) obj.diagnostics = object.diagnostics.map((e: any) => Diagnostic.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<GenerateConfigReportResponse>): GenerateConfigReportResponse {
    const message = createBaseGenerateConfigReportResponse();
    message.serviceName = object.serviceName ?? "";
    message.id = object.id ?? "";
    message.changeReports = object.changeReports?.map(e => ChangeReport.fromPartial(e)) || [];
    message.diagnostics = object.diagnostics?.map(e => Diagnostic.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenerateConfigReportResponseSDKType): GenerateConfigReportResponse {
    return {
      serviceName: object?.service_name,
      id: object?.id,
      changeReports: Array.isArray(object?.change_reports) ? object.change_reports.map((e: any) => ChangeReport.fromSDK(e)) : [],
      diagnostics: Array.isArray(object?.diagnostics) ? object.diagnostics.map((e: any) => Diagnostic.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenerateConfigReportResponseSDKType {
    return {
      service_name: isSet(object.service_name) ? String(object.service_name) : "",
      id: isSet(object.id) ? String(object.id) : "",
      change_reports: Array.isArray(object?.change_reports) ? object.change_reports.map((e: any) => ChangeReport.fromSDKJSON(e)) : [],
      diagnostics: Array.isArray(object?.diagnostics) ? object.diagnostics.map((e: any) => Diagnostic.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenerateConfigReportResponse): GenerateConfigReportResponseSDKType {
    const obj: any = {};
    obj.service_name = message.serviceName;
    obj.id = message.id;
    if (message.changeReports) {
      obj.change_reports = message.changeReports.map(e => e ? ChangeReport.toSDK(e) : undefined);
    } else {
      obj.change_reports = [];
    }
    if (message.diagnostics) {
      obj.diagnostics = message.diagnostics.map(e => e ? Diagnostic.toSDK(e) : undefined);
    } else {
      obj.diagnostics = [];
    }
    return obj;
  }
};