import * as _m0 from "protobufjs/minimal";
import { Params, DistrInfo } from "../../../osmosis/pool-incentives/v1beta1/incentives";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    lockableDurations: string[];
    distrInfo: DistrInfo;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            mintedDenom?: string;
        };
        lockableDurations?: string[];
        distrInfo?: {
            totalWeight?: string;
            records?: {
                gaugeId?: string;
                weight?: string;
            }[];
        };
    } & {
        params?: {
            mintedDenom?: string;
        } & {
            mintedDenom?: string;
        } & Record<Exclude<keyof I["params"], "mintedDenom">, never>;
        lockableDurations?: string[] & string[] & Record<Exclude<keyof I["lockableDurations"], keyof string[]>, never>;
        distrInfo?: {
            totalWeight?: string;
            records?: {
                gaugeId?: string;
                weight?: string;
            }[];
        } & {
            totalWeight?: string;
            records?: {
                gaugeId?: string;
                weight?: string;
            }[] & ({
                gaugeId?: string;
                weight?: string;
            } & {
                gaugeId?: string;
                weight?: string;
            } & Record<Exclude<keyof I["distrInfo"]["records"][number], keyof import("../../../osmosis/pool-incentives/v1beta1/incentives").DistrRecord>, never>)[] & Record<Exclude<keyof I["distrInfo"]["records"], keyof {
                gaugeId?: string;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["distrInfo"], keyof DistrInfo>, never>;
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
