import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "../../../akash/market/v1beta2/bid";
/** LeaseID stores bid details of lease */
export interface LeaseID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
}
/** Lease stores LeaseID, state of lease and price */
export interface Lease {
    leaseId: LeaseID;
    state: Lease_State;
    price: DecCoin;
    createdAt: Long;
    closedOn: Long;
}
/** State is an enum which refers to state of lease */
export declare enum Lease_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** active - LeaseActive denotes state for lease active */
    active = 1,
    /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
    insufficient_funds = 2,
    /** closed - LeaseClosed denotes state for lease closed */
    closed = 3,
    UNRECOGNIZED = -1
}
export declare function lease_StateFromJSON(object: any): Lease_State;
export declare function lease_StateToJSON(object: Lease_State): string;
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    provider: string;
    state: string;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
    bidId: BidID;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
    bidId: LeaseID;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
    leaseId: LeaseID;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {
}
export declare const LeaseID: {
    encode(message: LeaseID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseID;
    fromJSON(object: any): LeaseID;
    toJSON(message: LeaseID): unknown;
    fromPartial<I extends unknown>(object: I): LeaseID;
};
export declare const Lease: {
    encode(message: Lease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Lease;
    fromJSON(object: any): Lease;
    toJSON(message: Lease): unknown;
    fromPartial<I extends unknown>(object: I): Lease;
};
export declare const LeaseFilters: {
    encode(message: LeaseFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeaseFilters;
    fromJSON(object: any): LeaseFilters;
    toJSON(message: LeaseFilters): unknown;
    fromPartial<I extends unknown>(object: I): LeaseFilters;
};
export declare const MsgCreateLease: {
    encode(message: MsgCreateLease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease;
    fromJSON(object: any): MsgCreateLease;
    toJSON(message: MsgCreateLease): unknown;
    fromPartial<I extends unknown>(object: I): MsgCreateLease;
};
export declare const MsgCreateLeaseResponse: {
    encode(_: MsgCreateLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLeaseResponse;
    fromJSON(_: any): MsgCreateLeaseResponse;
    toJSON(_: MsgCreateLeaseResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCreateLeaseResponse;
};
export declare const MsgWithdrawLease: {
    encode(message: MsgWithdrawLease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease;
    fromJSON(object: any): MsgWithdrawLease;
    toJSON(message: MsgWithdrawLease): unknown;
    fromPartial<I extends unknown>(object: I): MsgWithdrawLease;
};
export declare const MsgWithdrawLeaseResponse: {
    encode(_: MsgWithdrawLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLeaseResponse;
    fromJSON(_: any): MsgWithdrawLeaseResponse;
    toJSON(_: MsgWithdrawLeaseResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgWithdrawLeaseResponse;
};
export declare const MsgCloseLease: {
    encode(message: MsgCloseLease, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease;
    fromJSON(object: any): MsgCloseLease;
    toJSON(message: MsgCloseLease): unknown;
    fromPartial<I extends unknown>(object: I): MsgCloseLease;
};
export declare const MsgCloseLeaseResponse: {
    encode(_: MsgCloseLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLeaseResponse;
    fromJSON(_: any): MsgCloseLeaseResponse;
    toJSON(_: MsgCloseLeaseResponse): unknown;
    fromPartial<I extends unknown>(_: I): MsgCloseLeaseResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
