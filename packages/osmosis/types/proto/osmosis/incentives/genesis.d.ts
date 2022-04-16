import * as _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/incentives/params";
import { Gauge } from "../../osmosis/incentives/gauge";
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module */
    params: Params;
    gauges: Gauge[];
    lockableDurations: string[];
    lastGaugeId: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            distrEpochIdentifier?: string;
        };
        gauges?: {
            id?: string;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
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
        }[];
        lockableDurations?: string[];
        lastGaugeId?: string;
    } & {
        params?: {
            distrEpochIdentifier?: string;
        } & {
            distrEpochIdentifier?: string;
        } & Record<Exclude<keyof I["params"], "distrEpochIdentifier">, never>;
        gauges?: {
            id?: string;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
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
        }[] & ({
            id?: string;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
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
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & {
                lockQueryType?: import("../lockup/lock").LockQueryType;
                denom?: string;
                duration?: string;
                timestamp?: Date;
            } & Record<Exclude<keyof I["gauges"][number]["distributeTo"], keyof import("../lockup/lock").QueryCondition>, never>;
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["gauges"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["gauges"][number]["coins"], keyof {
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
            } & Record<Exclude<keyof I["gauges"][number]["distributedCoins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["gauges"][number]["distributedCoins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["gauges"][number], keyof Gauge>, never>)[] & Record<Exclude<keyof I["gauges"], keyof {
            id?: string;
            isPerpetual?: boolean;
            distributeTo?: {
                lockQueryType?: import("../lockup/lock").LockQueryType;
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
        }[]>, never>;
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
        lastGaugeId?: string;
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
