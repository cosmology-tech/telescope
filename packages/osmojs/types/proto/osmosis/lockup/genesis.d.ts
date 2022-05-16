import { PeriodLock, SyntheticLock } from "./lock";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: Long;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        lastLockId?: any;
        locks?: {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        syntheticLocks?: {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[];
    } & {
        lastLockId?: any;
        locks?: {
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
            } & Record<Exclude<keyof I["locks"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["locks"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["locks"][number], keyof PeriodLock>, never>)[] & Record<Exclude<keyof I["locks"], keyof {
            ID?: any;
            owner?: string;
            duration?: string;
            endTime?: Date;
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        syntheticLocks?: {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[] & ({
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        } & Record<Exclude<keyof I["syntheticLocks"][number], keyof SyntheticLock>, never>)[] & Record<Exclude<keyof I["syntheticLocks"], keyof {
            underlyingLockId?: any;
            synthDenom?: string;
            endTime?: Date;
            duration?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
