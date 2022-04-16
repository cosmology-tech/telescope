import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "../../osmosis/lockup/lock";
export interface MsgLockTokens {
    owner: string;
    duration: string;
    coins: Coin[];
}
export interface MsgLockTokensResponse {
    ID: string;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlocking {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgBeginUnlockingResponse {
    success: boolean;
}
export declare const MsgLockTokens: {
    encode(message: MsgLockTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokens;
    fromJSON(object: any): MsgLockTokens;
    toJSON(message: MsgLockTokens): unknown;
    fromPartial<I extends {
        owner?: string;
        duration?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        owner?: string;
        duration?: string;
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
    } & Record<Exclude<keyof I, keyof MsgLockTokens>, never>>(object: I): MsgLockTokens;
};
export declare const MsgLockTokensResponse: {
    encode(message: MsgLockTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockTokensResponse;
    fromJSON(object: any): MsgLockTokensResponse;
    toJSON(message: MsgLockTokensResponse): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgLockTokensResponse;
};
export declare const MsgBeginUnlockingAll: {
    encode(message: MsgBeginUnlockingAll, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAll;
    fromJSON(object: any): MsgBeginUnlockingAll;
    toJSON(message: MsgBeginUnlockingAll): unknown;
    fromPartial<I extends {
        owner?: string;
    } & {
        owner?: string;
    } & Record<Exclude<keyof I, "owner">, never>>(object: I): MsgBeginUnlockingAll;
};
export declare const MsgBeginUnlockingAllResponse: {
    encode(message: MsgBeginUnlockingAllResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse;
    fromJSON(object: any): MsgBeginUnlockingAllResponse;
    toJSON(message: MsgBeginUnlockingAllResponse): unknown;
    fromPartial<I extends {
        unlocks?: {
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
    } & {
        unlocks?: {
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["unlocks"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["unlocks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["unlocks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["unlocks"], keyof {
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "unlocks">, never>>(object: I): MsgBeginUnlockingAllResponse;
};
export declare const MsgBeginUnlocking: {
    encode(message: MsgBeginUnlocking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlocking;
    fromJSON(object: any): MsgBeginUnlocking;
    toJSON(message: MsgBeginUnlocking): unknown;
    fromPartial<I extends {
        owner?: string;
        ID?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        owner?: string;
        ID?: string;
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
    } & Record<Exclude<keyof I, keyof MsgBeginUnlocking>, never>>(object: I): MsgBeginUnlocking;
};
export declare const MsgBeginUnlockingResponse: {
    encode(message: MsgBeginUnlockingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginUnlockingResponse;
    fromJSON(object: any): MsgBeginUnlockingResponse;
    toJSON(message: MsgBeginUnlockingResponse): unknown;
    fromPartial<I extends {
        success?: boolean;
    } & {
        success?: boolean;
    } & Record<Exclude<keyof I, "success">, never>>(object: I): MsgBeginUnlockingResponse;
};
/** Msg defines the Msg service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
