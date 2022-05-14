import { MetricValueSet } from "./metric_value";
import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
/** Supported quota modes. */
export declare enum QuotaOperation_QuotaMode {
    /** UNSPECIFIED - Guard against implicit default. Must not be used. */
    UNSPECIFIED = 0,
    /**
     * NORMAL - For AllocateQuota request, allocates quota for the amount specified in
     * the service configuration or specified using the quota metrics. If the
     * amount is higher than the available quota, allocation error will be
     * returned and no quota will be allocated.
     * If multiple quotas are part of the request, and one fails, none of the
     * quotas are allocated or released.
     */
    NORMAL = 1,
    /**
     * BEST_EFFORT - The operation allocates quota for the amount specified in the service
     * configuration or specified using the quota metrics. If the amount is
     * higher than the available quota, request does not fail but all available
     * quota will be allocated.
     * For rate quota, BEST_EFFORT will continue to deduct from other groups
     * even if one does not have enough quota. For allocation, it will find the
     * minimum available amount across all groups and deduct that amount from
     * all the affected groups.
     */
    BEST_EFFORT = 2,
    /**
     * CHECK_ONLY - For AllocateQuota request, only checks if there is enough quota
     * available and does not change the available quota. No lock is placed on
     * the available quota either.
     */
    CHECK_ONLY = 3,
    /**
     * QUERY_ONLY - Unimplemented. When used in AllocateQuotaRequest, this returns the
     * effective quota limit(s) in the response, and no quota check will be
     * performed. Not supported for other requests, and even for
     * AllocateQuotaRequest, this is currently supported only for allowlisted
     * services.
     */
    QUERY_ONLY = 4,
    /**
     * ADJUST_ONLY - The operation allocates quota for the amount specified in the service
     * configuration or specified using the quota metrics. If the requested
     * amount is higher than the available quota, request does not fail and
     * remaining quota would become negative (going over the limit).
     * Not supported for Rate Quota.
     */
    ADJUST_ONLY = 5,
    UNRECOGNIZED = -1
}
export declare function quotaOperation_QuotaModeFromJSON(object: any): QuotaOperation_QuotaMode;
export declare function quotaOperation_QuotaModeToJSON(object: QuotaOperation_QuotaMode): string;
/**
 * Error codes related to project config validations are deprecated since the
 * quota controller methods do not perform these validations. Instead services
 * have to call the Check method, without quota_properties field, to perform
 * these validations before calling the quota controller methods. These
 * methods check only for project deletion to be wipe out compliant.
 */
export declare enum QuotaError_Code {
    /** UNSPECIFIED - This is never used. */
    UNSPECIFIED = 0,
    /**
     * RESOURCE_EXHAUSTED - Quota allocation failed.
     * Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED].
     */
    RESOURCE_EXHAUSTED = 8,
    /**
     * BILLING_NOT_ACTIVE - Consumer cannot access the service because the service requires active
     * billing.
     */
    BILLING_NOT_ACTIVE = 107,
    /** PROJECT_DELETED - Consumer's project has been marked as deleted (soft deletion). */
    PROJECT_DELETED = 108,
    /** API_KEY_INVALID - Specified API key is invalid. */
    API_KEY_INVALID = 105,
    /** API_KEY_EXPIRED - Specified API Key has expired. */
    API_KEY_EXPIRED = 112,
    UNRECOGNIZED = -1
}
export declare function quotaError_CodeFromJSON(object: any): QuotaError_Code;
export declare function quotaError_CodeToJSON(object: QuotaError_Code): string;
/** Request message for the AllocateQuota method. */
export interface AllocateQuotaRequest {
    /**
     * Name of the service as specified in the service configuration. For example,
     * `"pubsub.googleapis.com"`.
     *
     * See [google.api.Service][google.api.Service] for the definition of a service name.
     */
    serviceName: string;
    /** Operation that describes the quota allocation. */
    allocateOperation: QuotaOperation;
    /**
     * Specifies which version of service configuration should be used to process
     * the request. If unspecified or no matching version can be found, the latest
     * one will be used.
     */
    serviceConfigId: string;
}
export interface QuotaOperation_LabelsEntry {
    key: string;
    value: string;
}
/** Represents information regarding a quota operation. */
export interface QuotaOperation {
    /**
     * Identity of the operation. This is expected to be unique within the scope
     * of the service that generated the operation, and guarantees idempotency in
     * case of retries.
     *
     * In order to ensure best performance and latency in the Quota backends,
     * operation_ids are optimally associated with time, so that related
     * operations can be accessed fast in storage. For this reason, the
     * recommended token for services that intend to operate at a high QPS is
     * Unix time in nanos + UUID
     */
    operationId: string;
    /**
     * Fully qualified name of the API method for which this quota operation is
     * requested. This name is used for matching quota rules or metric rules and
     * billing status rules defined in service configuration.
     *
     * This field should not be set if any of the following is true:
     * (1) the quota operation is performed on non-API resources.
     * (2) quota_metrics is set because the caller is doing quota override.
     *
     *
     * Example of an RPC method name:
     * google.example.library.v1.LibraryService.CreateShelf
     */
    methodName: string;
    /**
     * Identity of the consumer for whom this quota operation is being performed.
     *
     * This can be in one of the following formats:
     * project:<project_id>,
     * project_number:<project_number>,
     * api_key:<api_key>.
     */
    consumerId: string;
    /** Labels describing the operation. */
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
     *
     * This field is mutually exclusive with method_name.
     */
    quotaMetrics: MetricValueSet[];
    /** Quota mode for this operation. */
    quotaMode: QuotaOperation_QuotaMode;
}
/** Response message for the AllocateQuota method. */
export interface AllocateQuotaResponse {
    /**
     * The same operation_id value used in the AllocateQuotaRequest. Used for
     * logging and diagnostics purposes.
     */
    operationId: string;
    /** Indicates the decision of the allocate. */
    allocateErrors: QuotaError[];
    /**
     * Quota metrics to indicate the result of allocation. Depending on the
     * request, one or more of the following metrics will be included:
     *
     * 1. Per quota group or per quota metric incremental usage will be specified
     * using the following delta metric :
     * "serviceruntime.googleapis.com/api/consumer/quota_used_count"
     *
     * 2. The quota limit reached condition will be specified using the following
     * boolean metric :
     * "serviceruntime.googleapis.com/quota/exceeded"
     */
    quotaMetrics: MetricValueSet[];
    /** ID of the actual config used to process the request. */
    serviceConfigId: string;
}
/** Represents error information for [QuotaOperation][google.api.servicecontrol.v1.QuotaOperation]. */
export interface QuotaError {
    /** Error code. */
    code: QuotaError_Code;
    /**
     * Subject to whom this error applies. See the specific enum for more details
     * on this field. For example, "clientip:<ip address of client>" or
     * "project:<Google developer project id>".
     */
    subject: string;
    /** Free-form text that provides details on the cause of the error. */
    description: string;
    /**
     * Contains additional information about the quota error.
     * If available, `status.code` will be non zero.
     */
    status: Status;
}
export declare const AllocateQuotaRequest: {
    encode(message: AllocateQuotaRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllocateQuotaRequest;
    fromJSON(object: any): AllocateQuotaRequest;
    toJSON(message: AllocateQuotaRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        allocateOperation?: {
            operationId?: string;
            methodName?: string;
            consumerId?: string;
            labels?: {
                [x: string]: string;
            };
            quotaMetrics?: {
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
            quotaMode?: QuotaOperation_QuotaMode;
        };
        serviceConfigId?: string;
    } & {
        serviceName?: string;
        allocateOperation?: {
            operationId?: string;
            methodName?: string;
            consumerId?: string;
            labels?: {
                [x: string]: string;
            };
            quotaMetrics?: {
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
            quotaMode?: QuotaOperation_QuotaMode;
        } & {
            operationId?: string;
            methodName?: string;
            consumerId?: string;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["allocateOperation"]["labels"], string | number>, never>;
            quotaMetrics?: {
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
                    } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["labels"], string | number>, never>;
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
                        bucketCounts?: any[] & any[] & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"]["bucketCounts"], keyof any[]>, never>;
                        linearBuckets?: {
                            numFiniteBuckets?: number;
                            width?: number;
                            offset?: number;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"]["linearBuckets"], keyof import("./distribution").Distribution_LinearBuckets>, never>;
                        exponentialBuckets?: {
                            numFiniteBuckets?: number;
                            growthFactor?: number;
                            scale?: number;
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"]["exponentialBuckets"], keyof import("./distribution").Distribution_ExponentialBuckets>, never>;
                        explicitBuckets?: {
                            bounds?: number[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"]["explicitBuckets"], "bounds">, never>;
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
                        } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"]["exemplars"][number], keyof import("../../distribution").Distribution_Exemplar>, never>)[] & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"]["exemplars"], keyof {
                            value?: number;
                            timestamp?: Date;
                            attachments?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number]["distributionValue"], keyof import("./distribution").Distribution>, never>;
                } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"][number], keyof import("./metric_value").MetricValue>, never>)[] & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number]["metricValues"], keyof {
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
            } & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"][number], keyof MetricValueSet>, never>)[] & Record<Exclude<keyof I["allocateOperation"]["quotaMetrics"], keyof {
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
            quotaMode?: QuotaOperation_QuotaMode;
        } & Record<Exclude<keyof I["allocateOperation"], keyof QuotaOperation>, never>;
        serviceConfigId?: string;
    } & Record<Exclude<keyof I, keyof AllocateQuotaRequest>, never>>(object: I): AllocateQuotaRequest;
};
export declare const QuotaOperation_LabelsEntry: {
    encode(message: QuotaOperation_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOperation_LabelsEntry;
    fromJSON(object: any): QuotaOperation_LabelsEntry;
    toJSON(message: QuotaOperation_LabelsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof QuotaOperation_LabelsEntry>, never>>(object: I): QuotaOperation_LabelsEntry;
};
export declare const QuotaOperation: {
    encode(message: QuotaOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOperation;
    fromJSON(object: any): QuotaOperation;
    toJSON(message: QuotaOperation): unknown;
    fromPartial<I extends {
        operationId?: string;
        methodName?: string;
        consumerId?: string;
        labels?: {
            [x: string]: string;
        };
        quotaMetrics?: {
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
        quotaMode?: QuotaOperation_QuotaMode;
    } & {
        operationId?: string;
        methodName?: string;
        consumerId?: string;
        labels?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["labels"], string | number>, never>;
        quotaMetrics?: {
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
            } & Record<Exclude<keyof I["quotaMetrics"][number]["metricValues"][number], keyof import("./metric_value").MetricValue>, never>)[] & Record<Exclude<keyof I["quotaMetrics"][number]["metricValues"], keyof {
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
        } & Record<Exclude<keyof I["quotaMetrics"][number], keyof MetricValueSet>, never>)[] & Record<Exclude<keyof I["quotaMetrics"], keyof {
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
        quotaMode?: QuotaOperation_QuotaMode;
    } & Record<Exclude<keyof I, keyof QuotaOperation>, never>>(object: I): QuotaOperation;
};
export declare const AllocateQuotaResponse: {
    encode(message: AllocateQuotaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllocateQuotaResponse;
    fromJSON(object: any): AllocateQuotaResponse;
    toJSON(message: AllocateQuotaResponse): unknown;
    fromPartial<I extends {
        operationId?: string;
        allocateErrors?: {
            code?: QuotaError_Code;
            subject?: string;
            description?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[];
        quotaMetrics?: {
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
        serviceConfigId?: string;
    } & {
        operationId?: string;
        allocateErrors?: {
            code?: QuotaError_Code;
            subject?: string;
            description?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[] & ({
            code?: QuotaError_Code;
            subject?: string;
            description?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        } & {
            code?: QuotaError_Code;
            subject?: string;
            description?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["allocateErrors"][number]["status"], keyof Status>, never>;
        } & Record<Exclude<keyof I["allocateErrors"][number], keyof QuotaError>, never>)[] & Record<Exclude<keyof I["allocateErrors"], keyof {
            code?: QuotaError_Code;
            subject?: string;
            description?: string;
            status?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
        }[]>, never>;
        quotaMetrics?: {
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
            } & Record<Exclude<keyof I["quotaMetrics"][number]["metricValues"][number], keyof import("./metric_value").MetricValue>, never>)[] & Record<Exclude<keyof I["quotaMetrics"][number]["metricValues"], keyof {
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
        } & Record<Exclude<keyof I["quotaMetrics"][number], keyof MetricValueSet>, never>)[] & Record<Exclude<keyof I["quotaMetrics"], keyof {
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
        serviceConfigId?: string;
    } & Record<Exclude<keyof I, keyof AllocateQuotaResponse>, never>>(object: I): AllocateQuotaResponse;
};
export declare const QuotaError: {
    encode(message: QuotaError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaError;
    fromJSON(object: any): QuotaError;
    toJSON(message: QuotaError): unknown;
    fromPartial<I extends {
        code?: QuotaError_Code;
        subject?: string;
        description?: string;
        status?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
    } & {
        code?: QuotaError_Code;
        subject?: string;
        description?: string;
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
    } & Record<Exclude<keyof I, keyof QuotaError>, never>>(object: I): QuotaError;
};
