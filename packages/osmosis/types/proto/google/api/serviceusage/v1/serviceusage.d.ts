import { Service } from "./resources";
import * as _m0 from "protobufjs/minimal";
/**
 * Enum to determine if service usage should be checked when disabling a
 * service.
 */
export declare enum DisableServiceRequest_CheckIfServiceHasUsage {
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
    UNRECOGNIZED = -1
}
export declare function disableServiceRequest_CheckIfServiceHasUsageFromJSON(object: any): DisableServiceRequest_CheckIfServiceHasUsage;
export declare function disableServiceRequest_CheckIfServiceHasUsageToJSON(object: DisableServiceRequest_CheckIfServiceHasUsage): string;
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
export declare const EnableServiceRequest: {
    encode(message: EnableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceRequest;
    fromJSON(object: any): EnableServiceRequest;
    toJSON(message: EnableServiceRequest): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): EnableServiceRequest;
};
export declare const EnableServiceResponse: {
    encode(message: EnableServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableServiceResponse;
    fromJSON(object: any): EnableServiceResponse;
    toJSON(message: EnableServiceResponse): unknown;
    fromPartial<I extends {
        service?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        };
    } & {
        service?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        } & {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            } & {
                name?: string;
                title?: string;
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
                        } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"][number]["options"], keyof {
                            name?: string;
                            value?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        syntax?: import("../../../protobuf/type").Syntax;
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"][number], keyof import("../../../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"], keyof {
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["options"][number]["value"], keyof import("../../../protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["options"], keyof {
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
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["sourceContext"], "fileName">, never>;
                    mixins?: {
                        name?: string;
                        root?: string;
                    }[] & ({
                        name?: string;
                        root?: string;
                    } & {
                        name?: string;
                        root?: string;
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["mixins"][number], keyof import("../../../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["mixins"], keyof {
                        name?: string;
                        root?: string;
                    }[]>, never>;
                    syntax?: import("../../../protobuf/type").Syntax;
                } & Record<Exclude<keyof I["service"]["config"]["apis"][number], keyof import("../../../protobuf/api").Api>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"], keyof {
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"], keyof {
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
                    } & Record<Exclude<keyof I["service"]["config"]["documentation"]["rules"][number], keyof import("../../documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["documentation"]["rules"], keyof {
                        selector?: string;
                        description?: string;
                        deprecationDescription?: string;
                    }[]>, never>;
                    documentationRootUrl?: string;
                    serviceRootUrl?: string;
                    overview?: string;
                } & Record<Exclude<keyof I["service"]["config"]["documentation"], keyof import("../../documentation").Documentation>, never>;
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
                        } & Record<Exclude<keyof I["service"]["config"]["quota"]["limits"][number]["values"], string | number>, never>;
                        displayName?: string;
                    } & Record<Exclude<keyof I["service"]["config"]["quota"]["limits"][number], keyof import("../../quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["service"]["config"]["quota"]["limits"], keyof {
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
                        } & Record<Exclude<keyof I["service"]["config"]["quota"]["metricRules"][number]["metricCosts"], string | number>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["quota"]["metricRules"][number], keyof import("../../quota").MetricRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["quota"]["metricRules"], keyof {
                        selector?: string;
                        metricCosts?: {
                            [x: string]: any;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I["service"]["config"]["quota"], keyof import("../../quota").Quota>, never>;
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number]["oauth"], "canonicalScopes">, never>;
                        allowWithoutCredential?: boolean;
                        requirements?: {
                            providerId?: string;
                            audiences?: string;
                        }[] & ({
                            providerId?: string;
                            audiences?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number]["requirements"][number], keyof import("../../auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number]["requirements"], keyof {
                            providerId?: string;
                            audiences?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number], keyof import("../../auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"], keyof {
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"][number]["jwtLocations"][number], keyof import("../../auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"][number]["jwtLocations"], keyof {
                            header?: string;
                            query?: string;
                            valuePrefix?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"][number], keyof import("../../auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"], keyof {
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
                } & Record<Exclude<keyof I["service"]["config"]["authentication"], keyof import("../../auth").Authentication>, never>;
                usage?: {
                    requirements?: string[];
                    rules?: {
                        selector?: string;
                        allowUnregisteredCalls?: boolean;
                        skipServiceControl?: boolean;
                    }[];
                    producerNotificationChannel?: string;
                } & {
                    requirements?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["usage"]["requirements"], keyof string[]>, never>;
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
                    } & Record<Exclude<keyof I["service"]["config"]["usage"]["rules"][number], keyof import("../../usage").UsageRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["usage"]["rules"], keyof {
                        selector?: string;
                        allowUnregisteredCalls?: boolean;
                        skipServiceControl?: boolean;
                    }[]>, never>;
                    producerNotificationChannel?: string;
                } & Record<Exclude<keyof I["service"]["config"]["usage"], keyof import("../../usage").Usage>, never>;
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
                    aliases?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["endpoints"][number]["aliases"], keyof string[]>, never>;
                    target?: string;
                    allowCors?: boolean;
                } & Record<Exclude<keyof I["service"]["config"]["endpoints"][number], keyof import("../../endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["service"]["config"]["endpoints"], keyof {
                    name?: string;
                    aliases?: string[];
                    target?: string;
                    allowCors?: boolean;
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
                    } & Record<Exclude<keyof I["service"]["config"]["monitoredResources"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoredResources"][number]["labels"], keyof {
                        key?: string;
                        valueType?: import("../../label").LabelDescriptor_ValueType;
                        description?: string;
                    }[]>, never>;
                    launchStage?: import("../../launch_stage").LaunchStage;
                } & Record<Exclude<keyof I["service"]["config"]["monitoredResources"][number], keyof import("../../monitored_resource").MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoredResources"], keyof {
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
                        metrics?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["producerDestinations"][number]["metrics"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["monitoring"]["producerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["producerDestinations"], keyof {
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
                        metrics?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["monitoring"]["consumerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["consumerDestinations"], keyof {
                        monitoredResource?: string;
                        metrics?: string[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["service"]["config"]["monitoring"], keyof import("../../monitoring").Monitoring>, never>;
            } & Record<Exclude<keyof I["service"]["config"], keyof import("./resources").ServiceConfig>, never>;
            state?: import("./resources").State;
        } & Record<Exclude<keyof I["service"], keyof Service>, never>;
    } & Record<Exclude<keyof I, "service">, never>>(object: I): EnableServiceResponse;
};
export declare const DisableServiceRequest: {
    encode(message: DisableServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceRequest;
    fromJSON(object: any): DisableServiceRequest;
    toJSON(message: DisableServiceRequest): unknown;
    fromPartial<I extends {
        name?: string;
        disableDependentServices?: boolean;
        checkIfServiceHasUsage?: DisableServiceRequest_CheckIfServiceHasUsage;
    } & {
        name?: string;
        disableDependentServices?: boolean;
        checkIfServiceHasUsage?: DisableServiceRequest_CheckIfServiceHasUsage;
    } & Record<Exclude<keyof I, keyof DisableServiceRequest>, never>>(object: I): DisableServiceRequest;
};
export declare const DisableServiceResponse: {
    encode(message: DisableServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableServiceResponse;
    fromJSON(object: any): DisableServiceResponse;
    toJSON(message: DisableServiceResponse): unknown;
    fromPartial<I extends {
        service?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        };
    } & {
        service?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        } & {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            } & {
                name?: string;
                title?: string;
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
                        } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"][number]["options"], keyof {
                            name?: string;
                            value?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        syntax?: import("../../../protobuf/type").Syntax;
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"][number], keyof import("../../../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["methods"], keyof {
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["options"][number]["value"], keyof import("../../../protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["options"], keyof {
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
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["sourceContext"], "fileName">, never>;
                    mixins?: {
                        name?: string;
                        root?: string;
                    }[] & ({
                        name?: string;
                        root?: string;
                    } & {
                        name?: string;
                        root?: string;
                    } & Record<Exclude<keyof I["service"]["config"]["apis"][number]["mixins"][number], keyof import("../../../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"][number]["mixins"], keyof {
                        name?: string;
                        root?: string;
                    }[]>, never>;
                    syntax?: import("../../../protobuf/type").Syntax;
                } & Record<Exclude<keyof I["service"]["config"]["apis"][number], keyof import("../../../protobuf/api").Api>, never>)[] & Record<Exclude<keyof I["service"]["config"]["apis"], keyof {
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["service"]["config"]["documentation"]["pages"], keyof {
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
                    } & Record<Exclude<keyof I["service"]["config"]["documentation"]["rules"][number], keyof import("../../documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["documentation"]["rules"], keyof {
                        selector?: string;
                        description?: string;
                        deprecationDescription?: string;
                    }[]>, never>;
                    documentationRootUrl?: string;
                    serviceRootUrl?: string;
                    overview?: string;
                } & Record<Exclude<keyof I["service"]["config"]["documentation"], keyof import("../../documentation").Documentation>, never>;
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
                        } & Record<Exclude<keyof I["service"]["config"]["quota"]["limits"][number]["values"], string | number>, never>;
                        displayName?: string;
                    } & Record<Exclude<keyof I["service"]["config"]["quota"]["limits"][number], keyof import("../../quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["service"]["config"]["quota"]["limits"], keyof {
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
                        } & Record<Exclude<keyof I["service"]["config"]["quota"]["metricRules"][number]["metricCosts"], string | number>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["quota"]["metricRules"][number], keyof import("../../quota").MetricRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["quota"]["metricRules"], keyof {
                        selector?: string;
                        metricCosts?: {
                            [x: string]: any;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I["service"]["config"]["quota"], keyof import("../../quota").Quota>, never>;
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number]["oauth"], "canonicalScopes">, never>;
                        allowWithoutCredential?: boolean;
                        requirements?: {
                            providerId?: string;
                            audiences?: string;
                        }[] & ({
                            providerId?: string;
                            audiences?: string;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number]["requirements"][number], keyof import("../../auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number]["requirements"], keyof {
                            providerId?: string;
                            audiences?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"][number], keyof import("../../auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["rules"], keyof {
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
                            [x: string]: any;
                        } & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"][number]["jwtLocations"][number], keyof import("../../auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"][number]["jwtLocations"], keyof {
                            header?: string;
                            query?: string;
                            valuePrefix?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"][number], keyof import("../../auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["service"]["config"]["authentication"]["providers"], keyof {
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
                } & Record<Exclude<keyof I["service"]["config"]["authentication"], keyof import("../../auth").Authentication>, never>;
                usage?: {
                    requirements?: string[];
                    rules?: {
                        selector?: string;
                        allowUnregisteredCalls?: boolean;
                        skipServiceControl?: boolean;
                    }[];
                    producerNotificationChannel?: string;
                } & {
                    requirements?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["usage"]["requirements"], keyof string[]>, never>;
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
                    } & Record<Exclude<keyof I["service"]["config"]["usage"]["rules"][number], keyof import("../../usage").UsageRule>, never>)[] & Record<Exclude<keyof I["service"]["config"]["usage"]["rules"], keyof {
                        selector?: string;
                        allowUnregisteredCalls?: boolean;
                        skipServiceControl?: boolean;
                    }[]>, never>;
                    producerNotificationChannel?: string;
                } & Record<Exclude<keyof I["service"]["config"]["usage"], keyof import("../../usage").Usage>, never>;
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
                    aliases?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["endpoints"][number]["aliases"], keyof string[]>, never>;
                    target?: string;
                    allowCors?: boolean;
                } & Record<Exclude<keyof I["service"]["config"]["endpoints"][number], keyof import("../../endpoint").Endpoint>, never>)[] & Record<Exclude<keyof I["service"]["config"]["endpoints"], keyof {
                    name?: string;
                    aliases?: string[];
                    target?: string;
                    allowCors?: boolean;
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
                    } & Record<Exclude<keyof I["service"]["config"]["monitoredResources"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoredResources"][number]["labels"], keyof {
                        key?: string;
                        valueType?: import("../../label").LabelDescriptor_ValueType;
                        description?: string;
                    }[]>, never>;
                    launchStage?: import("../../launch_stage").LaunchStage;
                } & Record<Exclude<keyof I["service"]["config"]["monitoredResources"][number], keyof import("../../monitored_resource").MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoredResources"], keyof {
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
                        metrics?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["producerDestinations"][number]["metrics"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["monitoring"]["producerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["producerDestinations"], keyof {
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
                        metrics?: string[] & string[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I["service"]["config"]["monitoring"]["consumerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["service"]["config"]["monitoring"]["consumerDestinations"], keyof {
                        monitoredResource?: string;
                        metrics?: string[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["service"]["config"]["monitoring"], keyof import("../../monitoring").Monitoring>, never>;
            } & Record<Exclude<keyof I["service"]["config"], keyof import("./resources").ServiceConfig>, never>;
            state?: import("./resources").State;
        } & Record<Exclude<keyof I["service"], keyof Service>, never>;
    } & Record<Exclude<keyof I, "service">, never>>(object: I): DisableServiceResponse;
};
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): GetServiceRequest;
};
export declare const ListServicesRequest: {
    encode(message: ListServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest;
    fromJSON(object: any): ListServicesRequest;
    toJSON(message: ListServicesRequest): unknown;
    fromPartial<I extends {
        parent?: string;
        pageSize?: number;
        pageToken?: string;
        filter?: string;
    } & {
        parent?: string;
        pageSize?: number;
        pageToken?: string;
        filter?: string;
    } & Record<Exclude<keyof I, keyof ListServicesRequest>, never>>(object: I): ListServicesRequest;
};
export declare const ListServicesResponse: {
    encode(message: ListServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesResponse;
    fromJSON(object: any): ListServicesResponse;
    toJSON(message: ListServicesResponse): unknown;
    fromPartial<I extends {
        services?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[];
        nextPageToken?: string;
    } & {
        services?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[] & ({
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        } & {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["services"][number]["config"], keyof import("./resources").ServiceConfig>, never>;
            state?: import("./resources").State;
        } & Record<Exclude<keyof I["services"][number], keyof Service>, never>)[] & Record<Exclude<keyof I["services"], keyof {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[]>, never>;
        nextPageToken?: string;
    } & Record<Exclude<keyof I, keyof ListServicesResponse>, never>>(object: I): ListServicesResponse;
};
export declare const BatchEnableServicesRequest: {
    encode(message: BatchEnableServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesRequest;
    fromJSON(object: any): BatchEnableServicesRequest;
    toJSON(message: BatchEnableServicesRequest): unknown;
    fromPartial<I extends {
        parent?: string;
        serviceIds?: string[];
    } & {
        parent?: string;
        serviceIds?: string[] & string[] & Record<Exclude<keyof I["serviceIds"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof BatchEnableServicesRequest>, never>>(object: I): BatchEnableServicesRequest;
};
export declare const BatchEnableServicesResponse: {
    encode(message: BatchEnableServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse;
    fromJSON(object: any): BatchEnableServicesResponse;
    toJSON(message: BatchEnableServicesResponse): unknown;
    fromPartial<I extends {
        services?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[];
        failures?: {
            serviceId?: string;
            errorMessage?: string;
        }[];
    } & {
        services?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[] & ({
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        } & {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["services"][number]["config"], keyof import("./resources").ServiceConfig>, never>;
            state?: import("./resources").State;
        } & Record<Exclude<keyof I["services"][number], keyof Service>, never>)[] & Record<Exclude<keyof I["services"], keyof {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[]>, never>;
        failures?: {
            serviceId?: string;
            errorMessage?: string;
        }[] & ({
            serviceId?: string;
            errorMessage?: string;
        } & {
            serviceId?: string;
            errorMessage?: string;
        } & Record<Exclude<keyof I["failures"][number], keyof BatchEnableServicesResponse_EnableFailure>, never>)[] & Record<Exclude<keyof I["failures"], keyof {
            serviceId?: string;
            errorMessage?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof BatchEnableServicesResponse>, never>>(object: I): BatchEnableServicesResponse;
};
export declare const BatchEnableServicesResponse_EnableFailure: {
    encode(message: BatchEnableServicesResponse_EnableFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchEnableServicesResponse_EnableFailure;
    fromJSON(object: any): BatchEnableServicesResponse_EnableFailure;
    toJSON(message: BatchEnableServicesResponse_EnableFailure): unknown;
    fromPartial<I extends {
        serviceId?: string;
        errorMessage?: string;
    } & {
        serviceId?: string;
        errorMessage?: string;
    } & Record<Exclude<keyof I, keyof BatchEnableServicesResponse_EnableFailure>, never>>(object: I): BatchEnableServicesResponse_EnableFailure;
};
export declare const BatchGetServicesRequest: {
    encode(message: BatchGetServicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesRequest;
    fromJSON(object: any): BatchGetServicesRequest;
    toJSON(message: BatchGetServicesRequest): unknown;
    fromPartial<I extends {
        parent?: string;
        names?: string[];
    } & {
        parent?: string;
        names?: string[] & string[] & Record<Exclude<keyof I["names"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof BatchGetServicesRequest>, never>>(object: I): BatchGetServicesRequest;
};
export declare const BatchGetServicesResponse: {
    encode(message: BatchGetServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchGetServicesResponse;
    fromJSON(object: any): BatchGetServicesResponse;
    toJSON(message: BatchGetServicesResponse): unknown;
    fromPartial<I extends {
        services?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[];
    } & {
        services?: {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[] & ({
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        } & {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["services"][number]["config"], keyof import("./resources").ServiceConfig>, never>;
            state?: import("./resources").State;
        } & Record<Exclude<keyof I["services"][number], keyof Service>, never>)[] & Record<Exclude<keyof I["services"], keyof {
            name?: string;
            parent?: string;
            config?: {
                name?: string;
                title?: string;
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
            };
            state?: import("./resources").State;
        }[]>, never>;
    } & Record<Exclude<keyof I, "services">, never>>(object: I): BatchGetServicesResponse;
};
