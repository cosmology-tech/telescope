import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    mintedDenom: string;
}
export interface LockableDurationsInfo {
    lockableDurations: string[];
}
export interface DistrInfo {
    totalWeight: string;
    records: DistrRecord[];
}
export interface DistrRecord {
    gaugeId: Long;
    weight: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        mintedDenom?: string;
    } & {
        mintedDenom?: string;
    } & Record<Exclude<keyof I, "mintedDenom">, never>>(object: I): Params;
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
export declare const DistrInfo: {
    encode(message: DistrInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo;
    fromJSON(object: any): DistrInfo;
    toJSON(message: DistrInfo): unknown;
    fromPartial<I extends {
        totalWeight?: string;
        records?: {
            gaugeId?: any;
            weight?: string;
        }[];
    } & {
        totalWeight?: string;
        records?: {
            gaugeId?: any;
            weight?: string;
        }[] & ({
            gaugeId?: any;
            weight?: string;
        } & {
            gaugeId?: any;
            weight?: string;
        } & Record<Exclude<keyof I["records"][number], keyof DistrRecord>, never>)[] & Record<Exclude<keyof I["records"], keyof {
            gaugeId?: any;
            weight?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof DistrInfo>, never>>(object: I): DistrInfo;
};
export declare const DistrRecord: {
    encode(message: DistrRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord;
    fromJSON(object: any): DistrRecord;
    toJSON(message: DistrRecord): unknown;
    fromPartial<I extends {
        gaugeId?: any;
        weight?: string;
    } & {
        gaugeId?: any;
        weight?: string;
    } & Record<Exclude<keyof I, keyof DistrRecord>, never>>(object: I): DistrRecord;
};
