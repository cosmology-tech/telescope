import { Api } from "../../../protobuf/api";
import { Documentation } from "../../documentation";
import { Quota } from "../../quota";
import { Authentication } from "../../auth";
import { Usage } from "../../usage";
import { Endpoint } from "../../endpoint";
import { MonitoredResourceDescriptor } from "../../monitored_resource";
import { Monitoring } from "../../monitoring";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
/**
 * Selected view of quota. Can be used to request more detailed quota
 * information when retrieving quota metrics and limits.
 */
export declare enum QuotaView {
    /**
     * QUOTA_VIEW_UNSPECIFIED - No quota view specified. Requests that do not specify a quota view will
     * typically default to the BASIC view.
     */
    QUOTA_VIEW_UNSPECIFIED = 0,
    /** BASIC - Only buckets with overrides are shown in the response. */
    BASIC = 1,
    /**
     * FULL - Include per-location buckets even if they do not have overrides.
     * When the view is FULL, and a limit has regional or zonal quota, the limit
     * will include buckets for all regions or zones that could support
     * overrides, even if none are currently present. In some cases this will
     * cause the response to become very large; callers that do not need this
     * extra information should use the BASIC view instead.
     */
    FULL = 2,
    UNRECOGNIZED = -1
}
export declare function quotaViewFromJSON(object: any): QuotaView;
export declare function quotaViewToJSON(object: QuotaView): string;
/** Enumerations of quota safety checks. */
export declare enum QuotaSafetyCheck {
    /** QUOTA_SAFETY_CHECK_UNSPECIFIED - Unspecified quota safety check. */
    QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
    /**
     * LIMIT_DECREASE_BELOW_USAGE - Validates that a quota mutation would not cause the consumer's effective
     * limit to be lower than the consumer's quota usage.
     */
    LIMIT_DECREASE_BELOW_USAGE = 1,
    /**
     * LIMIT_DECREASE_PERCENTAGE_TOO_HIGH - Validates that a quota mutation would not cause the consumer's effective
     * limit to decrease by more than 10 percent.
     */
    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = 2,
    UNRECOGNIZED = -1
}
export declare function quotaSafetyCheckFromJSON(object: any): QuotaSafetyCheck;
export declare function quotaSafetyCheckToJSON(object: QuotaSafetyCheck): string;
/** A service that is available for use by the consumer. */
export interface Service {
    /**
     * The resource name of the consumer and service.
     *
     * A valid name would be:
     * - `projects/123/services/serviceusage.googleapis.com`
     */
    name: string;
    /**
     * The resource name of the consumer.
     *
     * A valid name would be:
     * - `projects/123`
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
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetric {
    /**
     * The resource name of the quota settings on this metric for this consumer.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
     *
     * The resource name is intended to be opaque and should not be parsed for
     * its component strings, since its representation could change in the future.
     */
    name: string;
    /**
     * The name of the metric.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The display name of the metric.
     *
     * An example name would be:
     * `CPUs`
     */
    displayName: string;
    /** The consumer quota for each quota limit defined on the metric. */
    consumerQuotaLimits: ConsumerQuotaLimit[];
    /**
     * The quota limits targeting the descendant containers of the
     * consumer in request.
     *
     * If the consumer in request is of type `organizations`
     * or `folders`, the field will list per-project limits in the metric; if the
     * consumer in request is of type `project`, the field will be empty.
     *
     * The `quota_buckets` field of each descendant consumer quota limit will not
     * be populated.
     */
    descendantConsumerQuotaLimits: ConsumerQuotaLimit[];
    /** The units in which the metric value is reported. */
    unit: string;
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimit {
    /**
     * The resource name of the quota limit.
     *
     * An example name would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     *
     * The resource name is intended to be opaque and should not be parsed for
     * its component strings, since its representation could change in the future.
     */
    name: string;
    /**
     * The name of the parent metric of this limit.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The limit unit.
     *
     * An example unit would be
     * `1/{project}/{region}`
     * Note that `{project}` and `{region}` are not placeholders in this example;
     * the literal characters `{` and `}` occur in the string.
     */
    unit: string;
    /** Whether this limit is precise or imprecise. */
    isPrecise: boolean;
    /** Whether admin overrides are allowed on this limit */
    allowsAdminOverrides: boolean;
    /**
     * Summary of the enforced quota buckets, organized by quota dimension,
     * ordered from least specific to most specific (for example, the global
     * default bucket, with no quota dimensions, will always appear first).
     */
    quotaBuckets: QuotaBucket[];
}
export interface QuotaBucket_DimensionsEntry {
    key: string;
    value: string;
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucket {
    /**
     * The effective limit of this quota bucket. Equal to default_limit if there
     * are no overrides.
     */
    effectiveLimit: Long;
    /**
     * The default limit of this quota bucket, as specified by the service
     * configuration.
     */
    defaultLimit: Long;
    /** Producer override on this quota bucket. */
    producerOverride: QuotaOverride;
    /** Consumer override on this quota bucket. */
    consumerOverride: QuotaOverride;
    /** Admin override on this quota bucket. */
    adminOverride: QuotaOverride;
    /**
     * The dimensions of this quota bucket.
     *
     * If this map is empty, this is the global bucket, which is the default quota
     * value applied to all requests that do not have a more specific override.
     *
     * If this map is nonempty, the default limit, effective limit, and quota
     * overrides apply only to requests that have the dimensions given in the map.
     *
     * For example, if the map has key `region` and value `us-east-1`, then the
     * specified effective limit is only effective in that region, and the
     * specified overrides apply only in that region.
     */
    dimensions: {
        [key: string]: string;
    };
}
export interface QuotaOverride_DimensionsEntry {
    key: string;
    value: string;
}
/** A quota override */
export interface QuotaOverride {
    /**
     * The resource name of the override.
     * This name is generated by the server when the override is created.
     *
     * Example names would be:
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     *
     * The resource name is intended to be opaque and should not be parsed for
     * its component strings, since its representation could change in the future.
     */
    name: string;
    /**
     * The overriding quota limit value.
     * Can be any nonnegative integer, or -1 (unlimited quota).
     */
    overrideValue: Long;
    /**
     * If this map is nonempty, then this override applies only to specific values
     * for dimensions defined in the limit unit.
     *
     * For example, an override on a limit with the unit `1/{project}/{region}`
     * could contain an entry with the key `region` and the value `us-east-1`;
     * the override is only applied to quota consumed in that region.
     *
     * This map has the following restrictions:
     *
     * *   Keys that are not defined in the limit's unit are not valid keys.
     * Any string appearing in `{brackets}` in the unit (besides `{project}`
     * or
     * `{user}`) is a defined key.
     * *   `project` is not a valid key; the project is already specified in
     * the parent resource name.
     * *   `user` is not a valid key; the API does not support quota overrides
     * that apply only to a specific user.
     * *   If `region` appears as a key, its value must be a valid Cloud region.
     * *   If `zone` appears as a key, its value must be a valid Cloud zone.
     * *   If any valid key other than `region` or `zone` appears in the map, then
     * all valid keys other than `region` or `zone` must also appear in the
     * map.
     */
    dimensions: {
        [key: string]: string;
    };
    /**
     * The name of the metric to which this override applies.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The limit unit of the limit to which this override applies.
     *
     * An example unit would be:
     * `1/{project}/{region}`
     * Note that `{project}` and `{region}` are not placeholders in this example;
     * the literal characters `{` and `}` occur in the string.
     */
    unit: string;
    /**
     * The resource name of the ancestor that requested the override. For example:
     * `organizations/12345` or `folders/67890`.
     * Used by admin overrides only.
     */
    adminOverrideAncestor: string;
}
/** Import data embedded in the request message */
export interface OverrideInlineSource {
    /**
     * The overrides to create.
     * Each override must have a value for 'metric' and 'unit', to specify
     * which metric and which limit the override should be applied to.
     * The 'name' field of the override does not need to be set; it is ignored.
     */
    overrides: QuotaOverride[];
}
export interface AdminQuotaPolicy_DimensionsEntry {
    key: string;
    value: string;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicy {
    /**
     * The resource name of the policy.
     * This name is generated by the server when the policy is created.
     *
     * Example names would be:
     * `organizations/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminQuotaPolicies/4a3f2c1d`
     */
    name: string;
    /**
     * The quota policy value.
     * Can be any nonnegative integer, or -1 (unlimited quota).
     */
    policyValue: Long;
    /**
     * If this map is nonempty, then this policy applies only to specific values
     * for dimensions defined in the limit unit.
     *
     * For example, an policy on a limit with the unit `1/{project}/{region}`
     * could contain an entry with the key `region` and the value `us-east-1`;
     * the policy is only applied to quota consumed in that region.
     *
     * This map has the following restrictions:
     *
     * *   If `region` appears as a key, its value must be a valid Cloud region.
     * *   If `zone` appears as a key, its value must be a valid Cloud zone.
     * *   Keys other than `region` or `zone` are not valid.
     */
    dimensions: {
        [key: string]: string;
    };
    /**
     * The name of the metric to which this policy applies.
     *
     * An example name would be:
     * `compute.googleapis.com/cpus`
     */
    metric: string;
    /**
     * The limit unit of the limit to which this policy applies.
     *
     * An example unit would be:
     * `1/{project}/{region}`
     * Note that `{project}` and `{region}` are not placeholders in this example;
     * the literal characters `{` and `}` occur in the string.
     */
    unit: string;
    /**
     * The cloud resource container at which the quota policy is created. The
     * format is `{container_type}/{container_number}`
     */
    container: string;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentity {
    /**
     * The email address of the service account that a service producer would use
     * to access consumer resources.
     */
    email: string;
    /**
     * The unique and stable id of the service account.
     * https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
     */
    uniqueId: string;
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
export declare const ConsumerQuotaMetric: {
    encode(message: ConsumerQuotaMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerQuotaMetric;
    fromJSON(object: any): ConsumerQuotaMetric;
    toJSON(message: ConsumerQuotaMetric): unknown;
    fromPartial<I extends {
        name?: string;
        metric?: string;
        displayName?: string;
        consumerQuotaLimits?: {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        }[];
        descendantConsumerQuotaLimits?: {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        }[];
        unit?: string;
    } & {
        name?: string;
        metric?: string;
        displayName?: string;
        consumerQuotaLimits?: {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        }[] & ({
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        } & {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[] & ({
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["consumerQuotaLimits"][number]["quotaBuckets"][number], keyof QuotaBucket>, never>)[] & Record<Exclude<keyof I["consumerQuotaLimits"][number]["quotaBuckets"], keyof {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["consumerQuotaLimits"][number], keyof ConsumerQuotaLimit>, never>)[] & Record<Exclude<keyof I["consumerQuotaLimits"], keyof {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        }[]>, never>;
        descendantConsumerQuotaLimits?: {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        }[] & ({
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        } & {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[] & ({
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["descendantConsumerQuotaLimits"][number]["quotaBuckets"][number], keyof QuotaBucket>, never>)[] & Record<Exclude<keyof I["descendantConsumerQuotaLimits"][number]["quotaBuckets"], keyof {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["descendantConsumerQuotaLimits"][number], keyof ConsumerQuotaLimit>, never>)[] & Record<Exclude<keyof I["descendantConsumerQuotaLimits"], keyof {
            name?: string;
            metric?: string;
            unit?: string;
            isPrecise?: boolean;
            allowsAdminOverrides?: boolean;
            quotaBuckets?: {
                effectiveLimit?: any;
                defaultLimit?: any;
                producerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                consumerOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                adminOverride?: {
                    name?: string;
                    overrideValue?: any;
                    dimensions?: {
                        [x: string]: string;
                    };
                    metric?: string;
                    unit?: string;
                    adminOverrideAncestor?: string;
                };
                dimensions?: {
                    [x: string]: string;
                };
            }[];
        }[]>, never>;
        unit?: string;
    } & Record<Exclude<keyof I, keyof ConsumerQuotaMetric>, never>>(object: I): ConsumerQuotaMetric;
};
export declare const ConsumerQuotaLimit: {
    encode(message: ConsumerQuotaLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerQuotaLimit;
    fromJSON(object: any): ConsumerQuotaLimit;
    toJSON(message: ConsumerQuotaLimit): unknown;
    fromPartial<I extends {
        name?: string;
        metric?: string;
        unit?: string;
        isPrecise?: boolean;
        allowsAdminOverrides?: boolean;
        quotaBuckets?: {
            effectiveLimit?: any;
            defaultLimit?: any;
            producerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            consumerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            adminOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            dimensions?: {
                [x: string]: string;
            };
        }[];
    } & {
        name?: string;
        metric?: string;
        unit?: string;
        isPrecise?: boolean;
        allowsAdminOverrides?: boolean;
        quotaBuckets?: {
            effectiveLimit?: any;
            defaultLimit?: any;
            producerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            consumerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            adminOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            dimensions?: {
                [x: string]: string;
            };
        }[] & ({
            effectiveLimit?: any;
            defaultLimit?: any;
            producerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            consumerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            adminOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            dimensions?: {
                [x: string]: string;
            };
        } & {
            effectiveLimit?: any;
            defaultLimit?: any;
            producerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["quotaBuckets"][number]["producerOverride"], keyof QuotaOverride>, never>;
            consumerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["quotaBuckets"][number]["consumerOverride"], keyof QuotaOverride>, never>;
            adminOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["quotaBuckets"][number]["adminOverride"], keyof QuotaOverride>, never>;
            dimensions?: {
                [x: string]: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["quotaBuckets"][number]["dimensions"], string | number>, never>;
        } & Record<Exclude<keyof I["quotaBuckets"][number], keyof QuotaBucket>, never>)[] & Record<Exclude<keyof I["quotaBuckets"], keyof {
            effectiveLimit?: any;
            defaultLimit?: any;
            producerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            consumerOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            adminOverride?: {
                name?: string;
                overrideValue?: any;
                dimensions?: {
                    [x: string]: string;
                };
                metric?: string;
                unit?: string;
                adminOverrideAncestor?: string;
            };
            dimensions?: {
                [x: string]: string;
            };
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ConsumerQuotaLimit>, never>>(object: I): ConsumerQuotaLimit;
};
export declare const QuotaBucket_DimensionsEntry: {
    encode(message: QuotaBucket_DimensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaBucket_DimensionsEntry;
    fromJSON(object: any): QuotaBucket_DimensionsEntry;
    toJSON(message: QuotaBucket_DimensionsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof QuotaBucket_DimensionsEntry>, never>>(object: I): QuotaBucket_DimensionsEntry;
};
export declare const QuotaBucket: {
    encode(message: QuotaBucket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaBucket;
    fromJSON(object: any): QuotaBucket;
    toJSON(message: QuotaBucket): unknown;
    fromPartial<I extends {
        effectiveLimit?: any;
        defaultLimit?: any;
        producerOverride?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        };
        consumerOverride?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        };
        adminOverride?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        };
        dimensions?: {
            [x: string]: string;
        };
    } & {
        effectiveLimit?: any;
        defaultLimit?: any;
        producerOverride?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["producerOverride"]["dimensions"], string | number>, never>;
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & Record<Exclude<keyof I["producerOverride"], keyof QuotaOverride>, never>;
        consumerOverride?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["consumerOverride"]["dimensions"], string | number>, never>;
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & Record<Exclude<keyof I["consumerOverride"], keyof QuotaOverride>, never>;
        adminOverride?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["adminOverride"]["dimensions"], string | number>, never>;
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & Record<Exclude<keyof I["adminOverride"], keyof QuotaOverride>, never>;
        dimensions?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["dimensions"], string | number>, never>;
    } & Record<Exclude<keyof I, keyof QuotaBucket>, never>>(object: I): QuotaBucket;
};
export declare const QuotaOverride_DimensionsEntry: {
    encode(message: QuotaOverride_DimensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOverride_DimensionsEntry;
    fromJSON(object: any): QuotaOverride_DimensionsEntry;
    toJSON(message: QuotaOverride_DimensionsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof QuotaOverride_DimensionsEntry>, never>>(object: I): QuotaOverride_DimensionsEntry;
};
export declare const QuotaOverride: {
    encode(message: QuotaOverride, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOverride;
    fromJSON(object: any): QuotaOverride;
    toJSON(message: QuotaOverride): unknown;
    fromPartial<I extends {
        name?: string;
        overrideValue?: any;
        dimensions?: {
            [x: string]: string;
        };
        metric?: string;
        unit?: string;
        adminOverrideAncestor?: string;
    } & {
        name?: string;
        overrideValue?: any;
        dimensions?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["dimensions"], string | number>, never>;
        metric?: string;
        unit?: string;
        adminOverrideAncestor?: string;
    } & Record<Exclude<keyof I, keyof QuotaOverride>, never>>(object: I): QuotaOverride;
};
export declare const OverrideInlineSource: {
    encode(message: OverrideInlineSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OverrideInlineSource;
    fromJSON(object: any): OverrideInlineSource;
    toJSON(message: OverrideInlineSource): unknown;
    fromPartial<I extends {
        overrides?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        }[];
    } & {
        overrides?: {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        }[] & ({
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["overrides"][number]["dimensions"], string | number>, never>;
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        } & Record<Exclude<keyof I["overrides"][number], keyof QuotaOverride>, never>)[] & Record<Exclude<keyof I["overrides"], keyof {
            name?: string;
            overrideValue?: any;
            dimensions?: {
                [x: string]: string;
            };
            metric?: string;
            unit?: string;
            adminOverrideAncestor?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "overrides">, never>>(object: I): OverrideInlineSource;
};
export declare const AdminQuotaPolicy_DimensionsEntry: {
    encode(message: AdminQuotaPolicy_DimensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdminQuotaPolicy_DimensionsEntry;
    fromJSON(object: any): AdminQuotaPolicy_DimensionsEntry;
    toJSON(message: AdminQuotaPolicy_DimensionsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof AdminQuotaPolicy_DimensionsEntry>, never>>(object: I): AdminQuotaPolicy_DimensionsEntry;
};
export declare const AdminQuotaPolicy: {
    encode(message: AdminQuotaPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdminQuotaPolicy;
    fromJSON(object: any): AdminQuotaPolicy;
    toJSON(message: AdminQuotaPolicy): unknown;
    fromPartial<I extends {
        name?: string;
        policyValue?: any;
        dimensions?: {
            [x: string]: string;
        };
        metric?: string;
        unit?: string;
        container?: string;
    } & {
        name?: string;
        policyValue?: any;
        dimensions?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["dimensions"], string | number>, never>;
        metric?: string;
        unit?: string;
        container?: string;
    } & Record<Exclude<keyof I, keyof AdminQuotaPolicy>, never>>(object: I): AdminQuotaPolicy;
};
export declare const ServiceIdentity: {
    encode(message: ServiceIdentity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceIdentity;
    fromJSON(object: any): ServiceIdentity;
    toJSON(message: ServiceIdentity): unknown;
    fromPartial<I extends {
        email?: string;
        uniqueId?: string;
    } & {
        email?: string;
        uniqueId?: string;
    } & Record<Exclude<keyof I, keyof ServiceIdentity>, never>>(object: I): ServiceIdentity;
};
