import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { MetricValueSet } from "../../../../google/api/servicecontrol/v1/metric_value";
import { LogEntry } from "../../../../google/api/servicecontrol/v1/log_entry";
import { Any } from "../../../../google/protobuf/any";
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
     *     - project:PROJECT_ID,
     *     - project`_`number:PROJECT_NUMBER,
     *     - projects/PROJECT_ID or PROJECT_NUMBER,
     *     - folders/FOLDER_NUMBER,
     *     - organizations/ORGANIZATION_NUMBER,
     *     - api`_`key:API_KEY.
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
     *   the service configuration.
     * - Default labels of metric values. When specified, labels defined in the
     *   metric value override these default.
     * - The following labels defined by Google Cloud Platform:
     *     - `cloud.googleapis.com/location` describing the location where the
     *        operation happened,
     *     - `servicecontrol.googleapis.com/user_agent` describing the user agent
     *        of the API request,
     *     - `servicecontrol.googleapis.com/service_agent` describing the service
     *        used to handle the API request (e.g. ESP),
     *     - `servicecontrol.googleapis.com/platform` describing the platform
     *        where the API is served, such as App Engine, Compute Engine, or
     *        Kubernetes Engine.
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
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial<I extends unknown>(object: I): Operation;
};
export declare const Operation_LabelsEntry: {
    encode(message: Operation_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation_LabelsEntry;
    fromJSON(object: any): Operation_LabelsEntry;
    toJSON(message: Operation_LabelsEntry): unknown;
    fromPartial<I extends unknown>(object: I): Operation_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
