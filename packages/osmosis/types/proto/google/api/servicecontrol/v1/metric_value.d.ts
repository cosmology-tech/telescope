import { Distribution } from "./distribution";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MetricValue_LabelsEntry {
    key: string;
    value: string;
}
/** Represents a single metric value. */
export interface MetricValue {
    /**
     * The labels describing the metric value.
     * See comments on [google.api.servicecontrol.v1.Operation.labels][google.api.servicecontrol.v1.Operation.labels] for
     * the overriding relationship.
     * Note that this map must not contain monitored resource labels.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * The start of the time period over which this metric value's measurement
     * applies. The time period has different semantics for different metric
     * types (cumulative, delta, and gauge). See the metric definition
     * documentation in the service configuration for details. If not specified,
     * [google.api.servicecontrol.v1.Operation.start_time][google.api.servicecontrol.v1.Operation.start_time] will be used.
     */
    startTime: Date;
    /**
     * The end of the time period over which this metric value's measurement
     * applies.  If not specified,
     * [google.api.servicecontrol.v1.Operation.end_time][google.api.servicecontrol.v1.Operation.end_time] will be used.
     */
    endTime: Date;
    /** A boolean value. */
    boolValue?: boolean;
    /** A signed 64-bit integer value. */
    int64Value?: Long;
    /** A double precision floating point value. */
    doubleValue?: number;
    /** A text string value. */
    stringValue?: string;
    /** A distribution value. */
    distributionValue?: Distribution;
}
/**
 * Represents a set of metric values in the same metric.
 * Each metric value in the set should have a unique combination of start time,
 * end time, and label values.
 */
export interface MetricValueSet {
    /** The metric name defined in the service configuration. */
    metricName: string;
    /** The values in this metric. */
    metricValues: MetricValue[];
}
export declare const MetricValue_LabelsEntry: {
    encode(message: MetricValue_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue_LabelsEntry;
    fromJSON(object: any): MetricValue_LabelsEntry;
    toJSON(message: MetricValue_LabelsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof MetricValue_LabelsEntry>, never>>(object: I): MetricValue_LabelsEntry;
};
export declare const MetricValue: {
    encode(message: MetricValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetricValue;
    fromJSON(object: any): MetricValue;
    toJSON(message: MetricValue): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["labels"], string | number>, never>;
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
            bucketCounts?: any[] & any[] & Record<Exclude<keyof I["distributionValue"]["bucketCounts"], keyof any[]>, never>;
            linearBuckets?: {
                numFiniteBuckets?: number;
                width?: number;
                offset?: number;
            } & {
                numFiniteBuckets?: number;
                width?: number;
                offset?: number;
            } & Record<Exclude<keyof I["distributionValue"]["linearBuckets"], keyof import("./distribution").Distribution_LinearBuckets>, never>;
            exponentialBuckets?: {
                numFiniteBuckets?: number;
                growthFactor?: number;
                scale?: number;
            } & {
                numFiniteBuckets?: number;
                growthFactor?: number;
                scale?: number;
            } & Record<Exclude<keyof I["distributionValue"]["exponentialBuckets"], keyof import("./distribution").Distribution_ExponentialBuckets>, never>;
            explicitBuckets?: {
                bounds?: number[];
            } & {
                bounds?: number[] & number[] & Record<Exclude<keyof I["distributionValue"]["explicitBuckets"]["bounds"], keyof number[]>, never>;
            } & Record<Exclude<keyof I["distributionValue"]["explicitBuckets"], "bounds">, never>;
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
                value?: number;
                timestamp?: Date;
                attachments?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[] & ({
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["distributionValue"]["exemplars"][number]["attachments"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["distributionValue"]["exemplars"][number]["attachments"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["distributionValue"]["exemplars"][number], keyof import("../../distribution").Distribution_Exemplar>, never>)[] & Record<Exclude<keyof I["distributionValue"]["exemplars"], keyof {
                value?: number;
                timestamp?: Date;
                attachments?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }[]>, never>;
        } & Record<Exclude<keyof I["distributionValue"], keyof Distribution>, never>;
    } & Record<Exclude<keyof I, keyof MetricValue>, never>>(object: I): MetricValue;
};
export declare const MetricValueSet: {
    encode(message: MetricValueSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetricValueSet;
    fromJSON(object: any): MetricValueSet;
    toJSON(message: MetricValueSet): unknown;
    fromPartial<I extends {
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
                [x: string]: any;
            } & Record<Exclude<keyof I["metricValues"][number]["labels"], string | number>, never>;
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
                [x: string]: any;
            } & Record<Exclude<keyof I["metricValues"][number]["distributionValue"], keyof Distribution>, never>;
        } & Record<Exclude<keyof I["metricValues"][number], keyof MetricValue>, never>)[] & Record<Exclude<keyof I["metricValues"], keyof {
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
    } & Record<Exclude<keyof I, keyof MetricValueSet>, never>>(object: I): MetricValueSet;
};
