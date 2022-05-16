import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "./superfluid";
import * as _m0 from "protobufjs/minimal";
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
            assetType?: import("./superfluid").SuperfluidAssetType;
        }[];
        osmoEquivalentMultipliers?: {
            epochNumber?: any;
            denom?: string;
            multiplier?: string;
        }[];
        intermediaryAccounts?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: any;
        }[];
        intemediaryAccountConnections?: {
            lockId?: any;
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
            assetType?: import("./superfluid").SuperfluidAssetType;
        }[] & ({
            denom?: string;
            assetType?: import("./superfluid").SuperfluidAssetType;
        } & {
            denom?: string;
            assetType?: import("./superfluid").SuperfluidAssetType;
        } & Record<Exclude<keyof I["superfluidAssets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["superfluidAssets"], keyof {
            denom?: string;
            assetType?: import("./superfluid").SuperfluidAssetType;
        }[]>, never>;
        osmoEquivalentMultipliers?: {
            epochNumber?: any;
            denom?: string;
            multiplier?: string;
        }[] & ({
            epochNumber?: any;
            denom?: string;
            multiplier?: string;
        } & {
            epochNumber?: any;
            denom?: string;
            multiplier?: string;
        } & Record<Exclude<keyof I["osmoEquivalentMultipliers"][number], keyof OsmoEquivalentMultiplierRecord>, never>)[] & Record<Exclude<keyof I["osmoEquivalentMultipliers"], keyof {
            epochNumber?: any;
            denom?: string;
            multiplier?: string;
        }[]>, never>;
        intermediaryAccounts?: {
            denom?: string;
            valAddr?: string;
            gaugeId?: any;
        }[] & ({
            denom?: string;
            valAddr?: string;
            gaugeId?: any;
        } & {
            denom?: string;
            valAddr?: string;
            gaugeId?: any;
        } & Record<Exclude<keyof I["intermediaryAccounts"][number], keyof SuperfluidIntermediaryAccount>, never>)[] & Record<Exclude<keyof I["intermediaryAccounts"], keyof {
            denom?: string;
            valAddr?: string;
            gaugeId?: any;
        }[]>, never>;
        intemediaryAccountConnections?: {
            lockId?: any;
            intermediaryAccount?: string;
        }[] & ({
            lockId?: any;
            intermediaryAccount?: string;
        } & {
            lockId?: any;
            intermediaryAccount?: string;
        } & Record<Exclude<keyof I["intemediaryAccountConnections"][number], keyof LockIdIntermediaryAccountConnection>, never>)[] & Record<Exclude<keyof I["intemediaryAccountConnections"], keyof {
            lockId?: any;
            intermediaryAccount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
