import { Api } from "../../../protobuf/api";
import { Documentation } from "../../documentation";
import { Quota } from "../../quota";
import { Authentication } from "../../auth";
import { Usage } from "../../usage";
import { Endpoint } from "../../endpoint";
import { MonitoredResourceDescriptor } from "../../monitored_resource";
import { Monitoring } from "../../monitoring";
import * as _m0 from "protobufjs/minimal";
/** Whether or not a service has been enabled for use by a consumer. */
export declare enum State {
    /**
     * STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
     * is unspecified or not meaningful. Currently, all consumers other than
     * projects (such as folders and organizations) are always in this state.
     */
    STATE_UNSPECIFIED = 0,
    /**
     * DISABLED - The service cannot be used by this consumer. It has either been explicitly
     * disabled, or has never been enabled.
     */
    DISABLED = 1,
    /** ENABLED - The service has been explicitly enabled for use by this consumer. */
    ENABLED = 2,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/** A service that is available for use by the consumer. */
export interface Service {
    /**
     * The resource name of the consumer and service.
     *
     * A valid name would be:
     * - projects/123/services/serviceusage.googleapis.com
     */
    name: string;
    /**
     * The resource name of the consumer.
     *
     * A valid name would be:
     * - projects/123
     */
    parent: string;
    /**
     * The service configuration of the available service.
     * Some fields may be filtered out of the configuration in responses to
     * the `ListServices` method. These fields are present only in responses to
     * the `GetService` method.
     */
    config: ServiceConfig;
    /** Whether or not the service has been enabled for use by the consumer. */
    state: State;
}
/** The configuration of the service. */
export interface ServiceConfig {
    /**
     * The DNS address at which this service is available.
     *
     * An example DNS address would be:
     * `calendar.googleapis.com`.
     */
    name: string;
    /** The product title for this service. */
    title: string;
    /**
     * A list of API interfaces exported by this service. Contains only the names,
     * versions, and method names of the interfaces.
     */
    apis: Api[];
    /**
     * Additional API documentation. Contains only the summary and the
     * documentation URL.
     */
    documentation: Documentation;
    /** Quota configuration. */
    quota: Quota;
    /** Auth configuration. Contains only the OAuth rules. */
    authentication: Authentication;
    /** Configuration controlling usage of this service. */
    usage: Usage;
    /**
     * Configuration for network endpoints. Contains only the names and aliases
     * of the endpoints.
     */
    endpoints: Endpoint[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /**
     * Monitoring configuration.
     * This should not include the 'producer_destinations' field.
     */
    monitoring: Monitoring;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
    /**
     * The full name of the resources that this operation is directly
     * associated with.
     */
    resourceNames: string[];
}
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
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
        state?: State;
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
                    } & Record<Exclude<keyof I["config"]["apis"][number]["methods"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["config"]["apis"][number]["methods"][number]["options"], keyof {
                        name?: string;
                        value?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[]>, never>;
                    syntax?: import("../../../protobuf/type").Syntax;
                } & Record<Exclude<keyof I["config"]["apis"][number]["methods"][number], keyof import("../../../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["config"]["apis"][number]["methods"], keyof {
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
                    } & Record<Exclude<keyof I["config"]["apis"][number]["options"][number]["value"], keyof import("../../../protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I["config"]["apis"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["config"]["apis"][number]["options"], keyof {
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
                } & Record<Exclude<keyof I["config"]["apis"][number]["sourceContext"], "fileName">, never>;
                mixins?: {
                    name?: string;
                    root?: string;
                }[] & ({
                    name?: string;
                    root?: string;
                } & {
                    name?: string;
                    root?: string;
                } & Record<Exclude<keyof I["config"]["apis"][number]["mixins"][number], keyof import("../../../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["config"]["apis"][number]["mixins"], keyof {
                    name?: string;
                    root?: string;
                }[]>, never>;
                syntax?: import("../../../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["config"]["apis"][number], keyof Api>, never>)[] & Record<Exclude<keyof I["config"]["apis"], keyof {
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
                        } & Record<Exclude<keyof I["config"]["documentation"]["pages"][number]["subpages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["config"]["documentation"]["pages"][number]["subpages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["config"]["documentation"]["pages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["config"]["documentation"]["pages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["config"]["documentation"]["pages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["config"]["documentation"]["pages"], keyof {
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
                } & Record<Exclude<keyof I["config"]["documentation"]["rules"][number], keyof import("../../documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["config"]["documentation"]["rules"], keyof {
                    selector?: string;
                    description?: string;
                    deprecationDescription?: string;
                }[]>, never>;
                documentationRootUrl?: string;
                serviceRootUrl?: string;
                overview?: string;
            } & Record<Exclude<keyof I["config"]["documentation"], keyof Documentation>, never>;
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
                    } & Record<Exclude<keyof I["config"]["quota"]["limits"][number]["values"], string | number>, never>;
                    displayName?: string;
                } & Record<Exclude<keyof I["config"]["quota"]["limits"][number], keyof import("../../quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["config"]["quota"]["limits"], keyof {
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
                    } & Record<Exclude<keyof I["config"]["quota"]["metricRules"][number]["metricCosts"], string | number>, never>;
                } & Record<Exclude<keyof I["config"]["quota"]["metricRules"][number], keyof import("../../quota").MetricRule>, never>)[] & Record<Exclude<keyof I["config"]["quota"]["metricRules"], keyof {
                    selector?: string;
                    metricCosts?: {
                        [x: string]: any;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["config"]["quota"], keyof Quota>, never>;
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
                    } & Record<Exclude<keyof I["config"]["authentication"]["rules"][number]["oauth"], "canonicalScopes">, never>;
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
                    } & Record<Exclude<keyof I["config"]["authentication"]["rules"][number]["requirements"][number], keyof import("../../auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["config"]["authentication"]["rules"][number]["requirements"], keyof {
                        providerId?: string;
                        audiences?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["config"]["authentication"]["rules"][number], keyof import("../../auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["config"]["authentication"]["rules"], keyof {
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
                    } & Record<Exclude<keyof I["config"]["authentication"]["providers"][number]["jwtLocations"][number], keyof import("../../auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["config"]["authentication"]["providers"][number]["jwtLocations"], keyof {
                        header?: string;
                        query?: string;
                        valuePrefix?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I["config"]["authentication"]["providers"][number], keyof import("../../auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["config"]["authentication"]["providers"], keyof {
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
            } & Record<Exclude<keyof I["config"]["authentication"], keyof Authentication>, never>;
            usage?: {
                requirements?: string[];
                rules?: {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[];
                producerNotificationChannel?: string;
            } & {
                requirements?: string[] & string[] & Record<Exclude<keyof I["config"]["usage"]["requirements"], keyof string[]>, never>;
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
                } & Record<Exclude<keyof I["config"]["usage"]["rules"][number], keyof import("../../usage").UsageRule>, never>)[] & Record<Exclude<keyof I["config"]["usage"]["rules"], keyof {
                    selector?: string;
                    allowUnregisteredCalls?: boolean;
                    skipServiceControl?: boolean;
                }[]>, never>;
                producerNotificationChannel?: string;
            } & Record<Exclude<keyof I["config"]["usage"], keyof Usage>, never>;
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
                aliases?: string[] & string[] & Record<Exclude<keyof I["config"]["endpoints"][number]["aliases"], keyof string[]>, never>;
                target?: string;
                allowCors?: boolean;
            } & Record<Exclude<keyof I["config"]["endpoints"][number], keyof Endpoint>, never>)[] & Record<Exclude<keyof I["config"]["endpoints"], keyof {
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
                } & Record<Exclude<keyof I["config"]["monitoredResources"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["config"]["monitoredResources"][number]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                launchStage?: import("../../launch_stage").LaunchStage;
            } & Record<Exclude<keyof I["config"]["monitoredResources"][number], keyof MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["config"]["monitoredResources"], keyof {
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
                    metrics?: string[] & string[] & Record<Exclude<keyof I["config"]["monitoring"]["producerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["config"]["monitoring"]["producerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["config"]["monitoring"]["producerDestinations"], keyof {
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
                    metrics?: string[] & string[] & Record<Exclude<keyof I["config"]["monitoring"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["config"]["monitoring"]["consumerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["config"]["monitoring"]["consumerDestinations"], keyof {
                    monitoredResource?: string;
                    metrics?: string[];
                }[]>, never>;
            } & Record<Exclude<keyof I["config"]["monitoring"], keyof Monitoring>, never>;
        } & Record<Exclude<keyof I["config"], keyof ServiceConfig>, never>;
        state?: State;
    } & Record<Exclude<keyof I, keyof Service>, never>>(object: I): Service;
};
export declare const ServiceConfig: {
    encode(message: ServiceConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceConfig;
    fromJSON(object: any): ServiceConfig;
    toJSON(message: ServiceConfig): unknown;
    fromPartial<I extends {
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
                [x: string]: any;
            } & Record<Exclude<keyof I["apis"][number]["methods"][number], keyof import("../../../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["apis"][number]["methods"], keyof {
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
                [x: string]: any;
            } & Record<Exclude<keyof I["apis"][number]["options"][number], keyof import("../../../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["apis"][number]["options"], keyof {
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
                [x: string]: any;
            } & Record<Exclude<keyof I["apis"][number]["sourceContext"], "fileName">, never>;
            mixins?: {
                name?: string;
                root?: string;
            }[] & ({
                name?: string;
                root?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["apis"][number]["mixins"][number], keyof import("../../../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["apis"][number]["mixins"], keyof {
                name?: string;
                root?: string;
            }[]>, never>;
            syntax?: import("../../../protobuf/type").Syntax;
        } & Record<Exclude<keyof I["apis"][number], keyof Api>, never>)[] & Record<Exclude<keyof I["apis"], keyof {
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
                    } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"], keyof {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[]>, never>;
            } & Record<Exclude<keyof I["documentation"]["pages"][number], keyof import("../../documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"], keyof {
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
            } & Record<Exclude<keyof I["documentation"]["rules"][number], keyof import("../../documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["documentation"]["rules"], keyof {
                selector?: string;
                description?: string;
                deprecationDescription?: string;
            }[]>, never>;
            documentationRootUrl?: string;
            serviceRootUrl?: string;
            overview?: string;
        } & Record<Exclude<keyof I["documentation"], keyof Documentation>, never>;
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
                } & Record<Exclude<keyof I["quota"]["limits"][number]["values"], string | number>, never>;
                displayName?: string;
            } & Record<Exclude<keyof I["quota"]["limits"][number], keyof import("../../quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["quota"]["limits"], keyof {
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
                } & Record<Exclude<keyof I["quota"]["metricRules"][number]["metricCosts"], string | number>, never>;
            } & Record<Exclude<keyof I["quota"]["metricRules"][number], keyof import("../../quota").MetricRule>, never>)[] & Record<Exclude<keyof I["quota"]["metricRules"], keyof {
                selector?: string;
                metricCosts?: {
                    [x: string]: any;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["quota"], keyof Quota>, never>;
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
                } & Record<Exclude<keyof I["authentication"]["rules"][number]["oauth"], "canonicalScopes">, never>;
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
                } & Record<Exclude<keyof I["authentication"]["rules"][number]["requirements"][number], keyof import("../../auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["authentication"]["rules"][number]["requirements"], keyof {
                    providerId?: string;
                    audiences?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["authentication"]["rules"][number], keyof import("../../auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["authentication"]["rules"], keyof {
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
                } & Record<Exclude<keyof I["authentication"]["providers"][number]["jwtLocations"][number], keyof import("../../auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["authentication"]["providers"][number]["jwtLocations"], keyof {
                    header?: string;
                    query?: string;
                    valuePrefix?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["authentication"]["providers"][number], keyof import("../../auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["authentication"]["providers"], keyof {
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
        } & Record<Exclude<keyof I["authentication"], keyof Authentication>, never>;
        usage?: {
            requirements?: string[];
            rules?: {
                selector?: string;
                allowUnregisteredCalls?: boolean;
                skipServiceControl?: boolean;
            }[];
            producerNotificationChannel?: string;
        } & {
            requirements?: string[] & string[] & Record<Exclude<keyof I["usage"]["requirements"], keyof string[]>, never>;
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
            } & Record<Exclude<keyof I["usage"]["rules"][number], keyof import("../../usage").UsageRule>, never>)[] & Record<Exclude<keyof I["usage"]["rules"], keyof {
                selector?: string;
                allowUnregisteredCalls?: boolean;
                skipServiceControl?: boolean;
            }[]>, never>;
            producerNotificationChannel?: string;
        } & Record<Exclude<keyof I["usage"], keyof Usage>, never>;
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
            aliases?: string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["aliases"], keyof string[]>, never>;
            target?: string;
            allowCors?: boolean;
        } & Record<Exclude<keyof I["endpoints"][number], keyof Endpoint>, never>)[] & Record<Exclude<keyof I["endpoints"], keyof {
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
                [x: string]: any;
            } & Record<Exclude<keyof I["monitoredResources"][number]["labels"][number], keyof import("../../label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["monitoredResources"][number]["labels"], keyof {
                key?: string;
                valueType?: import("../../label").LabelDescriptor_ValueType;
                description?: string;
            }[]>, never>;
            launchStage?: import("../../launch_stage").LaunchStage;
        } & Record<Exclude<keyof I["monitoredResources"][number], keyof MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["monitoredResources"], keyof {
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
                metrics?: string[] & string[] & Record<Exclude<keyof I["monitoring"]["producerDestinations"][number]["metrics"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["monitoring"]["producerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["monitoring"]["producerDestinations"], keyof {
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
                metrics?: string[] & string[] & Record<Exclude<keyof I["monitoring"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["monitoring"]["consumerDestinations"][number], keyof import("../../monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["monitoring"]["consumerDestinations"], keyof {
                monitoredResource?: string;
                metrics?: string[];
            }[]>, never>;
        } & Record<Exclude<keyof I["monitoring"], keyof Monitoring>, never>;
    } & Record<Exclude<keyof I, keyof ServiceConfig>, never>>(object: I): ServiceConfig;
};
export declare const OperationMetadata: {
    encode(message: OperationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata;
    fromJSON(object: any): OperationMetadata;
    toJSON(message: OperationMetadata): unknown;
    fromPartial<I extends {
        resourceNames?: string[];
    } & {
        resourceNames?: string[] & string[] & Record<Exclude<keyof I["resourceNames"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "resourceNames">, never>>(object: I): OperationMetadata;
};
