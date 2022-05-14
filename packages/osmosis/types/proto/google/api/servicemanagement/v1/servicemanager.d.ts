import { ManagedService, ConfigSource, Rollout, ChangeReport, Diagnostic } from "./resources";
import { Service } from "../../service";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
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
     * -- To limit the results to only those in
     * [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',
     * use filter='status=SUCCESS'
     * -- To limit the results to those in
     * [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'
     * or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
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
    fromPartial<I extends {
        producerProjectId?: string;
        pageSize?: number;
        pageToken?: string;
        consumerId?: string;
    } & {
        producerProjectId?: string;
        pageSize?: number;
        pageToken?: string;
        consumerId?: string;
    } & Record<Exclude<keyof I, keyof ListServicesRequest>, never>>(object: I): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial<I extends {
        services?: {
            serviceName?: string;
            producerProjectId?: string;
        }[];
        nextPageToken?: string;
    } & {
        services?: {
            serviceName?: string;
            producerProjectId?: string;
        }[] & ({
            serviceName?: string;
            producerProjectId?: string;
        } & {
            serviceName?: string;
            producerProjectId?: string;
        } & Record<Exclude<keyof I["services"][number], keyof ManagedService>, never>)[] & Record<Exclude<keyof I["services"], keyof {
            serviceName?: string;
            producerProjectId?: string;
        }[]>, never>;
        nextPageToken?: string;
    } & Record<Exclude<keyof I, keyof ListServicesResponse>, never>>(object: I): ListServicesResponse;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
    } & {
        serviceName?: string;
    } & Record<Exclude<keyof I, "serviceName">, never>>(object: I): GetServiceRequest;
};
export declare const CreateServiceRequest: {
    encode(message: CreateServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRequest;
    fromJSON(object: any): CreateServiceRequest;
    toJSON(message: CreateServiceRequest): unknown;
    fromPartial<I extends {
        service?: {
            serviceName?: string;
            producerProjectId?: string;
        };
    } & {
        service?: {
            serviceName?: string;
            producerProjectId?: string;
        } & {
            serviceName?: string;
            producerProjectId?: string;
        } & Record<Exclude<keyof I["service"], keyof ManagedService>, never>;
    } & Record<Exclude<keyof I, "service">, never>>(object: I): CreateServiceRequest;
};
export declare const DeleteServiceRequest: {
    encode(message: DeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceRequest;
    fromJSON(object: any): DeleteServiceRequest;
    toJSON(message: DeleteServiceRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
    } & {
        serviceName?: string;
    } & Record<Exclude<keyof I, "serviceName">, never>>(object: I): DeleteServiceRequest;
};
export declare const UndeleteServiceRequest: {
    encode(message: UndeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceRequest;
    fromJSON(object: any): UndeleteServiceRequest;
    toJSON(message: UndeleteServiceRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
    } & {
        serviceName?: string;
    } & Record<Exclude<keyof I, "serviceName">, never>>(object: I): UndeleteServiceRequest;
};
export declare const UndeleteServiceResponse: {
    encode(message: UndeleteServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndeleteServiceResponse;
    fromJSON(object: any): UndeleteServiceResponse;
    toJSON(message: UndeleteServiceResponse): unknown;
    fromPartial<I extends {
        service?: {
            serviceName?: string;
            producerProjectId?: string;
        };
    } & {
        service?: {
            serviceName?: string;
            producerProjectId?: string;
        } & {
            serviceName?: string;
            producerProjectId?: string;
        } & Record<Exclude<keyof I["service"], keyof ManagedService>, never>;
    } & Record<Exclude<keyof I, "service">, never>>(object: I): UndeleteServiceResponse;
};
export declare const GetServiceConfigRequest: {
    encode(message: GetServiceConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceConfigRequest;
    fromJSON(object: any): GetServiceConfigRequest;
    toJSON(message: GetServiceConfigRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        configId?: string;
        view?: GetServiceConfigRequest_ConfigView;
    } & {
        serviceName?: string;
        configId?: string;
        view?: GetServiceConfigRequest_ConfigView;
    } & Record<Exclude<keyof I, keyof GetServiceConfigRequest>, never>>(object: I): GetServiceConfigRequest;
};
export declare const ListServiceConfigsRequest: {
    encode(message: ListServiceConfigsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsRequest;
    fromJSON(object: any): ListServiceConfigsRequest;
    toJSON(message: ListServiceConfigsRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        pageToken?: string;
        pageSize?: number;
    } & {
        serviceName?: string;
        pageToken?: string;
        pageSize?: number;
    } & Record<Exclude<keyof I, keyof ListServiceConfigsRequest>, never>>(object: I): ListServiceConfigsRequest;
};
export declare const ListServiceConfigsResponse: {
    encode(message: ListServiceConfigsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceConfigsResponse;
    fromJSON(object: any): ListServiceConfigsResponse;
    toJSON(message: ListServiceConfigsResponse): unknown;
    fromPartial<I extends {
        serviceConfigs?: {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        }[];
        nextPageToken?: string;
    } & {
        serviceConfigs?: {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        }[] & ({
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        } & {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["apis"][number], keyof import("../../../protobuf/api").Api>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["apis"], keyof {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["types"][number], keyof import("../../../protobuf/type").Type>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["types"], keyof {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["enums"][number], keyof import("../../../protobuf/type").Enum>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["enums"], keyof {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["documentation"], keyof import("../../documentation").Documentation>, never>;
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["backend"], "rules">, never>;
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["http"], keyof import("../../http").Http>, never>;
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["quota"], keyof import("../../quota").Quota>, never>;
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["authentication"], keyof import("../../auth").Authentication>, never>;
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["context"], "rules">, never>;
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["usage"], keyof import("../../usage").Usage>, never>;
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[] & ({
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["endpoints"][number], keyof import("../../endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["endpoints"], keyof {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[]>, never>;
            control?: {
                environment?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["control"], "environment">, never>;
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[] & ({
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["logs"][number], keyof import("../../log").LogDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["logs"], keyof {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[]>, never>;
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[] & ({
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["metrics"][number], keyof import("../../metric").MetricDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["metrics"], keyof {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[]>, never>;
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[] & ({
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["monitoredResources"][number], keyof import("../../monitored_resource").MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfigs"][number]["monitoredResources"], keyof {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[]>, never>;
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["billing"], "consumerDestinations">, never>;
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["logging"], keyof import("../../logging").Logging>, never>;
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["monitoring"], keyof import("../../monitoring").Monitoring>, never>;
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["systemParameters"], "rules">, never>;
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["sourceInfo"], "sourceFiles">, never>;
            configVersion?: {
                value?: number;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["serviceConfigs"][number]["configVersion"], "value">, never>;
        } & Record<Exclude<keyof I["serviceConfigs"][number], keyof Service>, never>)[] & Record<Exclude<keyof I["serviceConfigs"], keyof {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        }[]>, never>;
        nextPageToken?: string;
    } & Record<Exclude<keyof I, keyof ListServiceConfigsResponse>, never>>(object: I): ListServiceConfigsResponse;
};
export declare const CreateServiceConfigRequest: {
    encode(message: CreateServiceConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceConfigRequest;
    fromJSON(object: any): CreateServiceConfigRequest;
    toJSON(message: CreateServiceConfigRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        serviceConfig?: {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        };
    } & {
        serviceName?: string;
        serviceConfig?: {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        } & {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[] & ({
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                } & {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[] & ({
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                    syntax?: import("../../../protobuf/type").Syntax;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"][number], keyof import("../../../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"], keyof {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[]>, never>;
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["options"][number]["value"], keyof Any>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                version?: string;
                sourceContext?: {
                    fileName?: string;
                } & {
                    fileName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["sourceContext"], "fileName">, never>;
                mixins?: {
                    name?: string;
                    root?: string;
                }[] & ({
                    name?: string;
                    root?: string;
                } & {
                    name?: string;
                    root?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["mixins"][number], keyof import("../../../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["mixins"], keyof {
                    name?: string;
                    root?: string;
                }[]>, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["serviceConfig"]["apis"][number], keyof import("../../../protobuf/api").Api>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"], keyof {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[] & ({
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                } & {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[] & ({
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                    jsonName?: string;
                    defaultValue?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"][number], keyof import("../../../protobuf/type").Field>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"], keyof {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[]>, never>;
                oneofs?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["oneofs"], keyof string[]>, never>;
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["options"][number]["value"], keyof Any>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                sourceContext?: {
                    fileName?: string;
                } & {
                    fileName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["sourceContext"], "fileName">, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["serviceConfig"]["types"][number], keyof import("../../../protobuf/type").Type>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"], keyof {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[] & ({
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                } & {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[] & ({
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"][number], keyof import("../../../protobuf/type").EnumValue>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"], keyof {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[]>, never>;
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["options"][number]["value"], keyof Any>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                sourceContext?: {
                    fileName?: string;
                } & {
                    fileName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["sourceContext"], "fileName">, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["serviceConfig"]["enums"][number], keyof import("../../../protobuf/type").Enum>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"], keyof {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            } & {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[] & ({
                    name?: string;
                    content?: string;
                    subpages?: any[];
                } & {
                    name?: string;
                    content?: string;
                    subpages?: {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[] & ({
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    } & {
                        name?: string;
                        content?: string;
                        subpages?: {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[] & ({
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"], keyof {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[]>, never>;
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[] & ({
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                } & {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["rules"][number], keyof import("../../documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["rules"], keyof {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[]>, never>;
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["documentation"], keyof import("../../documentation").Documentation>, never>;
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            } & {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[] & ({
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                } & {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["backend"]["rules"][number], keyof import("../../backend").BackendRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["backend"]["rules"], keyof {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["backend"], "rules">, never>;
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            } & {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[] & ({
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                } & {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    } & {
                        kind?: string;
                        path?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["custom"], keyof import("../../http").CustomHttpPattern>, never>;
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[] & ({
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    } & {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number]["custom"], keyof import("../../http").CustomHttpPattern>, never>;
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[] & ({
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("../../http").HttpRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number], keyof import("../../http").HttpRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"], keyof {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number], keyof import("../../http").HttpRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"], keyof {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[]>, never>;
                fullyDecodeReservedExpansion?: boolean;
            } & Record<Exclude<keyof I["serviceConfig"]["http"], keyof import("../../http").Http>, never>;
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            } & {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[] & ({
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                } & {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["quota"]["limits"][number]["values"], string | number>, never>;
                    displayName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["quota"]["limits"][number], keyof import("../../quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["quota"]["limits"], keyof {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[]>, never>;
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[] & ({
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                } & {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["quota"]["metricRules"][number]["metricCosts"], string | number>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["quota"]["metricRules"][number], keyof import("../../quota").MetricRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["quota"]["metricRules"], keyof {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["quota"], keyof import("../../quota").Quota>, never>;
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            } & {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[] & ({
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                } & {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    } & {
                        canonicalScopes?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number]["oauth"], "canonicalScopes">, never>;
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[] & ({
                        providerId?: string;
                        audiences?: string;
                    } & {
                        providerId?: string;
                        audiences?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number]["requirements"][number], keyof import("../../auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number]["requirements"], keyof {
                        providerId?: string;
                        audiences?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number], keyof import("../../auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"], keyof {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[]>, never>;
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[] & ({
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                } & {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[] & ({
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    } & {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"][number]["jwtLocations"][number], keyof import("../../auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"][number]["jwtLocations"], keyof {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"][number], keyof import("../../auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"], keyof {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["authentication"], keyof import("../../auth").Authentication>, never>;
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            } & {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[] & ({
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                } & {
                    selector?: string;
                    requested?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["requested"], keyof string[]>, never>;
                    provided?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["provided"], keyof string[]>, never>;
                    allowedRequestExtensions?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["allowedRequestExtensions"], keyof string[]>, never>;
                    allowedResponseExtensions?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["allowedResponseExtensions"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number], keyof import("../../context").ContextRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"], keyof {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["context"], "rules">, never>;
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            } & {
                requirements?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["usage"]["requirements"], keyof string[]>, never>;
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[] & ({
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                } & {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                } & Record<Exclude<keyof I["serviceConfig"]["usage"]["rules"][number], keyof import("../../usage").UsageRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["usage"]["rules"], keyof {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[]>, never>;
                producerNotificationChannel?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["usage"], keyof import("../../usage").Usage>, never>;
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[] & ({
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            } & {
                name?: string;
                aliases?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["endpoints"][number]["aliases"], keyof string[]>, never>;
                target?: string;
                allowCors?: boolean;
            } & Record<Exclude<keyof I["serviceConfig"]["endpoints"][number], keyof import("../../endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["endpoints"], keyof {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[]>, never>;
            control?: {
                environment?: string;
            } & {
                environment?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["control"], "environment">, never>;
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[] & ({
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            } & {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["logs"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logs"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                description?: string;
                displayName?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["logs"][number], keyof import("../../log").LogDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logs"], keyof {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[]>, never>;
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[] & ({
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            } & {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["metadata"], keyof import("../../metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["monitoredResourceTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["metrics"][number], keyof import("../../metric").MetricDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["metrics"], keyof {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[]>, never>;
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[] & ({
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            } & {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                launchStage?: import("../../launch_stage").LaunchStage;
            } & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"][number], keyof import("../../monitored_resource").MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"], keyof {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[]>, never>;
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            } & {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[] & ({
                    monitoredResource?: string;
                    metrics?: string[];
                } & {
                    monitoredResource?: string;
                    metrics?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["billing"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["billing"]["consumerDestinations"][number], keyof import("../../billing").Billing_BillingDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["billing"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["billing"], "consumerDestinations">, never>;
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            } & {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[] & ({
                    monitoredResource?: string;
                    logs?: string[];
                } & {
                    monitoredResource?: string;
                    logs?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["producerDestinations"][number]["logs"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["logging"]["producerDestinations"][number], keyof import("../../logging").Logging_LoggingDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["producerDestinations"], keyof {
                    monitoredResource?: string;
                    logs?: string[];
                }[]>, never>;
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[] & ({
                    monitoredResource?: string;
                    logs?: string[];
                } & {
                    monitoredResource?: string;
                    logs?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["consumerDestinations"][number]["logs"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["logging"]["consumerDestinations"][number], keyof import("../../logging").Logging_LoggingDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    logs?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["logging"], keyof import("../../logging").Logging>, never>;
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            } & {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[] & ({
                    monitoredResource?: string;
                    metrics?: string[];
                } & {
                    monitoredResource?: string;
                    metrics?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["producerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["producerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["producerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[] & ({
                    monitoredResource?: string;
                    metrics?: string[];
                } & {
                    monitoredResource?: string;
                    metrics?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["consumerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["monitoring"], keyof import("../../monitoring").Monitoring>, never>;
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            } & {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[] & ({
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                } & {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[] & ({
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    } & {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"][number]["parameters"][number], keyof import("../../system_parameter").SystemParameter>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"][number]["parameters"], keyof {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"][number], keyof import("../../system_parameter").SystemParameterRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"], keyof {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["systemParameters"], "rules">, never>;
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["serviceConfig"]["sourceInfo"]["sourceFiles"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["sourceInfo"]["sourceFiles"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["sourceInfo"], "sourceFiles">, never>;
            configVersion?: {
                value?: number;
            } & {
                value?: number;
            } & Record<Exclude<keyof I["serviceConfig"]["configVersion"], "value">, never>;
        } & Record<Exclude<keyof I["serviceConfig"], keyof Service>, never>;
    } & Record<Exclude<keyof I, keyof CreateServiceConfigRequest>, never>>(object: I): CreateServiceConfigRequest;
};
export declare const SubmitConfigSourceRequest: {
    encode(message: SubmitConfigSourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceRequest;
    fromJSON(object: any): SubmitConfigSourceRequest;
    toJSON(message: SubmitConfigSourceRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        configSource?: {
            id?: string;
            files?: {
                filePath?: string;
                fileContents?: Uint8Array;
                fileType?: import("./resources").ConfigFile_FileType;
            }[];
        };
        validateOnly?: boolean;
    } & {
        serviceName?: string;
        configSource?: {
            id?: string;
            files?: {
                filePath?: string;
                fileContents?: Uint8Array;
                fileType?: import("./resources").ConfigFile_FileType;
            }[];
        } & {
            id?: string;
            files?: {
                filePath?: string;
                fileContents?: Uint8Array;
                fileType?: import("./resources").ConfigFile_FileType;
            }[] & ({
                filePath?: string;
                fileContents?: Uint8Array;
                fileType?: import("./resources").ConfigFile_FileType;
            } & {
                filePath?: string;
                fileContents?: Uint8Array;
                fileType?: import("./resources").ConfigFile_FileType;
            } & Record<Exclude<keyof I["configSource"]["files"][number], keyof import("./resources").ConfigFile>, never>)[] & Record<Exclude<keyof I["configSource"]["files"], keyof {
                filePath?: string;
                fileContents?: Uint8Array;
                fileType?: import("./resources").ConfigFile_FileType;
            }[]>, never>;
        } & Record<Exclude<keyof I["configSource"], keyof ConfigSource>, never>;
        validateOnly?: boolean;
    } & Record<Exclude<keyof I, keyof SubmitConfigSourceRequest>, never>>(object: I): SubmitConfigSourceRequest;
};
export declare const SubmitConfigSourceResponse: {
    encode(message: SubmitConfigSourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitConfigSourceResponse;
    fromJSON(object: any): SubmitConfigSourceResponse;
    toJSON(message: SubmitConfigSourceResponse): unknown;
    fromPartial<I extends {
        serviceConfig?: {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        };
    } & {
        serviceConfig?: {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[];
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            };
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            };
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            };
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            };
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            };
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            };
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            };
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[];
            control?: {
                environment?: string;
            };
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[];
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[];
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[];
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            };
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            };
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            };
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            configVersion?: {
                value?: number;
            };
        } & {
            name?: string;
            title?: string;
            producerProjectId?: string;
            id?: string;
            apis?: {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[] & ({
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                } & {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[] & ({
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                    syntax?: import("../../../protobuf/type").Syntax;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"][number], keyof import("../../../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["methods"], keyof {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[]>, never>;
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["options"][number]["value"], keyof Any>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                version?: string;
                sourceContext?: {
                    fileName?: string;
                } & {
                    fileName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["sourceContext"], "fileName">, never>;
                mixins?: {
                    name?: string;
                    root?: string;
                }[] & ({
                    name?: string;
                    root?: string;
                } & {
                    name?: string;
                    root?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["mixins"][number], keyof import("../../../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"][number]["mixins"], keyof {
                    name?: string;
                    root?: string;
                }[]>, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["serviceConfig"]["apis"][number], keyof import("../../../protobuf/api").Api>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["apis"], keyof {
                name?: string;
                methods?: {
                    name?: string;
                    requestTypeUrl?: string;
                    requestStreaming?: boolean;
                    responseTypeUrl?: string;
                    responseStreaming?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    syntax?: import("../../../protobuf/type").Syntax;
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                version?: string;
                sourceContext?: {
                    fileName?: string;
                };
                mixins?: {
                    name?: string;
                    root?: string;
                }[];
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            types?: {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[] & ({
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                } & {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[] & ({
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                    jsonName?: string;
                    defaultValue?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"][number], keyof import("../../../protobuf/type").Field>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["fields"], keyof {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[]>, never>;
                oneofs?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["oneofs"], keyof string[]>, never>;
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["options"][number]["value"], keyof Any>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                sourceContext?: {
                    fileName?: string;
                } & {
                    fileName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["types"][number]["sourceContext"], "fileName">, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["serviceConfig"]["types"][number], keyof import("../../../protobuf/type").Type>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["types"], keyof {
                name?: string;
                fields?: {
                    kind?: import("../../../protobuf/type").Field_Kind;
                    cardinality?: import("../../../protobuf/type").Field_Cardinality;
                    number?: number;
                    name?: string;
                    typeUrl?: string;
                    oneofIndex?: number;
                    packed?: boolean;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    jsonName?: string;
                    defaultValue?: string;
                }[];
                oneofs?: string[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            enums?: {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[] & ({
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            } & {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[] & ({
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                } & {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[] & ({
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"][number], keyof import("../../../protobuf/type").EnumValue>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["enumvalue"], keyof {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[]>, never>;
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[] & ({
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                } & {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["options"][number]["value"], keyof Any>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                sourceContext?: {
                    fileName?: string;
                } & {
                    fileName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["enums"][number]["sourceContext"], "fileName">, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["serviceConfig"]["enums"][number], keyof import("../../../protobuf/type").Enum>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["enums"], keyof {
                name?: string;
                enumvalue?: {
                    name?: string;
                    number?: number;
                    options?: {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }[];
                options?: {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                sourceContext?: {
                    fileName?: string;
                };
                syntax?: import("../../../protobuf/type").Syntax;
            }[]>, never>;
            documentation?: {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[];
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[];
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            } & {
                summary?: string;
                pages?: {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[] & ({
                    name?: string;
                    content?: string;
                    subpages?: any[];
                } & {
                    name?: string;
                    content?: string;
                    subpages?: {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[] & ({
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    } & {
                        name?: string;
                        content?: string;
                        subpages?: {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[] & ({
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["pages"], keyof {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[]>, never>;
                rules?: {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[] & ({
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                } & {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["documentation"]["rules"][number], keyof import("../../documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["documentation"]["rules"], keyof {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[]>, never>;
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["documentation"], keyof import("../../documentation").Documentation>, never>;
            backend?: {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[];
            } & {
                rules?: {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[] & ({
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                } & {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["backend"]["rules"][number], keyof import("../../backend").BackendRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["backend"]["rules"], keyof {
                    selector?: string;
                    address?: string;
                    deadline?: number;
                    minDeadline?: number;
                    operationDeadline?: number;
                    pathTranslation?: import("../../backend").BackendRule_PathTranslation;
                    jwtAudience?: string;
                    disableAuth?: boolean;
                    protocol?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["backend"], "rules">, never>;
            http?: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            } & {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[] & ({
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                } & {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    } & {
                        kind?: string;
                        path?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["custom"], keyof import("../../http").CustomHttpPattern>, never>;
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[] & ({
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    } & {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number]["custom"], keyof import("../../http").CustomHttpPattern>, never>;
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[] & ({
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("../../http").HttpRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"][number], keyof import("../../http").HttpRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number]["additionalBindings"], keyof {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"][number], keyof import("../../http").HttpRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["http"]["rules"], keyof {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[]>, never>;
                fullyDecodeReservedExpansion?: boolean;
            } & Record<Exclude<keyof I["serviceConfig"]["http"], keyof import("../../http").Http>, never>;
            quota?: {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[];
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[];
            } & {
                limits?: {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[] & ({
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                } & {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["quota"]["limits"][number]["values"], string | number>, never>;
                    displayName?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["quota"]["limits"][number], keyof import("../../quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["quota"]["limits"], keyof {
                    name?: string;
                    description?: string;
                    defaultLimit?: any;
                    maxLimit?: any;
                    freeTier?: any;
                    duration?: string;
                    metric?: string;
                    unit?: string;
                    values?: {
                        [x: string]: any;
                    };
                    displayName?: string;
                }[]>, never>;
                metricRules?: {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[] & ({
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                } & {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["serviceConfig"]["quota"]["metricRules"][number]["metricCosts"], string | number>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["quota"]["metricRules"][number], keyof import("../../quota").MetricRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["quota"]["metricRules"], keyof {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["quota"], keyof import("../../quota").Quota>, never>;
            authentication?: {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[];
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[];
            } & {
                rules?: {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[] & ({
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                } & {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    } & {
                        canonicalScopes?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number]["oauth"], "canonicalScopes">, never>;
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[] & ({
                        providerId?: string;
                        audiences?: string;
                    } & {
                        providerId?: string;
                        audiences?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number]["requirements"][number], keyof import("../../auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number]["requirements"], keyof {
                        providerId?: string;
                        audiences?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"][number], keyof import("../../auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["rules"], keyof {
                    selector?: string;
                    oauth?: {
                        canonicalScopes?: string;
                    };
                    allowWithoutCredential?: boolean;
                    requirements?: {
                        providerId?: string;
                        audiences?: string;
                    }[];
                }[]>, never>;
                providers?: {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[] & ({
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                } & {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[] & ({
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    } & {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"][number]["jwtLocations"][number], keyof import("../../auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"][number]["jwtLocations"], keyof {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"][number], keyof import("../../auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["authentication"]["providers"], keyof {
                    id?: string;
                    issuer?: string;
                    jwksUri?: string;
                    audiences?: string;
                    authorizationUrl?: string;
                    jwtLocations?: {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["authentication"], keyof import("../../auth").Authentication>, never>;
            context?: {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[];
            } & {
                rules?: {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[] & ({
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                } & {
                    selector?: string;
                    requested?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["requested"], keyof string[]>, never>;
                    provided?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["provided"], keyof string[]>, never>;
                    allowedRequestExtensions?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["allowedRequestExtensions"], keyof string[]>, never>;
                    allowedResponseExtensions?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number]["allowedResponseExtensions"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"][number], keyof import("../../context").ContextRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["context"]["rules"], keyof {
                    selector?: string;
                    requested?: string[];
                    provided?: string[];
                    allowedRequestExtensions?: string[];
                    allowedResponseExtensions?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["context"], "rules">, never>;
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            } & {
                requirements?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["usage"]["requirements"], keyof string[]>, never>;
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[] & ({
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                } & {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                } & Record<Exclude<keyof I["serviceConfig"]["usage"]["rules"][number], keyof import("../../usage").UsageRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["usage"]["rules"], keyof {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[]>, never>;
                producerNotificationChannel?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["usage"], keyof import("../../usage").Usage>, never>;
            endpoints?: {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[] & ({
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            } & {
                name?: string;
                aliases?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["endpoints"][number]["aliases"], keyof string[]>, never>;
                target?: string;
                allowCors?: boolean;
            } & Record<Exclude<keyof I["serviceConfig"]["endpoints"][number], keyof import("../../endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["endpoints"], keyof {
                name?: string;
                aliases?: string[];
                target?: string;
                allowCors?: boolean;
            }[]>, never>;
            control?: {
                environment?: string;
            } & {
                environment?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["control"], "environment">, never>;
            logs?: {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[] & ({
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            } & {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["logs"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logs"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                description?: string;
                displayName?: string;
            } & Record<Exclude<keyof I["serviceConfig"]["logs"][number], keyof import("../../log").LogDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logs"], keyof {
                name?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                description?: string;
                displayName?: string;
            }[]>, never>;
            metrics?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[] & ({
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            } & {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["metadata"], keyof import("../../metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["metrics"][number]["monitoredResourceTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["metrics"][number], keyof import("../../metric").MetricDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["metrics"], keyof {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../metric").MetricDescriptor_MetricKind;
                valueType?: import("../../metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            }[]>, never>;
            monitoredResources?: {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[] & ({
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            } & {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                launchStage?: import("../../launch_stage").LaunchStage;
            } & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"][number], keyof import("../../monitored_resource").MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoredResources"], keyof {
                name?: string;
                type?: string;
                displayName?: string;
                description?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                launchStage?: import("../../launch_stage").LaunchStage;
            }[]>, never>;
            billing?: {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            } & {
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[] & ({
                    monitoredResource?: string;
                    metrics?: string[];
                } & {
                    monitoredResource?: string;
                    metrics?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["billing"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["billing"]["consumerDestinations"][number], keyof import("../../billing").Billing_BillingDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["billing"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["billing"], "consumerDestinations">, never>;
            logging?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[];
            } & {
                producerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[] & ({
                    monitoredResource?: string;
                    logs?: string[];
                } & {
                    monitoredResource?: string;
                    logs?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["producerDestinations"][number]["logs"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["logging"]["producerDestinations"][number], keyof import("../../logging").Logging_LoggingDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["producerDestinations"], keyof {
                    monitoredResource?: string;
                    logs?: string[];
                }[]>, never>;
                consumerDestinations?: {
                    monitoredResource?: string;
                    logs?: string[];
                }[] & ({
                    monitoredResource?: string;
                    logs?: string[];
                } & {
                    monitoredResource?: string;
                    logs?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["consumerDestinations"][number]["logs"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["logging"]["consumerDestinations"][number], keyof import("../../logging").Logging_LoggingDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["logging"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    logs?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["logging"], keyof import("../../logging").Logging>, never>;
            monitoring?: {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[];
            } & {
                producerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[] & ({
                    monitoredResource?: string;
                    metrics?: string[];
                } & {
                    monitoredResource?: string;
                    metrics?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["producerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["producerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["producerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
                consumerDestinations?: {
                    monitoredResource?: string;
                    metrics?: string[];
                }[] & ({
                    monitoredResource?: string;
                    metrics?: string[];
                } & {
                    monitoredResource?: string;
                    metrics?: string[] & string[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["consumerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["monitoring"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["monitoring"], keyof import("../../monitoring").Monitoring>, never>;
            systemParameters?: {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[];
            } & {
                rules?: {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[] & ({
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                } & {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[] & ({
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    } & {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    } & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"][number]["parameters"][number], keyof import("../../system_parameter").SystemParameter>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"][number]["parameters"], keyof {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"][number], keyof import("../../system_parameter").SystemParameterRule>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["systemParameters"]["rules"], keyof {
                    selector?: string;
                    parameters?: {
                        name?: string;
                        httpHeader?: string;
                        urlQueryParameter?: string;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["systemParameters"], "rules">, never>;
            sourceInfo?: {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                sourceFiles?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["serviceConfig"]["sourceInfo"]["sourceFiles"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["serviceConfig"]["sourceInfo"]["sourceFiles"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["serviceConfig"]["sourceInfo"], "sourceFiles">, never>;
            configVersion?: {
                value?: number;
            } & {
                value?: number;
            } & Record<Exclude<keyof I["serviceConfig"]["configVersion"], "value">, never>;
        } & Record<Exclude<keyof I["serviceConfig"], keyof Service>, never>;
    } & Record<Exclude<keyof I, "serviceConfig">, never>>(object: I): SubmitConfigSourceResponse;
};
export declare const CreateServiceRolloutRequest: {
    encode(message: CreateServiceRolloutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRolloutRequest;
    fromJSON(object: any): CreateServiceRolloutRequest;
    toJSON(message: CreateServiceRolloutRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        rollout?: {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            };
            deleteServiceStrategy?: {};
            serviceName?: string;
        };
    } & {
        serviceName?: string;
        rollout?: {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            };
            deleteServiceStrategy?: {};
            serviceName?: string;
        } & {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            } & {
                percentages?: {
                    [x: string]: number;
                } & {
                    [x: string]: number;
                } & Record<Exclude<keyof I["rollout"]["trafficPercentStrategy"]["percentages"], string | number>, never>;
            } & Record<Exclude<keyof I["rollout"]["trafficPercentStrategy"], "percentages">, never>;
            deleteServiceStrategy?: {} & {} & Record<Exclude<keyof I["rollout"]["deleteServiceStrategy"], never>, never>;
            serviceName?: string;
        } & Record<Exclude<keyof I["rollout"], keyof Rollout>, never>;
    } & Record<Exclude<keyof I, keyof CreateServiceRolloutRequest>, never>>(object: I): CreateServiceRolloutRequest;
};
export declare const ListServiceRolloutsRequest: {
    encode(message: ListServiceRolloutsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsRequest;
    fromJSON(object: any): ListServiceRolloutsRequest;
    toJSON(message: ListServiceRolloutsRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        pageToken?: string;
        pageSize?: number;
        filter?: string;
    } & {
        serviceName?: string;
        pageToken?: string;
        pageSize?: number;
        filter?: string;
    } & Record<Exclude<keyof I, keyof ListServiceRolloutsRequest>, never>>(object: I): ListServiceRolloutsRequest;
};
export declare const ListServiceRolloutsResponse: {
    encode(message: ListServiceRolloutsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServiceRolloutsResponse;
    fromJSON(object: any): ListServiceRolloutsResponse;
    toJSON(message: ListServiceRolloutsResponse): unknown;
    fromPartial<I extends {
        rollouts?: {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            };
            deleteServiceStrategy?: {};
            serviceName?: string;
        }[];
        nextPageToken?: string;
    } & {
        rollouts?: {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            };
            deleteServiceStrategy?: {};
            serviceName?: string;
        }[] & ({
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            };
            deleteServiceStrategy?: {};
            serviceName?: string;
        } & {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["rollouts"][number]["trafficPercentStrategy"], "percentages">, never>;
            deleteServiceStrategy?: {} & {
                [x: string]: any;
            } & Record<Exclude<keyof I["rollouts"][number]["deleteServiceStrategy"], never>, never>;
            serviceName?: string;
        } & Record<Exclude<keyof I["rollouts"][number], keyof Rollout>, never>)[] & Record<Exclude<keyof I["rollouts"], keyof {
            rolloutId?: string;
            createTime?: Date;
            createdBy?: string;
            status?: import("./resources").Rollout_RolloutStatus;
            trafficPercentStrategy?: {
                percentages?: {
                    [x: string]: number;
                };
            };
            deleteServiceStrategy?: {};
            serviceName?: string;
        }[]>, never>;
        nextPageToken?: string;
    } & Record<Exclude<keyof I, keyof ListServiceRolloutsResponse>, never>>(object: I): ListServiceRolloutsResponse;
};
export declare const GetServiceRolloutRequest: {
    encode(message: GetServiceRolloutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRolloutRequest;
    fromJSON(object: any): GetServiceRolloutRequest;
    toJSON(message: GetServiceRolloutRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        rolloutId?: string;
    } & {
        serviceName?: string;
        rolloutId?: string;
    } & Record<Exclude<keyof I, keyof GetServiceRolloutRequest>, never>>(object: I): GetServiceRolloutRequest;
};
export declare const GenerateConfigReportRequest: {
    encode(message: GenerateConfigReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportRequest;
    fromJSON(object: any): GenerateConfigReportRequest;
    toJSON(message: GenerateConfigReportRequest): unknown;
    fromPartial<I extends {
        newConfig?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        oldConfig?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        newConfig?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["newConfig"], keyof Any>, never>;
        oldConfig?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["oldConfig"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof GenerateConfigReportRequest>, never>>(object: I): GenerateConfigReportRequest;
};
export declare const GenerateConfigReportResponse: {
    encode(message: GenerateConfigReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenerateConfigReportResponse;
    fromJSON(object: any): GenerateConfigReportResponse;
    toJSON(message: GenerateConfigReportResponse): unknown;
    fromPartial<I extends {
        serviceName?: string;
        id?: string;
        changeReports?: {
            configChanges?: {
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            }[];
        }[];
        diagnostics?: {
            location?: string;
            kind?: import("./resources").Diagnostic_Kind;
            message?: string;
        }[];
    } & {
        serviceName?: string;
        id?: string;
        changeReports?: {
            configChanges?: {
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            }[];
        }[] & ({
            configChanges?: {
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            }[];
        } & {
            configChanges?: {
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            }[] & ({
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["changeReports"][number]["configChanges"][number], keyof import("../../config_change").ConfigChange>, never>)[] & Record<Exclude<keyof I["changeReports"][number]["configChanges"], keyof {
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["changeReports"][number], "configChanges">, never>)[] & Record<Exclude<keyof I["changeReports"], keyof {
            configChanges?: {
                element?: string;
                oldValue?: string;
                newValue?: string;
                changeType?: import("../../config_change").ChangeType;
                advices?: {
                    description?: string;
                }[];
            }[];
        }[]>, never>;
        diagnostics?: {
            location?: string;
            kind?: import("./resources").Diagnostic_Kind;
            message?: string;
        }[] & ({
            location?: string;
            kind?: import("./resources").Diagnostic_Kind;
            message?: string;
        } & {
            location?: string;
            kind?: import("./resources").Diagnostic_Kind;
            message?: string;
        } & Record<Exclude<keyof I["diagnostics"][number], keyof Diagnostic>, never>)[] & Record<Exclude<keyof I["diagnostics"], keyof {
            location?: string;
            kind?: import("./resources").Diagnostic_Kind;
            message?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenerateConfigReportResponse>, never>>(object: I): GenerateConfigReportResponse;
};
