import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
    /** allowance is a allowance granted for grantee by granter. */
    allowance: Grant;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponse {
    /** allowances that have been issued by the granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export declare const QueryAllowanceRequest: {
    encode(message: QueryAllowanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest;
    fromJSON(object: any): QueryAllowanceRequest;
    toJSON(message: QueryAllowanceRequest): unknown;
    fromPartial<I extends {
        granter?: string;
        grantee?: string;
    } & {
        granter?: string;
        grantee?: string;
    } & Record<Exclude<keyof I, keyof QueryAllowanceRequest>, never>>(object: I): QueryAllowanceRequest;
};
export declare const QueryAllowanceResponse: {
    encode(message: QueryAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponse;
    fromJSON(object: any): QueryAllowanceResponse;
    toJSON(message: QueryAllowanceResponse): unknown;
    fromPartial<I extends {
        allowance?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        allowance?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["allowance"]["allowance"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["allowance"], keyof Grant>, never>;
    } & Record<Exclude<keyof I, "allowance">, never>>(object: I): QueryAllowanceResponse;
};
export declare const QueryAllowancesRequest: {
    encode(message: QueryAllowancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest;
    fromJSON(object: any): QueryAllowancesRequest;
    toJSON(message: QueryAllowancesRequest): unknown;
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
    } & Record<Exclude<keyof I, keyof QueryAllowancesRequest>, never>>(object: I): QueryAllowancesRequest;
};
export declare const QueryAllowancesResponse: {
    encode(message: QueryAllowancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponse;
    fromJSON(object: any): QueryAllowancesResponse;
    toJSON(message: QueryAllowancesResponse): unknown;
    fromPartial<I extends {
        allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["allowances"][number]["allowance"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["allowances"][number], keyof Grant>, never>)[] & Record<Exclude<keyof I["allowances"], keyof {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllowancesResponse>, never>>(object: I): QueryAllowancesResponse;
};
export declare const QueryAllowancesByGranterRequest: {
    encode(message: QueryAllowancesByGranterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterRequest;
    fromJSON(object: any): QueryAllowancesByGranterRequest;
    toJSON(message: QueryAllowancesByGranterRequest): unknown;
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
    } & Record<Exclude<keyof I, keyof QueryAllowancesByGranterRequest>, never>>(object: I): QueryAllowancesByGranterRequest;
};
export declare const QueryAllowancesByGranterResponse: {
    encode(message: QueryAllowancesByGranterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterResponse;
    fromJSON(object: any): QueryAllowancesByGranterResponse;
    toJSON(message: QueryAllowancesByGranterResponse): unknown;
    fromPartial<I extends {
        allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        allowances?: {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["allowances"][number]["allowance"], keyof import("../../../google/protobuf/any").Any>, never>;
        } & Record<Exclude<keyof I["allowances"][number], keyof Grant>, never>)[] & Record<Exclude<keyof I["allowances"], keyof {
            granter?: string;
            grantee?: string;
            allowance?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllowancesByGranterResponse>, never>>(object: I): QueryAllowancesByGranterResponse;
};
