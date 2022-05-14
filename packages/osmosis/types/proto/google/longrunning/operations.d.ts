import { Any } from "../protobuf/any";
import { Status } from "../rpc/status";
import * as _m0 from "protobufjs/minimal";
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Operation {
    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name: string;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata: Any;
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done: boolean;
    /** The error result of the operation in case of failure or cancellation. */
    error?: Status;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx`
     * is the original method name.  For example, if the original method name
     * is `TakeSnapshot()`, the inferred response type is
     * `TakeSnapshotResponse`.
     */
    response?: Any;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
    /** The name of the operation resource. */
    name: string;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
    /** The name of the operation's parent resource. */
    name: string;
    /** The standard list filter. */
    filter: string;
    /** The standard list page size. */
    pageSize: number;
    /** The standard list page token. */
    pageToken: string;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
    /** A list of operations that matches the specified filter in the request. */
    operations: Operation[];
    /** The standard List next-page token. */
    nextPageToken: string;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
    /** The name of the operation resource to be cancelled. */
    name: string;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
    /** The name of the operation resource to be deleted. */
    name: string;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
    /** The name of the operation resource to wait on. */
    name: string;
    /**
     * The maximum duration to wait before timing out. If left blank, the wait
     * will be at most the time permitted by the underlying HTTP/RPC protocol.
     * If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout: string;
}
/**
 * A message representing the message types used by a long-running operation.
 *
 * Example:
 *
 * rpc LongRunningRecognize(LongRunningRecognizeRequest)
 * returns (google.longrunning.Operation) {
 * option (google.longrunning.operation_info) = {
 * response_type: "LongRunningRecognizeResponse"
 * metadata_type: "LongRunningRecognizeMetadata"
 * };
 * }
 */
export interface OperationInfo {
    /**
     * Required. The message name of the primary return type for this
     * long-running operation.
     * This type will be used to deserialize the LRO's response.
     *
     * If the response is in a different package from the rpc, a fully-qualified
     * message name must be used (e.g. `google.protobuf.Struct`).
     *
     * Note: Altering this value constitutes a breaking change.
     */
    responseType: string;
    /**
     * Required. The message name of the metadata type for this long-running
     * operation.
     *
     * If the response is in a different package from the rpc, a fully-qualified
     * message name must be used (e.g. `google.protobuf.Struct`).
     *
     * Note: Altering this value constitutes a breaking change.
     */
    metadataType: string;
}
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial<I extends {
        name?: string;
        metadata?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        done?: boolean;
        error?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
        response?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        name?: string;
        metadata?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["metadata"], keyof Any>, never>;
        done?: boolean;
        error?: {
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
            } & Record<Exclude<keyof I["error"]["details"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["error"]["details"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["error"], keyof Status>, never>;
        response?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["response"], keyof Any>, never>;
    } & Record<Exclude<keyof I, keyof Operation>, never>>(object: I): Operation;
};
export declare const GetOperationRequest: {
    encode(message: GetOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest;
    fromJSON(object: any): GetOperationRequest;
    toJSON(message: GetOperationRequest): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): GetOperationRequest;
};
export declare const ListOperationsRequest: {
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial<I extends {
        name?: string;
        filter?: string;
        pageSize?: number;
        pageToken?: string;
    } & {
        name?: string;
        filter?: string;
        pageSize?: number;
        pageToken?: string;
    } & Record<Exclude<keyof I, keyof ListOperationsRequest>, never>>(object: I): ListOperationsRequest;
};
export declare const ListOperationsResponse: {
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial<I extends {
        operations?: {
            name?: string;
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            done?: boolean;
            error?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            response?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        nextPageToken?: string;
    } & {
        operations?: {
            name?: string;
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            done?: boolean;
            error?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            response?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            done?: boolean;
            error?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            response?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], keyof Any>, never>;
            done?: boolean;
            error?: {
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
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], keyof {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["operations"][number]["error"], keyof Status>, never>;
            response?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["operations"][number]["response"], keyof Any>, never>;
        } & Record<Exclude<keyof I["operations"][number], keyof Operation>, never>)[] & Record<Exclude<keyof I["operations"], keyof {
            name?: string;
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            done?: boolean;
            error?: {
                code?: number;
                message?: string;
                details?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            };
            response?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        nextPageToken?: string;
    } & Record<Exclude<keyof I, keyof ListOperationsResponse>, never>>(object: I): ListOperationsResponse;
};
export declare const CancelOperationRequest: {
    encode(message: CancelOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest;
    fromJSON(object: any): CancelOperationRequest;
    toJSON(message: CancelOperationRequest): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): CancelOperationRequest;
};
export declare const DeleteOperationRequest: {
    encode(message: DeleteOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOperationRequest;
    fromJSON(object: any): DeleteOperationRequest;
    toJSON(message: DeleteOperationRequest): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): DeleteOperationRequest;
};
export declare const WaitOperationRequest: {
    encode(message: WaitOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WaitOperationRequest;
    fromJSON(object: any): WaitOperationRequest;
    toJSON(message: WaitOperationRequest): unknown;
    fromPartial<I extends {
        name?: string;
        timeout?: string;
    } & {
        name?: string;
        timeout?: string;
    } & Record<Exclude<keyof I, keyof WaitOperationRequest>, never>>(object: I): WaitOperationRequest;
};
export declare const OperationInfo: {
    encode(message: OperationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationInfo;
    fromJSON(object: any): OperationInfo;
    toJSON(message: OperationInfo): unknown;
    fromPartial<I extends {
        responseType?: string;
        metadataType?: string;
    } & {
        responseType?: string;
        metadataType?: string;
    } & Record<Exclude<keyof I, keyof OperationInfo>, never>>(object: I): OperationInfo;
};
