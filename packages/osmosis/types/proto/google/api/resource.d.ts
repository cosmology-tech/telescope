import * as _m0 from "protobufjs/minimal";
/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 */
export declare enum ResourceDescriptor_History {
    /** HISTORY_UNSPECIFIED - The "unset" value. */
    HISTORY_UNSPECIFIED = 0,
    /**
     * ORIGINALLY_SINGLE_PATTERN - The resource originally had one pattern and launched as such, and
     * additional patterns were added later.
     */
    ORIGINALLY_SINGLE_PATTERN = 1,
    /**
     * FUTURE_MULTI_PATTERN - The resource has one pattern, but the API owner expects to add more
     * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
     * that from being necessary once there are multiple patterns.)
     */
    FUTURE_MULTI_PATTERN = 2,
    UNRECOGNIZED = -1
}
export declare function resourceDescriptor_HistoryFromJSON(object: any): ResourceDescriptor_History;
export declare function resourceDescriptor_HistoryToJSON(object: ResourceDescriptor_History): string;
/** A flag representing a specific style that a resource claims to conform to. */
export declare enum ResourceDescriptor_Style {
    /** STYLE_UNSPECIFIED - The unspecified value. Do not use. */
    STYLE_UNSPECIFIED = 0,
    /**
     * DECLARATIVE_FRIENDLY - This resource is intended to be "declarative-friendly".
     *
     * Declarative-friendly resources must be more strictly consistent, and
     * setting this to true communicates to tools that this resource should
     * adhere to declarative-friendly expectations.
     *
     * Note: This is used by the API linter (linter.aip.dev) to enable
     * additional checks.
     */
    DECLARATIVE_FRIENDLY = 1,
    UNRECOGNIZED = -1
}
export declare function resourceDescriptor_StyleFromJSON(object: any): ResourceDescriptor_Style;
export declare function resourceDescriptor_StyleToJSON(object: ResourceDescriptor_Style): string;
/**
 * A simple descriptor of a resource type.
 *
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 *
 * Example:
 *
 * message Topic {
 * // Indicates this message defines a resource schema.
 * // Declares the resource type in the format of {service}/{kind}.
 * // For Kubernetes resources, the format is {api group}/{kind}.
 * option (google.api.resource) = {
 * type: "pubsub.googleapis.com/Topic"
 * pattern: "projects/{project}/topics/{topic}"
 * };
 * }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 * resources:
 * - type: "pubsub.googleapis.com/Topic"
 * pattern: "projects/{project}/topics/{topic}"
 *
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 *
 * Example:
 *
 * message LogEntry {
 * option (google.api.resource) = {
 * type: "logging.googleapis.com/LogEntry"
 * pattern: "projects/{project}/logs/{log}"
 * pattern: "folders/{folder}/logs/{log}"
 * pattern: "organizations/{organization}/logs/{log}"
 * pattern: "billingAccounts/{billing_account}/logs/{log}"
 * };
 * }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 * resources:
 * - type: 'logging.googleapis.com/LogEntry'
 * pattern: "projects/{project}/logs/{log}"
 * pattern: "folders/{folder}/logs/{log}"
 * pattern: "organizations/{organization}/logs/{log}"
 * pattern: "billingAccounts/{billing_account}/logs/{log}"
 */
export interface ResourceDescriptor {
    /**
     * The resource type. It must be in the format of
     * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
     * singular and must not include version numbers.
     *
     * Example: `storage.googleapis.com/Bucket`
     *
     * The value of the resource_type_kind must follow the regular expression
     * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
     * should use PascalCase (UpperCamelCase). The maximum number of
     * characters allowed for the `resource_type_kind` is 100.
     */
    type: string;
    /**
     * Optional. The relative resource name pattern associated with this resource
     * type. The DNS prefix of the full resource name shouldn't be specified here.
     *
     * The path pattern must follow the syntax, which aligns with HTTP binding
     * syntax:
     *
     * Template = Segment { "/" Segment } ;
     * Segment = LITERAL | Variable ;
     * Variable = "{" LITERAL "}" ;
     *
     * Examples:
     *
     * - "projects/{project}/topics/{topic}"
     * - "projects/{project}/knowledgeBases/{knowledge_base}"
     *
     * The components in braces correspond to the IDs for each resource in the
     * hierarchy. It is expected that, if multiple patterns are provided,
     * the same component name (e.g. "project") refers to IDs of the same
     * type of resource.
     */
    pattern: string[];
    /**
     * Optional. The field on the resource that designates the resource name
     * field. If omitted, this is assumed to be "name".
     */
    nameField: string;
    /**
     * Optional. The historical or future-looking state of the resource pattern.
     *
     * Example:
     *
     * // The InspectTemplate message originally only supported resource
     * // names with organization, and project was added later.
     * message InspectTemplate {
     * option (google.api.resource) = {
     * type: "dlp.googleapis.com/InspectTemplate"
     * pattern:
     * "organizations/{organization}/inspectTemplates/{inspect_template}"
     * pattern: "projects/{project}/inspectTemplates/{inspect_template}"
     * history: ORIGINALLY_SINGLE_PATTERN
     * };
     * }
     */
    history: ResourceDescriptor_History;
    /**
     * The plural name used in the resource name and permission names, such as
     * 'projects' for the resource name of 'projects/{project}' and the permission
     * name of 'cloudresourcemanager.googleapis.com/projects.get'. It is the same
     * concept of the `plural` field in k8s CRD spec
     * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
     *
     * Note: The plural form is required even for singleton resources. See
     * https://aip.dev/156
     */
    plural: string;
    /**
     * The same concept of the `singular` field in k8s CRD spec
     * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
     * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
     */
    singular: string;
    /**
     * Style flag(s) for this resource.
     * These indicate that a resource is expected to conform to a given
     * style. See the specific style flags for additional information.
     */
    style: ResourceDescriptor_Style[];
}
/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 */
export interface ResourceReference {
    /**
     * The resource type that the annotated field references.
     *
     * Example:
     *
     * message Subscription {
     * string topic = 2 [(google.api.resource_reference) = {
     * type: "pubsub.googleapis.com/Topic"
     * }];
     * }
     *
     * Occasionally, a field may reference an arbitrary resource. In this case,
     * APIs use the special value * in their resource reference.
     *
     * Example:
     *
     * message GetIamPolicyRequest {
     * string resource = 2 [(google.api.resource_reference) = {
     * type: "*"
     * }];
     * }
     */
    type: string;
    /**
     * The resource type of a child collection that the annotated field
     * references. This is useful for annotating the `parent` field that
     * doesn't have a fixed resource type.
     *
     * Example:
     *
     * message ListLogEntriesRequest {
     * string parent = 1 [(google.api.resource_reference) = {
     * child_type: "logging.googleapis.com/LogEntry"
     * };
     * }
     */
    childType: string;
}
export declare const ResourceDescriptor: {
    encode(message: ResourceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDescriptor;
    fromJSON(object: any): ResourceDescriptor;
    toJSON(message: ResourceDescriptor): unknown;
    fromPartial<I extends {
        type?: string;
        pattern?: string[];
        nameField?: string;
        history?: ResourceDescriptor_History;
        plural?: string;
        singular?: string;
        style?: ResourceDescriptor_Style[];
    } & {
        type?: string;
        pattern?: string[] & string[] & Record<Exclude<keyof I["pattern"], keyof string[]>, never>;
        nameField?: string;
        history?: ResourceDescriptor_History;
        plural?: string;
        singular?: string;
        style?: ResourceDescriptor_Style[] & ResourceDescriptor_Style[] & Record<Exclude<keyof I["style"], keyof ResourceDescriptor_Style[]>, never>;
    } & Record<Exclude<keyof I, keyof ResourceDescriptor>, never>>(object: I): ResourceDescriptor;
};
export declare const ResourceReference: {
    encode(message: ResourceReference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceReference;
    fromJSON(object: any): ResourceReference;
    toJSON(message: ResourceReference): unknown;
    fromPartial<I extends {
        type?: string;
        childType?: string;
    } & {
        type?: string;
        childType?: string;
    } & Record<Exclude<keyof I, keyof ResourceReference>, never>>(object: I): ResourceReference;
};
