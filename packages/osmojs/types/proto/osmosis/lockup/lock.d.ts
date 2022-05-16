import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export declare enum LockQueryType {
    /** ByDuration - Queries for locks that are longer than a certain duration */
    ByDuration = 0,
    /** ByTime - Queries for lockups that started before a specific time */
    ByTime = 1,
    UNRECOGNIZED = -1
}
export declare function lockQueryTypeFromJSON(object: any): LockQueryType;
export declare function lockQueryTypeToJSON(object: LockQueryType): string;
/**
 * PeriodLock is a single unit of lock by period. It's a record of locked coin
 * at a specific time. It stores owner, duration, unlock time and the amount of
 * coins locked.
 */
export interface PeriodLock {
    ID: Long;
    owner: string;
    duration: string;
    endTime: Date;
    coins: Coin[];
}
export interface QueryCondition {
    /** type of lock query, ByLockDuration | ByLockTime */
    lockQueryType: LockQueryType;
    /** What token denomination are we looking for lockups of */
    denom: string;
    /** valid when query condition is ByDuration */
    duration: string;
    /** valid when query condition is ByTime */
    timestamp: Date;
}
/**
 * SyntheticLock is a single unit of synthetic lockup
 * TODO: Change this to have
 * * underlying_lock_id
 * * synthetic_coin
 * * end_time
 * * duration
 * * owner
 * We then index synthetic locks by the denom, just like we do with normal
 * locks. Ideally we even get an interface, so we can re-use that same logic.
 * I currently have no idea how reward distribution is supposed to be working...
 * EVENTUALLY
 * we make a "constrained_coin" field, which is what the current "coins" field
 * is. Constrained coin field can be a #post-v7 feature, since we aren't
 * allowing partial unlocks of synthetic lockups.
 */
export interface SyntheticLock {
    /** underlying native lockup id for this synthetic lockup */
    underlyingLockId: Long;
    synthDenom: string;
    /**
     * used for unbonding synthetic lockups, for active synthetic lockups, this
     * value is set to uninitialized value
     */
    endTime: Date;
    duration: string;
}
export declare const PeriodLock: {
    encode(message: PeriodLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodLock;
    fromJSON(object: any): PeriodLock;
    toJSON(message: PeriodLock): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof PeriodLock>, never>>(object: I): PeriodLock;
};
export declare const QueryCondition: {
    encode(message: QueryCondition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCondition;
    fromJSON(object: any): QueryCondition;
    toJSON(message: QueryCondition): unknown;
    fromPartial<I extends {
        lockQueryType?: LockQueryType;
        denom?: string;
        duration?: string;
        timestamp?: Date;
    } & {
        lockQueryType?: LockQueryType;
        denom?: string;
        duration?: string;
        timestamp?: Date;
    } & Record<Exclude<keyof I, keyof QueryCondition>, never>>(object: I): QueryCondition;
};
export declare const SyntheticLock: {
    encode(message: SyntheticLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticLock;
    fromJSON(object: any): SyntheticLock;
    toJSON(message: SyntheticLock): unknown;
    fromPartial<I extends {
        underlyingLockId?: any;
        synthDenom?: string;
        endTime?: Date;
        duration?: string;
    } & {
        underlyingLockId?: any;
        synthDenom?: string;
        endTime?: Date;
        duration?: string;
    } & Record<Exclude<keyof I, keyof SyntheticLock>, never>>(object: I): SyntheticLock;
};
