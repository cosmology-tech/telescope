import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export declare const QueryGrantsRequest: {
    encode(message: QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest;
    fromJSON(object: any): QueryGrantsRequest;
    toJSON(message: QueryGrantsRequest): unknown;
    fromPartial<I extends {
        granter?: string;
        grantee?: string;
        msgTypeUrl?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        granter?: string;
        grantee?: string;
        msgTypeUrl?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGrantsRequest>, never>>(object: I): QueryGrantsRequest;
};
export declare const QueryGrantsResponse: {
    encode(message: QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse;
    fromJSON(object: any): QueryGrantsResponse;
    toJSON(message: QueryGrantsResponse): unknown;
    fromPartial<I extends {
        grants?: {
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        grants?: {
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[] & ({
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        } & {
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["grants"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>;
            expiration?: Date;
        } & Record<Exclude<keyof I["grants"][number], keyof Grant>, never>)[] & Record<Exclude<keyof I["grants"], keyof {
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGrantsResponse>, never>>(object: I): QueryGrantsResponse;
};
export declare const QueryGranterGrantsRequest: {
    encode(message: QueryGranterGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsRequest;
    fromJSON(object: any): QueryGranterGrantsRequest;
    toJSON(message: QueryGranterGrantsRequest): unknown;
    fromPartial<I extends {
        granter?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        granter?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGranterGrantsRequest>, never>>(object: I): QueryGranterGrantsRequest;
};
export declare const QueryGranterGrantsResponse: {
    encode(message: QueryGranterGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranterGrantsResponse;
    fromJSON(object: any): QueryGranterGrantsResponse;
    toJSON(message: QueryGranterGrantsResponse): unknown;
    fromPartial<I extends {
        grants?: {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        grants?: {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[] & ({
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        } & {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["grants"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>;
            expiration?: Date;
        } & Record<Exclude<keyof I["grants"][number], keyof GrantAuthorization>, never>)[] & Record<Exclude<keyof I["grants"], keyof {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGranterGrantsResponse>, never>>(object: I): QueryGranterGrantsResponse;
};
export declare const QueryGranteeGrantsRequest: {
    encode(message: QueryGranteeGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsRequest;
    fromJSON(object: any): QueryGranteeGrantsRequest;
    toJSON(message: QueryGranteeGrantsRequest): unknown;
    fromPartial<I extends {
        grantee?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        grantee?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryGranteeGrantsRequest>, never>>(object: I): QueryGranteeGrantsRequest;
};
export declare const QueryGranteeGrantsResponse: {
    encode(message: QueryGranteeGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGranteeGrantsResponse;
    fromJSON(object: any): QueryGranteeGrantsResponse;
    toJSON(message: QueryGranteeGrantsResponse): unknown;
    fromPartial<I extends {
        grants?: {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        grants?: {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[] & ({
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        } & {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["grants"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>;
            expiration?: Date;
        } & Record<Exclude<keyof I["grants"][number], keyof GrantAuthorization>, never>)[] & Record<Exclude<keyof I["grants"], keyof {
            granter?: string;
            grantee?: string;
            authorization?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            expiration?: Date;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryGranteeGrantsResponse>, never>>(object: I): QueryGranteeGrantsResponse;
};
