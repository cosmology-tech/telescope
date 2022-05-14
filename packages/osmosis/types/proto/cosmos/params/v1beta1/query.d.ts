import { ParamChange } from "./params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /** subspace defines the module to query the parameter for. */
    subspace: string;
    /** key defines the key of the parameter in the subspace. */
    key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** param defines the queried parameter. */
    param: ParamChange;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequest {
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponse {
    subspaces: Subspace[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface Subspace {
    subspace: string;
    keys: string[];
}
export declare const QueryParamsRequest: {
    encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial<I extends {
        subspace?: string;
        key?: string;
    } & {
        subspace?: string;
        key?: string;
    } & Record<Exclude<keyof I, keyof QueryParamsRequest>, never>>(object: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        param?: {
            subspace?: string;
            key?: string;
            value?: string;
        };
    } & {
        param?: {
            subspace?: string;
            key?: string;
            value?: string;
        } & {
            subspace?: string;
            key?: string;
            value?: string;
        } & Record<Exclude<keyof I["param"], keyof ParamChange>, never>;
    } & Record<Exclude<keyof I, "param">, never>>(object: I): QueryParamsResponse;
};
export declare const QuerySubspacesRequest: {
    encode(_: QuerySubspacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesRequest;
    fromJSON(_: any): QuerySubspacesRequest;
    toJSON(_: QuerySubspacesRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QuerySubspacesRequest;
};
export declare const QuerySubspacesResponse: {
    encode(message: QuerySubspacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesResponse;
    fromJSON(object: any): QuerySubspacesResponse;
    toJSON(message: QuerySubspacesResponse): unknown;
    fromPartial<I extends {
        subspaces?: {
            subspace?: string;
            keys?: string[];
        }[];
    } & {
        subspaces?: {
            subspace?: string;
            keys?: string[];
        }[] & ({
            subspace?: string;
            keys?: string[];
        } & {
            subspace?: string;
            keys?: string[] & string[] & Record<Exclude<keyof I["subspaces"][number]["keys"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["subspaces"][number], keyof Subspace>, never>)[] & Record<Exclude<keyof I["subspaces"], keyof {
            subspace?: string;
            keys?: string[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "subspaces">, never>>(object: I): QuerySubspacesResponse;
};
export declare const Subspace: {
    encode(message: Subspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subspace;
    fromJSON(object: any): Subspace;
    toJSON(message: Subspace): unknown;
    fromPartial<I extends {
        subspace?: string;
        keys?: string[];
    } & {
        subspace?: string;
        keys?: string[] & string[] & Record<Exclude<keyof I["keys"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof Subspace>, never>>(object: I): Subspace;
};
