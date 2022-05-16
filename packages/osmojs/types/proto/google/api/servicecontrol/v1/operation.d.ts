import { MetricValueSet } from "./metric_value";
import { LogEntry } from "./log_entry";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** Defines the importance of the data contained in the operation. */
export declare enum Operation_Importance {
    /**
     * LOW - Allows data caching, batching, and aggregation. It provides
     * higher performance with higher data loss risk.
     */
    LOW = 0,
    /**
     * HIGH - Disables data aggregation to minimize data loss. It is for operations
     * that contains significant monetary value or audit trail. This feature
     * only applies to the client libraries.
     */
    HIGH = 1,
    UNRECOGNIZED = -1
}
export declare function operation_ImportanceFromJSON(object: any): Operation_Importance;
export declare function operation_ImportanceToJSON(object: Operation_Importance): string;
export interface Operation_LabelsEntry {
    key: string;
    value: string;
}
/** Represents information regarding an operation. */
export interface Operation {
    /**
     * Identity of the operation. This must be unique within the scope of the
     * service that generated the operation. If the service calls
     * Check() and Report() on the same operation, the two calls should carry
     * the same id.
     *
     * UUID version 4 is recommended, though not required.
     * In scenarios where an operation is computed from existing information
     * and an idempotent id is desirable for deduplication purpose, UUID version 5
     * is recommended. See RFC 4122 for details.
     */
    operationId: string;
    /** Fully qualified name of the operation. Reserved for future use. */
    operationName: string;
    /**
     * Identity of the consumer who is using the service.
     * This field should be filled in for the operations initiated by a
     * consumer, but not for service-initiated operations that are
     * not related to a specific consumer.
     *
     * - This can be in one of the following formats:
     * - project:PROJECT_ID,
     * - project`_`number:PROJECT_NUMBER,
     * - projects/PROJECT_ID or PROJECT_NUMBER,
     * - folders/FOLDER_NUMBER,
     * - organizations/ORGANIZATION_NUMBER,
     * - api`_`key:API_KEY.
     */
    consumerId: string;
    /** Required. Start time of the operation. */
    startTime: Date;
    /**
     * End time of the operation.
     * Required when the operation is used in
     * [ServiceController.Report][google.api.servicecontrol.v1.ServiceController.Report],
     * but optional when the operation is used in
     * [ServiceController.Check][google.api.servicecontrol.v1.ServiceController.Check].
     */
    endTime: Date;
    /**
     * Labels describing the operation. Only the following labels are allowed:
     *
     * - Labels describing monitored resources as defined in
     * the service configuration.
     * - Default labels of metric values. When specified, labels defined in the
     * metric value override these default.
     * - The following labels defined by Google Cloud Platform:
     * - `cloud.googleapis.com/location` describing the location where the
     * operation happened,
     * - `servicecontrol.googleapis.com/user_agent` describing the user agent
     * of the API request,
     * - `servicecontrol.googleapis.com/service_agent` describing the service
     * used to handle the API request (e.g. ESP),
     * - `servicecontrol.googleapis.com/platform` describing the platform
     * where the API is served, such as App Engine, Compute Engine, or
     * Kubernetes Engine.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Represents information about this operation. Each MetricValueSet
     * corresponds to a metric defined in the service configuration.
     * The data type used in the MetricValueSet must agree with
     * the data type specified in the metric definition.
     *
     * Within a single operation, it is not allowed to have more than one
     * MetricValue instances that have the same metric names and identical
     * label value combinations. If a request has such duplicated MetricValue
     * instances, the entire request is rejected with
     * an invalid argument error.
     */
    metricValueSets: MetricValueSet[];
    /** Represents information to be logged. */
    logEntries: LogEntry[];
    /** DO NOT USE. This is an experimental field. */
    importance: Operation_Importance;
    /** Unimplemented. */
    extensions: Any[];
}
export declare const Operation_LabelsEntry: {
    encode(message: Operation_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation_LabelsEntry;
    fromJSON(object: any): Operation_LabelsEntry;
    toJSON(message: Operation_LabelsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof Operation_LabelsEntry>, never>>(object: I): Operation_LabelsEntry;
};
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial<I extends {
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
        importance?: Operation_Importance;
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
        } & Record<Exclude<keyof I["labels"], string | number>, never>;
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
                [x: string]: any;
            } & Record<Exclude<keyof I["metricValueSets"][number]["metricValues"][number], keyof import("./metric_value").MetricValue>, never>)[] & Record<Exclude<keyof I["metricValueSets"][number]["metricValues"], keyof {
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
        } & Record<Exclude<keyof I["metricValueSets"][number], keyof MetricValueSet>, never>)[] & Record<Exclude<keyof I["metricValueSets"], keyof {
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
                [x: string]: any;
            } & Record<Exclude<keyof I["logEntries"][number]["httpRequest"], keyof import("./http_request").HttpRequest>, never>;
            trace?: string;
            insertId?: string;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["logEntries"][number]["labels"], string | number>, never>;
            protoPayload?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["logEntries"][number]["protoPayload"], keyof Any>, never>;
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
                [x: string]: any;
            } & Record<Exclude<keyof I["logEntries"][number]["structPayload"], "fields">, never>;
            operation?: {
                id?: string;
                producer?: string;
                first?: boolean;
                last?: boolean;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["logEntries"][number]["operation"], keyof import("./log_entry").LogEntryOperation>, never>;
            sourceLocation?: {
                file?: string;
                line?: any;
                function?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["logEntries"][number]["sourceLocation"], keyof import("./log_entry").LogEntrySourceLocation>, never>;
        } & Record<Exclude<keyof I["logEntries"][number], keyof LogEntry>, never>)[] & Record<Exclude<keyof I["logEntries"], keyof {
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
        importance?: Operation_Importance;
        extensions?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["extensions"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["extensions"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Operation>, never>>(object: I): Operation;
};
