import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { ManagedService, ConfigSource, Rollout, ChangeReport, Diagnostic } from "../../../../google/api/servicemanagement/v1/resources";
import { Service } from "../../../../google/api/service";
import { Any } from "../../../../google/protobuf/any";
import { Operation } from "../../../../google/longrunning/operations";
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
     *
     * @deprecated
     */
    consumerId: string;
}
/** Response message for `ListServices` method. */
export interface ListServicesResponse {
    /** The returned services will only have the name field set. */
    services: ManagedService[];
    /** Token that can be passed to `ListServices` to resume a paginated query. */
    nextPageToken: string;
}
/** Request message for `GetService` method. */
export interface GetServiceRequest {
    /**
     * Required. The name of the service.  See the `ServiceManager` overview for naming
     * requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
}
/** Request message for CreateService method. */
export interface CreateServiceRequest {
    /** Required. Initial values for the service resource. */
    service: ManagedService;
}
/** Request message for DeleteService method. */
export interface DeleteServiceRequest {
    /**
     * Required. The name of the service.  See the [overview](/service-management/overview)
     * for naming requirements.  For example: `example.googleapis.com`.
     */
    serviceName: string;
}
/** Request message for UndeleteService method. */
export interface UndeleteServiceRequest {
    /**
     * Required. The name of the service. See the [overview](/service-management/overview)
     * for naming requirements. For example: `example.googleapis.com`.
     */
    serviceName: string;
}
/** Response message for UndeleteService method. */
export interface UndeleteServiceResponse {
    /** Revived service resource. */
    service: ManagedService;
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
export declare enum GetServiceConfigRequest_ConfigView {
    /** BASIC - Server response includes all fields except SourceInfo. */
    BASIC = 0,
    /**
     * FULL - Server response includes all fields including SourceInfo.
     * SourceFiles are of type 'google.api.servicemanagement.v1.ConfigFile'
     * and are only available for configs created using the
     * SubmitConfigSource method.
     */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function getServiceConfigRequest_ConfigViewFromJSON(object: any): GetServiceConfigRequest_ConfigView;
export declare function getServiceConfigRequest_ConfigViewToJSON(object: GetServiceConfigRequest_ConfigView): string;
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
/** Response message for ListServiceConfigs method. */
export interface ListServiceConfigsResponse {
    /** The list of service configuration resources. */
    serviceConfigs: Service[];
    /** The token of the next page of results. */
    nextPageToken: string;
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
/** Response message for SubmitConfigSource method. */
export interface SubmitConfigSourceResponse {
    /** The generated service configuration. */
    serviceConfig: Service;
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
/** Response message for ListServiceRollouts method. */
export interface ListServiceRolloutsResponse {
    /** The list of rollout resources. */
    rollouts: Rollout[];
    /** The token of the next page of results. */
    nextPageToken: string;
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
export declare const ListServicesRequest: {
    encode(message: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest;
    fromJSON(object: any): ListServicesRequest;
    toJSON(message: ListServicesRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListServicesResponse;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): GetServiceRequest;
};
export declare const CreateServiceRequest: {
    encode(message: CreateServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRequest;
    fromJSON(object: any): CreateServiceRequest;
    toJSON(message: CreateServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): CreateServiceRequest;
};
export declare const DeleteServiceRequest: {
    encode(message: DeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceRequest;
    fromJSON(object: any): DeleteServiceRequest;
    toJSON(message: DeleteServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): DeleteServiceRequest;
};
export declare const UndeleteServiceRequest: {
    encode(message: UndeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceRequest;
    fromJSON(object: any): UndeleteServiceRequest;
    toJSON(message: UndeleteServiceRequest): unknown;
    fromPartial<I extends unknown>(object: I): UndeleteServiceRequest;
};
export declare const UndeleteServiceResponse: {
    encode(message: UndeleteServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceResponse;
    fromJSON(object: any): UndeleteServiceResponse;
    toJSON(message: UndeleteServiceResponse): unknown;
    fromPartial<I extends unknown>(object: I): UndeleteServiceResponse;
};
export declare const GetServiceConfigRequest: {
    encode(message: GetServiceConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceConfigRequest;
    fromJSON(object: any): GetServiceConfigRequest;
    toJSON(message: GetServiceConfigRequest): unknown;
    fromPartial<I extends unknown>(object: I): GetServiceConfigRequest;
};
export declare const ListServiceConfigsRequest: {
    encode(message: ListServiceConfigsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsRequest;
    fromJSON(object: any): ListServiceConfigsRequest;
    toJSON(message: ListServiceConfigsRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListServiceConfigsRequest;
};
export declare const ListServiceConfigsResponse: {
    encode(message: ListServiceConfigsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsResponse;
    fromJSON(object: any): ListServiceConfigsResponse;
    toJSON(message: ListServiceConfigsResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListServiceConfigsResponse;
};
export declare const CreateServiceConfigRequest: {
    encode(message: CreateServiceConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceConfigRequest;
    fromJSON(object: any): CreateServiceConfigRequest;
    toJSON(message: CreateServiceConfigRequest): unknown;
    fromPartial<I extends unknown>(object: I): CreateServiceConfigRequest;
};
export declare const SubmitConfigSourceRequest: {
    encode(message: SubmitConfigSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceRequest;
    fromJSON(object: any): SubmitConfigSourceRequest;
    toJSON(message: SubmitConfigSourceRequest): unknown;
    fromPartial<I extends unknown>(object: I): SubmitConfigSourceRequest;
};
export declare const SubmitConfigSourceResponse: {
    encode(message: SubmitConfigSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceResponse;
    fromJSON(object: any): SubmitConfigSourceResponse;
    toJSON(message: SubmitConfigSourceResponse): unknown;
    fromPartial<I extends unknown>(object: I): SubmitConfigSourceResponse;
};
export declare const CreateServiceRolloutRequest: {
    encode(message: CreateServiceRolloutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRolloutRequest;
    fromJSON(object: any): CreateServiceRolloutRequest;
    toJSON(message: CreateServiceRolloutRequest): unknown;
    fromPartial<I extends unknown>(object: I): CreateServiceRolloutRequest;
};
export declare const ListServiceRolloutsRequest: {
    encode(message: ListServiceRolloutsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsRequest;
    fromJSON(object: any): ListServiceRolloutsRequest;
    toJSON(message: ListServiceRolloutsRequest): unknown;
    fromPartial<I extends unknown>(object: I): ListServiceRolloutsRequest;
};
export declare const ListServiceRolloutsResponse: {
    encode(message: ListServiceRolloutsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsResponse;
    fromJSON(object: any): ListServiceRolloutsResponse;
    toJSON(message: ListServiceRolloutsResponse): unknown;
    fromPartial<I extends unknown>(object: I): ListServiceRolloutsResponse;
};
export declare const GetServiceRolloutRequest: {
    encode(message: GetServiceRolloutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRolloutRequest;
    fromJSON(object: any): GetServiceRolloutRequest;
    toJSON(message: GetServiceRolloutRequest): unknown;
    fromPartial<I extends unknown>(object: I): GetServiceRolloutRequest;
};
export declare const GenerateConfigReportRequest: {
    encode(message: GenerateConfigReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportRequest;
    fromJSON(object: any): GenerateConfigReportRequest;
    toJSON(message: GenerateConfigReportRequest): unknown;
    fromPartial<I extends unknown>(object: I): GenerateConfigReportRequest;
};
export declare const GenerateConfigReportResponse: {
    encode(message: GenerateConfigReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportResponse;
    fromJSON(object: any): GenerateConfigReportResponse;
    toJSON(message: GenerateConfigReportResponse): unknown;
    fromPartial<I extends unknown>(object: I): GenerateConfigReportResponse;
};
/** [Google Service Management API](/service-management/overview) */
export interface ServiceManager {
    /**
     * Lists managed services.
     *
     * Returns all public services. For authenticated users, also returns all
     * services the calling user has "servicemanagement.services.get" permission
     * for.
     */
    ListServices(request: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * Gets a managed service. Authentication is required unless the service is
     * public.
     */
    GetService(request: GetServiceRequest): Promise<ManagedService>;
    /**
     * Creates a new managed service.
     *
     * A managed service is immutable, and is subject to mandatory 30-day
     * data retention. You cannot move a service or recreate it within 30 days
     * after deletion.
     *
     * One producer project can own no more than 500 services. For security and
     * reliability purposes, a production service should be hosted in a
     * dedicated producer project.
     *
     * Operation<response: ManagedService>
     */
    CreateService(request: CreateServiceRequest): Promise<Operation>;
    /**
     * Deletes a managed service. This method will change the service to the
     * `Soft-Delete` state for 30 days. Within this period, service producers may
     * call [UndeleteService][google.api.servicemanagement.v1.ServiceManager.UndeleteService] to restore the service.
     * After 30 days, the service will be permanently deleted.
     *
     * Operation<response: google.protobuf.Empty>
     */
    DeleteService(request: DeleteServiceRequest): Promise<Operation>;
    /**
     * Revives a previously deleted managed service. The method restores the
     * service using the configuration at the time the service was deleted.
     * The target service must exist and must have been deleted within the
     * last 30 days.
     *
     * Operation<response: UndeleteServiceResponse>
     */
    UndeleteService(request: UndeleteServiceRequest): Promise<Operation>;
    /**
     * Lists the history of the service configuration for a managed service,
     * from the newest to the oldest.
     */
    ListServiceConfigs(request: ListServiceConfigsRequest): Promise<ListServiceConfigsResponse>;
    /** Gets a service configuration (version) for a managed service. */
    GetServiceConfig(request: GetServiceConfigRequest): Promise<Service>;
    /**
     * Creates a new service configuration (version) for a managed service.
     * This method only stores the service configuration. To roll out the service
     * configuration to backend systems please call
     * [CreateServiceRollout][google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout].
     *
     * Only the 100 most recent service configurations and ones referenced by
     * existing rollouts are kept for each service. The rest will be deleted
     * eventually.
     */
    CreateServiceConfig(request: CreateServiceConfigRequest): Promise<Service>;
    /**
     * Creates a new service configuration (version) for a managed service based
     * on
     * user-supplied configuration source files (for example: OpenAPI
     * Specification). This method stores the source configurations as well as the
     * generated service configuration. To rollout the service configuration to
     * other services,
     * please call [CreateServiceRollout][google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout].
     *
     * Only the 100 most recent configuration sources and ones referenced by
     * existing service configurtions are kept for each service. The rest will be
     * deleted eventually.
     *
     * Operation<response: SubmitConfigSourceResponse>
     */
    SubmitConfigSource(request: SubmitConfigSourceRequest): Promise<Operation>;
    /**
     * Lists the history of the service configuration rollouts for a managed
     * service, from the newest to the oldest.
     */
    ListServiceRollouts(request: ListServiceRolloutsRequest): Promise<ListServiceRolloutsResponse>;
    /** Gets a service configuration [rollout][google.api.servicemanagement.v1.Rollout]. */
    GetServiceRollout(request: GetServiceRolloutRequest): Promise<Rollout>;
    /**
     * Creates a new service configuration rollout. Based on rollout, the
     * Google Service Management will roll out the service configurations to
     * different backend services. For example, the logging configuration will be
     * pushed to Google Cloud Logging.
     *
     * Please note that any previous pending and running Rollouts and associated
     * Operations will be automatically cancelled so that the latest Rollout will
     * not be blocked by previous Rollouts.
     *
     * Only the 100 most recent (in any state) and the last 10 successful (if not
     * already part of the set of 100 most recent) rollouts are kept for each
     * service. The rest will be deleted eventually.
     *
     * Operation<response: Rollout>
     */
    CreateServiceRollout(request: CreateServiceRolloutRequest): Promise<Operation>;
    /**
     * Generates and returns a report (errors, warnings and changes from
     * existing configurations) associated with
     * GenerateConfigReportRequest.new_value
     *
     * If GenerateConfigReportRequest.old_value is specified,
     * GenerateConfigReportRequest will contain a single ChangeReport based on the
     * comparison between GenerateConfigReportRequest.new_value and
     * GenerateConfigReportRequest.old_value.
     * If GenerateConfigReportRequest.old_value is not specified, this method
     * will compare GenerateConfigReportRequest.new_value with the last pushed
     * service configuration.
     */
    GenerateConfigReport(request: GenerateConfigReportRequest): Promise<GenerateConfigReportResponse>;
}
export declare class ServiceManagerClientImpl implements ServiceManager {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListServices(request: ListServicesRequest): Promise<ListServicesResponse>;
    GetService(request: GetServiceRequest): Promise<ManagedService>;
    CreateService(request: CreateServiceRequest): Promise<Operation>;
    DeleteService(request: DeleteServiceRequest): Promise<Operation>;
    UndeleteService(request: UndeleteServiceRequest): Promise<Operation>;
    ListServiceConfigs(request: ListServiceConfigsRequest): Promise<ListServiceConfigsResponse>;
    GetServiceConfig(request: GetServiceConfigRequest): Promise<Service>;
    CreateServiceConfig(request: CreateServiceConfigRequest): Promise<Service>;
    SubmitConfigSource(request: SubmitConfigSourceRequest): Promise<Operation>;
    ListServiceRollouts(request: ListServiceRolloutsRequest): Promise<ListServiceRolloutsResponse>;
    GetServiceRollout(request: GetServiceRolloutRequest): Promise<Rollout>;
    CreateServiceRollout(request: CreateServiceRolloutRequest): Promise<Operation>;
    GenerateConfigReport(request: GenerateConfigReportRequest): Promise<GenerateConfigReportResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
