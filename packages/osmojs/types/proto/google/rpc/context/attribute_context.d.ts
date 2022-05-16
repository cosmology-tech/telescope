import { Struct } from "../../protobuf/struct";
import { Any } from "../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * This message defines the standard attribute vocabulary for Google APIs.
 *
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 *
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 *
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 *
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface AttributeContext {
    /**
     * The origin of a network activity. In a multi hop network activity,
     * the origin represents the sender of the first hop. For the first hop,
     * the `source` and the `origin` must have the same content.
     */
    origin: AttributeContext_Peer;
    /**
     * The source of a network activity, such as starting a TCP connection.
     * In a multi hop network activity, the source represents the sender of the
     * last hop.
     */
    source: AttributeContext_Peer;
    /**
     * The destination of a network activity, such as accepting a TCP connection.
     * In a multi hop network activity, the destination represents the receiver of
     * the last hop.
     */
    destination: AttributeContext_Peer;
    /** Represents a network request, such as an HTTP request. */
    request: AttributeContext_Request;
    /** Represents a network response, such as an HTTP response. */
    response: AttributeContext_Response;
    /**
     * Represents a target resource that is involved with a network activity.
     * If multiple resources are involved with an activity, this must be the
     * primary one.
     */
    resource: AttributeContext_Resource;
    /** Represents an API operation that is involved to a network activity. */
    api: AttributeContext_Api;
    /** Supports extensions for advanced use cases, such as logs and metrics. */
    extensions: Any[];
}
export interface AttributeContext_Peer_LabelsEntry {
    key: string;
    value: string;
}
/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_Peer {
    /** The IP address of the peer. */
    ip: string;
    /** The network port of the peer. */
    port: Long;
    /** The labels associated with the peer. */
    labels: {
        [key: string]: string;
    };
    /**
     * The identity of this peer. Similar to `Request.auth.principal`, but
     * relative to the peer instead of the request. For example, the
     * idenity associated with a load balancer that forwared the request.
     */
    principal: string;
    /**
     * The CLDR country/region code associated with the above IP address.
     * If the IP address is private, the `region_code` should reflect the
     * physical location where this peer is running.
     */
    regionCode: string;
}
/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 */
export interface AttributeContext_Api {
    /**
     * The API service name. It is a logical identifier for a networked API,
     * such as "pubsub.googleapis.com". The naming syntax depends on the
     * API management system being used for handling the request.
     */
    service: string;
    /**
     * The API operation name. For gRPC requests, it is the fully qualified API
     * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
     * requests, it is the `operationId`, such as "getPet".
     */
    operation: string;
    /**
     * The API protocol used for sending the request, such as "http", "https",
     * "grpc", or "internal".
     */
    protocol: string;
    /**
     * The API version associated with the API operation above, such as "v1" or
     * "v1alpha1".
     */
    version: string;
}
/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface AttributeContext_Auth {
    /**
     * The authenticated principal. Reflects the issuer (`iss`) and subject
     * (`sub`) claims within a JWT. The issuer and subject should be `/`
     * delimited, with `/` percent-encoded within the subject fragment. For
     * Google accounts, the principal format is:
     * "https://accounts.google.com/{id}"
     */
    principal: string;
    /**
     * The intended audience(s) for this authentication information. Reflects
     * the audience (`aud`) claim within a JWT. The audience
     * value(s) depends on the `issuer`, but typically include one or more of
     * the following pieces of information:
     *
     * *  The services intended to receive the credential. For example,
     * ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
     * *  A set of service-based scopes. For example,
     * ["https://www.googleapis.com/auth/cloud-platform"].
     * *  The client id of an app, such as the Firebase project id for JWTs
     * from Firebase Auth.
     *
     * Consult the documentation for the credential issuer to determine the
     * information provided.
     */
    audiences: string[];
    /**
     * The authorized presenter of the credential. Reflects the optional
     * Authorized Presenter (`azp`) claim within a JWT or the
     * OAuth client id. For example, a Google Cloud Platform client id looks
     * as follows: "123456789012.apps.googleusercontent.com".
     */
    presenter: string;
    /**
     * Structured claims presented with the credential. JWTs include
     * `{key: value}` pairs for standard and private claims. The following
     * is a subset of the standard required and optional claims that would
     * typically be presented for a Google-based JWT:
     *
     * {'iss': 'accounts.google.com',
     * 'sub': '113289723416554971153',
     * 'aud': ['123456789012', 'pubsub.googleapis.com'],
     * 'azp': '123456789012.apps.googleusercontent.com',
     * 'email': 'jsmith@example.com',
     * 'iat': 1353601026,
     * 'exp': 1353604926}
     *
     * SAML assertions are similarly specified, but with an identity provider
     * dependent structure.
     */
    claims: Struct;
    /**
     * A list of access level resource names that allow resources to be
     * accessed by authenticated requester. It is part of Secure GCP processing
     * for the incoming request. An access level string has the format:
     * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
     *
     * Example:
     * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
     */
    accessLevels: string[];
}
export interface AttributeContext_Request_HeadersEntry {
    key: string;
    value: string;
}
/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface AttributeContext_Request {
    /**
     * The unique ID for a request, which can be propagated to downstream
     * systems. The ID should have low probability of collision
     * within a single day for a specific service.
     */
    id: string;
    /** The HTTP request method, such as `GET`, `POST`. */
    method: string;
    /**
     * The HTTP request headers. If multiple headers share the same key, they
     * must be merged according to the HTTP spec. All header keys must be
     * lowercased, because HTTP header keys are case-insensitive.
     */
    headers: {
        [key: string]: string;
    };
    /** The HTTP URL path. */
    path: string;
    /** The HTTP request `Host` header value. */
    host: string;
    /** The HTTP URL scheme, such as `http` and `https`. */
    scheme: string;
    /**
     * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
     * appears in the first line of the HTTP request. No decoding is performed.
     */
    query: string;
    /**
     * The timestamp when the `destination` service receives the last byte of
     * the request.
     */
    time: Date;
    /** The HTTP request size in bytes. If unknown, it must be -1. */
    size: Long;
    /**
     * The network protocol used with the request, such as "http/1.1",
     * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
     * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
     * for details.
     */
    protocol: string;
    /**
     * A special parameter for request reason. It is used by security systems
     * to associate auditing information with a request.
     */
    reason: string;
    /**
     * The request authentication. May be absent for unauthenticated requests.
     * Derived from the HTTP request `Authorization` header or equivalent.
     */
    auth: AttributeContext_Auth;
}
export interface AttributeContext_Response_HeadersEntry {
    key: string;
    value: string;
}
/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_Response {
    /** The HTTP response status code, such as `200` and `404`. */
    code: Long;
    /** The HTTP response size in bytes. If unknown, it must be -1. */
    size: Long;
    /**
     * The HTTP response headers. If multiple headers share the same key, they
     * must be merged according to HTTP spec. All header keys must be
     * lowercased, because HTTP header keys are case-insensitive.
     */
    headers: {
        [key: string]: string;
    };
    /**
     * The timestamp when the `destination` service sends the last byte of
     * the response.
     */
    time: Date;
    /**
     * The length of time it takes the backend service to fully respond to a
     * request. Measured from when the destination service starts to send the
     * request to the backend until when the destination service receives the
     * complete response from the backend.
     */
    backendLatency: string;
}
export interface AttributeContext_Resource_LabelsEntry {
    key: string;
    value: string;
}
export interface AttributeContext_Resource_AnnotationsEntry {
    key: string;
    value: string;
}
/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface AttributeContext_Resource {
    /**
     * The name of the service that this resource belongs to, such as
     * `pubsub.googleapis.com`. The service may be different from the DNS
     * hostname that actually serves the request.
     */
    service: string;
    /**
     * The stable identifier (name) of a resource on the `service`. A resource
     * can be logically identified as "//{resource.service}/{resource.name}".
     * The differences between a resource name and a URI are:
     *
     * *   Resource name is a logical identifier, independent of network
     * protocol and API version. For example,
     * `//pubsub.googleapis.com/projects/123/topics/news-feed`.
     * *   URI often includes protocol and version information, so it can
     * be used directly by applications. For example,
     * `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
     *
     * See https://cloud.google.com/apis/design/resource_names for details.
     */
    name: string;
    /**
     * The type of the resource. The syntax is platform-specific because
     * different platforms define their resources differently.
     *
     * For Google APIs, the type format must be "{service}/{kind}".
     */
    type: string;
    /**
     * The labels or tags on the resource, such as AWS resource tags and
     * Kubernetes resource labels.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * The unique identifier of the resource. UID is unique in the time
     * and space for this resource within the scope of the service. It is
     * typically generated by the server on successful creation of a resource
     * and must not be changed. UID is used to uniquely identify resources
     * with resource name reuses. This should be a UUID4.
     */
    uid: string;
    /**
     * Annotations is an unstructured key-value map stored with a resource that
     * may be set by external tools to store and retrieve arbitrary metadata.
     * They are not queryable and should be preserved when modifying objects.
     *
     * More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations: {
        [key: string]: string;
    };
    /** Mutable. The display name set by clients. Must be <= 63 characters. */
    displayName: string;
    /**
     * Output only. The timestamp when the resource was created. This may
     * be either the time creation was initiated or when it was completed.
     */
    createTime: Date;
    /**
     * Output only. The timestamp when the resource was last updated. Any
     * change to the resource made by users must refresh this value.
     * Changes to a resource made by the service should refresh this value.
     */
    updateTime: Date;
    /**
     * Output only. The timestamp when the resource was deleted.
     * If the resource is not deleted, this must be empty.
     */
    deleteTime: Date;
    /**
     * Output only. An opaque value that uniquely identifies a version or
     * generation of a resource. It can be used to confirm that the client
     * and server agree on the ordering of a resource being written.
     */
    etag: string;
    /**
     * Immutable. The location of the resource. The location encoding is
     * specific to the service provider, and new encoding may be introduced
     * as the service evolves.
     *
     * For Google Cloud products, the encoding is what is used by Google Cloud
     * APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
     * semantics of `location` is identical to the
     * `cloud.googleapis.com/location` label used by some Google Cloud APIs.
     */
    location: string;
}
export declare const AttributeContext: {
    encode(message: AttributeContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext;
    fromJSON(object: any): AttributeContext;
    toJSON(message: AttributeContext): unknown;
    fromPartial<I extends {
        origin?: {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            };
            principal?: string;
            regionCode?: string;
        };
        source?: {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            };
            principal?: string;
            regionCode?: string;
        };
        destination?: {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            };
            principal?: string;
            regionCode?: string;
        };
        request?: {
            id?: string;
            method?: string;
            headers?: {
                [x: string]: string;
            };
            path?: string;
            host?: string;
            scheme?: string;
            query?: string;
            time?: Date;
            size?: any;
            protocol?: string;
            reason?: string;
            auth?: {
                principal?: string;
                audiences?: string[];
                presenter?: string;
                claims?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                accessLevels?: string[];
            };
        };
        response?: {
            code?: any;
            size?: any;
            headers?: {
                [x: string]: string;
            };
            time?: Date;
            backendLatency?: string;
        };
        resource?: {
            service?: string;
            name?: string;
            type?: string;
            labels?: {
                [x: string]: string;
            };
            uid?: string;
            annotations?: {
                [x: string]: string;
            };
            displayName?: string;
            createTime?: Date;
            updateTime?: Date;
            deleteTime?: Date;
            etag?: string;
            location?: string;
        };
        api?: {
            service?: string;
            operation?: string;
            protocol?: string;
            version?: string;
        };
        extensions?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
    } & {
        origin?: {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            };
            principal?: string;
            regionCode?: string;
        } & {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["origin"]["labels"], string | number>, never>;
            principal?: string;
            regionCode?: string;
        } & Record<Exclude<keyof I["origin"], keyof AttributeContext_Peer>, never>;
        source?: {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            };
            principal?: string;
            regionCode?: string;
        } & {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["source"]["labels"], string | number>, never>;
            principal?: string;
            regionCode?: string;
        } & Record<Exclude<keyof I["source"], keyof AttributeContext_Peer>, never>;
        destination?: {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            };
            principal?: string;
            regionCode?: string;
        } & {
            ip?: string;
            port?: any;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["destination"]["labels"], string | number>, never>;
            principal?: string;
            regionCode?: string;
        } & Record<Exclude<keyof I["destination"], keyof AttributeContext_Peer>, never>;
        request?: {
            id?: string;
            method?: string;
            headers?: {
                [x: string]: string;
            };
            path?: string;
            host?: string;
            scheme?: string;
            query?: string;
            time?: Date;
            size?: any;
            protocol?: string;
            reason?: string;
            auth?: {
                principal?: string;
                audiences?: string[];
                presenter?: string;
                claims?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                accessLevels?: string[];
            };
        } & {
            id?: string;
            method?: string;
            headers?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["request"]["headers"], string | number>, never>;
            path?: string;
            host?: string;
            scheme?: string;
            query?: string;
            time?: Date;
            size?: any;
            protocol?: string;
            reason?: string;
            auth?: {
                principal?: string;
                audiences?: string[];
                presenter?: string;
                claims?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                };
                accessLevels?: string[];
            } & {
                principal?: string;
                audiences?: string[] & string[] & Record<Exclude<keyof I["request"]["auth"]["audiences"], keyof string[]>, never>;
                presenter?: string;
                claims?: {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    };
                } & {
                    fields?: {
                        [x: string]: {
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        };
                    } & {
                        [x: string]: {
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["request"]["auth"]["claims"]["fields"][string], keyof import("../../protobuf/struct").Value>, never>;
                    } & Record<Exclude<keyof I["request"]["auth"]["claims"]["fields"], string | number>, never>;
                } & Record<Exclude<keyof I["request"]["auth"]["claims"], "fields">, never>;
                accessLevels?: string[] & string[] & Record<Exclude<keyof I["request"]["auth"]["accessLevels"], keyof string[]>, never>;
            } & Record<Exclude<keyof I["request"]["auth"], keyof AttributeContext_Auth>, never>;
        } & Record<Exclude<keyof I["request"], keyof AttributeContext_Request>, never>;
        response?: {
            code?: any;
            size?: any;
            headers?: {
                [x: string]: string;
            };
            time?: Date;
            backendLatency?: string;
        } & {
            code?: any;
            size?: any;
            headers?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["response"]["headers"], string | number>, never>;
            time?: Date;
            backendLatency?: string;
        } & Record<Exclude<keyof I["response"], keyof AttributeContext_Response>, never>;
        resource?: {
            service?: string;
            name?: string;
            type?: string;
            labels?: {
                [x: string]: string;
            };
            uid?: string;
            annotations?: {
                [x: string]: string;
            };
            displayName?: string;
            createTime?: Date;
            updateTime?: Date;
            deleteTime?: Date;
            etag?: string;
            location?: string;
        } & {
            service?: string;
            name?: string;
            type?: string;
            labels?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["resource"]["labels"], string | number>, never>;
            uid?: string;
            annotations?: {
                [x: string]: string;
            } & {
                [x: string]: string;
            } & Record<Exclude<keyof I["resource"]["annotations"], string | number>, never>;
            displayName?: string;
            createTime?: Date;
            updateTime?: Date;
            deleteTime?: Date;
            etag?: string;
            location?: string;
        } & Record<Exclude<keyof I["resource"], keyof AttributeContext_Resource>, never>;
        api?: {
            service?: string;
            operation?: string;
            protocol?: string;
            version?: string;
        } & {
            service?: string;
            operation?: string;
            protocol?: string;
            version?: string;
        } & Record<Exclude<keyof I["api"], keyof AttributeContext_Api>, never>;
        extensions?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["extensions"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["extensions"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof AttributeContext>, never>>(object: I): AttributeContext;
};
export declare const AttributeContext_Peer_LabelsEntry: {
    encode(message: AttributeContext_Peer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer_LabelsEntry;
    fromJSON(object: any): AttributeContext_Peer_LabelsEntry;
    toJSON(message: AttributeContext_Peer_LabelsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Peer_LabelsEntry>, never>>(object: I): AttributeContext_Peer_LabelsEntry;
};
export declare const AttributeContext_Peer: {
    encode(message: AttributeContext_Peer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer;
    fromJSON(object: any): AttributeContext_Peer;
    toJSON(message: AttributeContext_Peer): unknown;
    fromPartial<I extends {
        ip?: string;
        port?: any;
        labels?: {
            [x: string]: string;
        };
        principal?: string;
        regionCode?: string;
    } & {
        ip?: string;
        port?: any;
        labels?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["labels"], string | number>, never>;
        principal?: string;
        regionCode?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Peer>, never>>(object: I): AttributeContext_Peer;
};
export declare const AttributeContext_Api: {
    encode(message: AttributeContext_Api, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Api;
    fromJSON(object: any): AttributeContext_Api;
    toJSON(message: AttributeContext_Api): unknown;
    fromPartial<I extends {
        service?: string;
        operation?: string;
        protocol?: string;
        version?: string;
    } & {
        service?: string;
        operation?: string;
        protocol?: string;
        version?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Api>, never>>(object: I): AttributeContext_Api;
};
export declare const AttributeContext_Auth: {
    encode(message: AttributeContext_Auth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Auth;
    fromJSON(object: any): AttributeContext_Auth;
    toJSON(message: AttributeContext_Auth): unknown;
    fromPartial<I extends {
        principal?: string;
        audiences?: string[];
        presenter?: string;
        claims?: {
            fields?: {
                [x: string]: {
                    nullValue?: import("../../protobuf/struct").NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: any;
                    listValue?: {
                        values?: any[];
                    };
                };
            };
        };
        accessLevels?: string[];
    } & {
        principal?: string;
        audiences?: string[] & string[] & Record<Exclude<keyof I["audiences"], keyof string[]>, never>;
        presenter?: string;
        claims?: {
            fields?: {
                [x: string]: {
                    nullValue?: import("../../protobuf/struct").NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: any;
                    listValue?: {
                        values?: any[];
                    };
                };
            };
        } & {
            fields?: {
                [x: string]: {
                    nullValue?: import("../../protobuf/struct").NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: any;
                    listValue?: {
                        values?: any[];
                    };
                };
            } & {
                [x: string]: {
                    nullValue?: import("../../protobuf/struct").NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: any;
                    listValue?: {
                        values?: any[];
                    };
                } & {
                    nullValue?: import("../../protobuf/struct").NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: {
                                nullValue?: import("../../protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: any;
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        };
                    } & {
                        fields?: {
                            [x: string]: {
                                nullValue?: import("../../protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: any;
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["claims"]["fields"][string]["structValue"]["fields"], string | number>, never>;
                    } & Record<Exclude<keyof I["claims"]["fields"][string]["structValue"], "fields">, never>;
                    listValue?: {
                        values?: any[];
                    } & {
                        values?: any[] & ({
                            nullValue?: import("../../protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: any;
                            listValue?: {
                                values?: any[];
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["claims"]["fields"][string]["listValue"]["values"][number], keyof import("../../protobuf/struct").Value>, never>)[] & Record<Exclude<keyof I["claims"]["fields"][string]["listValue"]["values"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I["claims"]["fields"][string]["listValue"], "values">, never>;
                } & Record<Exclude<keyof I["claims"]["fields"][string], keyof import("../../protobuf/struct").Value>, never>;
            } & Record<Exclude<keyof I["claims"]["fields"], string | number>, never>;
        } & Record<Exclude<keyof I["claims"], "fields">, never>;
        accessLevels?: string[] & string[] & Record<Exclude<keyof I["accessLevels"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof AttributeContext_Auth>, never>>(object: I): AttributeContext_Auth;
};
export declare const AttributeContext_Request_HeadersEntry: {
    encode(message: AttributeContext_Request_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request_HeadersEntry;
    fromJSON(object: any): AttributeContext_Request_HeadersEntry;
    toJSON(message: AttributeContext_Request_HeadersEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Request_HeadersEntry>, never>>(object: I): AttributeContext_Request_HeadersEntry;
};
export declare const AttributeContext_Request: {
    encode(message: AttributeContext_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request;
    fromJSON(object: any): AttributeContext_Request;
    toJSON(message: AttributeContext_Request): unknown;
    fromPartial<I extends {
        id?: string;
        method?: string;
        headers?: {
            [x: string]: string;
        };
        path?: string;
        host?: string;
        scheme?: string;
        query?: string;
        time?: Date;
        size?: any;
        protocol?: string;
        reason?: string;
        auth?: {
            principal?: string;
            audiences?: string[];
            presenter?: string;
            claims?: {
                fields?: {
                    [x: string]: {
                        nullValue?: import("../../protobuf/struct").NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            };
            accessLevels?: string[];
        };
    } & {
        id?: string;
        method?: string;
        headers?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["headers"], string | number>, never>;
        path?: string;
        host?: string;
        scheme?: string;
        query?: string;
        time?: Date;
        size?: any;
        protocol?: string;
        reason?: string;
        auth?: {
            principal?: string;
            audiences?: string[];
            presenter?: string;
            claims?: {
                fields?: {
                    [x: string]: {
                        nullValue?: import("../../protobuf/struct").NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            };
            accessLevels?: string[];
        } & {
            principal?: string;
            audiences?: string[] & string[] & Record<Exclude<keyof I["auth"]["audiences"], keyof string[]>, never>;
            presenter?: string;
            claims?: {
                fields?: {
                    [x: string]: {
                        nullValue?: import("../../protobuf/struct").NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                };
            } & {
                fields?: {
                    [x: string]: {
                        nullValue?: import("../../protobuf/struct").NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    };
                } & {
                    [x: string]: {
                        nullValue?: import("../../protobuf/struct").NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: any;
                        listValue?: {
                            values?: any[];
                        };
                    } & {
                        nullValue?: import("../../protobuf/struct").NullValue;
                        numberValue?: number;
                        stringValue?: string;
                        boolValue?: boolean;
                        structValue?: {
                            fields?: {
                                [x: string]: {
                                    nullValue?: import("../../protobuf/struct").NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: any;
                                    listValue?: {
                                        values?: any[];
                                    };
                                };
                            };
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["auth"]["claims"]["fields"][string]["structValue"], "fields">, never>;
                        listValue?: {
                            values?: any[];
                        } & {
                            [x: string]: any;
                        } & Record<Exclude<keyof I["auth"]["claims"]["fields"][string]["listValue"], "values">, never>;
                    } & Record<Exclude<keyof I["auth"]["claims"]["fields"][string], keyof import("../../protobuf/struct").Value>, never>;
                } & Record<Exclude<keyof I["auth"]["claims"]["fields"], string | number>, never>;
            } & Record<Exclude<keyof I["auth"]["claims"], "fields">, never>;
            accessLevels?: string[] & string[] & Record<Exclude<keyof I["auth"]["accessLevels"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["auth"], keyof AttributeContext_Auth>, never>;
    } & Record<Exclude<keyof I, keyof AttributeContext_Request>, never>>(object: I): AttributeContext_Request;
};
export declare const AttributeContext_Response_HeadersEntry: {
    encode(message: AttributeContext_Response_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response_HeadersEntry;
    fromJSON(object: any): AttributeContext_Response_HeadersEntry;
    toJSON(message: AttributeContext_Response_HeadersEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Response_HeadersEntry>, never>>(object: I): AttributeContext_Response_HeadersEntry;
};
export declare const AttributeContext_Response: {
    encode(message: AttributeContext_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response;
    fromJSON(object: any): AttributeContext_Response;
    toJSON(message: AttributeContext_Response): unknown;
    fromPartial<I extends {
        code?: any;
        size?: any;
        headers?: {
            [x: string]: string;
        };
        time?: Date;
        backendLatency?: string;
    } & {
        code?: any;
        size?: any;
        headers?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["headers"], string | number>, never>;
        time?: Date;
        backendLatency?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Response>, never>>(object: I): AttributeContext_Response;
};
export declare const AttributeContext_Resource_LabelsEntry: {
    encode(message: AttributeContext_Resource_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_LabelsEntry;
    fromJSON(object: any): AttributeContext_Resource_LabelsEntry;
    toJSON(message: AttributeContext_Resource_LabelsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Resource_LabelsEntry>, never>>(object: I): AttributeContext_Resource_LabelsEntry;
};
export declare const AttributeContext_Resource_AnnotationsEntry: {
    encode(message: AttributeContext_Resource_AnnotationsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_AnnotationsEntry;
    fromJSON(object: any): AttributeContext_Resource_AnnotationsEntry;
    toJSON(message: AttributeContext_Resource_AnnotationsEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Resource_AnnotationsEntry>, never>>(object: I): AttributeContext_Resource_AnnotationsEntry;
};
export declare const AttributeContext_Resource: {
    encode(message: AttributeContext_Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource;
    fromJSON(object: any): AttributeContext_Resource;
    toJSON(message: AttributeContext_Resource): unknown;
    fromPartial<I extends {
        service?: string;
        name?: string;
        type?: string;
        labels?: {
            [x: string]: string;
        };
        uid?: string;
        annotations?: {
            [x: string]: string;
        };
        displayName?: string;
        createTime?: Date;
        updateTime?: Date;
        deleteTime?: Date;
        etag?: string;
        location?: string;
    } & {
        service?: string;
        name?: string;
        type?: string;
        labels?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["labels"], string | number>, never>;
        uid?: string;
        annotations?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["annotations"], string | number>, never>;
        displayName?: string;
        createTime?: Date;
        updateTime?: Date;
        deleteTime?: Date;
        etag?: string;
        location?: string;
    } & Record<Exclude<keyof I, keyof AttributeContext_Resource>, never>>(object: I): AttributeContext_Resource;
};
