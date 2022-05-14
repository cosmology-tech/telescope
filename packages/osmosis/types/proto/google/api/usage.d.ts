import * as _m0 from "protobufjs/minimal";
/** Configuration controlling usage of a service. */
export interface Usage {
    /**
     * Requirements that must be satisfied before a consumer project can use the
     * service. Each requirement is of the form <service.name>/<requirement-id>;
     * for example 'serviceusage.googleapis.com/billing-enabled'.
     *
     * For Google APIs, a Terms of Service requirement must be included here.
     * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
     * Other Google APIs should include
     * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
     * included based on the business needs.
     */
    requirements: string[];
    /**
     * A list of usage rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules: UsageRule[];
    /**
     * The full resource name of a channel used for sending notifications to the
     * service producer.
     *
     * Google Service Management currently only supports
     * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
     * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
     * documented in https://cloud.google.com/pubsub/docs/overview.
     */
    producerNotificationChannel: string;
}
/**
 * Usage configuration rules for the service.
 *
 * NOTE: Under development.
 *
 *
 * Use this rule to configure unregistered calls for the service. Unregistered
 * calls are calls that do not contain consumer project identity.
 * (Example: calls that do not contain an API key).
 * By default, API methods do not allow unregistered calls, and each method call
 * must be identified by a consumer project identity. Use this rule to
 * allow/disallow unregistered calls.
 *
 * Example of an API that wants to allow unregistered calls for entire service.
 *
 * usage:
 * rules:
 * - selector: "*"
 * allow_unregistered_calls: true
 *
 * Example of a method that wants to allow unregistered calls.
 *
 * usage:
 * rules:
 * - selector: "google.example.library.v1.LibraryService.CreateBook"
 * allow_unregistered_calls: true
 */
export interface UsageRule {
    /**
     * Selects the methods to which this rule applies. Use '*' to indicate all
     * methods in all APIs.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector: string;
    /**
     * If true, the selected method allows unregistered calls, e.g. calls
     * that don't identify any user or application.
     */
    allowUnregisteredCalls: boolean;
    /**
     * If true, the selected method should skip service control and the control
     * plane features, such as quota and billing, will not be available.
     * This flag is used by Google Cloud Endpoints to bypass checks for internal
     * methods, such as service health check methods.
     */
    skipServiceControl: boolean;
}
export declare const Usage: {
    encode(message: Usage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Usage;
    fromJSON(object: any): Usage;
    toJSON(message: Usage): unknown;
    fromPartial<I extends {
        requirements?: string[];
        rules?: {
            selector?: string;
            allowUnregisteredCalls?: boolean;
            skipServiceControl?: boolean;
        }[];
        producerNotificationChannel?: string;
    } & {
        requirements?: string[] & string[] & Record<Exclude<keyof I["requirements"], keyof string[]>, never>;
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
        } & Record<Exclude<keyof I["rules"][number], keyof UsageRule>, never>)[] & Record<Exclude<keyof I["rules"], keyof {
            selector?: string;
            allowUnregisteredCalls?: boolean;
            skipServiceControl?: boolean;
        }[]>, never>;
        producerNotificationChannel?: string;
    } & Record<Exclude<keyof I, keyof Usage>, never>>(object: I): Usage;
};
export declare const UsageRule: {
    encode(message: UsageRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UsageRule;
    fromJSON(object: any): UsageRule;
    toJSON(message: UsageRule): unknown;
    fromPartial<I extends {
        selector?: string;
        allowUnregisteredCalls?: boolean;
        skipServiceControl?: boolean;
    } & {
        selector?: string;
        allowUnregisteredCalls?: boolean;
        skipServiceControl?: boolean;
    } & Record<Exclude<keyof I, keyof UsageRule>, never>>(object: I): UsageRule;
};
