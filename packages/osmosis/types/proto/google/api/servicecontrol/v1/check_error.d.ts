import { Status } from "../../../rpc/status";
import * as _m0 from "protobufjs/minimal";
/** Error codes for Check responses. */
export declare enum CheckError_Code {
    /** ERROR_CODE_UNSPECIFIED - This is never used in `CheckResponse`. */
    ERROR_CODE_UNSPECIFIED = 0,
    /**
     * NOT_FOUND - The consumer's project id, network container, or resource container was
     * not found. Same as [google.rpc.Code.NOT_FOUND][google.rpc.Code.NOT_FOUND].
     */
    NOT_FOUND = 5,
    /**
     * PERMISSION_DENIED - The consumer doesn't have access to the specified resource.
     * Same as [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
     */
    PERMISSION_DENIED = 7,
    /** RESOURCE_EXHAUSTED - Quota check failed. Same as [google.rpc.Code.RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED]. */
    RESOURCE_EXHAUSTED = 8,
    /** SERVICE_NOT_ACTIVATED - The consumer hasn't activated the service. */
    SERVICE_NOT_ACTIVATED = 104,
    /** BILLING_DISABLED - The consumer cannot access the service because billing is disabled. */
    BILLING_DISABLED = 107,
    /** PROJECT_DELETED - The consumer's project has been marked as deleted (soft deletion). */
    PROJECT_DELETED = 108,
    /** PROJECT_INVALID - The consumer's project number or id does not represent a valid project. */
    PROJECT_INVALID = 114,
    /**
     * CONSUMER_INVALID - The input consumer info does not represent a valid consumer folder or
     * organization.
     */
    CONSUMER_INVALID = 125,
    /**
     * IP_ADDRESS_BLOCKED - The IP address of the consumer is invalid for the specific consumer
     * project.
     */
    IP_ADDRESS_BLOCKED = 109,
    /**
     * REFERER_BLOCKED - The referer address of the consumer request is invalid for the specific
     * consumer project.
     */
    REFERER_BLOCKED = 110,
    /**
     * CLIENT_APP_BLOCKED - The client application of the consumer request is invalid for the
     * specific consumer project.
     */
    CLIENT_APP_BLOCKED = 111,
    /**
     * API_TARGET_BLOCKED - The API targeted by this request is invalid for the specified consumer
     * project.
     */
    API_TARGET_BLOCKED = 122,
    /** API_KEY_INVALID - The consumer's API key is invalid. */
    API_KEY_INVALID = 105,
    /** API_KEY_EXPIRED - The consumer's API Key has expired. */
    API_KEY_EXPIRED = 112,
    /** API_KEY_NOT_FOUND - The consumer's API Key was not found in config record. */
    API_KEY_NOT_FOUND = 113,
    /** INVALID_CREDENTIAL - The credential in the request can not be verified. */
    INVALID_CREDENTIAL = 123,
    /** NAMESPACE_LOOKUP_UNAVAILABLE - The backend server for looking up project id/number is unavailable. */
    NAMESPACE_LOOKUP_UNAVAILABLE = 300,
    /** SERVICE_STATUS_UNAVAILABLE - The backend server for checking service status is unavailable. */
    SERVICE_STATUS_UNAVAILABLE = 301,
    /** BILLING_STATUS_UNAVAILABLE - The backend server for checking billing status is unavailable. */
    BILLING_STATUS_UNAVAILABLE = 302,
    /** CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE - Cloud Resource Manager backend server is unavailable. */
    CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE = 305,
    UNRECOGNIZED = -1
}
export declare function checkError_CodeFromJSON(object: any): CheckError_Code;
export declare function checkError_CodeToJSON(object: CheckError_Code): string;
/**
 * Defines the errors to be returned in
 * [google.api.servicecontrol.v1.CheckResponse.check_errors][google.api.servicecontrol.v1.CheckResponse.check_errors].
 */
export interface CheckError {
    /** The error code. */
    code: CheckError_Code;
    /**
     * Subject to whom this error applies. See the specific code enum for more
     * details on this field. For example:
     *
     * - "project:<project-id or project-number>"
     * - "folder:<folder-id>"
     * - "organization:<organization-id>"
     */
    subject: string;
    /** Free-form text providing details on the error cause of the error. */
    detail: string;
    /**
     * Contains public information about the check error. If available,
     * `status.code` will be non zero and client can propagate it out as public
     * error.
     */
    status: Status;
}
export declare const CheckError: {
    encode(message: CheckError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckError;
    fromJSON(object: any): CheckError;
    toJSON(message: CheckError): unknown;
    fromPartial<I extends {
        code?: CheckError_Code;
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
        code?: CheckError_Code;
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
    } & Record<Exclude<keyof I, keyof CheckError>, never>>(object: I): CheckError;
};
