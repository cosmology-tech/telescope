import * as _m0 from "protobufjs/minimal";
import { AttributeContext } from "../../../../google/rpc/context/attribute_context";
import { Status } from "../../../../google/rpc/status";
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
    /**
     * Specifies the version of the service configuration that should be used to
     * process the request. Must not be empty. Set this field to 'latest' to
     * specify using the latest configuration.
     */
    serviceConfigId: string;
    /** Describes attributes about the operation being executed by the service. */
    attributes: AttributeContext;
    /** Describes the resources and the policies applied to each resource. */
    resources: ResourceInfo[];
    /** Optional. Contains a comma-separated list of flags. */
    flags: string;
}
/** Describes a resource referenced in the request. */
export interface ResourceInfo {
    /** The name of the resource referenced in the request. */
    name: string;
    /** The resource type in the format of "{service}/{kind}". */
    type: string;
    /**
     * The resource permission needed for this request.
     * The format must be "{service}/{plural}.{verb}".
     */
    permission: string;
    /**
     * Optional. The identifier of the container of this resource. For Google
     * Cloud APIs, the resource container must be one of the following formats:
     *     - `projects/<project-id or project-number>`
     *     - `folders/<folder-id>`
     *     - `organizations/<organization-id>`
     * For the policy enforcement on the container level (VPCSC and Location
     * Policy check), this field takes precedence on the container extracted from
     * name when presents.
     */
    container: string;
    /**
     * Optional. The location of the resource. The value must be a valid zone,
     * region or multiregion. For example: "europe-west4" or
     * "northamerica-northeast1-a"
     */
    location: string;
}
/** Response message for the Check method. */
export interface CheckResponse {
    /**
     * Operation is allowed when this field is not set. Any non-'OK' status
     * indicates a denial; [google.rpc.Status.details][google.rpc.Status.details]
     * would contain additional details about the denial.
     */
    status: Status;
    /** Returns a set of request contexts generated from the `CheckRequest`. */
    headers: {
        [key: string]: string;
    };
}
export interface CheckResponse_HeadersEntry {
    key: string;
    value: string;
}
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
     * Specifies the version of the service configuration that should be used to
     * process the request. Must not be empty. Set this field to 'latest' to
     * specify using the latest configuration.
     */
    serviceConfigId: string;
    /**
     * Describes the list of operations to be reported. Each operation is
     * represented as an AttributeContext, and contains all attributes around an
     * API access.
     */
    operations: AttributeContext[];
}
/**
 * Response message for the Report method.
 * If the request contains any invalid data, the server returns an RPC error.
 */
export interface ReportResponse {
}
export declare const CheckRequest: {
    encode(message: CheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest;
    fromJSON(object: any): CheckRequest;
    toJSON(message: CheckRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        serviceConfigId?: string;
        attributes?: {
            origin?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            destination?: {
                ip?: string;
                port?: string;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            };
            response?: {
                code?: string;
                size?: string;
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
        };
        resources?: {
            name?: string;
            type?: string;
            permission?: string;
            container?: string;
            location?: string;
        }[];
        flags?: string;
    } & {
        serviceName?: string;
        serviceConfigId?: string;
        attributes?: {
            origin?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            destination?: {
                ip?: string;
                port?: string;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            };
            response?: {
                code?: string;
                size?: string;
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
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            } & {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                } & {
                    [x: string]: string;
                } & Record<Exclude<keyof I["attributes"]["origin"]["labels"], string | number>, never>;
                principal?: string;
                regionCode?: string;
            } & Record<Exclude<keyof I["attributes"]["origin"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Peer>, never>;
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            } & {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                } & {
                    [x: string]: string;
                } & Record<Exclude<keyof I["attributes"]["source"]["labels"], string | number>, never>;
                principal?: string;
                regionCode?: string;
            } & Record<Exclude<keyof I["attributes"]["source"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Peer>, never>;
            destination?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            } & {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                } & {
                    [x: string]: string;
                } & Record<Exclude<keyof I["attributes"]["destination"]["labels"], string | number>, never>;
                principal?: string;
                regionCode?: string;
            } & Record<Exclude<keyof I["attributes"]["destination"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Peer>, never>;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
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
                } & Record<Exclude<keyof I["attributes"]["request"]["headers"], string | number>, never>;
                path?: string;
                host?: string;
                scheme?: string;
                query?: string;
                time?: Date;
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                } & {
                    principal?: string;
                    audiences?: string[] & string[] & Record<Exclude<keyof I["attributes"]["request"]["auth"]["audiences"], keyof string[]>, never>;
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & Record<Exclude<keyof I["attributes"]["request"]["auth"]["claims"], string | number>, never>;
                    accessLevels?: string[] & string[] & Record<Exclude<keyof I["attributes"]["request"]["auth"]["accessLevels"], keyof string[]>, never>;
                } & Record<Exclude<keyof I["attributes"]["request"]["auth"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Auth>, never>;
            } & Record<Exclude<keyof I["attributes"]["request"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Request>, never>;
            response?: {
                code?: string;
                size?: string;
                headers?: {
                    [x: string]: string;
                };
                time?: Date;
                backendLatency?: string;
            } & {
                code?: string;
                size?: string;
                headers?: {
                    [x: string]: string;
                } & {
                    [x: string]: string;
                } & Record<Exclude<keyof I["attributes"]["response"]["headers"], string | number>, never>;
                time?: Date;
                backendLatency?: string;
            } & Record<Exclude<keyof I["attributes"]["response"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Response>, never>;
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
                } & Record<Exclude<keyof I["attributes"]["resource"]["labels"], string | number>, never>;
                uid?: string;
                annotations?: {
                    [x: string]: string;
                } & {
                    [x: string]: string;
                } & Record<Exclude<keyof I["attributes"]["resource"]["annotations"], string | number>, never>;
                displayName?: string;
                createTime?: Date;
                updateTime?: Date;
                deleteTime?: Date;
                etag?: string;
                location?: string;
            } & Record<Exclude<keyof I["attributes"]["resource"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Resource>, never>;
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
            } & Record<Exclude<keyof I["attributes"]["api"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Api>, never>;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["attributes"]["extensions"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["attributes"]["extensions"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["attributes"], keyof AttributeContext>, never>;
        resources?: {
            name?: string;
            type?: string;
            permission?: string;
            container?: string;
            location?: string;
        }[] & ({
            name?: string;
            type?: string;
            permission?: string;
            container?: string;
            location?: string;
        } & {
            name?: string;
            type?: string;
            permission?: string;
            container?: string;
            location?: string;
        } & Record<Exclude<keyof I["resources"][number], keyof ResourceInfo>, never>)[] & Record<Exclude<keyof I["resources"], keyof {
            name?: string;
            type?: string;
            permission?: string;
            container?: string;
            location?: string;
        }[]>, never>;
        flags?: string;
    } & Record<Exclude<keyof I, keyof CheckRequest>, never>>(object: I): CheckRequest;
};
export declare const ResourceInfo: {
    encode(message: ResourceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceInfo;
    fromJSON(object: any): ResourceInfo;
    toJSON(message: ResourceInfo): unknown;
    fromPartial<I extends {
        name?: string;
        type?: string;
        permission?: string;
        container?: string;
        location?: string;
    } & {
        name?: string;
        type?: string;
        permission?: string;
        container?: string;
        location?: string;
    } & Record<Exclude<keyof I, keyof ResourceInfo>, never>>(object: I): ResourceInfo;
};
export declare const CheckResponse: {
    encode(message: CheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse;
    fromJSON(object: any): CheckResponse;
    toJSON(message: CheckResponse): unknown;
    fromPartial<I extends {
        status?: {
            code?: number;
            message?: string;
            details?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        };
        headers?: {
            [x: string]: string;
        };
    } & {
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
        headers?: {
            [x: string]: string;
        } & {
            [x: string]: string;
        } & Record<Exclude<keyof I["headers"], string | number>, never>;
    } & Record<Exclude<keyof I, keyof CheckResponse>, never>>(object: I): CheckResponse;
};
export declare const CheckResponse_HeadersEntry: {
    encode(message: CheckResponse_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse_HeadersEntry;
    fromJSON(object: any): CheckResponse_HeadersEntry;
    toJSON(message: CheckResponse_HeadersEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof CheckResponse_HeadersEntry>, never>>(object: I): CheckResponse_HeadersEntry;
};
export declare const ReportRequest: {
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial<I extends {
        serviceName?: string;
        serviceConfigId?: string;
        operations?: {
            origin?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            destination?: {
                ip?: string;
                port?: string;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            };
            response?: {
                code?: string;
                size?: string;
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
        }[];
    } & {
        serviceName?: string;
        serviceConfigId?: string;
        operations?: {
            origin?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            destination?: {
                ip?: string;
                port?: string;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            };
            response?: {
                code?: string;
                size?: string;
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
        }[] & ({
            origin?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            destination?: {
                ip?: string;
                port?: string;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            };
            response?: {
                code?: string;
                size?: string;
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
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["origin"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Peer>, never>;
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["source"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Peer>, never>;
            destination?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["destination"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Peer>, never>;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["request"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Request>, never>;
            response?: {
                code?: string;
                size?: string;
                headers?: {
                    [x: string]: string;
                };
                time?: Date;
                backendLatency?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["response"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Response>, never>;
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
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["resource"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Resource>, never>;
            api?: {
                service?: string;
                operation?: string;
                protocol?: string;
                version?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["api"], keyof import("../../../../google/rpc/context/attribute_context").AttributeContext_Api>, never>;
            extensions?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["operations"][number]["extensions"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["operations"][number]["extensions"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["operations"][number], keyof AttributeContext>, never>)[] & Record<Exclude<keyof I["operations"], keyof {
            origin?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            source?: {
                ip?: string;
                port?: string;
                labels?: {
                    [x: string]: string;
                };
                principal?: string;
                regionCode?: string;
            };
            destination?: {
                ip?: string;
                port?: string;
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
                size?: string;
                protocol?: string;
                reason?: string;
                auth?: {
                    principal?: string;
                    audiences?: string[];
                    presenter?: string;
                    claims?: {
                        [x: string]: any;
                    };
                    accessLevels?: string[];
                };
            };
            response?: {
                code?: string;
                size?: string;
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
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ReportRequest>, never>>(object: I): ReportRequest;
};
export declare const ReportResponse: {
    encode(_: ReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReportResponse;
    fromJSON(_: any): ReportResponse;
    toJSON(_: ReportResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ReportResponse;
};
/**
 * [Service Control API
 * v2](https://cloud.google.com/service-infrastructure/docs/service-control/access-control)
 *
 * Private Preview. This feature is only available for approved services.
 *
 * This API provides admission control and telemetry reporting for services
 * that are integrated with [Service
 * Infrastructure](https://cloud.google.com/service-infrastructure).
 */
export interface ServiceController {
    /**
     * Private Preview. This feature is only available for approved services.
     *
     * This method provides admission control for services that are integrated
     * with [Service
     * Infrastructure](https://cloud.google.com/service-infrastructure). It checks
     * whether an operation should be allowed based on the service configuration
     * and relevant policies. It must be called before the operation is executed.
     * For more information, see
     * [Admission
     * Control](https://cloud.google.com/service-infrastructure/docs/admission-control).
     *
     * NOTE: The admission control has an expected policy propagation delay of
     * 60s. The caller **must** not depend on the most recent policy changes.
     *
     * NOTE: The admission control has a hard limit of 1 referenced resources
     * per call. If an operation refers to more than 1 resources, the caller
     * must call the Check method multiple times.
     *
     * This method requires the `servicemanagement.services.check` permission
     * on the specified service. For more information, see
     * [Service Control API Access
     * Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
     */
    Check(request: CheckRequest): Promise<CheckResponse>;
    /**
     * Private Preview. This feature is only available for approved services.
     *
     * This method provides telemetry reporting for services that are integrated
     * with [Service
     * Infrastructure](https://cloud.google.com/service-infrastructure). It
     * reports a list of operations that have occurred on a service. It must be
     * called after the operations have been executed. For more information, see
     * [Telemetry
     * Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting).
     *
     * NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB
     * per Report call. It is recommended to have no more than 100 operations per
     * call.
     *
     * This method requires the `servicemanagement.services.report` permission
     * on the specified service. For more information, see
     * [Service Control API Access
     * Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
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
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
