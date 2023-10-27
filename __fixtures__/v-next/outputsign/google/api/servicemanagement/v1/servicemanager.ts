import { ManagedService, ManagedServiceSDKType, ConfigSource, ConfigSourceSDKType, Rollout, RolloutSDKType, ChangeReport, ChangeReportSDKType, Diagnostic, DiagnosticSDKType } from "./resources";
import { Service, ServiceSDKType } from "../../service";
import { Any, AnySDKType } from "../../../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
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
export interface ListServicesRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServicesRequest";
  value: Uint8Array;
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
export interface ListServicesResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServicesResponse";
  value: Uint8Array;
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
export interface GetServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRequest";
  value: Uint8Array;
}
/** Request message for `GetService` method. */
export interface GetServiceRequestSDKType {
  service_name: string;
}
/** Request message for CreateService method. */
export interface CreateServiceRequest {
  /** Required. Initial values for the service resource. */
  service?: ManagedService;
}
export interface CreateServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRequest";
  value: Uint8Array;
}
/** Request message for CreateService method. */
export interface CreateServiceRequestSDKType {
  service?: ManagedServiceSDKType;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
}
export interface DeleteServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.DeleteServiceRequest";
  value: Uint8Array;
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
export interface UndeleteServiceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceRequest";
  value: Uint8Array;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequestSDKType {
  service_name: string;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponse {
  /** Revived service resource. */
  service?: ManagedService;
}
export interface UndeleteServiceResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceResponse";
  value: Uint8Array;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponseSDKType {
  service?: ManagedServiceSDKType;
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
export interface GetServiceConfigRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceConfigRequest";
  value: Uint8Array;
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
export interface ListServiceConfigsRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsRequest";
  value: Uint8Array;
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
export interface ListServiceConfigsResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsResponse";
  value: Uint8Array;
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
  serviceConfig?: Service;
}
export interface CreateServiceConfigRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceConfigRequest";
  value: Uint8Array;
}
/** Request message for CreateServiceConfig method. */
export interface CreateServiceConfigRequestSDKType {
  service_name: string;
  service_config?: ServiceSDKType;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The source configuration for the service. */
  configSource?: ConfigSource;
  /**
   * Optional. If set, this will result in the generation of a
   * `google.api.Service` configuration based on the `ConfigSource` provided,
   * but the generated config and the sources will NOT be persisted.
   */
  validateOnly: boolean;
}
export interface SubmitConfigSourceRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceRequest";
  value: Uint8Array;
}
/** Request message for SubmitConfigSource method. */
export interface SubmitConfigSourceRequestSDKType {
  service_name: string;
  config_source?: ConfigSourceSDKType;
  validate_only: boolean;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponse {
  /** The generated service configuration. */
  serviceConfig?: Service;
}
export interface SubmitConfigSourceResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceResponse";
  value: Uint8Array;
}
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponseSDKType {
  service_config?: ServiceSDKType;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequest {
  /**
   * Required. The name of the service.  See the [overview](/service-management/overview)
   * for naming requirements.  For example: `example.googleapis.com`.
   */
  serviceName: string;
  /** Required. The rollout resource. The `service_name` field is output only. */
  rollout?: Rollout;
}
export interface CreateServiceRolloutRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRolloutRequest";
  value: Uint8Array;
}
/** Request message for 'CreateServiceRollout' */
export interface CreateServiceRolloutRequestSDKType {
  service_name: string;
  rollout?: RolloutSDKType;
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
export interface ListServiceRolloutsRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsRequest";
  value: Uint8Array;
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
export interface ListServiceRolloutsResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsResponse";
  value: Uint8Array;
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
export interface GetServiceRolloutRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRolloutRequest";
  value: Uint8Array;
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
  newConfig?: Any;
  /**
   * Optional. Service configuration against which the comparison will be done.
   * For this version of API, the supported types are
   * [google.api.servicemanagement.v1.ConfigRef][google.api.servicemanagement.v1.ConfigRef],
   * [google.api.servicemanagement.v1.ConfigSource][google.api.servicemanagement.v1.ConfigSource],
   * and [google.api.Service][google.api.Service]
   */
  oldConfig?: Any;
}
export interface GenerateConfigReportRequestProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportRequest";
  value: Uint8Array;
}
/** Request message for GenerateConfigReport method. */
export interface GenerateConfigReportRequestSDKType {
  new_config?: AnySDKType;
  old_config?: AnySDKType;
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
export interface GenerateConfigReportResponseProtoMsg {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportResponse";
  value: Uint8Array;
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
  typeUrl: "/google.api.servicemanagement.v1.ListServicesRequest",
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
  fromProtoMsg(message: ListServicesRequestProtoMsg): ListServicesRequest {
    return ListServicesRequest.decode(message.value);
  },
  toProto(message: ListServicesRequest): Uint8Array {
    return ListServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListServicesRequest): ListServicesRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServicesRequest",
      value: ListServicesRequest.encode(message).finish()
    };
  }
};
function createBaseListServicesResponse(): ListServicesResponse {
  return {
    services: [],
    nextPageToken: ""
  };
}
export const ListServicesResponse = {
  typeUrl: "/google.api.servicemanagement.v1.ListServicesResponse",
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
  fromProtoMsg(message: ListServicesResponseProtoMsg): ListServicesResponse {
    return ListServicesResponse.decode(message.value);
  },
  toProto(message: ListServicesResponse): Uint8Array {
    return ListServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListServicesResponse): ListServicesResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServicesResponse",
      value: ListServicesResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceRequest(): GetServiceRequest {
  return {
    serviceName: ""
  };
}
export const GetServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRequest",
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
  fromProtoMsg(message: GetServiceRequestProtoMsg): GetServiceRequest {
    return GetServiceRequest.decode(message.value);
  },
  toProto(message: GetServiceRequest): Uint8Array {
    return GetServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: GetServiceRequest): GetServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GetServiceRequest",
      value: GetServiceRequest.encode(message).finish()
    };
  }
};
function createBaseCreateServiceRequest(): CreateServiceRequest {
  return {
    service: undefined
  };
}
export const CreateServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRequest",
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
  fromProtoMsg(message: CreateServiceRequestProtoMsg): CreateServiceRequest {
    return CreateServiceRequest.decode(message.value);
  },
  toProto(message: CreateServiceRequest): Uint8Array {
    return CreateServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateServiceRequest): CreateServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.CreateServiceRequest",
      value: CreateServiceRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteServiceRequest(): DeleteServiceRequest {
  return {
    serviceName: ""
  };
}
export const DeleteServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.DeleteServiceRequest",
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
  fromProtoMsg(message: DeleteServiceRequestProtoMsg): DeleteServiceRequest {
    return DeleteServiceRequest.decode(message.value);
  },
  toProto(message: DeleteServiceRequest): Uint8Array {
    return DeleteServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteServiceRequest): DeleteServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.DeleteServiceRequest",
      value: DeleteServiceRequest.encode(message).finish()
    };
  }
};
function createBaseUndeleteServiceRequest(): UndeleteServiceRequest {
  return {
    serviceName: ""
  };
}
export const UndeleteServiceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceRequest",
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
  fromProtoMsg(message: UndeleteServiceRequestProtoMsg): UndeleteServiceRequest {
    return UndeleteServiceRequest.decode(message.value);
  },
  toProto(message: UndeleteServiceRequest): Uint8Array {
    return UndeleteServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: UndeleteServiceRequest): UndeleteServiceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceRequest",
      value: UndeleteServiceRequest.encode(message).finish()
    };
  }
};
function createBaseUndeleteServiceResponse(): UndeleteServiceResponse {
  return {
    service: undefined
  };
}
export const UndeleteServiceResponse = {
  typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceResponse",
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
  fromProtoMsg(message: UndeleteServiceResponseProtoMsg): UndeleteServiceResponse {
    return UndeleteServiceResponse.decode(message.value);
  },
  toProto(message: UndeleteServiceResponse): Uint8Array {
    return UndeleteServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: UndeleteServiceResponse): UndeleteServiceResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.UndeleteServiceResponse",
      value: UndeleteServiceResponse.encode(message).finish()
    };
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
  typeUrl: "/google.api.servicemanagement.v1.GetServiceConfigRequest",
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
  fromProtoMsg(message: GetServiceConfigRequestProtoMsg): GetServiceConfigRequest {
    return GetServiceConfigRequest.decode(message.value);
  },
  toProto(message: GetServiceConfigRequest): Uint8Array {
    return GetServiceConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: GetServiceConfigRequest): GetServiceConfigRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GetServiceConfigRequest",
      value: GetServiceConfigRequest.encode(message).finish()
    };
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
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsRequest",
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
  fromProtoMsg(message: ListServiceConfigsRequestProtoMsg): ListServiceConfigsRequest {
    return ListServiceConfigsRequest.decode(message.value);
  },
  toProto(message: ListServiceConfigsRequest): Uint8Array {
    return ListServiceConfigsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListServiceConfigsRequest): ListServiceConfigsRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsRequest",
      value: ListServiceConfigsRequest.encode(message).finish()
    };
  }
};
function createBaseListServiceConfigsResponse(): ListServiceConfigsResponse {
  return {
    serviceConfigs: [],
    nextPageToken: ""
  };
}
export const ListServiceConfigsResponse = {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsResponse",
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
  fromProtoMsg(message: ListServiceConfigsResponseProtoMsg): ListServiceConfigsResponse {
    return ListServiceConfigsResponse.decode(message.value);
  },
  toProto(message: ListServiceConfigsResponse): Uint8Array {
    return ListServiceConfigsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListServiceConfigsResponse): ListServiceConfigsResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceConfigsResponse",
      value: ListServiceConfigsResponse.encode(message).finish()
    };
  }
};
function createBaseCreateServiceConfigRequest(): CreateServiceConfigRequest {
  return {
    serviceName: "",
    serviceConfig: undefined
  };
}
export const CreateServiceConfigRequest = {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceConfigRequest",
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
  fromProtoMsg(message: CreateServiceConfigRequestProtoMsg): CreateServiceConfigRequest {
    return CreateServiceConfigRequest.decode(message.value);
  },
  toProto(message: CreateServiceConfigRequest): Uint8Array {
    return CreateServiceConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateServiceConfigRequest): CreateServiceConfigRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.CreateServiceConfigRequest",
      value: CreateServiceConfigRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitConfigSourceRequest(): SubmitConfigSourceRequest {
  return {
    serviceName: "",
    configSource: undefined,
    validateOnly: false
  };
}
export const SubmitConfigSourceRequest = {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceRequest",
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
  fromProtoMsg(message: SubmitConfigSourceRequestProtoMsg): SubmitConfigSourceRequest {
    return SubmitConfigSourceRequest.decode(message.value);
  },
  toProto(message: SubmitConfigSourceRequest): Uint8Array {
    return SubmitConfigSourceRequest.encode(message).finish();
  },
  toProtoMsg(message: SubmitConfigSourceRequest): SubmitConfigSourceRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceRequest",
      value: SubmitConfigSourceRequest.encode(message).finish()
    };
  }
};
function createBaseSubmitConfigSourceResponse(): SubmitConfigSourceResponse {
  return {
    serviceConfig: undefined
  };
}
export const SubmitConfigSourceResponse = {
  typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceResponse",
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
  fromProtoMsg(message: SubmitConfigSourceResponseProtoMsg): SubmitConfigSourceResponse {
    return SubmitConfigSourceResponse.decode(message.value);
  },
  toProto(message: SubmitConfigSourceResponse): Uint8Array {
    return SubmitConfigSourceResponse.encode(message).finish();
  },
  toProtoMsg(message: SubmitConfigSourceResponse): SubmitConfigSourceResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.SubmitConfigSourceResponse",
      value: SubmitConfigSourceResponse.encode(message).finish()
    };
  }
};
function createBaseCreateServiceRolloutRequest(): CreateServiceRolloutRequest {
  return {
    serviceName: "",
    rollout: undefined
  };
}
export const CreateServiceRolloutRequest = {
  typeUrl: "/google.api.servicemanagement.v1.CreateServiceRolloutRequest",
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
  fromProtoMsg(message: CreateServiceRolloutRequestProtoMsg): CreateServiceRolloutRequest {
    return CreateServiceRolloutRequest.decode(message.value);
  },
  toProto(message: CreateServiceRolloutRequest): Uint8Array {
    return CreateServiceRolloutRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateServiceRolloutRequest): CreateServiceRolloutRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.CreateServiceRolloutRequest",
      value: CreateServiceRolloutRequest.encode(message).finish()
    };
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
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsRequest",
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
  fromProtoMsg(message: ListServiceRolloutsRequestProtoMsg): ListServiceRolloutsRequest {
    return ListServiceRolloutsRequest.decode(message.value);
  },
  toProto(message: ListServiceRolloutsRequest): Uint8Array {
    return ListServiceRolloutsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListServiceRolloutsRequest): ListServiceRolloutsRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsRequest",
      value: ListServiceRolloutsRequest.encode(message).finish()
    };
  }
};
function createBaseListServiceRolloutsResponse(): ListServiceRolloutsResponse {
  return {
    rollouts: [],
    nextPageToken: ""
  };
}
export const ListServiceRolloutsResponse = {
  typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsResponse",
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
  fromProtoMsg(message: ListServiceRolloutsResponseProtoMsg): ListServiceRolloutsResponse {
    return ListServiceRolloutsResponse.decode(message.value);
  },
  toProto(message: ListServiceRolloutsResponse): Uint8Array {
    return ListServiceRolloutsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListServiceRolloutsResponse): ListServiceRolloutsResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.ListServiceRolloutsResponse",
      value: ListServiceRolloutsResponse.encode(message).finish()
    };
  }
};
function createBaseGetServiceRolloutRequest(): GetServiceRolloutRequest {
  return {
    serviceName: "",
    rolloutId: ""
  };
}
export const GetServiceRolloutRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GetServiceRolloutRequest",
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
  fromProtoMsg(message: GetServiceRolloutRequestProtoMsg): GetServiceRolloutRequest {
    return GetServiceRolloutRequest.decode(message.value);
  },
  toProto(message: GetServiceRolloutRequest): Uint8Array {
    return GetServiceRolloutRequest.encode(message).finish();
  },
  toProtoMsg(message: GetServiceRolloutRequest): GetServiceRolloutRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GetServiceRolloutRequest",
      value: GetServiceRolloutRequest.encode(message).finish()
    };
  }
};
function createBaseGenerateConfigReportRequest(): GenerateConfigReportRequest {
  return {
    newConfig: undefined,
    oldConfig: undefined
  };
}
export const GenerateConfigReportRequest = {
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportRequest",
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
  fromProtoMsg(message: GenerateConfigReportRequestProtoMsg): GenerateConfigReportRequest {
    return GenerateConfigReportRequest.decode(message.value);
  },
  toProto(message: GenerateConfigReportRequest): Uint8Array {
    return GenerateConfigReportRequest.encode(message).finish();
  },
  toProtoMsg(message: GenerateConfigReportRequest): GenerateConfigReportRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportRequest",
      value: GenerateConfigReportRequest.encode(message).finish()
    };
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
  typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportResponse",
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
  fromProtoMsg(message: GenerateConfigReportResponseProtoMsg): GenerateConfigReportResponse {
    return GenerateConfigReportResponse.decode(message.value);
  },
  toProto(message: GenerateConfigReportResponse): Uint8Array {
    return GenerateConfigReportResponse.encode(message).finish();
  },
  toProtoMsg(message: GenerateConfigReportResponse): GenerateConfigReportResponseProtoMsg {
    return {
      typeUrl: "/google.api.servicemanagement.v1.GenerateConfigReportResponse",
      value: GenerateConfigReportResponse.encode(message).finish()
    };
  }
};