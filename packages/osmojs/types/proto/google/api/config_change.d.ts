import * as _m0 from "protobufjs/minimal";
/**
 * Classifies set of possible modifications to an object in the service
 * configuration.
 */
export declare enum ChangeType {
    /** CHANGE_TYPE_UNSPECIFIED - No value was provided. */
    CHANGE_TYPE_UNSPECIFIED = 0,
    /**
     * ADDED - The changed object exists in the 'new' service configuration, but not
     * in the 'old' service configuration.
     */
    ADDED = 1,
    /**
     * REMOVED - The changed object exists in the 'old' service configuration, but not
     * in the 'new' service configuration.
     */
    REMOVED = 2,
    /**
     * MODIFIED - The changed object exists in both service configurations, but its value
     * is different.
     */
    MODIFIED = 3,
    UNRECOGNIZED = -1
}
export declare function changeTypeFromJSON(object: any): ChangeType;
export declare function changeTypeToJSON(object: ChangeType): string;
/**
 * Output generated from semantically comparing two versions of a service
 * configuration.
 *
 * Includes detailed information about a field that have changed with
 * applicable advice about potential consequences for the change, such as
 * backwards-incompatibility.
 */
export interface ConfigChange {
    /**
     * Object hierarchy path to the change, with levels separated by a '.'
     * character. For repeated fields, an applicable unique identifier field is
     * used for the index (usually selector, name, or id). For maps, the term
     * 'key' is used. If the field has no unique identifier, the numeric index
     * is used.
     * Examples:
     * - visibility.rules[selector=="google.LibraryService.ListBooks"].restriction
     * - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value
     * - logging.producer_destinations[0]
     */
    element: string;
    /**
     * Value of the changed object in the old Service configuration,
     * in JSON format. This field will not be populated if ChangeType == ADDED.
     */
    oldValue: string;
    /**
     * Value of the changed object in the new Service configuration,
     * in JSON format. This field will not be populated if ChangeType == REMOVED.
     */
    newValue: string;
    /** The type for this change, either ADDED, REMOVED, or MODIFIED. */
    changeType: ChangeType;
    /**
     * Collection of advice provided for this change, useful for determining the
     * possible impact of this change.
     */
    advices: Advice[];
}
/**
 * Generated advice about this change, used for providing more
 * information about how a change will affect the existing service.
 */
export interface Advice {
    /**
     * Useful description for why this advice was applied and what actions should
     * be taken to mitigate any implied risks.
     */
    description: string;
}
export declare const ConfigChange: {
    encode(message: ConfigChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigChange;
    fromJSON(object: any): ConfigChange;
    toJSON(message: ConfigChange): unknown;
    fromPartial<I extends {
        element?: string;
        oldValue?: string;
        newValue?: string;
        changeType?: ChangeType;
        advices?: {
            description?: string;
        }[];
    } & {
        element?: string;
        oldValue?: string;
        newValue?: string;
        changeType?: ChangeType;
        advices?: {
            description?: string;
        }[] & ({
            description?: string;
        } & {
            description?: string;
        } & Record<Exclude<keyof I["advices"][number], "description">, never>)[] & Record<Exclude<keyof I["advices"], keyof {
            description?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ConfigChange>, never>>(object: I): ConfigChange;
};
export declare const Advice: {
    encode(message: Advice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Advice;
    fromJSON(object: any): Advice;
    toJSON(message: Advice): unknown;
    fromPartial<I extends {
        description?: string;
    } & {
        description?: string;
    } & Record<Exclude<keyof I, "description">, never>>(object: I): Advice;
};
