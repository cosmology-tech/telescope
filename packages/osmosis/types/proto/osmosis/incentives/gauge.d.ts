import * as _m0 from "protobufjs/minimal";
import { QueryCondition } from "../../osmosis/lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export interface Gauge {
    /** unique ID of a Gauge */
    id: string;
    /**
     * flag to show if it's perpetual or multi-epoch
     * distribution incentives by third party
     */
    isPerpetual: boolean;
    /**
     * Rewards are distributed to lockups that are are returned by at least one of
     * these queries
     */
    distributeTo: QueryCondition;
    /**
     * total amount of Coins that has been in the gauge.
     * can distribute multiple coins
     */
    coins: Coin[];
    /** distribution start time */
    startTime: Date;
    /** number of epochs distribution will be done */
    numEpochsPaidOver: string;
    /** number of epochs distributed already */
    filledEpochs: string;
    /** already distributed coins */
    distributedCoins: Coin[];
}
export interface LockableDurationsInfo {
    lockableDurations: string[];
}
export declare const Gauge: {
    encode(message: Gauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gauge;
    fromJSON(object: any): Gauge;
    toJSON(message: Gauge): unknown;
    fromPartial<I extends {
        id?: string;
        isPerpetual?: boolean;
        distributeTo?: {
            lockQueryType?: import("../../osmosis/lockup/lock").LockQueryType;
            denom?: string;
            duration?: string;
            timestamp?: Date;
        };
        coins?: {
            denom?: string;
            amount?: string;
        }[];
        startTime?: Date;
        numEpochsPaidOver?: string;
        filledEpochs?: string;
        distributedCoins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        id?: string;
        isPerpetual?: boolean;
        distributeTo?: {
            lockQueryType?: import("../../osmosis/lockup/lock").LockQueryType;
            denom?: string;
            duration?: string;
            timestamp?: Date;
        } & {
            lockQueryType?: import("../../osmosis/lockup/lock").LockQueryType;
            denom?: string;
            duration?: string;
            timestamp?: Date;
        } & Record<Exclude<keyof I["distributeTo"], keyof QueryCondition>, never>;
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
        startTime?: Date;
        numEpochsPaidOver?: string;
        filledEpochs?: string;
        distributedCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["distributedCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["distributedCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Gauge>, never>>(object: I): Gauge;
};
export declare const LockableDurationsInfo: {
    encode(message: LockableDurationsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial<I extends {
        lockableDurations?: string[];
    } & {
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, "lockableDurations">, never>>(object: I): LockableDurationsInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
