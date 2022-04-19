import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Operation } from "../../../../google/api/servicecontrol/v1/operation";
import { Status } from "../../../../google/rpc/status";
import { CheckError } from "../../../../google/api/servicecontrol/v1/check_error";
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
     *    list indicates a complete success where all `Operations` in the
     *    request are processed successfully.
     * 2. The combination of a successful RPC status and a non-empty
     *    `report_errors` list indicates a partial success where some
     *    `Operations` in the request succeeded. Each
     *    `Operation` that failed processing has a corresponding item
     *    in this list.
     * 3. A failed RPC status indicates a general non-deterministic failure.
     *    When this happens, it's impossible to know which of the
     *    'Operations' in the request succeeded or failed.
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
    fromPartial<I extends unknown>(object: I): CheckRequest;
};
export declare const CheckResponse: {
    encode(message: CheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse;
    fromJSON(object: any): CheckResponse;
    toJSON(message: CheckResponse): unknown;
    fromPartial<I extends unknown>(object: I): CheckResponse;
};
export declare const CheckResponse_CheckInfo: {
    encode(message: CheckResponse_CheckInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_CheckInfo;
    fromJSON(object: any): CheckResponse_CheckInfo;
    toJSON(message: CheckResponse_CheckInfo): unknown;
    fromPartial<I extends unknown>(object: I): CheckResponse_CheckInfo;
};
export declare const CheckResponse_ConsumerInfo: {
    encode(message: CheckResponse_ConsumerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_ConsumerInfo;
    fromJSON(object: any): CheckResponse_ConsumerInfo;
    toJSON(message: CheckResponse_ConsumerInfo): unknown;
    fromPartial<I extends unknown>(object: I): CheckResponse_ConsumerInfo;
};
export declare const ReportRequest: {
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial<I extends unknown>(object: I): ReportRequest;
};
export declare const ReportResponse: {
    encode(message: ReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse;
    fromJSON(object: any): ReportResponse;
    toJSON(message: ReportResponse): unknown;
    fromPartial<I extends unknown>(object: I): ReportResponse;
};
export declare const ReportResponse_ReportError: {
    encode(message: ReportResponse_ReportError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse_ReportError;
    fromJSON(object: any): ReportResponse_ReportError;
    toJSON(message: ReportResponse_ReportError): unknown;
    fromPartial<I extends unknown>(object: I): ReportResponse_ReportError;
};
/**
 * [Google Service Control API](/service-control/overview)
 *
 * Lets clients check and report operations against a [managed
 * service](https://cloud.google.com/service-management/reference/rpc/google.api/servicemanagement.v1#google.api.servicemanagement.v1.ManagedService).
 */
export interface ServiceController {
    /**
     * Checks whether an operation on a service should be allowed to proceed
     * based on the configuration of the service and related policies. It must be
     * called before the operation is executed.
     *
     * If feasible, the client should cache the check results and reuse them for
     * 60 seconds. In case of any server errors, the client should rely on the
     * cached results for much longer time to avoid outage.
     * WARNING: There is general 60s delay for the configuration and policy
     * propagation, therefore callers MUST NOT depend on the `Check` method having
     * the latest policy information.
     *
     * NOTE: the [CheckRequest][google.api.servicecontrol.v1.CheckRequest] has
     * the size limit (wire-format byte size) of 1MB.
     *
     * This method requires the `servicemanagement.services.check` permission
     * on the specified service. For more information, see
     * [Cloud IAM](https://cloud.google.com/iam).
     */
    Check(request: CheckRequest): Promise<CheckResponse>;
    /**
     * Reports operation results to Google Service Control, such as logs and
     * metrics. It should be called after an operation is completed.
     *
     * If feasible, the client should aggregate reporting data for up to 5
     * seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
     * reduce data loss during client crashes. Clients should carefully choose
     * the aggregation time window to avoid data loss risk more than 0.01%
     * for business and compliance reasons.
     *
     * NOTE: the [ReportRequest][google.api.servicecontrol.v1.ReportRequest] has
     * the size limit (wire-format byte size) of 1MB.
     *
     * This method requires the `servicemanagement.services.report` permission
     * on the specified service. For more information, see
     * [Google Cloud IAM](https://cloud.google.com/iam).
     */
    Report(request: ReportRequest): Promise<ReportResponse>;
}
export declare class ServiceControllerClientImpl implements ServiceController {
    private readonly rpc;
    constructor(rpc: Rpc);
    Check(request: CheckRequest): Promise<CheckResponse>;
    Report(request: ReportRequest): Promise<ReportResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
