import { Api } from "../protobuf/api";
import { Type, Enum } from "../protobuf/type";
import { Documentation } from "./documentation";
import { Backend } from "./backend";
import { Http } from "./http";
import { Quota } from "./quota";
import { Authentication } from "./auth";
import { Context } from "./context";
import { Usage } from "./usage";
import { Endpoint } from "./endpoint";
import { Control } from "./control";
import { LogDescriptor } from "./log";
import { MetricDescriptor } from "./metric";
import { MonitoredResourceDescriptor } from "./monitored_resource";
import { Billing } from "./billing";
import { Logging } from "./logging";
import { Monitoring } from "./monitoring";
import { SystemParameters } from "./system_parameter";
import { SourceInfo } from "./source_info";
import { UInt32Value } from "../protobuf/wrappers";
import * as _m0 from "protobufjs/minimal";
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 *
 * Example:
 *
 * type: google.api.Service
 * name: calendar.googleapis.com
 * title: Google Calendar API
 * apis:
 * - name: google.calendar.v3.Calendar
 * authentication:
 * providers:
 * - id: google_calendar_auth
 * jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 * issuer: https://securetoken.google.com
 * rules:
 * - selector: "*"
 * requirements:
 * provider_id: google_calendar_auth
 */
export interface Service {
    /**
     * The service name, which is a DNS-like logical identifier for the
     * service, such as `calendar.googleapis.com`. The service name
     * typically goes through DNS verification to make sure the owner
     * of the service also owns the DNS name.
     */
    name: string;
    /** The product title for this service. */
    title: string;
    /** The Google project that owns this service. */
    producerProjectId: string;
    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. Must be no longer than 63 characters
     * and only lower case letters, digits, '.', '_' and '-' are allowed. If
     * empty, the server may choose to generate one instead.
     */
    id: string;
    /**
     * A list of API interfaces exported by this service. Only the `name` field
     * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
     * author, as the remaining fields will be derived from the IDL during the
     * normalization process. It is an error to specify an API interface here
     * which cannot be resolved against the associated IDL files.
     */
    apis: Api[];
    /**
     * A list of all proto message types included in this API service.
     * Types referenced directly or indirectly by the `apis` are
     * automatically included.  Messages which are not referenced but
     * shall be included, such as types used by the `google.protobuf.Any` type,
     * should be listed here by name. Example:
     *
     * types:
     * - name: google.protobuf.Int32
     */
    types: Type[];
    /**
     * A list of all enum types included in this API service.  Enums
     * referenced directly or indirectly by the `apis` are automatically
     * included.  Enums which are not referenced but shall be included
     * should be listed here by name. Example:
     *
     * enums:
     * - name: google.someapi.v1.SomeEnum
     */
    enums: Enum[];
    /** Additional API documentation. */
    documentation: Documentation;
    /** API backend configuration. */
    backend: Backend;
    /** HTTP configuration. */
    http: Http;
    /** Quota configuration. */
    quota: Quota;
    /** Auth configuration. */
    authentication: Authentication;
    /** Context configuration. */
    context: Context;
    /** Configuration controlling usage of this service. */
    usage: Usage;
    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint
     * with the same name as the service is automatically generated to service all
     * defined APIs.
     */
    endpoints: Endpoint[];
    /** Configuration for the service control plane. */
    control: Control;
    /** Defines the logs used by this service. */
    logs: LogDescriptor[];
    /** Defines the metrics used by this service. */
    metrics: MetricDescriptor[];
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     */
    monitoredResources: MonitoredResourceDescriptor[];
    /** Billing configuration. */
    billing: Billing;
    /** Logging configuration. */
    logging: Logging;
    /** Monitoring configuration. */
    monitoring: Monitoring;
    /** System parameter configuration. */
    systemParameters: SystemParameters;
    /** Output only. The source information for this configuration if available. */
    sourceInfo: SourceInfo;
    /**
     * Obsolete. Do not use.
     *
     * This field has no semantic meaning. The service config compiler always
     * sets this field to `3`.
     */
    /** @deprecated */
    configVersion: UInt32Value;
}
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
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
                syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
        }[];
        types?: {
            name?: string;
            fields?: {
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
            syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
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
                pathTranslation?: import("./backend").BackendRule_PathTranslation;
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
                valueType?: import("./label").LabelDescriptor_ValueType;
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
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            metricKind?: import("./metric").MetricDescriptor_MetricKind;
            valueType?: import("./metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("./launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            };
            launchStage?: import("./launch_stage").LaunchStage;
            monitoredResourceTypes?: string[];
        }[];
        monitoredResources?: {
            name?: string;
            type?: string;
            displayName?: string;
            description?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            launchStage?: import("./launch_stage").LaunchStage;
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
                syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
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
                syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
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
                syntax?: import("../protobuf/type").Syntax;
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
                syntax?: import("../protobuf/type").Syntax;
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
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["apis"][number]["methods"][number]["options"][number]["value"], keyof import("../protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I["apis"][number]["methods"][number]["options"][number], keyof import("../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["apis"][number]["methods"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                syntax?: import("../protobuf/type").Syntax;
            } & Record<Exclude<keyof I["apis"][number]["methods"][number], keyof import("../protobuf/api").Method>, never>)[] & Record<Exclude<keyof I["apis"][number]["methods"], keyof {
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
                syntax?: import("../protobuf/type").Syntax;
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
                } & Record<Exclude<keyof I["apis"][number]["options"][number]["value"], keyof import("../protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["apis"][number]["options"][number], keyof import("../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["apis"][number]["options"], keyof {
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
            } & Record<Exclude<keyof I["apis"][number]["sourceContext"], "fileName">, never>;
            mixins?: {
                name?: string;
                root?: string;
            }[] & ({
                name?: string;
                root?: string;
            } & {
                name?: string;
                root?: string;
            } & Record<Exclude<keyof I["apis"][number]["mixins"][number], keyof import("../protobuf/api").Mixin>, never>)[] & Record<Exclude<keyof I["apis"][number]["mixins"], keyof {
                name?: string;
                root?: string;
            }[]>, never>;
            syntax?: import("../protobuf/type").Syntax;
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
                syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
        }[]>, never>;
        types?: {
            name?: string;
            fields?: {
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
            syntax?: import("../protobuf/type").Syntax;
        }[] & ({
            name?: string;
            fields?: {
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
            syntax?: import("../protobuf/type").Syntax;
        } & {
            name?: string;
            fields?: {
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["types"][number]["fields"][number]["options"][number]["value"], keyof import("../protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I["types"][number]["fields"][number]["options"][number], keyof import("../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["types"][number]["fields"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
                jsonName?: string;
                defaultValue?: string;
            } & Record<Exclude<keyof I["types"][number]["fields"][number], keyof import("../protobuf/type").Field>, never>)[] & Record<Exclude<keyof I["types"][number]["fields"], keyof {
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
            oneofs?: string[] & string[] & Record<Exclude<keyof I["types"][number]["oneofs"], keyof string[]>, never>;
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
                } & Record<Exclude<keyof I["types"][number]["options"][number]["value"], keyof import("../protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["types"][number]["options"][number], keyof import("../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["types"][number]["options"], keyof {
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
            } & Record<Exclude<keyof I["types"][number]["sourceContext"], "fileName">, never>;
            syntax?: import("../protobuf/type").Syntax;
        } & Record<Exclude<keyof I["types"][number], keyof Type>, never>)[] & Record<Exclude<keyof I["types"], keyof {
            name?: string;
            fields?: {
                kind?: import("../protobuf/type").Field_Kind;
                cardinality?: import("../protobuf/type").Field_Cardinality;
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
            syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
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
            syntax?: import("../protobuf/type").Syntax;
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
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & {
                        typeUrl?: string;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I["enums"][number]["enumvalue"][number]["options"][number]["value"], keyof import("../protobuf/any").Any>, never>;
                } & Record<Exclude<keyof I["enums"][number]["enumvalue"][number]["options"][number], keyof import("../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["enums"][number]["enumvalue"][number]["options"], keyof {
                    name?: string;
                    value?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["enums"][number]["enumvalue"][number], keyof import("../protobuf/type").EnumValue>, never>)[] & Record<Exclude<keyof I["enums"][number]["enumvalue"], keyof {
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
                } & Record<Exclude<keyof I["enums"][number]["options"][number]["value"], keyof import("../protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["enums"][number]["options"][number], keyof import("../protobuf/type").Option>, never>)[] & Record<Exclude<keyof I["enums"][number]["options"], keyof {
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
            } & Record<Exclude<keyof I["enums"][number]["sourceContext"], "fileName">, never>;
            syntax?: import("../protobuf/type").Syntax;
        } & Record<Exclude<keyof I["enums"][number], keyof Enum>, never>)[] & Record<Exclude<keyof I["enums"], keyof {
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
            syntax?: import("../protobuf/type").Syntax;
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
                                                } & any & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                                    name?: string;
                                                    content?: string;
                                                    subpages?: any[];
                                                }[]>, never>;
                                            } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                                name?: string;
                                                content?: string;
                                                subpages?: any[];
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                            name?: string;
                                            content?: string;
                                            subpages?: any[];
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                        name?: string;
                                        content?: string;
                                        subpages?: any[];
                                    }[]>, never>;
                                } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                    name?: string;
                                    content?: string;
                                    subpages?: any[];
                                }[]>, never>;
                            } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                                name?: string;
                                content?: string;
                                subpages?: any[];
                            }[]>, never>;
                        } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number]["subpages"], keyof {
                            name?: string;
                            content?: string;
                            subpages?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number]["subpages"], keyof {
                        name?: string;
                        content?: string;
                        subpages?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"][number]["subpages"], keyof {
                    name?: string;
                    content?: string;
                    subpages?: any[];
                }[]>, never>;
            } & Record<Exclude<keyof I["documentation"]["pages"][number], keyof import("./documentation").Page>, never>)[] & Record<Exclude<keyof I["documentation"]["pages"], keyof {
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
            } & Record<Exclude<keyof I["documentation"]["rules"][number], keyof import("./documentation").DocumentationRule>, never>)[] & Record<Exclude<keyof I["documentation"]["rules"], keyof {
                selector?: string;
                description?: string;
                deprecationDescription?: string;
            }[]>, never>;
            documentationRootUrl?: string;
            serviceRootUrl?: string;
            overview?: string;
        } & Record<Exclude<keyof I["documentation"], keyof Documentation>, never>;
        backend?: {
            rules?: {
                selector?: string;
                address?: string;
                deadline?: number;
                minDeadline?: number;
                operationDeadline?: number;
                pathTranslation?: import("./backend").BackendRule_PathTranslation;
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
                pathTranslation?: import("./backend").BackendRule_PathTranslation;
                jwtAudience?: string;
                disableAuth?: boolean;
                protocol?: string;
            }[] & ({
                selector?: string;
                address?: string;
                deadline?: number;
                minDeadline?: number;
                operationDeadline?: number;
                pathTranslation?: import("./backend").BackendRule_PathTranslation;
                jwtAudience?: string;
                disableAuth?: boolean;
                protocol?: string;
            } & {
                selector?: string;
                address?: string;
                deadline?: number;
                minDeadline?: number;
                operationDeadline?: number;
                pathTranslation?: import("./backend").BackendRule_PathTranslation;
                jwtAudience?: string;
                disableAuth?: boolean;
                protocol?: string;
            } & Record<Exclude<keyof I["backend"]["rules"][number], keyof import("./backend").BackendRule>, never>)[] & Record<Exclude<keyof I["backend"]["rules"], keyof {
                selector?: string;
                address?: string;
                deadline?: number;
                minDeadline?: number;
                operationDeadline?: number;
                pathTranslation?: import("./backend").BackendRule_PathTranslation;
                jwtAudience?: string;
                disableAuth?: boolean;
                protocol?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["backend"], "rules">, never>;
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
                } & Record<Exclude<keyof I["http"]["rules"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                        kind?: string;
                        path?: string;
                    } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                            kind?: string;
                            path?: string;
                        } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                kind?: string;
                                path?: string;
                            } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                    kind?: string;
                                    path?: string;
                                } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                        kind?: string;
                                        path?: string;
                                    } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                            kind?: string;
                                            path?: string;
                                        } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                                kind?: string;
                                                path?: string;
                                            } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                                } & any & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof import("./http").CustomHttpPattern>, never>;
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
                                                } & any & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                                            } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                                        } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                                    } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                                } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                            } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                        } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                    } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number]["additionalBindings"], keyof {
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
                } & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"][number]["additionalBindings"], keyof {
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
            } & Record<Exclude<keyof I["http"]["rules"][number], keyof import("./http").HttpRule>, never>)[] & Record<Exclude<keyof I["http"]["rules"], keyof {
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
        } & Record<Exclude<keyof I["http"], keyof Http>, never>;
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
            } & Record<Exclude<keyof I["quota"]["limits"][number], keyof import("./quota").QuotaLimit>, never>)[] & Record<Exclude<keyof I["quota"]["limits"], keyof {
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
            } & Record<Exclude<keyof I["quota"]["metricRules"][number], keyof import("./quota").MetricRule>, never>)[] & Record<Exclude<keyof I["quota"]["metricRules"], keyof {
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
                } & Record<Exclude<keyof I["authentication"]["rules"][number]["requirements"][number], keyof import("./auth").AuthRequirement>, never>)[] & Record<Exclude<keyof I["authentication"]["rules"][number]["requirements"], keyof {
                    providerId?: string;
                    audiences?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["authentication"]["rules"][number], keyof import("./auth").AuthenticationRule>, never>)[] & Record<Exclude<keyof I["authentication"]["rules"], keyof {
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
                } & Record<Exclude<keyof I["authentication"]["providers"][number]["jwtLocations"][number], keyof import("./auth").JwtLocation>, never>)[] & Record<Exclude<keyof I["authentication"]["providers"][number]["jwtLocations"], keyof {
                    header?: string;
                    query?: string;
                    valuePrefix?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["authentication"]["providers"][number], keyof import("./auth").AuthProvider>, never>)[] & Record<Exclude<keyof I["authentication"]["providers"], keyof {
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
                requested?: string[] & string[] & Record<Exclude<keyof I["context"]["rules"][number]["requested"], keyof string[]>, never>;
                provided?: string[] & string[] & Record<Exclude<keyof I["context"]["rules"][number]["provided"], keyof string[]>, never>;
                allowedRequestExtensions?: string[] & string[] & Record<Exclude<keyof I["context"]["rules"][number]["allowedRequestExtensions"], keyof string[]>, never>;
                allowedResponseExtensions?: string[] & string[] & Record<Exclude<keyof I["context"]["rules"][number]["allowedResponseExtensions"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["context"]["rules"][number], keyof import("./context").ContextRule>, never>)[] & Record<Exclude<keyof I["context"]["rules"], keyof {
                selector?: string;
                requested?: string[];
                provided?: string[];
                allowedRequestExtensions?: string[];
                allowedResponseExtensions?: string[];
            }[]>, never>;
        } & Record<Exclude<keyof I["context"], "rules">, never>;
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
            } & Record<Exclude<keyof I["usage"]["rules"][number], keyof import("./usage").UsageRule>, never>)[] & Record<Exclude<keyof I["usage"]["rules"], keyof {
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
        control?: {
            environment?: string;
        } & {
            environment?: string;
        } & Record<Exclude<keyof I["control"], "environment">, never>;
        logs?: {
            name?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            description?: string;
            displayName?: string;
        }[] & ({
            name?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            description?: string;
            displayName?: string;
        } & {
            name?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[] & ({
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            } & {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            } & Record<Exclude<keyof I["logs"][number]["labels"][number], keyof import("./label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["logs"][number]["labels"], keyof {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[]>, never>;
            description?: string;
            displayName?: string;
        } & Record<Exclude<keyof I["logs"][number], keyof LogDescriptor>, never>)[] & Record<Exclude<keyof I["logs"], keyof {
            name?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
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
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            metricKind?: import("./metric").MetricDescriptor_MetricKind;
            valueType?: import("./metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("./launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            };
            launchStage?: import("./launch_stage").LaunchStage;
            monitoredResourceTypes?: string[];
        }[] & ({
            name?: string;
            type?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            metricKind?: import("./metric").MetricDescriptor_MetricKind;
            valueType?: import("./metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("./launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            };
            launchStage?: import("./launch_stage").LaunchStage;
            monitoredResourceTypes?: string[];
        } & {
            name?: string;
            type?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[] & ({
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            } & {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            } & Record<Exclude<keyof I["metrics"][number]["labels"][number], keyof import("./label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["metrics"][number]["labels"], keyof {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[]>, never>;
            metricKind?: import("./metric").MetricDescriptor_MetricKind;
            valueType?: import("./metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("./launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            } & {
                launchStage?: import("./launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            } & Record<Exclude<keyof I["metrics"][number]["metadata"], keyof import("./metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
            launchStage?: import("./launch_stage").LaunchStage;
            monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["metrics"][number]["monitoredResourceTypes"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["metrics"][number], keyof MetricDescriptor>, never>)[] & Record<Exclude<keyof I["metrics"], keyof {
            name?: string;
            type?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            metricKind?: import("./metric").MetricDescriptor_MetricKind;
            valueType?: import("./metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("./launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            };
            launchStage?: import("./launch_stage").LaunchStage;
            monitoredResourceTypes?: string[];
        }[]>, never>;
        monitoredResources?: {
            name?: string;
            type?: string;
            displayName?: string;
            description?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            launchStage?: import("./launch_stage").LaunchStage;
        }[] & ({
            name?: string;
            type?: string;
            displayName?: string;
            description?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            launchStage?: import("./launch_stage").LaunchStage;
        } & {
            name?: string;
            type?: string;
            displayName?: string;
            description?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[] & ({
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            } & {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            } & Record<Exclude<keyof I["monitoredResources"][number]["labels"][number], keyof import("./label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["monitoredResources"][number]["labels"], keyof {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[]>, never>;
            launchStage?: import("./launch_stage").LaunchStage;
        } & Record<Exclude<keyof I["monitoredResources"][number], keyof MonitoredResourceDescriptor>, never>)[] & Record<Exclude<keyof I["monitoredResources"], keyof {
            name?: string;
            type?: string;
            displayName?: string;
            description?: string;
            labels?: {
                key?: string;
                valueType?: import("./label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            launchStage?: import("./launch_stage").LaunchStage;
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
                metrics?: string[] & string[] & Record<Exclude<keyof I["billing"]["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["billing"]["consumerDestinations"][number], keyof import("./billing").Billing_BillingDestination>, never>)[] & Record<Exclude<keyof I["billing"]["consumerDestinations"], keyof {
                monitoredResource?: string;
                metrics?: string[];
            }[]>, never>;
        } & Record<Exclude<keyof I["billing"], "consumerDestinations">, never>;
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
                logs?: string[] & string[] & Record<Exclude<keyof I["logging"]["producerDestinations"][number]["logs"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["logging"]["producerDestinations"][number], keyof import("./logging").Logging_LoggingDestination>, never>)[] & Record<Exclude<keyof I["logging"]["producerDestinations"], keyof {
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
                logs?: string[] & string[] & Record<Exclude<keyof I["logging"]["consumerDestinations"][number]["logs"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["logging"]["consumerDestinations"][number], keyof import("./logging").Logging_LoggingDestination>, never>)[] & Record<Exclude<keyof I["logging"]["consumerDestinations"], keyof {
                monitoredResource?: string;
                logs?: string[];
            }[]>, never>;
        } & Record<Exclude<keyof I["logging"], keyof Logging>, never>;
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
            } & Record<Exclude<keyof I["monitoring"]["producerDestinations"][number], keyof import("./monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["monitoring"]["producerDestinations"], keyof {
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
            } & Record<Exclude<keyof I["monitoring"]["consumerDestinations"][number], keyof import("./monitoring").Monitoring_MonitoringDestination>, never>)[] & Record<Exclude<keyof I["monitoring"]["consumerDestinations"], keyof {
                monitoredResource?: string;
                metrics?: string[];
            }[]>, never>;
        } & Record<Exclude<keyof I["monitoring"], keyof Monitoring>, never>;
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
                } & Record<Exclude<keyof I["systemParameters"]["rules"][number]["parameters"][number], keyof import("./system_parameter").SystemParameter>, never>)[] & Record<Exclude<keyof I["systemParameters"]["rules"][number]["parameters"], keyof {
                    name?: string;
                    httpHeader?: string;
                    urlQueryParameter?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["systemParameters"]["rules"][number], keyof import("./system_parameter").SystemParameterRule>, never>)[] & Record<Exclude<keyof I["systemParameters"]["rules"], keyof {
                selector?: string;
                parameters?: {
                    name?: string;
                    httpHeader?: string;
                    urlQueryParameter?: string;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["systemParameters"], "rules">, never>;
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
            } & Record<Exclude<keyof I["sourceInfo"]["sourceFiles"][number], keyof import("../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["sourceInfo"]["sourceFiles"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["sourceInfo"], "sourceFiles">, never>;
        configVersion?: {
            value?: number;
        } & {
            value?: number;
        } & Record<Exclude<keyof I["configVersion"], "value">, never>;
    } & Record<Exclude<keyof I, keyof Service>, never>>(object: I): Service;
};
