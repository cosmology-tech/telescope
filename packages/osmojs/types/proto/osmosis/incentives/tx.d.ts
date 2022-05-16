import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgCreateGauge {
    /**
     * flag to show if it's perpetual or multi-epoch
     * distribution incentives by third party
     */
    isPerpetual: boolean;
    owner: string;
    /** distribute condition of a lock which meet one of these conditions */
    distributeTo: QueryCondition;
    /** can distribute multiple coins */
    coins: Coin[];
    /** distribution start time */
    startTime: Date;
    /** number of epochs distribution will be done */
    numEpochsPaidOver: Long;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgAddToGauge {
    owner: string;
    gaugeId: Long;
    rewards: Coin[];
}
export interface MsgAddToGaugeResponse {
}
export declare const MsgCreateGauge: {
    encode(message: MsgCreateGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge;
    fromJSON(object: any): MsgCreateGauge;
    toJSON(message: MsgCreateGauge): unknown;
    fromPartial<I extends {
        isPerpetual?: boolean;
        owner?: string;
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
    } & {
        isPerpetual?: boolean;
        owner?: string;
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
        numEpochsPaidOver?: any;
    } & Record<Exclude<keyof I, keyof MsgCreateGauge>, never>>(object: I): MsgCreateGauge;
};
export declare const MsgCreateGaugeResponse: {
    encode(_: MsgCreateGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse;
    fromJSON(_: any): MsgCreateGaugeResponse;
    toJSON(_: MsgCreateGaugeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateGaugeResponse;
};
export declare const MsgAddToGauge: {
    encode(message: MsgAddToGauge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge;
    fromJSON(object: any): MsgAddToGauge;
    toJSON(message: MsgAddToGauge): unknown;
    fromPartial<I extends {
        owner?: string;
        gaugeId?: any;
        rewards?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        owner?: string;
        gaugeId?: any;
        rewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["rewards"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["rewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgAddToGauge>, never>>(object: I): MsgAddToGauge;
};
export declare const MsgAddToGaugeResponse: {
    encode(_: MsgAddToGaugeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse;
    fromJSON(_: any): MsgAddToGaugeResponse;
    toJSON(_: MsgAddToGaugeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgAddToGaugeResponse;
};
