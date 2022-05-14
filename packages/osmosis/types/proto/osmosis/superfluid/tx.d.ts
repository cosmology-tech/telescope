import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: Long;
    valAddr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: Long;
}
export interface MsgSuperfluidUnbondLockResponse {
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    ID: Long;
}
export declare const MsgSuperfluidDelegate: {
    encode(message: MsgSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromJSON(object: any): MsgSuperfluidDelegate;
    toJSON(message: MsgSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string;
        lockId?: any;
        valAddr?: string;
    } & {
        sender?: string;
        lockId?: any;
        valAddr?: string;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidDelegate>, never>>(object: I): MsgSuperfluidDelegate;
};
export declare const MsgSuperfluidDelegateResponse: {
    encode(_: MsgSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromJSON(_: any): MsgSuperfluidDelegateResponse;
    toJSON(_: MsgSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidDelegateResponse;
};
export declare const MsgSuperfluidUndelegate: {
    encode(message: MsgSuperfluidUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromJSON(object: any): MsgSuperfluidUndelegate;
    toJSON(message: MsgSuperfluidUndelegate): unknown;
    fromPartial<I extends {
        sender?: string;
        lockId?: any;
    } & {
        sender?: string;
        lockId?: any;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUndelegate>, never>>(object: I): MsgSuperfluidUndelegate;
};
export declare const MsgSuperfluidUndelegateResponse: {
    encode(_: MsgSuperfluidUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromJSON(_: any): MsgSuperfluidUndelegateResponse;
    toJSON(_: MsgSuperfluidUndelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidUndelegateResponse;
};
export declare const MsgSuperfluidUnbondLock: {
    encode(message: MsgSuperfluidUnbondLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromJSON(object: any): MsgSuperfluidUnbondLock;
    toJSON(message: MsgSuperfluidUnbondLock): unknown;
    fromPartial<I extends {
        sender?: string;
        lockId?: any;
    } & {
        sender?: string;
        lockId?: any;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUnbondLock>, never>>(object: I): MsgSuperfluidUnbondLock;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromJSON(_: any): MsgSuperfluidUnbondLockResponse;
    toJSON(_: MsgSuperfluidUnbondLockResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidUnbondLockResponse;
};
export declare const MsgLockAndSuperfluidDelegate: {
    encode(message: MsgLockAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromJSON(object: any): MsgLockAndSuperfluidDelegate;
    toJSON(message: MsgLockAndSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[];
        valAddr?: string;
    } & {
        sender?: string;
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
        valAddr?: string;
    } & Record<Exclude<keyof I, keyof MsgLockAndSuperfluidDelegate>, never>>(object: I): MsgLockAndSuperfluidDelegate;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse;
    toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {
        ID?: any;
    } & {
        ID?: any;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgLockAndSuperfluidDelegateResponse;
};
