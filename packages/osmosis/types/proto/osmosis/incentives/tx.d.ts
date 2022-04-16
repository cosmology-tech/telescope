import * as _m0 from "protobufjs/minimal";
import { QueryCondition } from "../../osmosis/lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
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
    numEpochsPaidOver: string;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgAddToGauge {
    owner: string;
    gaugeId: string;
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
    } & {
        isPerpetual?: boolean;
        owner?: string;
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
        gaugeId?: string;
        rewards?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        owner?: string;
        gaugeId?: string;
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
