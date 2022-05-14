import { MetricDescriptor } from "../../api/metric";
import { Distribution_BucketOptions } from "../../api/distribution";
import * as _m0 from "protobufjs/minimal";
/** Logging API version. */
export declare enum LogMetric_ApiVersion {
    /** V2 - Logging API v2. */
    V2 = 0,
    /** V1 - Logging API v1. */
    V1 = 1,
    UNRECOGNIZED = -1
}
export declare function logMetric_ApiVersionFromJSON(object: any): LogMetric_ApiVersion;
export declare function logMetric_ApiVersionToJSON(object: LogMetric_ApiVersion): string;
export interface LogMetric_LabelExtractorsEntry {
    key: string;
    value: string;
}
/**
 * Describes a logs-based metric. The value of the metric is the number of log
 * entries that match a logs filter in a given time interval.
 *
 * Logs-based metrics can also be used to extract values from logs and create a
 * distribution of the values. The distribution records the statistics of the
 * extracted values along with an optional histogram of the values as specified
 * by the bucket options.
 */
export interface LogMetric {
    /**
     * Required. The client-assigned metric identifier.
     * Examples: `"error_count"`, `"nginx/requests"`.
     *
     * Metric identifiers are limited to 100 characters and can include only the
     * following characters: `A-Z`, `a-z`, `0-9`, and the special characters
     * `_-.,+!*',()%/`. The forward-slash character (`/`) denotes a hierarchy of
     * name pieces, and it cannot be the first character of the name.
     *
     * This field is the `[METRIC_ID]` part of a metric resource name in the
     * format "projects/[PROJECT_ID]/metrics/[METRIC_ID]". Example: If the
     * resource name of a metric is
     * `"projects/my-project/metrics/nginx%2Frequests"`, this field's value is
     * `"nginx/requests"`.
     */
    name: string;
    /**
     * Optional. A description of this metric, which is used in documentation.
     * The maximum length of the description is 8000 characters.
     */
    description: string;
    /**
     * Required. An [advanced logs
     * filter](https://cloud.google.com/logging/docs/view/advanced_filters) which
     * is used to match log entries. Example:
     *
     * "resource.type=gae_app AND severity>=ERROR"
     *
     * The maximum length of the filter is 20000 characters.
     */
    filter: string;
    /**
     * Optional. If set to True, then this metric is disabled and it does not
     * generate any points.
     */
    disabled: boolean;
    /**
     * Optional. The metric descriptor associated with the logs-based metric.
     * If unspecified, it uses a default metric descriptor with a DELTA metric
     * kind, INT64 value type, with no labels and a unit of "1". Such a metric
     * counts the number of log entries matching the `filter` expression.
     *
     * The `name`, `type`, and `description` fields in the `metric_descriptor`
     * are output only, and is constructed using the `name` and `description`
     * field in the LogMetric.
     *
     * To create a logs-based metric that records a distribution of log values, a
     * DELTA metric kind with a DISTRIBUTION value type must be used along with
     * a `value_extractor` expression in the LogMetric.
     *
     * Each label in the metric descriptor must have a matching label
     * name as the key and an extractor expression as the value in the
     * `label_extractors` map.
     *
     * The `metric_kind` and `value_type` fields in the `metric_descriptor` cannot
     * be updated once initially configured. New labels can be added in the
     * `metric_descriptor`, but existing labels cannot be modified except for
     * their description.
     */
    metricDescriptor: MetricDescriptor;
    /**
     * Optional. A `value_extractor` is required when using a distribution
     * logs-based metric to extract the values to record from a log entry.
     * Two functions are supported for value extraction: `EXTRACT(field)` or
     * `REGEXP_EXTRACT(field, regex)`. The argument are:
     * 1. field: The name of the log entry field from which the value is to be
     * extracted.
     * 2. regex: A regular expression using the Google RE2 syntax
     * (https://github.com/google/re2/wiki/Syntax) with a single capture
     * group to extract data from the specified log entry field. The value
     * of the field is converted to a string before applying the regex.
     * It is an error to specify a regex that does not include exactly one
     * capture group.
     *
     * The result of the extraction must be convertible to a double type, as the
     * distribution always records double values. If either the extraction or
     * the conversion to double fails, then those values are not recorded in the
     * distribution.
     *
     * Example: `REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")`
     */
    valueExtractor: string;
    /**
     * Optional. A map from a label key string to an extractor expression which is
     * used to extract data from a log entry field and assign as the label value.
     * Each label key specified in the LabelDescriptor must have an associated
     * extractor expression in this map. The syntax of the extractor expression
     * is the same as for the `value_extractor` field.
     *
     * The extracted value is converted to the type defined in the label
     * descriptor. If the either the extraction or the type conversion fails,
     * the label will have a default value. The default value for a string
     * label is an empty string, for an integer label its 0, and for a boolean
     * label its `false`.
     *
     * Note that there are upper bounds on the maximum number of labels and the
     * number of active time series that are allowed in a project.
     */
    labelExtractors: {
        [key: string]: string;
    };
    /**
     * Optional. The `bucket_options` are required when the logs-based metric is
     * using a DISTRIBUTION value type and it describes the bucket boundaries
     * used to create a histogram of the extracted values.
     */
    bucketOptions: Distribution_BucketOptions;
    /**
     * Output only. The creation timestamp of the metric.
     *
     * This field may not be present for older metrics.
     */
    createTime: Date;
    /**
     * Output only. The last update timestamp of the metric.
     *
     * This field may not be present for older metrics.
     */
    updateTime: Date;
    /**
     * Deprecated. The API version that created or updated this metric.
     * The v2 format is used by default and cannot be changed.
     */
    /** @deprecated */
    version: LogMetric_ApiVersion;
}
/** The parameters to ListLogMetrics. */
export interface ListLogMetricsRequest {
    /**
     * Required. The name of the project containing the metrics:
     *
     * "projects/[PROJECT_ID]"
     */
    parent: string;
    /**
     * Optional. If present, then retrieve the next batch of results from the
     * preceding call to this method. `pageToken` must be the value of
     * `nextPageToken` from the previous response. The values of other method
     * parameters should be identical to those in the previous call.
     */
    pageToken: string;
    /**
     * Optional. The maximum number of results to return from this request.
     * Non-positive values are ignored. The presence of `nextPageToken` in the
     * response indicates that more results might be available.
     */
    pageSize: number;
}
/** Result returned from ListLogMetrics. */
export interface ListLogMetricsResponse {
    /** A list of logs-based metrics. */
    metrics: LogMetric[];
    /**
     * If there might be more results than appear in this response, then
     * `nextPageToken` is included. To get the next set of results, call this
     * method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken: string;
}
/** The parameters to GetLogMetric. */
export interface GetLogMetricRequest {
    /**
     * Required. The resource name of the desired metric:
     *
     * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     */
    metricName: string;
}
/** The parameters to CreateLogMetric. */
export interface CreateLogMetricRequest {
    /**
     * Required. The resource name of the project in which to create the metric:
     *
     * "projects/[PROJECT_ID]"
     *
     * The new metric must be provided in the request.
     */
    parent: string;
    /**
     * Required. The new logs-based metric, which must not have an identifier that
     * already exists.
     */
    metric: LogMetric;
}
/** The parameters to UpdateLogMetric. */
export interface UpdateLogMetricRequest {
    /**
     * Required. The resource name of the metric to update:
     *
     * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     *
     * The updated metric must be provided in the request and it's
     * `name` field must be the same as `[METRIC_ID]` If the metric
     * does not exist in `[PROJECT_ID]`, then a new metric is created.
     */
    metricName: string;
    /** Required. The updated metric. */
    metric: LogMetric;
}
/** The parameters to DeleteLogMetric. */
export interface DeleteLogMetricRequest {
    /**
     * Required. The resource name of the metric to delete:
     *
     * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     */
    metricName: string;
}
export declare const LogMetric_LabelExtractorsEntry: {
    encode(message: LogMetric_LabelExtractorsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogMetric_LabelExtractorsEntry;
    fromJSON(object: any): LogMetric_LabelExtractorsEntry;
    toJSON(message: LogMetric_LabelExtractorsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof LogMetric_LabelExtractorsEntry>, never>>(object: I): LogMetric_LabelExtractorsEntry;
};
export declare const LogMetric: {
    encode(message: LogMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogMetric;
    fromJSON(object: any): LogMetric;
    toJSON(message: LogMetric): unknown;
    fromPartial<I extends {
        name?: string;
        description?: string;
        filter?: string;
        disabled?: boolean;
        metricDescriptor?: {
            name?: string;
            type?: string;
            labels?: {
                key?: string;
                valueType?: import("../../api/label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
            valueType?: import("../../api/metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("../../api/launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            };
            launchStage?: import("../../api/launch_stage").LaunchStage;
            monitoredResourceTypes?: string[];
        };
        valueExtractor?: string;
        labelExtractors?: {
            [x: string]: string;
        };
        bucketOptions?: {
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
        };
        createTime?: Date;
        updateTime?: Date;
        version?: LogMetric_ApiVersion;
    } & {
        name?: string;
        description?: string;
        filter?: string;
        disabled?: boolean;
        metricDescriptor?: {
            name?: string;
            type?: string;
            labels?: {
                key?: string;
                valueType?: import("../../api/label").LabelDescriptor_ValueType;
                description?: string;
            }[];
            metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
            valueType?: import("../../api/metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("../../api/launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            };
            launchStage?: import("../../api/launch_stage").LaunchStage;
            monitoredResourceTypes?: string[];
        } & {
            name?: string;
            type?: string;
            labels?: {
                key?: string;
                valueType?: import("../../api/label").LabelDescriptor_ValueType;
                description?: string;
            }[] & ({
                key?: string;
                valueType?: import("../../api/label").LabelDescriptor_ValueType;
                description?: string;
            } & {
                key?: string;
                valueType?: import("../../api/label").LabelDescriptor_ValueType;
                description?: string;
            } & Record<Exclude<keyof I["metricDescriptor"]["labels"][number], keyof import("../../api/label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["metricDescriptor"]["labels"], keyof {
                key?: string;
                valueType?: import("../../api/label").LabelDescriptor_ValueType;
                description?: string;
            }[]>, never>;
            metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
            valueType?: import("../../api/metric").MetricDescriptor_ValueType;
            unit?: string;
            description?: string;
            displayName?: string;
            metadata?: {
                launchStage?: import("../../api/launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            } & {
                launchStage?: import("../../api/launch_stage").LaunchStage;
                samplePeriod?: string;
                ingestDelay?: string;
            } & Record<Exclude<keyof I["metricDescriptor"]["metadata"], keyof import("../../api/metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
            launchStage?: import("../../api/launch_stage").LaunchStage;
            monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["metricDescriptor"]["monitoredResourceTypes"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["metricDescriptor"], keyof MetricDescriptor>, never>;
        valueExtractor?: string;
        labelExtractors?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["labelExtractors"], string | number>, never>;
        bucketOptions?: {
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
        } & {
            linearBuckets?: {
                numFiniteBuckets?: number;
                width?: number;
                offset?: number;
            } & {
                numFiniteBuckets?: number;
                width?: number;
                offset?: number;
            } & Record<Exclude<keyof I["bucketOptions"]["linearBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Linear>, never>;
            exponentialBuckets?: {
                numFiniteBuckets?: number;
                growthFactor?: number;
                scale?: number;
            } & {
                numFiniteBuckets?: number;
                growthFactor?: number;
                scale?: number;
            } & Record<Exclude<keyof I["bucketOptions"]["exponentialBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Exponential>, never>;
            explicitBuckets?: {
                bounds?: number[];
            } & {
                bounds?: number[] & number[] & Record<Exclude<keyof I["bucketOptions"]["explicitBuckets"]["bounds"], keyof number[]>, never>;
            } & Record<Exclude<keyof I["bucketOptions"]["explicitBuckets"], "bounds">, never>;
        } & Record<Exclude<keyof I["bucketOptions"], keyof Distribution_BucketOptions>, never>;
        createTime?: Date;
        updateTime?: Date;
        version?: LogMetric_ApiVersion;
    } & Record<Exclude<keyof I, keyof LogMetric>, never>>(object: I): LogMetric;
};
export declare const ListLogMetricsRequest: {
    encode(message: ListLogMetricsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLogMetricsRequest;
    fromJSON(object: any): ListLogMetricsRequest;
    toJSON(message: ListLogMetricsRequest): unknown;
    fromPartial<I extends {
        parent?: string;
        pageToken?: string;
        pageSize?: number;
    } & {
        parent?: string;
        pageToken?: string;
        pageSize?: number;
    } & Record<Exclude<keyof I, keyof ListLogMetricsRequest>, never>>(object: I): ListLogMetricsRequest;
};
export declare const ListLogMetricsResponse: {
    encode(message: ListLogMetricsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListLogMetricsResponse;
    fromJSON(object: any): ListLogMetricsResponse;
    toJSON(message: ListLogMetricsResponse): unknown;
    fromPartial<I extends {
        metrics?: {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        }[];
        nextPageToken?: string;
    } & {
        metrics?: {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        }[] & ({
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        } & {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            } & {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["metrics"][number]["metricDescriptor"]["labels"][number], keyof import("../../api/label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["metrics"][number]["metricDescriptor"]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & Record<Exclude<keyof I["metrics"][number]["metricDescriptor"]["metadata"], keyof import("../../api/metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["metrics"][number]["metricDescriptor"]["monitoredResourceTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["metrics"][number]["metricDescriptor"], keyof MetricDescriptor>, never>;
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["metrics"][number]["labelExtractors"], string | number>, never>;
            bucketOptions?: {
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
            } & {
                linearBuckets?: {
                    numFiniteBuckets?: number;
                    width?: number;
                    offset?: number;
                } & {
                    numFiniteBuckets?: number;
                    width?: number;
                    offset?: number;
                } & Record<Exclude<keyof I["metrics"][number]["bucketOptions"]["linearBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Linear>, never>;
                exponentialBuckets?: {
                    numFiniteBuckets?: number;
                    growthFactor?: number;
                    scale?: number;
                } & {
                    numFiniteBuckets?: number;
                    growthFactor?: number;
                    scale?: number;
                } & Record<Exclude<keyof I["metrics"][number]["bucketOptions"]["exponentialBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Exponential>, never>;
                explicitBuckets?: {
                    bounds?: number[];
                } & {
                    bounds?: number[] & number[] & Record<Exclude<keyof I["metrics"][number]["bucketOptions"]["explicitBuckets"]["bounds"], keyof number[]>, never>;
                } & Record<Exclude<keyof I["metrics"][number]["bucketOptions"]["explicitBuckets"], "bounds">, never>;
            } & Record<Exclude<keyof I["metrics"][number]["bucketOptions"], keyof Distribution_BucketOptions>, never>;
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        } & Record<Exclude<keyof I["metrics"][number], keyof LogMetric>, never>)[] & Record<Exclude<keyof I["metrics"], keyof {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        }[]>, never>;
        nextPageToken?: string;
    } & Record<Exclude<keyof I, keyof ListLogMetricsResponse>, never>>(object: I): ListLogMetricsResponse;
};
export declare const GetLogMetricRequest: {
    encode(message: GetLogMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLogMetricRequest;
    fromJSON(object: any): GetLogMetricRequest;
    toJSON(message: GetLogMetricRequest): unknown;
    fromPartial<I extends {
        metricName?: string;
    } & {
        metricName?: string;
    } & Record<Exclude<keyof I, "metricName">, never>>(object: I): GetLogMetricRequest;
};
export declare const CreateLogMetricRequest: {
    encode(message: CreateLogMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateLogMetricRequest;
    fromJSON(object: any): CreateLogMetricRequest;
    toJSON(message: CreateLogMetricRequest): unknown;
    fromPartial<I extends {
        parent?: string;
        metric?: {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        };
    } & {
        parent?: string;
        metric?: {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        } & {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            } & {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["metric"]["metricDescriptor"]["labels"][number], keyof import("../../api/label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["metric"]["metricDescriptor"]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & Record<Exclude<keyof I["metric"]["metricDescriptor"]["metadata"], keyof import("../../api/metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["metric"]["metricDescriptor"]["monitoredResourceTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["metric"]["metricDescriptor"], keyof MetricDescriptor>, never>;
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["metric"]["labelExtractors"], string | number>, never>;
            bucketOptions?: {
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
            } & {
                linearBuckets?: {
                    numFiniteBuckets?: number;
                    width?: number;
                    offset?: number;
                } & {
                    numFiniteBuckets?: number;
                    width?: number;
                    offset?: number;
                } & Record<Exclude<keyof I["metric"]["bucketOptions"]["linearBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Linear>, never>;
                exponentialBuckets?: {
                    numFiniteBuckets?: number;
                    growthFactor?: number;
                    scale?: number;
                } & {
                    numFiniteBuckets?: number;
                    growthFactor?: number;
                    scale?: number;
                } & Record<Exclude<keyof I["metric"]["bucketOptions"]["exponentialBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Exponential>, never>;
                explicitBuckets?: {
                    bounds?: number[];
                } & {
                    bounds?: number[] & number[] & Record<Exclude<keyof I["metric"]["bucketOptions"]["explicitBuckets"]["bounds"], keyof number[]>, never>;
                } & Record<Exclude<keyof I["metric"]["bucketOptions"]["explicitBuckets"], "bounds">, never>;
            } & Record<Exclude<keyof I["metric"]["bucketOptions"], keyof Distribution_BucketOptions>, never>;
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        } & Record<Exclude<keyof I["metric"], keyof LogMetric>, never>;
    } & Record<Exclude<keyof I, keyof CreateLogMetricRequest>, never>>(object: I): CreateLogMetricRequest;
};
export declare const UpdateLogMetricRequest: {
    encode(message: UpdateLogMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLogMetricRequest;
    fromJSON(object: any): UpdateLogMetricRequest;
    toJSON(message: UpdateLogMetricRequest): unknown;
    fromPartial<I extends {
        metricName?: string;
        metric?: {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        };
    } & {
        metricName?: string;
        metric?: {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            };
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            };
            bucketOptions?: {
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
            };
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        } & {
            name?: string;
            description?: string;
            filter?: string;
            disabled?: boolean;
            metricDescriptor?: {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[];
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                };
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[];
            } & {
                name?: string;
                type?: string;
                labels?: {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[] & ({
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                } & {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                } & Record<Exclude<keyof I["metric"]["metricDescriptor"]["labels"][number], keyof import("../../api/label").LabelDescriptor>, never>)[] & Record<Exclude<keyof I["metric"]["metricDescriptor"]["labels"], keyof {
                    key?: string;
                    valueType?: import("../../api/label").LabelDescriptor_ValueType;
                    description?: string;
                }[]>, never>;
                metricKind?: import("../../api/metric").MetricDescriptor_MetricKind;
                valueType?: import("../../api/metric").MetricDescriptor_ValueType;
                unit?: string;
                description?: string;
                displayName?: string;
                metadata?: {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & {
                    launchStage?: import("../../api/launch_stage").LaunchStage;
                    samplePeriod?: string;
                    ingestDelay?: string;
                } & Record<Exclude<keyof I["metric"]["metricDescriptor"]["metadata"], keyof import("../../api/metric").MetricDescriptor_MetricDescriptorMetadata>, never>;
                launchStage?: import("../../api/launch_stage").LaunchStage;
                monitoredResourceTypes?: string[] & string[] & Record<Exclude<keyof I["metric"]["metricDescriptor"]["monitoredResourceTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["metric"]["metricDescriptor"], keyof MetricDescriptor>, never>;
            valueExtractor?: string;
            labelExtractors?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["metric"]["labelExtractors"], string | number>, never>;
            bucketOptions?: {
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
            } & {
                linearBuckets?: {
                    numFiniteBuckets?: number;
                    width?: number;
                    offset?: number;
                } & {
                    numFiniteBuckets?: number;
                    width?: number;
                    offset?: number;
                } & Record<Exclude<keyof I["metric"]["bucketOptions"]["linearBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Linear>, never>;
                exponentialBuckets?: {
                    numFiniteBuckets?: number;
                    growthFactor?: number;
                    scale?: number;
                } & {
                    numFiniteBuckets?: number;
                    growthFactor?: number;
                    scale?: number;
                } & Record<Exclude<keyof I["metric"]["bucketOptions"]["exponentialBuckets"], keyof import("../../api/distribution").Distribution_BucketOptions_Exponential>, never>;
                explicitBuckets?: {
                    bounds?: number[];
                } & {
                    bounds?: number[] & number[] & Record<Exclude<keyof I["metric"]["bucketOptions"]["explicitBuckets"]["bounds"], keyof number[]>, never>;
                } & Record<Exclude<keyof I["metric"]["bucketOptions"]["explicitBuckets"], "bounds">, never>;
            } & Record<Exclude<keyof I["metric"]["bucketOptions"], keyof Distribution_BucketOptions>, never>;
            createTime?: Date;
            updateTime?: Date;
            version?: LogMetric_ApiVersion;
        } & Record<Exclude<keyof I["metric"], keyof LogMetric>, never>;
    } & Record<Exclude<keyof I, keyof UpdateLogMetricRequest>, never>>(object: I): UpdateLogMetricRequest;
};
export declare const DeleteLogMetricRequest: {
    encode(message: DeleteLogMetricRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteLogMetricRequest;
    fromJSON(object: any): DeleteLogMetricRequest;
    toJSON(message: DeleteLogMetricRequest): unknown;
    fromPartial<I extends {
        metricName?: string;
    } & {
        metricName?: string;
    } & Record<Exclude<keyof I, "metricName">, never>>(object: I): DeleteLogMetricRequest;
};
