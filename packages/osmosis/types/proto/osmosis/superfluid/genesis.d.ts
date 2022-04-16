import * as _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/superfluid/params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "../../osmosis/superfluid/superfluid";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    params: Params;
    superfluidAssets: SuperfluidAsset[];
    osmoEquivalentMultipliers: OsmoEquivalentMultiplierRecord[];
    intermediaryAccounts: SuperfluidIntermediaryAccount[];
    intemediaryAccountConnections: LockIdIntermediaryAccountConnection[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            minimumRiskFactor?: string;
        };
        superfluidAssets?: {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        }[];
        osmoEquivalentMultipliers?: {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        }[];
        intermediaryAccounts?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
        }[];
        intemediaryAccountConnections?: {
            lockId?: string;
            intermediaryAccount?: string;
        }[];
    } & {
        params?: {
            minimumRiskFactor?: string;
        } & {
            minimumRiskFactor?: string;
        } & Record<Exclude<keyof I["params"], "minimumRiskFactor">, never>;
        superfluidAssets?: {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        }[] & ({
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        } & {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        } & Record<Exclude<keyof I["superfluidAssets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["superfluidAssets"], keyof {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        }[]>, never>;
        osmoEquivalentMultipliers?: {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        }[] & ({
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        } & {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        } & Record<Exclude<keyof I["osmoEquivalentMultipliers"][number], keyof OsmoEquivalentMultiplierRecord>, never>)[] & Record<Exclude<keyof I["osmoEquivalentMultipliers"], keyof {
            epochNumber?: string;
            denom?: string;
            multiplier?: string;
        }[]>, never>;
        intermediaryAccounts?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
        }[] & ({
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
        } & {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
        } & Record<Exclude<keyof I["intermediaryAccounts"][number], keyof SuperfluidIntermediaryAccount>, never>)[] & Record<Exclude<keyof I["intermediaryAccounts"], keyof {
            denom?: string;
            valAddr?: string;
            gaugeId?: string;
        }[]>, never>;
        intemediaryAccountConnections?: {
            lockId?: string;
            intermediaryAccount?: string;
        }[] & ({
            lockId?: string;
            intermediaryAccount?: string;
        } & {
            lockId?: string;
            intermediaryAccount?: string;
        } & Record<Exclude<keyof I["intemediaryAccountConnections"][number], keyof LockIdIntermediaryAccountConnection>, never>)[] & Record<Exclude<keyof I["intemediaryAccountConnections"], keyof {
            lockId?: string;
            intermediaryAccount?: string;
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
