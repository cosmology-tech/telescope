import * as _m0 from "protobufjs/minimal";
import { PeriodLock, SyntheticLock } from "../../osmosis/lockup/lock";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: string;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        lastLockId?: string;
        locks?: {
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        syntheticLocks?: {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[];
    } & {
        lastLockId?: string;
        locks?: {
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
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: string;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        syntheticLocks?: {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[] & ({
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & Record<Exclude<keyof I["syntheticLocks"][number], keyof SyntheticLock>, never>)[] & Record<Exclude<keyof I["syntheticLocks"], keyof {
            underlyingLockId?: string;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
