import { Params } from "./params";
import { Gauge } from "./gauge";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module */
    params: Params;
    gauges: Gauge[];
    lockableDurations: string[];
    lastGaugeId: Long;
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
            id?: any;
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
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        lockableDurations?: string[];
        lastGaugeId?: any;
    } & {
        params?: {
            distrEpochIdentifier?: string;
        } & {
            distrEpochIdentifier?: string;
        } & Record<Exclude<keyof I["params"], "distrEpochIdentifier">, never>;
        gauges?: {
            id?: any;
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
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            id?: any;
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
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            id?: any;
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
            numEpochsPaidOver?: any;
            filledEpochs?: any;
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
            id?: any;
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
            numEpochsPaidOver?: any;
            filledEpochs?: any;
            distributedCoins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
        lastGaugeId?: any;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
