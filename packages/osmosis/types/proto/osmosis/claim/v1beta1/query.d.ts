import { Action, ClaimRecord } from "./claim";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryClaimRecordRequest {
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord;
}
export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableRequest {
    address: string;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export declare const QueryModuleAccountBalanceRequest: {
    encode(_: QueryModuleAccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest;
    fromJSON(_: any): QueryModuleAccountBalanceRequest;
    toJSON(_: QueryModuleAccountBalanceRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryModuleAccountBalanceRequest;
};
export declare const QueryModuleAccountBalanceResponse: {
    encode(message: QueryModuleAccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse;
    fromJSON(object: any): QueryModuleAccountBalanceResponse;
    toJSON(message: QueryModuleAccountBalanceResponse): unknown;
    fromPartial<I extends {
        moduleAccountBalance?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        moduleAccountBalance?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["moduleAccountBalance"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["moduleAccountBalance"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "moduleAccountBalance">, never>>(object: I): QueryModuleAccountBalanceResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            airdropStartTime?: Date;
            durationUntilDecay?: string;
            durationOfDecay?: string;
            claimDenom?: string;
        };
    } & {
        params?: {
            airdropStartTime?: Date;
            durationUntilDecay?: string;
            durationOfDecay?: string;
            claimDenom?: string;
        } & {
            airdropStartTime?: Date;
            durationUntilDecay?: string;
            durationOfDecay?: string;
            claimDenom?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromJSON(object: any): QueryClaimRecordRequest;
    toJSON(message: QueryClaimRecordRequest): unknown;
    fromPartial<I extends {
        address?: string;
    } & {
        address?: string;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromJSON(object: any): QueryClaimRecordResponse;
    toJSON(message: QueryClaimRecordResponse): unknown;
    fromPartial<I extends {
        claimRecord?: {
            address?: string;
            initialClaimableAmount?: {
                denom?: string;
                amount?: string;
            }[];
            actionCompleted?: boolean[];
        };
    } & {
        claimRecord?: {
            address?: string;
            initialClaimableAmount?: {
                denom?: string;
                amount?: string;
            }[];
            actionCompleted?: boolean[];
        } & {
            address?: string;
            initialClaimableAmount?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["claimRecord"]["initialClaimableAmount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimRecord"]["initialClaimableAmount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I["claimRecord"]["actionCompleted"], keyof boolean[]>, never>;
        } & Record<Exclude<keyof I["claimRecord"], keyof ClaimRecord>, never>;
    } & Record<Exclude<keyof I, "claimRecord">, never>>(object: I): QueryClaimRecordResponse;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromJSON(object: any): QueryClaimableForActionRequest;
    toJSON(message: QueryClaimableForActionRequest): unknown;
    fromPartial<I extends {
        address?: string;
        action?: Action;
    } & {
        address?: string;
        action?: Action;
    } & Record<Exclude<keyof I, keyof QueryClaimableForActionRequest>, never>>(object: I): QueryClaimableForActionRequest;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromJSON(object: any): QueryClaimableForActionResponse;
    toJSON(message: QueryClaimableForActionResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): QueryClaimableForActionResponse;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromJSON(object: any): QueryTotalClaimableRequest;
    toJSON(message: QueryTotalClaimableRequest): unknown;
    fromPartial<I extends {
        address?: string;
    } & {
        address?: string;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryTotalClaimableRequest;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromJSON(object: any): QueryTotalClaimableResponse;
    toJSON(message: QueryTotalClaimableResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): QueryTotalClaimableResponse;
};
