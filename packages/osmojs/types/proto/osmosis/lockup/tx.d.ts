import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgLockTokens {
    owner: string;
    duration: string;
    coins: Coin[];
}
export interface MsgLockTokensResponse {
    ID: Long;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlocking {
    owner: string;
    ID: Long;
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
        ID?: any;
    } & {
        ID?: any;
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
            ID?: any;
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
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            ID?: any;
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
            ID?: any;
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
        ID?: any;
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        owner?: string;
        ID?: any;
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
