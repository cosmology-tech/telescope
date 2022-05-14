import * as _m0 from "protobufjs/minimal";
/**
 * Billing related configuration of the service.
 *
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 *
 *
 * monitored_resources:
 * - type: library.googleapis.com/billing_branch
 * labels:
 * - key: cloud.googleapis.com/location
 * description: |
 * Predefined label to support billing location restriction.
 * - key: city
 * description: |
 * Custom label to define the city where the library branch is located
 * in.
 * - key: name
 * description: Custom label to define the name of the library branch.
 * metrics:
 * - name: library.googleapis.com/book/borrowed_count
 * metric_kind: DELTA
 * value_type: INT64
 * unit: "1"
 * billing:
 * consumer_destinations:
 * - monitored_resource: library.googleapis.com/billing_branch
 * metrics:
 * - library.googleapis.com/book/borrowed_count
 */
export interface Billing {
    /**
     * Billing configurations for sending metrics to the consumer project.
     * There can be multiple consumer destinations per service, each one must have
     * a different monitored resource type. A metric can be used in at most
     * one consumer destination.
     */
    consumerDestinations: Billing_BillingDestination[];
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestination {
    /**
     * The monitored resource type. The type must be defined in
     * [Service.monitored_resources][google.api.Service.monitored_resources] section.
     */
    monitoredResource: string;
    /**
     * Names of the metrics to report to this billing destination.
     * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
     */
    metrics: string[];
}
export declare const Billing: {
    encode(message: Billing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Billing;
    fromJSON(object: any): Billing;
    toJSON(message: Billing): unknown;
    fromPartial<I extends {
        consumerDestinations?: {
            monitoredResource?: string;
            metrics?: string[];
        }[];
    } & {
        consumerDestinations?: {
            monitoredResource?: string;
            metrics?: string[];
        }[] & ({
            monitoredResource?: string;
            metrics?: string[];
        } & {
            monitoredResource?: string;
            metrics?: string[] & string[] & Record<Exclude<keyof I["consumerDestinations"][number]["metrics"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["consumerDestinations"][number], keyof Billing_BillingDestination>, never>)[] & Record<Exclude<keyof I["consumerDestinations"], keyof {
            monitoredResource?: string;
            metrics?: string[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "consumerDestinations">, never>>(object: I): Billing;
};
export declare const Billing_BillingDestination: {
    encode(message: Billing_BillingDestination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Billing_BillingDestination;
    fromJSON(object: any): Billing_BillingDestination;
    toJSON(message: Billing_BillingDestination): unknown;
    fromPartial<I extends {
        monitoredResource?: string;
        metrics?: string[];
    } & {
        monitoredResource?: string;
        metrics?: string[] & string[] & Record<Exclude<keyof I["metrics"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof Billing_BillingDestination>, never>>(object: I): Billing_BillingDestination;
};
