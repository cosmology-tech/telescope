import * as _m0 from "protobufjs/minimal";
import { Minter, Params } from "../../../osmosis/mint/v1beta1/mint";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current rewards information. */
    minter: Minter;
    /** params defines all the paramaters of the module. */
    params: Params;
    /** current halven period start epoch */
    halvenStartedEpoch: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        minter?: {
            epochProvisions?: string;
        };
        params?: {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: string;
            reductionFactor?: string;
            distributionProportions?: {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            };
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[];
            mintingRewardsDistributionStartEpoch?: string;
        };
        halvenStartedEpoch?: string;
    } & {
        minter?: {
            epochProvisions?: string;
        } & {
            epochProvisions?: string;
        } & Record<Exclude<keyof I["minter"], "epochProvisions">, never>;
        params?: {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: string;
            reductionFactor?: string;
            distributionProportions?: {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            };
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[];
            mintingRewardsDistributionStartEpoch?: string;
        } & {
            mintDenom?: string;
            genesisEpochProvisions?: string;
            epochIdentifier?: string;
            reductionPeriodInEpochs?: string;
            reductionFactor?: string;
            distributionProportions?: {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            } & {
                staking?: string;
                poolIncentives?: string;
                developerRewards?: string;
                communityPool?: string;
            } & Record<Exclude<keyof I["params"]["distributionProportions"], keyof import("../../../osmosis/mint/v1beta1/mint").DistributionProportions>, never>;
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[] & ({
                address?: string;
                weight?: string;
            } & {
                address?: string;
                weight?: string;
            } & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"][number], keyof import("../../../osmosis/mint/v1beta1/mint").WeightedAddress>, never>)[] & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"], keyof {
                address?: string;
                weight?: string;
            }[]>, never>;
            mintingRewardsDistributionStartEpoch?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        halvenStartedEpoch?: string;
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
