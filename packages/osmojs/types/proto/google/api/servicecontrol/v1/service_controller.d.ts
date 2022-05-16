import { Operation } from "./operation";
import { CheckError } from "./check_error";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * The type of the consumer as defined in
 * [Google Resource Manager](https://cloud.google.com/resource-manager/).
 */
export declare enum CheckResponse_ConsumerInfo_ConsumerType {
    /** CONSUMER_TYPE_UNSPECIFIED - This is never used. */
    CONSUMER_TYPE_UNSPECIFIED = 0,
    /** PROJECT - The consumer is a Google Cloud Project. */
    PROJECT = 1,
    /** FOLDER - The consumer is a Google Cloud Folder. */
    FOLDER = 2,
    /** ORGANIZATION - The consumer is a Google Cloud Organization. */
    ORGANIZATION = 3,
    /**
     * SERVICE_SPECIFIC - Service-specific resource container which is defined by the service
     * producer to offer their users the ability to manage service control
     * functionalities at a finer level of granularity than the PROJECT.
     */
    SERVICE_SPECIFIC = 4,
    UNRECOGNIZED = -1
}
export declare function checkResponse_ConsumerInfo_ConsumerTypeFromJSON(object: any): CheckResponse_ConsumerInfo_ConsumerType;
export declare function checkResponse_ConsumerInfo_ConsumerTypeToJSON(object: CheckResponse_ConsumerInfo_ConsumerType): string;
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
    /** The operation to be checked. */
    operation: Operation;
    /**
     * Specifies which version of service configuration should be used to process
     * the request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     */
    serviceConfigId: string;
}
/** Response message for the Check method. */
export interface CheckResponse {
    /**
     * The same operation_id value used in the
     * [CheckRequest][google.api.servicecontrol.v1.CheckRequest]. Used for logging
     * and diagnostics purposes.
     */
    operationId: string;
    /**
     * Indicate the decision of the check.
     *
     * If no check errors are present, the service should process the operation.
     * Otherwise the service should use the list of errors to determine the
     * appropriate action.
     */
    checkErrors: CheckError[];
    /** The actual config id used to process the request. */
    serviceConfigId: string;
    /** The current service rollout id used to process the request. */
    serviceRolloutId: string;
    /** Feedback data returned from the server during processing a Check request. */
    checkInfo: CheckResponse_CheckInfo;
}
/** Contains additional information about the check operation. */
export interface CheckResponse_CheckInfo {
    /**
     * A list of fields and label keys that are ignored by the server.
     * The client doesn't need to send them for following requests to improve
     * performance and allow better aggregation.
     */
    unusedArguments: string[];
    /** Consumer info of this check. */
    consumerInfo: CheckResponse_ConsumerInfo;
}
/** `ConsumerInfo` provides information about the consumer. */
export interface CheckResponse_ConsumerInfo {
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates
     * no project number is found.
     *
     * NOTE: This field is deprecated after we support flexible consumer
     * id. New code should not depend on this field anymore.
     */
    projectNumber: Long;
    /**
     * The type of the consumer which should have been defined in
     * [Google Resource Manager](https://cloud.google.com/resource-manager/).
     */
    type: CheckResponse_ConsumerInfo_ConsumerType;
    /**
     * The consumer identity number, can be Google cloud project number, folder
     * number or organization number e.g. 1234567890. A value of 0 indicates no
     * consumer number is found.
     */
    consumerNumber: Long;
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
     * Operations to be reported.
     *
     * Typically the service should report one operation per request.
     * Putting multiple operations into a single request is allowed, but should
     * be used only when multiple operations are natually available at the time
     * of the report.
     *
     * There is no limit on the number of operations in the same ReportRequest,
     * however the ReportRequest size should be no larger than 1MB. See
     * [ReportResponse.report_errors][google.api.servicecontrol.v1.ReportResponse.report_errors]
     * for partial failure behavior.
     */
    operations: Operation[];
    /**
     * Specifies which version of service config should be used to process the
     * request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     */
    serviceConfigId: string;
}
/** Response message for the Report method. */
export interface ReportResponse {
    /**
     * Partial failures, one for each `Operation` in the request that failed
     * processing. There are three possible combinations of the RPC status:
     *
     * 1. The combination of a successful RPC status and an empty `report_errors`
     * list indicates a complete success where all `Operations` in the
     * request are processed successfully.
     * 2. The combination of a successful RPC status and a non-empty
     * `report_errors` list indicates a partial success where some
     * `Operations` in the request succeeded. Each
     * `Operation` that failed processing has a corresponding item
     * in this list.
     * 3. A failed RPC status indicates a general non-deterministic failure.
     * When this happens, it's impossible to know which of the
     * 'Operations' in the request succeeded or failed.
     */
    reportErrors: ReportResponse_ReportError[];
    /** The actual config id used to process the request. */
    serviceConfigId: string;
    /** The current service rollout id used to process the request. */
    serviceRolloutId: string;
}
/**
 * Represents the processing error of one
 * [Operation][google.api.servicecontrol.v1.Operation] in the request.
 */
export interface ReportResponse_ReportError {
    /**
     * The
     * [Operation.operation_id][google.api.servicecontrol.v1.Operation.operation_id]
     * value from the request.
     */
    operationId: string;
    /**
     * Details of the error when processing the
     * [Operation][google.api.servicecontrol.v1.Operation].
     */
    status: Status;
}
export declare const CheckRequest: {
    encode(message: CheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest;
    fromJSON(object: any): CheckRequest;
    toJSON(message: CheckRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        operation?: {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            };
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[];
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[];
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
        serviceConfigId?: string;
    } & {
        serviceName?: string;
        operation?: {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            };
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[];
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[];
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["operation"]["labels"], string | number>, never>;
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[] & ({
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            } & {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[] & ({
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                } & {
                    labels?: {
                        [x: string]: string;
                    } & {
                        [x: string]: string;
                    } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["labels"], string | number>, never>;
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    } & {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[] & any[] & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"]["bucketCounts"], keyof any[]>, never>;
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"]["linearBuckets"], keyof import("./distribution").Distribution_LinearBuckets>, never>;
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"]["exponentialBuckets"], keyof import("./distribution").Distribution_ExponentialBuckets>, never>;
                        explicitBuckets?: {
                            bounds?: number[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"]["explicitBuckets"], "bounds">, never>;
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[] & ({
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"]["exemplars"][number], keyof import("../../distribution").Distribution_Exemplar>, never>)[] & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"]["exemplars"], keyof {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number]["distributionValue"], keyof import("./distribution").Distribution>, never>;
                } & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"][number], keyof import("./metric_value").MetricValue>, never>)[] & Record<Exclude<keyof I["operation"]["metricValueSets"][number]["metricValues"], keyof {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I["operation"]["metricValueSets"][number], keyof import("./metric_value").MetricValueSet>, never>)[] & Record<Exclude<keyof I["operation"]["metricValueSets"], keyof {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[]>, never>;
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[] & ({
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            } & {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                } & {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                } & Record<Exclude<keyof I["operation"]["logEntries"][number]["httpRequest"], keyof import("./http_request").HttpRequest>, never>;
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                } & {
                    [x: string]: string;
                } & Record<Exclude<keyof I["operation"]["logEntries"][number]["labels"], string | number>, never>;
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["operation"]["logEntries"][number]["protoPayload"], keyof import("../../../protobuf/any").Any>, never>;
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                } & {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    } & {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["operation"]["logEntries"][number]["structPayload"]["fields"][string], keyof import("../../../protobuf/struct").Value>, never>;
                    } & Record<Exclude<keyof I["operation"]["logEntries"][number]["structPayload"]["fields"], string | number>, never>;
                } & Record<Exclude<keyof I["operation"]["logEntries"][number]["structPayload"], "fields">, never>;
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                } & {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                } & Record<Exclude<keyof I["operation"]["logEntries"][number]["operation"], keyof import("./log_entry").LogEntryOperation>, never>;
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                } & {
                    file?: string;
                    line?: any;
                    function?: string;
                } & Record<Exclude<keyof I["operation"]["logEntries"][number]["sourceLocation"], keyof import("./log_entry").LogEntrySourceLocation>, never>;
            } & Record<Exclude<keyof I["operation"]["logEntries"][number], keyof import("./log_entry").LogEntry>, never>)[] & Record<Exclude<keyof I["operation"]["logEntries"], keyof {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[]>, never>;
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["operation"]["extensions"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["operation"]["extensions"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["operation"], keyof Operation>, never>;
        serviceConfigId?: string;
    } & Record<Exclude<keyof I, keyof CheckRequest>, never>>(object: I): CheckRequest;
};
export declare const CheckResponse: {
    encode(message: CheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse;
    fromJSON(object: any): CheckResponse;
    toJSON(message: CheckResponse): unknown;
    fromPartial<I extends {
        operationId?: string;
        checkErrors?: {
            code?: import("./check_error").CheckError_Code;
            subject?: string;
            detail?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[];
        serviceConfigId?: string;
        serviceRolloutId?: string;
        checkInfo?: {
            unusedArguments?: string[];
            consumerInfo?: {
                projectNumber?: any;
                type?: CheckResponse_ConsumerInfo_ConsumerType;
                consumerNumber?: any;
            };
        };
    } & {
        operationId?: string;
        checkErrors?: {
            code?: import("./check_error").CheckError_Code;
            subject?: string;
            detail?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[] & ({
            code?: import("./check_error").CheckError_Code;
            subject?: string;
            detail?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        } & {
            code?: import("./check_error").CheckError_Code;
            subject?: string;
            detail?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["checkErrors"][number]["status"], keyof Status>, never>;
        } & Record<Exclude<keyof I["checkErrors"][number], keyof CheckError>, never>)[] & Record<Exclude<keyof I["checkErrors"], keyof {
            code?: import("./check_error").CheckError_Code;
            subject?: string;
            detail?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[]>, never>;
        serviceConfigId?: string;
        serviceRolloutId?: string;
        checkInfo?: {
            unusedArguments?: string[];
            consumerInfo?: {
                projectNumber?: any;
                type?: CheckResponse_ConsumerInfo_ConsumerType;
                consumerNumber?: any;
            };
        } & {
            unusedArguments?: string[] & string[] & Record<Exclude<keyof I["checkInfo"]["unusedArguments"], keyof string[]>, never>;
            consumerInfo?: {
                projectNumber?: any;
                type?: CheckResponse_ConsumerInfo_ConsumerType;
                consumerNumber?: any;
            } & {
                projectNumber?: any;
                type?: CheckResponse_ConsumerInfo_ConsumerType;
                consumerNumber?: any;
            } & Record<Exclude<keyof I["checkInfo"]["consumerInfo"], keyof CheckResponse_ConsumerInfo>, never>;
        } & Record<Exclude<keyof I["checkInfo"], keyof CheckResponse_CheckInfo>, never>;
    } & Record<Exclude<keyof I, keyof CheckResponse>, never>>(object: I): CheckResponse;
};
export declare const CheckResponse_CheckInfo: {
    encode(message: CheckResponse_CheckInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_CheckInfo;
    fromJSON(object: any): CheckResponse_CheckInfo;
    toJSON(message: CheckResponse_CheckInfo): unknown;
    fromPartial<I extends {
        unusedArguments?: string[];
        consumerInfo?: {
            projectNumber?: any;
            type?: CheckResponse_ConsumerInfo_ConsumerType;
            consumerNumber?: any;
        };
    } & {
        unusedArguments?: string[] & string[] & Record<Exclude<keyof I["unusedArguments"], keyof string[]>, never>;
        consumerInfo?: {
            projectNumber?: any;
            type?: CheckResponse_ConsumerInfo_ConsumerType;
            consumerNumber?: any;
        } & {
            projectNumber?: any;
            type?: CheckResponse_ConsumerInfo_ConsumerType;
            consumerNumber?: any;
        } & Record<Exclude<keyof I["consumerInfo"], keyof CheckResponse_ConsumerInfo>, never>;
    } & Record<Exclude<keyof I, keyof CheckResponse_CheckInfo>, never>>(object: I): CheckResponse_CheckInfo;
};
export declare const CheckResponse_ConsumerInfo: {
    encode(message: CheckResponse_ConsumerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_ConsumerInfo;
    fromJSON(object: any): CheckResponse_ConsumerInfo;
    toJSON(message: CheckResponse_ConsumerInfo): unknown;
    fromPartial<I extends {
        projectNumber?: any;
        type?: CheckResponse_ConsumerInfo_ConsumerType;
        consumerNumber?: any;
    } & {
        projectNumber?: any;
        type?: CheckResponse_ConsumerInfo_ConsumerType;
        consumerNumber?: any;
    } & Record<Exclude<keyof I, keyof CheckResponse_ConsumerInfo>, never>>(object: I): CheckResponse_ConsumerInfo;
};
export declare const ReportRequest: {
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        operations?: {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            };
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[];
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[];
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
        serviceConfigId?: string;
    } & {
        serviceName?: string;
        operations?: {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            };
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[];
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[];
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[] & ({
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            };
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[];
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[];
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["labels"], string | number>, never>;
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[] & ({
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["metricValueSets"][number], keyof import("./metric_value").MetricValueSet>, never>)[] & Record<Exclude<keyof I["operations"][number]["metricValueSets"], keyof {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[]>, never>;
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[] & ({
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["logEntries"][number], keyof import("./log_entry").LogEntry>, never>)[] & Record<Exclude<keyof I["operations"][number]["logEntries"], keyof {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[]>, never>;
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["extensions"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["operations"][number]["extensions"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["operations"][number], keyof Operation>, never>)[] & Record<Exclude<keyof I["operations"], keyof {
            operationId?: string;
            operationName?: string;
            consumerId?: string;
            startTime?: Date;
            endTime?: Date;
            labels?: {
                [x: string]: string;
            };
            metricValueSets?: {
                metricName?: string;
                metricValues?: {
                    labels?: {
                        [x: string]: string;
                    };
                    startTime?: Date;
                    endTime?: Date;
                    boolValue?: boolean;
                    int64Value?: any;
                    doubleValue?: number;
                    stringValue?: string;
                    distributionValue?: {
                        count?: any;
                        mean?: number;
                        minimum?: number;
                        maximum?: number;
                        sumOfSquaredDeviation?: number;
                        bucketCounts?: any[];
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        };
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        };
                        explicitBuckets?: {
                            bounds?: number[];
                        };
                        exemplars?: {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[];
                    };
                }[];
            }[];
            logEntries?: {
                name?: string;
                timestamp?: Date;
                severity?: import("../../../logging/type/log_severity").LogSeverity;
                httpRequest?: {
                    requestMethod?: string;
                    requestUrl?: string;
                    requestSize?: any;
                    status?: number;
                    responseSize?: any;
                    userAgent?: string;
                    remoteIp?: string;
                    serverIp?: string;
                    referer?: string;
                    latency?: string;
                    cacheLookup?: boolean;
                    cacheHit?: boolean;
                    cacheValidatedWithOriginServer?: boolean;
                    cacheFillBytes?: any;
                    protocol?: string;
                };
                trace?: string;
                insertId?: string;
                labels?: {
                    [x: string]: string;
                };
                protoPayload?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                textPayload?: string;
                structPayload?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                operation?: {
                    id?: string;
                    producer?: string;
                    first?: boolean;
                    last?: boolean;
                };
                sourceLocation?: {
                    file?: string;
                    line?: any;
                    function?: string;
                };
            }[];
            importance?: import("./operation").Operation_Importance;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
        serviceConfigId?: string;
    } & Record<Exclude<keyof I, keyof ReportRequest>, never>>(object: I): ReportRequest;
};
export declare const ReportResponse: {
    encode(message: ReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse;
    fromJSON(object: any): ReportResponse;
    toJSON(message: ReportResponse): unknown;
    fromPartial<I extends {
        reportErrors?: {
            operationId?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[];
        serviceConfigId?: string;
        serviceRolloutId?: string;
    } & {
        reportErrors?: {
            operationId?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[] & ({
            operationId?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        } & {
            operationId?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["reportErrors"][number]["status"], keyof Status>, never>;
        } & Record<Exclude<keyof I["reportErrors"][number], keyof ReportResponse_ReportError>, never>)[] & Record<Exclude<keyof I["reportErrors"], keyof {
            operationId?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[]>, never>;
        serviceConfigId?: string;
        serviceRolloutId?: string;
    } & Record<Exclude<keyof I, keyof ReportResponse>, never>>(object: I): ReportResponse;
};
export declare const ReportResponse_ReportError: {
    encode(message: ReportResponse_ReportError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse_ReportError;
    fromJSON(object: any): ReportResponse_ReportError;
    toJSON(message: ReportResponse_ReportError): unknown;
    fromPartial<I extends {
        operationId?: string;
        status?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
    } & {
        operationId?: string;
        status?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["status"]["details"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["status"]["details"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["status"], keyof Status>, never>;
    } & Record<Exclude<keyof I, keyof ReportResponse_ReportError>, never>>(object: I): ReportResponse_ReportError;
};
