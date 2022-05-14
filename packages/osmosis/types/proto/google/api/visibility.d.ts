import * as _m0 from "protobufjs/minimal";
/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 *
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 *
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 *
 * Example:
 *
 * visibility:
 * rules:
 * - selector: google.calendar.Calendar.EnhancedSearch
 * restriction: PREVIEW
 * - selector: google.calendar.Calendar.Delegate
 * restriction: INTERNAL
 *
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
    /**
     * A list of visibility rules that apply to individual API elements.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules: VisibilityRule[];
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
    /**
     * Selects methods, messages, fields, enums, etc. to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector: string;
    /**
     * A comma-separated list of visibility labels that apply to the `selector`.
     * Any of the listed labels can be used to grant the visibility.
     *
     * If a rule has multiple labels, removing one of the labels but not all of
     * them can break clients.
     *
     * Example:
     *
     * visibility:
     * rules:
     * - selector: google.calendar.Calendar.EnhancedSearch
     * restriction: INTERNAL, PREVIEW
     *
     * Removing INTERNAL from this restriction will break clients that rely on
     * this method and only had access to it through INTERNAL.
     */
    restriction: string;
}
export declare const Visibility: {
    encode(message: Visibility, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Visibility;
    fromJSON(object: any): Visibility;
    toJSON(message: Visibility): unknown;
    fromPartial<I extends {
        rules?: {
            selector?: string;
            restriction?: string;
        }[];
    } & {
        rules?: {
            selector?: string;
            restriction?: string;
        }[] & ({
            selector?: string;
            restriction?: string;
        } & {
            selector?: string;
            restriction?: string;
        } & Record<Exclude<keyof I["rules"][number], keyof VisibilityRule>, never>)[] & Record<Exclude<keyof I["rules"], keyof {
            selector?: string;
            restriction?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "rules">, never>>(object: I): Visibility;
};
export declare const VisibilityRule: {
    encode(message: VisibilityRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VisibilityRule;
    fromJSON(object: any): VisibilityRule;
    toJSON(message: VisibilityRule): unknown;
    fromPartial<I extends {
        selector?: string;
        restriction?: string;
    } & {
        selector?: string;
        restriction?: string;
    } & Record<Exclude<keyof I, keyof VisibilityRule>, never>>(object: I): VisibilityRule;
};
